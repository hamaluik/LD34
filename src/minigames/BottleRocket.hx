package minigames;

import tusk.debug.Log;
import tusk.lib.comp.Camera2DComponent;
import tusk.lib.comp.MaterialComponent;
import tusk.lib.comp.TransformComponent;
import tusk.lib.proc.Camera2DProcessor;
import tusk.lib.proc.MaterialProcessor;
import tusk.lib.proc.Renderer2DProcessor;
import tusk.lib.proc.TransformProcessor;
import tusk.Tusk;
import tusk.Scene;
import tusk.Entity;
import tusk.resources.*;
import tusk.lib.comp.TextComponent;
import tusk.lib.comp.*;
import tusk.lib.proc.*;

import tusk.modules.tiled.TileMap;

import promhx.Deferred;
import promhx.Promise;
import promhx.Stream;

import glm.Vec2;
import glm.Vec3;
import glm.Quat;
import glm.Vec4;

import minigames.bottlerocket.*;

import tusk.events.*;

class BottleRocket extends Scene {
	public function new() {
		super('BottleRocket');
	}

	private var quad:Mesh;
	private var particlesMaterial:Material;
	private var backgroundMaterial:Material;
	private var spriteMaterial:Material;
	private var backgroundTileMap:TileMap;
	private var backgroundMesh:Mesh;
	private var controlsMaterial:Material;

	private var textMesh:Mesh;
	private var font:Font;
	private var fontMat:Material;

	private var circleOutMat:Material;

	private var countdownMusic:Sound;
	private var pumpMusic:Sound;
	private var winMusic:Sound;
	private var whooshSound:Sound;

	private function loadAssets():Promise<Scene> {
		var def:Deferred<Scene> = new Deferred<Scene>();
		var prom:Promise<Scene> = def.promise();

		// load assets!
		Promise.when(
			tusk.defaults.Primitives.loadQuad(),
			tusk.defaults.Materials.loadParticlesUntextured(),
			SpriteMaterial.load(),
			BackgroundMaterial.load(),
			Tusk.assets.loadTexture(tusk.Files.sprites___bottlerocket__png),
			Tusk.assets.loadTexture(tusk.Files.tilemaps___bottlerocketbackground__png),
			Tusk.assets.loadText(tusk.Files.tilemaps___bottlerocketbackground__json),
			Tusk.assets.loadTexture(tusk.Files.sprites___bottlerocketcontrols__png),
			tusk.defaults.Materials.loadUnlitTextured(),
			tusk.defaults.Primitives.loadTextMesh(),
			tusk.defaults.Fonts.loadSubatomic_Screen(),
			tusk.defaults.Materials.loadTextBasic(),
			tusk.defaults.Materials.loadEffectCircleOut(),
			Tusk.assets.loadSound(tusk.Files.sounds___countdown__ogg),
			Tusk.assets.loadSound(tusk.Files.sounds___bottlerocketpump__ogg),
			Tusk.assets.loadSound(tusk.Files.sounds___wintrumpet__ogg),
			Tusk.assets.loadSound(tusk.Files.sounds___bottlerocketwhoosh__ogg)
		).then(function(quad:Mesh, particlesMaterial:Material, spriteMaterial:Material, backgroundMaterial:Material, spriteSheet:Texture, backgroundSheet:Texture, backgroundJSON:Text, controls:Texture, unlitTextured:Material, textMesh:Mesh, font:Font, fontMat:Material, circleOutMat:Material, countdownMusic:Sound, pumpMusic:Sound, winMusic:Sound, whooshSound:Sound) {
			this.quad = quad;
			this.particlesMaterial = particlesMaterial;

			this.circleOutMat = circleOutMat;

			this.textMesh = textMesh;
			this.font = font;
			this.fontMat = fontMat;
			this.fontMat.textures = new Array<Texture>();
			this.fontMat.textures.push(font.texture);

			this.controlsMaterial = unlitTextured;
			this.controlsMaterial.textures = new Array<Texture>();
			this.controlsMaterial.textures.push(controls);

			this.spriteMaterial = spriteMaterial;
			this.spriteMaterial.textures = new Array<Texture>();
			this.spriteMaterial.textures.push(spriteSheet);

			this.backgroundMaterial = backgroundMaterial;
			this.backgroundMaterial.textures = new Array<Texture>();
			this.backgroundMaterial.textures.push(backgroundSheet);

			this.countdownMusic = countdownMusic;
			this.pumpMusic = pumpMusic;
			this.winMusic = winMusic;
			this.whooshSound = whooshSound;

			backgroundTileMap = TileMap.fromJSON(backgroundJSON.text);
			TileMap.buildMesh(backgroundTileMap, 'tilemap.bottlerocket').then(function(mesh:Mesh) {
				backgroundMesh = mesh;
				def.resolve(this);
			});
		}).catchError(function(err:Dynamic) {
			Log.error(err);
			def.throwError('Failed to load assets!');
		});

		return prom;
	}

	override public function onLoad(event:LoadEvent) {
		if(event.scene != this) return;
		Log.info("Loading bottle rocket scene..");

		var loadComplete:Promise<Scene> = loadAssets();
		var loadingScreen:LoadingScreen = new LoadingScreen('Bottle Rocket Blast', loadComplete);
		Tusk.pushScene(loadingScreen);
		Promise.when(loadingScreen.sceneDone.promise(), loadComplete).then(function(_, _) {
			Tusk.removeScene(loadingScreen);
			Camera2DProcessor.cameras = new Array<Camera2DComponent>();
			// start the game!
			Log.info('Starting bottle rocket!');

			this.useProcessor(new VelocityProcessor());
			this.useProcessor(new TimedPromiseProcessor());
			this.useProcessor(new TimerDisplayProcessor());
			this.useProcessor(new PumpProcessor());
			this.useProcessor(new MeshProcessor());
			this.useProcessor(new MaterialProcessor());
			this.useProcessor(new Camera2DProcessor());
			this.useProcessor(new TransformTrackerProcessor());
			this.useProcessor(new TransformProcessor());
			this.useProcessor(new TextProcessor());
			this.useProcessor(new Renderer2DProcessor(new Vec4(110, 175, 231, 255) / 255));
			this.useProcessor(new CircleEffectRendererProcessor());
			this.useProcessor(new SoundProcessor());

			// create the camera
			var w:Float = Tusk.instance.app.window.width;
			var h:Float = Tusk.instance.app.window.height;
			var camera:Entity = new Entity(this, 'Camera', [
				new TransformComponent(new Vec3(0, 0, 0), Quat.identity(), new Vec3(1, 1, 1)),
				new Camera2DComponent(new Vec2(w, h) / -2.0, new Vec2(w, h) / 2.0, -100, 100)
			]);
			entities.push(camera);

			// the tilemap in the background
			entities.push(new Entity(this, 'TileMap', [
				new TransformComponent(new Vec3((backgroundTileMap.width * backgroundTileMap.tilewidth * 2) / -2,
					Tusk.game.height / -2 - (backgroundTileMap.tileheight * 2 * 2), 0), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(backgroundMesh),
				new MaterialComponent(backgroundMaterial)
			]));

			var groundY:Float = (Tusk.game.height / -2) + (2 * backgroundTileMap.tileheight);

			// create the pump base
			var pumpBaseMesh:Mesh = quad.clone('br.pumpbasemesh');
			for(uv in pumpBaseMesh.uvs) {
				uv.y = uv.y / 2 + 0.5;
			}
			// create the pump
			var pumpMesh:Mesh = quad.clone('br.pumpmesh');
			for(uv in pumpMesh.uvs) {
				uv.x = uv.x / 2 + 0.5;
				uv.y /= 2;
			}
			// create the bottleRocket
			var bottleRocketMesh:Mesh = quad.clone('br.bottleRocketmesh');
			for(uv in bottleRocketMesh.uvs) {
				uv.x /= 2;
				uv.y /= 2;
			}
			var red:Vec3 = new Vec3(1.0, 0.0, 0.0);
			var yellow:Vec3 = new Vec3(1.0, 1.0, 0.0);

			entities.push(new Entity(this, 'P1 Pump Base', [
				new TransformComponent(new Vec3(-256, groundY + 128, -1), Quat.identity(), new Vec3(-256, 128, 128)),
				new MeshComponent(pumpBaseMesh),
				new MaterialComponent(spriteMaterial),
				new CustomUniformsComponent(function() {
					spriteMaterial.setVec3('colour', red);
				})
			]));
			entities.push(new Entity(this, 'P2 Pump Base', [
				new TransformComponent(new Vec3(256, groundY + 128, -1), Quat.identity(), new Vec3(256, 128, 128)),
				new MeshComponent(pumpBaseMesh),
				new MaterialComponent(spriteMaterial),
				new CustomUniformsComponent(function() {
					spriteMaterial.setVec3('colour', yellow);
				})
			]));

			// create the actual pumps
			// top: 72
			// bottom: 0
			var p1PumpEntity:Entity = new Entity(this, 'P1 Pump', [
				new TransformComponent(new Vec3(-300, groundY + 128 + 72, -0.5), Quat.identity(), new Vec3(128, 128, 128)),
				new MeshComponent(pumpMesh),
				new MaterialComponent(spriteMaterial)
			]);
			entities.push(p1PumpEntity);
			var p2PumpEntity:Entity = new Entity(this, 'P2 Pump', [
				new TransformComponent(new Vec3(320, groundY + 128 + 72, -0.5), Quat.identity(), new Vec3(128, 128, 128)),
				new MeshComponent(pumpMesh),
				new MaterialComponent(spriteMaterial),
			]);
			entities.push(p2PumpEntity);

			// create the bottle rockets
			var p1RocketTransform:TransformComponent = new TransformComponent(new Vec3(-192, groundY + 128 + 8, -0.75), Quat.identity(), new Vec3(128, 128, 128));
			var p1Rocket:Entity = new Entity(this, 'P1 Rocket', [
				p1RocketTransform,
				new MeshComponent(bottleRocketMesh),
				new MaterialComponent(spriteMaterial),
				new CustomUniformsComponent(function() {
					spriteMaterial.setVec3('colour', red);
				})
			]);
			entities.push(p1Rocket);
			var p2RocketTransform:TransformComponent = new TransformComponent(new Vec3(192, groundY + 128 + 8, -0.75), Quat.identity(), new Vec3(128, 128, 128));
			var p2Rocket:Entity = new Entity(this, 'P2 Rocket', [
				p2RocketTransform,
				new MeshComponent(bottleRocketMesh),
				new MaterialComponent(spriteMaterial),
				new CustomUniformsComponent(function() {
					spriteMaterial.setVec3('colour', yellow);
				})
			]);
			entities.push(p2Rocket);

			// show the controls
			/*var controlsEntity:Entity = new Entity(this, 'Controls', [
				new TransformComponent(new Vec3(0, -180, 0), Quat.identity(), new Vec3(128, 128, 128)),
				new MeshComponent(quad),
				new MaterialComponent(controlsMaterial)
			]);
			entities.push(controlsEntity);*/

			var p1Pump:PumpComponent;
			var p2Pump:PumpComponent;

			entities.push(new Entity(this, 'Countdown Music', [
				new SoundComponent(countdownMusic.path, true)
			]));

			// start the countdown!
			var countdownText:TextComponent = new TextComponent(font, '3',
					TextAlign.Centre, TextVerticalAlign.Centre,
					new Vec4(1, 1, 1, 1));
			var countdownTimer:TimedPromiseComponent = new TimedPromiseComponent(1.0);
			var countdownTransform:TransformComponent = new TransformComponent(new Vec3(0, 0, -0.99), Quat.identity(), new Vec3(16, 16, 16));
			var countdownEntity:Entity = new Entity(this, 'Countdown', [
				countdownTransform,
				new MeshComponent(textMesh.clone('br.countdowntextmesh')),
				new MaterialComponent(fontMat.path),
				countdownText,
				countdownTimer
			]);
			entities.push(countdownEntity);
			var p1V:VelocityComponent;
			var p2V:VelocityComponent;
			var pumpSound:SoundComponent;
			countdownTimer.done.pipe(function(_) {
				countdownText.text = '2';
				countdownTimer.t = 0;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				countdownText.text = '1';
				countdownTimer.t = 0;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				countdownText.text = 'Go!';
				p1Pump = new PumpComponent(0, groundY + 128 + 72);
				p1PumpEntity.push(p1Pump);
				p2Pump = new PumpComponent(1, groundY + 128 + 72);
				p2PumpEntity.push(p2Pump);

				// in a second, start displaying the time left
				haxe.Timer.delay(function() {
					// add the pump sound
					pumpSound = new SoundComponent(pumpMusic.path, true);
					entities.push(new Entity(this, 'PumpSound', [pumpSound]));
					countdownEntity.push(new TimerDisplayComponent());
				}, 1000);

				// start the pump timer
				countdownTimer.t = 0;
				countdownTimer.wait = 10;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				// stop pumping!
				//Tusk.removeEntity(controlsEntity);
				p1PumpEntity.removeType(PumpComponent.tid);
				p2PumpEntity.removeType(PumpComponent.tid);
				countdownEntity.removeType(TimerDisplayComponent.tid);
				
				countdownTimer.t = 0;
				countdownTimer.wait = 1;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				pumpSound.stop = true;
				countdownText.text = 'Launch!';
				p1V = new VelocityComponent(p1Pump.pressure * 512, p1RocketTransform.position.y);
				p2V = new VelocityComponent(p2Pump.pressure * 512, p2RocketTransform.position.y);
				p1Rocket.push(p1V);
				p2Rocket.push(p2V);
				camera.push(new TransformTrackerComponent(p1RocketTransform, p2RocketTransform));
				entities.push(new Entity(this, '', [new SoundComponent(whooshSound.path, true)]));

				var def:Deferred<Bool> = new Deferred<Bool>();
				Promise.when(p1V.done, p2V.done).then(function(_, _) { def.resolve(true); });
				return def.promise();
			}).pipe(function(_) {
				// figure out who won
				var winner:Int = -1;
				if(p1V.maxHeight > p2V.maxHeight) winner = 0;
				else if(p2V.maxHeight > p1V.maxHeight) winner = 1;

				countdownTransform.scale.set(4, 4, 4);
				countdownTransform.lastScale.copy(countdownTransform.scale);
				if(winner >= 0) {
					countdownText.text = GameTracker.player[winner].name + ' wins!';
					GameTracker.player[winner].score += 1;
				}
				else {
					countdownText.text = 'Tie!';
				}

				entities.push(new Entity(this, 'WinMusic', [new SoundComponent(winMusic.path, true)]));
				
				// remove the velocity components
				p1Rocket.removeType(VelocityComponent.tid);
				p2Rocket.removeType(VelocityComponent.tid);

				// reset the time
				countdownTimer.t = 0;
				countdownTimer.wait = 3;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				// circle out
				var cec:CircleEffectComponent = new CircleEffectComponent(false);
				entities.push(new Entity(this, 'Circle Effect', [
					new TransformComponent(new Vec3(0, 0, 0.1), Quat.identity(), new Vec3(1024, 1024, 1024)),
					new MeshComponent(quad.path),
					new MaterialComponent(circleOutMat.path),
					cec
				]));
				return cec.done;
			}).then(function(_) {
				sceneDone.resolve(this);
			});
		});
	}
}
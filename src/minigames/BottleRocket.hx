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

import glm.Vec2;
import glm.Vec3;
import glm.Quat;
import glm.Vec4;

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

	private function loadAssets():Promise<Scene> {
		var def:Deferred<Scene> = new Deferred<Scene>();
		var prom:Promise<Scene> = def.promise();

		// load assets!
		Promise.when(
			tusk.defaults.Primitives.loadQuad(),
			tusk.defaults.Materials.loadParticlesUntextured(),
			minigames.bottlerocket.SpriteMaterial.load(),
			minigames.bottlerocket.BackgroundMaterial.load(),
			Tusk.assets.loadTexture(tusk.Files.sprites___bottlerocket__png),
			Tusk.assets.loadTexture(tusk.Files.tilemaps___bottlerocketbackground__png),
			Tusk.assets.loadText(tusk.Files.tilemaps___bottlerocketbackground__json),
			Tusk.assets.loadTexture(tusk.Files.sprites___bottlerocketcontrols__png),
			tusk.defaults.Materials.loadUnlitTextured(),
			tusk.defaults.Primitives.loadTextMesh(),
			tusk.defaults.Fonts.loadSubatomic_Screen(),
			tusk.defaults.Materials.loadTextBasic()
		).then(function(quad:Mesh, particlesMaterial:Material, spriteMaterial:Material, backgroundMaterial:Material, spriteSheet:Texture, backgroundSheet:Texture, backgroundJSON:Text, controls:Texture, unlitTextured:Material, textMesh:Mesh, font:Font, fontMat:Material) {
			this.quad = quad;
			this.particlesMaterial = particlesMaterial;

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
		/*var loadingScreen:LoadingScreen = new LoadingScreen('Bottle Rocket Blast', loadComplete);
		Tusk.pushScene(loadingScreen);
		Promise.when(loadingScreen.sceneDone.promise(), loadComplete).then(function(_, _) {
			Tusk.removeScene(loadingScreen);*/
		loadComplete.then(function(_) {
			Camera2DProcessor.cameras = new Array<Camera2DComponent>();
			Log.info('Num cameras: ${Camera2DProcessor.cameras.length}');
			// start the game!
			Log.info('Starting bottle rocket!');

			this.useProcessor(new minigames.bottlerocket.VelocityProcessor());
			this.useProcessor(new TimedPromiseProcessor());
			this.useProcessor(new minigames.bottlerocket.TimerDisplayProcessor());
			this.useProcessor(new minigames.bottlerocket.PumpProcessor());
			this.useProcessor(new MeshProcessor());
			this.useProcessor(new MaterialProcessor());
			this.useProcessor(new Camera2DProcessor());
			this.useProcessor(new minigames.bottlerocket.TransformTrackerProcessor());
			this.useProcessor(new TransformProcessor());
			this.useProcessor(new TextProcessor());
			this.useProcessor(new Renderer2DProcessor(new Vec4(110, 175, 231, 255) / 255));

			// create the camera
			var w:Float = Tusk.instance.app.window.width;
			var h:Float = Tusk.instance.app.window.height;
			var camera:Entity = new Entity(this, 'Camera', [
				new TransformComponent(new Vec3(0, 0, 0), Quat.identity(), new Vec3(1, 1, 1)),
				new Camera2DComponent(new Vec2(w, h) / -2.0, new Vec2(w, h) / 2.0, -100, 100)
			]);
			entities.push(camera);
			Log.info('Num cameras: ${Camera2DProcessor.cameras.length}');

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
			entities.push(new Entity(this, 'Controls', [
				new TransformComponent(new Vec3(0, -180, 0), Quat.identity(), new Vec3(128, 128, 128)),
				new MeshComponent(quad),
				new MaterialComponent(controlsMaterial)
			]));

			var p1Pump:minigames.bottlerocket.PumpComponent;
			var p2Pump:minigames.bottlerocket.PumpComponent;

			// start the countdown!
			var countdownText:TextComponent = new TextComponent(font, '3',
					TextAlign.Centre, TextVerticalAlign.Centre,
					new Vec4(1, 1, 1, 1));
			var countdownTimer:TimedPromiseComponent = new TimedPromiseComponent(1.0);
			var countdownEntity:Entity = new Entity(this, 'Countdown', [
				new TransformComponent(new Vec3(0, 0, -0.99), Quat.identity(), new Vec3(16, 16, 16)),
				new MeshComponent(textMesh.clone('br.countdowntextmesh')),
				new MaterialComponent(fontMat.path),
				countdownText,
				countdownTimer
			]);
			entities.push(countdownEntity);
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
				p1Pump = new minigames.bottlerocket.PumpComponent(0, groundY + 128 + 72);
				p1PumpEntity.push(p1Pump);
				p2Pump = new minigames.bottlerocket.PumpComponent(1, groundY + 128 + 72);
				p2PumpEntity.push(p2Pump);

				// in a second, start displaying the time left
				haxe.Timer.delay(function() {
					countdownEntity.push(new minigames.bottlerocket.TimerDisplayComponent());
				}, 1000);

				// start the pump timer
				countdownTimer.t = 0;
				countdownTimer.wait = 10;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				// stop pumping!
				p1PumpEntity.removeType(minigames.bottlerocket.PumpComponent.tid);
				p2PumpEntity.removeType(minigames.bottlerocket.PumpComponent.tid);
				countdownEntity.removeType(minigames.bottlerocket.TimerDisplayComponent.tid);
				
				countdownTimer.t = 0;
				countdownTimer.wait = 1;
				countdownTimer.reset();
				return countdownTimer.done;
			}).then(function(_) {
				countdownText.text = 'Launch!';

				Log.info(p1Pump.pressure);
				p1Rocket.push(new minigames.bottlerocket.VelocityComponent(p1Pump.pressure * 512, p1RocketTransform.position.y));
				p2Rocket.push(new minigames.bottlerocket.VelocityComponent(p2Pump.pressure * 512, p2RocketTransform.position.y));
				camera.push(new minigames.bottlerocket.TransformTrackerComponent(p1RocketTransform, p2RocketTransform));
			});
		});
	}
}
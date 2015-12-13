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

import tusk.events.*;

import minigames.sledtillyouredead.*;

class SledTillYoureDead extends Scene {
	public function new() {
		super('SledTillYoureDead');
	}

	private var quad:Mesh;
	private var particlesMaterial:Material;

	private var textMesh:Mesh;
	private var font:Font;
	private var fontMat:Material;

	private var circleOutMat:Material;

	private var countdownMusic:Sound;

	private var sledMaterial:Material;

	private var sledTileMap:TileMap;
	private var sledBGMaterial:Material;
	private var sledBGMesh:Mesh;

	private function loadAssets():Promise<Scene> {
		var def:Deferred<Scene> = new Deferred<Scene>();
		var prom:Promise<Scene> = def.promise();

		// load assets!
		Promise.when(
			tusk.defaults.Primitives.loadQuad(),
			tusk.defaults.Materials.loadParticlesUntextured(),
			tusk.defaults.Primitives.loadTextMesh(),
			tusk.defaults.Fonts.loadSubatomic_Screen(),
			tusk.defaults.Materials.loadTextBasic(),
			tusk.defaults.Materials.loadEffectCircleOut(),
			Tusk.assets.loadSound(tusk.Files.sounds___countdown__ogg),
			SpriteMaterial.load(),
			Tusk.assets.loadTexture(tusk.Files.sprites___sled__png),
			Tusk.assets.loadText(tusk.Files.tilemaps___sledside__json),
			Tusk.assets.loadTexture(tusk.Files.tilemaps___sledbg__png),
			tusk.defaults.Materials.loadUnlitTextured()
		).then(function(quad:Mesh, particlesMaterial:Material, textMesh:Mesh, font:Font, fontMat:Material, circleOutMat:Material, countdownMusic:Sound,
			sledMaterial:Material, sledTexture:Texture,
			sledSideSrc:Text, sideBG:Texture, sledBGMaterial:Material) {
			this.quad = quad;
			this.particlesMaterial = particlesMaterial;

			this.circleOutMat = circleOutMat;

			this.countdownMusic = countdownMusic;

			this.textMesh = textMesh;
			this.font = font;
			this.fontMat = fontMat;
			this.fontMat.textures = new Array<Texture>();
			this.fontMat.textures.push(font.texture);

			this.sledMaterial = sledMaterial;
			this.sledMaterial.textures = new Array<Texture>();
			this.sledMaterial.textures.push(sledTexture);

			this.sledBGMaterial = sledBGMaterial;
			this.sledBGMaterial.textures = new Array<Texture>();
			this.sledBGMaterial.textures.push(sideBG);

			sledTileMap = TileMap.fromJSON(sledSideSrc.text);
			TileMap.buildMesh(sledTileMap, 'tilemap.sled').then(function(mesh:Mesh) {
				sledBGMesh = mesh;
				def.resolve(this);
			});
		}).catchError(function(err:Dynamic) {
			Log.error(err);
			def.throwError('Failed to load assets!');
		});

		return prom;
	}

	public static var obstacles:Array<TransformComponent> = new Array<TransformComponent>();
	private var treeMesh:Mesh;
	private var rockMesh:Mesh;
	private var flagMesh:Mesh;
	private function createObstacle() {
		var mesh:Mesh = switch(tusk.math.Random.int(0, 2)) {
			default: treeMesh;
			case 1: rockMesh;
			case 2: flagMesh;
		}

		var x:Float = tusk.math.Random.float(-380, 380);
		var transform:TransformComponent = new TransformComponent(new Vec3(x, Tusk.game.height / -2 - 64, -0.5), Quat.identity(), new Vec3(64, 64, 64));
		entities.push(new Entity(this, 'Obstacle', [
			transform,
			new MeshComponent(mesh),
			new MaterialComponent(sledBGMaterial),
			new ScrollComponent(Tusk.game.height / 2 + 64),
			new CollisionComponent(16, 1)
		]));
		obstacles.push(transform);
	}

	override public function onLoad(event:LoadEvent) {
		if(event.scene != this) return;
		Log.info("Loading sled till you're dead scene..");

		var loadComplete:Promise<Scene> = loadAssets();
		/*var loadingScreen:LoadingScreen = new LoadingScreen('Sled Till You\'re Dead!', loadComplete);
		Tusk.pushScene(loadingScreen);
		Promise.when(loadingScreen.sceneDone.promise(), loadComplete).then(function(_, _) {
			Tusk.removeScene(loadingScreen);*/
		loadComplete.then(function(_) {			
			Camera2DProcessor.cameras = new Array<Camera2DComponent>();
			// start the game!
			Log.info('Starting sled till you\'re dead!');

			this.useProcessor(new CollisionProcessor());
			this.useProcessor(new AnimatedSledProcessor());
			this.useProcessor(new MovementProcessor());
			this.useProcessor(new ScrollProcessor());
			this.useProcessor(new SpawnProcessor());
			this.useProcessor(new TimedPromiseProcessor());
			this.useProcessor(new MeshProcessor());
			this.useProcessor(new MaterialProcessor());
			this.useProcessor(new Camera2DProcessor());
			this.useProcessor(new TransformProcessor());
			this.useProcessor(new TextProcessor());
			this.useProcessor(new Renderer2DProcessor(new Vec4(0.9, 0.9, 0.9, 1)));
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

			// create the side borders
			entities.push(new Entity(this, 'LeftBorder', [
				new TransformComponent(new Vec3(Tusk.game.width / -2, Tusk.game.height / -2 - 128, 0), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(sledBGMesh),
				new MaterialComponent(sledBGMaterial),
				new ScrollComponent(Tusk.game.height / -2, true, 64)
			]));
			entities.push(new Entity(this, 'RightBorder', [
				new TransformComponent(new Vec3(Tusk.game.width / 2, Tusk.game.height / -2 - 128, 0), Quat.identity(), new Vec3(-2, 2, 2)),
				new MeshComponent(sledBGMesh),
				new MaterialComponent(sledBGMaterial),
				new ScrollComponent(Tusk.game.height / -2, true, 64)
			]));

			// create P1 sled
			var sledMesh1:Mesh = quad.clone('sled.mesh1');
			for(uv in sledMesh1.uvs) {
				uv.x /= 4;
			}
			var sledMesh2:Mesh = sledMesh1.clone('sled.mesh2');
			var p1Collision:CollisionComponent = new CollisionComponent(16, 0);
			entities.push(new Entity(this, 'P1 Sled', [
				new TransformComponent(new Vec3(-92, 192, -1), Quat.identity(), new Vec3(64, 64, 64)),
				new MeshComponent(sledMesh1),
				new MaterialComponent(sledMaterial),
				new CustomUniformsComponent(function() {
					sledMaterial.setVec3('colour', GameTracker.player[0].colour);
				}),
				new AnimatedSledComponent(sledMesh1, 4, 15),
				new MovementComponent(0),
				p1Collision
			]));
			var p2Collision:CollisionComponent = new CollisionComponent(16, 0);
			entities.push(new Entity(this, 'P2 Sled', [
				new TransformComponent(new Vec3(92, 192, -1), Quat.identity(), new Vec3(64, 64, 64)),
				new MeshComponent(sledMesh2),
				new MaterialComponent(sledMaterial),
				new CustomUniformsComponent(function() {
					sledMaterial.setVec3('colour', GameTracker.player[1].colour);
				}),
				new AnimatedSledComponent(sledMesh2, 4, 15),
				new MovementComponent(1),
				p2Collision
			]));

			// prepare to create some obstacles!
			treeMesh = quad.clone('sled.mesh.tree');
			treeMesh.uvs[0].set(0.5, 1.0);
			treeMesh.uvs[1].set(1.0, 1.0);
			treeMesh.uvs[2].set(1.0, 0.5);
			treeMesh.uvs[3].set(1.0, 0.5);
			treeMesh.uvs[4].set(0.5, 0.5);
			treeMesh.uvs[5].set(0.5, 1.0);
			rockMesh = quad.clone('sled.mesh.rock');
			rockMesh.uvs[0].set(0.5, 0.5);
			rockMesh.uvs[1].set(1.0, 0.5);
			rockMesh.uvs[2].set(1.0, 0.0);
			rockMesh.uvs[3].set(1.0, 0.0);
			rockMesh.uvs[4].set(0.5, 0.0);
			rockMesh.uvs[5].set(0.5, 0.5);
			flagMesh = quad.clone('sled.mesh.flag');
			flagMesh.uvs[0].set(0.0, 1.0);
			flagMesh.uvs[1].set(0.5, 1.0);
			flagMesh.uvs[2].set(0.5, 0.5);
			flagMesh.uvs[3].set(0.5, 0.5);
			flagMesh.uvs[4].set(0.0, 0.5);
			flagMesh.uvs[5].set(0.0, 1.0);

			// create the countdown music
			entities.push(new Entity(this, 'Countdown Music', [
				new SoundComponent(countdownMusic.path, true)
			]));

			// start the countdown!
			var countdownText:TextComponent = new TextComponent(font, '3',
					TextAlign.Centre, TextVerticalAlign.Centre,
					new Vec4(0, 0, 0, 1));
			var countdownTimer:TimedPromiseComponent = new TimedPromiseComponent(1.0);
			var countdownTransform:TransformComponent = new TransformComponent(new Vec3(0, 0, -0.99), Quat.identity(), new Vec3(8, 8, 8));
			var countdownEntity:Entity = new Entity(this, 'Countdown', [
				countdownTransform,
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

				// in a second, start displaying the time left
				haxe.Timer.delay(function() {
					// remove the text
					countdownText.text = '';
				}, 1000);

				// start the game!

				// setup the obstacle spawning system
				entities.push(new Entity(this, 'Spawner', [new SpawnComponent(createObstacle)]));

				// figure out who hit something first
				var hitDef:Deferred<Int> = new Deferred<Int>();
				var hitPromise:Promise<Int> = hitDef.promise();
				p1Collision.done.then(function(_) { if(!hitPromise.isResolved()) hitDef.resolve(0); });
				p2Collision.done.then(function(_) { if(!hitPromise.isResolved()) hitDef.resolve(1); });
				return hitPromise;
			}).pipe(function(player:Int) {
				Log.info('${GameTracker.player[player].name} hit an obstacle!');

				// prepare for the end!
				for(entity in entities) {
					// stop moving
					if(entity.hasType(ScrollComponent.tid)) entity.removeType(ScrollComponent.tid);
					// stop spawning
					if(entity.name == 'Spawner') Tusk.removeEntity(entity);
					// stop animating
					if(entity.hasType(AnimatedSledComponent.tid)) entity.removeType(AnimatedSledComponent.tid);
				}

				// show who won
				countdownText.text = '${GameTracker.player[1 - player].name} wins!';
				countdownTransform.scale.set(4, 4, 4);
				countdownTransform.lastScale.copy(countdownTransform.scale);

				// give em a point!
				GameTracker.player[1 - player].score++;

				// and delay
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
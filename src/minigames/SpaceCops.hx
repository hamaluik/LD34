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

import minigames.spacecops.*;

class SpaceCops extends Scene {
	private static var instance:SpaceCops;
	public function new() {
		instance = this;
		super('SpaceCops');
	}

	private var quad:Mesh;
	private var particlesMaterial:Material;

	private var textMesh:Mesh;
	private var font:Font;
	private var fontMat:Material;

	private var circleOutMat:Material;

	private var countdownMusic:Sound;

	private var starMaterial:Material;
	private var copMaterial:Material;
	private var bulletMaterial:Material;
	private var explosionMaterial:Material;
	private var explosionMesh:Mesh;
	private var crook1Material:Material;
	private var crookMesh:Mesh;
	private var winMusic:Sound;
	private var crookExplosion:Sound;
	private var spaceJam:Sound;

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
			Tusk.assets.loadTexture(tusk.Files.sprites___stars__png),
			tusk.defaults.Materials.loadUnlitTextured(),
			Tusk.assets.loadTexture(tusk.Files.sprites___spacecop__png),
			SpriteMaterial.load(),
			Tusk.assets.loadTexture(tusk.Files.sprites___copbullet__png),
			SpriteMaterial.load(),
			Tusk.assets.loadTexture(tusk.Files.sprites___explosion__png),
			tusk.defaults.Materials.loadUnlitTextured(),
			Tusk.assets.loadTexture(tusk.Files.sprites___spacecrook1__png),
			tusk.defaults.Materials.loadUnlitTextured(),
			Tusk.assets.loadSound(tusk.Files.sounds___wintrumpet__ogg),
			Tusk.assets.loadSound(tusk.Files.sounds___crookexplosion__ogg),
			Tusk.assets.loadSound(tusk.Files.sounds___spacejam__ogg)
		).then(function(quad:Mesh, particlesMaterial:Material, textMesh:Mesh, font:Font, fontMat:Material, circleOutMat:Material, countdownMusic:Sound,
			starTexture:Texture, starMaterial:Material,
			copTexture:Texture, copMaterial:Material,
			bulletTexture:Texture, bulletMaterial:Material,
			explosionTexture:Texture, explosionMaterial,
			crook1Texture:Texture, crook1Material,
			winMusic:Sound, crookExplosion:Sound,
			spaceJam:Sound) {
			this.quad = quad;
			this.particlesMaterial = particlesMaterial;

			this.circleOutMat = circleOutMat;

			this.textMesh = textMesh;
			this.font = font;
			this.fontMat = fontMat;
			this.fontMat.textures = new Array<Texture>();
			this.fontMat.textures.push(font.texture);

			this.countdownMusic = countdownMusic;

			this.starMaterial = starMaterial;
			this.starMaterial.textures = new Array<Texture>();
			this.starMaterial.textures.push(starTexture);

			this.copMaterial = copMaterial;
			this.copMaterial.textures = new Array<Texture>();
			this.copMaterial.textures.push(copTexture);

			this.bulletMaterial = bulletMaterial;
			this.bulletMaterial.textures = new Array<Texture>();
			this.bulletMaterial.textures.push(bulletTexture);

			this.explosionMaterial = explosionMaterial;
			this.explosionMaterial.textures = new Array<Texture>();
			this.explosionMaterial.textures.push(explosionTexture);

			this.crook1Material = crook1Material;
			this.crook1Material.textures = new Array<Texture>();
			this.crook1Material.textures.push(crook1Texture);

			this.winMusic = winMusic;
			this.crookExplosion = crookExplosion;
			this.spaceJam = spaceJam;

			def.resolve(this);
		}).catchError(function(err:Dynamic) {
			Log.error(err);
			def.throwError('Failed to load assets!');
		});

		return prom;
	}

	var player1ScoreDisplay:TextComponent;
	var player2ScoreDisplay:TextComponent;

	public static function addToScore(player:Int) {
		if(player == 0) instance.p1Score++;
		else if(player == 1) instance.p2Score++;
	}

	private var p1Score(default, set):Int = 0;
	private function set_p1Score(x:Int) {
		p1Score = x;
		player1ScoreDisplay.text = '${GameTracker.player[0].name}: ${p1Score}';
		return x;
	}
	private var p2Score(default, set):Int = 0;
	private function set_p2Score(x:Int) {
		p2Score = x;
		player2ScoreDisplay.text = '${GameTracker.player[1].name}: ${p2Score}';
		return x;
	}

	public function spawnBullet(player:Int, x:Float, y:Float) {
		var bulletCollision:minigames.sledtillyouredead.CollisionComponent = 
				new minigames.sledtillyouredead.CollisionComponent(4, 0);
		entities.push(new Entity(this, 'bullet', [
			new TransformComponent(new Vec3(x, y, -0.5), Quat.identity(), new Vec3(16, 16, 16)),
			new MeshComponent(quad),
			new MaterialComponent(bulletMaterial),
			new CustomUniformsComponent(function() {
				bulletMaterial.setVec3('colour', GameTracker.player[player].colour);
			}),
			new BulletComponent(player),
			bulletCollision
		]));
	}

	public function spawnExplosion(x:Float, y:Float) {
		entities.push(new Entity(this, 'Explosion', [
			new TransformComponent(new Vec3(x, y, -2), Quat.identity(), new Vec3(64, 64, 64)),
			new MeshComponent(explosionMesh),
			new MaterialComponent(explosionMaterial),
			new minigames.sledtillyouredead.AnimatedSledComponent(explosionMesh, 8, 10, true),
			new SoundComponent(crookExplosion.path, true)
		]));
	}

	private var movements:Array<Float->Float->Float> = [
		function(t:Float, end:Float):Float { return 220; },
		function(t:Float, end:Float):Float { return tusk.math.Lerp.LerpF(-500, 500, t/end); },
		function(t:Float, end:Float):Float { return tusk.math.Lerp.LerpF(500, -500, t/end); },
		function(t:Float, end:Float):Float { return tusk.math.Lerp.LerpF(300, 0, t/end); },
		function(t:Float, end:Float):Float { return Math.sin(2 * Math.PI * 2 * (t/end)) * 100 + 100; },
		function(t:Float, end:Float):Float { return 100*Math.pow(t - end/2,2); },
		function(t:Float, end:Float):Float { return -100*Math.pow(t - end/2,2); },
		function(t:Float, end:Float):Float { return 50*Math.sin(2*Math.PI*t/end - (end/3))+100; },
		function(t:Float, end:Float):Float { return 450*Math.cos(2*Math.PI*t/(end/2)); },
		function(t:Float, end:Float):Float { return -450*Math.cos(2*Math.PI*t/(end/2)); },
	];

	public function spawnCrook(life:Float, xMoveIndex:Int, yMoveIndex:Int):Promise<Bool> {
		var crookTransform:TransformComponent = new TransformComponent(new Vec3(0, 0, -0.75), Quat.identity(), new Vec3(64, 64, 64));
		var crookCollision:minigames.sledtillyouredead.CollisionComponent = 
			new minigames.sledtillyouredead.CollisionComponent(16, 1);
		crookCollision.done.then(function(_) {
			spawnExplosion(crookTransform.position.x, crookTransform.position.y);
		});
		var movement:RailedMovementComponent = new RailedMovementComponent(life, movements[xMoveIndex], movements[yMoveIndex]);
		entities.push(new Entity(this, 'Crook', [
			crookTransform,
			new MeshComponent(crookMesh),
			new MaterialComponent(crook1Material),
			new minigames.sledtillyouredead.AnimatedSledComponent(crookMesh, 2, 15),
			crookCollision,
			movement
		]));
		return movement.done;
	}

	override public function onLoad(event:LoadEvent) {
		if(event.scene != this) return;
		Log.info("Loading space cops scene..");

		var loadComplete:Promise<Scene> = loadAssets();
		var loadingScreen:LoadingScreen = new LoadingScreen('Space Cops!', loadComplete);
		Tusk.pushScene(loadingScreen);
		Promise.when(loadingScreen.sceneDone.promise(), loadComplete).then(function(_, _) {
			Tusk.removeScene(loadingScreen);
		//loadComplete.then(function(_) {
			Camera2DProcessor.cameras = new Array<Camera2DComponent>();
			// start the game!
			Log.info('Starting space cops!');

			this.useProcessor(new WaveProcessor());
			this.useProcessor(new RailedMovementProcessor());
			this.useProcessor(new minigames.sledtillyouredead.CollisionProcessor());
			this.useProcessor(new DestroyOnCollisionProcessor());
			this.useProcessor(new ShooterProcessor());
			this.useProcessor(new BulletProcessor());
			this.useProcessor(new ScrollProcessor());
			this.useProcessor(new MovementProcessor());
			this.useProcessor(new minigames.sledtillyouredead.AnimatedSledProcessor());
			this.useProcessor(new TimedPromiseProcessor());
			this.useProcessor(new MeshProcessor());
			this.useProcessor(new MaterialProcessor());
			this.useProcessor(new Camera2DProcessor());
			this.useProcessor(new TransformProcessor());
			this.useProcessor(new TextProcessor());
			this.useProcessor(new Renderer2DProcessor(new Vec4(0, 0, 0, 1)));
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

			// create the starfield
			var starFieldMesh:Mesh = quad.clone('starfield.mesh');
			for(v in starFieldMesh.vertices) {
				v.y -= 0.5;
			}
			entities.push(new Entity(this, 'Starfield1', [
				new TransformComponent(new Vec3(0, Tusk.game.height / 2, 0), Quat.identity(), new Vec3(1024, 1024, 1024)),
				new MeshComponent(starFieldMesh),
				new MaterialComponent(starMaterial),
				new ScrollComponent(Tusk.game.height / 2 - 1024, 1024)
			]));
			entities.push(new Entity(this, 'Starfield2', [
				new TransformComponent(new Vec3(0, Tusk.game.height / 2 + 1024, 0), Quat.identity(), new Vec3(1024, 1024, 1024)),
				new MeshComponent(starFieldMesh),
				new MaterialComponent(starMaterial),
				new ScrollComponent(Tusk.game.height / 2, 1024)
			]));

			// create the cops!
			var copMesh1:Mesh = quad.clone('cop.mesh1');
			for(uv in copMesh1.uvs) {
				uv.x /= 4;
			}
			var copMesh2:Mesh = copMesh1.clone('cop.mesh2');
			var p1CopEntity:Entity = new Entity(this, 'P1 cop', [
				new TransformComponent(new Vec3(-92, Tusk.game.height / -2 + 32, -1), Quat.identity(), new Vec3(64, 64, 64)),
				new MeshComponent(copMesh1),
				new MaterialComponent(copMaterial),
				new CustomUniformsComponent(function() {
					copMaterial.setVec3('colour', GameTracker.player[0].colour);
				}),
				new minigames.sledtillyouredead.AnimatedSledComponent(copMesh1, 4, 15),
				//new MovementComponent(0),
				//new ShooterComponent(0, spawnBullet)
			]);
			entities.push(p1CopEntity);
			var p2CopEntity:Entity = new Entity(this, 'P2 cop', [
				new TransformComponent(new Vec3(92, Tusk.game.height / -2 + 32, -1), Quat.identity(), new Vec3(64, 64, 64)),
				new MeshComponent(copMesh2),
				new MaterialComponent(copMaterial),
				new CustomUniformsComponent(function() {
					copMaterial.setVec3('colour', GameTracker.player[1].colour);
				}),
				new minigames.sledtillyouredead.AnimatedSledComponent(copMesh2, 4, 15),
				//new MovementComponent(1),
				//new ShooterComponent(1, spawnBullet)
			]);
			entities.push(p2CopEntity);

			// setup explosions
			explosionMesh = quad.clone('mesh.explosion');
			for(uv in explosionMesh.uvs) {
				uv.x /= 8;
			}

			// create the score display
			player1ScoreDisplay = new TextComponent(font, '${GameTracker.player[0].name}: ${p1Score}',
					TextAlign.Left, TextVerticalAlign.Top,
					new Vec4(1, 1, 1, 1));
			player2ScoreDisplay = new TextComponent(font, '${GameTracker.player[1].name}: ${p2Score}',
					TextAlign.Right, TextVerticalAlign.Top,
					new Vec4(1, 1, 1, 1));
			entities.push(new Entity(this, 'Player 1 Score', [
				new TransformComponent(new Vec3(Tusk.game.width / -2 + 8, Tusk.game.height / -2 + 8, -0.05), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(textMesh.clone('p1scoretext')),
				new MaterialComponent(fontMat.path),
				player1ScoreDisplay
			]));
			entities.push(new Entity(this, 'Player 2 Score', [
				new TransformComponent(new Vec3(Tusk.game.width / 2 - 8, Tusk.game.height / -2 + 8, -0.05), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(textMesh.clone('p2scoretext')),
				new MaterialComponent(fontMat.path),
				player2ScoreDisplay
			]));

			// setup crooks!
			crookMesh = quad.clone('crook.mesh');
			for(uv in crookMesh.uvs) {
				uv.x /= 2;
			}

			// create the countdown music
			entities.push(new Entity(this, 'Countdown Music', [
				new SoundComponent(countdownMusic.path, true)
			]));

			// add the music!
			var spaceJamComponent:SoundComponent = new SoundComponent(spaceJam.path, false);
			entities.push(new Entity(this, 'Space Jam', [spaceJamComponent]));

			// start the countdown!
			var countdownText:TextComponent = new TextComponent(font, '3',
					TextAlign.Centre, TextVerticalAlign.Centre,
					new Vec4(1, 1, 1, 1));
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
				p1CopEntity.push(new MovementComponent(0));
				p1CopEntity.push(new ShooterComponent(0, spawnBullet));
				p2CopEntity.push(new MovementComponent(1));
				p2CopEntity.push(new ShooterComponent(1, spawnBullet));

				countdownText.text = 'Go!';
				countdownTimer.t = 0;
				countdownTimer.wait = 0.5;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				countdownText.text = '';
				spaceJamComponent.play = true;

				// start the waves
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 1, 0);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 2, 0);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 1, 0);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 1, 3);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 2, 3);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 1, 4);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 2, 4);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 5, 0);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 6, 0);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 1, 7);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 2, 7);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 8, 7);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				var wave:WaveComponent = new WaveComponent(0.25, 5, spawnCrook, 5, 9, 7);
				entities.push(new Entity(this, '', [wave]));
				return wave.done;
			}).pipe(function(_) {
				// stop the music
				spaceJamComponent.play = false;
				spaceJamComponent.stop = true;

				// figure out who won
				var winner:Int = -1;
				if(p1Score > p2Score) winner = 0;
				else if(p2Score > p1Score) winner = 1;

				countdownTransform.scale.set(4, 4, 4);
				countdownTransform.lastScale.copy(countdownTransform.scale);
				if(winner >= 0) {
					countdownText.text = GameTracker.player[winner].name + ' wins!';
					GameTracker.player[winner].score += 1;
				}
				else {
					countdownText.text = 'Tie!';
				}

				// prepare for the end!
				for(entity in entities) {
					// stop moving
					if(entity.hasType(ShooterComponent.tid)) entity.removeType(ShooterComponent.tid);
					if(entity.hasType(MovementComponent.tid)) entity.removeType(MovementComponent.tid);
				}

				// play the win music!
				entities.push(new Entity(this, 'WinMusic', [new SoundComponent(winMusic.path, true)]));

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
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

	private function loadAssets():Promise<Scene> {
		var def:Deferred<Scene> = new Deferred<Scene>();
		var prom:Promise<Scene> = def.promise();

		// load assets!
		Promise.when(
			tusk.defaults.Primitives.loadQuad(),
			tusk.defaults.Materials.loadParticlesUntextured(),
			tusk.defaults.Materials.loadUnlitTextured(),
			minigames.bottlerocket.BackgroundMaterial.load(),
			Tusk.assets.loadTexture(tusk.Files.sprites___bottlerocket__png),
			Tusk.assets.loadTexture(tusk.Files.tilemaps___bottlerocketbackground__png),
			Tusk.assets.loadText(tusk.Files.tilemaps___bottlerocketbackground__json)
		).then(function(quad:Mesh, particlesMaterial:Material, unlitTextured:Material, backgroundMaterial:Material, spriteSheet:Texture, backgroundSheet:Texture, backgroundJSON:Text) {
			this.quad = quad;
			this.particlesMaterial = particlesMaterial;

			this.spriteMaterial = unlitTextured.clone('br_spriteMaterial');
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
		var loadingScreen:LoadingScreen = new LoadingScreen('Bottle Rocket Blast', loadComplete);
		Tusk.pushScene(loadingScreen);
		Promise.when(loadingScreen.sceneDone.promise(), loadComplete).then(function(_, _) {
			// start the game!
			Tusk.removeScene(loadingScreen);
			Log.info('Starting bottle rocket!');

			this.useProcessor(new MeshProcessor());
			this.useProcessor(new MaterialProcessor());
			this.useProcessor(new Camera2DProcessor());
			this.useProcessor(new TransformProcessor());
			this.useProcessor(new Renderer2DProcessor(new Vec4(110, 175, 231, 255) / 255));

			// the tilemap in the background
			entities.push(new Entity(this, 'TileMap', [
				new TransformComponent(new Vec3((backgroundTileMap.width * backgroundTileMap.tilewidth * 2) / -2,
					Tusk.game.height / -2, 0), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(backgroundMesh),
				new MaterialComponent(backgroundMaterial)
			]));
		});
	}
}
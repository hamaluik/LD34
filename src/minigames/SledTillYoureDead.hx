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
			Tusk.assets.loadSound(tusk.Files.sounds___countdown__ogg)
		).then(function(quad:Mesh, particlesMaterial:Material, textMesh:Mesh, font:Font, fontMat:Material, circleOutMat:Material, countdownMusic:Sound) {
			this.quad = quad;
			this.particlesMaterial = particlesMaterial;

			this.circleOutMat = circleOutMat;

			this.textMesh = textMesh;
			this.font = font;
			this.fontMat = fontMat;
			this.fontMat.textures = new Array<Texture>();
			this.fontMat.textures.push(font.texture);

			def.resolve(this);
		}).catchError(function(err:Dynamic) {
			Log.error(err);
			def.throwError('Failed to load assets!');
		});

		return prom;
	}

	override public function onLoad(event:LoadEvent) {
		if(event.scene != this) return;
		Log.info("Loading sled till you're dead scene..");

		var loadComplete:Promise<Scene> = loadAssets();
		var loadingScreen:LoadingScreen = new LoadingScreen('Sled Till You\'re Dead!', loadComplete);
		Tusk.pushScene(loadingScreen);
		Promise.when(loadingScreen.sceneDone.promise(), loadComplete).then(function(_, _) {
			Tusk.removeScene(loadingScreen);
			Camera2DProcessor.cameras = new Array<Camera2DComponent>();
			// start the game!
			Log.info('Starting sled till you\'re dead!');

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
		});
	}
}
import tusk.debug.Log;
import tusk.lib.comp.Camera2DComponent;
import tusk.lib.comp.MaterialComponent;
import tusk.lib.comp.MeshComponent;
import tusk.lib.comp.TransformComponent;
import tusk.lib.comp.TextComponent;
import tusk.lib.comp.TimedPromiseComponent;
import tusk.lib.proc.Camera2DProcessor;
import tusk.lib.proc.MaterialProcessor;
import tusk.lib.proc.MeshProcessor;
import tusk.lib.proc.Renderer2DProcessor;
import tusk.lib.proc.TransformProcessor;
import tusk.lib.proc.TextProcessor;
import tusk.lib.proc.TimedPromiseProcessor;
import tusk.Tusk;
import tusk.Scene;
import tusk.Entity;
import tusk.resources.*;

import promhx.Promise;

import glm.Vec2;
import glm.Vec3;
import glm.Quat;
import glm.Vec4;

import tusk.events.*;

class LoadingScreen extends Scene {
	private var gameName:String;

	public function new(gameName:String) {
		this.gameName = gameName;
		super('Loading screen!');
	}

	private static var salutations:Array<String> = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'The'];
	private static var adjectives:Array<String> = ['Purple', 'Green', 'Fast', 'Slow', 'Time-Travelling', 'Time Traveller\'s'];
	private static var nouns:Array<String> = ['Wife', 'Husband', 'Son', 'Daughter', 'Lawyer'];
	private function generateName():String {
		var s:StringBuf = new StringBuf();
		s.add(salutations[tusk.math.Random.int(0, salutations.length - 1)]);
		s.add(' ');
		s.add(adjectives[tusk.math.Random.int(0, adjectives.length - 1)]);
		s.add(' ');
		s.add(nouns[tusk.math.Random.int(0, nouns.length - 1)]);
		return s.toString();
	}

	override public function onLoad(event:LoadEvent) {
		if(event.scene != this) return;
		Log.info("load screen..");

		// load the resources
		Promise.when(
			tusk.defaults.Primitives.loadTextMesh(),
			tusk.defaults.Fonts.loadSubatomic_Screen(),
			tusk.defaults.Materials.loadTextBasic()
		).then(function(textMesh:Mesh, font:Font, fontMat:Material) {
			// set the material's texture
			fontMat.textures = new Array<Texture>();
			fontMat.textures.push(font.texture);

			// load processors
			this.useProcessor(new TimedPromiseProcessor());
			this.useProcessor(new MaterialProcessor());
			this.useProcessor(new Camera2DProcessor());
			this.useProcessor(new loading.SlamProcessor());
			this.useProcessor(new loading.SlideProcessor());
			this.useProcessor(new TransformProcessor());
			this.useProcessor(new TextProcessor());
			this.useProcessor(new MeshProcessor());
			this.useProcessor(new Renderer2DProcessor(new Vec4(0.25, 0.25, 0.25, 1.0)));

			// create the camera
			var w:Float = Tusk.instance.app.window.width;
			var h:Float = Tusk.instance.app.window.height;
			entities.push(new Entity(this, 'Camera', [
				new TransformComponent(),
				new Camera2DComponent(new Vec2(w, h) / -2.0, new Vec2(w, h) / 2.0, -100, 100)
			]));

			var scp1:loading.SlamComponent = new loading.SlamComponent(0.5, 16, 2);
			entities.push(new Entity(this, 'Player 1', [
				new TransformComponent(new Vec3(-256, 0, 0.05), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(textMesh.clone('p1text')),
				new MaterialComponent(fontMat.path),
				new TextComponent(font, 'Player 1\nAKA. ${generateName()}',
					TextAlign.Centre, TextVerticalAlign.Centre,
					new Vec4(1, 1, 1, 1)),
				scp1
			]));
			scp1.done.pipe(function(_) {
				var scvs:loading.SlamComponent = new loading.SlamComponent(0.5, 96, 16);
				entities.push(new Entity(this, 'VS', [
					new TransformComponent(new Vec3(0, 0, 0.05), Quat.identity(), new Vec3(16, 16, 16)),
					new MeshComponent(textMesh.clone('vstext')),
					new MaterialComponent(fontMat.path),
					new TextComponent(font, 'VS',
						TextAlign.Centre, TextVerticalAlign.Centre,
						new Vec4(1, 1, 1, 1)),
					scvs
				]));
				return scvs.done;
			}).pipe(function(_) {
				var scp2:loading.SlamComponent = new loading.SlamComponent(0.5, 16, 2);
				entities.push(new Entity(this, 'Player 2', [
					new TransformComponent(new Vec3(256, 0, 0.05), Quat.identity(), new Vec3(2, 2, 2)),
					new MeshComponent(textMesh.clone('p2text')),
					new MaterialComponent(fontMat.path),
					new TextComponent(font, 'Player 2\nAKA. ${generateName()}',
						TextAlign.Centre, TextVerticalAlign.Centre,
						new Vec4(1, 1, 1, 1)),
					scp2
				]));
				return scp2.done;
			}).pipe(function(_) {
				var scn:loading.SlideComponent = new loading.SlideComponent(1, new Vec3(0, -300, 0.05), new Vec3(0, -192, 0.05));
				entities.push(new Entity(this, 'in:\n${this.gameName}', [
					new TransformComponent(new Vec3(0, -192, 0.05), Quat.identity(), new Vec3(4, 4, 4)),
					new MeshComponent(textMesh.clone('vstext')),
					new MaterialComponent(fontMat.path),
					new TextComponent(font, 'in:\n${this.gameName}',
						TextAlign.Centre, TextVerticalAlign.Centre,
						new Vec4(1, 1, 1, 1)),
					scn
				]));
				return scn.done;
			}).then(function(_) {
				sceneDone.resolve(this);
			});

			// tell the processors we've started
			Tusk.router.onEvent(tusk.events.EventType.Start);
		});
	}
}
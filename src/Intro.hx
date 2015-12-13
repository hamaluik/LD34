import tusk.debug.Log;
import tusk.lib.comp.Camera2DComponent;
import tusk.lib.comp.MaterialComponent;
import tusk.lib.comp.MeshComponent;
import tusk.lib.comp.TransformComponent;
import tusk.lib.comp.TextComponent;
import tusk.lib.comp.TimedPromiseComponent;
import tusk.lib.comp.CircleEffectComponent;
import tusk.lib.proc.Camera2DProcessor;
import tusk.lib.proc.MaterialProcessor;
import tusk.lib.proc.MeshProcessor;
import tusk.lib.proc.Renderer2DProcessor;
import tusk.lib.proc.TransformProcessor;
import tusk.lib.proc.TextProcessor;
import tusk.lib.proc.TimedPromiseProcessor;
import tusk.lib.proc.CircleEffectRendererProcessor;
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

class Intro extends Scene {
	public function new() {
		super('Intro screen!');
	}

	var cec:CircleEffectComponent;
	var p2Text:TextComponent;

	override public function onLoad(event:LoadEvent) {
		if(event.scene != this) return;
		Log.info("loading intro..");

		// load the resources
		Promise.when(
			tusk.defaults.Primitives.loadTextMesh(),
			Tusk.assets.loadTexture(tusk.Files.fonts___paper_cuts__png),
			Tusk.assets.loadText(tusk.Files.fonts___paper_cuts__fnt),
			tusk.defaults.Materials.loadTextBasic(),
			tusk.defaults.Primitives.loadQuad(),
			tusk.defaults.Materials.loadEffectCircleOut(),
			tusk.defaults.Materials.loadUnlitColoured()
		).then(function(textMesh:Mesh, fontTexture:Texture, fontSrc:Text, fontMat:Material, quad:Mesh, circleOutMat:Material, bgMaterial:Material) {
			Camera2DProcessor.cameras = new Array<Camera2DComponent>();
			// set the material's texture
			fontMat.textures = new Array<Texture>();
			fontMat.textures.push(fontTexture);

			// create the font
			tusk.resources.Font.load('papercuts.fnt', fontSrc.text, fontTexture).then(function(font:Font) {
				// load processors
				this.useProcessor(new TimedPromiseProcessor());
				this.useProcessor(new MaterialProcessor());
				this.useProcessor(new Camera2DProcessor());
				this.useProcessor(new TransformProcessor());
				this.useProcessor(new TextProcessor());
				this.useProcessor(new MeshProcessor());
				this.useProcessor(new Renderer2DProcessor(new Vec4(0.25, 0.25, 0.25, 1.0)));
				this.useProcessor(new CircleEffectRendererProcessor());

				// create the camera
				var w:Float = Tusk.instance.app.window.width;
				var h:Float = Tusk.instance.app.window.height;
				entities.push(new Entity(this, 'Camera', [
					new TransformComponent(),
					new Camera2DComponent(new Vec2(w, h) / -2.0, new Vec2(w, h) / 2.0, -100, 100)
				]));

				// create the background
				var bgMesh:Mesh = quad.clone('mesh.bgintro');
				bgMesh.colours = new Array<Vec4>();
				for(v in bgMesh.vertices) {
					var colour:Vec4 = if(v.y > 0) new Vec4(68, 149, 166, 255) / 255; else new Vec4(42, 94, 120) / 255;
					bgMesh.colours.push(colour);
				}
				entities.push(new Entity(this, 'Image', [
					new TransformComponent(new Vec3(0, 0, 1), Quat.identity(), new Vec3(1024, 1024, 1024)),
					new MeshComponent(bgMesh),
					new MaterialComponent(bgMaterial),
				]));

				// create the title
				entities.push(new Entity(this, 'title', [
					new TransformComponent(new Vec3(0, 116, 0.05), Quat.identity(), new Vec3(1, 1, 1)),
					new MeshComponent(textMesh.clone('titletext')),
					new MaterialComponent(fontMat.path),
					new TextComponent(font, 'Ludum Party!',
						TextAlign.Centre, TextVerticalAlign.Centre,
						new Vec4(1, 1, 1, 1))
				]));

				// create the instructions
				entities.push(new Entity(this, 'instructions', [
					new TransformComponent(new Vec3(0, 0, 0.05), Quat.identity(), new Vec3(0.5, 0.5, 0.5)),
					new MeshComponent(textMesh.clone('instructionstext')),
					new MaterialComponent(fontMat.path),
					new TextComponent(font, 'Player 1:\nHold down A+B to start!',
						TextAlign.Centre, TextVerticalAlign.Centre,
						new Vec4(1, 1, 1, 1))
				]));

				// create player 1's indication
				entities.push(new Entity(this, 'p1keys', [
					new TransformComponent(new Vec3(-256, -192, 0.05), Quat.identity(), new Vec3(0.5, 0.5, 0.5)),
					new MeshComponent(textMesh.clone('p1keystext')),
					new MaterialComponent(fontMat.path),
					new TextComponent(font, 'Player 1:\nA => Q\nB => E',
						TextAlign.Centre, TextVerticalAlign.Centre,
						new Vec4(1, 1, 1, 1))
				]));

				// create player 2 / CPU indication
				p2Text = new TextComponent(font, 'Player 2:\nCPU\nPress \'I\' to join!',
						TextAlign.Centre, TextVerticalAlign.Centre,
						new Vec4(1, 1, 1, 1));
				entities.push(new Entity(this, 'p2keys', [
					new TransformComponent(new Vec3(256, -192, 0.05), Quat.identity(), new Vec3(0.5, 0.5, 0.5)),
					new MeshComponent(textMesh.clone('p2keystext')),
					new MaterialComponent(fontMat.path),
					p2Text
				]));

				cec = new CircleEffectComponent(true);
				entities.push(new Entity(this, 'Circle Effect', [
					new TransformComponent(new Vec3(0, 0, 0.1), Quat.identity(), new Vec3(1024, 1024, 1024)),
					new MeshComponent(quad.path),
					new MaterialComponent(circleOutMat.path),
					cec
				]));

				// tell the processors we've started
				Tusk.router.onEvent(tusk.events.EventType.Start);
			});
		});
	}

	override function onKeyDown(event:KeyEvent) {
		if(p2Text != null && (event.keyCode == snow.types.Types.Key.key_i || event.keyCode == snow.types.Types.Key.key_p)) {
			GameTracker.player[1].isCPU = !GameTracker.player[1].isCPU;
			p2Text.text = if(GameTracker.player[1].isCPU) {
				'Player 2:\nCPU\nPress \'I\' to join!';
			}
			else {
				'Player 2:\nA => I\nB => P';
			}
		}
	}

	var startTimer:Float = 0;
	override function onUpdate(event:UpdateEvent) {
		if(cec == null || !cec.done.isResolved() || startTimer < 0) {
			return;
		}

		var aDown:Bool = Tusk.instance.app.input.keydown(GameTracker.player[0].btnA);
		var bDown:Bool = Tusk.instance.app.input.keydown(GameTracker.player[0].btnB);
		if(aDown && bDown) {
			startTimer += event.dt;
		}
		else {
			startTimer = 0;
		}

		if(startTimer >= 0.5) {
			startTimer = -1;
			cec.t = 0;
			cec.circleIn = false;
			cec.reset();
			cec.done.then(function(_) {
				sceneDone.resolve(this);
			});
		}
	}
}
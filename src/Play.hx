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

import promhx.Promise;

import glm.Vec2;
import glm.Vec3;
import glm.Quat;
import glm.Vec4;

import tusk.events.*;

class Play extends Scene {
	public function new() {
		super('Play');
	}

	override public function onLoad(_) {
		Log.info("Loading play scene..");
	}
}
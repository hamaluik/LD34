package colourkey;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.RenderEvent;
import tusk.lib.comp.MaterialComponent;

import snow.modules.opengl.GL;

class ColourKeyProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(ColourKeyComponent.tid).include(MaterialComponent.tid);
		super(entities);
	}
	
	override public function onRender(data:RenderEvent):Void {
		for(entity in entities) {
			var c:ColourKeyComponent = cast entity.get(ColourKeyComponent.tid);
			var m:MaterialComponent = cast entity.get(MaterialComponent.tid);
			GL.useProgram(m.material.shader.program);
			m.material.setVec3('colour', c.colour);
		}
	}
}
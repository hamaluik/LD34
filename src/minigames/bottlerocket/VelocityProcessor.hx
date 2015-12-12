package minigames.bottlerocket;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

class VelocityProcessor extends Processor {
	inline private static var gravity:Float = -1024;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(TransformComponent.tid).include(VelocityComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var v:VelocityComponent = cast entity.get(VelocityComponent.tid);

			t.lastPosition.copy(t.position);
			v.velocity += gravity * event.dt;
			if(v.velocity < 0 && v.maxHeight < 0) {
				v.maxHeight = t.position.y;
			}
			t.position.y += v.velocity * event.dt;
			if(t.position.y <= v.minHeight) {
				t.position.y = v.minHeight;
				v.velocity = 0;
			}
		}
	}
}
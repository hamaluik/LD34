package minigames.spacecops;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

import glm.Vec2;

class RailedMovementProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(RailedMovementComponent.tid).include(TransformComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var r:RailedMovementComponent = cast entity.get(RailedMovementComponent.tid);

			r.t += event.dt;
			if(r.t >= r.endT) {
				Tusk.removeEntity(entity);
				if(!r.done.isResolved()) r.finish();
			}

			t.lastPosition.copy(t.position);
			t.position.x = r.xFunc(r.t, r.endT);
			t.position.y = r.yFunc(r.t, r.endT);
		}
	}
}
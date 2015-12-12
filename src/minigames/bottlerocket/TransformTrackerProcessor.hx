package minigames.bottlerocket;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.lib.comp.Camera2DComponent;
import tusk.Tusk;

class TransformTrackerProcessor extends Processor {
	inline private static var gravity:Float = -10;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(TransformComponent.tid).include(TransformTrackerComponent.tid).include(Camera2DComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var tracker:TransformTrackerComponent = cast entity.get(TransformTrackerComponent.tid);

			var highest:TransformComponent = tracker.t1;
			if(tracker.t2.position.y > tracker.t1.position.y) {
				highest = tracker.t2;
			}

			t.lastPosition.copy(t.position);
			t.position.y = highest.position.y;

			var c:Camera2DComponent = cast entity.get(Camera2DComponent.tid);
			c.viewMatrixDirty = true;
		}
	}
}
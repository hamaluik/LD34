package loading;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;

class SlideProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(TransformComponent.tid).include(SlideComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(data:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var s:SlideComponent = cast entity.get(SlideComponent.tid);

			// skip completed slams
			if(s.done.isResolved()) continue;

			// move the slam along
			s.t += data.dt;
			if(s.t >= s.totalLength) {
				s.t = s.totalLength;
				s.finish();
			}

			// update the position
			t.lastPosition.copy(t.position);
			t.position.x = s.easing(s.t, s.startPos.x, s.endPos.x - s.startPos.x, s.totalLength);
			t.position.y = s.easing(s.t, s.startPos.y, s.endPos.y - s.startPos.y, s.totalLength);
			t.position.z = s.easing(s.t, s.startPos.z, s.endPos.z - s.startPos.z, s.totalLength);
		}
	}
}
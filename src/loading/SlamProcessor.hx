package loading;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;

class SlamProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(TransformComponent.tid).include(SlamComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(data:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var s:SlamComponent = cast entity.get(SlamComponent.tid);

			// skip completed slams
			if(s.done.isResolved()) continue;

			// move the slam along
			s.t += data.dt;
			if(s.t >= s.totalLength) {
				s.t = s.totalLength;
				s.finish();
			}

			// update the scale
			t.lastScale.copy(t.scale);
			t.scale.x = s.easing(s.t, s.startScale, s.endScale - s.startScale, s.totalLength);
			t.scale.y = t.scale.x;
			t.scale.z = t.scale.x;
		}
	}
}
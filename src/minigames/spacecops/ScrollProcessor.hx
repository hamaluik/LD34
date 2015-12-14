package minigames.spacecops;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

class ScrollProcessor extends Processor {
	inline private static var scrollSpeed:Float = 256;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(ScrollComponent.tid).include(TransformComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var s:ScrollComponent = cast entity.get(ScrollComponent.tid);

			t.lastPosition.copy(t.position);
			t.position.y -= scrollSpeed * event.dt;
			
			if(t.position.y <= s.clipY) {
				t.position.y += s.resetY;
			}
		}
	}
}
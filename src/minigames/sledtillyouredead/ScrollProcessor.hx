package minigames.sledtillyouredead;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

class ScrollProcessor extends Processor {
	private static var scrollSpeed:Float = 512;
	inline private static var scrollAcceleration:Float = 2;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(ScrollComponent.tid).include(TransformComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var s:ScrollComponent = cast entity.get(ScrollComponent.tid);

			t.lastPosition.copy(t.position);
			t.position.y += scrollSpeed * event.dt;
			
			if(t.position.y >= s.clipY) {
				if(s.repeat) {
					t.position.y -= s.resetY;
				}
				else {
					Tusk.removeEntity(entity);
				}
			}

			scrollSpeed += scrollAcceleration * event.dt;
		}
	}
}
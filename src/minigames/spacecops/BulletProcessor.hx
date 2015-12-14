package minigames.spacecops;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

class BulletProcessor extends Processor {
	inline private static var bulletSpeed:Float = 512;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(BulletComponent.tid).include(TransformComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var b:BulletComponent = cast entity.get(BulletComponent.tid);

			t.lastPosition.copy(t.position);
			t.position.y += bulletSpeed * event.dt;
			
			if(t.position.y >= Tusk.game.height / 2 + 64) {
				Tusk.removeEntity(entity);
			}
		}
	}
}
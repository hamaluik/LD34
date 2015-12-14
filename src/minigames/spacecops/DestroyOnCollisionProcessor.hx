package minigames.spacecops;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import minigames.sledtillyouredead.CollisionComponent;
import tusk.Tusk;

class DestroyOnCollisionProcessor extends Processor {
	inline private static var bulletSpeed:Float = 512;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(CollisionComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var c:CollisionComponent = cast entity.get(CollisionComponent.tid);

			if(c.done.isResolved()) {
				if(entity.hasType(BulletComponent.tid)) {
					var b:BulletComponent = cast entity.get(BulletComponent.tid);
					SpaceCops.addToScore(b.owner);
				}
				if(entity.hasType(RailedMovementComponent.tid)) {
					var m:RailedMovementComponent = cast entity.get(RailedMovementComponent.tid);
					m.finish();
				}
				Tusk.removeEntity(entity);
			}
		}
	}
}
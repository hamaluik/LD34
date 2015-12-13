package minigames.sledtillyouredead;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

import glm.Vec2;

class CollisionProcessor extends Processor {
	private static var scrollSpeed:Float = 512;
	inline private static var scrollAcceleration:Float = 2;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(CollisionComponent.tid).include(TransformComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		var testVec:Vec2 = new Vec2();
		for(entityA in entities) {
			var sa:CollisionComponent = cast entityA.get(CollisionComponent.tid);
			// ignore things that have already resolved
			if(sa.done.isResolved()) continue;
			for(entityB in entities) {
				// don't intersect with ourself.
				if(entityA == entityB) continue;

				var sb:CollisionComponent = cast entityB.get(CollisionComponent.tid);
				// ignore things that have already resolved
				if(sb.done.isResolved()) continue;

				// ignore things that are on the same layer
				if(sa.layer == sb.layer) continue;

				// grab the transforms to see if they're close
				var ta:TransformComponent = cast entityA.get(TransformComponent.tid);
				var tb:TransformComponent = cast entityB.get(TransformComponent.tid);

				// do the actual check
				testVec.x = ta.position.x - tb.position.x;
				testVec.y = ta.position.y - tb.position.y;
				var sqrLength:Float = testVec.sqrLength();
				var intersecting:Bool = ((sa.radius-sb.radius)*(sa.radius-sb.radius) <= sqrLength) 
										&& (sqrLength <= (sa.radius+sb.radius)*(sa.radius+sb.radius));
				if(intersecting) {
					sa.finish();
					sb.finish();
				}
			}
		}
	}
}
package minigames.spacecops;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

class ShooterProcessor extends Processor {
	inline private static var bulletPeriod:Float = 0.25;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(ShooterComponent.tid).include(TransformComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var s:ShooterComponent = cast entity.get(ShooterComponent.tid);

			s.t += event.dt;
			if(s.t >= bulletPeriod) {
				s.t = 0;
				s.spawnBullet(s.player, t.position.x, t.position.y + 32);
			}
		}
	}
}
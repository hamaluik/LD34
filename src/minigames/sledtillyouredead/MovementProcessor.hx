package minigames.sledtillyouredead;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

import glm.Vec2;

class MovementProcessor extends Processor {
	inline private static var cpuAcceleration:Float = 1024;
	inline private static var acceleration:Float = 1536;
	inline private static var topSpeed:Float = 384;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(MovementComponent.tid).include(TransformComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var m:MovementComponent = cast entity.get(MovementComponent.tid);

			var axis:Float = 0;
			if(GameTracker.player[m.player].isCPU) {
				// get a weighted sum of all obstacle x-positions
				var highestY:Float = 32;
				for(ot in SledTillYoureDead.obstacles) {
					// skip one's we've already passed
					if(ot.position.y >= t.position.y) continue;
				
					// see if there is an obstacle directly in our path
					var delta:Float = t.position.x - ot.position.x;
					if(ot.position.y > highestY && Math.abs(delta) < 64) {
						axis = delta > 0 ? 1 : -1;
						highestY = ot.position.y;
					}
				}
			}
			else {
				// get the desired movement
				if(Tusk.instance.app.input.keydown(GameTracker.player[m.player].btnA)) axis -= 1.0;
				if(Tusk.instance.app.input.keydown(GameTracker.player[m.player].btnB)) axis += 1.0;
			}

			t.lastPosition.copy(t.position);
			if(axis != 0) m.velocity += (GameTracker.player[m.player].isCPU ? cpuAcceleration : acceleration) * event.dt;
			else m.velocity = 0;
			m.velocity = tusk.math.MathTools.clamp(m.velocity, -topSpeed, topSpeed);
			t.position.x += m.velocity * event.dt * axis;
			t.position.x = tusk.math.MathTools.clamp(t.position.x, -380, 380);
		}
	}
}
package minigames.bottlerocket;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

class PumpProcessor extends Processor {
	inline private static var pumpAcceleration:Float = 10;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(TransformComponent.tid).include(PumpComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var t:TransformComponent = cast entity.get(TransformComponent.tid);
			var p:PumpComponent = cast entity.get(PumpComponent.tid);

			// get the desired movement
			var axis:Float = 0;
			if(Tusk.instance.app.input.keydown(GameTracker.player[p.playerNumber].btnA)) axis -= 1.0;
			if(Tusk.instance.app.input.keydown(GameTracker.player[p.playerNumber].btnB)) axis += 1.0;

			// figure out the pump's motion
			p.pumpVelocity += axis * pumpAcceleration * event.dt;
			var lastPos:Float = p.pumpPos;
			p.pumpPos += p.pumpVelocity * event.dt;
			if(p.pumpPos <= 0 || p.pumpPos >= 1 || axis == 0) {
				p.pumpVelocity = 0;
			}
			p.pumpPos = tusk.math.MathTools.clamp(p.pumpPos, 0, 1);

			// calculate the pressure change
			if(p.pumpPos < lastPos) {
				p.pressure += lastPos - p.pumpPos;
			}

			// move the pump!
			t.lastPosition.copy(t.position);
			t.position.y = p.topY - (72 * (1.0 - p.pumpPos));
		}
	}
}
package minigames.sledtillyouredead;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TransformComponent;
import tusk.Tusk;

class MovementProcessor extends Processor {
	inline private static var moveSpeed:Float = 384;

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
				// TODO
			}
			else {
				// get the desired movement
				if(Tusk.instance.app.input.keydown(GameTracker.player[m.player].btnA)) axis -= 1.0;
				if(Tusk.instance.app.input.keydown(GameTracker.player[m.player].btnB)) axis += 1.0;
			}

			t.lastPosition.copy(t.position);
			t.position.x += moveSpeed * event.dt * axis;
			t.position.x = tusk.math.MathTools.clamp(t.position.x, -380, 380);
		}
	}
}
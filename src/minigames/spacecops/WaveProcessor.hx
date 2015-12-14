package minigames.spacecops;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.Tusk;
import promhx.Promise;

class WaveProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(WaveComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var w:WaveComponent = cast entity.get(WaveComponent.tid);

			if(w.numDead >= w.count) {
				Tusk.removeEntity(entity);
				w.finish();
			}

			// see if we still have dudes to spawn
			if(w.i < w.count) {
				// see if we have reached the spawn time yet
				if(w.t >= w.period) {
					// yup! spawn!
					w.i++;
					w.t = 0;
					// spawn!
					w.spawnFunc(w.life, w.xIndex, w.yIndex).then(function(_) {
						// count deaths so we know when we're done
						w.numDead++;
					});
				}
				else {
					w.t += event.dt;
				}
			}
		}
	}
}
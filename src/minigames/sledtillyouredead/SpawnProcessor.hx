package minigames.sledtillyouredead;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.Tusk;

class SpawnProcessor extends Processor {
	private inline static var spawnAcceleration:Float = 0.5;
	private static var spawnRate:Float = 5;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(SpawnComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var s:SpawnComponent = cast entity.get(SpawnComponent.tid);

			var obstaclesToSpawn:Int = Std.int(spawnRate * event.dt);
			if(s.spawnAccumulator >= 1.0) {
				obstaclesToSpawn += 1;
				s.spawnAccumulator -= 1.0;
			}
			s.spawnAccumulator += (spawnRate * event.dt) - obstaclesToSpawn;
			spawnRate += spawnAcceleration * event.dt;

			for(i in 0...obstaclesToSpawn) {
				s.spawn();
			}
		}
	}
}
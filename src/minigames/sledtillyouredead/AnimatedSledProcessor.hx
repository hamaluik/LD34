package minigames.sledtillyouredead;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.MeshComponent;
import tusk.Tusk;

class AnimatedSledProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(AnimatedSledComponent.tid).include(MeshComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var a:AnimatedSledComponent = cast entity.get(AnimatedSledComponent.tid);
			var m:MeshComponent = cast entity.get(MeshComponent.tid);

			a.t += event.dt;
			if(a.t >= a.frameTime) {
				a.t = 0;
				a.frame++;
				if(a.frame >= a.frames) {
					a.frame = 0;
				}

				m.mesh.uvs[0].x = a.frame * a.uvxDelta;
				m.mesh.uvs[1].x = (a.frame + 1) * a.uvxDelta;
				m.mesh.uvs[2].x = (a.frame + 1) * a.uvxDelta;
				m.mesh.uvs[3].x = (a.frame + 1) * a.uvxDelta;
				m.mesh.uvs[4].x = a.frame * a.uvxDelta;
				m.mesh.uvs[5].x = a.frame * a.uvxDelta;

				m.bufferDirty = true;
			}
		}
	}
}
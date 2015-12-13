package minigames.captainknowitall;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TextComponent;
import tusk.Tusk;

class PlayerTimerProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(PlayerTimerComponent.tid).include(TextComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var p:PlayerTimerComponent = cast entity.get(PlayerTimerComponent.tid);
			var t:TextComponent = cast entity.get(TextComponent.tid);

			if(p.active && p.t > 0) {
				p.t -= event.dt;
				if(p.t < 0) p.t = 0;
			}

			t.text = Util.floatToStringPrecision(p.t, 3);
		}
	}
}
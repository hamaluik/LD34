package minigames.bottlerocket;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TextComponent;
import tusk.lib.comp.TimedPromiseComponent;
import tusk.Tusk;

class TimerDisplayProcessor extends Processor {
	inline private static var pumpAcceleration:Float = 10;

	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(TimedPromiseComponent.tid).include(TextComponent.tid).include(TimerDisplayComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var text:TextComponent = cast entity.get(TextComponent.tid);
			var timer:TimedPromiseComponent = cast entity.get(TimedPromiseComponent.tid);

			var timeLeft:Float = timer.wait - timer.t;
			if(timeLeft < 0) timeLeft = 0;
			text.text = Util.floatToStringPrecision(timeLeft, 2);
		}
	}
}
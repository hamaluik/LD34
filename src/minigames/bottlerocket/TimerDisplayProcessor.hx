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

	// http://stackoverflow.com/questions/23689001/how-to-reliably-format-a-floating-point-number-to-a-specified-number-of-decimal
	public static function floatToStringPrecision(n:Float, prec:Int):String {
		n = Math.round(n * Math.pow(10, prec));
		var str = ''+n;
		var len = str.length;
		if(len <= prec) {
			while(len < prec) {
				str = '0'+str;
				len++;
			}
			return '0.'+str;
		}
		else{
			return str.substr(0, str.length-prec) + '.'+str.substr(str.length-prec);
		}
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var text:TextComponent = cast entity.get(TextComponent.tid);
			var timer:TimedPromiseComponent = cast entity.get(TimedPromiseComponent.tid);

			var timeLeft:Float = timer.wait - timer.t;
			if(timeLeft < 0) timeLeft = 0;
			text.text = floatToStringPrecision(timeLeft, 2);
		}
	}
}
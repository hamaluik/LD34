package minigames.captainknowitall;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TextComponent;
import tusk.Tusk;

class PlayerAnswerProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(PlayerAnswerComponent.tid).include(TextComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var p:PlayerAnswerComponent = cast entity.get(PlayerAnswerComponent.tid);
			var t:TextComponent = cast entity.get(TextComponent.tid);

			// if the timer isn't active or they've run out of time, they can't answer!
			if(p.timer.active && p.timer.t > 0) {
				if(GameTracker.player[p.player].isCPU) {
					// TODO
					p.aiAnswerTimer -= event.dt;
					if(p.aiAnswerTimer <= 0) {
						// answer the question!
						var dice:Float = tusk.math.Random.float(0, 1);
						if(dice >= 0.25) {
							// answer correctly
							//Log.info('AI answering correctly');
							p.answer = CaptainKnowItAll.aIsCorrect ? 0 : 1;
						}
						else {
							// answer incorrectly
							//Log.info('AI answering incorrectly');
							p.answer = CaptainKnowItAll.aIsCorrect ? 1 : 0;
						}
						p.timer.active = false;
						p.finish();

						// reset the timer
						p.aiAnswerTimer = tusk.math.Random.float(0.05, 1.5);
					}
				}
				else {
					if(Tusk.instance.app.input.keydown(GameTracker.player[p.player].btnA)) {
						p.timer.active = false;
						p.answer = 0;
						p.finish();
					}
					else if(Tusk.instance.app.input.keydown(GameTracker.player[p.player].btnB)) {
						p.timer.active = false;
						p.answer = 1;
						p.finish();
					}
				}
			}
			else if(p.timer.t <= 0 && !p.done.isResolved()) {
				p.finish();
			}
		}
	}
}
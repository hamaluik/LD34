package minigames.captainknowitall;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.TextComponent;
import tusk.Tusk;

class PlayerScoreProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(PlayerScoreComponent.tid).include(TextComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var p:PlayerScoreComponent = cast entity.get(PlayerScoreComponent.tid);
			var t:TextComponent = cast entity.get(TextComponent.tid);

			t.text = '${GameTracker.player[p.player].name}: ${p.score}';
		}
	}
}
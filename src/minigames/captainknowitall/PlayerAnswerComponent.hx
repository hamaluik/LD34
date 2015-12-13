package minigames.captainknowitall;

import tusk.PromiseComponent;

class PlayerAnswerComponent extends PromiseComponent {
	public var player:Int;
	public var answer:Int;
	public var timer:PlayerTimerComponent;

	public var aiAnswerTimer:Float = tusk.math.Random.float(0.1, 1);

	public function new(player:Int, timer:PlayerTimerComponent) {
		this.player = player;
		this.answer = -1;
		this.timer = timer;
		super();
	}
}

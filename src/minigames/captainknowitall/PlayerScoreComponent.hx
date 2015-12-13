package minigames.captainknowitall;

import tusk.Component;

class PlayerScoreComponent extends Component {
	public var player:Int;
	public var score:Int;

	public function new(player:Int) {
		this.player = player;
		score = 0;
		super();
	}
}

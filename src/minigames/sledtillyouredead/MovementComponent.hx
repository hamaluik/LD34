package minigames.sledtillyouredead;

import tusk.Component;

class MovementComponent extends Component {
	public var player:Int;

	public function new(player:Int) {
		this.player = player;
		super();
	}
}
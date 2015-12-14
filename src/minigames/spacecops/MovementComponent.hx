package minigames.spacecops;

import tusk.Component;

class MovementComponent extends Component {
	public var player:Int;
	public var velocity:Float;

	public var aiTarget:Float;

	public function new(player:Int) {
		this.player = player;
		this.velocity = 0;
		aiTarget = 0;
		super();
	}
}
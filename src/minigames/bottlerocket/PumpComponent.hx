package minigames.bottlerocket;

import tusk.Component;

class PumpComponent extends Component {
	public var pressure:Float;
	public var pumpPos:Float;
	public var pumpVelocity:Float;
	public var playerNumber:Int;

	public var aiDirection:Float = -1;

	public var topY:Float;

	public function new(playerNumber:Int, topY:Float) {
		this.pressure = 0;
		this.pumpPos = 1;
		this.pumpVelocity = 0;
		this.playerNumber = playerNumber;
		this.topY = topY;
		super();
	}
}
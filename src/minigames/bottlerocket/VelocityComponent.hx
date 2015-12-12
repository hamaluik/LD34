package minigames.bottlerocket;

import tusk.Component;

class VelocityComponent extends Component {
	public var velocity:Float;
	public var minHeight:Float;
	public var maxHeight:Float = -1;

	public function new(velocity:Float, minHeight:Float) {
		this.velocity = velocity;
		this.minHeight = minHeight;
		super();
	}
}
package minigames.bottlerocket;

import tusk.PromiseComponent;

class VelocityComponent extends PromiseComponent {
	public var velocity:Float;
	public var minHeight:Float;
	public var maxHeight:Float = -1;

	public function new(velocity:Float, minHeight:Float) {
		this.velocity = velocity;
		this.minHeight = minHeight;
		super();
	}
}
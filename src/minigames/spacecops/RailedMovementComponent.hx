package minigames.spacecops;

import tusk.PromiseComponent;

class RailedMovementComponent extends PromiseComponent {
	public var t:Float = 0;
	public var endT:Float = 0;
	public var xFunc:Float->Float->Float;
	public var yFunc:Float->Float->Float;

	public function new(endT:Float, xFunc:Float->Float->Float, yFunc:Float->Float->Float) {
		this.t = 0;
		this.endT = endT;
		this.xFunc = xFunc;
		this.yFunc = yFunc;
		super();
	}
}
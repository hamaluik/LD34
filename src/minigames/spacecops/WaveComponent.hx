package minigames.spacecops;

import tusk.PromiseComponent;
import promhx.Promise;

class WaveComponent extends PromiseComponent {
	public var t:Float;
	public var period:Float;
	public var i:Int;
	public var count:Int;
	public var numDead:Int = 0;

	public var spawnFunc:Float->Int->Int->Promise<Bool>;
	public var life:Float;
	public var xIndex:Int;
	public var yIndex:Int;

	public function new(period:Float, count:Int, spawnFunc:Float->Int->Int->Promise<Bool>, life:Float, xIndex:Int, yIndex:Int) {
		this.t = 0;
		this.period = period;
		this.i = 0;
		this.count = count;
		this.numDead = 0;
		this.spawnFunc = spawnFunc;
		this.life = life;
		this.xIndex = xIndex;
		this.yIndex = yIndex;
		super();
	}
}
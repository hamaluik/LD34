package minigames.sledtillyouredead;

import tusk.Component;
import tusk.resources.Mesh;

class AnimatedSledComponent extends Component {
	public var frameTime:Float;
	public var t:Float = 0;
	public var frame:Int;
	public var frames:Int;
	public var mesh:Mesh;

	public var destroyOnDone:Bool;

	public var uvxDelta:Float;

	public function new(mesh:Mesh, frames:Int, frameRate:Float, ?destroyOnDone:Bool) {
		this.mesh = mesh;
		this.t = 0;
		this.frame = tusk.math.Random.int(0, frames - 1);
		this.frames = frames;
		this.uvxDelta = 1.0 / frames;
		this.frameTime = 1.0 / frameRate;
		this.destroyOnDone = destroyOnDone == null ? false : true;
		super();
	}
}
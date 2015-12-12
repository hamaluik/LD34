package loading;

import tusk.PromiseComponent;
import glm.Vec3;

class SlideComponent extends PromiseComponent {
	public var t:Float;
	public var totalLength:Float;
	public var easing:Float->Float->Float->Float->Float;

	public var startPos:Vec3;
	public var endPos:Vec3;

	public function new(time:Float, startPos:Vec3, endPos:Vec3, ?easing:Float->Float->Float->Float->Float) {
		this.t = 0;
		this.totalLength = time;
		this.startPos = startPos;
		this.endPos = endPos;
		this.easing = easing == null ? tusk.math.Ease.OutElastic : easing;
		super();
	}
}
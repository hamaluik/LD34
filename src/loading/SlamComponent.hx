package loading;

import tusk.PromiseComponent;

class SlamComponent extends PromiseComponent {
	public var t:Float;
	public var totalLength:Float;
	public var easing:Float->Float->Float->Float->Float;

	public var startScale:Float;
	public var endScale:Float;

	public function new(time:Float, startScale:Float, endScale:Float, ?easing:Float->Float->Float->Float->Float) {
		this.t = 0;
		this.totalLength = time;
		this.startScale = startScale;
		this.endScale = endScale;
		this.easing = easing == null ? tusk.math.Ease.OutElastic : easing;
		super();
	}
}
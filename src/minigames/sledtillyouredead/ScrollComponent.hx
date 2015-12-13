package minigames.sledtillyouredead;

import tusk.Component;

class ScrollComponent extends Component {
	public var clipY:Float;
	public var repeat:Bool;
	public var resetY:Float;

	public function new(clipY:Float, ?repeat:Bool, ?resetY:Float) {
		this.clipY = clipY;
		this.repeat = repeat == null ? false : repeat;
		this.resetY = resetY == null ? 0 : resetY;
		super();
	}
}
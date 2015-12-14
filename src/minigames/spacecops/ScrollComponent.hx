package minigames.spacecops;

import tusk.Component;

class ScrollComponent extends Component {
	public var clipY:Float;
	public var resetY:Float;

	public function new(clipY:Float, resetY:Float) {
		this.clipY = clipY;
		this.resetY = resetY;
		super();
	}
}
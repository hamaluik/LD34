package minigames.captainknowitall;

import tusk.Component;

class PlayerTimerComponent extends Component {
	public var t:Float;
	public var active:Bool = false;

	public function new(t:Float) {
		this.t = t;
		super();
	}
}

package minigames.spacecops;

import tusk.Component;

class BulletComponent extends Component {
	public var owner:Int;
	public function new(owner:Int) {
		this.owner = owner;
		super();
	}
}
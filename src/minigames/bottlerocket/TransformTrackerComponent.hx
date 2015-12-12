package minigames.bottlerocket;

import tusk.Component;
import tusk.lib.comp.TransformComponent;

class TransformTrackerComponent extends Component {
	public var t1:TransformComponent;
	public var t2:TransformComponent;

	public function new(t1:TransformComponent, t2:TransformComponent) {
		this.t1 = t1;
		this.t2 = t2;
		super();
	}
}
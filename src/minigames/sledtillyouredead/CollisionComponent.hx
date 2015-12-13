package minigames.sledtillyouredead;

import tusk.PromiseComponent;

class CollisionComponent extends PromiseComponent {
	public var radius:Float;
	public var layer:Int;
	public function new(radius:Float, layer:Int=1) {
		this.radius = radius;
		this.layer = layer;
		super();
	}
}
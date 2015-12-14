package minigames.spacecops;

import tusk.Component;

class ShooterComponent extends Component {
	public var t:Float = 0;
	public var player:Int;
	public var spawnBullet:Int->Float->Float->Void;

	public function new(player:Int, spawnBullet:Int->Float->Float->Void) {
		this.t = 0;
		this.player = player;
		this.spawnBullet = spawnBullet;
		super();
	}
}
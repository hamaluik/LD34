package minigames.sledtillyouredead;

import tusk.Component;

class SpawnComponent extends Component {
	public var spawn:Void->Void;
	public var spawnAccumulator:Float = 0;

	public function new(spawn:Void->Void) {
		this.spawn = spawn;
		super();
	}
}
import snow.types.Types.Key;

import glm.Vec3;

class Player {
	public var name:String;
	public var isCPU:Bool;
	public var btnA:Int;
	public var btnB:Int;
	public var score:Int;
	public var btnAName:String;
	public var btnBName:String;
	public var colour:Vec3;

	public function new(name:String, isCPU:Bool, btnA:Int, btnAName:String, btnB:Int, btnBName:String, colour:Vec3) {
		this.name = name;
		this.isCPU = isCPU;
		this.btnA = btnA;
		this.btnB = btnB;
		this.score = 0;
		this.btnAName = btnAName;
		this.btnBName = btnBName;
		this.colour = colour;
	}
}

class GameTracker {
	private function new(){}

	public static var player:Array<Player> = [
		new Player('Player 1', false, Key.key_q, 'Q', Key.key_e, 'E', new Vec3(205, 53, 23) / 255),
		new Player('Mr. Computer', true, Key.key_i, 'I', Key.key_p, 'P', new Vec3(238, 196, 49) / 255)
	];
}
import snow.types.Types.Key;

class Player {
	public var name:String;
	public var isCPU:Bool;
	public var btnA:Int;
	public var btnB:Int;
	public var score:Int;
	public var btnAName:String;
	public var btnBName:String;

	public function new(name:String, isCPU:Bool, btnA:Int, btnAName:String, btnB:Int, btnBName:String) {
		this.name = name;
		this.isCPU = isCPU;
		this.btnA = btnA;
		this.btnB = btnB;
		this.score = 0;
		this.btnAName = btnAName;
		this.btnBName = btnBName;
	}
}

class GameTracker {
	private function new(){}

	public static var player:Array<Player> = [
		new Player('Player 1', false, Key.key_q, 'Q', Key.key_e, 'E'),
		new Player('Mr. Computer', true, Key.key_i, 'I', Key.key_p, 'P')
	];
}
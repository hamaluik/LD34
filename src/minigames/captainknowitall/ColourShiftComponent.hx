package minigames.captainknowitall;

import tusk.Component;
import hxColorToolkit.spaces.HSB;

class ColourShiftComponent extends Component {
	public var colourMain:HSB;
	public var colourSecond:HSB;
	public var t:Float;
	public var fadeTime:Float;
	public var active:Bool = false;

	public var startSaturation:Float = 75;
	public var mainStartBrightness:Float = 90;
	public var secondStartBrightness:Float = 10;

	public var easing:Float->Float->Float->Float->Float;

	public function reset(hue:Float) {
		t = 0;
		colourMain = new HSB(hue, startSaturation, mainStartBrightness);
		colourSecond = new HSB(hue, startSaturation, secondStartBrightness);
	}

	public function new(hue:Float, fadeTime:Float, easing:Float->Float->Float->Float->Float) {
		this.fadeTime = fadeTime;
		this.easing = easing;
		reset(hue);
		super();
	}
}
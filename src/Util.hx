import glm.Vec4;
import hxColorToolkit.spaces.HSB;
import hxColorToolkit.spaces.RGB;

class Util {
	public static function randomGradientColours():Array<Vec4> {
		// pick a random hue
		var hue:Float = tusk.math.Random.float(0, 359.9);
		var topColour:HSB = new HSB(hue, 75, 90);
		var bottomColour:HSB = new HSB(hue, 75, 10);

		var trgb:RGB = topColour.toRGB();
		var brgb:RGB = bottomColour.toRGB();

		return [
			new Vec4(brgb.red, brgb.green, brgb.blue, 255) / 255,
			new Vec4(trgb.red, trgb.green, trgb.blue, 255) / 255
		];
	}
}
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

	// http://stackoverflow.com/questions/23689001/how-to-reliably-format-a-floating-point-number-to-a-specified-number-of-decimal
	public static function floatToStringPrecision(n:Float, prec:Int):String {
		n = Math.round(n * Math.pow(10, prec));
		var str = ''+n;
		var len = str.length;
		if(len <= prec) {
			while(len < prec) {
				str = '0'+str;
				len++;
			}
			return '0.'+str;
		}
		else{
			return str.substr(0, str.length-prec) + '.'+str.substr(str.length-prec);
		}
	}

	// taken from https://github.com/jasononeil/hxrandom/blob/master/src/Random.hx
	public static function shuffle<T>(arr:Array<T>):Array<T>
	{
		if (arr!=null) {
			for (i in 0...arr.length) {
				var j = tusk.math.Random.int(0, arr.length - 1);
				var a = arr[i];
				var b = arr[j];
				arr[i] = b;
				arr[j] = a;
			}
		}
		return arr;
	}
}
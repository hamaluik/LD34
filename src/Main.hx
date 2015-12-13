import tusk.*;

import tusk.debug.Log;
import tusk.events.*;

import tusk.resources.Texture;
import tusk.macros.ComponentIndexer;

import promhx.Deferred;
import promhx.Promise;
import promhx.Stream;

import haxe.ds.StringMap;
import tusk.defaults.scenes.TechScreen;
import tusk.defaults.scenes.SplashScreen;

class Main extends Game {
	override public function get_title():String {
		return "LD34 by FuzzyWuzzie";
	}
	override public function get_width():Int {
		return 900;
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

	private var shuffleIndex:Int = 0;
	private var sceneIndices:Array<Int> = [0, 1];
	private var minigameDone:Deferred<Scene> = new Deferred<Scene>();
	private function pickRandomLevel() {
		var scene:Scene = switch(sceneIndices[shuffleIndex]) {
			default: new minigames.BottleRocket();
			case 1: new minigames.SledTillYoureDead();
		}
		Tusk.pushScene(scene).then(function(scene:Scene) {
			Tusk.removeScene(scene);
			shuffleIndex++;
			if(shuffleIndex >= sceneIndices.length) {
				sceneIndices = shuffle(sceneIndices);
				shuffleIndex = 0;
			}
			minigameDone.resolve(scene);
		});
	}

	override public function setup() {
		Log.info('Setting up game...');
		/*sceneIndices = shuffle(sceneIndices);
		Tusk.pushScene(new tusk.defaults.scenes.SplashScreen()).pipe(function(scene:tusk.Scene) {
			Tusk.removeScene(scene);
			return Tusk.pushScene(new Intro());
		}).then(function(scene:Scene) {
			Tusk.removeScene(scene);
			pickRandomLevel();
			Stream.whenever(minigameDone.stream()).then(function(_) {
				pickRandomLevel();
			});
		});*/
		
		//Tusk.pushScene(new Intro());
		//Tusk.pushScene(new minigames.BottleRocket());
		Tusk.pushScene(new minigames.SledTillYoureDead());
	}
}
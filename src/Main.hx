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

	private var minigameDone:Deferred<Scene> = new Deferred<Scene>();
	private function pickRandomLevel() {
		var dice:Int = tusk.math.Random.int(0, 1);
		var scene:Scene = switch(dice) {
			default: new minigames.BottleRocket();
			case 1: new minigames.SledTillYoureDead();
		}
		Tusk.pushScene(scene).then(function(scene:Scene) {
			Tusk.removeScene(scene);
			minigameDone.resolve(scene);
		});
	}

	override public function setup() {
		Log.info('Setting up game...');
		Tusk.pushScene(new tusk.defaults.scenes.SplashScreen()).pipe(function(scene:tusk.Scene) {
			Tusk.removeScene(scene);
			return Tusk.pushScene(new Intro());
		}).then(function(scene:Scene) {
			Tusk.removeScene(scene);
			pickRandomLevel();
			Stream.whenever(minigameDone.stream()).then(function(_) {
				pickRandomLevel();
			});
		});

		/*pickRandomLevel();
		Stream.whenever(minigameDone.stream()).then(function(_) {
			pickRandomLevel();
		});*/
		
		//Tusk.pushScene(new Intro());
		//Tusk.pushScene(new minigames.BottleRocket());
		//Tusk.pushScene(new minigames.SledTillYoureDead());
	}
}
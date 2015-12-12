import tusk.*;

import tusk.debug.Log;
import tusk.events.*;

import tusk.resources.Texture;
import tusk.macros.ComponentIndexer;

import promhx.Promise;

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

	override public function setup() {
		Log.info('Setting up game...');
		Tusk.pushScene(new tusk.defaults.scenes.SplashScreen()).pipe(function(scene:tusk.Scene) {
			Tusk.removeScene(scene);
			return Tusk.pushScene(new minigames.BottleRocket());
		});
		//Tusk.pushScene(new minigames.BottleRocket());
	}
}
package minigames;

import tusk.debug.Log;
import tusk.lib.comp.Camera2DComponent;
import tusk.lib.comp.MaterialComponent;
import tusk.lib.comp.TransformComponent;
import tusk.lib.proc.Camera2DProcessor;
import tusk.lib.proc.MaterialProcessor;
import tusk.lib.proc.Renderer2DProcessor;
import tusk.lib.proc.TransformProcessor;
import tusk.Tusk;
import tusk.Scene;
import tusk.Entity;
import tusk.resources.*;
import tusk.lib.comp.TextComponent;
import tusk.lib.comp.*;
import tusk.lib.proc.*;

import tusk.modules.tiled.TileMap;

import promhx.Deferred;
import promhx.Promise;
import promhx.Stream;

import glm.Vec2;
import glm.Vec3;
import glm.Quat;
import glm.Vec4;

import tusk.events.*;

import minigames.captainknowitall.*;

class Question {
	public var question:String;
	public var correctAnswer:String;
	public var wrongAnswer:String;

	public function new(question:String, correctAnswer:String, wrongAnswer:String) {
		this.question = question;
		this.correctAnswer = correctAnswer;
		this.wrongAnswer = wrongAnswer;
	}
}

class CaptainKnowItAll extends Scene {
	public function new() {
		super('CaptainKnowItAll');
	}

	private var questionNumber:Int = 0;
	private var questions:Array<Question> = [
		new Question('How tall is Mount Everest?', '8,848 m', '11,426 m'),
		new Question('How hot is the sun?', '5,778 K', '4,923 K'),
		new Question('What is the population of Canada?', '35 million', '45 million'),
		new Question('How far away is the moon?', '384 Mm', '229 Mm'),
		new Question('How many days are in May?', '31', '30'),
		new Question('Where is the hottest place on Earth?', 'Al Aziziyah', 'Death Valley'),
		new Question('What year did the titanic sink?', '1912', '1914'),
		new Question('How many Earths can fit into the sun?', '1.3 million', '6.9 million'),
		new Question('What year was Elton John born?', '1947', '1952'),
		new Question('Where is the coldest place on earth?', 'Antarctica', 'The North Pole'),
		new Question('What is 6 x 7?', '42', '47'),
		new Question('Who is the fastest man in the world?', 'Usain Bolt', 'Tyson Gay'),
		new Question('What element begins with the letter \'K\'?', 'Potassium', 'Krypton'),
		new Question('Who painted the Mona Lisa?', 'Da Vinci', 'Michelangelo'),
		new Question('Who painted the Sistine Chapel?', 'Michelangelo', 'Da Vinci'),
		new Question('Who wrote the James Bond books?', 'Ian Fleming', 'Arthur Conan Doyle'),
		new Question('Who sang "My Way"?', 'Frank Sinatra', 'Dean Martin'),
		new Question('What\'s the capital of Scotland?', 'Edinburgh', 'Glasgow'),
		new Question('Which is the smallest ocean?', 'Artic', 'Indian'),
		new Question('Can Queen Elizabeth the Second vote?', 'No', 'Yes'),
		new Question('Where was Christopher Columbus born?', 'Italy', 'Spain'),
		new Question('Who starts first in chess?', 'White', 'Black'),
		new Question('Which planet is nearest the sun?', 'Mercury', 'Venus'),
		new Question('What does the roman numeral C represent?', '100', '1000'),
		new Question('Where is St. Paul\'s Cathedral?', 'London', 'Rome'),
		new Question('Which country has the longest coastline?', 'Canada', 'Russia'),
		new Question('Which is bigger?', 'Jupiter', 'Saturn'),
		new Question('How many planets are in our solar system?', 'Eight', 'Nine'),
		new Question('What colour is Yoda?', 'Green', 'Peach')
	];
	private var questionDoneDef:Deferred<Bool> = new Deferred<Bool>();
	private var questionDone:Stream<Bool>;
	public static var aIsCorrect:Bool;

	private var quad:Mesh;
	private var particlesMaterial:Material;

	private var textMesh:Mesh;
	private var font:Font;
	private var fontMat:Material;

	private var circleOutMat:Material;

	private var countdownMusic:Sound;

	private var bgMaterial:Material;

	private var loadingCrunch:Sound;
	private var winMusic:Sound;

	private function loadAssets():Promise<Scene> {
		var def:Deferred<Scene> = new Deferred<Scene>();
		var prom:Promise<Scene> = def.promise();

		// load assets!
		Promise.when(
			tusk.defaults.Primitives.loadQuad(),
			tusk.defaults.Materials.loadParticlesUntextured(),
			tusk.defaults.Primitives.loadTextMesh(),
			tusk.defaults.Fonts.loadSubatomic_Screen(),
			tusk.defaults.Materials.loadTextBasic(),
			tusk.defaults.Materials.loadEffectCircleOut(),
			Tusk.assets.loadSound(tusk.Files.sounds___countdown__ogg),
			tusk.defaults.Materials.loadUnlitColoured(),
			Tusk.assets.loadSound(tusk.Files.sounds___loadingcrunch__ogg),
			Tusk.assets.loadSound(tusk.Files.sounds___wintrumpet__ogg)
		).then(function(quad:Mesh, particlesMaterial:Material, textMesh:Mesh, font:Font, fontMat:Material, circleOutMat:Material, countdownMusic:Sound,
			bgMaterial:Material,
			loadingCrunch:Sound, winMusic:Sound) {
			this.quad = quad;
			this.particlesMaterial = particlesMaterial;

			this.circleOutMat = circleOutMat;

			this.textMesh = textMesh;
			this.font = font;
			this.fontMat = fontMat;
			this.fontMat.textures = new Array<Texture>();
			this.fontMat.textures.push(font.texture);

			this.countdownMusic = countdownMusic;
			this.bgMaterial = bgMaterial;
			this.loadingCrunch = loadingCrunch;
			this.winMusic = winMusic;

			def.resolve(this);
		}).catchError(function(err:Dynamic) {
			Log.error(err);
			def.throwError('Failed to load assets!');
		});

		return prom;
	}

	var bgColourShift:ColourShiftComponent;
	var crunchSoundComponent:SoundComponent;
	var player1Score:PlayerScoreComponent;
	var player1Timer:PlayerTimerComponent;
	var player1Answer:PlayerAnswerComponent;
	var player1LockedIn:TextComponent;
	var player2Score:PlayerScoreComponent;
	var player2Timer:PlayerTimerComponent;
	var player2Answer:PlayerAnswerComponent;
	var player2LockedIn:TextComponent;

	private var questionEntity:Entity;
	private var answerAEntity:Entity;
	private var answerBEntity:Entity;

	private var questionsAllDoneDef:Deferred<Bool> = new Deferred<Bool>();
	private var questionsAllDone:Promise<Bool>;

	private function doQuestion() {
		player1Answer.answer = -1;
		player2Answer.answer = -1;

		aIsCorrect = tusk.math.Random.bool();
		crunchSoundComponent.play = true;
		var scvs:loading.SlamComponent = new loading.SlamComponent(0.5, 96, 4);
		questionEntity = new Entity(this, 'Question', [
			new TransformComponent(new Vec3(0, 128, 0.05), Quat.identity(), new Vec3(4, 4, 4)),
			new MeshComponent(textMesh.clone('vstext')),
			new MaterialComponent(fontMat.path),
			new TextComponent(font, questions[questionNumber].question,
				TextAlign.Centre, TextVerticalAlign.Top,
				new Vec4(1, 1, 1, 1)),
			scvs
		]);
		entities.push(questionEntity);
		scvs.done.pipe(function(_) {
			crunchSoundComponent.play = true;
			var scaa:loading.SlamComponent = new loading.SlamComponent(0.5, 16, 3);
			answerAEntity = new Entity(this, 'Answer A', [
				new TransformComponent(new Vec3(-256, 0, 0.05), Quat.identity(), new Vec3(3, 3, 3)),
				new MeshComponent(textMesh.clone('answerAtext')),
				new MaterialComponent(fontMat.path),
				new TextComponent(font, aIsCorrect ? questions[questionNumber].correctAnswer : questions[questionNumber].wrongAnswer,
					TextAlign.Centre, TextVerticalAlign.Centre,
					new Vec4(1, 1, 1, 1)),
				scaa
			]);
			entities.push(answerAEntity);
			return scaa.done;
		}).pipe(function(_) {
			crunchSoundComponent.play = true;
			var scab:loading.SlamComponent = new loading.SlamComponent(0.5, 16, 3);
			answerBEntity = new Entity(this, 'Answer B', [
				new TransformComponent(new Vec3(256, 0, 0.05), Quat.identity(), new Vec3(3, 3, 3)),
				new MeshComponent(textMesh.clone('answerBtext')),
				new MaterialComponent(fontMat.path),
				new TextComponent(font, aIsCorrect ? questions[questionNumber].wrongAnswer : questions[questionNumber].correctAnswer,
					TextAlign.Centre, TextVerticalAlign.Centre,
					new Vec4(1, 1, 1, 1)),
				scab
			]);
			entities.push(answerBEntity);
			return scab.done;
		}).pipe(function(_) {
			bgColourShift.active = true;
			player1Timer.active = true;
			player1Answer.reset();
			player2Timer.active = true;
			player2Answer.reset();

			// wait for both players to answer
			var answerDef:Deferred<Bool> = new Deferred<Bool>();
			var answerPromise:Promise<Bool> = answerDef.promise();
			//Promise.when(player1Answer.done).then(function(_) { js.Lib.debug(); answerDef.resolve(true); });
			player1Answer.done.then(function(_) { player1LockedIn.text = 'Locked in!'; if(player2Answer.done.isResolved()) answerDef.resolve(true); });
			player2Answer.done.then(function(_) { player2LockedIn.text = 'Locked in!'; if(player1Answer.done.isResolved()) answerDef.resolve(true); });
			return answerPromise;
		}).then(function(_) {
			// ok, both players have answered!
			// update their scores!
			if(aIsCorrect) {
				player1Score.score += if(player1Answer.answer == 0) 1 else if(player1Answer.answer == 1) -1 else 0;
				player2Score.score += if(player2Answer.answer == 0) 1 else if(player2Answer.answer == 1) -1 else 0;
			}
			else if(!aIsCorrect) {
				player1Score.score += if(player1Answer.answer == 1) 1 else if(player1Answer.answer == 0) -1 else 0;
				player2Score.score += if(player2Answer.answer == 1) 1 else if(player2Answer.answer == 0) -1 else 0;
			}

			// reset the colour shift
			bgColourShift.reset(tusk.math.Random.float(0, 359.9));
			bgColourShift.active = false;

			// wipe the old question
			Tusk.removeEntity(questionEntity);
			Tusk.removeEntity(answerAEntity);
			Tusk.removeEntity(answerBEntity);

			questionNumber++;
			player1Answer.reset();
			player1LockedIn.text = ''; 
			player2Answer.reset();
			player2LockedIn.text = ''; 

			// see if we're done
			if((player1Timer.t <= 0 && player2Timer.t <= 0) || questionNumber >= questions.length) {
				questionsAllDoneDef.resolve(true);
			}
			else {
				// let us go on to the next question
				questionDoneDef.resolve(true);
			}
		});
	}

	override public function onLoad(event:LoadEvent) {
		if(event.scene != this) return;
		Log.info("Loading captain know it all scene..");

		var loadComplete:Promise<Scene> = loadAssets();
		var loadingScreen:LoadingScreen = new LoadingScreen('Captain Know-It-All!', loadComplete);
		Tusk.pushScene(loadingScreen);
		Promise.when(loadingScreen.sceneDone.promise(), loadComplete).then(function(_, _) {
			Tusk.removeScene(loadingScreen);
		//loadComplete.then(function(_) {
			// shuffle the questions!
			questions = Util.shuffle(questions);

			Camera2DProcessor.cameras = new Array<Camera2DComponent>();
			// start the game!
			Log.info('Starting captain know it all!');

			this.useProcessor(new PlayerAnswerProcessor());
			this.useProcessor(new loading.SlamProcessor());
			this.useProcessor(new loading.SlideProcessor());
			this.useProcessor(new PlayerTimerProcessor());
			this.useProcessor(new PlayerScoreProcessor());
			this.useProcessor(new ColourShiftProcessor());
			this.useProcessor(new TimedPromiseProcessor());
			this.useProcessor(new MeshProcessor());
			this.useProcessor(new MaterialProcessor());
			this.useProcessor(new Camera2DProcessor());
			this.useProcessor(new TransformProcessor());
			this.useProcessor(new TextProcessor());
			this.useProcessor(new Renderer2DProcessor(new Vec4(0.9, 0.9, 0.9, 1)));
			this.useProcessor(new CircleEffectRendererProcessor());
			this.useProcessor(new SoundProcessor());

			// create the promise for all questions being done
			questionsAllDone = questionsAllDoneDef.promise();
			questionDone = questionDoneDef.stream();

			// create the camera
			var w:Float = Tusk.instance.app.window.width;
			var h:Float = Tusk.instance.app.window.height;
			var camera:Entity = new Entity(this, 'Camera', [
				new TransformComponent(new Vec3(0, 0, 0), Quat.identity(), new Vec3(1, 1, 1)),
				new Camera2DComponent(new Vec2(w, h) / -2.0, new Vec2(w, h) / 2.0, -100, 100)
			]);
			entities.push(camera);

			// create the background
			var bgMesh:Mesh = quad.clone('mesh.bgcaptain');
			bgMesh.colours = new Array<Vec4>();
			var gradientColours:Array<Vec4> = Util.randomGradientColours();
			for(v in bgMesh.vertices) {
				var colour:Vec4 = gradientColours[if(v.y > 0) 1 else 0];
				bgMesh.colours.push(colour);
			}
			bgColourShift = new ColourShiftComponent(tusk.math.Random.float(0, 359.9), 5, tusk.math.Ease.OutCubic);
			entities.push(new Entity(this, 'BG', [
				new TransformComponent(new Vec3(0, 0, 1), Quat.identity(), new Vec3(1024, 1024, 1024)),
				new MeshComponent(bgMesh),
				new MaterialComponent(bgMaterial),
				bgColourShift
			]));

			// setup the players
			player1Score = new PlayerScoreComponent(0);
			player1Timer = new PlayerTimerComponent(10);
			player1Answer = new PlayerAnswerComponent(0, player1Timer);
			player1LockedIn = new TextComponent(font, '',
					TextAlign.Left, TextVerticalAlign.Bottom,
					new Vec4(1, 1, 1, 1));
			player2Score = new PlayerScoreComponent(1);
			player2Timer = new PlayerTimerComponent(10);
			player2Answer = new PlayerAnswerComponent(1, player2Timer);
			player2LockedIn = new TextComponent(font, '',
					TextAlign.Right, TextVerticalAlign.Bottom,
					new Vec4(1, 1, 1, 1));

			// create the player timers
			entities.push(new Entity(this, 'Player 1', [
				new TransformComponent(new Vec3(Tusk.game.width / -2 + 32, Tusk.game.height / -2 + font.lineHeight * 2 + 32, 0.05), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(textMesh.clone('p1text')),
				new MaterialComponent(fontMat.path),
				new TextComponent(font, '${GameTracker.player[0].name}: 0',
					TextAlign.Left, TextVerticalAlign.Top,
					new Vec4(1, 1, 1, 1)),
				player1Score,
				player1Answer
			]));
			entities.push(new Entity(this, 'Player 1 Timer', [
				new TransformComponent(new Vec3(Tusk.game.width / -2 + 32, Tusk.game.height / -2 + 32, 0.05), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(textMesh.clone('p1timertext')),
				new MaterialComponent(fontMat.path),
				new TextComponent(font, '10.000',
					TextAlign.Left, TextVerticalAlign.Top,
					new Vec4(1, 1, 1, 1)),
				player1Timer
			]));
			entities.push(new Entity(this, 'Player 1 Locked In', [
				new TransformComponent(new Vec3(Tusk.game.width / -2 + 32, Tusk.game.height / -2 + font.lineHeight * 3 + 32, 0.05), Quat.identity(), new Vec3(4, 4, 4)),
				new MeshComponent(textMesh.clone('p1lockedintext')),
				new MaterialComponent(fontMat.path),
				player1LockedIn
			]));
			entities.push(new Entity(this, 'Player 2', [
				new TransformComponent(new Vec3(Tusk.game.width / 2 - 32, Tusk.game.height / -2 + font.lineHeight * 2 + 32, 0.05), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(textMesh.clone('p2text')),
				new MaterialComponent(fontMat.path),
				new TextComponent(font, '${GameTracker.player[1].name}: 0',
					TextAlign.Right, TextVerticalAlign.Top,
					new Vec4(1, 1, 1, 1)),
				player2Score,
				player2Answer
			]));
			entities.push(new Entity(this, 'Player 2 Timer', [
				new TransformComponent(new Vec3(Tusk.game.width / 2 - 32, Tusk.game.height / -2 + 32, 0.05), Quat.identity(), new Vec3(2, 2, 2)),
				new MeshComponent(textMesh.clone('p2timertext')),
				new MaterialComponent(fontMat.path),
				new TextComponent(font, '10.000',
					TextAlign.Right, TextVerticalAlign.Top,
					new Vec4(1, 1, 1, 1)),
				player2Timer
			]));
			entities.push(new Entity(this, 'Player 2 Locked In', [
				new TransformComponent(new Vec3(Tusk.game.width / 2 - 32, Tusk.game.height / -2 + font.lineHeight * 3 + 32, 0.05), Quat.identity(), new Vec3(4, 4, 4)),
				new MeshComponent(textMesh.clone('p2lockedintext')),
				new MaterialComponent(fontMat.path),
				player2LockedIn
			]));

			// create the countdown music
			entities.push(new Entity(this, 'Countdown Music', [
				new SoundComponent(countdownMusic.path, true)
			]));
			crunchSoundComponent = new SoundComponent(loadingCrunch.path, false);
			entities.push(new Entity(this, 'CrunchSound', [crunchSoundComponent]));

			// start the countdown!
			var countdownText:TextComponent = new TextComponent(font, '3',
					TextAlign.Centre, TextVerticalAlign.Centre,
					new Vec4(1, 1, 1, 1));
			var countdownTimer:TimedPromiseComponent = new TimedPromiseComponent(1.0);
			var countdownTransform:TransformComponent = new TransformComponent(new Vec3(0, 0, -0.99), Quat.identity(), new Vec3(8, 8, 8));
			var countdownEntity:Entity = new Entity(this, 'Countdown', [
				countdownTransform,
				new MeshComponent(textMesh.clone('br.countdowntextmesh')),
				new MaterialComponent(fontMat.path),
				countdownText,
				countdownTimer
			]);
			entities.push(countdownEntity);
			countdownTimer.done.pipe(function(_) {
				countdownText.text = '2';
				countdownTimer.t = 0;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				countdownText.text = '1';
				countdownTimer.t = 0;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				countdownText.text = 'Go!';
				countdownTimer.t = 0;
				countdownTimer.wait = 0.5;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				countdownText.text = '';

				Stream.whenever(questionDone).then(function(_) {
					doQuestion();
				});
				questionDoneDef.resolve(true);
				return questionsAllDone;
			}).pipe(function(_) {
				var winningPlayer:Int = -1;
				if(player1Score.score == player2Score.score) {
					winningPlayer = player1Timer.t >= player2Timer.t ? 0 : 1;
				}
				else {
					winningPlayer = player1Score.score > player2Score.score ? 0 : 1;
				}

				// show who won
				countdownText.text = '${GameTracker.player[winningPlayer].name} wins!';
				countdownTransform.scale.set(4, 4, 4);
				countdownTransform.lastScale.copy(countdownTransform.scale);

				// give em a point!
				GameTracker.player[winningPlayer].score++;

				// play the win music!
				entities.push(new Entity(this, 'WinMusic', [new SoundComponent(winMusic.path, true)]));

				// and delay
				countdownTimer.t = 0;
				countdownTimer.wait = 3;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_) {
				// circle out
				var cec:CircleEffectComponent = new CircleEffectComponent(false);
				entities.push(new Entity(this, 'Circle Effect', [
					new TransformComponent(new Vec3(0, 0, 0.1), Quat.identity(), new Vec3(1024, 1024, 1024)),
					new MeshComponent(quad.path),
					new MaterialComponent(circleOutMat.path),
					cec
				]));
				return cec.done;
			}).then(function(_) {
				sceneDone.resolve(this);
			});
		});
	}
}
package minigames.captainknowitall;

import tusk.debug.Log;
import tusk.Matcher;
import tusk.Processor;
import tusk.Entity;
import tusk.events.UpdateEvent;
import tusk.lib.comp.MeshComponent;
import tusk.Tusk;
import hxColorToolkit.spaces.RGB;
import glm.Vec4;

class ColourShiftProcessor extends Processor {
	public function new(?entities:Array<Entity>) {
		matcher = new Matcher().include(ColourShiftComponent.tid).include(MeshComponent.tid);
		super(entities);
	}
	
	override public function onUpdate(event:UpdateEvent):Void {
		for(entity in entities) {
			var c:ColourShiftComponent = cast entity.get(ColourShiftComponent.tid);
			var m:MeshComponent = cast entity.get(MeshComponent.tid);

			c.colourMain.saturation = c.easing(c.t, c.startSaturation, 0 - c.startSaturation, c.fadeTime);
			c.colourSecond.saturation = c.easing(c.t, c.startSaturation, 0 - c.startSaturation, c.fadeTime);
			c.colourMain.brightness = c.easing(c.t, c.mainStartBrightness, 0 - c.mainStartBrightness, c.fadeTime);
			c.colourSecond.brightness = c.easing(c.t, c.secondStartBrightness, 0 - c.secondStartBrightness, c.fadeTime);

			var topColour:RGB = c.colourMain.toRGB();
			var botColour:RGB = c.colourSecond.toRGB();

			var top:Vec4 = new Vec4(topColour.red, topColour.green, topColour.blue, 255) / 255;
			var bot:Vec4 = new Vec4(botColour.red, botColour.green, botColour.blue, 255) / 255;

			m.mesh.colours[0].copy(bot);
			m.mesh.colours[1].copy(bot);
			m.mesh.colours[2].copy(top);
			m.mesh.colours[3].copy(top);
			m.mesh.colours[4].copy(top);
			m.mesh.colours[5].copy(bot);
			m.bufferDirty = true;

			if(!c.active) continue;
			c.t += event.dt;
			if(c.t >= c.fadeTime) {
				c.t = c.fadeTime;
			}
		}
	}
}
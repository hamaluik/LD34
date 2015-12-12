package colourkey;

import tusk.Component;
import glm.Vec3;

class ColourKeyComponent extends Component {
	public var colour:Vec3;

	public function new(colour:Vec3) {
		this.colour = colour;
		super();
	}
}
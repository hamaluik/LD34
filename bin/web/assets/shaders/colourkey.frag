// reference: http://www.gamedev.net/topic/571969-color-replacement-using-glsl/
precision mediump float;
precision mediump int;

uniform sampler2D texture;
uniform vec3 colour;

varying vec2 v_uv;

void main() {
	vec3 colourKey = vec3(0.0, 1.0, 0.0);
	vec4 frag = texture2D(texture, v_uv);

	if(frag.r == colourKey.r && frag.g == colourKey.g && frag.b == colourKey.b) {
		frag = vec4(colour, frag.a);
	}

    gl_FragColor = frag;
}
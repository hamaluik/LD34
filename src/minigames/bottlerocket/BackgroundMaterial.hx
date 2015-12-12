package minigames.bottlerocket;

import glm.Mat4;

import tusk.resources.Shader;
import tusk.resources.Material;

import promhx.Deferred;
import promhx.Promise;

import snow.modules.opengl.GL;
import snow.modules.opengl.GL.GLBuffer;

import tusk.Tusk;

class BackgroundMaterial {
	public static function load():Promise<Material> {
		#if snow
		if(Tusk.assets.isLoaded("br_unlit.textured")) {
			var d:Deferred<Material> = new Deferred<Material>();
			d.resolve(Tusk.assets.getMaterial("br_unlit.textured"));
			return d.promise();
		}

		var shader:Shader = new Shader("br_unlit.textured",
			haxe.Resource.getString("unlit.textured.vert"),
			haxe.Resource.getString("unlit.textured.frag"));
		var mat = new Material("br_unlit.textured", shader);

		// setup the attribute flags
		mat.attributeFlags.set(AttributeTypes.Pos3);
		mat.attributeFlags.set(AttributeTypes.UV);

		GL.useProgram(mat.shader.program);
		var posLocation:Int = mat.shader.getAttributeLocation("position");
		var uvLocation:Int = mat.shader.getAttributeLocation("uv");

		mat.onRender = function(setupUniforms:SetupRenderUniformsCallback, vertexBuffer:GLBuffer, vertexCount:Int) {
			GL.useProgram(mat.shader.program);
			GL.blendFunc(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA);

			if(mat.textures != null && mat.textures.length > 0) {
				GL.activeTexture(GL.TEXTURE0);
				GL.bindTexture(GL.TEXTURE_2D, mat.textures[0].texture);
			}

			setupUniforms(mat);

			GL.enableVertexAttribArray(posLocation);
			GL.enableVertexAttribArray(uvLocation);
			GL.bindBuffer(GL.ARRAY_BUFFER, vertexBuffer);

			GL.vertexAttribPointer(posLocation, 3, GL.FLOAT, false, 5*4, 0);
			GL.vertexAttribPointer(uvLocation, 2, GL.FLOAT, false, 5*4, 3*4);

			GL.drawArrays(GL.TRIANGLES, 0, vertexCount);

			GL.bindTexture(GL.TEXTURE_2D, null);
			GL.bindBuffer(GL.ARRAY_BUFFER, null);
			GL.disableVertexAttribArray(posLocation);
			GL.disableVertexAttribArray(uvLocation);
			GL.useProgram(null);
		}

		return Tusk.assets.loadMaterial("br_unlit.textured", mat);
		#else
		return null;
		#end
	}
}
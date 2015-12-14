(function (console, $hx_exports, $global) { "use strict";
$hx_exports.promhx = $hx_exports.promhx || {};
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw new js__$Boot_HaxeError("EReg::matched");
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var Player = function(name,isCPU,btnA,btnAName,btnB,btnBName,colour) {
	this.name = name;
	this.isCPU = isCPU;
	this.btnA = btnA;
	this.btnB = btnB;
	this.score = 0;
	this.btnAName = btnAName;
	this.btnBName = btnBName;
	this.colour = colour;
};
$hxClasses["Player"] = Player;
Player.__name__ = ["Player"];
Player.prototype = {
	__class__: Player
};
var snow_system_input_Scancodes = function() { };
$hxClasses["snow.system.input.Scancodes"] = snow_system_input_Scancodes;
snow_system_input_Scancodes.__name__ = ["snow","system","input","Scancodes"];
var snow_system_input_Keycodes = function() { };
$hxClasses["snow.system.input.Keycodes"] = snow_system_input_Keycodes;
snow_system_input_Keycodes.__name__ = ["snow","system","input","Keycodes"];
snow_system_input_Keycodes.from_scan = function(scancode) {
	return scancode | snow_system_input_Scancodes.MASK;
};
snow_system_input_Keycodes.to_scan = function(keycode) {
	if((keycode & snow_system_input_Scancodes.MASK) != 0) return keycode & ~snow_system_input_Scancodes.MASK;
	switch(keycode) {
	case 13:
		return snow_system_input_Scancodes.enter;
	case 27:
		return snow_system_input_Scancodes.escape;
	case 8:
		return snow_system_input_Scancodes.backspace;
	case 9:
		return snow_system_input_Scancodes.tab;
	case 32:
		return snow_system_input_Scancodes.space;
	case 47:
		return snow_system_input_Scancodes.slash;
	case 48:
		return snow_system_input_Scancodes.key_0;
	case 49:
		return snow_system_input_Scancodes.key_1;
	case 50:
		return snow_system_input_Scancodes.key_2;
	case 51:
		return snow_system_input_Scancodes.key_3;
	case 52:
		return snow_system_input_Scancodes.key_4;
	case 53:
		return snow_system_input_Scancodes.key_5;
	case 54:
		return snow_system_input_Scancodes.key_6;
	case 55:
		return snow_system_input_Scancodes.key_7;
	case 56:
		return snow_system_input_Scancodes.key_8;
	case 57:
		return snow_system_input_Scancodes.key_9;
	case 59:
		return snow_system_input_Scancodes.semicolon;
	case 61:
		return snow_system_input_Scancodes.equals;
	case 91:
		return snow_system_input_Scancodes.leftbracket;
	case 92:
		return snow_system_input_Scancodes.backslash;
	case 93:
		return snow_system_input_Scancodes.rightbracket;
	case 96:
		return snow_system_input_Scancodes.grave;
	case 97:
		return snow_system_input_Scancodes.key_a;
	case 98:
		return snow_system_input_Scancodes.key_b;
	case 99:
		return snow_system_input_Scancodes.key_c;
	case 100:
		return snow_system_input_Scancodes.key_d;
	case 101:
		return snow_system_input_Scancodes.key_e;
	case 102:
		return snow_system_input_Scancodes.key_f;
	case 103:
		return snow_system_input_Scancodes.key_g;
	case 104:
		return snow_system_input_Scancodes.key_h;
	case 105:
		return snow_system_input_Scancodes.key_i;
	case 106:
		return snow_system_input_Scancodes.key_j;
	case 107:
		return snow_system_input_Scancodes.key_k;
	case 108:
		return snow_system_input_Scancodes.key_l;
	case 109:
		return snow_system_input_Scancodes.key_m;
	case 110:
		return snow_system_input_Scancodes.key_n;
	case 111:
		return snow_system_input_Scancodes.key_o;
	case 112:
		return snow_system_input_Scancodes.key_p;
	case 113:
		return snow_system_input_Scancodes.key_q;
	case 114:
		return snow_system_input_Scancodes.key_r;
	case 115:
		return snow_system_input_Scancodes.key_s;
	case 116:
		return snow_system_input_Scancodes.key_t;
	case 117:
		return snow_system_input_Scancodes.key_u;
	case 118:
		return snow_system_input_Scancodes.key_v;
	case 119:
		return snow_system_input_Scancodes.key_w;
	case 120:
		return snow_system_input_Scancodes.key_x;
	case 121:
		return snow_system_input_Scancodes.key_y;
	case 122:
		return snow_system_input_Scancodes.key_z;
	}
	return snow_system_input_Scancodes.unknown;
};
var glm__$Vec3_Vec3_$Impl_$ = {};
$hxClasses["glm._Vec3.Vec3_Impl_"] = glm__$Vec3_Vec3_$Impl_$;
glm__$Vec3_Vec3_$Impl_$.__name__ = ["glm","_Vec3","Vec3_Impl_"];
glm__$Vec3_Vec3_$Impl_$.get_x = function(this1) {
	return this1[0];
};
glm__$Vec3_Vec3_$Impl_$.set_x = function(this1,v) {
	return this1[0] = v;
};
glm__$Vec3_Vec3_$Impl_$.get_y = function(this1) {
	return this1[1];
};
glm__$Vec3_Vec3_$Impl_$.set_y = function(this1,v) {
	return this1[1] = v;
};
glm__$Vec3_Vec3_$Impl_$.get_z = function(this1) {
	return this1[2];
};
glm__$Vec3_Vec3_$Impl_$.set_z = function(this1,v) {
	return this1[2] = v;
};
glm__$Vec3_Vec3_$Impl_$._new = function(x,y,z) {
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	var this1;
	var arr = [];
	arr.push(x);
	arr.push(y);
	arr.push(z);
	this1 = arr;
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.set = function(this1,x,y,z) {
	if(x != null) this1[0] = x;
	if(y != null) this1[1] = y;
	if(z != null) this1[2] = z;
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.clone = function(this1) {
	var copy = glm__$Vec3_Vec3_$Impl_$._new();
	copy[0] = this1[0];
	copy[1] = this1[1];
	copy[2] = this1[2];
	return copy;
};
glm__$Vec3_Vec3_$Impl_$.copy = function(this1,v) {
	this1[0] = v[0];
	this1[1] = v[1];
	this1[2] = v[2];
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.addVec3 = function(this1,b) {
	this1[0] += b[0];
	this1[1] += b[1];
	this1[2] += b[2];
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.multiplyScalar = function(this1,b) {
	this1[0] *= b;
	this1[1] *= b;
	this1[2] *= b;
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.divideScalar = function(this1,b) {
	this1[0] /= b;
	this1[1] /= b;
	this1[2] /= b;
	return this1;
};
var GameTracker = function() { };
$hxClasses["GameTracker"] = GameTracker;
GameTracker.__name__ = ["GameTracker"];
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw new js__$Boot_HaxeError("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,__class__: List
};
var tusk_Scene = function(name) {
	this.sceneDone = new promhx_Deferred();
	this.name = null;
	this.name = name;
	this.processors = [];
	this.entities = [];
};
$hxClasses["tusk.Scene"] = tusk_Scene;
tusk_Scene.__name__ = ["tusk","Scene"];
tusk_Scene.prototype = {
	___connectRoutes: function() {
	}
	,hasProcessor: function(processor) {
		return HxOverrides.indexOf(this.processors,processor,0) > -1;
	}
	,useProcessor: function(processor) {
		if(this.hasProcessor(processor)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Can't add processor '" + Type.getClassName(processor == null?null:js_Boot.getClass(processor)) + "' because it already exists!",null,null,{ fileName : "Scene.hx", lineNumber : 67, className : "tusk.Scene", methodName : "useProcessor"}));
		processor.___connectRoutes();
		this.processors.push(processor);
	}
	,onLoad: function(event) {
	}
	,__class__: tusk_Scene
};
var tusk_Game = function() {
	this.currentScenes = [];
};
$hxClasses["tusk.Game"] = tusk_Game;
tusk_Game.__name__ = ["tusk","Game"];
tusk_Game.prototype = {
	get_title: function() {
		return "Unbranded Tusk Game";
	}
	,get_width: function() {
		return 960;
	}
	,get_height: function() {
		return 540;
	}
	,setup: function() {
	}
	,__class__: tusk_Game
};
var Main = function() {
	tusk_Game.call(this);
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.__super__ = tusk_Game;
Main.prototype = $extend(tusk_Game.prototype,{
	get_title: function() {
		return "Ludum Party!";
	}
	,get_width: function() {
		return 900;
	}
	,setup: function() {
		tusk_debug_Log.log("Setting up game...",tusk_debug_LogFunctions.Info,{ fileName : "Main.hx", lineNumber : 46, className : "Main", methodName : "setup"});
		tusk_Tusk.pushScene(new minigames_SpaceCops());
	}
	,__class__: Main
});
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var SpriteMaterial = function() { };
$hxClasses["SpriteMaterial"] = SpriteMaterial;
SpriteMaterial.__name__ = ["SpriteMaterial"];
SpriteMaterial.load = function() {
	var d = new promhx_Deferred();
	((function($this) {
		var $r;
		var varargf = function(f) {
			var ret = new promhx_Promise();
			var arr = [tusk_Tusk.assets.loadText("assets/shaders/colourkey.vert"),tusk_Tusk.assets.loadText("assets/shaders/colourkey.frag")];
			var p = promhx_Promise.whenAll(arr);
			p._update.push({ async : ret, linkf : function(x) {
				ret.handleResolve(f(arr[0]._val,arr[1]._val));
			}});
			return ret;
		};
		$r = { then : varargf};
		return $r;
	}(this))).then(function(vert,frag) {
		var shader = new tusk_resources_Shader("textured.colourkey",vert.text,frag.text);
		var mat = new tusk_resources_Material("textured.colourkey",shader);
		mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.Pos3[1];
		mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.UV[1];
		snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
		var posLocation = mat.shader.getAttributeLocation("position");
		var uvLocation = mat.shader.getAttributeLocation("uv");
		mat.onRender = function(setupUniforms,vertexBuffer,vertexCount) {
			snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
			snow_modules_opengl_web_GL.current_context.blendFunc(770,771);
			if(mat.textures != null && mat.textures.length > 0) {
				snow_modules_opengl_web_GL.current_context.activeTexture(33984);
				snow_modules_opengl_web_GL.current_context.bindTexture(3553,mat.textures[0].texture);
			}
			setupUniforms(mat);
			snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(posLocation);
			snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(uvLocation);
			snow_modules_opengl_web_GL.current_context.bindBuffer(34962,vertexBuffer);
			snow_modules_opengl_web_GL.current_context.vertexAttribPointer(posLocation,3,5126,false,20,0);
			snow_modules_opengl_web_GL.current_context.vertexAttribPointer(uvLocation,2,5126,false,20,12);
			snow_modules_opengl_web_GL.current_context.drawArrays(4,0,vertexCount);
			snow_modules_opengl_web_GL.current_context.bindTexture(3553,null);
			snow_modules_opengl_web_GL.current_context.bindBuffer(34962,null);
			snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(posLocation);
			snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(uvLocation);
			snow_modules_opengl_web_GL.current_context.useProgram(null);
		};
		tusk_Tusk.assets.loadMaterial("textured.colourkey",mat).then(function(mat1) {
			d.resolve(mat1);
		});
	});
	return d.promise();
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var TuskApp = function() { };
$hxClasses["TuskApp"] = TuskApp;
TuskApp.__name__ = ["TuskApp"];
TuskApp.main = function() {
	var snow1 = new snow_Snow();
	var hasLoop = true;
	var snowConfig = { has_loop : hasLoop, app_package : "com.blazingmammothgames.ld34"};
	tusk_debug_Log.log("Starting tusk " + "unknown+17fd14",tusk_debug_LogFunctions.Info,{ fileName : "TuskApp.hx", lineNumber : 23, className : "TuskApp", methodName : "main"});
	try {
		snow1.init(snowConfig,new tusk_Tusk(new Main()));
	} catch( exception ) {
		if (exception instanceof js__$Boot_HaxeError) exception = exception.val;
		if( js_Boot.__instanceof(exception,tusk_debug_Exception) ) {
			if(exception.fatal) tusk_debug_Log.log(exception.message,tusk_debug_LogFunctions.Fatal,{ fileName : "TuskApp.hx", lineNumber : 29, className : "TuskApp", methodName : "main"}); else tusk_debug_Log.log(exception,tusk_debug_LogFunctions.Error,{ fileName : "TuskApp.hx", lineNumber : 32, className : "TuskApp", methodName : "main"});
		} else throw(exception);
	}
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw new js__$Boot_HaxeError("No such constructor " + constr);
	if(Reflect.isFunction(f)) {
		if(params == null) throw new js__$Boot_HaxeError("Constructor " + constr + " need parameters");
		return Reflect.callMethod(e,f,params);
	}
	if(params != null && params.length != 0) throw new js__$Boot_HaxeError("Constructor " + constr + " does not need parameters");
	return f;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js_Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var glm_GLM = function() { };
$hxClasses["glm.GLM"] = glm_GLM;
glm_GLM.__name__ = ["glm","GLM"];
glm_GLM.translate = function(m,translation) {
	var t = glm__$Mat4_Mat4_$Impl_$._new(1.0);
	var x = glm__$Vec3_Vec3_$Impl_$.get_x(translation);
	t[0][3] = x;
	var x1 = glm__$Vec3_Vec3_$Impl_$.get_y(translation);
	t[1][3] = x1;
	var x2 = glm__$Vec3_Vec3_$Impl_$.get_z(translation);
	t[2][3] = x2;
	if(m == null) return t;
	var a = t;
	var rows = [(function($this) {
		var $r;
		var a1;
		{
			var a2;
			var a3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[0]),a[0][0]);
			var b2 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[1]),a[0][1]);
			a2 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a3),b2);
			var b1 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[2]),a[0][2]);
			a1 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a2),b1);
		}
		var b = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[3]),a[0][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a1),b);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a4;
		{
			var a5;
			var a6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[0]),a[1][0]);
			var b5 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[1]),a[1][1]);
			a5 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a6),b5);
			var b4 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[2]),a[1][2]);
			a4 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a5),b4);
		}
		var b3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[3]),a[1][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a4),b3);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a7;
		{
			var a8;
			var a9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[0]),a[2][0]);
			var b8 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[1]),a[2][1]);
			a8 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a9),b8);
			var b7 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[2]),a[2][2]);
			a7 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a8),b7);
		}
		var b6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[3]),a[2][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a7),b6);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a10;
		{
			var a11;
			var a12 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[0]),a[3][0]);
			var b11 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[1]),a[3][1]);
			a11 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a12),b11);
			var b10 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[2]),a[3][2]);
			a10 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a11),b10);
		}
		var b9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[3]),a[3][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a10),b9);
		return $r;
	}(this))];
	a = rows;
	return a;
};
glm_GLM.scale = function(m,scale) {
	var t = glm__$Mat4_Mat4_$Impl_$._new(1.0);
	var x = glm__$Vec3_Vec3_$Impl_$.get_x(scale);
	t[0][0] = x;
	var x1 = glm__$Vec3_Vec3_$Impl_$.get_y(scale);
	t[1][1] = x1;
	var x2 = glm__$Vec3_Vec3_$Impl_$.get_z(scale);
	t[2][2] = x2;
	if(m == null) return t;
	var a = t;
	var rows = [(function($this) {
		var $r;
		var a1;
		{
			var a2;
			var a3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[0]),a[0][0]);
			var b2 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[1]),a[0][1]);
			a2 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a3),b2);
			var b1 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[2]),a[0][2]);
			a1 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a2),b1);
		}
		var b = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[3]),a[0][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a1),b);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a4;
		{
			var a5;
			var a6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[0]),a[1][0]);
			var b5 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[1]),a[1][1]);
			a5 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a6),b5);
			var b4 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[2]),a[1][2]);
			a4 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a5),b4);
		}
		var b3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[3]),a[1][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a4),b3);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a7;
		{
			var a8;
			var a9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[0]),a[2][0]);
			var b8 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[1]),a[2][1]);
			a8 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a9),b8);
			var b7 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[2]),a[2][2]);
			a7 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a8),b7);
		}
		var b6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[3]),a[2][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a7),b6);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a10;
		{
			var a11;
			var a12 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[0]),a[3][0]);
			var b11 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[1]),a[3][1]);
			a11 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a12),b11);
			var b10 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[2]),a[3][2]);
			a10 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a11),b10);
		}
		var b9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(m[3]),a[3][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a10),b9);
		return $r;
	}(this))];
	a = rows;
	return a;
};
var glm__$Mat3_Mat3_$Impl_$ = {};
$hxClasses["glm._Mat3.Mat3_Impl_"] = glm__$Mat3_Mat3_$Impl_$;
glm__$Mat3_Mat3_$Impl_$.__name__ = ["glm","_Mat3","Mat3_Impl_"];
glm__$Mat3_Mat3_$Impl_$._new = function(scale) {
	if(scale == null) scale = 0;
	var this1;
	var arr = [glm__$Vec3_Vec3_$Impl_$._new(scale,0,0),glm__$Vec3_Vec3_$Impl_$._new(0,scale,0),glm__$Vec3_Vec3_$Impl_$._new(0,0,scale)];
	this1 = arr;
	return this1;
	return this1;
};
glm__$Mat3_Mat3_$Impl_$.fromRows = function(a,b,c) {
	var m = glm__$Mat3_Mat3_$Impl_$._new();
	m[0] = a;
	m[1] = b;
	m[2] = c;
	return m;
};
glm__$Mat3_Mat3_$Impl_$.fromQuat = function(q) {
	var qx2 = Math.pow(glm__$Quat_Quat_$Impl_$.get_x(q),2);
	var qy2 = Math.pow(glm__$Quat_Quat_$Impl_$.get_y(q),2);
	var qz2 = Math.pow(glm__$Quat_Quat_$Impl_$.get_z(q),2);
	var m = glm__$Mat3_Mat3_$Impl_$.fromRows(glm__$Vec3_Vec3_$Impl_$._new(1 - 2 * qy2 - 2 * qz2,2 * glm__$Quat_Quat_$Impl_$.get_x(q) * glm__$Quat_Quat_$Impl_$.get_y(q) - 2 * glm__$Quat_Quat_$Impl_$.get_z(q) * glm__$Quat_Quat_$Impl_$.get_w(q),2 * glm__$Quat_Quat_$Impl_$.get_x(q) * glm__$Quat_Quat_$Impl_$.get_z(q) + 2 * glm__$Quat_Quat_$Impl_$.get_y(q) * glm__$Quat_Quat_$Impl_$.get_w(q)),glm__$Vec3_Vec3_$Impl_$._new(2 * glm__$Quat_Quat_$Impl_$.get_x(q) * glm__$Quat_Quat_$Impl_$.get_y(q) + 2 * glm__$Quat_Quat_$Impl_$.get_z(q) * glm__$Quat_Quat_$Impl_$.get_w(q),1 - 2 * qx2 - 2 * qz2,2 * glm__$Quat_Quat_$Impl_$.get_y(q) * glm__$Quat_Quat_$Impl_$.get_z(q) - 2 * glm__$Quat_Quat_$Impl_$.get_x(q) * glm__$Quat_Quat_$Impl_$.get_w(q)),glm__$Vec3_Vec3_$Impl_$._new(2 * glm__$Quat_Quat_$Impl_$.get_x(q) * glm__$Quat_Quat_$Impl_$.get_z(q) - 2 * glm__$Quat_Quat_$Impl_$.get_y(q) * glm__$Quat_Quat_$Impl_$.get_w(q),2 * glm__$Quat_Quat_$Impl_$.get_y(q) * glm__$Quat_Quat_$Impl_$.get_z(q) + 2 * glm__$Quat_Quat_$Impl_$.get_x(q) * glm__$Quat_Quat_$Impl_$.get_w(q),1 - 2 * qx2 - 2 * qy2));
	return m;
};
var glm__$Mat4_Mat4_$Impl_$ = {};
$hxClasses["glm._Mat4.Mat4_Impl_"] = glm__$Mat4_Mat4_$Impl_$;
glm__$Mat4_Mat4_$Impl_$.__name__ = ["glm","_Mat4","Mat4_Impl_"];
glm__$Mat4_Mat4_$Impl_$._new = function(scale) {
	if(scale == null) scale = 0;
	var this1;
	var arr = [glm__$Vec4_Vec4_$Impl_$._new(scale,0,0,0),glm__$Vec4_Vec4_$Impl_$._new(0,scale,0,0),glm__$Vec4_Vec4_$Impl_$._new(0,0,scale,0),glm__$Vec4_Vec4_$Impl_$._new(0,0,0,scale)];
	this1 = arr;
	return this1;
	return this1;
};
glm__$Mat4_Mat4_$Impl_$.fromRows = function(a,b,c,d) {
	var m = glm__$Mat4_Mat4_$Impl_$._new();
	m[0] = a;
	m[1] = b;
	m[2] = c;
	m[3] = d;
	return m;
};
glm__$Mat4_Mat4_$Impl_$.toArrayColMajor = function(this1) {
	var ret = [];
	var _g = 0;
	while(_g < 4) {
		var j = _g++;
		var _g1 = 0;
		while(_g1 < 4) {
			var i = _g1++;
			ret.push(this1[i][j]);
		}
	}
	return ret;
};
var glm_Projection = function() { };
$hxClasses["glm.Projection"] = glm_Projection;
glm_Projection.__name__ = ["glm","Projection"];
glm_Projection.ortho = function(left,right,bottom,top,near,far) {
	if(far == null) far = 1;
	if(near == null) near = -1;
	var result = glm__$Mat4_Mat4_$Impl_$.fromRows(glm__$Vec4_Vec4_$Impl_$._new(2 / (right - left),0,0,-(right + left) / (right - left)),glm__$Vec4_Vec4_$Impl_$._new(0,2 / (top - bottom),0,-(top + bottom) / (top - bottom)),glm__$Vec4_Vec4_$Impl_$._new(0,0,-2 / (far - near),-(far + near) / (far - near)),glm__$Vec4_Vec4_$Impl_$._new(0,0,0,1));
	return result;
};
var glm__$Quat_Quat_$Impl_$ = {};
$hxClasses["glm._Quat.Quat_Impl_"] = glm__$Quat_Quat_$Impl_$;
glm__$Quat_Quat_$Impl_$.__name__ = ["glm","_Quat","Quat_Impl_"];
glm__$Quat_Quat_$Impl_$.get_w = function(this1) {
	return this1[0];
};
glm__$Quat_Quat_$Impl_$.get_x = function(this1) {
	return this1[1];
};
glm__$Quat_Quat_$Impl_$.get_y = function(this1) {
	return this1[2];
};
glm__$Quat_Quat_$Impl_$.get_z = function(this1) {
	return this1[3];
};
glm__$Quat_Quat_$Impl_$._new = function(w,x,y,z) {
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	if(w == null) w = 0;
	var this1;
	var arr = [];
	arr.push(w);
	arr.push(x);
	arr.push(y);
	arr.push(z);
	this1 = arr;
	return this1;
};
var glm__$Vec2_Vec2_$Impl_$ = {};
$hxClasses["glm._Vec2.Vec2_Impl_"] = glm__$Vec2_Vec2_$Impl_$;
glm__$Vec2_Vec2_$Impl_$.__name__ = ["glm","_Vec2","Vec2_Impl_"];
glm__$Vec2_Vec2_$Impl_$.get_x = function(this1) {
	return this1[0];
};
glm__$Vec2_Vec2_$Impl_$.set_x = function(this1,v) {
	return this1[0] = v;
};
glm__$Vec2_Vec2_$Impl_$.get_y = function(this1) {
	return this1[1];
};
glm__$Vec2_Vec2_$Impl_$.set_y = function(this1,v) {
	return this1[1] = v;
};
glm__$Vec2_Vec2_$Impl_$._new = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	var this1;
	var arr = [];
	arr.push(x);
	arr.push(y);
	this1 = arr;
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.sqrLength = function(this1) {
	return this1[0] * this1[0] + this1[1] * this1[1];
};
glm__$Vec2_Vec2_$Impl_$.clone = function(this1) {
	var copy = glm__$Vec2_Vec2_$Impl_$._new();
	copy[0] = this1[0];
	copy[1] = this1[1];
	return copy;
};
glm__$Vec2_Vec2_$Impl_$.addVec2 = function(this1,b) {
	this1[0] += b[0];
	this1[1] += b[1];
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.divideScalar = function(this1,b) {
	this1[0] /= b;
	this1[1] /= b;
	return this1;
};
var glm__$Vec4_Vec4_$Impl_$ = {};
$hxClasses["glm._Vec4.Vec4_Impl_"] = glm__$Vec4_Vec4_$Impl_$;
glm__$Vec4_Vec4_$Impl_$.__name__ = ["glm","_Vec4","Vec4_Impl_"];
glm__$Vec4_Vec4_$Impl_$.get_x = function(this1) {
	return this1[0];
};
glm__$Vec4_Vec4_$Impl_$.get_y = function(this1) {
	return this1[1];
};
glm__$Vec4_Vec4_$Impl_$.get_z = function(this1) {
	return this1[2];
};
glm__$Vec4_Vec4_$Impl_$.get_w = function(this1) {
	return this1[3];
};
glm__$Vec4_Vec4_$Impl_$.get_r = function(this1) {
	return this1[0];
};
glm__$Vec4_Vec4_$Impl_$.get_g = function(this1) {
	return this1[1];
};
glm__$Vec4_Vec4_$Impl_$.get_b = function(this1) {
	return this1[2];
};
glm__$Vec4_Vec4_$Impl_$.get_a = function(this1) {
	return this1[3];
};
glm__$Vec4_Vec4_$Impl_$._new = function(x,y,z,w) {
	if(w == null) w = 0;
	if(z == null) z = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	var this1;
	var arr = [];
	arr.push(x);
	arr.push(y);
	arr.push(z);
	arr.push(w);
	this1 = arr;
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.clone = function(this1) {
	var copy = glm__$Vec4_Vec4_$Impl_$._new();
	copy[0] = this1[0];
	copy[1] = this1[1];
	copy[2] = this1[2];
	copy[3] = this1[3];
	return copy;
};
glm__$Vec4_Vec4_$Impl_$.addVec4 = function(this1,b) {
	this1[0] += b[0];
	this1[1] += b[1];
	this1[2] += b[2];
	this1[3] += b[3];
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.multiplyScalar = function(this1,b) {
	this1[0] *= b;
	this1[1] *= b;
	this1[2] *= b;
	this1[3] *= b;
	return this1;
};
var haxe_StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe_StackItem.CFunction = ["CFunction",0];
haxe_StackItem.CFunction.toString = $estr;
haxe_StackItem.CFunction.__enum__ = haxe_StackItem;
haxe_StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
var haxe_CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe_CallStack;
haxe_CallStack.__name__ = ["haxe","CallStack"];
haxe_CallStack.getStack = function(e) {
	if(e == null) return [];
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			if(haxe_CallStack.wrapCallSite != null) site = haxe_CallStack.wrapCallSite(site);
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe_StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe_StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe_CallStack.makeStack(e.stack);
	Error.prepareStackTrace = oldValue;
	return a;
};
haxe_CallStack.callStack = function() {
	try {
		throw new Error();
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		var a = haxe_CallStack.getStack(e);
		a.shift();
		return a;
	}
};
haxe_CallStack.makeStack = function(s) {
	if(s == null) return []; else if(typeof(s) == "string") {
		var stack = s.split("\n");
		if(stack[0] == "Error") stack.shift();
		var m = [];
		var rie10 = new EReg("^   at ([A-Za-z0-9_. ]+) \\(([^)]+):([0-9]+):([0-9]+)\\)$","");
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			if(rie10.match(line)) {
				var path = rie10.matched(1).split(".");
				var meth = path.pop();
				var file = rie10.matched(2);
				var line1 = Std.parseInt(rie10.matched(3));
				m.push(haxe_StackItem.FilePos(meth == "Anonymous function"?haxe_StackItem.LocalFunction():meth == "Global code"?null:haxe_StackItem.Method(path.join("."),meth),file,line1));
			} else m.push(haxe_StackItem.Module(StringTools.trim(line)));
		}
		return m;
	} else return s;
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
$hxClasses["haxe._Int64.___Int64"] = haxe__$Int64__$_$_$Int64;
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Resource = function() { };
$hxClasses["haxe.Resource"] = haxe_Resource;
haxe_Resource.__name__ = ["haxe","Resource"];
haxe_Resource.getString = function(name) {
	var _g = 0;
	var _g1 = haxe_Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe_crypto_Base64.decode(x.data);
			return b.toString();
		}
	}
	return null;
};
haxe_Resource.getBytes = function(name) {
	var _g = 0;
	var _g1 = haxe_Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe_io_Bytes.ofString(x.str);
			return haxe_crypto_Base64.decode(x.data);
		}
	}
	return null;
};
var haxe_Serializer = function() { };
$hxClasses["haxe.Serializer"] = haxe_Serializer;
haxe_Serializer.__name__ = ["haxe","Serializer"];
haxe_Serializer.prototype = {
	serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(isNaN(v2)) this.buf.b += "k"; else if(!isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var _g1_head = v3.h;
					var _g1_val = null;
					while(_g1_head != null) {
						var i1;
						_g1_val = _g1_head[0];
						_g1_head = _g1_head[1];
						i1 = _g1_val;
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(d.getTime());
					break;
				case haxe_ds_StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it0 = v4.keys();
					while( $it0.hasNext() ) {
						var k = $it0.next();
						this.serializeString(k);
						this.serialize(__map_reserved[k] != null?v4.getReserved(k):v4.h[k]);
					}
					this.buf.b += "h";
					break;
				case haxe_ds_IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it1 = v5.keys();
					while( $it1.hasNext() ) {
						var k1 = $it1.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.h[k1]);
					}
					this.buf.b += "h";
					break;
				case haxe_ds_ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it2 = v6.keys();
					while( $it2.hasNext() ) {
						var k2 = $it2.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe_io_Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe_Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(js_Boot.__instanceof(v,Class)) {
					var className = Type.getClassName(v);
					this.buf.b += "A";
					this.serializeString(className);
				} else if(js_Boot.__instanceof(v,Enum)) {
					this.buf.b += "B";
					this.serializeString(Type.getEnumName(v));
				} else {
					if(this.useCache && this.serializeRef(v)) return;
					this.buf.b += "o";
					this.serializeFields(v);
				}
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw new js__$Boot_HaxeError("Cannot serialize function");
				break;
			default:
				throw new js__$Boot_HaxeError("Cannot serialize " + Std.string(v));
			}
		}
	}
	,__class__: haxe_Serializer
};
var haxe_Timer = function() { };
$hxClasses["haxe.Timer"] = haxe_Timer;
haxe_Timer.__name__ = ["haxe","Timer"];
haxe_Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
var haxe_Unserializer = function() { };
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = ["haxe","Unserializer"];
haxe_Unserializer.initCodes = function() {
	var codes = [];
	var _g1 = 0;
	var _g = haxe_Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.prototype = {
	get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,readFloat: function() {
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
		}
		return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw new js__$Boot_HaxeError("Invalid object");
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw new js__$Boot_HaxeError("Invalid object key");
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw new js__$Boot_HaxeError("Invalid enum format");
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = [];
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			return this.readFloat();
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw new js__$Boot_HaxeError("Invalid string length");
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return NaN;
		case 109:
			return -Infinity;
		case 112:
			return Infinity;
		case 97:
			var buf = this.buf;
			var a = [];
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw new js__$Boot_HaxeError("Invalid reference");
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw new js__$Boot_HaxeError("Invalid string reference");
			return this.scache[n2];
		case 120:
			throw new js__$Boot_HaxeError(this.unserialize());
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw new js__$Boot_HaxeError("Class not found " + name);
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw new js__$Boot_HaxeError("Enum not found " + name1);
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw new js__$Boot_HaxeError("Enum not found " + name2);
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw new js__$Boot_HaxeError("Unknown enum index " + name2 + "@" + index);
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe_ds_StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe_ds_IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c1 = this.get(this.pos++);
			while(c1 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c1 = this.get(this.pos++);
			}
			if(c1 != 104) throw new js__$Boot_HaxeError("Invalid IntMap format");
			return h1;
		case 77:
			var h2 = new haxe_ds_ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			if(this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
				var s3 = HxOverrides.substr(this.buf,this.pos,19);
				d = HxOverrides.strDate(s3);
				this.pos += 19;
			} else {
				var t = this.readFloat();
				var d1 = new Date();
				d1.setTime(t);
				d = d1;
			}
			this.cache.push(d);
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw new js__$Boot_HaxeError("Invalid bytes length");
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe_io_Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c2 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c2 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c2 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c21 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c21 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw new js__$Boot_HaxeError("Class not found " + name3);
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw new js__$Boot_HaxeError("Invalid custom data");
			return o2;
		case 65:
			var name4 = this.unserialize();
			var cl2 = this.resolver.resolveClass(name4);
			if(cl2 == null) throw new js__$Boot_HaxeError("Class not found " + name4);
			return cl2;
		case 66:
			var name5 = this.unserialize();
			var e2 = this.resolver.resolveEnum(name5);
			if(e2 == null) throw new js__$Boot_HaxeError("Enum not found " + name5);
			return e2;
		default:
		}
		this.pos--;
		throw new js__$Boot_HaxeError("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	,__class__: haxe_Unserializer
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
haxe_io_Bytes.ofString = function(s) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_crypto_Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe_crypto_Base64;
haxe_crypto_Base64.__name__ = ["haxe","crypto","Base64"];
haxe_crypto_Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).decodeBytes(haxe_io_Bytes.ofString(str));
};
var haxe_crypto_BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw new js__$Boot_HaxeError("BaseCode : base length must be a power of two.");
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe_crypto_BaseCode;
haxe_crypto_BaseCode.__name__ = ["haxe","crypto","BaseCode"];
haxe_crypto_BaseCode.prototype = {
	initTable: function() {
		var tbl = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = haxe_io_Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw new js__$Boot_HaxeError("BaseCode : invalid encoded char");
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe_crypto_BaseCode
};
var haxe_ds_BalancedTree = function() {
};
$hxClasses["haxe.ds.BalancedTree"] = haxe_ds_BalancedTree;
haxe_ds_BalancedTree.__name__ = ["haxe","ds","BalancedTree"];
haxe_ds_BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,remove: function(key) {
		try {
			this.root = this.removeLoop(key,this.root);
			return true;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				return false;
			} else throw(e);
		}
	}
	,exists: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return true; else if(c < 0) node = node.left; else node = node.right;
		}
		return false;
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe_ds_TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe_ds_TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,removeLoop: function(k,node) {
		if(node == null) throw new js__$Boot_HaxeError("Not_found");
		var c = this.compare(k,node.key);
		if(c == 0) return this.merge(node.left,node.right); else if(c < 0) return this.balance(this.removeLoop(k,node.left),node.key,node.value,node.right); else return this.balance(node.left,node.key,node.value,this.removeLoop(k,node.right));
	}
	,merge: function(t1,t2) {
		if(t1 == null) return t2;
		if(t2 == null) return t1;
		var t = this.minBinding(t2);
		return this.balance(t1,t.key,t.value,this.removeMinBinding(t2));
	}
	,minBinding: function(t) {
		if(t == null) throw new js__$Boot_HaxeError("Not_found"); else if(t.left == null) return t; else return this.minBinding(t.left);
	}
	,removeMinBinding: function(t) {
		if(t.left == null) return t.right; else return this.balance(this.removeMinBinding(t.left),t.key,t.value,t.right);
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe_ds_TreeNode(l.left,l.key,l.value,new haxe_ds_TreeNode(l.right,k,v,r)); else return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe_ds_TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe_ds_TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe_ds_TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,__class__: haxe_ds_BalancedTree
};
var haxe_ds_TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
$hxClasses["haxe.ds.TreeNode"] = haxe_ds_TreeNode;
haxe_ds_TreeNode.__name__ = ["haxe","ds","TreeNode"];
haxe_ds_TreeNode.prototype = {
	__class__: haxe_ds_TreeNode
};
var haxe_ds_EnumValueMap = function() {
	haxe_ds_BalancedTree.call(this);
};
$hxClasses["haxe.ds.EnumValueMap"] = haxe_ds_EnumValueMap;
haxe_ds_EnumValueMap.__name__ = ["haxe","ds","EnumValueMap"];
haxe_ds_EnumValueMap.__interfaces__ = [haxe_IMap];
haxe_ds_EnumValueMap.__super__ = haxe_ds_BalancedTree;
haxe_ds_EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
	,__class__: haxe_ds_EnumValueMap
});
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var haxe_io_Path = function(path) {
	switch(path) {
	case ".":case "..":
		this.dir = path;
		this.file = "";
		return;
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe_io_Path;
haxe_io_Path.__name__ = ["haxe","io","Path"];
haxe_io_Path.extension = function(path) {
	var s = new haxe_io_Path(path);
	if(s.ext == null) return "";
	return s.ext;
};
haxe_io_Path.join = function(paths) {
	var paths1 = paths.filter(function(s) {
		return s != null && s != "";
	});
	if(paths1.length == 0) return "";
	var path = paths1[0];
	var _g1 = 1;
	var _g = paths1.length;
	while(_g1 < _g) {
		var i = _g1++;
		path = haxe_io_Path.addTrailingSlash(path);
		path += paths1[i];
	}
	return haxe_io_Path.normalize(path);
};
haxe_io_Path.normalize = function(path) {
	var slash = "/";
	path = path.split("\\").join("/");
	if(path == null || path == slash) return slash;
	var target = [];
	var _g = 0;
	var _g1 = path.split(slash);
	while(_g < _g1.length) {
		var token = _g1[_g];
		++_g;
		if(token == ".." && target.length > 0 && target[target.length - 1] != "..") target.pop(); else if(token != ".") target.push(token);
	}
	var tmp = target.join(slash);
	var regex = new EReg("([^:])/+","g");
	var result = regex.replace(tmp,"$1" + slash);
	var acc = new StringBuf();
	var colon = false;
	var slashes = false;
	var _g11 = 0;
	var _g2 = tmp.length;
	while(_g11 < _g2) {
		var i = _g11++;
		var _g21 = HxOverrides.cca(tmp,i);
		var i1 = _g21;
		if(_g21 != null) switch(_g21) {
		case 58:
			acc.b += ":";
			colon = true;
			break;
		case 47:
			if(colon == false) slashes = true; else {
				colon = false;
				if(slashes) {
					acc.b += "/";
					slashes = false;
				}
				acc.add(String.fromCharCode(i1));
			}
			break;
		default:
			colon = false;
			if(slashes) {
				acc.b += "/";
				slashes = false;
			}
			acc.add(String.fromCharCode(i1));
		} else {
			colon = false;
			if(slashes) {
				acc.b += "/";
				slashes = false;
			}
			acc.add(String.fromCharCode(i1));
		}
	}
	var result1 = acc.b;
	return result1;
};
haxe_io_Path.addTrailingSlash = function(path) {
	if(path.length == 0) return "/";
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		if(c2 != path.length - 1) return path + "\\"; else return path;
	} else if(c1 != path.length - 1) return path + "/"; else return path;
};
haxe_io_Path.prototype = {
	__class__: haxe_io_Path
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_html__$CanvasElement_CanvasUtil = function() { };
$hxClasses["js.html._CanvasElement.CanvasUtil"] = js_html__$CanvasElement_CanvasUtil;
js_html__$CanvasElement_CanvasUtil.__name__ = ["js","html","_CanvasElement","CanvasUtil"];
js_html__$CanvasElement_CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var _g = 0;
	var _g1 = ["webgl","experimental-webgl"];
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		var ctx = canvas.getContext(name,attribs);
		if(ctx != null) return ctx;
	}
	return null;
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
$hxClasses["js.html.compat.ArrayBuffer"] = js_html_compat_ArrayBuffer;
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
$hxClasses["js.html.compat.DataView"] = js_html_compat_DataView;
js_html_compat_DataView.__name__ = ["js","html","compat","DataView"];
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
$hxClasses["js.html.compat.Uint8Array"] = js_html_compat_Uint8Array;
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var tusk_Component = function() {
};
$hxClasses["tusk.Component"] = tusk_Component;
tusk_Component.__name__ = ["tusk","Component"];
tusk_Component.prototype = {
	get__tid: function() {
		return tusk_Component.tid;
	}
	,__class__: tusk_Component
};
var tusk_PromiseComponent = function() {
	this.onDone = new promhx_Deferred();
	this.done = this.onDone.promise();
	tusk_Component.call(this);
};
$hxClasses["tusk.PromiseComponent"] = tusk_PromiseComponent;
tusk_PromiseComponent.__name__ = ["tusk","PromiseComponent"];
tusk_PromiseComponent.__super__ = tusk_Component;
tusk_PromiseComponent.prototype = $extend(tusk_Component.prototype,{
	reset: function() {
		if(this.onDone._resolved) {
			this.onDone = new promhx_Deferred();
			this.done = this.onDone.promise();
		}
	}
	,finish: function() {
		if(!this.onDone._resolved) this.onDone.resolve(true);
	}
	,get__tid: function() {
		return 3;
	}
	,__class__: tusk_PromiseComponent
});
var tusk_Processor = function(entities) {
	this.enabled = true;
	if(entities != null) this.entities = this.matcher.matchEntities(entities); else this.entities = [];
};
$hxClasses["tusk.Processor"] = tusk_Processor;
tusk_Processor.__name__ = ["tusk","Processor"];
tusk_Processor.prototype = {
	set_enabled: function(enabled) {
		if(this.enabled != enabled) {
			this.enabled = enabled;
			if(this.enabled) this.onEnabled(); else this.onDisabled();
		}
		return this.enabled;
	}
	,___connectRoutes: function() {
	}
	,onEnabled: function() {
	}
	,onDisabled: function() {
	}
	,onEntityChanged: function(entity,event) {
	}
	,hxSerialize: function(s) {
		s.serialize(this.enabled);
	}
	,hxUnserialize: function(u) {
		this.set_enabled(u.unserialize());
	}
	,__class__: tusk_Processor
};
var minigames_SpaceCops = function() {
	this.movements = [function(t,end) {
		return 220;
	},function(t1,end1) {
		return tusk_math_Lerp.LerpF(-500,500,t1 / end1);
	},function(t2,end2) {
		return tusk_math_Lerp.LerpF(500,-500,t2 / end2);
	}];
	this.p2Score = 0;
	this.p1Score = 0;
	minigames_SpaceCops.instance = this;
	tusk_Scene.call(this,"SpaceCops");
};
$hxClasses["minigames.SpaceCops"] = minigames_SpaceCops;
minigames_SpaceCops.__name__ = ["minigames","SpaceCops"];
minigames_SpaceCops.addToScore = function(player) {
	if(player == 0) {
		var _g = minigames_SpaceCops.instance;
		var _g1 = _g.p1Score;
		_g.set_p1Score(_g1 + 1);
		_g1;
	} else if(player == 1) {
		var _g2 = minigames_SpaceCops.instance;
		var _g11 = _g2.p2Score;
		_g2.set_p2Score(_g11 + 1);
		_g11;
	}
};
minigames_SpaceCops.__super__ = tusk_Scene;
minigames_SpaceCops.prototype = $extend(tusk_Scene.prototype,{
	loadAssets: function() {
		var _g = this;
		var def = new promhx_Deferred();
		var prom = def.promise();
		((function($this) {
			var $r;
			var varargf = function(f) {
				var ret = new promhx_Promise();
				var arr = [tusk_defaults_Primitives.loadQuad(),tusk_defaults_Materials.loadParticlesUntextured(),tusk_defaults_Primitives.loadTextMesh(),tusk_defaults_Fonts.loadSubatomic_Screen(),tusk_defaults_Materials.loadTextBasic(),tusk_defaults_Materials.loadEffectCircleOut(),tusk_Tusk.assets.loadSound("assets/sounds/countdown.ogg"),tusk_Tusk.assets.loadTexture("assets/sprites/stars.png"),tusk_defaults_Materials.loadUnlitTextured(),tusk_Tusk.assets.loadTexture("assets/sprites/spacecop.png"),SpriteMaterial.load(),tusk_Tusk.assets.loadTexture("assets/sprites/copbullet.png"),SpriteMaterial.load(),tusk_Tusk.assets.loadTexture("assets/sprites/explosion.png"),tusk_defaults_Materials.loadUnlitTextured(),tusk_Tusk.assets.loadTexture("assets/sprites/spacecrook1.png"),tusk_defaults_Materials.loadUnlitTextured(),tusk_Tusk.assets.loadSound("assets/sounds/wintrumpet.ogg"),tusk_Tusk.assets.loadSound("assets/sounds/crookexplosion.ogg"),tusk_Tusk.assets.loadSound("assets/sounds/spacejam.ogg")];
				var p = promhx_Promise.whenAll(arr);
				p._update.push({ async : ret, linkf : function(x) {
					ret.handleResolve(f(arr[0]._val,arr[1]._val,arr[2]._val,arr[3]._val,arr[4]._val,arr[5]._val,arr[6]._val,arr[7]._val,arr[8]._val,arr[9]._val,arr[10]._val,arr[11]._val,arr[12]._val,arr[13]._val,arr[14]._val,arr[15]._val,arr[16]._val,arr[17]._val,arr[18]._val,arr[19]._val));
				}});
				return ret;
			};
			$r = { then : varargf};
			return $r;
		}(this))).then(function(quad,particlesMaterial,textMesh,font,fontMat,circleOutMat,countdownMusic,starTexture,starMaterial,copTexture,copMaterial,bulletTexture,bulletMaterial,explosionTexture,explosionMaterial,crook1Texture,crook1Material,winMusic,crookExplosion,spaceJam) {
			_g.quad = quad;
			_g.particlesMaterial = particlesMaterial;
			_g.circleOutMat = circleOutMat;
			_g.textMesh = textMesh;
			_g.font = font;
			_g.fontMat = fontMat;
			_g.fontMat.textures = [];
			_g.fontMat.textures.push(font.texture);
			_g.countdownMusic = countdownMusic;
			_g.starMaterial = starMaterial;
			_g.starMaterial.textures = [];
			_g.starMaterial.textures.push(starTexture);
			_g.copMaterial = copMaterial;
			_g.copMaterial.textures = [];
			_g.copMaterial.textures.push(copTexture);
			_g.bulletMaterial = bulletMaterial;
			_g.bulletMaterial.textures = [];
			_g.bulletMaterial.textures.push(bulletTexture);
			_g.explosionMaterial = explosionMaterial;
			_g.explosionMaterial.textures = [];
			_g.explosionMaterial.textures.push(explosionTexture);
			_g.crook1Material = crook1Material;
			_g.crook1Material.textures = [];
			_g.crook1Material.textures.push(crook1Texture);
			_g.winMusic = winMusic;
			_g.crookExplosion = crookExplosion;
			_g.spaceJam = spaceJam;
			def.resolve(_g);
		}).catchError(function(err) {
			tusk_debug_Log.log(err,tusk_debug_LogFunctions.Error,{ fileName : "SpaceCops.hx", lineNumber : 136, className : "minigames.SpaceCops", methodName : "loadAssets"});
			def.handleError("Failed to load assets!");
		});
		return prom;
	}
	,set_p1Score: function(x) {
		this.p1Score = x;
		this.player1ScoreDisplay.set_text("" + GameTracker.player[0].name + ": " + this.p1Score);
		return x;
	}
	,set_p2Score: function(x) {
		this.p2Score = x;
		this.player2ScoreDisplay.set_text("" + GameTracker.player[1].name + ": " + this.p2Score);
		return x;
	}
	,spawnBullet: function(player,x,y) {
		var _g = this;
		var bulletCollision = new minigames_sledtillyouredead_CollisionComponent(4,0);
		this.entities.push(new tusk_Entity(this,"bullet",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(x,y,-0.5),(function($this) {
			var $r;
			var q = glm__$Quat_Quat_$Impl_$._new();
			{
				q[0] = 1;
				q[1] = 0;
				q[2] = 0;
				q[3] = 0;
				q;
			}
			$r = q;
			return $r;
		}(this)),glm__$Vec3_Vec3_$Impl_$._new(16,16,16)),new tusk_lib_comp_MeshComponent(null,this.quad),new tusk_lib_comp_MaterialComponent(null,this.bulletMaterial),new tusk_lib_comp_CustomUniformsComponent(function() {
			_g.bulletMaterial.setVec3("colour",GameTracker.player[player].colour);
		}),new minigames_spacecops_BulletComponent(player),bulletCollision]));
	}
	,spawnExplosion: function(x,y) {
		this.entities.push(new tusk_Entity(this,"Explosion",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(x,y,-2),(function($this) {
			var $r;
			var q = glm__$Quat_Quat_$Impl_$._new();
			{
				q[0] = 1;
				q[1] = 0;
				q[2] = 0;
				q[3] = 0;
				q;
			}
			$r = q;
			return $r;
		}(this)),glm__$Vec3_Vec3_$Impl_$._new(64,64,64)),new tusk_lib_comp_MeshComponent(null,this.explosionMesh),new tusk_lib_comp_MaterialComponent(null,this.explosionMaterial),new minigames_sledtillyouredead_AnimatedSledComponent(this.explosionMesh,8,10,true),new tusk_lib_comp_SoundComponent(this.crookExplosion.path,true)]));
	}
	,spawnCrook: function(life,xMoveIndex,yMoveIndex) {
		var _g = this;
		var crookTransform = new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,0,-0.75),(function($this) {
			var $r;
			var q = glm__$Quat_Quat_$Impl_$._new();
			{
				q[0] = 1;
				q[1] = 0;
				q[2] = 0;
				q[3] = 0;
				q;
			}
			$r = q;
			return $r;
		}(this)),glm__$Vec3_Vec3_$Impl_$._new(64,64,64));
		var crookCollision = new minigames_sledtillyouredead_CollisionComponent(16,1);
		crookCollision.done.then(function(_) {
			_g.spawnExplosion(glm__$Vec3_Vec3_$Impl_$.get_x(crookTransform.position),glm__$Vec3_Vec3_$Impl_$.get_y(crookTransform.position));
		});
		var movement = new minigames_spacecops_RailedMovementComponent(life,this.movements[xMoveIndex],this.movements[yMoveIndex]);
		this.entities.push(new tusk_Entity(this,"Crook",[crookTransform,new tusk_lib_comp_MeshComponent(null,this.crookMesh),new tusk_lib_comp_MaterialComponent(null,this.crook1Material),new minigames_sledtillyouredead_AnimatedSledComponent(this.crookMesh,2,15),crookCollision,movement]));
		return movement.done;
	}
	,onLoad: function(event) {
		var _g = this;
		if(event.scene != this) return;
		tusk_debug_Log.log("Loading space cops scene..",tusk_debug_LogFunctions.Info,{ fileName : "SpaceCops.hx", lineNumber : 216, className : "minigames.SpaceCops", methodName : "onLoad"});
		var loadComplete = this.loadAssets();
		loadComplete.then(function(_) {
			tusk_lib_proc_Camera2DProcessor.cameras = [];
			tusk_debug_Log.log("Starting space cops!",tusk_debug_LogFunctions.Info,{ fileName : "SpaceCops.hx", lineNumber : 226, className : "minigames.SpaceCops", methodName : "onLoad"});
			_g.useProcessor(new minigames_spacecops_WaveProcessor());
			_g.useProcessor(new minigames_spacecops_RailedMovementProcessor());
			_g.useProcessor(new minigames_sledtillyouredead_CollisionProcessor());
			_g.useProcessor(new minigames_spacecops_DestroyOnCollisionProcessor());
			_g.useProcessor(new minigames_spacecops_ShooterProcessor());
			_g.useProcessor(new minigames_spacecops_BulletProcessor());
			_g.useProcessor(new minigames_spacecops_ScrollProcessor());
			_g.useProcessor(new minigames_spacecops_MovementProcessor());
			_g.useProcessor(new minigames_sledtillyouredead_AnimatedSledProcessor());
			_g.useProcessor(new tusk_lib_proc_TimedPromiseProcessor());
			_g.useProcessor(new tusk_lib_proc_MeshProcessor());
			_g.useProcessor(new tusk_lib_proc_MaterialProcessor());
			_g.useProcessor(new tusk_lib_proc_Camera2DProcessor());
			_g.useProcessor(new tusk_lib_proc_TransformProcessor());
			_g.useProcessor(new tusk_lib_proc_TextProcessor());
			_g.useProcessor(new tusk_lib_proc_Renderer2DProcessor(glm__$Vec4_Vec4_$Impl_$._new(0,0,0,1)));
			_g.useProcessor(new tusk_lib_proc_CircleEffectRendererProcessor());
			_g.useProcessor(new tusk_lib_proc_SoundProcessor());
			var w = tusk_Tusk.instance.app.window.width;
			var h = tusk_Tusk.instance.app.window.height;
			var camera = new tusk_Entity(_g,"Camera",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,0,0),(function($this) {
				var $r;
				var q = glm__$Quat_Quat_$Impl_$._new();
				{
					q[0] = 1;
					q[1] = 0;
					q[2] = 0;
					q[3] = 0;
					q;
				}
				$r = q;
				return $r;
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(1,1,1)),new tusk_lib_comp_Camera2DComponent((function($this) {
				var $r;
				var a = glm__$Vec2_Vec2_$Impl_$._new(w,h);
				$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),-2.0);
				return $r;
			}(this)),(function($this) {
				var $r;
				var a1 = glm__$Vec2_Vec2_$Impl_$._new(w,h);
				$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a1),2.0);
				return $r;
			}(this)),-100,100)]);
			_g.entities.push(camera);
			var starFieldMesh = _g.quad.clone("starfield.mesh");
			var _g1 = 0;
			var _g2 = starFieldMesh.vertices;
			while(_g1 < _g2.length) {
				var v = _g2[_g1];
				++_g1;
				glm__$Vec3_Vec3_$Impl_$.set_y(v,glm__$Vec3_Vec3_$Impl_$.get_y(v) - 0.5);
			}
			_g.entities.push(new tusk_Entity(_g,"Starfield1",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,tusk_Tusk.game.get_height() / 2,0),(function($this) {
				var $r;
				var q4 = glm__$Quat_Quat_$Impl_$._new();
				{
					q4[0] = 1;
					q4[1] = 0;
					q4[2] = 0;
					q4[3] = 0;
					q4;
				}
				$r = q4;
				return $r;
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(1024,1024,1024)),new tusk_lib_comp_MeshComponent(null,starFieldMesh),new tusk_lib_comp_MaterialComponent(null,_g.starMaterial),new minigames_spacecops_ScrollComponent(tusk_Tusk.game.get_height() / 2 - 1024,1024)]));
			_g.entities.push(new tusk_Entity(_g,"Starfield2",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,tusk_Tusk.game.get_height() / 2 + 1024,0),(function($this) {
				var $r;
				var q5 = glm__$Quat_Quat_$Impl_$._new();
				{
					q5[0] = 1;
					q5[1] = 0;
					q5[2] = 0;
					q5[3] = 0;
					q5;
				}
				$r = q5;
				return $r;
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(1024,1024,1024)),new tusk_lib_comp_MeshComponent(null,starFieldMesh),new tusk_lib_comp_MaterialComponent(null,_g.starMaterial),new minigames_spacecops_ScrollComponent(tusk_Tusk.game.get_height() / 2,1024)]));
			var copMesh1 = _g.quad.clone("cop.mesh1");
			var _g11 = 0;
			var _g21 = copMesh1.uvs;
			while(_g11 < _g21.length) {
				var uv = _g21[_g11];
				++_g11;
				glm__$Vec2_Vec2_$Impl_$.set_x(uv,glm__$Vec2_Vec2_$Impl_$.get_x(uv) / 4);
			}
			var copMesh2 = copMesh1.clone("cop.mesh2");
			var p1CopEntity = new tusk_Entity(_g,"P1 cop",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(-92,tusk_Tusk.game.get_height() / -2 + 32,-1),(function($this) {
				var $r;
				var q1 = glm__$Quat_Quat_$Impl_$._new();
				{
					q1[0] = 1;
					q1[1] = 0;
					q1[2] = 0;
					q1[3] = 0;
					q1;
				}
				$r = q1;
				return $r;
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(64,64,64)),new tusk_lib_comp_MeshComponent(null,copMesh1),new tusk_lib_comp_MaterialComponent(null,_g.copMaterial),new tusk_lib_comp_CustomUniformsComponent(function() {
				_g.copMaterial.setVec3("colour",GameTracker.player[0].colour);
			}),new minigames_sledtillyouredead_AnimatedSledComponent(copMesh1,4,15)]);
			_g.entities.push(p1CopEntity);
			var p2CopEntity = new tusk_Entity(_g,"P2 cop",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(92,tusk_Tusk.game.get_height() / -2 + 32,-1),(function($this) {
				var $r;
				var q2 = glm__$Quat_Quat_$Impl_$._new();
				{
					q2[0] = 1;
					q2[1] = 0;
					q2[2] = 0;
					q2[3] = 0;
					q2;
				}
				$r = q2;
				return $r;
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(64,64,64)),new tusk_lib_comp_MeshComponent(null,copMesh2),new tusk_lib_comp_MaterialComponent(null,_g.copMaterial),new tusk_lib_comp_CustomUniformsComponent(function() {
				_g.copMaterial.setVec3("colour",GameTracker.player[1].colour);
			}),new minigames_sledtillyouredead_AnimatedSledComponent(copMesh2,4,15)]);
			_g.entities.push(p2CopEntity);
			_g.explosionMesh = _g.quad.clone("mesh.explosion");
			var _g12 = 0;
			var _g22 = _g.explosionMesh.uvs;
			while(_g12 < _g22.length) {
				var uv1 = _g22[_g12];
				++_g12;
				glm__$Vec2_Vec2_$Impl_$.set_x(uv1,glm__$Vec2_Vec2_$Impl_$.get_x(uv1) / 8);
			}
			_g.player1ScoreDisplay = new tusk_lib_comp_TextComponent(_g.font,"" + GameTracker.player[0].name + ": " + _g.p1Score,tusk_lib_comp_TextAlign.Left,tusk_lib_comp_TextVerticalAlign.Top,glm__$Vec4_Vec4_$Impl_$._new(1,1,1,1));
			_g.player2ScoreDisplay = new tusk_lib_comp_TextComponent(_g.font,"" + GameTracker.player[1].name + ": " + _g.p2Score,tusk_lib_comp_TextAlign.Right,tusk_lib_comp_TextVerticalAlign.Top,glm__$Vec4_Vec4_$Impl_$._new(1,1,1,1));
			_g.entities.push(new tusk_Entity(_g,"Player 1 Score",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(tusk_Tusk.game.get_width() / -2 + 8,tusk_Tusk.game.get_height() / -2 + 8,-0.05),(function($this) {
				var $r;
				var q6 = glm__$Quat_Quat_$Impl_$._new();
				{
					q6[0] = 1;
					q6[1] = 0;
					q6[2] = 0;
					q6[3] = 0;
					q6;
				}
				$r = q6;
				return $r;
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(2,2,2)),new tusk_lib_comp_MeshComponent(null,_g.textMesh.clone("p1scoretext")),new tusk_lib_comp_MaterialComponent(_g.fontMat.path),_g.player1ScoreDisplay]));
			_g.entities.push(new tusk_Entity(_g,"Player 2 Score",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(tusk_Tusk.game.get_width() / 2 - 8,tusk_Tusk.game.get_height() / -2 + 8,-0.05),(function($this) {
				var $r;
				var q7 = glm__$Quat_Quat_$Impl_$._new();
				{
					q7[0] = 1;
					q7[1] = 0;
					q7[2] = 0;
					q7[3] = 0;
					q7;
				}
				$r = q7;
				return $r;
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(2,2,2)),new tusk_lib_comp_MeshComponent(null,_g.textMesh.clone("p2scoretext")),new tusk_lib_comp_MaterialComponent(_g.fontMat.path),_g.player2ScoreDisplay]));
			_g.crookMesh = _g.quad.clone("crook.mesh");
			var _g13 = 0;
			var _g23 = _g.crookMesh.uvs;
			while(_g13 < _g23.length) {
				var uv2 = _g23[_g13];
				++_g13;
				glm__$Vec2_Vec2_$Impl_$.set_x(uv2,glm__$Vec2_Vec2_$Impl_$.get_x(uv2) / 2);
			}
			_g.entities.push(new tusk_Entity(_g,"Countdown Music",[new tusk_lib_comp_SoundComponent(_g.countdownMusic.path,true)]));
			var spaceJamComponent = new tusk_lib_comp_SoundComponent(_g.spaceJam.path,false);
			_g.entities.push(new tusk_Entity(_g,"Space Jam",[spaceJamComponent]));
			var countdownText = new tusk_lib_comp_TextComponent(_g.font,"3",tusk_lib_comp_TextAlign.Centre,tusk_lib_comp_TextVerticalAlign.Centre,glm__$Vec4_Vec4_$Impl_$._new(1,1,1,1));
			var countdownTimer = new tusk_lib_comp_TimedPromiseComponent(1.0);
			var countdownTransform = new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,0,-0.99),(function($this) {
				var $r;
				var q3 = glm__$Quat_Quat_$Impl_$._new();
				{
					q3[0] = 1;
					q3[1] = 0;
					q3[2] = 0;
					q3[3] = 0;
					q3;
				}
				$r = q3;
				return $r;
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(8,8,8));
			var countdownEntity = new tusk_Entity(_g,"Countdown",[countdownTransform,new tusk_lib_comp_MeshComponent(null,_g.textMesh.clone("br.countdowntextmesh")),new tusk_lib_comp_MaterialComponent(_g.fontMat.path),countdownText,countdownTimer]);
			_g.entities.push(countdownEntity);
			countdownTimer.done.pipe(function(_1) {
				countdownText.set_text("2");
				countdownTimer.t = 0;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_2) {
				countdownText.set_text("1");
				countdownTimer.t = 0;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_3) {
				p1CopEntity.push(new minigames_spacecops_MovementComponent(0));
				p1CopEntity.push(new minigames_spacecops_ShooterComponent(0,$bind(_g,_g.spawnBullet)));
				p2CopEntity.push(new minigames_spacecops_MovementComponent(1));
				p2CopEntity.push(new minigames_spacecops_ShooterComponent(1,$bind(_g,_g.spawnBullet)));
				countdownText.set_text("Go!");
				countdownTimer.t = 0;
				countdownTimer.wait = 0.5;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_4) {
				countdownText.set_text("");
				spaceJamComponent.play = true;
				var wave = new minigames_spacecops_WaveComponent(0.25,10,$bind(_g,_g.spawnCrook),5,1,0);
				_g.entities.push(new tusk_Entity(_g,"",[wave]));
				return wave.done;
			}).pipe(function(_5) {
				var wave1 = new minigames_spacecops_WaveComponent(0.25,10,$bind(_g,_g.spawnCrook),5,2,0);
				_g.entities.push(new tusk_Entity(_g,"",[wave1]));
				return wave1.done;
			}).pipe(function(_6) {
				spaceJamComponent.play = false;
				spaceJamComponent.stop = true;
				var winner = -1;
				if(_g.p1Score > _g.p2Score) winner = 0; else if(_g.p2Score > _g.p1Score) winner = 1;
				glm__$Vec3_Vec3_$Impl_$.set(countdownTransform.scale,4,4,4);
				glm__$Vec3_Vec3_$Impl_$.copy(countdownTransform.lastScale,countdownTransform.scale);
				if(winner >= 0) {
					countdownText.set_text(GameTracker.player[winner].name + " wins!");
					GameTracker.player[winner].score += 1;
				} else countdownText.set_text("Tie!");
				var _g14 = 0;
				var _g24 = _g.entities;
				while(_g14 < _g24.length) {
					var entity = _g24[_g14];
					++_g14;
					if(entity.hasType(31)) entity.removeType(31);
					if(entity.hasType(33)) entity.removeType(33);
				}
				_g.entities.push(new tusk_Entity(_g,"WinMusic",[new tusk_lib_comp_SoundComponent(_g.winMusic.path,true)]));
				countdownTimer.t = 0;
				countdownTimer.wait = 3;
				countdownTimer.reset();
				return countdownTimer.done;
			}).pipe(function(_7) {
				var cec = new tusk_lib_comp_CircleEffectComponent(false);
				_g.entities.push(new tusk_Entity(_g,"Circle Effect",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,0,0.1),(function($this) {
					var $r;
					var q8 = glm__$Quat_Quat_$Impl_$._new();
					{
						q8[0] = 1;
						q8[1] = 0;
						q8[2] = 0;
						q8[3] = 0;
						q8;
					}
					$r = q8;
					return $r;
				}(this)),glm__$Vec3_Vec3_$Impl_$._new(1024,1024,1024)),new tusk_lib_comp_MeshComponent(_g.quad.path),new tusk_lib_comp_MaterialComponent(_g.circleOutMat.path),cec]));
				return cec.done;
			}).then(function(_8) {
				_g.sceneDone.resolve(_g);
			});
		});
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
	}
	,__class__: minigames_SpaceCops
});
var minigames_sledtillyouredead_AnimatedSledComponent = function(mesh,frames,frameRate,destroyOnDone) {
	this.t = 0;
	this.mesh = mesh;
	this.t = 0;
	this.frame = Math.floor((frames - 1 + 1) * Math.random());
	this.frames = frames;
	this.uvxDelta = 1.0 / frames;
	this.frameTime = 1.0 / frameRate;
	if(destroyOnDone == null) this.destroyOnDone = false; else this.destroyOnDone = true;
	tusk_Component.call(this);
};
$hxClasses["minigames.sledtillyouredead.AnimatedSledComponent"] = minigames_sledtillyouredead_AnimatedSledComponent;
minigames_sledtillyouredead_AnimatedSledComponent.__name__ = ["minigames","sledtillyouredead","AnimatedSledComponent"];
minigames_sledtillyouredead_AnimatedSledComponent.__super__ = tusk_Component;
minigames_sledtillyouredead_AnimatedSledComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 25;
	}
	,__class__: minigames_sledtillyouredead_AnimatedSledComponent
});
var minigames_sledtillyouredead_AnimatedSledProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(25).include(8);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.sledtillyouredead.AnimatedSledProcessor"] = minigames_sledtillyouredead_AnimatedSledProcessor;
minigames_sledtillyouredead_AnimatedSledProcessor.__name__ = ["minigames","sledtillyouredead","AnimatedSledProcessor"];
minigames_sledtillyouredead_AnimatedSledProcessor.__super__ = tusk_Processor;
minigames_sledtillyouredead_AnimatedSledProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var a = entity.get(25);
			var m = entity.get(8);
			a.t += event.dt;
			if(a.t >= a.frameTime) {
				a.t = 0;
				a.frame++;
				if(a.frame >= a.frames) {
					if(a.destroyOnDone) tusk_Tusk.removeEntity(entity); else a.frame = 0;
				}
				glm__$Vec2_Vec2_$Impl_$.set_x(m.mesh.uvs[0],a.frame * a.uvxDelta);
				glm__$Vec2_Vec2_$Impl_$.set_x(m.mesh.uvs[1],(a.frame + 1) * a.uvxDelta);
				glm__$Vec2_Vec2_$Impl_$.set_x(m.mesh.uvs[2],(a.frame + 1) * a.uvxDelta);
				glm__$Vec2_Vec2_$Impl_$.set_x(m.mesh.uvs[3],(a.frame + 1) * a.uvxDelta);
				glm__$Vec2_Vec2_$Impl_$.set_x(m.mesh.uvs[4],a.frame * a.uvxDelta);
				glm__$Vec2_Vec2_$Impl_$.set_x(m.mesh.uvs[5],a.frame * a.uvxDelta);
				m.bufferDirty = true;
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_sledtillyouredead_AnimatedSledProcessor
});
var minigames_sledtillyouredead_CollisionComponent = function(radius,layer) {
	if(layer == null) layer = 1;
	this.radius = radius;
	this.layer = layer;
	tusk_PromiseComponent.call(this);
};
$hxClasses["minigames.sledtillyouredead.CollisionComponent"] = minigames_sledtillyouredead_CollisionComponent;
minigames_sledtillyouredead_CollisionComponent.__name__ = ["minigames","sledtillyouredead","CollisionComponent"];
minigames_sledtillyouredead_CollisionComponent.__super__ = tusk_PromiseComponent;
minigames_sledtillyouredead_CollisionComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	get__tid: function() {
		return 24;
	}
	,__class__: minigames_sledtillyouredead_CollisionComponent
});
var minigames_sledtillyouredead_CollisionProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(24).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.sledtillyouredead.CollisionProcessor"] = minigames_sledtillyouredead_CollisionProcessor;
minigames_sledtillyouredead_CollisionProcessor.__name__ = ["minigames","sledtillyouredead","CollisionProcessor"];
minigames_sledtillyouredead_CollisionProcessor.__super__ = tusk_Processor;
minigames_sledtillyouredead_CollisionProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var testVec = glm__$Vec2_Vec2_$Impl_$._new();
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entityA = _g1[_g];
			++_g;
			var sa = entityA.get(24);
			if(sa.done._resolved) continue;
			var _g2 = 0;
			var _g3 = this.entities;
			while(_g2 < _g3.length) {
				var entityB = _g3[_g2];
				++_g2;
				if(entityA == entityB) continue;
				var sb = entityB.get(24);
				if(sb.done._resolved) continue;
				if(sa.layer == sb.layer) continue;
				var ta = entityA.get(5);
				var tb = entityB.get(5);
				glm__$Vec2_Vec2_$Impl_$.set_x(testVec,glm__$Vec3_Vec3_$Impl_$.get_x(ta.position) - glm__$Vec3_Vec3_$Impl_$.get_x(tb.position));
				glm__$Vec2_Vec2_$Impl_$.set_y(testVec,glm__$Vec3_Vec3_$Impl_$.get_y(ta.position) - glm__$Vec3_Vec3_$Impl_$.get_y(tb.position));
				var sqrLength = glm__$Vec2_Vec2_$Impl_$.sqrLength(testVec);
				var intersecting = (sa.radius - sb.radius) * (sa.radius - sb.radius) <= sqrLength && sqrLength <= (sa.radius + sb.radius) * (sa.radius + sb.radius);
				if(intersecting) {
					sa.finish();
					sb.finish();
				}
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_sledtillyouredead_CollisionProcessor
});
var minigames_spacecops_BulletComponent = function(owner) {
	this.owner = owner;
	tusk_Component.call(this);
};
$hxClasses["minigames.spacecops.BulletComponent"] = minigames_spacecops_BulletComponent;
minigames_spacecops_BulletComponent.__name__ = ["minigames","spacecops","BulletComponent"];
minigames_spacecops_BulletComponent.__super__ = tusk_Component;
minigames_spacecops_BulletComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 28;
	}
	,__class__: minigames_spacecops_BulletComponent
});
var minigames_spacecops_BulletProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(28).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.spacecops.BulletProcessor"] = minigames_spacecops_BulletProcessor;
minigames_spacecops_BulletProcessor.__name__ = ["minigames","spacecops","BulletProcessor"];
minigames_spacecops_BulletProcessor.__super__ = tusk_Processor;
minigames_spacecops_BulletProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var b = entity.get(28);
			glm__$Vec3_Vec3_$Impl_$.copy(t.lastPosition,t.position);
			var _g2 = t.position;
			glm__$Vec3_Vec3_$Impl_$.set_y(_g2,glm__$Vec3_Vec3_$Impl_$.get_y(_g2) + 512 * event.dt);
			if(glm__$Vec3_Vec3_$Impl_$.get_y(t.position) >= tusk_Tusk.game.get_height() / 2 + 64) tusk_Tusk.removeEntity(entity);
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_spacecops_BulletProcessor
});
var minigames_spacecops_DestroyOnCollisionProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(24);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.spacecops.DestroyOnCollisionProcessor"] = minigames_spacecops_DestroyOnCollisionProcessor;
minigames_spacecops_DestroyOnCollisionProcessor.__name__ = ["minigames","spacecops","DestroyOnCollisionProcessor"];
minigames_spacecops_DestroyOnCollisionProcessor.__super__ = tusk_Processor;
minigames_spacecops_DestroyOnCollisionProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var c = entity.get(24);
			if(c.done._resolved) {
				if(entity.hasType(28)) {
					var b = entity.get(28);
					minigames_SpaceCops.addToScore(b.owner);
				}
				if(entity.hasType(29)) {
					var m = entity.get(29);
					m.finish();
				}
				tusk_Tusk.removeEntity(entity);
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_spacecops_DestroyOnCollisionProcessor
});
var minigames_spacecops_MovementComponent = function(player) {
	this.player = player;
	this.velocity = 0;
	this.aiTarget = 0;
	tusk_Component.call(this);
};
$hxClasses["minigames.spacecops.MovementComponent"] = minigames_spacecops_MovementComponent;
minigames_spacecops_MovementComponent.__name__ = ["minigames","spacecops","MovementComponent"];
minigames_spacecops_MovementComponent.__super__ = tusk_Component;
minigames_spacecops_MovementComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 33;
	}
	,__class__: minigames_spacecops_MovementComponent
});
var minigames_spacecops_MovementProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(33).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.spacecops.MovementProcessor"] = minigames_spacecops_MovementProcessor;
minigames_spacecops_MovementProcessor.__name__ = ["minigames","spacecops","MovementProcessor"];
minigames_spacecops_MovementProcessor.__super__ = tusk_Processor;
minigames_spacecops_MovementProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var m = entity.get(33);
			var axis = 0;
			if(GameTracker.player[m.player].isCPU) {
				if(Math.abs(m.aiTarget - glm__$Vec3_Vec3_$Impl_$.get_x(t.position)) <= 32) m.aiTarget = -380 + 760 * Math.random();
				if(m.aiTarget > glm__$Vec3_Vec3_$Impl_$.get_x(t.position)) axis = 1; else axis = -1;
			} else {
				if(tusk_Tusk.instance.app.input.keydown(GameTracker.player[m.player].btnA)) axis -= 1.0;
				if(tusk_Tusk.instance.app.input.keydown(GameTracker.player[m.player].btnB)) axis += 1.0;
			}
			glm__$Vec3_Vec3_$Impl_$.copy(t.lastPosition,t.position);
			if(axis != 0) m.velocity += (GameTracker.player[m.player].isCPU?1024:1536) * event.dt; else m.velocity = 0;
			m.velocity = tusk_math_MathTools.clamp(m.velocity,-384.,384);
			var _g2 = t.position;
			glm__$Vec3_Vec3_$Impl_$.set_x(_g2,glm__$Vec3_Vec3_$Impl_$.get_x(_g2) + m.velocity * event.dt * axis);
			glm__$Vec3_Vec3_$Impl_$.set_x(t.position,tusk_math_MathTools.clamp(glm__$Vec3_Vec3_$Impl_$.get_x(t.position),-380,380));
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_spacecops_MovementProcessor
});
var minigames_spacecops_RailedMovementComponent = function(endT,xFunc,yFunc) {
	this.endT = 0;
	this.t = 0;
	this.t = 0;
	this.endT = endT;
	this.xFunc = xFunc;
	this.yFunc = yFunc;
	tusk_PromiseComponent.call(this);
};
$hxClasses["minigames.spacecops.RailedMovementComponent"] = minigames_spacecops_RailedMovementComponent;
minigames_spacecops_RailedMovementComponent.__name__ = ["minigames","spacecops","RailedMovementComponent"];
minigames_spacecops_RailedMovementComponent.__super__ = tusk_PromiseComponent;
minigames_spacecops_RailedMovementComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	get__tid: function() {
		return 29;
	}
	,__class__: minigames_spacecops_RailedMovementComponent
});
var minigames_spacecops_RailedMovementProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(29).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.spacecops.RailedMovementProcessor"] = minigames_spacecops_RailedMovementProcessor;
minigames_spacecops_RailedMovementProcessor.__name__ = ["minigames","spacecops","RailedMovementProcessor"];
minigames_spacecops_RailedMovementProcessor.__super__ = tusk_Processor;
minigames_spacecops_RailedMovementProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var r = entity.get(29);
			r.t += event.dt;
			if(r.t >= r.endT) {
				tusk_Tusk.removeEntity(entity);
				if(!r.done._resolved) r.finish();
			}
			glm__$Vec3_Vec3_$Impl_$.copy(t.lastPosition,t.position);
			glm__$Vec3_Vec3_$Impl_$.set_x(t.position,r.xFunc(r.t,r.endT));
			glm__$Vec3_Vec3_$Impl_$.set_y(t.position,r.yFunc(r.t,r.endT));
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_spacecops_RailedMovementProcessor
});
var minigames_spacecops_ScrollComponent = function(clipY,resetY) {
	this.clipY = clipY;
	this.resetY = resetY;
	tusk_Component.call(this);
};
$hxClasses["minigames.spacecops.ScrollComponent"] = minigames_spacecops_ScrollComponent;
minigames_spacecops_ScrollComponent.__name__ = ["minigames","spacecops","ScrollComponent"];
minigames_spacecops_ScrollComponent.__super__ = tusk_Component;
minigames_spacecops_ScrollComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 32;
	}
	,__class__: minigames_spacecops_ScrollComponent
});
var minigames_spacecops_ScrollProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(32).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.spacecops.ScrollProcessor"] = minigames_spacecops_ScrollProcessor;
minigames_spacecops_ScrollProcessor.__name__ = ["minigames","spacecops","ScrollProcessor"];
minigames_spacecops_ScrollProcessor.__super__ = tusk_Processor;
minigames_spacecops_ScrollProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var s = entity.get(32);
			glm__$Vec3_Vec3_$Impl_$.copy(t.lastPosition,t.position);
			var _g2 = t.position;
			glm__$Vec3_Vec3_$Impl_$.set_y(_g2,glm__$Vec3_Vec3_$Impl_$.get_y(_g2) - 256 * event.dt);
			if(glm__$Vec3_Vec3_$Impl_$.get_y(t.position) <= s.clipY) {
				var _g21 = t.position;
				glm__$Vec3_Vec3_$Impl_$.set_y(_g21,glm__$Vec3_Vec3_$Impl_$.get_y(_g21) + s.resetY);
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_spacecops_ScrollProcessor
});
var minigames_spacecops_ShooterComponent = function(player,spawnBullet) {
	this.t = 0;
	this.t = 0;
	this.player = player;
	this.spawnBullet = spawnBullet;
	tusk_Component.call(this);
};
$hxClasses["minigames.spacecops.ShooterComponent"] = minigames_spacecops_ShooterComponent;
minigames_spacecops_ShooterComponent.__name__ = ["minigames","spacecops","ShooterComponent"];
minigames_spacecops_ShooterComponent.__super__ = tusk_Component;
minigames_spacecops_ShooterComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 31;
	}
	,__class__: minigames_spacecops_ShooterComponent
});
var minigames_spacecops_ShooterProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(31).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.spacecops.ShooterProcessor"] = minigames_spacecops_ShooterProcessor;
minigames_spacecops_ShooterProcessor.__name__ = ["minigames","spacecops","ShooterProcessor"];
minigames_spacecops_ShooterProcessor.__super__ = tusk_Processor;
minigames_spacecops_ShooterProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var s = entity.get(31);
			s.t += event.dt;
			if(s.t >= 0.25) {
				s.t = 0;
				s.spawnBullet(s.player,glm__$Vec3_Vec3_$Impl_$.get_x(t.position),glm__$Vec3_Vec3_$Impl_$.get_y(t.position) + 32);
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_spacecops_ShooterProcessor
});
var minigames_spacecops_WaveComponent = function(period,count,spawnFunc,life,xIndex,yIndex) {
	this.numDead = 0;
	this.t = 0;
	this.period = period;
	this.i = 0;
	this.count = count;
	this.numDead = 0;
	this.spawnFunc = spawnFunc;
	this.life = life;
	this.xIndex = xIndex;
	this.yIndex = yIndex;
	tusk_PromiseComponent.call(this);
};
$hxClasses["minigames.spacecops.WaveComponent"] = minigames_spacecops_WaveComponent;
minigames_spacecops_WaveComponent.__name__ = ["minigames","spacecops","WaveComponent"];
minigames_spacecops_WaveComponent.__super__ = tusk_PromiseComponent;
minigames_spacecops_WaveComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	get__tid: function() {
		return 30;
	}
	,__class__: minigames_spacecops_WaveComponent
});
var minigames_spacecops_WaveProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(30);
	tusk_Processor.call(this,entities);
};
$hxClasses["minigames.spacecops.WaveProcessor"] = minigames_spacecops_WaveProcessor;
minigames_spacecops_WaveProcessor.__name__ = ["minigames","spacecops","WaveProcessor"];
minigames_spacecops_WaveProcessor.__super__ = tusk_Processor;
minigames_spacecops_WaveProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var w = [entity.get(30)];
			if(w[0].numDead >= w[0].count) {
				tusk_Tusk.removeEntity(entity);
				w[0].finish();
			}
			if(w[0].i < w[0].count) {
				if(w[0].t >= w[0].period) {
					w[0].i++;
					w[0].t = 0;
					w[0].spawnFunc(w[0].life,w[0].xIndex,w[0].yIndex).then((function(w) {
						return function(_) {
							w[0].numDead++;
						};
					})(w));
				} else w[0].t += event.dt;
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: minigames_spacecops_WaveProcessor
});
var partials_Partial = function() { };
$hxClasses["partials.Partial"] = partials_Partial;
partials_Partial.__name__ = ["partials","Partial"];
var promhx_base_AsyncBase = function(d) {
	this.id = promhx_base_AsyncBase.id_ctr += 1;
	this._resolved = false;
	this._pending = false;
	this._errorPending = false;
	this._fulfilled = false;
	this._update = [];
	this._error = [];
	this._errored = false;
	if(d != null) promhx_base_AsyncBase.link(d,this,function(x) {
		return x;
	});
};
$hxClasses["promhx.base.AsyncBase"] = promhx_base_AsyncBase;
promhx_base_AsyncBase.__name__ = ["promhx","base","AsyncBase"];
promhx_base_AsyncBase.link = function(current,next,f) {
	current._update.push({ async : next, linkf : function(x) {
		next.handleResolve(f(x));
	}});
	promhx_base_AsyncBase.immediateLinkUpdate(current,next,f);
};
promhx_base_AsyncBase.immediateLinkUpdate = function(current,next,f) {
	if(current._errored && !current._errorPending && !(current._error.length > 0)) next.handleError(current._errorVal);
	if(current._resolved && !current._pending) try {
		next.handleResolve(f(current._val));
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		next.handleError(e);
	}
};
promhx_base_AsyncBase.linkAll = function(all,next) {
	var cthen = function(arr,current,v) {
		if(arr.length == 0 || promhx_base_AsyncBase.allFulfilled(arr)) {
			var vals;
			var _g = [];
			var $it0 = $iterator(all)();
			while( $it0.hasNext() ) {
				var a = $it0.next();
				_g.push(a == current?v:a._val);
			}
			vals = _g;
			next.handleResolve(vals);
		}
		null;
		return;
	};
	var $it1 = $iterator(all)();
	while( $it1.hasNext() ) {
		var a1 = $it1.next();
		a1._update.push({ async : next, linkf : (function(f,a11,a2) {
			return function(v1) {
				f(a11,a2,v1);
				return;
			};
		})(cthen,(function($this) {
			var $r;
			var _g1 = [];
			var $it2 = $iterator(all)();
			while( $it2.hasNext() ) {
				var a21 = $it2.next();
				if(a21 != a1) _g1.push(a21);
			}
			$r = _g1;
			return $r;
		}(this)),a1)});
	}
	if(promhx_base_AsyncBase.allFulfilled(all)) next.handleResolve((function($this) {
		var $r;
		var _g2 = [];
		var $it3 = $iterator(all)();
		while( $it3.hasNext() ) {
			var a3 = $it3.next();
			_g2.push(a3._val);
		}
		$r = _g2;
		return $r;
	}(this)));
};
promhx_base_AsyncBase.pipeLink = function(current,ret,f) {
	var linked = false;
	var linkf = function(x) {
		if(!linked) {
			linked = true;
			var pipe_ret = f(x);
			pipe_ret._update.push({ async : ret, linkf : $bind(ret,ret.handleResolve)});
			promhx_base_AsyncBase.immediateLinkUpdate(pipe_ret,ret,function(x1) {
				return x1;
			});
		}
	};
	current._update.push({ async : ret, linkf : linkf});
	if(current._resolved && !current._pending) try {
		linkf(current._val);
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		ret.handleError(e);
	}
};
promhx_base_AsyncBase.allFulfilled = function($as) {
	var $it0 = $iterator($as)();
	while( $it0.hasNext() ) {
		var a = $it0.next();
		if(!a._fulfilled) return false;
	}
	return true;
};
promhx_base_AsyncBase.prototype = {
	catchError: function(f) {
		this._error.push(f);
		return this;
	}
	,handleResolve: function(val) {
		this._resolve(val);
	}
	,_resolve: function(val) {
		var _g = this;
		if(this._pending) promhx_base_EventLoop.enqueue((function(f,a1) {
			return function() {
				f(a1);
			};
		})($bind(this,this._resolve),val)); else {
			this._resolved = true;
			this._pending = true;
			promhx_base_EventLoop.queue.add(function() {
				_g._val = val;
				var _g1 = 0;
				var _g2 = _g._update;
				while(_g1 < _g2.length) {
					var up = _g2[_g1];
					++_g1;
					try {
						up.linkf(val);
					} catch( e ) {
						if (e instanceof js__$Boot_HaxeError) e = e.val;
						up.async.handleError(e);
					}
				}
				_g._fulfilled = true;
				_g._pending = false;
			});
			promhx_base_EventLoop.continueOnNextLoop();
		}
	}
	,handleError: function(error) {
		this._handleError(error);
	}
	,_handleError: function(error) {
		var _g = this;
		var update_errors = function(e) {
			if(_g._error.length > 0) {
				var _g1 = 0;
				var _g2 = _g._error;
				while(_g1 < _g2.length) {
					var ef = _g2[_g1];
					++_g1;
					ef(e);
				}
			} else if(_g._update.length > 0) {
				var _g11 = 0;
				var _g21 = _g._update;
				while(_g11 < _g21.length) {
					var up = _g21[_g11];
					++_g11;
					up.async.handleError(e);
				}
			} else throw new js__$Boot_HaxeError(e);
			_g._errorPending = false;
		};
		if(!this._errorPending) {
			this._errorPending = true;
			this._errored = true;
			this._errorVal = error;
			promhx_base_EventLoop.queue.add(function() {
				if(_g._errorMap != null) try {
					_g._resolve(_g._errorMap(error));
				} catch( e1 ) {
					if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
					update_errors(e1);
				} else update_errors(error);
			});
			promhx_base_EventLoop.continueOnNextLoop();
		}
	}
	,__class__: promhx_base_AsyncBase
};
var promhx_Deferred = $hx_exports.promhx.Deferred = function() {
	promhx_base_AsyncBase.call(this);
};
$hxClasses["promhx.Deferred"] = promhx_Deferred;
promhx_Deferred.__name__ = ["promhx","Deferred"];
promhx_Deferred.__super__ = promhx_base_AsyncBase;
promhx_Deferred.prototype = $extend(promhx_base_AsyncBase.prototype,{
	resolve: function(val) {
		this.handleResolve(val);
	}
	,throwError: function(e) {
		this.handleError(e);
	}
	,promise: function() {
		return new promhx_Promise(this);
	}
	,__class__: promhx_Deferred
});
var promhx_Promise = $hx_exports.promhx.Promise = function(d) {
	promhx_base_AsyncBase.call(this,d);
	this._rejected = false;
};
$hxClasses["promhx.Promise"] = promhx_Promise;
promhx_Promise.__name__ = ["promhx","Promise"];
promhx_Promise.whenAll = function(itb) {
	var ret = new promhx_Promise();
	promhx_base_AsyncBase.linkAll(itb,ret);
	return ret;
};
promhx_Promise.__super__ = promhx_base_AsyncBase;
promhx_Promise.prototype = $extend(promhx_base_AsyncBase.prototype,{
	handleResolve: function(val) {
		if(this._resolved) {
			var msg = "Promise has already been resolved";
			throw new js__$Boot_HaxeError(promhx_error_PromiseError.AlreadyResolved(msg));
		}
		this._resolve(val);
	}
	,then: function(f) {
		var ret = new promhx_Promise();
		promhx_base_AsyncBase.link(this,ret,f);
		return ret;
	}
	,handleError: function(error) {
		this._rejected = true;
		this._handleError(error);
	}
	,pipe: function(f) {
		var ret = new promhx_Promise();
		promhx_base_AsyncBase.pipeLink(this,ret,f);
		return ret;
	}
	,__class__: promhx_Promise
});
var promhx_base_EventLoop = function() { };
$hxClasses["promhx.base.EventLoop"] = promhx_base_EventLoop;
promhx_base_EventLoop.__name__ = ["promhx","base","EventLoop"];
promhx_base_EventLoop.enqueue = function(eqf) {
	promhx_base_EventLoop.queue.add(eqf);
	promhx_base_EventLoop.continueOnNextLoop();
};
promhx_base_EventLoop.f = function() {
	var fn = promhx_base_EventLoop.queue.pop();
	if(fn != null) fn();
	if(!promhx_base_EventLoop.queue.isEmpty()) promhx_base_EventLoop.continueOnNextLoop();
};
promhx_base_EventLoop.continueOnNextLoop = function() {
	if(promhx_base_EventLoop.nextLoop != null) promhx_base_EventLoop.nextLoop(promhx_base_EventLoop.f); else setImmediate(promhx_base_EventLoop.f);
};
var promhx_error_PromiseError = $hxClasses["promhx.error.PromiseError"] = { __ename__ : ["promhx","error","PromiseError"], __constructs__ : ["AlreadyResolved","DownstreamNotFullfilled"] };
promhx_error_PromiseError.AlreadyResolved = function(message) { var $x = ["AlreadyResolved",0,message]; $x.__enum__ = promhx_error_PromiseError; $x.toString = $estr; return $x; };
promhx_error_PromiseError.DownstreamNotFullfilled = function(message) { var $x = ["DownstreamNotFullfilled",1,message]; $x.__enum__ = promhx_error_PromiseError; $x.toString = $estr; return $x; };
var snow_App = function() {
	this.next_render = 0;
	this.next_tick = 0;
	this.alpha = 1.0;
	this.cur_frame_start = 0.0;
	this.current_time = 0;
	this.last_frame_start = 0.0;
	this.delta_sim = 0.016666666666666666;
	this.delta_time = 0.016666666666666666;
	this.max_frame_time = 0.25;
	this.update_rate = 0;
	this.render_rate = -1;
	this.fixed_delta = 0;
	this.timescale = 1;
};
$hxClasses["snow.App"] = snow_App;
snow_App.__name__ = ["snow","App"];
snow_App.prototype = {
	config: function(config) {
		return config;
	}
	,ready: function() {
	}
	,update: function(dt) {
	}
	,ondestroy: function() {
	}
	,onevent: function(event) {
	}
	,ontickstart: function() {
	}
	,ontickend: function() {
	}
	,onkeydown: function(keycode,scancode,repeat,mod,timestamp,window_id) {
	}
	,onkeyup: function(keycode,scancode,repeat,mod,timestamp,window_id) {
	}
	,ontextinput: function(text,start,length,type,timestamp,window_id) {
	}
	,onmousedown: function(x,y,button,timestamp,window_id) {
	}
	,onmouseup: function(x,y,button,timestamp,window_id) {
	}
	,onmousewheel: function(x,y,timestamp,window_id) {
	}
	,onmousemove: function(x,y,xrel,yrel,timestamp,window_id) {
	}
	,ontouchdown: function(x,y,touch_id,timestamp) {
	}
	,ontouchup: function(x,y,touch_id,timestamp) {
	}
	,ontouchmove: function(x,y,dx,dy,touch_id,timestamp) {
	}
	,ongamepadaxis: function(gamepad,axis,value,timestamp) {
	}
	,ongamepaddown: function(gamepad,button,value,timestamp) {
	}
	,ongamepadup: function(gamepad,button,value,timestamp) {
	}
	,ongamepaddevice: function(gamepad,id,type,timestamp) {
	}
	,on_internal_init: function() {
		this.cur_frame_start = snow_Snow.core.timestamp();
		this.last_frame_start = this.cur_frame_start;
		this.current_time = 0;
		this.delta_time = 0.016;
	}
	,on_internal_update: function() {
		if(this.update_rate != 0) {
			if(snow_Snow.core.timestamp() < this.next_tick) return;
			this.next_tick = snow_Snow.core.timestamp() + this.update_rate;
		}
		this.cur_frame_start = snow_Snow.core.timestamp();
		this.delta_time = this.cur_frame_start - this.last_frame_start;
		this.last_frame_start = this.cur_frame_start;
		if(this.delta_time > this.max_frame_time) this.delta_time = this.max_frame_time;
		var used_delta;
		if(this.fixed_delta == 0) used_delta = this.delta_time; else used_delta = this.fixed_delta;
		used_delta *= this.timescale;
		this.delta_sim = used_delta;
		this.current_time += used_delta;
		this.app.do_internal_update(used_delta);
	}
	,on_internal_render: function() {
		if(this.render_rate != 0) {
			if(this.render_rate < 0 || this.next_render < snow_Snow.core.timestamp()) {
				this.app.render();
				this.next_render += this.render_rate;
			}
		}
	}
	,__class__: snow_App
};
var snow_AppFixedTimestep = function() {
	this.overflow = 0.0;
	this.frame_time = 0.0167;
	snow_App.call(this);
};
$hxClasses["snow.AppFixedTimestep"] = snow_AppFixedTimestep;
snow_AppFixedTimestep.__name__ = ["snow","AppFixedTimestep"];
snow_AppFixedTimestep.__super__ = snow_App;
snow_AppFixedTimestep.prototype = $extend(snow_App.prototype,{
	on_internal_init: function() {
		snow_App.prototype.on_internal_init.call(this);
		this.frame_time = 0.016666666666666666;
		this.last_frame_start = snow_Snow.core.timestamp();
	}
	,on_internal_update: function() {
		this.cur_frame_start = snow_Snow.core.timestamp();
		this.delta_time = this.cur_frame_start - this.last_frame_start;
		this.delta_sim = this.delta_time * this.timescale;
		if(this.delta_sim > this.max_frame_time) this.delta_sim = this.max_frame_time;
		this.last_frame_start = this.cur_frame_start;
		this.overflow += this.delta_sim;
		while(this.overflow >= this.frame_time) {
			this.app.do_internal_update(this.frame_time * this.timescale);
			this.current_time += this.frame_time * this.timescale;
			this.overflow -= this.frame_time * this.timescale;
		}
		this.alpha = this.overflow / this.frame_time;
	}
	,__class__: snow_AppFixedTimestep
});
var snow_Snow = function() {
	this.is_ready = false;
	this.was_ready = false;
	this.has_shutdown = false;
	this.shutting_down = false;
	this.os = "unknown";
	this.platform = "unknown";
	this.freeze = false;
	this.platform = "web";
	snow_Snow.core = new snow_core_web_Core(this);
	snow_Snow.next_queue = [];
	snow_Snow.defer_queue = [];
};
$hxClasses["snow.Snow"] = snow_Snow;
snow_Snow.__name__ = ["snow","Snow"];
snow_Snow.next = function(func) {
	if(func != null) snow_Snow.next_queue.push(func);
};
snow_Snow.prototype = {
	shutdown: function() {
		this.shutting_down = true;
		this.host.ondestroy();
		this.io.module.destroy();
		this.audio.destroy();
		this.input.destroy();
		this.windowing.destroy();
		snow_Snow.core.shutdown();
		this.has_shutdown = true;
	}
	,render: function() {
		this.windowing.update();
	}
	,dispatch_system_event: function(_event) {
		this.on_event(_event);
	}
	,init: function(_snow_config,_host) {
		this.snow_config = _snow_config;
		if(this.snow_config.app_package == null) this.snow_config.app_package = "org.snowkit.snow";
		if(this.snow_config.config_path == null) this.snow_config.config_path = "";
		this.config = this.default_config();
		this.host = _host;
		this.host.app = this;
		snow_Snow.core.init($bind(this,this.on_event));
	}
	,on_snow_init: function() {
		this.host.on_internal_init();
	}
	,on_snow_ready: function() {
		var _g = this;
		if(this.was_ready) throw new js__$Boot_HaxeError(snow_types_Error.error("firing ready event more than once is invalid usage"));
		this.io = new snow_system_io_IO(this);
		this.input = new snow_system_input_Input(this);
		this.audio = new snow_system_audio_Audio(this);
		this.assets = new snow_system_assets_Assets(this);
		this.windowing = new snow_system_window_Windowing(this);
		this.was_ready = true;
		this.setup_app_path();
		this.setup_configs().then(function(_) {
			_g.setup_default_window();
			snow_Snow.next($bind(_g,_g.on_ready));
		}).error(function(e) {
			throw new js__$Boot_HaxeError(snow_types_Error.init("snow / cannot recover from error: " + e));
		});
		snow_api_Promises.step();
		while(snow_Snow.next_queue.length > 0) this.cycle_next_queue();
		while(snow_Snow.defer_queue.length > 0) this.cycle_defer_queue();
	}
	,do_internal_update: function(dt) {
		this.io.module.update();
		this.input.update();
		this.audio.update();
		this.host.update(dt);
	}
	,on_ready: function() {
		this.is_ready = true;
		this.host.ready();
	}
	,on_snow_update: function() {
		if(this.freeze) return;
		snow_api_Timer.update();
		snow_api_Promises.step();
		this.cycle_next_queue();
		if(!this.is_ready) return;
		this.host.ontickstart();
		this.host.on_internal_update();
		this.host.on_internal_render();
		this.host.ontickend();
		this.cycle_defer_queue();
	}
	,on_event: function(_event) {
		if(_event.type != 3 && _event.type != 0 && _event.type != 5 && _event.type != 6) null;
		if(_event.type != 3) null;
		if(this.is_ready) {
			this.io.module.on_event(_event);
			this.audio.on_event(_event);
			this.windowing.on_event(_event);
			this.input.on_event(_event);
		}
		this.host.onevent(_event);
		var _g = _event.type;
		if(_g != null) switch(_g) {
		case 1:
			this.on_snow_init();
			break;
		case 2:
			this.on_snow_ready();
			break;
		case 3:
			this.on_snow_update();
			break;
		case 7:case 8:
			this.shutdown();
			break;
		case 4:
			console.log("     i / snow / " + "Goodbye.");
			break;
		default:
		} else {
		}
	}
	,cycle_next_queue: function() {
		var count = snow_Snow.next_queue.length;
		var i = 0;
		while(i < count) {
			(snow_Snow.next_queue.shift())();
			++i;
		}
	}
	,cycle_defer_queue: function() {
		var count = snow_Snow.defer_queue.length;
		var i = 0;
		while(i < count) {
			(snow_Snow.defer_queue.shift())();
			++i;
		}
	}
	,setup_app_path: function() {
	}
	,setup_configs: function() {
		var _g = this;
		if(this.snow_config.config_path == "") {
			this.setup_host_config();
			return snow_api_Promise.resolve();
		}
		return new snow_api_Promise(function(resolve,reject) {
			_g.default_runtime_config().then(function(_runtime_conf) {
				_g.config.runtime = _runtime_conf;
			}).error(function(error) {
				throw new js__$Boot_HaxeError(snow_types_Error.init("config / failed / default runtime config failed to parse as JSON. cannot recover. " + error));
			}).then(function() {
				_g.setup_host_config();
				resolve();
			});
		});
	}
	,setup_host_config: function() {
		this.config = this.host.config(this.config);
	}
	,setup_default_window: function() {
		if(this.config.has_window == true) {
			this.window = this.windowing.create(this.config.window);
			if(this.window.handle == null) throw new js__$Boot_HaxeError(snow_types_Error.windowing("requested default window cannot be created. cannot continue"));
		} else null;
	}
	,default_config: function() {
		return { has_window : true, runtime : { }, window : this.default_window_config(), render : this.default_render_config(), web : { no_context_menu : true, prevent_default_keys : [snow_system_input_Keycodes.left,snow_system_input_Keycodes.right,snow_system_input_Keycodes.up,snow_system_input_Keycodes.down,snow_system_input_Keycodes.backspace,snow_system_input_Keycodes.tab,snow_system_input_Keycodes["delete"]], prevent_default_mouse_wheel : true, true_fullscreen : false}, 'native' : { audio_buffer_length : 176400, audio_buffer_count : 4}};
	}
	,default_runtime_config: function() {
		var _g = this;
		return new snow_api_Promise(function(resolve,reject) {
			var load = _g.io.data_flow(haxe_io_Path.join([_g.assets.root,_g.snow_config.config_path]),snow_system_assets_AssetJSON.processor);
			load.then(resolve).error(function(error) {
				switch(error[1]) {
				case 3:
					var val = error[2];
					reject(error);
					break;
				default:
					resolve();
				}
			});
		});
	}
	,default_render_config: function() {
		return { depth : false, stencil : false, antialiasing : 0, red_bits : 8, green_bits : 8, blue_bits : 8, alpha_bits : 8, depth_bits : 0, stencil_bits : 0, opengl : { minor : 0, major : 0, profile : 0}};
	}
	,default_window_config: function() {
		var conf = { fullscreen_desktop : true, fullscreen : false, borderless : false, resizable : true, x : 536805376, y : 536805376, width : 960, height : 640, title : "snow app"};
		return conf;
	}
	,make_uniqueid: function(val) {
		if(val == null) val = Std.random(2147483647);
		var r = val % 62 | 0;
		var q = val / 62 | 0;
		if(q > 0) return this.make_uniqueid(q) + (r > 9?(function($this) {
			var $r;
			var ascii = 65 + (r - 10);
			if(ascii > 90) ascii += 6;
			$r = String.fromCharCode(ascii);
			return $r;
		}(this)):(r == null?"null":"" + r).charAt(0));
		return Std.string(r > 9?(function($this) {
			var $r;
			var ascii1 = 65 + (r - 10);
			if(ascii1 > 90) ascii1 += 6;
			$r = String.fromCharCode(ascii1);
			return $r;
		}(this)):(r == null?"null":"" + r).charAt(0));
	}
	,__class__: snow_Snow
};
var snow_api_DebugError = $hxClasses["snow.api.DebugError"] = { __ename__ : ["snow","api","DebugError"], __constructs__ : ["assertion","null_assertion"] };
snow_api_DebugError.assertion = function(expr) { var $x = ["assertion",0,expr]; $x.__enum__ = snow_api_DebugError; $x.toString = $estr; return $x; };
snow_api_DebugError.null_assertion = function(expr) { var $x = ["null_assertion",1,expr]; $x.__enum__ = snow_api_DebugError; $x.toString = $estr; return $x; };
var snow_api_Promise = function(func) {
	this.was_caught = false;
	var _g = this;
	this.state = 0;
	this.reject_reactions = [];
	this.fulfill_reactions = [];
	this.settle_reactions = [];
	snow_api_Promises.queue(function() {
		func($bind(_g,_g.onfulfill),$bind(_g,_g.onreject));
		snow_api_Promises.defer(snow_api_Promises.next);
	});
};
$hxClasses["snow.api.Promise"] = snow_api_Promise;
snow_api_Promise.__name__ = ["snow","api","Promise"];
snow_api_Promise.reject = function(reason) {
	return new snow_api_Promise(function(ok,no) {
		no(reason);
	});
};
snow_api_Promise.resolve = function(val) {
	return new snow_api_Promise(function(ok,no) {
		ok(val);
	});
};
snow_api_Promise.prototype = {
	then: function(on_fulfilled,on_rejected) {
		var _g = this.state;
		switch(_g) {
		case 0:
			this.add_fulfill(on_fulfilled);
			this.add_reject(on_rejected);
			return this.new_linked_promise();
		case 1:
			snow_api_Promises.defer(on_fulfilled,this.result);
			return snow_api_Promise.resolve(this.result);
		case 2:
			snow_api_Promises.defer(on_rejected,this.result);
			return snow_api_Promise.reject(this.result);
		}
	}
	,error: function(on_rejected) {
		var _g = this.state;
		switch(_g) {
		case 0:
			this.add_reject(on_rejected);
			return this.new_linked_resolve_empty();
		case 1:
			return snow_api_Promise.resolve(this.result);
		case 2:
			snow_api_Promises.defer(on_rejected,this.result);
			return snow_api_Promise.reject(this.result);
		}
	}
	,add_settle: function(f) {
		if(this.state == 0) this.settle_reactions.push(f); else snow_api_Promises.defer(f,this.result);
	}
	,new_linked_promise: function() {
		var _g = this;
		return new snow_api_Promise(function(f,r) {
			_g.add_settle(function(_) {
				if(_g.state == 1) f(_g.result); else r(_g.result);
			});
		});
	}
	,new_linked_resolve_empty: function() {
		var _g = this;
		return new snow_api_Promise(function(f,r) {
			_g.add_settle(function(_) {
				f();
			});
		});
	}
	,add_fulfill: function(f) {
		if(f != null) this.fulfill_reactions.push(f);
	}
	,add_reject: function(f) {
		if(f != null) {
			this.was_caught = true;
			this.reject_reactions.push(f);
		}
	}
	,onfulfill: function(val) {
		this.state = 1;
		this.result = val;
		while(this.fulfill_reactions.length > 0) {
			var fn = this.fulfill_reactions.shift();
			fn(this.result);
		}
		this.onsettle();
	}
	,onreject: function(reason) {
		this.state = 2;
		this.result = reason;
		while(this.reject_reactions.length > 0) {
			var fn = this.reject_reactions.shift();
			fn(this.result);
		}
		this.onsettle();
	}
	,onsettle: function() {
		while(this.settle_reactions.length > 0) {
			var fn = this.settle_reactions.shift();
			fn(this.result);
		}
	}
	,__class__: snow_api_Promise
};
var snow_api_Promises = function() { };
$hxClasses["snow.api.Promises"] = snow_api_Promises;
snow_api_Promises.__name__ = ["snow","api","Promises"];
snow_api_Promises.step = function() {
	snow_api_Promises.next();
	while(snow_api_Promises.defers.length > 0) {
		var defer = snow_api_Promises.defers.shift();
		defer.f(defer.a);
	}
};
snow_api_Promises.next = function() {
	if(snow_api_Promises.calls.length > 0) (snow_api_Promises.calls.shift())();
};
snow_api_Promises.defer = function(f,a) {
	if(f == null) return;
	snow_api_Promises.defers.push({ f : f, a : a});
};
snow_api_Promises.queue = function(f) {
	if(f == null) return;
	snow_api_Promises.calls.push(f);
};
var snow_api_Timer = function() { };
$hxClasses["snow.api.Timer"] = snow_api_Timer;
snow_api_Timer.__name__ = ["snow","api","Timer"];
snow_api_Timer.update = function() {
	var now = snow_Snow.core.timestamp();
	var _g = 0;
	var _g1 = snow_api_Timer.running_timers;
	while(_g < _g1.length) {
		var timer = _g1[_g];
		++_g;
		if(timer.running) {
			if(timer.fire_at < now) {
				timer.fire_at += timer.time;
				timer.run();
			}
		}
	}
};
snow_api_Timer.prototype = {
	run: function() {
	}
	,__class__: snow_api_Timer
};
var snow_core_web_Core = function(_app) {
	this._time_now = 0.0;
	this._lf_timestamp = 0.016;
	this.start_timestamp = 0.0;
	this.app = _app;
	this.start_timestamp = this.timestamp();
	this.guess_os();
};
$hxClasses["snow.core.web.Core"] = snow_core_web_Core;
snow_core_web_Core.__name__ = ["snow","core","web","Core"];
snow_core_web_Core.prototype = {
	init: function(_event_handler) {
		this.app.on_event({ type : 1});
		this.app.on_event({ type : 2});
		if(this.app.snow_config.has_loop) this.request_update();
	}
	,shutdown: function() {
	}
	,timestamp: function() {
		var now;
		if(window.performance != null) now = window.performance.now() / 1000.0; else now = haxe_Timer.stamp();
		return now - this.start_timestamp;
	}
	,request_update: function() {
		var _g = this;
		if(($_=window,$bind($_,$_.requestAnimationFrame)) != null) window.requestAnimationFrame($bind(this,this.snow_core_loop)); else {
			console.log("     i / core / " + ("warning : requestAnimationFrame not found, falling back to render_rate! render_rate:" + this.app.host.render_rate));
			window.setTimeout(function() {
				var _now = _g.timestamp();
				_g._time_now += _now - _g._lf_timestamp;
				_g.snow_core_loop(_g._time_now * 1000.0);
				_g._lf_timestamp = _now;
			},this.app.host.render_rate * 1000.0 | 0);
		}
	}
	,snow_core_loop: function(_t) {
		if(_t == null) _t = 0.016;
		this.update();
		this.app.on_event({ type : 3});
		this.request_update();
		return true;
	}
	,update: function() {
	}
	,guess_os: function() {
		var _ver = window.navigator.appVersion;
		var _agent = window.navigator.userAgent;
		if((function($this) {
			var $r;
			var r = new EReg("mac","gi");
			$r = r.match(_ver);
			return $r;
		}(this))) this.app.os = "mac";
		if((function($this) {
			var $r;
			var r1 = new EReg("win","gi");
			$r = r1.match(_ver);
			return $r;
		}(this))) this.app.os = "windows";
		if((function($this) {
			var $r;
			var r2 = new EReg("x11","gi");
			$r = r2.match(_ver);
			return $r;
		}(this))) this.app.os = "linux";
		if((function($this) {
			var $r;
			var r3 = new EReg("linux","gi");
			$r = r3.match(_ver);
			return $r;
		}(this))) this.app.os = "linux";
		if((function($this) {
			var $r;
			var r4 = new EReg("android","gi");
			$r = r4.match(_ver);
			return $r;
		}(this))) this.app.os = "android";
		if((function($this) {
			var $r;
			var r5 = new EReg("ipad","gi");
			$r = r5.match(_agent);
			return $r;
		}(this))) this.app.os = "ios";
		if((function($this) {
			var $r;
			var r6 = new EReg("iphone","gi");
			$r = r6.match(_agent);
			return $r;
		}(this))) this.app.os = "ios";
		if((function($this) {
			var $r;
			var r7 = new EReg("ipod","gi");
			$r = r7.match(_agent);
			return $r;
		}(this))) this.app.os = "ios";
	}
	,__class__: snow_core_web_Core
};
var snow_modules_interfaces_Assets = function() { };
$hxClasses["snow.modules.interfaces.Assets"] = snow_modules_interfaces_Assets;
snow_modules_interfaces_Assets.__name__ = ["snow","modules","interfaces","Assets"];
var snow_core_web_assets_Assets = function(_system) {
	this.system = _system;
};
$hxClasses["snow.core.web.assets.Assets"] = snow_core_web_assets_Assets;
snow_core_web_assets_Assets.__name__ = ["snow","core","web","assets","Assets"];
snow_core_web_assets_Assets.__interfaces__ = [snow_modules_interfaces_Assets];
snow_core_web_assets_Assets.prototype = {
	image_load_info: function(_id,_components) {
		if(_components == null) _components = 4;
		return this.system.app.io.data_flow(_id,snow_system_assets_AssetImage.processor);
	}
	,image_info_from_element: function(_id,_elem) {
		var width_pot = this.nearest_power_of_two(_elem.width);
		var height_pot = this.nearest_power_of_two(_elem.height);
		var image_bytes = this.POT_bytes_from_element(_elem.width,_elem.height,width_pot,height_pot,_elem);
		var info = { id : _id, bpp : 4, width : _elem.width, height : _elem.height, width_actual : width_pot, height_actual : height_pot, bpp_source : 4, pixels : image_bytes};
		image_bytes = null;
		return info;
	}
	,image_info_from_bytes: function(_id,_bytes,_components) {
		if(_components == null) _components = 4;
		var _g = this;
		if(_id == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
		if(_bytes == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_bytes was null"));
		if(!(_bytes.length != 0)) throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("_bytes.length != 0"));
		var ext = haxe_io_Path.extension(_id);
		return new snow_api_Promise(function(resolve,reject) {
			var str = "";
			var i = 0;
			var len = _bytes.length;
			while(i < len) str += String.fromCharCode((function($this) {
				var $r;
				var a;
				{
					var idx = i++;
					a = _bytes[idx];
				}
				$r = a & 255;
				return $r;
			}(this)));
			var b64 = window.btoa(str);
			var src = "data:image/" + ext + ";base64," + b64;
			var _img = new Image();
			_img.onload = function(_) {
				var info = _g.image_info_from_element(_id,_img);
				resolve(info);
			};
			_img.onerror = function(e) {
				reject(snow_types_Error.error("failed to load image from bytes, on error: " + e));
			};
			_img.src = src;
		});
	}
	,POT_bytes_from_element: function(_width,_height,_width_pot,_height_pot,_source) {
		var tmp_canvas;
		var _this = window.document;
		tmp_canvas = _this.createElement("canvas");
		tmp_canvas.width = _width_pot;
		tmp_canvas.height = _height_pot;
		var tmp_context = tmp_canvas.getContext("2d",null);
		tmp_context.clearRect(0,0,tmp_canvas.width,tmp_canvas.height);
		tmp_context.drawImage(_source,0,0,_width,_height);
		var image_bytes = null;
		try {
			image_bytes = tmp_context.getImageData(0,0,tmp_canvas.width,tmp_canvas.height);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			var tips = "- textures served from file:/// throw security errors\n";
			tips += "- textures served over http:// work for cross origin byte requests";
			console.log("   i / assets / " + tips);
			throw new js__$Boot_HaxeError(e);
		}
		tmp_canvas = null;
		tmp_context = null;
		var view = image_bytes.data;
		var this1;
		if(view != null) this1 = new Uint8Array(view); else this1 = null;
		return this1;
	}
	,nearest_power_of_two: function(_value) {
		if(!snow_core_web_assets_Assets.POT) return _value;
		_value--;
		_value |= _value >> 1;
		_value |= _value >> 2;
		_value |= _value >> 4;
		_value |= _value >> 8;
		_value |= _value >> 16;
		_value++;
		return _value;
	}
	,__class__: snow_core_web_assets_Assets
};
var snow_core_web_input_DOMKeys = function() { };
$hxClasses["snow.core.web.input.DOMKeys"] = snow_core_web_input_DOMKeys;
snow_core_web_input_DOMKeys.__name__ = ["snow","core","web","input","DOMKeys"];
snow_core_web_input_DOMKeys.dom_key_to_keycode = function(_keycode) {
	switch(_keycode) {
	case 16:
		return snow_system_input_Keycodes.lshift;
	case 17:
		return snow_system_input_Keycodes.lctrl;
	case 18:
		return snow_system_input_Keycodes.lalt;
	case 20:
		return snow_system_input_Keycodes.capslock;
	case 33:
		return snow_system_input_Keycodes.pageup;
	case 34:
		return snow_system_input_Keycodes.pagedown;
	case 35:
		return snow_system_input_Keycodes.end;
	case 36:
		return snow_system_input_Keycodes.home;
	case 37:
		return snow_system_input_Keycodes.left;
	case 38:
		return snow_system_input_Keycodes.up;
	case 39:
		return snow_system_input_Keycodes.right;
	case 40:
		return snow_system_input_Keycodes.down;
	case 44:
		return snow_system_input_Keycodes.printscreen;
	case 45:
		return snow_system_input_Keycodes.insert;
	case 46:
		return snow_system_input_Keycodes["delete"];
	case 91:
		return snow_system_input_Keycodes.lmeta;
	case 93:
		return snow_system_input_Keycodes.rmeta;
	case 224:
		return snow_system_input_Keycodes.lmeta;
	case 96:
		return snow_system_input_Keycodes.kp_0;
	case 97:
		return snow_system_input_Keycodes.kp_1;
	case 98:
		return snow_system_input_Keycodes.kp_2;
	case 99:
		return snow_system_input_Keycodes.kp_3;
	case 100:
		return snow_system_input_Keycodes.kp_4;
	case 101:
		return snow_system_input_Keycodes.kp_5;
	case 102:
		return snow_system_input_Keycodes.kp_6;
	case 103:
		return snow_system_input_Keycodes.kp_7;
	case 104:
		return snow_system_input_Keycodes.kp_8;
	case 105:
		return snow_system_input_Keycodes.kp_9;
	case 106:
		return snow_system_input_Keycodes.kp_multiply;
	case 107:
		return snow_system_input_Keycodes.kp_plus;
	case 109:
		return snow_system_input_Keycodes.kp_minus;
	case 110:
		return snow_system_input_Keycodes.kp_decimal;
	case 111:
		return snow_system_input_Keycodes.kp_divide;
	case 144:
		return snow_system_input_Keycodes.numlockclear;
	case 112:
		return snow_system_input_Keycodes.f1;
	case 113:
		return snow_system_input_Keycodes.f2;
	case 114:
		return snow_system_input_Keycodes.f3;
	case 115:
		return snow_system_input_Keycodes.f4;
	case 116:
		return snow_system_input_Keycodes.f5;
	case 117:
		return snow_system_input_Keycodes.f6;
	case 118:
		return snow_system_input_Keycodes.f7;
	case 119:
		return snow_system_input_Keycodes.f8;
	case 120:
		return snow_system_input_Keycodes.f9;
	case 121:
		return snow_system_input_Keycodes.f10;
	case 122:
		return snow_system_input_Keycodes.f11;
	case 123:
		return snow_system_input_Keycodes.f12;
	case 124:
		return snow_system_input_Keycodes.f13;
	case 125:
		return snow_system_input_Keycodes.f14;
	case 126:
		return snow_system_input_Keycodes.f15;
	case 127:
		return snow_system_input_Keycodes.f16;
	case 128:
		return snow_system_input_Keycodes.f17;
	case 129:
		return snow_system_input_Keycodes.f18;
	case 130:
		return snow_system_input_Keycodes.f19;
	case 131:
		return snow_system_input_Keycodes.f20;
	case 132:
		return snow_system_input_Keycodes.f21;
	case 133:
		return snow_system_input_Keycodes.f22;
	case 134:
		return snow_system_input_Keycodes.f23;
	case 135:
		return snow_system_input_Keycodes.f24;
	case 160:
		return snow_system_input_Keycodes.caret;
	case 161:
		return snow_system_input_Keycodes.exclaim;
	case 162:
		return snow_system_input_Keycodes.quotedbl;
	case 163:
		return snow_system_input_Keycodes.hash;
	case 164:
		return snow_system_input_Keycodes.dollar;
	case 165:
		return snow_system_input_Keycodes.percent;
	case 166:
		return snow_system_input_Keycodes.ampersand;
	case 167:
		return snow_system_input_Keycodes.underscore;
	case 168:
		return snow_system_input_Keycodes.leftparen;
	case 169:
		return snow_system_input_Keycodes.rightparen;
	case 170:
		return snow_system_input_Keycodes.asterisk;
	case 171:
		return snow_system_input_Keycodes.plus;
	case 172:
		return snow_system_input_Keycodes.backslash;
	case 173:
		return snow_system_input_Keycodes.minus;
	case 174:
		return snow_system_input_Keycodes.leftbracket;
	case 175:
		return snow_system_input_Keycodes.rightbracket;
	case 176:
		return snow_system_input_Keycodes.backquote;
	case 181:
		return snow_system_input_Keycodes.audiomute;
	case 182:
		return snow_system_input_Keycodes.volumedown;
	case 183:
		return snow_system_input_Keycodes.volumeup;
	case 188:
		return snow_system_input_Keycodes.comma;
	case 190:
		return snow_system_input_Keycodes.period;
	case 191:
		return snow_system_input_Keycodes.slash;
	case 192:
		return snow_system_input_Keycodes.backquote;
	case 219:
		return snow_system_input_Keycodes.leftbracket;
	case 221:
		return snow_system_input_Keycodes.rightbracket;
	case 220:
		return snow_system_input_Keycodes.backslash;
	case 222:
		return snow_system_input_Keycodes.quote;
	}
	return _keycode;
};
var snow_modules_interfaces_Input = function() { };
$hxClasses["snow.modules.interfaces.Input"] = snow_modules_interfaces_Input;
snow_modules_interfaces_Input.__name__ = ["snow","modules","interfaces","Input"];
var snow_core_web_input_Input = function(_system) {
	this.gamepads_supported = false;
	this.system = _system;
};
$hxClasses["snow.core.web.input.Input"] = snow_core_web_input_Input;
snow_core_web_input_Input.__name__ = ["snow","core","web","input","Input"];
snow_core_web_input_Input.__interfaces__ = [snow_modules_interfaces_Input];
snow_core_web_input_Input.prototype = {
	init: function() {
		window.document.addEventListener("keypress",$bind(this,this.on_keypress));
		window.document.addEventListener("keydown",$bind(this,this.on_keydown));
		window.document.addEventListener("keyup",$bind(this,this.on_keyup));
		this.active_gamepads = new haxe_ds_IntMap();
		this.gamepads_supported = this.get_gamepad_list() != null;
		if(window.DeviceOrientationEvent) {
			window.addEventListener("deviceorientation",$bind(this,this.on_orientation));
			window.addEventListener("devicemotion",$bind(this,this.on_motion));
		}
		console.log("    i / input / " + ("Gamepads supported: " + Std.string(this.gamepads_supported)));
	}
	,update: function() {
		if(this.gamepads_supported) this.poll_gamepads();
	}
	,destroy: function() {
	}
	,listen: function(window) {
		window.handle.addEventListener("contextmenu",$bind(this,this.on_contextmenu));
		window.handle.addEventListener("mousedown",$bind(this,this.on_mousedown));
		window.handle.addEventListener("mouseup",$bind(this,this.on_mouseup));
		window.handle.addEventListener("mousemove",$bind(this,this.on_mousemove));
		window.handle.addEventListener("mousewheel",$bind(this,this.on_mousewheel));
		window.handle.addEventListener("wheel",$bind(this,this.on_mousewheel));
		window.handle.addEventListener("touchstart",$bind(this,this.on_touchdown));
		window.handle.addEventListener("touchend",$bind(this,this.on_touchup));
		window.handle.addEventListener("touchmove",$bind(this,this.on_touchmove));
	}
	,on_event: function(_event) {
	}
	,on_orientation: function(event) {
		this.system.app.dispatch_system_event({ type : 6, input : { type : 4, timestamp : snow_Snow.core.timestamp(), event : { type : "orientation", alpha : event.alpha, beta : event.beta, gamma : event.gamma}}});
	}
	,on_motion: function(event) {
		this.system.app.dispatch_system_event({ type : 6, input : { type : 4, timestamp : snow_Snow.core.timestamp(), event : { type : "motion", acceleration : event.acceleration, accelerationIncludingGravity : event.accelerationIncludingGravity, rotationRate : event.rotationRate}}});
	}
	,poll_gamepads: function() {
		if(!this.gamepads_supported) return;
		var list = this.get_gamepad_list();
		if(list != null) {
			var _g1 = 0;
			var _g = list.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(list[i] != null) this.handle_gamepad(list[i]); else {
					var _gamepad = this.active_gamepads.h[i];
					if(_gamepad != null) this.system.dispatch_gamepad_device_event(_gamepad.index,_gamepad.id,2,snow_Snow.core.timestamp());
					this.active_gamepads.remove(i);
				}
			}
		}
	}
	,handle_gamepad: function(_gamepad) {
		if(_gamepad == null) return;
		if(!(function($this) {
			var $r;
			var key = _gamepad.index;
			$r = $this.active_gamepads.h.hasOwnProperty(key);
			return $r;
		}(this))) {
			var _new_gamepad = { id : _gamepad.id, index : _gamepad.index, axes : [], buttons : [], timestamp : snow_Snow.core.timestamp()};
			var axes = _gamepad.axes;
			var _g = 0;
			while(_g < axes.length) {
				var value = axes[_g];
				++_g;
				_new_gamepad.axes.push(value);
			}
			var _button_list = _gamepad.buttons;
			var _g1 = 0;
			while(_g1 < _button_list.length) {
				var _button = _button_list[_g1];
				++_g1;
				_new_gamepad.buttons.push({ pressed : false, value : 0});
			}
			this.active_gamepads.h[_new_gamepad.index] = _new_gamepad;
			this.system.dispatch_gamepad_device_event(_new_gamepad.index,_new_gamepad.id,1,_new_gamepad.timestamp);
		} else {
			var gamepad;
			var key1 = _gamepad.index;
			gamepad = this.active_gamepads.h[key1];
			if(gamepad.id != _gamepad.id) gamepad.id = _gamepad.id;
			var axes_changed = [];
			var buttons_changed = [];
			var last_axes = gamepad.axes;
			var last_buttons = gamepad.buttons;
			var new_axes = _gamepad.axes;
			var new_buttons = _gamepad.buttons;
			var axis_index = 0;
			var _g2 = 0;
			while(_g2 < new_axes.length) {
				var axis = new_axes[_g2];
				++_g2;
				if(axis != last_axes[axis_index]) {
					axes_changed.push(axis_index);
					gamepad.axes[axis_index] = axis;
				}
				axis_index++;
			}
			var button_index = 0;
			var _g3 = 0;
			while(_g3 < new_buttons.length) {
				var button = new_buttons[_g3];
				++_g3;
				if(button.value != last_buttons[button_index].value) {
					buttons_changed.push(button_index);
					gamepad.buttons[button_index].pressed = button.pressed;
					gamepad.buttons[button_index].value = button.value;
				}
				button_index++;
			}
			var _g4 = 0;
			while(_g4 < axes_changed.length) {
				var index = axes_changed[_g4];
				++_g4;
				this.system.dispatch_gamepad_axis_event(gamepad.index,index,new_axes[index],gamepad.timestamp);
			}
			var _g5 = 0;
			while(_g5 < buttons_changed.length) {
				var index1 = buttons_changed[_g5];
				++_g5;
				if(new_buttons[index1].pressed == true) this.system.dispatch_gamepad_button_down_event(gamepad.index,index1,new_buttons[index1].value,gamepad.timestamp); else this.system.dispatch_gamepad_button_up_event(gamepad.index,index1,new_buttons[index1].value,gamepad.timestamp);
			}
		}
	}
	,fail_gamepads: function() {
		this.gamepads_supported = false;
		console.log("    i / input / " + "Gamepads are not supported in this browser :(");
	}
	,get_gamepad_list: function() {
		if(($_=window.navigator,$bind($_,$_.getGamepads)) != null) return window.navigator.getGamepads();
		if(window.navigator.webkitGetGamepads != null) return window.navigator.webkitGetGamepads();
		this.fail_gamepads();
		return null;
	}
	,on_mousedown: function(_mouse_event) {
		var _window = this.system.app.windowing.window_from_handle(_mouse_event.target);
		this.system.dispatch_mouse_down_event(_mouse_event.pageX - window.pageXOffset - _window.x,_mouse_event.pageY - window.pageYOffset - _window.y,_mouse_event.button + 1,_mouse_event.timeStamp,_window.id);
	}
	,on_mouseup: function(_mouse_event) {
		var _window = this.system.app.windowing.window_from_handle(_mouse_event.target);
		this.system.dispatch_mouse_up_event(_mouse_event.pageX - window.pageXOffset - _window.x,_mouse_event.pageY - window.pageYOffset - _window.y,_mouse_event.button + 1,_mouse_event.timeStamp,_window.id);
	}
	,on_mousemove: function(_mouse_event) {
		var _window = this.system.app.windowing.window_from_handle(_mouse_event.target);
		var _movement_x = _mouse_event.movementX;
		var _movement_y = _mouse_event.movementY;
		if(_movement_x == null) {
			if(_mouse_event.webkitMovementX != null) {
				_movement_x = _mouse_event.webkitMovementX;
				_movement_y = _mouse_event.webkitMovementY;
			} else if(_mouse_event.mozMovementX != null) {
				_movement_x = _mouse_event.mozMovementX;
				_movement_y = _mouse_event.mozMovementY;
			}
		}
		this.system.dispatch_mouse_move_event(_mouse_event.pageX - window.pageXOffset - _window.x,_mouse_event.pageY - window.pageYOffset - _window.y,_movement_x,_movement_y,_mouse_event.timeStamp,_window.id);
	}
	,on_mousewheel: function(_wheel_event) {
		if(this.system.app.config.web.prevent_default_mouse_wheel) _wheel_event.preventDefault();
		var _window = this.system.app.windowing.window_from_handle(_wheel_event.target);
		var _x = 0;
		var _y = 0;
		if(_wheel_event.deltaY != null) _y = _wheel_event.deltaY; else if(_wheel_event.wheelDeltaY != null) _y = -_wheel_event.wheelDeltaY / 3 | 0;
		if(_wheel_event.deltaX != null) _x = _wheel_event.deltaX; else if(_wheel_event.wheelDeltaX != null) _x = -_wheel_event.wheelDeltaX / 3 | 0;
		this.system.dispatch_mouse_wheel_event(Math.round(_x / 16),Math.round(_y / 16),_wheel_event.timeStamp,_window.id);
	}
	,on_contextmenu: function(_event) {
		if(this.system.app.config.web.no_context_menu) _event.preventDefault();
	}
	,on_keypress: function(_key_event) {
		if(_key_event.which != 0 && HxOverrides.indexOf(snow_core_web_input_Input._keypress_blacklist,_key_event.keyCode,0) == -1) {
			var _text = String.fromCharCode(_key_event.charCode);
			this.system.dispatch_text_event(_text,0,_text.length,2,_key_event.timeStamp,1);
		}
	}
	,on_keydown: function(_key_event) {
		var _keycode = this.convert_keycode(_key_event.keyCode);
		var _scancode = snow_system_input_Keycodes.to_scan(_keycode);
		var _mod_state = this.mod_state_from_event(_key_event);
		if(HxOverrides.indexOf(this.system.app.config.web.prevent_default_keys,_keycode,0) != -1) _key_event.preventDefault();
		this.system.dispatch_key_down_event(_keycode,_scancode,_key_event.repeat,_mod_state,_key_event.timeStamp,1);
	}
	,on_keyup: function(_key_event) {
		var _keycode = this.convert_keycode(_key_event.keyCode);
		var _scancode = snow_system_input_Keycodes.to_scan(_keycode);
		var _mod_state = this.mod_state_from_event(_key_event);
		if(HxOverrides.indexOf(this.system.app.config.web.prevent_default_keys,_keycode,0) != -1) _key_event.preventDefault();
		this.system.dispatch_key_up_event(_keycode,_scancode,_key_event.repeat,_mod_state,_key_event.timeStamp,1);
	}
	,mod_state_from_event: function(_key_event) {
		var _none = !_key_event.altKey && !_key_event.ctrlKey && !_key_event.metaKey && !_key_event.shiftKey;
		return { none : _none, lshift : _key_event.shiftKey, rshift : _key_event.shiftKey, lctrl : _key_event.ctrlKey, rctrl : _key_event.ctrlKey, lalt : _key_event.altKey, ralt : _key_event.altKey, lmeta : _key_event.metaKey, rmeta : _key_event.metaKey, num : false, caps : false, mode : false, ctrl : _key_event.ctrlKey, shift : _key_event.shiftKey, alt : _key_event.altKey, meta : _key_event.metaKey};
	}
	,convert_keycode: function(dom_keycode) {
		if(dom_keycode >= 65 && dom_keycode <= 90) return dom_keycode + 32;
		return snow_core_web_input_DOMKeys.dom_key_to_keycode(dom_keycode);
	}
	,on_touchdown: function(_touch_event) {
		var _window = this.system.app.windowing.window_from_handle(_touch_event.target);
		var _g = 0;
		var _g1 = _touch_event.changedTouches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			var _x = touch.pageX - window.pageXOffset - _window.x;
			var _y = touch.pageY - window.pageYOffset - _window.y;
			_x = _x / _window.width;
			_y = _y / _window.height;
			this.system.dispatch_touch_down_event(_x,_y,touch.identifier,snow_Snow.core.timestamp());
		}
	}
	,on_touchup: function(_touch_event) {
		var _window = this.system.app.windowing.window_from_handle(_touch_event.target);
		var _g = 0;
		var _g1 = _touch_event.changedTouches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			var _x = touch.pageX - window.pageXOffset - _window.x;
			var _y = touch.pageY - window.pageYOffset - _window.y;
			_x = _x / _window.width;
			_y = _y / _window.height;
			this.system.dispatch_touch_up_event(_x,_y,touch.identifier,snow_Snow.core.timestamp());
		}
	}
	,on_touchmove: function(_touch_event) {
		var _window = this.system.app.windowing.window_from_handle(_touch_event.target);
		var _g = 0;
		var _g1 = _touch_event.changedTouches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			var _x = touch.pageX - window.pageXOffset - _window.x;
			var _y = touch.pageY - window.pageYOffset - _window.y;
			_x = _x / _window.width;
			_y = _y / _window.height;
			this.system.dispatch_touch_move_event(_x,_y,0,0,touch.identifier,snow_Snow.core.timestamp());
		}
	}
	,__class__: snow_core_web_input_Input
};
var snow_modules_interfaces_IO = function() { };
$hxClasses["snow.modules.interfaces.IO"] = snow_modules_interfaces_IO;
snow_modules_interfaces_IO.__name__ = ["snow","modules","interfaces","IO"];
var snow_core_web_io_IO = function(_system) {
	this.system = _system;
};
$hxClasses["snow.core.web.io.IO"] = snow_core_web_io_IO;
snow_core_web_io_IO.__name__ = ["snow","core","web","io","IO"];
snow_core_web_io_IO.__interfaces__ = [snow_modules_interfaces_IO];
snow_core_web_io_IO.prototype = {
	data_load: function(_path,_options) {
		return new snow_api_Promise(function(resolve,reject) {
			var _async = true;
			var _binary = true;
			if(_options != null) {
				if(_options.binary != null) _binary = _options.binary;
			}
			var request = new XMLHttpRequest();
			request.open("GET",_path,_async);
			if(_binary) request.overrideMimeType("text/plain; charset=x-user-defined"); else request.overrideMimeType("text/plain; charset=UTF-8");
			if(_async) request.responseType = "arraybuffer";
			request.onload = function(data) {
				if(request.status == 200) resolve((function($this) {
					var $r;
					var elements = request.response;
					var this1;
					if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
					$r = this1;
					return $r;
				}(this))); else reject(snow_types_Error.error("request status was " + request.status + " / " + request.statusText));
			};
			request.send();
		});
	}
	,init: function() {
	}
	,update: function() {
	}
	,destroy: function() {
	}
	,on_event: function(_event) {
	}
	,__class__: snow_core_web_io_IO
};
var snow_modules_interfaces_Windowing = function() { };
$hxClasses["snow.modules.interfaces.Windowing"] = snow_modules_interfaces_Windowing;
snow_modules_interfaces_Windowing.__name__ = ["snow","modules","interfaces","Windowing"];
var snow_core_web_window_Windowing = function(_system) {
	this._hidden_event_name = "";
	this._hidden_name = "";
	this._pre_fs_body_margin = "0";
	this._pre_fs_body_overflow = "0";
	this._pre_fs_height = 0;
	this._pre_fs_width = 0;
	this._pre_fs_s_height = "";
	this._pre_fs_s_width = "";
	this._pre_fs_margin = "0";
	this._pre_fs_padding = "0";
	this.seq_window = 1;
	this.system = _system;
	this.fs_windows = [];
	this.gl_contexts = new haxe_ds_IntMap();
};
$hxClasses["snow.core.web.window.Windowing"] = snow_core_web_window_Windowing;
snow_core_web_window_Windowing.__name__ = ["snow","core","web","window","Windowing"];
snow_core_web_window_Windowing.__interfaces__ = [snow_modules_interfaces_Windowing];
snow_core_web_window_Windowing.prototype = {
	init: function() {
		this.listen_for_visibility();
		this.listen_for_resize();
	}
	,update: function() {
	}
	,destroy: function() {
	}
	,_copy_config: function(_config) {
		return { borderless : _config.borderless, fullscreen : _config.fullscreen, fullscreen_desktop : _config.fullscreen_desktop, height : _config.height, no_input : _config.no_input, resizable : _config.resizable, title : _config.title, width : _config.width, x : _config.x, y : _config.y};
	}
	,create: function(render_config,_config,on_created) {
		var _window_id = this.seq_window;
		var _handle;
		var _this = window.document;
		_handle = _this.createElement("canvas");
		var config = this._copy_config(_config);
		_handle.width = config.width;
		_handle.height = config.height;
		_handle.style.display = "block";
		_handle.style.position = "relative";
		_handle.style.background = "#000";
		window.document.body.appendChild(_handle);
		var _gl_context = js_html__$CanvasElement_CanvasUtil.getContextWebGL(_handle,{ alpha : false, premultipliedAlpha : false, antialias : render_config.antialiasing > 0});
		if(_gl_context == null) {
			var msg = "WebGL is required to run this!<br/><br/>";
			msg += "visit http://get.webgl.org/ for help <br/>";
			msg += "and contact the developer of the application";
			this.internal_fallback(msg);
			throw new js__$Boot_HaxeError(snow_types_Error.windowing(msg));
		}
		if(snow_modules_opengl_web_GL.current_context == null) snow_modules_opengl_web_GL.current_context = _gl_context;
		this.gl_contexts.h[_window_id] = _gl_context;
		var _window_pos = this.get_real_window_position(_handle);
		config.x = _window_pos.x;
		config.y = _window_pos.y;
		if(config.title != null && config.title != "") window.document.title = config.title;
		on_created(_handle,_window_id,{ config : config, render_config : render_config});
		_handle.setAttribute("id","window" + _window_id);
		this.seq_window++;
	}
	,internal_resize: function(_window,_w,_h) {
		this.system.app.dispatch_system_event({ type : 5, window : { type : 7, timestamp : snow_Snow.core.timestamp(), window_id : _window.id, event : { x : _w, y : _h}}});
		this.system.app.dispatch_system_event({ type : 5, window : { type : 6, timestamp : snow_Snow.core.timestamp(), window_id : _window.id, event : { x : _w, y : _h}}});
	}
	,update_window: function(_window) {
		var _rect = _window.handle.getBoundingClientRect();
		if(_rect.left != _window.x || _rect.top != _window.y) this.system.app.dispatch_system_event({ type : 5, window : { type : 5, timestamp : snow_Snow.core.timestamp(), window_id : _window.id, event : { x : _rect.left, y : _rect.top}}});
		if(_rect.width != _window.width || _rect.height != _window.height) this.internal_resize(_window,_rect.width,_rect.height);
		_rect = null;
	}
	,render: function(_window) {
		var _window_gl_context = this.gl_contexts.h[_window.id];
		if(snow_modules_opengl_web_GL.current_context != _window_gl_context) snow_modules_opengl_web_GL.current_context = _window_gl_context;
	}
	,swap: function(_window) {
	}
	,set_size: function(_window,w,h) {
		_window.handle.width = w;
		_window.handle.height = h;
		_window.handle.style.width = "" + w + "px";
		_window.handle.style.height = "" + h + "px";
		this.internal_resize(_window,w,h);
	}
	,set_position: function(_window,x,y) {
		_window.handle.style.left = "" + x + "px";
		_window.handle.style.top = "" + y + "px";
	}
	,get_real_window_position: function(handle) {
		var curleft = 0;
		var curtop = 0;
		var _obj = handle;
		var _has_parent = true;
		var _max_count = 0;
		while(_has_parent == true) {
			_max_count++;
			if(_max_count > 100) {
				_has_parent = false;
				break;
			}
			if(_obj.offsetParent != null) {
				curleft += _obj.offsetLeft;
				curtop += _obj.offsetTop;
				_obj = _obj.offsetParent;
			} else _has_parent = false;
		}
		return { x : curleft, y : curtop};
	}
	,set_max_size: function(_window,w,h) {
		_window.handle.style.maxWidth = "" + w + "px";
		_window.handle.style.maxHeight = "" + h + "px";
	}
	,set_min_size: function(_window,w,h) {
		_window.handle.style.minWidth = "" + w + "px";
		_window.handle.style.minHeight = "" + h + "px";
	}
	,internal_fullscreen: function(_window,fullscreen) {
		var _handle = _window.handle;
		if(fullscreen) {
			if(HxOverrides.indexOf(this.fs_windows,_window,0) == -1) this.fs_windows.push(_window);
		} else HxOverrides.remove(this.fs_windows,_window);
		var true_fullscreen = this.system.app.config.web.true_fullscreen;
		if(fullscreen) {
			if(true_fullscreen) {
				if($bind(_handle,_handle.requestFullscreen) == null) {
					if(_handle.requestFullScreen == null) {
						if(_handle.webkitRequestFullscreen == null) {
							if(_handle.mozRequestFullScreen == null) {
							} else _handle.mozRequestFullScreen();
						} else _handle.webkitRequestFullscreen();
					} else _handle.requestFullScreen(null);
				} else _handle.requestFullscreen();
			} else {
				this._pre_fs_padding = _handle.style.padding;
				this._pre_fs_margin = _handle.style.margin;
				this._pre_fs_s_width = _handle.style.width;
				this._pre_fs_s_height = _handle.style.height;
				this._pre_fs_width = _handle.width;
				this._pre_fs_height = _handle.height;
				this._pre_fs_body_margin = window.document.body.style.margin;
				this._pre_fs_body_overflow = window.document.body.style.overflow;
				_handle.style.margin = "0";
				_handle.style.padding = "0";
				_handle.style.width = window.innerWidth + "px";
				_handle.style.height = window.innerHeight + "px";
				_handle.width = window.innerWidth;
				_handle.height = window.innerHeight;
				window.document.body.style.margin = "0";
				window.document.body.style.overflow = "hidden";
			}
		} else if(true_fullscreen) {
		} else {
			_handle.style.padding = this._pre_fs_padding;
			_handle.style.margin = this._pre_fs_margin;
			_handle.style.width = this._pre_fs_s_width;
			_handle.style.height = this._pre_fs_s_height;
			_handle.width = this._pre_fs_width;
			_handle.height = this._pre_fs_height;
			window.document.body.style.margin = this._pre_fs_body_margin;
			window.document.body.style.overflow = this._pre_fs_body_overflow;
		}
	}
	,listen: function(_window) {
		_window.handle.addEventListener("mouseleave",$bind(this,this.on_internal_leave));
		_window.handle.addEventListener("mouseenter",$bind(this,this.on_internal_enter));
		if(_window.config.fullscreen) {
			this.internal_fullscreen(_window,_window.config.fullscreen);
			_window.config.width = _window.handle.width;
			_window.config.height = _window.handle.height;
		}
	}
	,on_internal_leave: function(_mouse_event) {
		var _window = this.system.window_from_handle(_mouse_event.target);
		this.system.app.dispatch_system_event({ type : 5, window : { type : 12, timestamp : _mouse_event.timeStamp, window_id : _window.id, event : _mouse_event}});
	}
	,on_internal_enter: function(_mouse_event) {
		var _window = this.system.window_from_handle(_mouse_event.target);
		this.system.app.dispatch_system_event({ type : 5, window : { type : 11, timestamp : _mouse_event.timeStamp, window_id : _window.id, event : _mouse_event}});
	}
	,listen_for_resize: function() {
		var _g = this;
		window.onresize = function(e) {
			if(!_g.system.app.config.web.true_fullscreen) {
				var _g1 = 0;
				var _g2 = _g.fs_windows;
				while(_g1 < _g2.length) {
					var $window = _g2[_g1];
					++_g1;
					$window.set_size(window.innerWidth,window.innerHeight);
					_g.internal_resize($window,$window.width,$window.height);
				}
			}
		};
	}
	,listen_for_visibility: function() {
		if(typeof document.hidden !== undefined) {
			this._hidden_name = "hidden";
			this._hidden_event_name = "visibilitychange";
		} else if(typeof document.mozHidden !== undefined ) {
			this._hidden_name = "mozHidden";
			this._hidden_name = "mozvisibilitychange";
		} else if(typeof document.msHidden !== "undefined") {
			this._hidden_name = "msHidden";
			this._hidden_event_name = "msvisibilitychange";
		} else if(typeof document.webkitHidden !== "undefined") {
			this._hidden_name = "webkitHidden";
			this._hidden_event_name = "webkitvisibilitychange";
		}
		if(this._hidden_name != "" && this._hidden_event_name != "") window.document.addEventListener(this._hidden_event_name,$bind(this,this.on_visibility_change));
	}
	,on_visibility_change: function(jsevent) {
		var _event = { type : 5, window : { type : 2, timestamp : snow_Snow.core.timestamp(), window_id : 1, event : jsevent}};
		if(document[this._hidden_name]) {
			_event.window.type = 3;
			this.system.app.dispatch_system_event(_event);
			_event.window.type = 8;
			this.system.app.dispatch_system_event(_event);
			_event.window.type = 14;
			this.system.app.dispatch_system_event(_event);
		} else {
			_event.window.type = 2;
			this.system.app.dispatch_system_event(_event);
			_event.window.type = 10;
			this.system.app.dispatch_system_event(_event);
			_event.window.type = 13;
			this.system.app.dispatch_system_event(_event);
		}
	}
	,internal_fallback: function(message) {
		var text_el;
		var overlay_el;
		var _this = window.document;
		text_el = _this.createElement("div");
		var _this1 = window.document;
		overlay_el = _this1.createElement("div");
		text_el.style.marginLeft = "auto";
		text_el.style.marginRight = "auto";
		text_el.style.color = "#d3d3d3";
		text_el.style.marginTop = "5em";
		text_el.style.fontSize = "1.4em";
		text_el.style.fontFamily = "helvetica,sans-serif";
		text_el.innerHTML = message;
		overlay_el.style.top = "0";
		overlay_el.style.left = "0";
		overlay_el.style.width = "100%";
		overlay_el.style.height = "100%";
		overlay_el.style.display = "block";
		overlay_el.style.minWidth = "100%";
		overlay_el.style.minHeight = "100%";
		overlay_el.style.textAlign = "center";
		overlay_el.style.position = "absolute";
		overlay_el.style.background = "rgba(1,1,1,0.90)";
		overlay_el.appendChild(text_el);
		window.document.body.appendChild(overlay_el);
	}
	,__class__: snow_core_web_window_Windowing
};
var snow_modules_interfaces_Audio = function() { };
$hxClasses["snow.modules.interfaces.Audio"] = snow_modules_interfaces_Audio;
snow_modules_interfaces_Audio.__name__ = ["snow","modules","interfaces","Audio"];
var snow_modules_howlerjs_Audio = function(_system) {
	this.system = _system;
	this.suspended_sounds = [];
	this.handles = new haxe_ds_ObjectMap();
};
$hxClasses["snow.modules.howlerjs.Audio"] = snow_modules_howlerjs_Audio;
snow_modules_howlerjs_Audio.__name__ = ["snow","modules","howlerjs","Audio"];
snow_modules_howlerjs_Audio.__interfaces__ = [snow_modules_interfaces_Audio];
snow_modules_howlerjs_Audio.prototype = {
	init: function() {
	}
	,update: function() {
	}
	,destroy: function() {
	}
	,on_event: function(event) {
	}
	,suspend: function() {
		var $it0 = this.handles.iterator();
		while( $it0.hasNext() ) {
			var sound = $it0.next();
			if(sound.get_playing()) {
				sound.toggle();
				this.suspended_sounds.push(sound);
			}
		}
	}
	,resume: function() {
		while(this.suspended_sounds.length > 0) {
			var sound = this.suspended_sounds.pop();
			sound.toggle();
		}
	}
	,info_from_id: function(_id,_format) {
		if(_format == null) {
			var _ext = haxe_io_Path.extension(_id);
			switch(_ext) {
			case "wav":
				_format = 2;
				break;
			case "ogg":
				_format = 1;
				break;
			case "pcm":
				_format = 3;
				break;
			default:
				_format = 0;
			}
		}
		return { format : _format, id : _id, handle : null, data : null};
	}
	,create_sound: function(_id,_name,_streaming,_format) {
		if(_streaming == null) _streaming = false;
		var _g = this;
		return new snow_api_Promise(function(resolve,reject) {
			var _path = haxe_io_Path.join([_g.system.app.assets.root,_id]);
			var info = _g.info_from_id(_path,_format);
			var sound = new snow_modules_howlerjs_sound_Sound(_g.system,_name,_streaming);
			info.handle = new window.Howl({ urls : [_path], onend : function() {
				_g.system.app.audio.module._on_end(info.handle);
			}, onloaderror : function() {
				reject(snow_types_Error.error("failed to create sound " + _name + " from " + _id));
			}, onload : function() {
				info.handle = this;
				sound.set_info(info);
				var key = info.handle;
				_g.handles.set(key,sound);
				resolve(sound);
			}});
		});
	}
	,_on_end: function(handle) {
		var sound;
		var key = handle;
		sound = this.handles.h[key.__id__];
		if(sound != null) sound.emit("end");
	}
	,__class__: snow_modules_howlerjs_Audio
};
var snow_system_audio_Sound = function(_system,_name,_is_stream) {
	if(_is_stream == null) _is_stream = false;
	this.is_stream = false;
	this.looping = false;
	this.pan = 0.0;
	this.volume = 1.0;
	this.pitch = 1.0;
	this.loaded = false;
	this.playing = false;
	this.name = "";
	this.name = _name;
	this.system = _system;
	this.is_stream = _is_stream;
};
$hxClasses["snow.system.audio.Sound"] = snow_system_audio_Sound;
snow_system_audio_Sound.__name__ = ["snow","system","audio","Sound"];
snow_system_audio_Sound.prototype = {
	emit: function(_event) {
		this.system.sound_event(this,_event);
	}
	,on: function(_event,_handler) {
		this.system.on(this.name,_event,_handler);
	}
	,off: function(_event,_handler) {
		this.system.off(this.name,_event,_handler);
	}
	,play: function() {
		console.log("    i / sound / " + "Sound:play called in root Sound module. Nothing will happen.");
	}
	,loop: function() {
		console.log("    i / sound / " + "Sound:loop called in root Sound module. Nothing will happen.");
	}
	,stop: function() {
		console.log("    i / sound / " + "Sound:stop called in root Sound module. Nothing will happen.");
	}
	,pause: function() {
		console.log("    i / sound / " + "Sound:pause called in root Sound module. Nothing will happen.");
	}
	,destroy: function() {
		console.log("    i / sound / " + "Sound:destroy called in root Sound module. Nothing will happen.");
	}
	,internal_update: function() {
	}
	,internal_play: function() {
	}
	,internal_pause: function() {
	}
	,toggle: function() {
		this.set_playing(!this.get_playing());
		if(this.get_playing()) {
			if(this.get_looping()) this.loop(); else this.play();
		} else this.pause();
	}
	,get_playing: function() {
		return this.playing;
	}
	,get_loaded: function() {
		return this.loaded;
	}
	,get_info: function() {
		return this.info;
	}
	,get_pan: function() {
		return this.pan;
	}
	,get_pitch: function() {
		return this.pitch;
	}
	,get_volume: function() {
		return this.volume;
	}
	,get_looping: function() {
		return this.looping;
	}
	,set_playing: function(_playing) {
		return this.playing = _playing;
	}
	,set_loaded: function(_loaded) {
		return this.loaded = _loaded;
	}
	,set_looping: function(_looping) {
		return this.looping = _looping;
	}
	,__class__: snow_system_audio_Sound
};
var snow_modules_howlerjs_sound_Sound = function(_system,_name,_is_stream) {
	if(_is_stream == null) _is_stream = false;
	snow_system_audio_Sound.call(this,_system,_name,_is_stream);
};
$hxClasses["snow.modules.howlerjs.sound.Sound"] = snow_modules_howlerjs_sound_Sound;
snow_modules_howlerjs_sound_Sound.__name__ = ["snow","modules","howlerjs","sound","Sound"];
snow_modules_howlerjs_sound_Sound.__super__ = snow_system_audio_Sound;
snow_modules_howlerjs_sound_Sound.prototype = $extend(snow_system_audio_Sound.prototype,{
	set_info: function(_info) {
		if(this.get_info() != null) this.destroy();
		this.info = null;
		if(_info == null) {
			console.log("    i / sound / " + "not creating sound, info was null");
			return this.get_info();
		}
		this.info = _info;
		this.set_loaded(true);
		return this.get_info();
	}
	,play: function() {
		if(this.get_info() != null && this.get_info().handle != null) {
			this.set_playing(true);
			this.set_looping(false);
			this.get_info().handle.loop(false);
			this.get_info().handle.play();
			if(this.get_info() != null && this.get_info().handle != null) {
				this.get_info().handle.rate(this.get_pitch());
				this.get_info().handle.volume(this.get_volume());
				this.get_info().handle.pos3d(this.get_pan());
			}
		}
	}
	,loop: function() {
		if(this.get_info() != null && this.get_info().handle != null) {
			this.set_playing(true);
			this.set_looping(true);
			this.get_info().handle.loop(true);
			this.get_info().handle.play();
			if(this.get_info() != null && this.get_info().handle != null) {
				this.get_info().handle.rate(this.get_pitch());
				this.get_info().handle.volume(this.get_volume());
				this.get_info().handle.pos3d(this.get_pan());
			}
		}
	}
	,stop: function() {
		this.set_playing(false);
		if(this.get_info() != null && this.get_info().handle != null) this.get_info().handle.stop();
	}
	,pause: function() {
		if(this.get_info() != null && this.get_info().handle != null) this.get_info().handle.pause();
	}
	,destroy: function() {
		if(this.get_info() != null && this.get_info().handle != null) this.get_info().handle.unload();
		this.system.kill(this);
	}
	,__class__: snow_modules_howlerjs_sound_Sound
});
var snow_modules_opengl_web_GL = function() { };
$hxClasses["snow.modules.opengl.web.GL"] = snow_modules_opengl_web_GL;
snow_modules_opengl_web_GL.__name__ = ["snow","modules","opengl","web","GL"];
snow_modules_opengl_web_GL.bufferData = function(target,data,usage) {
	snow_modules_opengl_web_GL.current_context.bufferData(target,data,usage);
};
snow_modules_opengl_web_GL.clearColor = function(red,green,blue,alpha) {
	snow_modules_opengl_web_GL.current_context.clearColor(red,green,blue,alpha);
};
snow_modules_opengl_web_GL.uniform2f = function(location,x,y) {
	snow_modules_opengl_web_GL.current_context.uniform2f(location,x,y);
};
snow_modules_opengl_web_GL.uniform3f = function(location,x,y,z) {
	snow_modules_opengl_web_GL.current_context.uniform3f(location,x,y,z);
};
snow_modules_opengl_web_GL.uniform4f = function(location,x,y,z,w) {
	snow_modules_opengl_web_GL.current_context.uniform4f(location,x,y,z,w);
};
snow_modules_opengl_web_GL.uniformMatrix4fv = function(location,transpose,data) {
	snow_modules_opengl_web_GL.current_context.uniformMatrix4fv(location,transpose,data);
};
var snow_system_assets_Asset = function(_system,_id,_type) {
	if(_type == null) _type = 0;
	this.loaded = false;
	if(_id == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	if(_system == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	this.system = _system;
	this.type = _type;
	this.id = _id;
};
$hxClasses["snow.system.assets.Asset"] = snow_system_assets_Asset;
snow_system_assets_Asset.__name__ = ["snow","system","assets","Asset"];
snow_system_assets_Asset.prototype = {
	__class__: snow_system_assets_Asset
};
var snow_system_assets_AssetImage = function(_system,_id,_image) {
	snow_system_assets_Asset.call(this,_system,_id,4);
	this.set_image(_image);
};
$hxClasses["snow.system.assets.AssetImage"] = snow_system_assets_AssetImage;
snow_system_assets_AssetImage.__name__ = ["snow","system","assets","AssetImage"];
snow_system_assets_AssetImage.load = function(_system,_id) {
	if(_id == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	if(_system == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	return new snow_system_assets_AssetImage(_system,_id,null).reload();
};
snow_system_assets_AssetImage.load_from_bytes = function(_system,_id,_bytes) {
	if(_id == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	if(_bytes == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_bytes was null"));
	if(_system == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	return new snow_system_assets_AssetImage(_system,_id,null).reload_from_bytes(_bytes);
};
snow_system_assets_AssetImage.provider = function(_app,_path) {
	return _app.assets.module.image_load_info(_path);
};
snow_system_assets_AssetImage.processor = function(_app,_id,_data) {
	if(_data == null) return snow_api_Promise.reject(snow_types_Error.error("AssetImage processor: data was null"));
	return _app.assets.module.image_info_from_bytes(_id,_data);
};
snow_system_assets_AssetImage.__super__ = snow_system_assets_Asset;
snow_system_assets_AssetImage.prototype = $extend(snow_system_assets_Asset.prototype,{
	reload: function() {
		var _g = this;
		this.loaded = false;
		return new snow_api_Promise(function(resolve,reject) {
			var _load = _g.system.app.io.data_flow(haxe_io_Path.join([_g.system.root,_g.id]),null,snow_system_assets_AssetImage.provider);
			_load.then(function(_image) {
				_g.set_image(_image);
				resolve(_g);
			}).error(reject);
		});
	}
	,reload_from_bytes: function(_bytes) {
		var _g = this;
		this.loaded = false;
		return new snow_api_Promise(function(resolve,reject) {
			var _load = _g.system.module.image_info_from_bytes(_g.id,_bytes);
			_load.then(function(_image) {
				_g.set_image(_image);
				resolve(_g);
			}).error(reject);
		});
	}
	,set_image: function(_image) {
		this.loaded = _image != null;
		return this.image = _image;
	}
	,__class__: snow_system_assets_AssetImage
});
var snow_system_assets_AssetText = function(_system,_id,_text) {
	snow_system_assets_Asset.call(this,_system,_id,2);
	this.set_text(_text);
};
$hxClasses["snow.system.assets.AssetText"] = snow_system_assets_AssetText;
snow_system_assets_AssetText.__name__ = ["snow","system","assets","AssetText"];
snow_system_assets_AssetText.load = function(_system,_id) {
	return new snow_system_assets_AssetText(_system,_id,null).reload();
};
snow_system_assets_AssetText.processor = function(_app,_id,_data) {
	if(_data == null) return snow_api_Promise.reject(snow_types_Error.error("AssetText processor: data was null"));
	return snow_api_Promise.resolve(new haxe_io_Bytes(new Uint8Array(_data.buffer)).toString());
};
snow_system_assets_AssetText.__super__ = snow_system_assets_Asset;
snow_system_assets_AssetText.prototype = $extend(snow_system_assets_Asset.prototype,{
	reload: function() {
		var _g = this;
		return new snow_api_Promise(function(resolve,reject) {
			_g.system.app.io.data_flow(haxe_io_Path.join([_g.system.root,_g.id]),snow_system_assets_AssetText.processor).then(function(_text) {
				_g.set_text(_text);
				resolve(_g);
			}).error(reject);
		});
	}
	,set_text: function(_text) {
		this.loaded = _text != null;
		return this.text = _text;
	}
	,__class__: snow_system_assets_AssetText
});
var snow_system_assets_AssetJSON = function() { };
$hxClasses["snow.system.assets.AssetJSON"] = snow_system_assets_AssetJSON;
snow_system_assets_AssetJSON.__name__ = ["snow","system","assets","AssetJSON"];
snow_system_assets_AssetJSON.processor = function(_app,_id,_data) {
	if(_data == null) return snow_api_Promise.reject(snow_types_Error.error("AssetJSON: data was null"));
	return new snow_api_Promise(function(resolve,reject) {
		var _data_json = null;
		try {
			_data_json = JSON.parse(new haxe_io_Bytes(new Uint8Array(_data.buffer)).toString());
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return reject(snow_types_Error.parse(e));
		}
		return resolve(_data_json);
	});
};
snow_system_assets_AssetJSON.__super__ = snow_system_assets_Asset;
snow_system_assets_AssetJSON.prototype = $extend(snow_system_assets_Asset.prototype,{
	__class__: snow_system_assets_AssetJSON
});
var snow_system_assets_Assets = function(_app) {
	this.root = "";
	this.app = _app;
	this.module = new snow_core_web_assets_Assets(this);
};
$hxClasses["snow.system.assets.Assets"] = snow_system_assets_Assets;
snow_system_assets_Assets.__name__ = ["snow","system","assets","Assets"];
snow_system_assets_Assets.prototype = {
	image_from_bytes: function(_id,_bytes) {
		return snow_system_assets_AssetImage.load_from_bytes(this,_id,_bytes);
	}
	,__class__: snow_system_assets_Assets
};
var snow_system_audio_Audio = function(_app) {
	this.active = false;
	this.app = _app;
	this.module = new snow_modules_howlerjs_Audio(this);
	this.module.init();
	this.sound_list = new haxe_ds_StringMap();
	this.stream_list = new haxe_ds_StringMap();
	this.active = true;
};
$hxClasses["snow.system.audio.Audio"] = snow_system_audio_Audio;
snow_system_audio_Audio.__name__ = ["snow","system","audio","Audio"];
snow_system_audio_Audio.prototype = {
	create: function(_id,_name,_streaming) {
		if(_streaming == null) _streaming = false;
		if(_name == null) _name = "";
		var _g = this;
		if(_name == "") _name = this.app.make_uniqueid();
		console.log("    i / audio / " + ("creating sound named " + _name + " (stream: " + (_streaming == null?"null":"" + _streaming) + ")"));
		return new snow_api_Promise(function(resolve,reject) {
			var _create = _g.module.create_sound(_id,_name,_streaming);
			_create.then(function(_sound) {
				_g.sound_list.set(_name,_sound);
				if(_streaming) _g.stream_list.set(_name,_sound);
				resolve(_sound);
				_sound.emit("load");
			}).error(reject);
		});
	}
	,on: function(_name,_event,_handler) {
		if(_event == "load") {
			var sound = this.get(_name);
			if(sound != null) {
				if(sound.get_loaded()) {
					_handler(sound);
					return;
				}
			}
		}
		var _event_id = "" + _event + snow_system_audio_Audio.splitter + _name;
		if(this.handlers == null) this.handlers = new haxe_ds_StringMap();
		if(!this.handlers.exists(_event_id)) this.handlers.set(_event_id,[]);
		var _list = this.handlers.get(_event_id);
		if(HxOverrides.indexOf(_list,_handler,0) != -1) throw new js__$Boot_HaxeError("Audio on event adding the same handler twice");
		_list.push(_handler);
		this.handlers.set(_event_id,_list);
	}
	,off: function(_name,_event,_handler) {
		if(this.handlers == null) return;
		var _event_id = "" + _event + snow_system_audio_Audio.splitter + _name;
		var _list = this.handlers.get(_event_id);
		if(_list != null) {
			HxOverrides.remove(_list,_handler);
			this.handlers.set(_event_id,_list);
		}
	}
	,get: function(_name) {
		var _sound = this.sound_list.get(_name);
		return _sound;
	}
	,play: function(_name) {
		if(!this.active) return;
		var sound = this.get(_name);
		if(sound != null) sound.play();
	}
	,stop: function(_name) {
		if(!this.active) return;
		var sound = this.get(_name);
		if(sound != null) sound.stop();
	}
	,kill: function(_sound) {
		if(_sound == null) return;
		this.sound_list.remove(_sound.name);
		this.stream_list.remove(_sound.name);
	}
	,suspend: function() {
		if(!this.active) return;
		console.log("    i / audio / " + "suspending sound context");
		this.active = false;
		var $it0 = this.stream_list.iterator();
		while( $it0.hasNext() ) {
			var sound = $it0.next();
			sound.internal_pause();
		}
		this.module.suspend();
	}
	,resume: function() {
		if(this.active) return;
		console.log("    i / audio / " + "resuming sound context");
		this.active = true;
		this.module.resume();
		var $it0 = this.stream_list.iterator();
		while( $it0.hasNext() ) {
			var sound = $it0.next();
			sound.internal_play();
		}
	}
	,on_event: function(_event) {
		this.module.on_event(_event);
		if(_event.type == 10) this.suspend(); else if(_event.type == 12) this.resume();
	}
	,destroy: function() {
		this.active = false;
		var $it0 = this.sound_list.iterator();
		while( $it0.hasNext() ) {
			var sound = $it0.next();
			sound.destroy();
		}
		this.module.destroy();
	}
	,update: function() {
		if(!this.active) return;
		var $it0 = this.sound_list.iterator();
		while( $it0.hasNext() ) {
			var _sound = $it0.next();
			if(_sound.get_playing()) _sound.internal_update();
		}
		this.module.update();
	}
	,sound_event: function(_sound,_event) {
		var _event_id = "" + _event + snow_system_audio_Audio.splitter + _sound.name;
		if(this.handlers == null) return;
		var _list = this.handlers.get(_event_id);
		if(_list != null) {
			var _g = 0;
			while(_g < _list.length) {
				var fn = _list[_g];
				++_g;
				fn(_sound);
			}
		}
	}
	,__class__: snow_system_audio_Audio
};
var snow_system_input_Input = function(_app) {
	this.touch_count = 0;
	this.app = _app;
	this.module = new snow_core_web_input_Input(this);
	this.module.init();
	this.key_code_pressed = new haxe_ds_IntMap();
	this.key_code_down = new haxe_ds_IntMap();
	this.key_code_released = new haxe_ds_IntMap();
	this.scan_code_pressed = new haxe_ds_IntMap();
	this.scan_code_down = new haxe_ds_IntMap();
	this.scan_code_released = new haxe_ds_IntMap();
	this.mouse_button_pressed = new haxe_ds_IntMap();
	this.mouse_button_down = new haxe_ds_IntMap();
	this.mouse_button_released = new haxe_ds_IntMap();
	this.gamepad_button_pressed = new haxe_ds_IntMap();
	this.gamepad_button_down = new haxe_ds_IntMap();
	this.gamepad_button_released = new haxe_ds_IntMap();
	this.gamepad_axis_values = new haxe_ds_IntMap();
	this.touches_down = new haxe_ds_IntMap();
};
$hxClasses["snow.system.input.Input"] = snow_system_input_Input;
snow_system_input_Input.__name__ = ["snow","system","input","Input"];
snow_system_input_Input.prototype = {
	keydown: function(_code) {
		return this.key_code_down.h.hasOwnProperty(_code);
	}
	,dispatch_key_down_event: function(keycode,scancode,repeat,mod,timestamp,window_id) {
		if(!repeat) {
			this.key_code_pressed.h[keycode] = false;
			this.key_code_down.h[keycode] = true;
			this.scan_code_pressed.h[scancode] = false;
			this.scan_code_down.h[scancode] = true;
		}
		this.app.host.onkeydown(keycode,scancode,repeat,mod,timestamp,window_id);
	}
	,dispatch_key_up_event: function(keycode,scancode,repeat,mod,timestamp,window_id) {
		this.key_code_released.h[keycode] = false;
		this.key_code_down.remove(keycode);
		this.scan_code_released.h[scancode] = false;
		this.scan_code_down.remove(scancode);
		this.app.host.onkeyup(keycode,scancode,repeat,mod,timestamp,window_id);
	}
	,dispatch_text_event: function(text,start,length,type,timestamp,window_id) {
		this.app.host.ontextinput(text,start,length,type,timestamp,window_id);
	}
	,dispatch_mouse_move_event: function(x,y,xrel,yrel,timestamp,window_id) {
		this.app.host.onmousemove(x,y,xrel,yrel,timestamp,window_id);
	}
	,dispatch_mouse_down_event: function(x,y,button,timestamp,window_id) {
		this.mouse_button_pressed.h[button] = false;
		this.mouse_button_down.h[button] = true;
		this.app.host.onmousedown(x,y,button,timestamp,window_id);
	}
	,dispatch_mouse_up_event: function(x,y,button,timestamp,window_id) {
		this.mouse_button_released.h[button] = false;
		this.mouse_button_down.remove(button);
		this.app.host.onmouseup(x,y,button,timestamp,window_id);
	}
	,dispatch_mouse_wheel_event: function(x,y,timestamp,window_id) {
		this.app.host.onmousewheel(x,y,timestamp,window_id);
	}
	,dispatch_touch_down_event: function(x,y,touch_id,timestamp) {
		if(!this.touches_down.h.hasOwnProperty(touch_id)) {
			this.touch_count++;
			this.touches_down.h[touch_id] = true;
		}
		this.app.host.ontouchdown(x,y,touch_id,timestamp);
	}
	,dispatch_touch_up_event: function(x,y,touch_id,timestamp) {
		this.app.host.ontouchup(x,y,touch_id,timestamp);
		if(this.touches_down.remove(touch_id)) this.touch_count--;
	}
	,dispatch_touch_move_event: function(x,y,dx,dy,touch_id,timestamp) {
		this.app.host.ontouchmove(x,y,dx,dy,touch_id,timestamp);
	}
	,dispatch_gamepad_axis_event: function(gamepad,axis,value,timestamp) {
		if(!this.gamepad_axis_values.h.hasOwnProperty(gamepad)) {
			var value1 = new haxe_ds_IntMap();
			this.gamepad_axis_values.h[gamepad] = value1;
		}
		var this1 = this.gamepad_axis_values.h[gamepad];
		this1.set(axis,value);
		this.app.host.ongamepadaxis(gamepad,axis,value,timestamp);
	}
	,dispatch_gamepad_button_down_event: function(gamepad,button,value,timestamp) {
		if(!this.gamepad_button_pressed.h.hasOwnProperty(gamepad)) {
			var value1 = new haxe_ds_IntMap();
			this.gamepad_button_pressed.h[gamepad] = value1;
		}
		if(!this.gamepad_button_down.h.hasOwnProperty(gamepad)) {
			var value2 = new haxe_ds_IntMap();
			this.gamepad_button_down.h[gamepad] = value2;
		}
		var this1 = this.gamepad_button_pressed.h[gamepad];
		this1.set(button,false);
		var this2 = this.gamepad_button_down.h[gamepad];
		this2.set(button,true);
		this.app.host.ongamepaddown(gamepad,button,value,timestamp);
	}
	,dispatch_gamepad_button_up_event: function(gamepad,button,value,timestamp) {
		if(!this.gamepad_button_released.h.hasOwnProperty(gamepad)) {
			var value1 = new haxe_ds_IntMap();
			this.gamepad_button_released.h[gamepad] = value1;
		}
		if(!this.gamepad_button_down.h.hasOwnProperty(gamepad)) {
			var value2 = new haxe_ds_IntMap();
			this.gamepad_button_down.h[gamepad] = value2;
		}
		var this1 = this.gamepad_button_released.h[gamepad];
		this1.set(button,false);
		var this2 = this.gamepad_button_down.h[gamepad];
		this2.remove(button);
		this.app.host.ongamepadup(gamepad,button,value,timestamp);
	}
	,dispatch_gamepad_device_event: function(gamepad,id,type,timestamp) {
		this.app.host.ongamepaddevice(gamepad,id,type,timestamp);
	}
	,listen: function(_window) {
		this.module.listen(_window);
	}
	,on_event: function(_event) {
		this.module.on_event(_event);
	}
	,update: function() {
		this.module.update();
		this._update_keystate();
		this._update_gamepadstate();
		this._update_mousestate();
	}
	,destroy: function() {
		this.module.destroy();
	}
	,_update_mousestate: function() {
		var $it0 = this.mouse_button_pressed.keys();
		while( $it0.hasNext() ) {
			var _code = $it0.next();
			if(this.mouse_button_pressed.h[_code]) this.mouse_button_pressed.remove(_code); else this.mouse_button_pressed.h[_code] = true;
		}
		var $it1 = this.mouse_button_released.keys();
		while( $it1.hasNext() ) {
			var _code1 = $it1.next();
			if(this.mouse_button_released.h[_code1]) this.mouse_button_released.remove(_code1); else this.mouse_button_released.h[_code1] = true;
		}
	}
	,_update_gamepadstate: function() {
		var $it0 = this.gamepad_button_pressed.iterator();
		while( $it0.hasNext() ) {
			var _gamepad_pressed = $it0.next();
			var $it1 = _gamepad_pressed.keys();
			while( $it1.hasNext() ) {
				var _button = $it1.next();
				if(_gamepad_pressed.h[_button]) _gamepad_pressed.remove(_button); else _gamepad_pressed.h[_button] = true;
			}
		}
		var $it2 = this.gamepad_button_released.iterator();
		while( $it2.hasNext() ) {
			var _gamepad_released = $it2.next();
			var $it3 = _gamepad_released.keys();
			while( $it3.hasNext() ) {
				var _button1 = $it3.next();
				if(_gamepad_released.h[_button1]) _gamepad_released.remove(_button1); else _gamepad_released.h[_button1] = true;
			}
		}
	}
	,_update_keystate: function() {
		var $it0 = this.key_code_pressed.keys();
		while( $it0.hasNext() ) {
			var _code = $it0.next();
			if(this.key_code_pressed.h[_code]) this.key_code_pressed.remove(_code); else this.key_code_pressed.h[_code] = true;
		}
		var $it1 = this.key_code_released.keys();
		while( $it1.hasNext() ) {
			var _code1 = $it1.next();
			if(this.key_code_released.h[_code1]) this.key_code_released.remove(_code1); else this.key_code_released.h[_code1] = true;
		}
		var $it2 = this.scan_code_pressed.keys();
		while( $it2.hasNext() ) {
			var _code2 = $it2.next();
			if(this.scan_code_pressed.h[_code2]) this.scan_code_pressed.remove(_code2); else this.scan_code_pressed.h[_code2] = true;
		}
		var $it3 = this.scan_code_released.keys();
		while( $it3.hasNext() ) {
			var _code3 = $it3.next();
			if(this.scan_code_released.h[_code3]) this.scan_code_released.remove(_code3); else this.scan_code_released.h[_code3] = true;
		}
	}
	,__class__: snow_system_input_Input
};
var snow_system_io_IO = function(_app) {
	this.app = _app;
	this.module = new snow_core_web_io_IO(this);
	this.module.init();
};
$hxClasses["snow.system.io.IO"] = snow_system_io_IO;
snow_system_io_IO.__name__ = ["snow","system","io","IO"];
snow_system_io_IO.prototype = {
	data_flow: function(_id,_processor,_provider) {
		var _g = this;
		if(_provider == null) _provider = $bind(this,this.default_provider);
		return new snow_api_Promise(function(resolve,reject) {
			_provider(_g.app,_id).then(function(data) {
				if(_processor != null) _processor(_g.app,_id,data).then(resolve,reject); else resolve(data);
			}).error(reject);
		});
	}
	,default_provider: function(_app,_id) {
		return this.module.data_load(_id,null);
	}
	,__class__: snow_system_io_IO
};
var snow_system_window_Window = function(_system,_config) {
	this.internal_resize = false;
	this.internal_position = false;
	this.minimized = false;
	this.closed = true;
	this.auto_render = true;
	this.auto_swap = true;
	this.height = 0;
	this.width = 0;
	this.y = 0;
	this.x = 0;
	this.set_max_size({ x : 0, y : 0});
	this.set_min_size({ x : 0, y : 0});
	this.system = _system;
	this.asked_config = _config;
	this.config = _config;
	if(this.config.x == null) this.config.x = 536805376;
	if(this.config.y == null) this.config.y = 536805376;
	this.system.module.create(this.system.app.config.render,_config,$bind(this,this.on_window_created));
};
$hxClasses["snow.system.window.Window"] = snow_system_window_Window;
snow_system_window_Window.__name__ = ["snow","system","window","Window"];
snow_system_window_Window.prototype = {
	on_window_created: function(_handle,_id,_configs) {
		this.id = _id;
		this.handle = _handle;
		if(this.handle == null) {
			console.log("   i / window / " + "failed to create window");
			return;
		}
		this.closed = false;
		this.config = _configs.config;
		this.system.app.config.render = _configs.render_config;
		this.internal_position = true;
		this.set_x(this.config.x);
		this.set_y(this.config.y);
		this.internal_position = false;
		this.internal_resize = true;
		this.set_width(this.config.width);
		this.set_height(this.config.height);
		this.internal_resize = false;
		this.on_event({ type : 1, window_id : _id, timestamp : snow_Snow.core.timestamp(), event : { }});
		null;
	}
	,on_event: function(_event) {
		var _g = _event.type;
		if(_g != null) switch(_g) {
		case 5:
			this.internal_position = true;
			this.set_position(_event.event.x,_event.event.y);
			this.internal_position = false;
			break;
		case 6:
			this.internal_resize = true;
			this.set_size(_event.event.x,_event.event.y);
			this.internal_resize = false;
			break;
		case 7:
			this.internal_resize = true;
			this.set_size(_event.event.x,_event.event.y);
			this.internal_resize = false;
			break;
		case 8:
			this.minimized = true;
			break;
		case 10:
			this.minimized = false;
			break;
		default:
		} else {
		}
		if(this.onevent != null) this.onevent(_event);
	}
	,update: function() {
		if(this.handle != null && !this.closed) this.system.module.update_window(this);
	}
	,render: function() {
		if(this.minimized || this.closed) return;
		if(this.handle == null) return;
		this.system.module.render(this);
		if(this.onrender != null) {
			this.onrender(this);
			if(this.auto_swap) this.swap();
			return;
		}
		snow_modules_opengl_web_GL.current_context.clearColor(0,0,0,1.0);
		snow_modules_opengl_web_GL.current_context.clear(16384);
		if(this.auto_swap) this.swap();
	}
	,swap: function() {
		if(this.handle == null || this.closed || this.minimized) return;
		this.system.module.swap(this);
	}
	,get_max_size: function() {
		return this.max_size;
	}
	,get_min_size: function() {
		return this.min_size;
	}
	,set_x: function(_x) {
		this.x = _x;
		if(this.handle != null && !this.internal_position) this.system.module.set_position(this,this.x,this.y);
		return this.x;
	}
	,set_y: function(_y) {
		this.y = _y;
		if(this.handle != null && !this.internal_position) this.system.module.set_position(this,this.x,this.y);
		return this.y;
	}
	,set_width: function(_width) {
		this.width = _width;
		if(this.handle != null && !this.internal_resize) this.system.module.set_size(this,this.width,this.height);
		return this.width;
	}
	,set_height: function(_height) {
		this.height = _height;
		if(this.handle != null && !this.internal_resize) this.system.module.set_size(this,this.width,this.height);
		return this.height;
	}
	,set_position: function(_x,_y) {
		var last_internal_position_flag = this.internal_position;
		this.internal_position = true;
		this.set_x(_x);
		this.set_y(_y);
		this.internal_position = last_internal_position_flag;
		if(this.handle != null && !this.internal_position) this.system.module.set_position(this,this.x,this.y);
	}
	,set_size: function(_width,_height) {
		var last_internal_resize_flag = this.internal_resize;
		this.internal_resize = true;
		this.set_width(_width);
		this.set_height(_height);
		this.internal_resize = last_internal_resize_flag;
		if(this.handle != null && !this.internal_resize) this.system.module.set_size(this,_width,_height);
	}
	,set_max_size: function(_size) {
		if(this.get_max_size() != null && this.handle != null) this.system.module.set_max_size(this,_size.x,_size.y);
		return this.max_size = _size;
	}
	,set_min_size: function(_size) {
		if(this.get_min_size() != null && this.handle != null) this.system.module.set_min_size(this,_size.x,_size.y);
		return this.min_size = _size;
	}
	,__class__: snow_system_window_Window
};
var snow_system_window_Windowing = function(_app) {
	this.window_count = 0;
	this.app = _app;
	this.window_list = new haxe_ds_IntMap();
	this.window_handles = new haxe_ds_ObjectMap();
	this.module = new snow_core_web_window_Windowing(this);
	this.module.init();
};
$hxClasses["snow.system.window.Windowing"] = snow_system_window_Windowing;
snow_system_window_Windowing.__name__ = ["snow","system","window","Windowing"];
snow_system_window_Windowing.prototype = {
	create: function(_config) {
		var _window = new snow_system_window_Window(this,_config);
		this.window_list.h[_window.id] = _window;
		this.window_handles.set(_window.handle,_window.id);
		this.window_count++;
		this.module.listen(_window);
		if(_config.no_input == null || _config.no_input == false) this.app.input.listen(_window);
		return _window;
	}
	,window_from_handle: function(_handle) {
		if(this.window_handles.h.__keys__[_handle.__id__] != null) {
			var _id = this.window_handles.h[_handle.__id__];
			return this.window_list.h[_id];
		}
		return null;
	}
	,on_event: function(_event) {
		if(_event.type == 5) {
			var _window_event = _event.window;
			var _window = this.window_list.h[_window_event.window_id];
			if(_window != null) _window.on_event(_window_event);
		}
	}
	,update: function() {
		this.module.update();
		var $it0 = this.window_list.iterator();
		while( $it0.hasNext() ) {
			var $window = $it0.next();
			$window.update();
		}
		var $it1 = this.window_list.iterator();
		while( $it1.hasNext() ) {
			var window1 = $it1.next();
			if(window1.auto_render) window1.render();
		}
	}
	,destroy: function() {
		this.module.destroy();
	}
	,__class__: snow_system_window_Windowing
};
var snow_types_Error = $hxClasses["snow.types.Error"] = { __ename__ : ["snow","types","Error"], __constructs__ : ["error","init","windowing","parse"] };
snow_types_Error.error = function(value) { var $x = ["error",0,value]; $x.__enum__ = snow_types_Error; $x.toString = $estr; return $x; };
snow_types_Error.init = function(value) { var $x = ["init",1,value]; $x.__enum__ = snow_types_Error; $x.toString = $estr; return $x; };
snow_types_Error.windowing = function(value) { var $x = ["windowing",2,value]; $x.__enum__ = snow_types_Error; $x.toString = $estr; return $x; };
snow_types_Error.parse = function(value) { var $x = ["parse",3,value]; $x.__enum__ = snow_types_Error; $x.toString = $estr; return $x; };
var tusk_ChangeEvent = $hxClasses["tusk.ChangeEvent"] = { __ename__ : ["tusk","ChangeEvent"], __constructs__ : ["EntityAdded","EntityRemoved","ComponentAdded","ComponentRemoved"] };
tusk_ChangeEvent.EntityAdded = ["EntityAdded",0];
tusk_ChangeEvent.EntityAdded.toString = $estr;
tusk_ChangeEvent.EntityAdded.__enum__ = tusk_ChangeEvent;
tusk_ChangeEvent.EntityRemoved = ["EntityRemoved",1];
tusk_ChangeEvent.EntityRemoved.toString = $estr;
tusk_ChangeEvent.EntityRemoved.__enum__ = tusk_ChangeEvent;
tusk_ChangeEvent.ComponentAdded = function(component) { var $x = ["ComponentAdded",2,component]; $x.__enum__ = tusk_ChangeEvent; $x.toString = $estr; return $x; };
tusk_ChangeEvent.ComponentRemoved = function(component) { var $x = ["ComponentRemoved",3,component]; $x.__enum__ = tusk_ChangeEvent; $x.toString = $estr; return $x; };
var tusk_Entity = function(scene,name,components) {
	this.scene = null;
	this.name = null;
	this.name = name;
	this.components = new haxe_ds_IntMap();
	if(components != null) {
		var _g = 0;
		while(_g < components.length) {
			var component = components[_g];
			++_g;
			this.components.set(component.get__tid(),component);
		}
	}
	this.id = tusk_Entity.nextID;
	tusk_Entity.nextID++;
	this.scene = scene;
	tusk_Tusk.addEntity(this,scene);
};
$hxClasses["tusk.Entity"] = tusk_Entity;
tusk_Entity.__name__ = ["tusk","Entity"];
tusk_Entity.prototype = {
	hasType: function(tid) {
		return this.components.h.hasOwnProperty(tid);
	}
	,has: function(component) {
		return this.hasType(component.get__tid());
	}
	,get: function(tid) {
		return this.components.h[tid];
	}
	,push: function(component) {
		var componentName = Type.getClassName(component == null?null:js_Boot.getClass(component));
		if(this.has(component)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Can't add component '" + componentName + "' because entity already has it!",null,null,{ fileName : "Entity.hx", lineNumber : 97, className : "tusk.Entity", methodName : "push"}));
		this.components.set(component.get__tid(),component);
		tusk_Tusk.entityChanged(this,tusk_ChangeEvent.ComponentAdded(component));
		return this;
	}
	,removeType: function(tid) {
		if(this.components.remove(tid)) {
			var component = this.get(tid);
			tusk_Tusk.entityChanged(this,tusk_ChangeEvent.ComponentRemoved(component));
		}
		return this;
	}
	,hxSerialize: function(s) {
		s.serialize(this.components);
	}
	,hxUnserialize: function(u) {
		this.components = u.unserialize();
	}
	,__class__: tusk_Entity
};
var tusk_Matcher = function() {
	this.customMatcher = null;
	this.excludes = [];
	this.includes = [];
};
$hxClasses["tusk.Matcher"] = tusk_Matcher;
tusk_Matcher.__name__ = ["tusk","Matcher"];
tusk_Matcher.prototype = {
	include: function(tid) {
		if(HxOverrides.indexOf(this.excludes,tid,0) >= 0) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Can't add component '" + tid + "' because it is already in the excludes list!",null,null,{ fileName : "Matcher.hx", lineNumber : 25, className : "tusk.Matcher", methodName : "include"}));
		if(HxOverrides.indexOf(this.includes,tid,0) < 0) this.includes.push(tid);
		return this;
	}
	,matchesEntity: function(entity) {
		var _g = 0;
		var _g1 = this.includes;
		while(_g < _g1.length) {
			var include = _g1[_g];
			++_g;
			if(!entity.hasType(include)) return false;
		}
		var _g2 = 0;
		var _g11 = this.excludes;
		while(_g2 < _g11.length) {
			var exclude = _g11[_g2];
			++_g2;
			if(entity.hasType(exclude)) return false;
		}
		if(this.customMatcher != null) return this.customMatcher(entity);
		return true;
	}
	,matchEntities: function(entities) {
		var _g = this;
		return entities.filter(function(entity) {
			return _g.matchesEntity(entity);
		});
	}
	,__class__: tusk_Matcher
};
var tusk_Tusk = function(_game) {
	snow_AppFixedTimestep.call(this);
	tusk_Tusk.router = new tusk_events_EventRouter();
	tusk_Tusk.game = _game;
	tusk_Tusk.instance = this;
};
$hxClasses["tusk.Tusk"] = tusk_Tusk;
tusk_Tusk.__name__ = ["tusk","Tusk"];
tusk_Tusk.routeEvent = function(type,handler) {
	tusk_Tusk.router.registerHandler(type,handler);
};
tusk_Tusk.pushScene = function(scene) {
	if(HxOverrides.indexOf(tusk_Tusk.game.currentScenes,scene,0) >= 0) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Scene is already running!",null,null,{ fileName : "Tusk.hx", lineNumber : 180, className : "tusk.Tusk", methodName : "pushScene"}));
	tusk_Tusk.game.currentScenes.push(scene);
	scene.___connectRoutes();
	scene.onLoad(new tusk_events_LoadEvent(scene));
	return scene.sceneDone.promise();
};
tusk_Tusk.addEntity = function(entity,scene) {
	if(HxOverrides.indexOf(scene.entities,entity,0) == -1) null;
	var _g = 0;
	var _g1 = scene.processors;
	while(_g < _g1.length) {
		var processor = _g1[_g];
		++_g;
		if(HxOverrides.indexOf(processor.entities,entity,0) == -1 && processor.matcher.matchesEntity(entity)) {
			processor.entities.push(entity);
			processor.onEntityChanged(entity,tusk_ChangeEvent.EntityAdded);
			null;
		}
	}
};
tusk_Tusk.entityChanged = function(entity,event) {
	var _g = 0;
	var _g1 = tusk_Tusk.game.currentScenes;
	while(_g < _g1.length) {
		var scene = _g1[_g];
		++_g;
		var _g2 = 0;
		var _g3 = scene.processors;
		while(_g2 < _g3.length) {
			var processor = _g3[_g2];
			++_g2;
			if(HxOverrides.indexOf(processor.entities,entity,0) == -1 && processor.matcher.matchesEntity(entity)) {
				processor.entities.push(entity);
				processor.onEntityChanged(entity,event);
				null;
			} else if(HxOverrides.indexOf(processor.entities,entity,0) != -1 && !processor.matcher.matchesEntity(entity)) {
				processor.onEntityChanged(entity,event);
				HxOverrides.remove(processor.entities,entity);
				null;
			}
		}
	}
};
tusk_Tusk.removeEntity = function(entity) {
	var _g = 0;
	var _g1 = tusk_Tusk.game.currentScenes;
	while(_g < _g1.length) {
		var scene = _g1[_g];
		++_g;
		var _g2 = 0;
		var _g3 = scene.processors;
		while(_g2 < _g3.length) {
			var processor = _g3[_g2];
			++_g2;
			if(HxOverrides.remove(processor.entities,entity)) {
				processor.onEntityChanged(entity,tusk_ChangeEvent.EntityRemoved);
				null;
			}
		}
		if(HxOverrides.remove(scene.entities,entity)) null;
	}
};
tusk_Tusk.__super__ = snow_AppFixedTimestep;
tusk_Tusk.prototype = $extend(snow_AppFixedTimestep.prototype,{
	config: function(config) {
		config.window.title = tusk_Tusk.game.get_title();
		config.window.width = tusk_Tusk.game.get_width();
		config.window.height = tusk_Tusk.game.get_height();
		return config;
	}
	,ready: function() {
		tusk_Tusk.sound = new tusk_modules_Sound();
		tusk_Tusk.assets = new tusk_modules_Assets();
		this.app.window.onrender = $bind(this,this.render);
		tusk_Tusk.game.setup();
	}
	,update: function(dt) {
		tusk_Tusk.router.onEvent(tusk_events_EventType.Update,new tusk_events_UpdateEvent(dt));
	}
	,onkeydown: function(keycode,scancode,repeat,mod,timestamp,window_id) {
		tusk_Tusk.router.onEvent(tusk_events_EventType.KeyDown,new tusk_events_KeyEvent(keycode,scancode,repeat,mod));
	}
	,onkeyup: function(keycode,scancode,repeat,mod,timestamp,window_id) {
		tusk_Tusk.router.onEvent(tusk_events_EventType.KeyUp,new tusk_events_KeyEvent(keycode,scancode,repeat,mod));
	}
	,onmousedown: function(x,y,button,timestamp,window_id) {
		tusk_Tusk.router.onEvent(tusk_events_EventType.MouseDown,new tusk_events_MouseButtonEvent(x,y,button));
	}
	,onmouseup: function(x,y,button,timestamp,window_id) {
		tusk_Tusk.router.onEvent(tusk_events_EventType.MouseUp,new tusk_events_MouseButtonEvent(x,y,button));
	}
	,onmousemove: function(x,y,xrel,yrel,timestamp,window_id) {
		tusk_Tusk.router.onEvent(tusk_events_EventType.MouseMove,new tusk_events_MouseMoveEvent(x,y,xrel,yrel));
	}
	,render: function(window) {
		tusk_Tusk.router.onEvent(tusk_events_EventType.Render,new tusk_events_RenderEvent(this.alpha));
	}
	,__class__: tusk_Tusk
});
var tusk_debug_Exception = function(message,fatal,type,pos) {
	if(fatal == null) fatal = false;
	if(message == null) message = "";
	this.message = message;
	if(type == null) this.type = tusk_debug_ExceptionType.Unknown; else this.type = type;
	this.fatal = fatal;
	this.stack = haxe_CallStack.callStack();
	this.pos = pos;
};
$hxClasses["tusk.debug.Exception"] = tusk_debug_Exception;
tusk_debug_Exception.__name__ = ["tusk","debug","Exception"];
tusk_debug_Exception.prototype = {
	translateStackItem: function(item) {
		switch(item[1]) {
		case 0:
			return "in function";
		case 1:
			var m = item[2];
			return "in module " + m;
		case 2:
			var line = item[4];
			var file = item[3];
			var s = item[2];
			return "in file '" + file + "' at line " + line + (s == null?"":": " + this.translateStackItem(s));
		case 3:
			var method = item[3];
			var className = item[2];
			return "in class '" + className + "' in method '" + method + "'";
		case 4:
			var v = item[2];
			return "in local function (" + v + ")";
		}
	}
	,translateExceptionType: function(type) {
		switch(type[1]) {
		case 1:
			return "assert";
		case 2:
			return "asset not found";
		case 3:
			return "file not found";
		case 4:
			return "invalid asset type";
		case 5:
			return "not implemented yet";
		default:
			return "unknown";
		}
	}
	,toString: function() {
		var stackString = this.stack.map($bind(this,this.translateStackItem));
		var posInfo;
		if(this.pos == null) posInfo = ""; else posInfo = " in class: " + this.pos.className + " (" + this.pos.fileName + ") in function " + this.pos.methodName + "() at line " + this.pos.lineNumber;
		return (this.fatal?"fatal ":"") + this.translateExceptionType(this.type) + " exception" + posInfo + ": " + this.message + (tusk_debug_Exception.showStackTrace?"\nstack trace:\n  " + stackString.join("\n  "):"");
	}
	,__class__: tusk_debug_Exception
};
var tusk_debug_ExceptionType = $hxClasses["tusk.debug.ExceptionType"] = { __ename__ : ["tusk","debug","ExceptionType"], __constructs__ : ["Unknown","Assert","AssetNotFound","FileNotFound","InvalidAssetType","NotImplementedYet"] };
tusk_debug_ExceptionType.Unknown = ["Unknown",0];
tusk_debug_ExceptionType.Unknown.toString = $estr;
tusk_debug_ExceptionType.Unknown.__enum__ = tusk_debug_ExceptionType;
tusk_debug_ExceptionType.Assert = ["Assert",1];
tusk_debug_ExceptionType.Assert.toString = $estr;
tusk_debug_ExceptionType.Assert.__enum__ = tusk_debug_ExceptionType;
tusk_debug_ExceptionType.AssetNotFound = ["AssetNotFound",2];
tusk_debug_ExceptionType.AssetNotFound.toString = $estr;
tusk_debug_ExceptionType.AssetNotFound.__enum__ = tusk_debug_ExceptionType;
tusk_debug_ExceptionType.FileNotFound = ["FileNotFound",3];
tusk_debug_ExceptionType.FileNotFound.toString = $estr;
tusk_debug_ExceptionType.FileNotFound.__enum__ = tusk_debug_ExceptionType;
tusk_debug_ExceptionType.InvalidAssetType = ["InvalidAssetType",4];
tusk_debug_ExceptionType.InvalidAssetType.toString = $estr;
tusk_debug_ExceptionType.InvalidAssetType.__enum__ = tusk_debug_ExceptionType;
tusk_debug_ExceptionType.NotImplementedYet = ["NotImplementedYet",5];
tusk_debug_ExceptionType.NotImplementedYet.toString = $estr;
tusk_debug_ExceptionType.NotImplementedYet.__enum__ = tusk_debug_ExceptionType;
var tusk_debug_LogFunctions = $hxClasses["tusk.debug.LogFunctions"] = { __ename__ : ["tusk","debug","LogFunctions"], __constructs__ : ["Fatal","Error","Warn","Info","Debug","Trace"] };
tusk_debug_LogFunctions.Fatal = ["Fatal",0];
tusk_debug_LogFunctions.Fatal.toString = $estr;
tusk_debug_LogFunctions.Fatal.__enum__ = tusk_debug_LogFunctions;
tusk_debug_LogFunctions.Error = ["Error",1];
tusk_debug_LogFunctions.Error.toString = $estr;
tusk_debug_LogFunctions.Error.__enum__ = tusk_debug_LogFunctions;
tusk_debug_LogFunctions.Warn = ["Warn",2];
tusk_debug_LogFunctions.Warn.toString = $estr;
tusk_debug_LogFunctions.Warn.__enum__ = tusk_debug_LogFunctions;
tusk_debug_LogFunctions.Info = ["Info",3];
tusk_debug_LogFunctions.Info.toString = $estr;
tusk_debug_LogFunctions.Info.__enum__ = tusk_debug_LogFunctions;
tusk_debug_LogFunctions.Debug = ["Debug",4];
tusk_debug_LogFunctions.Debug.toString = $estr;
tusk_debug_LogFunctions.Debug.__enum__ = tusk_debug_LogFunctions;
tusk_debug_LogFunctions.Trace = ["Trace",5];
tusk_debug_LogFunctions.Trace.toString = $estr;
tusk_debug_LogFunctions.Trace.__enum__ = tusk_debug_LogFunctions;
var tusk_debug_Log = function() { };
$hxClasses["tusk.debug.Log"] = tusk_debug_Log;
tusk_debug_Log.__name__ = ["tusk","debug","Log"];
tusk_debug_Log.log = function(v,func,pos) {
	var message = v.toString();
	switch(func[1]) {
	case 0:
		console.log("%cf." + pos.fileName + ":" + pos.lineNumber + ": " + message,"font-weight: bold; font-size: 2em; color: white; background: #A84B38;");
		throw new js__$Boot_HaxeError(new String("FATAL EXCEPTION: " + pos.fileName + ":" + pos.lineNumber + ": " + message));
		break;
	case 1:
		console.log("%ce." + pos.fileName + ":" + pos.lineNumber + ": " + message,"font-weight: bold; color: white; background: #A84B38;");
		break;
	case 2:
		console.log("%cw." + pos.fileName + ":" + pos.lineNumber + ": " + message,"color: white; background: #EA8220;");
		break;
	case 3:
		console.log("%ci." + pos.fileName + ":" + pos.lineNumber + ": " + message,"color: blue;");
		break;
	case 4:
		console.log("%cd." + pos.fileName + ":" + pos.lineNumber + ": " + message,"color: #A84B38;");
		break;
	case 5:
		console.log("%ct." + pos.fileName + ":" + pos.lineNumber + ": " + message,"color: #009700;");
		break;
	}
};
var tusk_defaults_Fonts = function() { };
$hxClasses["tusk.defaults.Fonts"] = tusk_defaults_Fonts;
tusk_defaults_Fonts.__name__ = ["tusk","defaults","Fonts"];
tusk_defaults_Fonts.loadSubatomic_Screen = function() {
	if(tusk_Tusk.assets.isLoaded("Subatomic_Screen.fnt")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getFont("Subatomic_Screen.fnt"));
		return d.promise();
	}
	return tusk_Tusk.assets.loadTexture("Subatomic_Screen.png",haxe_Resource.getBytes("Subatomic_Screen.png")).pipe(function(texture) {
		return tusk_Tusk.assets.loadFont("Subatomic_Screen.fnt",haxe_Resource.getString("Subatomic_Screen.fnt"),texture);
	});
};
var tusk_defaults_Materials = function() { };
$hxClasses["tusk.defaults.Materials"] = tusk_defaults_Materials;
tusk_defaults_Materials.__name__ = ["tusk","defaults","Materials"];
tusk_defaults_Materials.loadUnlitTextured = function() {
	var shader = new tusk_resources_Shader("unlit.textured",haxe_Resource.getString("unlit.textured.vert"),haxe_Resource.getString("unlit.textured.frag"));
	var mat = new tusk_resources_Material("unlit.textured",shader);
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.Pos3[1];
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.UV[1];
	snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
	var posLocation = mat.shader.getAttributeLocation("position");
	var uvLocation = mat.shader.getAttributeLocation("uv");
	mat.onRender = function(setupUniforms,vertexBuffer,vertexCount) {
		snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
		snow_modules_opengl_web_GL.current_context.blendFunc(770,771);
		if(mat.textures != null && mat.textures.length > 0) {
			snow_modules_opengl_web_GL.current_context.activeTexture(33984);
			snow_modules_opengl_web_GL.current_context.bindTexture(3553,mat.textures[0].texture);
		}
		setupUniforms(mat);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(uvLocation);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,vertexBuffer);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(posLocation,3,5126,false,20,0);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(uvLocation,2,5126,false,20,12);
		snow_modules_opengl_web_GL.current_context.drawArrays(4,0,vertexCount);
		snow_modules_opengl_web_GL.current_context.bindTexture(3553,null);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,null);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(uvLocation);
		snow_modules_opengl_web_GL.current_context.useProgram(null);
	};
	return tusk_Tusk.assets.loadMaterial("unlit.textured",mat);
};
tusk_defaults_Materials.loadEffectCircleOut = function() {
	var shader = new tusk_resources_Shader("effect.circleout",haxe_Resource.getString("unlit.textured.vert"),haxe_Resource.getString("effect.circleout.frag"));
	var mat = new tusk_resources_Material("effect.circleout",shader);
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.Pos3[1];
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.UV[1];
	snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
	var posLocation = mat.shader.getAttributeLocation("position");
	mat.onRender = function(setupUniforms,vertexBuffer,vertexCount) {
		snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
		snow_modules_opengl_web_GL.current_context.blendFunc(770,771);
		setupUniforms(mat);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,vertexBuffer);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(posLocation,3,5126,false,20,0);
		snow_modules_opengl_web_GL.current_context.drawArrays(4,0,vertexCount);
		snow_modules_opengl_web_GL.current_context.bindTexture(3553,null);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,null);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.useProgram(null);
	};
	return tusk_Tusk.assets.loadMaterial("effect.circleout",mat);
};
tusk_defaults_Materials.loadTextBasic = function() {
	var shader = new tusk_resources_Shader("text.basic",haxe_Resource.getString("unlit.textured.coloured.vert"),haxe_Resource.getString("unlit.textured.coloured.frag"));
	var mat = new tusk_resources_Material("text.basic",shader);
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.Pos3[1];
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.UV[1];
	snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
	var posLocation = mat.shader.getAttributeLocation("position");
	var uvLocation = mat.shader.getAttributeLocation("uv");
	mat.onRender = function(setupUniforms,vertexBuffer,vertexCount) {
		snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
		snow_modules_opengl_web_GL.current_context.blendFunc(770,771);
		if(mat.textures != null && mat.textures.length > 0) {
			snow_modules_opengl_web_GL.current_context.activeTexture(33984);
			snow_modules_opengl_web_GL.current_context.bindTexture(3553,mat.textures[0].texture);
		}
		setupUniforms(mat);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(uvLocation);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,vertexBuffer);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(posLocation,3,5126,false,20,0);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(uvLocation,2,5126,false,20,12);
		snow_modules_opengl_web_GL.current_context.drawArrays(4,0,vertexCount);
		snow_modules_opengl_web_GL.current_context.bindTexture(3553,null);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,null);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(uvLocation);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.useProgram(null);
	};
	return tusk_Tusk.assets.loadMaterial("text.basic",mat);
};
tusk_defaults_Materials.loadParticlesUntextured = function() {
	var shader = new tusk_resources_Shader("particles.untextured",haxe_Resource.getString("particles.untextured.vert"),haxe_Resource.getString("particles.untextured.frag"));
	var mat = new tusk_resources_Material("particles.untextured",shader);
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.Pos3[1];
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.Colour4[1];
	snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
	var posLocation = mat.shader.getAttributeLocation("position");
	var colourLocation = mat.shader.getAttributeLocation("colour");
	var sizeLocation = mat.shader.getAttributeLocation("pointSize");
	mat.onRender = function(setupUniforms,vertexBuffer,vertexCount) {
		snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
		snow_modules_opengl_web_GL.current_context.blendFunc(770,771);
		setupUniforms(mat);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(colourLocation);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(sizeLocation);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,vertexBuffer);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(posLocation,3,5126,false,32,0);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(colourLocation,4,5126,false,32,12);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(sizeLocation,1,5126,false,32,28);
		snow_modules_opengl_web_GL.current_context.drawArrays(0,0,vertexCount);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,null);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(sizeLocation);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(colourLocation);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.useProgram(null);
	};
	return tusk_Tusk.assets.loadMaterial("particles.untextured",mat);
};
var tusk_defaults_Primitives = function() { };
$hxClasses["tusk.defaults.Primitives"] = tusk_defaults_Primitives;
tusk_defaults_Primitives.__name__ = ["tusk","defaults","Primitives"];
tusk_defaults_Primitives.loadTextMesh = function() {
	if(tusk_Tusk.assets.isLoaded("text")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getMesh("text"));
		return d.promise();
	}
	var m = new tusk_resources_Mesh("text");
	m.vertices = [];
	m.uvs = [];
	return tusk_Tusk.assets.loadMesh("text",m);
};
tusk_defaults_Primitives.loadQuad = function(unitSize) {
	if(unitSize == null) unitSize = 1.0;
	if(tusk_Tusk.assets.isLoaded("quad")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getMesh("quad"));
		return d.promise();
	}
	var m = new tusk_resources_Mesh("quad");
	m.vertices = [];
	m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(-0.5 * unitSize,-0.5 * unitSize));
	m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(0.5 * unitSize,-0.5 * unitSize));
	m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(0.5 * unitSize,0.5 * unitSize));
	m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(0.5 * unitSize,0.5 * unitSize));
	m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(-0.5 * unitSize,0.5 * unitSize));
	m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(-0.5 * unitSize,-0.5 * unitSize));
	m.uvs = [];
	m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(0.0,1.0));
	m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(1.0,1.0));
	m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(1.0,0.0));
	m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(1.0,0.0));
	m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(0.0,0.0));
	m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(0.0,1.0));
	return tusk_Tusk.assets.loadMesh("quad",m);
};
var tusk_events_Event = function() {
};
$hxClasses["tusk.events.Event"] = tusk_events_Event;
tusk_events_Event.__name__ = ["tusk","events","Event"];
tusk_events_Event.prototype = {
	__class__: tusk_events_Event
};
var tusk_events_EventRouter = function() {
	this.handlers = new haxe_ds_EnumValueMap();
};
$hxClasses["tusk.events.EventRouter"] = tusk_events_EventRouter;
tusk_events_EventRouter.__name__ = ["tusk","events","EventRouter"];
tusk_events_EventRouter.prototype = {
	registerHandler: function(type,handler) {
		if(handler == null) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Event handler cannot be null!",null,null,{ fileName : "EventRouter.hx", lineNumber : 23, className : "tusk.events.EventRouter", methodName : "registerHandler"}));
		if(!this.handlers.exists(type)) this.handlers.set(type,[]);
		this.handlers.get(type).push(handler);
	}
	,onEvent: function(type,data) {
		if(!this.handlers.exists(type)) return;
		var handlerArray = this.handlers.get(type);
		var _g = 0;
		while(_g < handlerArray.length) {
			var handler = handlerArray[_g];
			++_g;
			handler(data);
		}
	}
	,__class__: tusk_events_EventRouter
};
var tusk_events_EventType = $hxClasses["tusk.events.EventType"] = { __ename__ : ["tusk","events","EventType"], __constructs__ : ["Load","Start","Update","Render","Destroy","KeyDown","KeyUp","MouseDown","MouseUp","MouseMove"] };
tusk_events_EventType.Load = ["Load",0];
tusk_events_EventType.Load.toString = $estr;
tusk_events_EventType.Load.__enum__ = tusk_events_EventType;
tusk_events_EventType.Start = ["Start",1];
tusk_events_EventType.Start.toString = $estr;
tusk_events_EventType.Start.__enum__ = tusk_events_EventType;
tusk_events_EventType.Update = ["Update",2];
tusk_events_EventType.Update.toString = $estr;
tusk_events_EventType.Update.__enum__ = tusk_events_EventType;
tusk_events_EventType.Render = ["Render",3];
tusk_events_EventType.Render.toString = $estr;
tusk_events_EventType.Render.__enum__ = tusk_events_EventType;
tusk_events_EventType.Destroy = ["Destroy",4];
tusk_events_EventType.Destroy.toString = $estr;
tusk_events_EventType.Destroy.__enum__ = tusk_events_EventType;
tusk_events_EventType.KeyDown = ["KeyDown",5];
tusk_events_EventType.KeyDown.toString = $estr;
tusk_events_EventType.KeyDown.__enum__ = tusk_events_EventType;
tusk_events_EventType.KeyUp = ["KeyUp",6];
tusk_events_EventType.KeyUp.toString = $estr;
tusk_events_EventType.KeyUp.__enum__ = tusk_events_EventType;
tusk_events_EventType.MouseDown = ["MouseDown",7];
tusk_events_EventType.MouseDown.toString = $estr;
tusk_events_EventType.MouseDown.__enum__ = tusk_events_EventType;
tusk_events_EventType.MouseUp = ["MouseUp",8];
tusk_events_EventType.MouseUp.toString = $estr;
tusk_events_EventType.MouseUp.__enum__ = tusk_events_EventType;
tusk_events_EventType.MouseMove = ["MouseMove",9];
tusk_events_EventType.MouseMove.toString = $estr;
tusk_events_EventType.MouseMove.__enum__ = tusk_events_EventType;
var tusk_events_KeyEvent = function(keyCode,scanCode,repeat,mod) {
	this.keyCode = keyCode;
	this.scanCode = scanCode;
	this.repeat = repeat;
	this.mod = mod;
	tusk_events_Event.call(this);
};
$hxClasses["tusk.events.KeyEvent"] = tusk_events_KeyEvent;
tusk_events_KeyEvent.__name__ = ["tusk","events","KeyEvent"];
tusk_events_KeyEvent.__super__ = tusk_events_Event;
tusk_events_KeyEvent.prototype = $extend(tusk_events_Event.prototype,{
	__class__: tusk_events_KeyEvent
});
var tusk_events_LoadEvent = function(scene) {
	this.scene = scene;
	tusk_events_Event.call(this);
};
$hxClasses["tusk.events.LoadEvent"] = tusk_events_LoadEvent;
tusk_events_LoadEvent.__name__ = ["tusk","events","LoadEvent"];
tusk_events_LoadEvent.__super__ = tusk_events_Event;
tusk_events_LoadEvent.prototype = $extend(tusk_events_Event.prototype,{
	__class__: tusk_events_LoadEvent
});
var tusk_events_MouseButtonEvent = function(x,y,button) {
	this.pos = glm__$Vec2_Vec2_$Impl_$._new(x,y);
	this.button = button;
	tusk_events_Event.call(this);
};
$hxClasses["tusk.events.MouseButtonEvent"] = tusk_events_MouseButtonEvent;
tusk_events_MouseButtonEvent.__name__ = ["tusk","events","MouseButtonEvent"];
tusk_events_MouseButtonEvent.__super__ = tusk_events_Event;
tusk_events_MouseButtonEvent.prototype = $extend(tusk_events_Event.prototype,{
	__class__: tusk_events_MouseButtonEvent
});
var tusk_events_MouseMoveEvent = function(x,y,xrel,yrel) {
	this.pos = glm__$Vec2_Vec2_$Impl_$._new(x,y);
	this.delta = glm__$Vec2_Vec2_$Impl_$._new(xrel,yrel);
	tusk_events_Event.call(this);
};
$hxClasses["tusk.events.MouseMoveEvent"] = tusk_events_MouseMoveEvent;
tusk_events_MouseMoveEvent.__name__ = ["tusk","events","MouseMoveEvent"];
tusk_events_MouseMoveEvent.__super__ = tusk_events_Event;
tusk_events_MouseMoveEvent.prototype = $extend(tusk_events_Event.prototype,{
	__class__: tusk_events_MouseMoveEvent
});
var tusk_events_RenderEvent = function(alpha) {
	this.alpha = alpha;
	tusk_events_Event.call(this);
};
$hxClasses["tusk.events.RenderEvent"] = tusk_events_RenderEvent;
tusk_events_RenderEvent.__name__ = ["tusk","events","RenderEvent"];
tusk_events_RenderEvent.__super__ = tusk_events_Event;
tusk_events_RenderEvent.prototype = $extend(tusk_events_Event.prototype,{
	__class__: tusk_events_RenderEvent
});
var tusk_events_UpdateEvent = function(dt) {
	this.dt = dt;
	tusk_events_Event.call(this);
};
$hxClasses["tusk.events.UpdateEvent"] = tusk_events_UpdateEvent;
tusk_events_UpdateEvent.__name__ = ["tusk","events","UpdateEvent"];
tusk_events_UpdateEvent.__super__ = tusk_events_Event;
tusk_events_UpdateEvent.prototype = $extend(tusk_events_Event.prototype,{
	__class__: tusk_events_UpdateEvent
});
var tusk_lib_comp_Camera2DComponent = function(min,max,near,far) {
	if(far == null) far = 100;
	if(near == null) near = -100;
	this.viewMatrixDirty = true;
	this.viewMatrix = glm__$Mat4_Mat4_$Impl_$._new(1.0);
	this.projectionMatrixDirty = true;
	this.projectionMatrix = glm__$Mat4_Mat4_$Impl_$._new(1.0);
	this.min = min;
	this.max = max;
	this.near = near;
	this.far = far;
	this.projectionMatrixDirty = true;
	this.viewMatrixDirty = true;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.Camera2DComponent"] = tusk_lib_comp_Camera2DComponent;
tusk_lib_comp_Camera2DComponent.__name__ = ["tusk","lib","comp","Camera2DComponent"];
tusk_lib_comp_Camera2DComponent.__super__ = tusk_Component;
tusk_lib_comp_Camera2DComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 11;
	}
	,__class__: tusk_lib_comp_Camera2DComponent
});
var tusk_lib_comp_CircleEffectComponent = function(circleIn) {
	this.circleIn = true;
	this.t = 0;
	this.circleIn = circleIn;
	tusk_PromiseComponent.call(this);
};
$hxClasses["tusk.lib.comp.CircleEffectComponent"] = tusk_lib_comp_CircleEffectComponent;
tusk_lib_comp_CircleEffectComponent.__name__ = ["tusk","lib","comp","CircleEffectComponent"];
tusk_lib_comp_CircleEffectComponent.__super__ = tusk_PromiseComponent;
tusk_lib_comp_CircleEffectComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	get__tid: function() {
		return 4;
	}
	,__class__: tusk_lib_comp_CircleEffectComponent
});
var tusk_lib_comp_CustomUniformsComponent = function(setUniforms) {
	this.setUniforms = setUniforms;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.CustomUniformsComponent"] = tusk_lib_comp_CustomUniformsComponent;
tusk_lib_comp_CustomUniformsComponent.__name__ = ["tusk","lib","comp","CustomUniformsComponent"];
tusk_lib_comp_CustomUniformsComponent.__super__ = tusk_Component;
tusk_lib_comp_CustomUniformsComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 12;
	}
	,__class__: tusk_lib_comp_CustomUniformsComponent
});
var tusk_lib_comp_MaterialComponent = function(path,material) {
	if(material == null) this.path = path; else this.path = material.path;
	this.material = material;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.MaterialComponent"] = tusk_lib_comp_MaterialComponent;
tusk_lib_comp_MaterialComponent.__name__ = ["tusk","lib","comp","MaterialComponent"];
tusk_lib_comp_MaterialComponent.__super__ = tusk_Component;
tusk_lib_comp_MaterialComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 9;
	}
	,__class__: tusk_lib_comp_MaterialComponent
});
var tusk_lib_comp_MeshComponent = function(path,mesh) {
	this.bufferDirty = true;
	this.vertexBuffer = null;
	if(mesh == null) this.path = path; else this.path = mesh.path;
	this.mesh = mesh;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.MeshComponent"] = tusk_lib_comp_MeshComponent;
tusk_lib_comp_MeshComponent.__name__ = ["tusk","lib","comp","MeshComponent"];
tusk_lib_comp_MeshComponent.__super__ = tusk_Component;
tusk_lib_comp_MeshComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 8;
	}
	,__class__: tusk_lib_comp_MeshComponent
});
var tusk_lib_comp_SoundComponent = function(path,play) {
	this.path = "";
	this.playing = false;
	this.stop = false;
	this.play = false;
	this.path = path;
	this.play = play;
	tusk_PromiseComponent.call(this);
};
$hxClasses["tusk.lib.comp.SoundComponent"] = tusk_lib_comp_SoundComponent;
tusk_lib_comp_SoundComponent.__name__ = ["tusk","lib","comp","SoundComponent"];
tusk_lib_comp_SoundComponent.__super__ = tusk_PromiseComponent;
tusk_lib_comp_SoundComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	get__tid: function() {
		return 7;
	}
	,__class__: tusk_lib_comp_SoundComponent
});
var tusk_lib_comp_TextAlign = $hxClasses["tusk.lib.comp.TextAlign"] = { __ename__ : ["tusk","lib","comp","TextAlign"], __constructs__ : ["Left","Centre","Right"] };
tusk_lib_comp_TextAlign.Left = ["Left",0];
tusk_lib_comp_TextAlign.Left.toString = $estr;
tusk_lib_comp_TextAlign.Left.__enum__ = tusk_lib_comp_TextAlign;
tusk_lib_comp_TextAlign.Centre = ["Centre",1];
tusk_lib_comp_TextAlign.Centre.toString = $estr;
tusk_lib_comp_TextAlign.Centre.__enum__ = tusk_lib_comp_TextAlign;
tusk_lib_comp_TextAlign.Right = ["Right",2];
tusk_lib_comp_TextAlign.Right.toString = $estr;
tusk_lib_comp_TextAlign.Right.__enum__ = tusk_lib_comp_TextAlign;
var tusk_lib_comp_TextVerticalAlign = $hxClasses["tusk.lib.comp.TextVerticalAlign"] = { __ename__ : ["tusk","lib","comp","TextVerticalAlign"], __constructs__ : ["Top","Centre","Bottom"] };
tusk_lib_comp_TextVerticalAlign.Top = ["Top",0];
tusk_lib_comp_TextVerticalAlign.Top.toString = $estr;
tusk_lib_comp_TextVerticalAlign.Top.__enum__ = tusk_lib_comp_TextVerticalAlign;
tusk_lib_comp_TextVerticalAlign.Centre = ["Centre",1];
tusk_lib_comp_TextVerticalAlign.Centre.toString = $estr;
tusk_lib_comp_TextVerticalAlign.Centre.__enum__ = tusk_lib_comp_TextVerticalAlign;
tusk_lib_comp_TextVerticalAlign.Bottom = ["Bottom",2];
tusk_lib_comp_TextVerticalAlign.Bottom.toString = $estr;
tusk_lib_comp_TextVerticalAlign.Bottom.__enum__ = tusk_lib_comp_TextVerticalAlign;
var tusk_lib_comp_TextComponent = function(font,text,align,valign,colour) {
	this.textDirty = true;
	this.text = "";
	this.font = font;
	this.set_text(text);
	if(align == null) this.align = tusk_lib_comp_TextAlign.Left; else this.align = align;
	if(valign == null) this.valign = tusk_lib_comp_TextVerticalAlign.Top; else this.valign = valign;
	if(colour == null) this.colour = glm__$Vec4_Vec4_$Impl_$._new(0,0,0,1); else this.colour = colour;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.TextComponent"] = tusk_lib_comp_TextComponent;
tusk_lib_comp_TextComponent.__name__ = ["tusk","lib","comp","TextComponent"];
tusk_lib_comp_TextComponent.__super__ = tusk_Component;
tusk_lib_comp_TextComponent.prototype = $extend(tusk_Component.prototype,{
	set_text: function(t) {
		this.textDirty = true;
		return this.text = t;
	}
	,get__tid: function() {
		return 1;
	}
	,__class__: tusk_lib_comp_TextComponent
});
var tusk_lib_comp_TimedPromiseComponent = function(wait) {
	this.wait = 0;
	this.t = 0;
	this.wait = wait;
	tusk_PromiseComponent.call(this);
};
$hxClasses["tusk.lib.comp.TimedPromiseComponent"] = tusk_lib_comp_TimedPromiseComponent;
tusk_lib_comp_TimedPromiseComponent.__name__ = ["tusk","lib","comp","TimedPromiseComponent"];
tusk_lib_comp_TimedPromiseComponent.__super__ = tusk_PromiseComponent;
tusk_lib_comp_TimedPromiseComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	get__tid: function() {
		return 6;
	}
	,__class__: tusk_lib_comp_TimedPromiseComponent
});
var tusk_lib_comp_TransformComponent = function(position,rotation,scale) {
	this.modelMatrix = glm__$Mat4_Mat4_$Impl_$._new(1.0);
	this.lastScale = glm__$Vec3_Vec3_$Impl_$._new(1.0);
	this.lastRotation = (function($this) {
		var $r;
		var q = glm__$Quat_Quat_$Impl_$._new();
		{
			q[0] = 1;
			q[1] = 0;
			q[2] = 0;
			q[3] = 0;
			q;
		}
		$r = q;
		return $r;
	}(this));
	this.lastPosition = glm__$Vec3_Vec3_$Impl_$._new(0.0);
	this.scale = glm__$Vec3_Vec3_$Impl_$._new(1.0);
	this.rotation = (function($this) {
		var $r;
		var q = glm__$Quat_Quat_$Impl_$._new();
		{
			q[0] = 1;
			q[1] = 0;
			q[2] = 0;
			q[3] = 0;
			q;
		}
		$r = q;
		return $r;
	}(this));
	this.position = glm__$Vec3_Vec3_$Impl_$._new(0.0);
	if(position != null) this.position = position;
	if(rotation != null) this.rotation = rotation;
	if(scale != null) this.scale = scale;
	this.lastPosition = this.position;
	this.lastRotation = this.rotation;
	this.lastScale = this.scale;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.TransformComponent"] = tusk_lib_comp_TransformComponent;
tusk_lib_comp_TransformComponent.__name__ = ["tusk","lib","comp","TransformComponent"];
tusk_lib_comp_TransformComponent.__super__ = tusk_Component;
tusk_lib_comp_TransformComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 5;
	}
	,__class__: tusk_lib_comp_TransformComponent
});
var tusk_lib_proc_Camera2DProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(11).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.Camera2DProcessor"] = tusk_lib_proc_Camera2DProcessor;
tusk_lib_proc_Camera2DProcessor.__name__ = ["tusk","lib","proc","Camera2DProcessor"];
tusk_lib_proc_Camera2DProcessor.__super__ = tusk_Processor;
tusk_lib_proc_Camera2DProcessor.prototype = $extend(tusk_Processor.prototype,{
	onEntityChanged: function(entity,event) {
		var added;
		switch(event[1]) {
		case 0:
			added = true;
			break;
		case 2:
			var c = event[2];
			added = c.get__tid() == 11;
			break;
		case 1:
			added = false;
			break;
		case 3:
			var c1 = event[2];
			added = false;
			break;
		}
		if(added) tusk_lib_proc_Camera2DProcessor.cameras.push(entity.get(11)); else {
			var x = entity.get(11);
			HxOverrides.remove(tusk_lib_proc_Camera2DProcessor.cameras,x);
		}
	}
	,onUpdate: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var camera = entity.get(11);
			var transform = entity.get(5);
			if(camera.projectionMatrixDirty) {
				camera.projectionMatrix = glm_Projection.ortho(glm__$Vec2_Vec2_$Impl_$.get_x(camera.min),glm__$Vec2_Vec2_$Impl_$.get_x(camera.max),glm__$Vec2_Vec2_$Impl_$.get_y(camera.min),glm__$Vec2_Vec2_$Impl_$.get_y(camera.max),camera.near,camera.far);
				camera.projectionMatrixDirty = false;
			}
			if(camera.viewMatrixDirty) {
				var a = glm_GLM.translate(null,glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(transform.position),-1));
				var b;
				var v = glm__$Mat3_Mat3_$Impl_$.fromQuat(transform.rotation);
				var r = glm__$Mat4_Mat4_$Impl_$.fromRows(glm__$Vec4_Vec4_$Impl_$._new(v[0][0],v[0][1],v[0][2],0),glm__$Vec4_Vec4_$Impl_$._new(v[1][0],v[1][1],v[1][2],0),glm__$Vec4_Vec4_$Impl_$._new(v[2][0],v[2][1],v[2][2],0),glm__$Vec4_Vec4_$Impl_$._new(0,0,0,1));
				b = r;
				var rows = [(function($this) {
					var $r;
					var a1;
					{
						var a2;
						var a3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),a[0][0]);
						var b3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),a[0][1]);
						a2 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a3),b3);
						var b2 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),a[0][2]);
						a1 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a2),b2);
					}
					var b1 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),a[0][3]);
					$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a1),b1);
					return $r;
				}(this)),(function($this) {
					var $r;
					var a4;
					{
						var a5;
						var a6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),a[1][0]);
						var b6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),a[1][1]);
						a5 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a6),b6);
						var b5 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),a[1][2]);
						a4 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a5),b5);
					}
					var b4 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),a[1][3]);
					$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a4),b4);
					return $r;
				}(this)),(function($this) {
					var $r;
					var a7;
					{
						var a8;
						var a9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),a[2][0]);
						var b9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),a[2][1]);
						a8 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a9),b9);
						var b8 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),a[2][2]);
						a7 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a8),b8);
					}
					var b7 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),a[2][3]);
					$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a7),b7);
					return $r;
				}(this)),(function($this) {
					var $r;
					var a10;
					{
						var a11;
						var a12 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),a[3][0]);
						var b12 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),a[3][1]);
						a11 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a12),b12);
						var b11 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),a[3][2]);
						a10 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a11),b11);
					}
					var b10 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),a[3][3]);
					$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a10),b10);
					return $r;
				}(this))];
				a = rows;
				camera.viewMatrix = a;
				camera.viewMatrixDirty = false;
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: tusk_lib_proc_Camera2DProcessor
});
var tusk_lib_proc_CircleEffectRendererProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(9).include(8).include(4).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.CircleEffectRendererProcessor"] = tusk_lib_proc_CircleEffectRendererProcessor;
tusk_lib_proc_CircleEffectRendererProcessor.__name__ = ["tusk","lib","proc","CircleEffectRendererProcessor"];
tusk_lib_proc_CircleEffectRendererProcessor.__super__ = tusk_Processor;
tusk_lib_proc_CircleEffectRendererProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var circleEffect = entity.get(4);
			circleEffect.t += data.dt;
			if(circleEffect.t >= 1.0 && !circleEffect.done._resolved) circleEffect.finish();
		}
	}
	,onRender: function(data) {
		var _g = 0;
		var _g1 = tusk_lib_proc_Camera2DProcessor.cameras;
		while(_g < _g1.length) {
			var camera = [_g1[_g]];
			++_g;
			var _g2 = 0;
			var _g3 = this.entities;
			while(_g2 < _g3.length) {
				var entity = _g3[_g2];
				++_g2;
				var transform = [entity.get(5)];
				var mesh = entity.get(8);
				var material = [entity.get(9)];
				var circleEffect = [entity.get(4)];
				if(mesh.mesh == null) continue;
				material[0].material.onRender((function(circleEffect,material,transform,camera) {
					return function(mat) {
						mat.setMat4("projection",camera[0].projectionMatrix);
						mat.setMat4("view",camera[0].viewMatrix);
						mat.setMat4("model",transform[0].modelMatrix);
						material[0].material.setVec2("resolutionCenter",(function($this) {
							var $r;
							var a = glm__$Vec2_Vec2_$Impl_$._new(tusk_Tusk.instance.app.window.width,tusk_Tusk.instance.app.window.height);
							$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),2.0);
							return $r;
						}(this)));
						material[0].material.setFloat("circleDistance",tusk_math_Ease.InOutCubic(circleEffect[0].circleIn?circleEffect[0].t:1.0 - circleEffect[0].t,0,1024,1.0));
					};
				})(circleEffect,material,transform,camera),mesh.vertexBuffer,mesh.mesh.vertices.length);
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
		tusk_Tusk.routeEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,__class__: tusk_lib_proc_CircleEffectRendererProcessor
});
var tusk_lib_proc_MaterialProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(9);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.MaterialProcessor"] = tusk_lib_proc_MaterialProcessor;
tusk_lib_proc_MaterialProcessor.__name__ = ["tusk","lib","proc","MaterialProcessor"];
tusk_lib_proc_MaterialProcessor.__super__ = tusk_Processor;
tusk_lib_proc_MaterialProcessor.prototype = $extend(tusk_Processor.prototype,{
	onEntityChanged: function(entity,event) {
		var add;
		switch(event[1]) {
		case 0:
			add = true;
			break;
		case 2:
			add = true;
			break;
		default:
			add = false;
		}
		if(add) {
			var mc = entity.get(9);
			if(mc.material == null) mc.material = tusk_Tusk.assets.getMaterial(mc.path);
		}
	}
	,___connectRoutes: function() {
		null;
	}
	,__class__: tusk_lib_proc_MaterialProcessor
});
var tusk_lib_proc_MeshProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(8).include(9);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.MeshProcessor"] = tusk_lib_proc_MeshProcessor;
tusk_lib_proc_MeshProcessor.__name__ = ["tusk","lib","proc","MeshProcessor"];
tusk_lib_proc_MeshProcessor.__super__ = tusk_Processor;
tusk_lib_proc_MeshProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var mesh = entity.get(8);
			var mat = entity.get(9);
			if(mesh.mesh == null) mesh.mesh = tusk_Tusk.assets.getMesh(mesh.path);
			if(mesh.bufferDirty || mesh.vertexBuffer == null) {
				mesh.vertexBuffer = snow_modules_opengl_web_GL.current_context.createBuffer();
				snow_modules_opengl_web_GL.current_context.bindBuffer(34962,mesh.vertexBuffer);
				var data = [];
				var _g3 = 0;
				var _g2 = mesh.mesh.vertices.length;
				while(_g3 < _g2) {
					var i = _g3++;
					if((mat.material.attributeFlags & 1 << tusk_resources_AttributeTypes.Pos3[1]) != 0) {
						data.push(glm__$Vec3_Vec3_$Impl_$.get_x(mesh.mesh.vertices[i]));
						data.push(glm__$Vec3_Vec3_$Impl_$.get_y(mesh.mesh.vertices[i]));
						data.push(glm__$Vec3_Vec3_$Impl_$.get_z(mesh.mesh.vertices[i]));
					}
					if((mat.material.attributeFlags & 1 << tusk_resources_AttributeTypes.UV[1]) != 0) {
						data.push(glm__$Vec2_Vec2_$Impl_$.get_x(mesh.mesh.uvs[i]));
						data.push(glm__$Vec2_Vec2_$Impl_$.get_y(mesh.mesh.uvs[i]));
					}
					if((mat.material.attributeFlags & 1 << tusk_resources_AttributeTypes.Colour4[1]) != 0) {
						data.push(glm__$Vec4_Vec4_$Impl_$.get_r(mesh.mesh.colours[i]));
						data.push(glm__$Vec4_Vec4_$Impl_$.get_g(mesh.mesh.colours[i]));
						data.push(glm__$Vec4_Vec4_$Impl_$.get_b(mesh.mesh.colours[i]));
						data.push(glm__$Vec4_Vec4_$Impl_$.get_a(mesh.mesh.colours[i]));
					}
				}
				snow_modules_opengl_web_GL.bufferData(34962,(function($this) {
					var $r;
					var this1;
					if(data != null) this1 = new Float32Array(data); else this1 = null;
					$r = this1;
					return $r;
				}(this)),35044);
				snow_modules_opengl_web_GL.current_context.bindBuffer(34962,null);
				mesh.bufferDirty = false;
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: tusk_lib_proc_MeshProcessor
});
var tusk_lib_proc_Renderer2DProcessor = function(clearColour,entities) {
	this.clearColour = glm__$Vec4_Vec4_$Impl_$._new(1.0,1.0,1.0,1.0);
	if(clearColour != null) this.clearColour = clearColour;
	this.matcher = new tusk_Matcher().include(9).include(8).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.Renderer2DProcessor"] = tusk_lib_proc_Renderer2DProcessor;
tusk_lib_proc_Renderer2DProcessor.__name__ = ["tusk","lib","proc","Renderer2DProcessor"];
tusk_lib_proc_Renderer2DProcessor.__super__ = tusk_Processor;
tusk_lib_proc_Renderer2DProcessor.prototype = $extend(tusk_Processor.prototype,{
	onRender: function(event) {
		this.entities.sort(function(a,b) {
			var ta = a.get(5);
			var tb = b.get(5);
			if(glm__$Vec3_Vec3_$Impl_$.get_z(ta.position) == glm__$Vec3_Vec3_$Impl_$.get_z(tb.position)) return 0;
			if(glm__$Vec3_Vec3_$Impl_$.get_z(ta.position) < glm__$Vec3_Vec3_$Impl_$.get_z(tb.position)) return 1; else return -1;
		});
		snow_modules_opengl_web_GL.current_context.disable(2929);
		snow_modules_opengl_web_GL.current_context.enable(3042);
		snow_modules_opengl_web_GL.current_context.depthFunc(513);
		snow_modules_opengl_web_GL.current_context.viewport(0,0,tusk_Tusk.instance.app.window.width,tusk_Tusk.instance.app.window.height);
		snow_modules_opengl_web_GL.clearColor(glm__$Vec4_Vec4_$Impl_$.get_r(this.clearColour),glm__$Vec4_Vec4_$Impl_$.get_g(this.clearColour),glm__$Vec4_Vec4_$Impl_$.get_b(this.clearColour),glm__$Vec4_Vec4_$Impl_$.get_a(this.clearColour));
		snow_modules_opengl_web_GL.current_context.clear(16640);
		var _g = 0;
		var _g1 = tusk_lib_proc_Camera2DProcessor.cameras;
		while(_g < _g1.length) {
			var camera = [_g1[_g]];
			++_g;
			var _g2 = 0;
			var _g3 = this.entities;
			while(_g2 < _g3.length) {
				var entity = [_g3[_g2]];
				++_g2;
				var transform = [entity[0].get(5)];
				var mesh = entity[0].get(8);
				var material = entity[0].get(9);
				if(mesh.mesh == null || mesh.vertexBuffer == null) continue;
				material.material.onRender((function(transform,entity,camera) {
					return function(mat) {
						mat.setMat4("projection",camera[0].projectionMatrix);
						mat.setMat4("view",camera[0].viewMatrix);
						mat.setMat4("model",transform[0].modelMatrix);
						if(mat.textures != null && mat.textures.length > 0) mat.setTexture("texture",0);
						if(entity[0].hasType(1)) {
							var tc = entity[0].get(1);
							mat.setVec4("colour",tc.colour);
						}
						if(entity[0].hasType(12)) {
							var customUniforms = entity[0].get(12);
							customUniforms.setUniforms();
						}
					};
				})(transform,entity,camera),mesh.vertexBuffer,mesh.mesh.vertices.length);
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,__class__: tusk_lib_proc_Renderer2DProcessor
});
var tusk_lib_proc_SoundProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(7);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.SoundProcessor"] = tusk_lib_proc_SoundProcessor;
tusk_lib_proc_SoundProcessor.__name__ = ["tusk","lib","proc","SoundProcessor"];
tusk_lib_proc_SoundProcessor.__super__ = tusk_Processor;
tusk_lib_proc_SoundProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var s = [entity.get(7)];
			if(!s[0].playing && s[0].play) {
				var sound = tusk_Tusk.assets.getSound(s[0].path);
				tusk_Tusk.sound.play(sound);
				sound.set_onEnd((function(s) {
					return function() {
						s[0].playing = false;
						s[0].finish();
					};
				})(s));
				s[0].play = false;
				s[0].playing = true;
			} else if(s[0].playing && s[0].stop) {
				var sound1 = tusk_Tusk.assets.getSound(s[0].path);
				tusk_Tusk.sound.stop(sound1);
				s[0].stop = false;
				s[0].playing = false;
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: tusk_lib_proc_SoundProcessor
});
var tusk_lib_proc_TextProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(8).include(1);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.TextProcessor"] = tusk_lib_proc_TextProcessor;
tusk_lib_proc_TextProcessor.__name__ = ["tusk","lib","proc","TextProcessor"];
tusk_lib_proc_TextProcessor.__super__ = tusk_Processor;
tusk_lib_proc_TextProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var text = entity.get(1);
			if(text.textDirty) {
				var mesh = entity.get(8);
				mesh.bufferDirty = true;
				if(mesh.mesh == null) mesh.mesh = tusk_Tusk.assets.getMesh(mesh.path);
				mesh.mesh.vertices = [];
				mesh.mesh.uvs = [];
				var lines = text.text.split("\n");
				var offsets = [];
				var yPos = 0;
				var _g2 = 0;
				while(_g2 < lines.length) {
					var line = lines[_g2];
					++_g2;
					var textWidth = 0;
					var _g4 = 0;
					var _g3 = line.length;
					while(_g4 < _g3) {
						var i = _g4++;
						var code = HxOverrides.cca(line,i);
						var $char = text.font.chars.h[code];
						textWidth += $char.xAdvance;
					}
					offsets.push((function($this) {
						var $r;
						var _g31 = text.align;
						$r = (function($this) {
							var $r;
							switch(_g31[1]) {
							case 0:
								$r = 0;
								break;
							case 2:
								$r = -textWidth;
								break;
							case 1:
								$r = -textWidth / 2.0;
								break;
							}
							return $r;
						}($this));
						return $r;
					}(this)));
				}
				var yPos1;
				var _g21 = text.valign;
				switch(_g21[1]) {
				case 0:
					yPos1 = 0;
					break;
				case 2:
					yPos1 = lines.length * text.font.baseLine;
					break;
				case 1:
					yPos1 = lines.length * text.font.baseLine / 2.0;
					break;
				}
				var _g32 = 0;
				var _g22 = lines.length;
				while(_g32 < _g22) {
					var j = _g32++;
					var line1 = lines[j];
					var xPos = offsets[j];
					var yTop = yPos1 + text.font.baseLine;
					var _g5 = 0;
					var _g41 = line1.length;
					while(_g5 < _g41) {
						var i1 = _g5++;
						var code1 = HxOverrides.cca(line1,i1);
						var char1 = text.font.chars.h[code1];
						var offset = glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(char1.offset),yTop - glm__$Vec2_Vec2_$Impl_$.get_y(char1.size) - glm__$Vec2_Vec2_$Impl_$.get_y(char1.offset),0);
						mesh.mesh.vertices.push((function($this) {
							var $r;
							var a = glm__$Vec3_Vec3_$Impl_$._new(xPos,yPos1);
							$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a),offset);
							return $r;
						}(this)));
						mesh.mesh.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(char1.minUV),glm__$Vec2_Vec2_$Impl_$.get_y(char1.maxUV)));
						mesh.mesh.vertices.push((function($this) {
							var $r;
							var a1 = glm__$Vec3_Vec3_$Impl_$._new(xPos + glm__$Vec2_Vec2_$Impl_$.get_x(char1.size),yPos1);
							$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a1),offset);
							return $r;
						}(this)));
						mesh.mesh.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(char1.maxUV),glm__$Vec2_Vec2_$Impl_$.get_y(char1.maxUV)));
						mesh.mesh.vertices.push((function($this) {
							var $r;
							var a2 = glm__$Vec3_Vec3_$Impl_$._new(xPos + glm__$Vec2_Vec2_$Impl_$.get_x(char1.size),yPos1 + glm__$Vec2_Vec2_$Impl_$.get_y(char1.size));
							$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a2),offset);
							return $r;
						}(this)));
						mesh.mesh.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(char1.maxUV),glm__$Vec2_Vec2_$Impl_$.get_y(char1.minUV)));
						mesh.mesh.vertices.push((function($this) {
							var $r;
							var a3 = glm__$Vec3_Vec3_$Impl_$._new(xPos + glm__$Vec2_Vec2_$Impl_$.get_x(char1.size),yPos1 + glm__$Vec2_Vec2_$Impl_$.get_y(char1.size));
							$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a3),offset);
							return $r;
						}(this)));
						mesh.mesh.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(char1.maxUV),glm__$Vec2_Vec2_$Impl_$.get_y(char1.minUV)));
						mesh.mesh.vertices.push((function($this) {
							var $r;
							var a4 = glm__$Vec3_Vec3_$Impl_$._new(xPos,yPos1 + glm__$Vec2_Vec2_$Impl_$.get_y(char1.size));
							$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a4),offset);
							return $r;
						}(this)));
						mesh.mesh.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(char1.minUV),glm__$Vec2_Vec2_$Impl_$.get_y(char1.minUV)));
						mesh.mesh.vertices.push((function($this) {
							var $r;
							var a5 = glm__$Vec3_Vec3_$Impl_$._new(xPos,yPos1);
							$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a5),offset);
							return $r;
						}(this)));
						mesh.mesh.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(char1.minUV),glm__$Vec2_Vec2_$Impl_$.get_y(char1.maxUV)));
						xPos += char1.xAdvance;
					}
					yPos1 -= text.font.baseLine;
				}
				text.textDirty = false;
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: tusk_lib_proc_TextProcessor
});
var tusk_lib_proc_TimedPromiseProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(6);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.TimedPromiseProcessor"] = tusk_lib_proc_TimedPromiseProcessor;
tusk_lib_proc_TimedPromiseProcessor.__name__ = ["tusk","lib","proc","TimedPromiseProcessor"];
tusk_lib_proc_TimedPromiseProcessor.__super__ = tusk_Processor;
tusk_lib_proc_TimedPromiseProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(6);
			t.t += data.dt;
			if(t.t >= t.wait && !t.done._resolved) t.finish();
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: tusk_lib_proc_TimedPromiseProcessor
});
var tusk_lib_proc_TransformProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.TransformProcessor"] = tusk_lib_proc_TransformProcessor;
tusk_lib_proc_TransformProcessor.__name__ = ["tusk","lib","proc","TransformProcessor"];
tusk_lib_proc_TransformProcessor.__super__ = tusk_Processor;
tusk_lib_proc_TransformProcessor.prototype = $extend(tusk_Processor.prototype,{
	onRender: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var a = glm_GLM.translate(null,tusk_math_Lerp.LerpV3(t.lastPosition,t.position,data.alpha));
			var b = glm_GLM.scale(null,tusk_math_Lerp.LerpV3(t.lastScale,t.scale,data.alpha));
			var rows = [(function($this) {
				var $r;
				var a1;
				{
					var a2;
					var a3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),a[0][0]);
					var b3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),a[0][1]);
					a2 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a3),b3);
					var b2 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),a[0][2]);
					a1 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a2),b2);
				}
				var b1 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),a[0][3]);
				$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a1),b1);
				return $r;
			}(this)),(function($this) {
				var $r;
				var a4;
				{
					var a5;
					var a6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),a[1][0]);
					var b6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),a[1][1]);
					a5 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a6),b6);
					var b5 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),a[1][2]);
					a4 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a5),b5);
				}
				var b4 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),a[1][3]);
				$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a4),b4);
				return $r;
			}(this)),(function($this) {
				var $r;
				var a7;
				{
					var a8;
					var a9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),a[2][0]);
					var b9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),a[2][1]);
					a8 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a9),b9);
					var b8 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),a[2][2]);
					a7 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a8),b8);
				}
				var b7 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),a[2][3]);
				$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a7),b7);
				return $r;
			}(this)),(function($this) {
				var $r;
				var a10;
				{
					var a11;
					var a12 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),a[3][0]);
					var b12 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),a[3][1]);
					a11 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a12),b12);
					var b11 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),a[3][2]);
					a10 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a11),b11);
				}
				var b10 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),a[3][3]);
				$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a10),b10);
				return $r;
			}(this))];
			a = rows;
			t.modelMatrix = a;
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,__class__: tusk_lib_proc_TransformProcessor
});
var tusk_math_Ease = function() { };
$hxClasses["tusk.math.Ease"] = tusk_math_Ease;
tusk_math_Ease.__name__ = ["tusk","math","Ease"];
tusk_math_Ease.InOutCubic = function(t,b,c,d) {
	if((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	return c / 2 * ((t -= 2) * t * t + 2) + b;
};
var tusk_math_Lerp = function() { };
$hxClasses["tusk.math.Lerp"] = tusk_math_Lerp;
tusk_math_Lerp.__name__ = ["tusk","math","Lerp"];
tusk_math_Lerp.LerpF = function(a,b,t) {
	return a + t * (b - a);
};
tusk_math_Lerp.LerpV3 = function(a,b,t) {
	glm__$Vec3_Vec3_$Impl_$.set_x(a,tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_x(a),glm__$Vec3_Vec3_$Impl_$.get_x(b),t));
	glm__$Vec3_Vec3_$Impl_$.set_y(a,tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_y(a),glm__$Vec3_Vec3_$Impl_$.get_y(b),t));
	glm__$Vec3_Vec3_$Impl_$.set_z(a,tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_z(a),glm__$Vec3_Vec3_$Impl_$.get_z(b),t));
	return a;
};
var tusk_math_MathTools = function() { };
$hxClasses["tusk.math.MathTools"] = tusk_math_MathTools;
tusk_math_MathTools.__name__ = ["tusk","math","MathTools"];
tusk_math_MathTools.clamp = function(x,min,max) {
	return Math.min(max,Math.max(min,x));
};
var tusk_modules_Assets = function() {
	this.assets = new haxe_ds_StringMap();
};
$hxClasses["tusk.modules.Assets"] = tusk_modules_Assets;
tusk_modules_Assets.__name__ = ["tusk","modules","Assets"];
tusk_modules_Assets.__interfaces__ = [partials_Partial];
tusk_modules_Assets.prototype = {
	isLoaded: function(path) {
		var exists = this.assets.exists(path);
		return exists;
	}
	,loadTexture: function(path,bytes) {
		var _g = this;
		var def = new promhx_Deferred();
		var promise = def.promise();
		if(this.isLoaded(path)) {
			def.resolve(this.getTexture(path));
			return promise;
		}
		var snowPromise;
		if(bytes == null) snowPromise = snow_system_assets_AssetImage.load(tusk_Tusk.instance.app.assets,path); else snowPromise = tusk_Tusk.instance.app.assets.image_from_bytes(path,new Uint8Array(bytes.b.bufferValue));
		snowPromise.then(function(image) {
			var texture = new tusk_resources_Texture(path,image);
			_g.assets.set(path,texture);
			def.resolve(texture);
		},function(image1) {
			def.throwError(new tusk_debug_Exception("Unable to load texture '" + path + "'!",null,tusk_debug_ExceptionType.FileNotFound,{ fileName : "Textures.hx", lineNumber : 39, className : "tusk.modules.Assets", methodName : "loadTexture"}));
		});
		return promise;
	}
	,getTexture: function(path) {
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Texture '" + path + "' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Textures.hx", lineNumber : 58, className : "tusk.modules.Assets", methodName : "getTexture"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Texture);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '" + path + "' isn't a texture!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Textures.hx", lineNumber : 64, className : "tusk.modules.Assets", methodName : "getTexture"}));
			} else throw(e);
		}
	}
	,loadSound: function(path) {
		var _g = this;
		var def = new promhx_Deferred();
		var promise = def.promise();
		if(this.isLoaded(path)) {
			def.resolve(this.getSound(path));
			return promise;
		}
		tusk_Tusk.sound.load(path,function(snd) {
			var sound = new tusk_resources_Sound(path,snd);
			_g.assets.set(path,sound);
			def.resolve(sound);
		},function(snd1) {
			def.throwError(new tusk_debug_Exception("Unable to load sound '" + path + "'!",null,tusk_debug_ExceptionType.FileNotFound,{ fileName : "Sounds.hx", lineNumber : 29, className : "tusk.modules.Assets", methodName : "loadSound"}));
		});
		return promise;
	}
	,getSound: function(path) {
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Sound '" + path + "' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Sounds.hx", lineNumber : 48, className : "tusk.modules.Assets", methodName : "getSound"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Sound);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '" + path + "' isn't a sound!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Sounds.hx", lineNumber : 54, className : "tusk.modules.Assets", methodName : "getSound"}));
			} else throw(e);
		}
	}
	,loadMaterial: function(path,material) {
		var def = new promhx_Deferred();
		var promise = def.promise();
		if(material != null) {
			this.assets.set(path,material);
			def.resolve(material);
			return promise;
		}
		throw new js__$Boot_HaxeError(new tusk_debug_Exception(null,null,tusk_debug_ExceptionType.NotImplementedYet,{ fileName : "Materials.hx", lineNumber : 18, className : "tusk.modules.Assets", methodName : "loadMaterial"}));
	}
	,getMaterial: function(path) {
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Material '" + path + "' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Materials.hx", lineNumber : 23, className : "tusk.modules.Assets", methodName : "getMaterial"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Material);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '" + path + "' isn't a material!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Materials.hx", lineNumber : 29, className : "tusk.modules.Assets", methodName : "getMaterial"}));
			} else throw(e);
		}
	}
	,loadMesh: function(path,mesh) {
		var def = new promhx_Deferred();
		var promise = def.promise();
		if(mesh != null) {
			this.assets.set(path,mesh);
			def.resolve(mesh);
			return promise;
		}
		throw new js__$Boot_HaxeError(new tusk_debug_Exception(null,null,tusk_debug_ExceptionType.NotImplementedYet,{ fileName : "Meshes.hx", lineNumber : 18, className : "tusk.modules.Assets", methodName : "loadMesh"}));
	}
	,getMesh: function(path) {
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Mesh '" + path + "' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Meshes.hx", lineNumber : 23, className : "tusk.modules.Assets", methodName : "getMesh"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Mesh);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '" + path + "' isn't a mesh!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Meshes.hx", lineNumber : 29, className : "tusk.modules.Assets", methodName : "getMesh"}));
			} else throw(e);
		}
	}
	,loadFont: function(path,fntContents,texture) {
		var _g = this;
		var def = new promhx_Deferred();
		var promise = def.promise();
		if(this.isLoaded(path)) {
			def.resolve(this.getFont(path));
			return promise;
		}
		var snowPromise;
		if(fntContents == null) snowPromise = snow_system_assets_AssetText.load(tusk_Tusk.instance.app.assets,path); else snowPromise = new snow_api_Promise(function(resolve,reject) {
			resolve(fntContents);
		});
		snowPromise.then(function(contents) {
			tusk_resources_Font.load(path,contents,texture).then(function(font) {
				_g.assets.set(path,font);
				def.resolve(font);
			}).catchError(function(err) {
				throw new js__$Boot_HaxeError(err);
			});
		},function(contents1) {
			def.throwError(new tusk_debug_Exception("Unable to load font '" + path + "'!",null,tusk_debug_ExceptionType.FileNotFound,{ fileName : "Fonts.hx", lineNumber : 43, className : "tusk.modules.Assets", methodName : "loadFont"}));
		});
		return promise;
	}
	,getFont: function(path) {
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Font '" + path + "' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Fonts.hx", lineNumber : 55, className : "tusk.modules.Assets", methodName : "getFont"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Font);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '" + path + "' isn't a font!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Fonts.hx", lineNumber : 61, className : "tusk.modules.Assets", methodName : "getFont"}));
			} else throw(e);
		}
	}
	,loadText: function(path,contents) {
		var _g = this;
		var def = new promhx_Deferred();
		var promise = def.promise();
		if(this.isLoaded(path)) {
			def.resolve(this.getText(path));
			return promise;
		}
		var snowPromise;
		if(contents == null) snowPromise = snow_system_assets_AssetText.load(tusk_Tusk.instance.app.assets,path); else snowPromise = new snow_api_Promise(function(resolve,reject) {
			resolve(contents);
		});
		snowPromise.then(function(snowText) {
			var text = new tusk_resources_Text(path,snowText.text);
			_g.assets.set(path,text);
			def.resolve(text);
		},function(contents1) {
			def.throwError(new tusk_debug_Exception("Unable to load text '" + path + "'!",null,tusk_debug_ExceptionType.FileNotFound,{ fileName : "Texts.hx", lineNumber : 38, className : "tusk.modules.Assets", methodName : "loadText"}));
		});
		return promise;
	}
	,getText: function(path) {
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Text '" + path + "' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Texts.hx", lineNumber : 50, className : "tusk.modules.Assets", methodName : "getText"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Text);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '" + path + "' isn't a text!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Texts.hx", lineNumber : 56, className : "tusk.modules.Assets", methodName : "getText"}));
			} else throw(e);
		}
	}
	,__class__: tusk_modules_Assets
};
var tusk_modules_Sound = function() {
};
$hxClasses["tusk.modules.Sound"] = tusk_modules_Sound;
tusk_modules_Sound.__name__ = ["tusk","modules","Sound"];
tusk_modules_Sound.prototype = {
	load: function(path,onLoadComplete,onError) {
		tusk_Tusk.instance.app.audio.create(path,path).then(function(sound) {
			onLoadComplete(sound);
		},function(sound1) {
			onError(sound1);
		});
	}
	,play: function(sound) {
		tusk_Tusk.instance.app.audio.play(sound.path);
	}
	,stop: function(sound) {
		tusk_Tusk.instance.app.audio.stop(sound.path);
	}
	,__class__: tusk_modules_Sound
};
var tusk_resources_Asset = function(path) {
	this.path = path;
};
$hxClasses["tusk.resources.Asset"] = tusk_resources_Asset;
tusk_resources_Asset.__name__ = ["tusk","resources","Asset"];
tusk_resources_Asset.prototype = {
	__class__: tusk_resources_Asset
};
var tusk_resources_FontChar = function() {
	this.offset = glm__$Vec2_Vec2_$Impl_$._new();
	this.size = glm__$Vec2_Vec2_$Impl_$._new();
	this.maxUV = glm__$Vec2_Vec2_$Impl_$._new();
	this.minUV = glm__$Vec2_Vec2_$Impl_$._new();
};
$hxClasses["tusk.resources.FontChar"] = tusk_resources_FontChar;
tusk_resources_FontChar.__name__ = ["tusk","resources","FontChar"];
tusk_resources_FontChar.prototype = {
	__class__: tusk_resources_FontChar
};
var tusk_resources_Font = function(path) {
	this.chars = new haxe_ds_IntMap();
	tusk_resources_Asset.call(this,path);
};
$hxClasses["tusk.resources.Font"] = tusk_resources_Font;
tusk_resources_Font.__name__ = ["tusk","resources","Font"];
tusk_resources_Font.load = function(path,contents,texture) {
	var def = new promhx_Deferred();
	var promise = def.promise();
	var font = new tusk_resources_Font(path);
	var lines = contents.split("\n");
	var _g = 0;
	while(_g < lines.length) {
		var line = lines[_g];
		++_g;
		var parts = line.split(" ");
		if(parts.length < 1) continue;
		var _g1 = parts[0];
		switch(_g1) {
		case "info":
			var _g2 = 0;
			while(_g2 < parts.length) {
				var infoPart = parts[_g2];
				++_g2;
				var infoValue = infoPart.split("=");
				if(infoValue.length != 2) continue;
				var _g3 = infoValue[0];
				switch(_g3) {
				case "face":
					font.face = infoValue[1];
					break;
				case "size":
					font.size = parseFloat(infoValue[1]);
					break;
				}
			}
			break;
		case "common":
			var _g21 = 0;
			while(_g21 < parts.length) {
				var commonPart = parts[_g21];
				++_g21;
				var commonValue = commonPart.split("=");
				if(commonValue.length != 2) continue;
				var _g31 = commonValue[0];
				switch(_g31) {
				case "lineHeight":
					font.lineHeight = parseFloat(commonValue[1]);
					break;
				case "base":
					font.baseLine = parseFloat(commonValue[1]);
					break;
				case "scaleW":
					font.imageWidth = parseFloat(commonValue[1]);
					break;
				case "scaleH":
					font.imageHeight = parseFloat(commonValue[1]);
					break;
				}
			}
			break;
		case "page":
			var _g22 = 0;
			while(_g22 < parts.length) {
				var charPart = parts[_g22];
				++_g22;
				var pageValue = charPart.split("=");
				if(pageValue.length != 2) continue;
				var _g32 = pageValue[0];
				switch(_g32) {
				case "file":
					font.imageFileName = StringTools.replace(pageValue[1],"\"","");
					break;
				}
			}
			break;
		case "char":
			var $char = new tusk_resources_FontChar();
			var _g23 = 0;
			while(_g23 < parts.length) {
				var part = parts[_g23];
				++_g23;
				var charValue = part.split("=");
				if(charValue.length != 2) continue;
				var _g33 = charValue[0];
				switch(_g33) {
				case "id":
					$char.id = Std.parseInt(charValue[1]);
					break;
				case "x":
					glm__$Vec2_Vec2_$Impl_$.set_x($char.minUV,parseFloat(charValue[1]) / font.imageWidth);
					break;
				case "y":
					glm__$Vec2_Vec2_$Impl_$.set_y($char.minUV,parseFloat(charValue[1]) / font.imageHeight);
					break;
				case "width":
					glm__$Vec2_Vec2_$Impl_$.set_x($char.size,parseFloat(charValue[1]));
					break;
				case "height":
					glm__$Vec2_Vec2_$Impl_$.set_y($char.size,parseFloat(charValue[1]));
					break;
				case "xoffset":
					glm__$Vec2_Vec2_$Impl_$.set_x($char.offset,parseFloat(charValue[1]));
					break;
				case "yoffset":
					glm__$Vec2_Vec2_$Impl_$.set_y($char.offset,parseFloat(charValue[1]));
					break;
				case "xadvance":
					$char.xAdvance = parseFloat(charValue[1]);
					break;
				}
			}
			$char.maxUV = glm__$Vec2_Vec2_$Impl_$.addVec2(glm__$Vec2_Vec2_$Impl_$.clone($char.minUV),glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x($char.size) / font.imageWidth,glm__$Vec2_Vec2_$Impl_$.get_y($char.size) / font.imageHeight));
			font.chars.h[$char.id] = $char;
			break;
		}
	}
	if(texture != null) {
		font.texture = texture;
		def.resolve(font);
	}
	return promise;
};
tusk_resources_Font.__super__ = tusk_resources_Asset;
tusk_resources_Font.prototype = $extend(tusk_resources_Asset.prototype,{
	__class__: tusk_resources_Font
});
var tusk_resources_AttributeTypes = $hxClasses["tusk.resources.AttributeTypes"] = { __ename__ : ["tusk","resources","AttributeTypes"], __constructs__ : ["Pos3","UV","Colour4"] };
tusk_resources_AttributeTypes.Pos3 = ["Pos3",0];
tusk_resources_AttributeTypes.Pos3.toString = $estr;
tusk_resources_AttributeTypes.Pos3.__enum__ = tusk_resources_AttributeTypes;
tusk_resources_AttributeTypes.UV = ["UV",1];
tusk_resources_AttributeTypes.UV.toString = $estr;
tusk_resources_AttributeTypes.UV.__enum__ = tusk_resources_AttributeTypes;
tusk_resources_AttributeTypes.Colour4 = ["Colour4",2];
tusk_resources_AttributeTypes.Colour4.toString = $estr;
tusk_resources_AttributeTypes.Colour4.__enum__ = tusk_resources_AttributeTypes;
var tusk_resources_Material = function(path,shader) {
	this.attributeFlags = 0;
	this.textures = null;
	this.onRender = null;
	tusk_resources_Asset.call(this,path);
	this.shader = shader;
	if(this.shader.program == null) this.shader.compile();
};
$hxClasses["tusk.resources.Material"] = tusk_resources_Material;
tusk_resources_Material.__name__ = ["tusk","resources","Material"];
tusk_resources_Material.__super__ = tusk_resources_Asset;
tusk_resources_Material.prototype = $extend(tusk_resources_Asset.prototype,{
	setFloat: function(name,v) {
		var location = this.shader.getUniformLocation(name);
		snow_modules_opengl_web_GL.current_context.uniform1f(location,v);
	}
	,setVec2: function(name,vec) {
		var location = this.shader.getUniformLocation(name);
		snow_modules_opengl_web_GL.uniform2f(location,glm__$Vec2_Vec2_$Impl_$.get_x(vec),glm__$Vec2_Vec2_$Impl_$.get_y(vec));
	}
	,setVec3: function(name,vec) {
		var location = this.shader.getUniformLocation(name);
		snow_modules_opengl_web_GL.uniform3f(location,glm__$Vec3_Vec3_$Impl_$.get_x(vec),glm__$Vec3_Vec3_$Impl_$.get_y(vec),glm__$Vec3_Vec3_$Impl_$.get_z(vec));
	}
	,setVec4: function(name,vec) {
		var location = this.shader.getUniformLocation(name);
		snow_modules_opengl_web_GL.uniform4f(location,glm__$Vec4_Vec4_$Impl_$.get_x(vec),glm__$Vec4_Vec4_$Impl_$.get_y(vec),glm__$Vec4_Vec4_$Impl_$.get_z(vec),glm__$Vec4_Vec4_$Impl_$.get_w(vec));
	}
	,setMat4: function(name,matrix,transpose) {
		if(transpose == null) transpose = false;
		var location = this.shader.getUniformLocation(name);
		snow_modules_opengl_web_GL.uniformMatrix4fv(location,transpose,(function($this) {
			var $r;
			var array = glm__$Mat4_Mat4_$Impl_$.toArrayColMajor(matrix);
			var this1;
			if(array != null) this1 = new Float32Array(array); else this1 = null;
			$r = this1;
			return $r;
		}(this)));
	}
	,setTexture: function(name,ndx) {
		var location = this.shader.getUniformLocation(name);
		snow_modules_opengl_web_GL.current_context.uniform1i(location,ndx);
	}
	,__class__: tusk_resources_Material
});
var tusk_resources_Mesh = function(path) {
	tusk_resources_Asset.call(this,path);
};
$hxClasses["tusk.resources.Mesh"] = tusk_resources_Mesh;
tusk_resources_Mesh.__name__ = ["tusk","resources","Mesh"];
tusk_resources_Mesh.__super__ = tusk_resources_Asset;
tusk_resources_Mesh.prototype = $extend(tusk_resources_Asset.prototype,{
	clone: function(newPath) {
		var m = new tusk_resources_Mesh(newPath);
		if(this.vertices != null) {
			m.vertices = [];
			var _g = 0;
			var _g1 = this.vertices;
			while(_g < _g1.length) {
				var vertex = _g1[_g];
				++_g;
				m.vertices.push(glm__$Vec3_Vec3_$Impl_$.clone(vertex));
			}
		}
		if(this.uvs != null) {
			m.uvs = [];
			var _g2 = 0;
			var _g11 = this.uvs;
			while(_g2 < _g11.length) {
				var uv = _g11[_g2];
				++_g2;
				m.uvs.push(glm__$Vec2_Vec2_$Impl_$.clone(uv));
			}
		}
		if(this.colours != null) {
			m.colours = [];
			var _g3 = 0;
			var _g12 = this.colours;
			while(_g3 < _g12.length) {
				var colour = _g12[_g3];
				++_g3;
				m.colours.push(glm__$Vec4_Vec4_$Impl_$.clone(colour));
			}
		}
		return m;
	}
	,__class__: tusk_resources_Mesh
});
var tusk_resources_Shader = function(path,vertSrc,fragSrc) {
	tusk_resources_Asset.call(this,path);
	this.vertSrc = vertSrc;
	this.fragSrc = fragSrc;
};
$hxClasses["tusk.resources.Shader"] = tusk_resources_Shader;
tusk_resources_Shader.__name__ = ["tusk","resources","Shader"];
tusk_resources_Shader.__super__ = tusk_resources_Asset;
tusk_resources_Shader.prototype = $extend(tusk_resources_Asset.prototype,{
	compile: function() {
		if(this.vertSrc == null) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Error compiling shader '" + this.path + "'.vertex: source must be set first!",null,null,{ fileName : "Shader.hx", lineNumber : 56, className : "tusk.resources.Shader", methodName : "compile"}));
		if(this.fragSrc == null) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Error compiling shader '" + this.path + "'.fragment: source must be set first!",null,null,{ fileName : "Shader.hx", lineNumber : 59, className : "tusk.resources.Shader", methodName : "compile"}));
		var vShader = snow_modules_opengl_web_GL.current_context.createShader(35633);
		snow_modules_opengl_web_GL.current_context.shaderSource(vShader,this.vertSrc);
		snow_modules_opengl_web_GL.current_context.compileShader(vShader);
		if(snow_modules_opengl_web_GL.current_context.getShaderParameter(vShader,35713) == 0) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Error compiling shader '" + this.path + "'.vertex:\n" + snow_modules_opengl_web_GL.current_context.getShaderInfoLog(vShader),null,null,{ fileName : "Shader.hx", lineNumber : 68, className : "tusk.resources.Shader", methodName : "compile"}));
		var fShader = snow_modules_opengl_web_GL.current_context.createShader(35632);
		snow_modules_opengl_web_GL.current_context.shaderSource(fShader,this.fragSrc);
		snow_modules_opengl_web_GL.current_context.compileShader(fShader);
		if(snow_modules_opengl_web_GL.current_context.getShaderParameter(fShader,35713) == 0) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Error compiling shader '" + this.path + "'.fragment:\n" + snow_modules_opengl_web_GL.current_context.getShaderInfoLog(fShader),null,null,{ fileName : "Shader.hx", lineNumber : 75, className : "tusk.resources.Shader", methodName : "compile"}));
		this.program = snow_modules_opengl_web_GL.current_context.createProgram();
		snow_modules_opengl_web_GL.current_context.attachShader(this.program,vShader);
		snow_modules_opengl_web_GL.current_context.attachShader(this.program,fShader);
		snow_modules_opengl_web_GL.current_context.linkProgram(this.program);
		if(snow_modules_opengl_web_GL.current_context.getProgramParameter(this.program,35714) == 0) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Error linking shader '" + this.path + "': " + snow_modules_opengl_web_GL.current_context.getProgramInfoLog(this.program),null,null,{ fileName : "Shader.hx", lineNumber : 86, className : "tusk.resources.Shader", methodName : "compile"}));
		return this.program;
	}
	,getAttributeLocation: function(attribute) {
		if(this.program == null) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Shader '" + this.path + "' must be compiled before attribute '" + attribute + "' can be accessed!",null,null,{ fileName : "Shader.hx", lineNumber : 103, className : "tusk.resources.Shader", methodName : "getAttributeLocation"}));
		return snow_modules_opengl_web_GL.current_context.getAttribLocation(this.program,attribute);
	}
	,getUniformLocation: function(uniform) {
		if(this.program == null) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Shader '" + this.path + "' must be compiled before uniform '" + uniform + "' can be accessed!",null,null,{ fileName : "Shader.hx", lineNumber : 119, className : "tusk.resources.Shader", methodName : "getUniformLocation"}));
		return snow_modules_opengl_web_GL.current_context.getUniformLocation(this.program,uniform);
	}
	,__class__: tusk_resources_Shader
});
var tusk_resources_Sound = function(path,sound) {
	this.onEnd = null;
	tusk_resources_Asset.call(this,path);
	this.sound = sound;
};
$hxClasses["tusk.resources.Sound"] = tusk_resources_Sound;
tusk_resources_Sound.__name__ = ["tusk","resources","Sound"];
tusk_resources_Sound.__super__ = tusk_resources_Asset;
tusk_resources_Sound.prototype = $extend(tusk_resources_Asset.prototype,{
	set_onEnd: function(cb) {
		if(cb != null) {
			this.onEndHandler = function(_) {
				cb();
			};
			this.sound.on("end",this.onEndHandler);
		} else this.sound.off("end",this.onEndHandler);
		return this.onEnd = cb;
	}
	,__class__: tusk_resources_Sound
});
var tusk_resources_Text = function(path,text) {
	tusk_resources_Asset.call(this,path);
	this.text = text;
};
$hxClasses["tusk.resources.Text"] = tusk_resources_Text;
tusk_resources_Text.__name__ = ["tusk","resources","Text"];
tusk_resources_Text.__super__ = tusk_resources_Asset;
tusk_resources_Text.prototype = $extend(tusk_resources_Asset.prototype,{
	__class__: tusk_resources_Text
});
var tusk_resources_Texture = function(path,image) {
	this.height = 0;
	this.width = 0;
	tusk_resources_Asset.call(this,path);
	this.image = image;
	this.width = image.image.width;
	this.height = image.image.height;
	this.texture = snow_modules_opengl_web_GL.current_context.createTexture();
	snow_modules_opengl_web_GL.current_context.bindTexture(3553,this.texture);
	snow_modules_opengl_web_GL.current_context.texImage2D(3553,0,6408,image.image.width,image.image.height,0,6408,5121,image.image.pixels);
	snow_modules_opengl_web_GL.current_context.texParameteri(3553,10240,9728);
	snow_modules_opengl_web_GL.current_context.texParameteri(3553,10241,9728);
	snow_modules_opengl_web_GL.current_context.bindTexture(3553,null);
};
$hxClasses["tusk.resources.Texture"] = tusk_resources_Texture;
tusk_resources_Texture.__name__ = ["tusk","resources","Texture"];
tusk_resources_Texture.__super__ = tusk_resources_Asset;
tusk_resources_Texture.prototype = $extend(tusk_resources_Asset.prototype,{
	__class__: tusk_resources_Texture
});
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};
haxe_Resource.content = [{ name : "particles.untextured.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnZhcnlpbmcgdmVjNCB2X2NvbG91cjsNCg0Kdm9pZCBtYWluKCkgew0KICAgIGdsX0ZyYWdDb2xvciA9IHZfY29sb3VyOw0KfQ"},{ name : "unlit.textured.coloured.vert", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uOw0KdW5pZm9ybSBtYXQ0IHZpZXc7DQp1bmlmb3JtIG1hdDQgbW9kZWw7DQoNCmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzIgdXY7DQoNCnZhcnlpbmcgdmVjMiB2X3V2Ow0KDQp2b2lkIG1haW4oKSB7DQoJdl91diA9IHV2Ow0KICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQocG9zaXRpb24sIDEuMCk7DQp9"},{ name : "Subatomic_Screen.fnt", data : "aW5mbyBmYWNlPVN1YmF0b21pY19TY3JlZW4gc2l6ZT02IGJvbGQ9MCBpdGFsaWM9MCBjaGFyc2V0PSB1bmljb2RlPSBzdHJldGNoSD0xMDAgc21vb3RoPTEgYWE9MSBwYWRkaW5nPTIsMiwyLDIgc3BhY2luZz0wLDAgb3V0bGluZT0wCmNvbW1vbiBsaW5lSGVpZ2h0PTggYmFzZT02IHNjYWxlVz0xMjggc2NhbGVIPTEyOCBwYWdlcz0xIHBhY2tlZD0wCnBhZ2UgaWQ9MCBmaWxlPSJTdWJhdG9taWNfU2NyZWVuLnBuZyIKY2hhcnMgY291bnQ9OTUKY2hhciBpZD0zMiB4PTIgeT0yIHdpZHRoPTAgaGVpZ2h0PTAgeG9mZnNldD0wIHlvZmZzZXQ9NiB4YWR2YW5jZT00IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MzMgeD0yIHk9NCB3aWR0aD0xIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9MyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTM0IHg9MiB5PTExIHdpZHRoPTMgaGVpZ2h0PTIgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT01IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MzUgeD01IHk9MiB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTM2IHg9MiB5PTE1IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MzcgeD0yIHk9MjIgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0zOCB4PTIgeT0yOSB3aWR0aD02IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9OCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTM5IHg9NyB5PTkgd2lkdGg9MSBoZWlnaHQ9MiB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTMgcGFnZT0wIGNobmw9MTUKY2hhciBpZD00MCB4PTkgeT0xMyB3aWR0aD0yIGhlaWdodD03IHhvZmZzZXQ9MCB5b2Zmc2V0PTAgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTQxIHg9MTIgeT0yIHdpZHRoPTIgaGVpZ2h0PTcgeG9mZnNldD0wIHlvZmZzZXQ9MCB4YWR2YW5jZT00IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NDIgeD05IHk9MjIgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTggcGFnZT0wIGNobmw9MTUKY2hhciBpZD00MyB4PTEzIHk9MTEgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD00NCB4PTEzIHk9MTggd2lkdGg9MSBoZWlnaHQ9MiB4b2Zmc2V0PTAgeW9mZnNldD01IHhhZHZhbmNlPTMgcGFnZT0wIGNobmw9MTUKY2hhciBpZD00NSB4PTE2IHk9MiB3aWR0aD01IGhlaWdodD0xIHhvZmZzZXQ9MCB5b2Zmc2V0PTMgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTQ2IHg9MTYgeT01IHdpZHRoPTEgaGVpZ2h0PTEgeG9mZnNldD0wIHlvZmZzZXQ9NSB4YWR2YW5jZT0zIHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NDcgeD0yIHk9MzYgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD00OCB4PTIgeT00MyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTQ5IHg9MiB5PTUwIHdpZHRoPTIgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT00IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTAgeD0yIHk9NTcgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD01MSB4PTYgeT01MCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTUyIHg9OSB5PTM2IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTMgeD0xMCB5PTI5IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTQgeD05IHk9NDMgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD01NSB4PTE2IHk9MTggd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD01NiB4PTIwIHk9NSB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTU3IHg9MiB5PTY0IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTggeD0yMCB5PTEyIHdpZHRoPTEgaGVpZ2h0PTMgeG9mZnNldD0wIHlvZmZzZXQ9MyB4YWR2YW5jZT0zIHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTkgeD0yIHk9NzEgd2lkdGg9MSBoZWlnaHQ9NCB4b2Zmc2V0PTAgeW9mZnNldD0zIHhhZHZhbmNlPTMgcGFnZT0wIGNobmw9MTUKY2hhciBpZD02MCB4PTIgeT03NyB3aWR0aD0zIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTYxIHg9NSB5PTcxIHdpZHRoPTUgaGVpZ2h0PTMgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NjIgeD05IHk9NTcgd2lkdGg9MyBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTUgcGFnZT0wIGNobmw9MTUKY2hhciBpZD02MyB4PTEzIHk9NTAgd2lkdGg9NCBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD02NCB4PTkgeT02NCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY1IHg9MTQgeT01NyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY2IHg9MTYgeT0zNiB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY3IHg9MTYgeT00MyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY4IHg9MTkgeT01MCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY5IHg9MTcgeT0yNSB3aWR0aD00IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTcwIHg9MjMgeT0xMiB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTcxIHg9MjcgeT0yIHdpZHRoPTUgaGVpZ2h0PTcgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzIgeD0yMyB5PTE5IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzMgeD0yMyB5PTI2IHdpZHRoPTEgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT0zIHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzQgeD0yMyB5PTMzIHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzUgeD0yNiB5PTI2IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzYgeD0yMyB5PTQwIHdpZHRoPTQgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT02IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzcgeD0zMCB5PTExIHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzggeD0zMCB5PTE4IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzkgeD0zNCB5PTIgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04MCB4PTIgeT04NCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTgxIHg9MiB5PTkxIHdpZHRoPTUgaGVpZ2h0PTcgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9ODIgeD03IHk9NzYgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04MyB4PTIgeT0xMDAgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04NCB4PTIgeT0xMDcgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04NSB4PTIgeT0xMTQgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04NiB4PTIgeT0xMjEgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04NyB4PTkgeT04MyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTg4IHg9MTQgeT03MSB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTg5IHg9MTYgeT02NCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTkwIHg9MjEgeT01NyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTkxIHg9MjYgeT00NyB3aWR0aD0yIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTkyIHg9MjkgeT00MCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTkzIHg9MzAgeT0zMyB3aWR0aD0yIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk0IHg9MTcgeT0zMiB3aWR0aD0zIGhlaWdodD0yIHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk1IHg9MjYgeT01NCB3aWR0aD01IGhlaWdodD0xIHhvZmZzZXQ9MCB5b2Zmc2V0PTUgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk2IHg9MTQgeT03OCB3aWR0aD0yIGhlaWdodD0yIHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk3IHg9MzAgeT00NyB3aWR0aD00IGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk4IHg9MzMgeT0yNSB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk5IHg9MzQgeT0zMiB3aWR0aD0zIGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwMCB4PTM3IHk9OSB3aWR0aD00IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwMSB4PTQxIHk9MiB3aWR0aD00IGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwMiB4PTM3IHk9MTYgd2lkdGg9MyBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTUgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMDMgeD05IHk9OTAgd2lkdGg9NCBoZWlnaHQ9NiB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMDQgeD05IHk9OTggd2lkdGg9NCBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMDUgeD05IHk9MTA1IHdpZHRoPTEgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT0zIHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTA2IHg9OSB5PTExMiB3aWR0aD0yIGhlaWdodD03IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwNyB4PTEyIHk9MTA1IHdpZHRoPTMgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT01IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTA4IHg9OSB5PTEyMSB3aWR0aD0xIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9MyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwOSB4PTEyIHk9MTIxIHdpZHRoPTUgaGVpZ2h0PTQgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTEwIHg9MTMgeT0xMTIgd2lkdGg9NCBoZWlnaHQ9NCB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMTEgeD0xNSB5PTkwIHdpZHRoPTQgaGVpZ2h0PTQgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT02IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTEyIHg9MTYgeT04MiB3aWR0aD00IGhlaWdodD02IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTExMyB4PTE1IHk9OTYgd2lkdGg9NCBoZWlnaHQ9NiB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMTQgeD0xNyB5PTEwNCB3aWR0aD0zIGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTExNSB4PTIxIHk9NzEgd2lkdGg9NCBoZWlnaHQ9NCB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMTYgeD0yMyB5PTY0IHdpZHRoPTIgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT00IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTE3IHg9MjEgeT05MCB3aWR0aD00IGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTExOCB4PTIxIHk9OTYgd2lkdGg9NCBoZWlnaHQ9NCB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMTkgeD0yMiB5PTc3IHdpZHRoPTUgaGVpZ2h0PTQgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTIwIHg9MjIgeT04MyB3aWR0aD0zIGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEyMSB4PTI3IHk9NjQgd2lkdGg9NCBoZWlnaHQ9NiB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMjIgeD0yOCB5PTU3IHdpZHRoPTQgaGVpZ2h0PTQgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT02IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTIzIHg9MTkgeT0xMTAgd2lkdGg9MyBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTUgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMjQgeD0yMiB5PTEwMiB3aWR0aD0xIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9MyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEyNSB4PTE5IHk9MTE3IHdpZHRoPTMgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT01IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTI2IHg9MzMgeT01MyB3aWR0aD00IGhlaWdodD0yIHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTMyIHg9MCB5PTAgd2lkdGg9MCBoZWlnaHQ9MCB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTQgcGFnZT0wIGNobmw9MTU"},{ name : "effect.fadeout.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gZmxvYXQgZmFkZUFscGhhOw0KDQp2YXJ5aW5nIHZlYzIgdl91djsNCg0Kdm9pZCBtYWluKCkgew0KCWdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgZmFkZUFscGhhKTsNCn0"},{ name : "unlit.textured.vert", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uOw0KdW5pZm9ybSBtYXQ0IHZpZXc7DQp1bmlmb3JtIG1hdDQgbW9kZWw7DQoNCmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzIgdXY7DQoNCnZhcnlpbmcgdmVjMiB2X3V2Ow0KDQp2b2lkIG1haW4oKSB7DQoJdl91diA9IHV2Ow0KICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQocG9zaXRpb24sIDEuMCk7DQp9"},{ name : "blazingmammothgames.png", data : "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"},{ name : "Subatomic_Screen.png", data : "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADmUlEQVR42u3dXZLjIAwE4Nxs73+q3X1MZTwgYZKA+Polk9+acrelbozh8QAA+IG///H8+Pr68/NX9H73t8+2fiPy2zCR/B5Rd0QVee/5+bMYieDNZ3yvAswSwCuZPQEg/oMCyFSAVrmOtI/Ie0SwUQXIeoaoB4CFxRKtALNaCXyB1Az50QrgqBcRxWgFeOf/AF8UwOwoiokPkp054HfIiSYCAthMAFHX//y8NSZAABuOE2TiYmvIWQtY3Av0KkBLKLOGl+FNxitShu/kfALYyAO84+JPVIyYWSB6fZoIxC9WCSJX6rKmzdW/Tfp/NpqNXuIV/QqmhegkDwIoGhWjMVDJX6gFRDP+yOvGATY5g3uTQ2YYPdiolLciIhxQBSIV4I5AiGpB8md7gOhYAiY2H0PIVJSGGP44qkV8Q+QsJ4BFo2A00/9GcKYCaAELx8BRoyb3b14BWhd9HK3iffzu/P/ZLQi+6OZ7FaA3QtibFKolqDIEoM1oActn+178y8wHcNZvSP4Iqb1xA0d7I/J7BCO0IPlXJBvgOYj8iJHLTicnEqIiAlWFCJYkLDISGH0vQjARLHq2jtwIcvW9SEIggg0EsMp9g7BABRADeYDwe6+fyX4PDvcYQADwDZJG1vTNmkUtYMH+n41qlnwvXqYzO3hIBMUEkCXzjgBGFqqEL3mASE/P7C2EfACAJVJAdmLHSLkX/zZNBCOGz6ygTatA1iTOWFACFo2AsyuCFrCBB8jeLj5j+VgAAFjSBM7eDlZb2Cj2RUnv3f9HAJsZwSuCs9cGVIACFSG6Umj0NcmgkAeI5P6RcQcoLjJHAmDlnp8d5zfn/2DRWP7lwAoQMXOEsKkAZlUA5B8kGGQXHxdA8KFeYPQsH91pDBYr66MLQxBAARN4dxMJ5BczdlkiCeCQOAiSgpRwQlXobfXuhs+imX9EAMgvZAB7AsjeGQRFK4AEUNj9R3cMAfEPAI7J+5lt42Fjkmf8DZvHQAI4VADZFtAbH4CFBRDZCNrROswDtM50OHw8oLekDNEUFgETeLggXArmDR52EytKdLakI7xw3yeAw0v9iKkjiMPiIAEU7f8ZssW/A6rB6AZSUEwMd28bg8VbQCsGOtsPM39G+QiAAMS/XCtxJOV/qBwFmUFiuCSdCIqU/pFZwjwAAcAJAgACEAGriuCuuycAIALkQykP0NpLgAc4UABXj0AAUEUEo0vGQVETh2QAgIr4B8giiaxv8TqWAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC"},{ name : "unlit.textured.coloured.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7DQp1bmlmb3JtIHZlYzQgY29sb3VyOw0KDQp2YXJ5aW5nIHZlYzIgdl91djsNCg0Kdm9pZCBtYWluKCkgew0KICAgIGdsX0ZyYWdDb2xvciA9IGNvbG91ciAqIHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2KTsNCn0"},{ name : "effect.circleout.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uQ2VudGVyOw0KdW5pZm9ybSBmbG9hdCBjaXJjbGVEaXN0YW5jZTsNCg0KdmFyeWluZyB2ZWMyIHZfdXY7DQoNCnZvaWQgbWFpbigpIHsNCgl2ZWMyIGRlbHRhID0gYWJzKGdsX0ZyYWdDb29yZC54eSAtIHJlc29sdXRpb25DZW50ZXIpOw0KCWdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgc3RlcChjaXJjbGVEaXN0YW5jZSwgbGVuZ3RoKGRlbHRhKSkpOw0KfQ"},{ name : "unlit.coloured.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnZhcnlpbmcgdmVjNCB2X2NvbG91cjsNCg0Kdm9pZCBtYWluKCkgew0KICAgIGdsX0ZyYWdDb2xvciA9IHZfY29sb3VyOw0KfQ"},{ name : "particles.untextured.vert", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uOw0KdW5pZm9ybSBtYXQ0IHZpZXc7DQp1bmlmb3JtIG1hdDQgbW9kZWw7DQoNCmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzQgY29sb3VyOw0KYXR0cmlidXRlIGZsb2F0IHBvaW50U2l6ZTsNCg0KdmFyeWluZyB2ZWM0IHZfY29sb3VyOw0KDQp2b2lkIG1haW4oKSB7DQoJdl9jb2xvdXIgPSBjb2xvdXI7DQoJZ2xfUG9pbnRTaXplID0gcG9pbnRTaXplOw0KCWdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQocG9zaXRpb24sIDEuMCk7DQp9"},{ name : "technologies.png", data : "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaldC9a1MBGMXh5yZKRSMdDOLQ4Q7BQRoxUYJu2iJVKaXECkl0SW7zISRNuDdFiqODa4cOfuBiERdn3cR/QBAE7aSDqzgouEiJQwopQgfP9OMcDu/LIVXpRr3k0Dl6a8O4vDAXVqq1cOqrjMBJeYV6lAyuLC8vOlC/PwngY74b9RL/p2OrzSQiOILL0SAeElzD0r3hYEjwCNmoU18leIXZuFKtEewg2xjzd2TblWqNFGTjlfI8qSzC9j5u7OOoE/dIXUCu112P9v4JkGmu3bqJHGYkyhbMCV131bySgktKSvKKzipwQL+IGUv6QpG+gQ2xu9o6hmaF1iWaQi2xpqauDahUa+G/2yat88XxhcwNDn8bjX6dYeopuw9Hoz/PR6PdbdI7vNua9PtbXPxBenPi5Z4x/YDXbyde4wVvNjn1ZVCP6yCNVKvFz5ccr3LiA0dvj3fby21/ZuU+i+95/ITTLabv/AVMhmdalRzY9wAAQZRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDktMDVUMTE6MTg6MzktMDI6MzA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE1LTEyLTAxVDE2OjIxOjA1LTA3OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNS0xMi0wMVQxNjoyMTowNS0wNzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxwaG90b3Nob3A6VGV4dExheWVycz4KICAgICAgICAgICAgPHJkZjpCYWc+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyTmFtZT5Qcm91ZGx5IGNyZWF0ZWQgd2l0aDwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ+UHJvdWRseSBjcmVhdGVkIHdpdGg8L3Bob3Rvc2hvcDpMYXllclRleHQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOlRleHRMYXllcnM+CiAgICAgICAgIDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MmZlMDYwMGQtNmQzNy00N2QyLWE1MTMtODQwMTdlY2FmOTJmPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2MDE4OWEyNi0xNTgzLTRiMGEtOTM0ZS0xNGQwNGY0NzE0ZTU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjg2ZGY3OGVjLTFiYTQtNGNhMy04Mjk4LTgyNDMyNGRmMWU4YzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6YmY4YTNlNTUtYWJiNy0zNTQ4LWJiMTMtMjFjYTI4YmExMTU5PC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6Y2I5YjEzNjItYTBiMi03YTRmLThhMDItZjIzZmQ5MzllYTlhPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjYwMTg5YTI2LTE1ODMtNGIwYS05MzRlLTE0ZDA0ZjQ3MTRlNTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjEwNzhmZjE2LTBiZTUtNDkzZS04YTVlLTM0N2NkOGVjMTkxZTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxMDc4ZmYxNi0wYmU1LTQ5M2UtOGE1ZS0zNDdjZDhlYzE5MWU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDktMDVUMTE6MTg6MzktMDI6MzA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowY2U5MTQxOS0zZjU3LTRkOTktYTkzYS03MjUyN2Q1MzIxMzI8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTItMDFUMTk6MjM6NDYtMDM6MzA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpjYjliMTM2Mi1hMGIyLTdhNGYtOGEwMi1mMjNmZDkzOWVhOWE8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTItMDFUMTY6MjE6MDUtMDc6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDoxMDc4ZmYxNi0wYmU1LTQ5M2UtOGE1ZS0zNDdjZDhlYzE5MWU8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6NjAxODlhMjYtMTU4My00YjBhLTkzNGUtMTRkMDRmNDcxNGU1PC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICAgICA8c3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MTA3OGZmMTYtMGJlNS00OTNlLThhNWUtMzQ3Y2Q4ZWMxOTFlPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEwMjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTAyNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+1/oTzQAAACBjSFJNAAB6JwAAgI8AAPn/AACA6AAAdTAAAOpfAAA6lwAAF293mP3TAAB93UlEQVR42uzdd5xdZZ0/8O+5U9IzCR1CAOkl9J7QeygqSNN11bVhWVBkwXWXXVfFXX8gRdFdUWwoGJoiYAi9JkhvoXeSUJIA6ZnJzNzz++NO7zP33CnJ+/16zSswmbn3nOc89+Z+P+cpyYSJW6QBAAAArNZymgAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAAAgBNAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAA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WVlmw3RbFv35NB9Lly2L996bH6+99no8/czsuPuue+Phhx+N559/Id54482YP39+LF26NPJpvugw4O133mn+5E2fusqee+weJ55wfHR2CXpbIHa17sQmEyfE7357eVRUVKw526OlER//+EfjrG99o+f9PI1YvnxFPDBzZiaHsP0O28Xo0aMzeJ10PqR9ow03iB0m7ZB5822w/nqx9tprlW4aQFpolb323DOTh3v99Tdi3ry3I03z3l8A+qhcEwD08jNt2nGhvuOk7WP//acUfec1SZJWtcTTTz8Tv/nN7+Ohhx+O2traWLWqNlbV1saqVauirq4+crkkKioqoqK8PCoqKqK8vDwqKyti5512ipNO/kTstuuuMX78uFYfyntSIM6b93YkSU/vBA6OgrOpkOlpPZNGyYrlxkXrvvOdc+K2O+6IhQs/iI6GLadpRPf1V9rFvP8kxowZHVdc8ZumXRNK3saDoH1btvEZZ3w9nnvu+bh5+oxI8/ku+0DacA4zZtwWRx11RNEF7oYbbBBjRo+KJUuWNpxrR0PT+zJcvXlax7bbbB0jRgzP9GWW5tOorKyMyfvsE2++OafD4yz0zZ4ce2fJVMSo0aNizz12z+SYb7/9zqitre2kX0YIKwEEAABZlhudrroekcZ5P/he4e5rvsh5rknE/PkL4i9/+Wtc8ccrY86cuZHP56Ow80D7uc319RG1tXXtHmfO3Lfjb7fMiPKysth+++3i8MMPi8MOOTgm7bhD4Xm6Kc6effa56Pl+633Zl700BemqVauitrYu6uvr4sMPF8W777wb73/wQQwfNizGjR8f66+3XowZOzoqKytj+PDhzaFBCYrVNE1jrbXGx9e/+pX43g/+u4tisKsiq7uh/0lceMGPYssttihZ8d+2jaurq6O2tjZqalbFO++8EwvmL4jqmppYe621YsMNN4zxa42LXK4shg8fFmVlZSUNAxpDgIsuuiCefmZ2vDVnbiEE6KZuvfW226OmpiaGVQ7r83EV1gEojwMPOCCumnZNJz9TTMBTsP/++0WSJCW5vscf/7G4+trror4+y9dw2vS+sNmmm8S48eMyeegHZs7qtJ161s4ACAAAMrDF5pvHbkVu0dVYZF1++W/j/11wYaxYsaLVh9umgq9lzd1JkdhYKKRJxKp8Gk8+9Uw8+dQzcdHFP4n9pkyOb5zxz7H33ntG0i5UKBxHXV19vP/++30/l366E9e4l/uiRYti9jPPxrSrr4mXX3k1Fi9eEkuWLo2lS5dFfX19q9+pKC+P0aNHx/rrrxvbbrtNTD3qyNhrrz1j/fXX67A9snDSiZ+Iiy+5NJYsXdLHQrOz4j8Xx3/suDj66KNKlr80tvH8+fPjkUceiz//+YZ49bXXY/GSJbFk8ZKorqludXzlZWUxZuyYGDN6dGy44Qaxz957xcc+dlxstdWWhTCgREHLyJEj4pe//N/42MdOjOqamvaNlrb+nxUrV8azzz5f9Os2IuLIIw+PP119TaRp1kFYEqNGjohDDj2oZK+hSZO2j8rKyli5srrIYr/j97Qtt9g8Kisri35vXLp0aTz++JOt2qb1z/h3CEAAAJBtKdTph93Jk/dpKkSKKf6/853/iD9e9aeor2+9ynXHRX83h9r2A3oaUV9fH/fdPzNmPfj32HHSDvFf3/2P2H33XVuFBhER77///qCdR97ybvTDDz8av7jsl/H440/Gh4sWRX19vsUw7I6nL9TW1cWiRYti0eLF8dLLr8ZNN98SVVVj4qPHHhPnnHNWjBs3LtsiNY2oGjc29t5rj7jjrnsa5i93NtS67cVLu5z3v/7668Z55/1X5kV1yzb++98fjv93/o/jlVdejUWLl0Sa5psDqbT9K6Kuvr7QvosWxZy58+KRRx+Py3/zu1h7rfFx4omfiK999bQYOXJE5sec5tOYtMP28cUvfC5+9r+XReMhJp0EKvX1+bj++r/EbrvtUri73tdjSSN23HGH4jpIdBbwJDFmzJjYZOLEkgQ8aT6NsWPHxq677ByzHnyoxXO37ZvdBTAdvwnlkiSOOeboot4bG18S998/K6prqnv6pgdAJywCCNDTD8vtPsA2f0g/9JCDi84WfvOb38cfr2ws/qN18Z+0TQF6+tX+83Ga5qO2ti6eePLp+PgJJ8VJJ38q3ntvfvOCgUkhAMgPwgCg8fjee29+fPrTn4sTT/5k3Hb7XbFg4ftRV1cX+Xy+aa/4ws938NXieubz+cjX18eHHy6OK/54VRxw4GHxhyuujEgis4XR0jSNXC4XX/zi56OsLBc9m0+dRnfz/pMkif/3ox9GVVVVSYr/+fPnx1e++s9xyic/HY88+nh88OGiyNfXRz6fFiq+hjqxozZuPIXGNl6xYmXMnfdOXPKTS+Oggw+Pv02/JdJIm0YXZPcijTj77LNi2222brp+XbXMzFmzYtWqVUVf3/XWWy8223TTTov67i5PV39/8EEHRmVlZUkDuaOnHtVNS/XtuYePGB6TMlq88Ia/3tjNa9IepAACAIDSl6Sx7rprx6677tL3R8glsWDBgvjxRRc3FN1p65o96aCK702y0GEgkEaa5iOfT+PBvz8chx95TNwy/damH1k4CEcAJEkSNatq4sKLLomDDjki7r73/qivr29V9DcVoEn3TdL0s01hQBrvf/Bh/Ou//2ecfvqZUVdfn+nq6HvssVtsPGGjTh+zt8194AH7xWGHHpJp3ZMkSdTn6+MnP/1ZHHDQ4XHTzbc0BSuFW8Et2rc3bdwQBKT5NOa9/U6c9pV/jk/9w2dj7rx5mYYAhTn5ZXHuuf8aZblcuzvXrVbQSPPxzjvvxjtvv5vJzeMDDtivB8FO7167SRJx3EePKflra8qUfSOX68tHwq5HL4yrGhsbbbRR0cP/ly9fEffdd3+nnc7wfwABAEC/FaUbbbhhYZX9tG+/HxHxlxtujCVLljUU3UkHxX93FVffA4E0TeODDz6M0752eny/YaG6xYuXFBUApBnfjUtySSxZuiT+4R8+W5hLv2RJc9EfHRX9vRgdkTR/p/CYafz5hhvjrH85p2k7xaIL03waw4cPj89+5h+j9T717UOAll+dFVeVlRXx7//+7abrl1Ub59N8nH7GmXHBjy+JpUuXtgpWet++bdq4Tdhy/wMz47iPnhCvvPpatiMB0oj995sS++67dyRJrqnV0g7aevmKFXH7HXdm8rS777ZrH+r8rhf/qygvj9123bW0N7fTiM033zw23XSTFtcs7XGA0fnxp3HQQQdGeXlZ0cP/n33uuaiuWdXicZJO3tsAEAAAZPQpubO7TKNHj+rj3bNm9913f6u569Gu+C/x2TXcof3lr34Tn//CafHww490uEf9QNxpS5Ikqqur49P/+E/x94ceiXy+RdHU6dSIXoYhLX6tYfWAuO76G+L88y/MtNA66aRPREVFRR+vafPCf1OPPCK223bbzArDxjnwX/3a6fHXG//WNM8/Kap9O/idFtMw8vk05s9fGMefcHK8/MqrmYUAjSvz//u/fTsqKsq7HMWRphEzZ85qaoNi7DdlcgwbVtlN86Q9vs4REXvssXuMHj2q5KNxysvLYqdJkzIbndJ4GkccfnjR/TIiYtq0a6Kuri4M8wcQAAAMuE022aSp8OiLurr6WLKkb6vDJ0nXX70tnNI0jdtuvzN++7s/ROPdybaP158hQJIksWz58vj0pz8Xjz3+ZKt1CZKipkZ0VKi2vEtdqGB+/Zvfx7x5b2czCiBNY/z4cc13ivt4nCNGDI9zzjmrqD7X1qraVfGVr/5z3Py3GRFp2jjaP8P2jfZBQDSPPjn++JPi6aefyW7KRRqx0047xiGHHNTdRYmHHn4kli9fXvRTVo2rio9stln0bI2HnoUBRa8t0sN+GRFxwIH79axhW/x3590vibKyskx2WKipqYknn3yqy/dAd/8BBAAAJfig3P5DbpJE7LLzzkXVRPX1dVGzalV0u3F5hx982xZXrb+SJOl1KNByJEKStH3s/gsBklwSK6tXxte+dno8+NAjTYVK0ur5u74j3btQpDkEaJi2HitWroxzvv2dpjAiC60XRetpddQ8r3qvPXaPTTfdJJM94ZMkiSSXxKWX/m/8bfqM1tc96b59e9/G0WEI8OGixfHVr58Ry1esyCxsiYj45699tXCOXbTqosVL4vHHniyuhkwjhg0bFptuMrFFP+lqIcDOd6lo/OuyslwceMD+/fb+NmXK5Bg7dkyn17v5WNMu+m3z97fccvNYa63xRQ//f+/d+fHWnLkNu2co9gEEAAADqLAV2/pFFQ4VFRUxfNjw6GqbwR4VVF3+fdJlwdZxAddR8de/H76XLFkaDz38SOtKqQdTIzo+j6SDv+u8OG28QA/MfLBwDBmd+vbbbdvnaihJIr555hnZ3SlPIl555bW47JeXd7DuQM+ClY7m/fc0bGkZArz5xlvxg4Y1KDKRRuy6686xw/bbdXkwSZLETX/7WyaBw8EHH9jNz3UWCLQpoJMkNpk4MTbf4iP980JLIzbcYMNYd521Ow0wenb8zfbdd59MDu3W226L6urqLt4aBQIAAgCA/noTzSUxZuzoIh8jF5tuukkRd9V7Ghp0sUVgdFwsD442zkXa06gj6XzUQtvz625KQ+MogPr6fPzyl5dndj677rpLlJeX9el3P7LZprHnHrtnMhU6SZLI5/PxjW9+K5avWBlpmrZYeDLpY/u2b+Oehi1ppHHVtKvjiSeeyiTgaCzKP/0Pn+z28W699faora0t+nn33nuvGDlyRJc9tfMFHltfm6233jIqKyv7Zdp74+4JBx98UA9/vuu3oyQKu15kYebMByNNQ50PIAAAGHhpmkZNdU3RRcopJ58YZWXlrT/lpl0X+K0Lib6OHOhJKNBJ4dZP7dtyBfmu7v4nSe/Po7D4XSft0mLV+qefmR1Lly7NZHj6BhusHxtuuEF0veJ6m4qqwSdPPaVVvykuAYi48spp8dTTswvFfzdN1/v2jWg7FaWzvpQkhb6cz+fjm2eeFUuWLslsUcCjph4R48dXdVHcp7F4yZJ48aWXi54GsPHGG8eokSO6vIves3Am4sgjjujTtS60dd9OZOrUIyOXS7oNMLrsp0nEyFEjY6899iyue+aSWLlyZcyc9WCn7z22/wMQAAD0q3w+jQULFhZZ5Ubss8/esdsuO7X64J72IARo/YE8jdVzleyk29ihmEKgq2IpaWjgd9+dH4899kQGiUbEyJEjY4P11uvhMTdfz/Lysjjs0EOyadEkiRUrVsb//Oj85jv/XRRZ2RRa3YQAUdgu8dXX3oi//OWv2XSdNGKdtdduMze//eunrq4+bpk+o7inStMYOXJEbL/ddkW306hRo2LfyX0bQl9fX9/nttpx0qSorKgo+vg3mbhxrL3OWkW/HT3yyGOxYuXKLt7XJAAAAgCAflNYNf+5554runAoKyuLiy/+cVSNHdM+BIiehQD9HQQM3N237O8CJl3MiEijcGd6+i0zMjn6srKyNnuu9+yct95qq9jsI5tm1oS33DIjli5b1qavdNa2SUmuXUdtnaZpXHPt9VFfX1/0kPzCyIYkTjnl5G76SRozbr0t6uqKf86PfeyjfU8rohDOrLvO2jFhow17/TJOckk8/czsePiRR3t9Ho0BxpTJk3v0ntP5aymJLbb4SAwbNqzo3nL99X+JpMu+Z1tAAAEAQD8UnS298MILTR98+1yo5NPYbLNN46qrrmgfArSq59NuPsS3/EpbhAFD+INyFwsAZFegdnR3uuXIgzRefe214q9zQ0pzyMEHt3mctNuiasdJ20dFRUXRq/8nuSTq6urit7+7ojk46nIrtWyTno6nA7TYhjFN45nZz8Yzzzyb2VMfeMD+UVFe3sUogDTefW9+zJ8/v+hpALvutkubrel6f72mHnVklJWV9Wmqx+233xH/d9kvI5/m+9RXDznkwKLeL5IkialHTW3V3/vSR1esWBn33Htfp+mc7f8ABAAAA6IwRDWDOjefxi477xS33zY9dtt158jlck0f4NtPB+jZB+uBGBnQ/5J+efjXXn09m7n3EbHJpptERUWbNR/aXZvm/8/lcvHRjx6X2Sm9+NLL8dzzL0Sa5jsv+weotkqjsPDilVf+KbMH3GSTiTF27NguXyeLFi2OO++8q+in23KLzWNcVVURnS2No446sk+Fd5qmcfc998Q999wXy5Yt79NLY7/9pkRZrqyLftnZVSsc//Dhw2KXXXYquh1ffvnlWLJ0aYvXnGIfQAAAMAh88MGHsTLDEGDChI3irzdcF//89a/EqFEjI5cr3DFN29XwPb+7X/yCgWuCpMvaZv6CBYX1HjKoQyorKyOX5HpQUBWOa/SokbH55tltCXfVldNi1apVPVhdPSlZW3c94iLipr9NjxUrVmYyDSAi4pCDD+r2Z1svONe350qSJPbfb0ofYo+C0aNGxQ47bNf7l2kSsXDhwnj77XejpqYm7r33vj6dw6abbhJbbLl5n659kiRRNXZMbLzxxkW/zdzw1xujtrbO+xWAAABg8BSMaZrGG2/OiRdffDmzWinNp5FLcvGv3/6XmDH9xvj0p06NcVXjGlZp72xFtp6FAR1PDxhKdXkyoM//0ksvZ/KQw4ZXRq4s177Wb3tN0kJRNXLkiMLOAUVersa7xM89/3w0bLDQYbv2z/DqLvZfjDSWLVsWL774UmaHUdiWruv96x588KHCOgBF7kCw++67trm2aY+K/4iI/fffL4YNG9an0Sb33fdAvP/BBxER8bfpt/ThzSeivLw8dthuu14EL2mr/z7ggP2jvLysqOH/tbW1MXPmg1304wF6LwAQAACsQeV+J4V3fX19ZgvENRfqaUQasfnmH4kf/eiHMWvm3XHJRRfESZ84PtZea3yU5coiSXKRJLkOPgj3fFRAb36eJN54481sAoBhwyKXy/XkKSMiYptttinM/y92CkISsWrVqnjhxZeiacP2DourgWvjlv/91FNPZ/bIu+y8c5ftl6YRC99/P5548smin2ufffZu2E6vd8V3RMRBB+zf5+e95977Ip8vDOu4++57o7q6ulcjKBrb5/DDD23TD9Ien8NRRx5RdPvNn78g3nxzjuH/AAIAgMEnTdOYMeO2kjxumi8EAVVVVXHSSZ+ISy75cTz91KNxy/Qb49//7ZzYasvNY63x46KsrLyDMKD7u/xDYmpAPx5W+2Kp9f8vXbo0k+cZPnx4lJX1/J/gvfbcI7NzfPHFl2Lx4sW9KMRL2d5dX/Msg7VNJk6M8vLybs4syeS1vNlmm8WEjTbqdZpSUVEekyfv26d+W1tbG/ffP7PpNV9dXR1PPflMny7l7nvsFlVjx/agH7R+cebKcrH7brsV3X533XV3LFu+vMMXfyILABAAAPRfgdhxofT6G2/EU08+XfTQ4a6CgMavSCN22GG7+OpXvhx333Vb3H7b9Ljid5fHSSceHzvtuENUVFQ2HFfLr54GAUNnNEBpCoGuz335ihXZBADDhjWM4uhZa6+99tqZneFTTz1dCDrSzvvCwF/cwh8vv/xy4S52Bq+rYSOGFRbn6+ah/nLDXyOfz/d97YE0YuTIEbHpphPbtHNHr620+Y8kiS233CImbLxRn+b/P/3UMzF/wYKIhtdyXX0+/nDllU0BQW+Of8MNNohx46p6cPwtTyOJzT+yWay9zlpF71Rx/8xZXb5XGREAIAAAGFBpGnHGN7/V6yG3xQYCkUZssMH6cdBBB8TFF10QN/71+rj/3jviv8/7Xuy++65RWVEeuSRpMTqgN0FA9+e8plm+fHkmGcPw4cMbpgB031eSjAOAx594qvConWyhOFjusKZpGtU1NfHee/MzafMkSWLcuHHd/uiHHy6KV159rc81ZuNCgDvtuGN0/ErqeGROkiSx3bZbR2VlZZ+e94Ybb4qkzQigx594srBAadK74y8rK4tjjjm6o+7RZRiw7z77FHWZkiSJurr6mPnALP+oAAgAAAaHjgqkNE3j1dfeiO//4L8LtVU/VVFtw4CK8oqYOHHj+OxnPx033nBdPPzwzLjowvNj9913iRHDh/c4CIjoWQiwpslqCkBFRUXzIoA9SADWGj8+s3NoWscg7SpyGNjXU6PaVXWF7eyy+MCTy8WYsWPanWnS4ozTNI3a2rqYMePWop/v2GOPjsrKisL5dbcGYFI4vuOOO7bpOHqjtra2sOhf0nxeaRrx3nvz47XX3ujT8R9x+GEN6xgk3b4vNH5nj92LHP6fRDz66GOxaPHiaLm1YNuQAAABAEB/lStdFuN/vPJPce+99/drCNAqDGgzXWDdtdeJk046If76l+vi5pv+HB897ugYOXJEdDc1oOPdAobQzgEluvJLlizN7PHKulsEsEUzj60ak9nzvvXWWw07SgzW11NTOR71+fqorqnOLADoal57y+/eeuvtxU0DiIiNN9646bXW/R4ASYwZPapp1ECvWjCXxCuvvBoffrioeVvHhp0UqqtrYkbDOgq9nQaw4447xPDhwzqr+Zu+n6aFEGfkyBGx1z57Fn2dpk+f0c2xCiYBBAAAgyIESCOfz8cZ3/hWPPbY4wMSAnQYCjSMDth2223if3/+05h1/93xjdO/HmPHjunliIDWAcGaeNmrq6sze7hWuwB0cTc+iWh357pPh9/QF5csXTJkrl99fT6WLFqS2eONGT269au4RRCStnjNvDVnbmE7vb6+fNOItddeK9Zfb73m94C081o2SZLYYIP1Y4MN1u9TfXvjjTdHbW1d+ydJ05j194f69L5RWVkZ+0+Z0nyYadcvjk0mbhzrrrNOUf2zrq4+/nrjjZ2+x7r5DyAAABiYWjDp+ENwmqbx/gcfxkmn/EP87//+ohAC5Ab+U2vLIGDd9daNc875Vtxz121x2CEHRVlZWXQ9sqF1wd+T4jFZTRfpSgeick6SGFc1LpMbn3V1dUPqBmo+n4+35ryV2eONHTu2sw7bahrAhx8uilmzHiy6n3zihOM7LPg7CgROPunEXvexQtFcF7ffcWeHv5dGxBNPPhXvzZ/fpzDjkEMObnrBpx0cf9riODbdZJMYPnx43/tXUtihYtnyFd1s/ycFABAAAPR/VdZFCJCPmppV8d8/+nGcfc53oq6uPpJcMijmrracIrD+euvF7353eVz2i5/F+uuvFy2HXvckCKB/lOVyMWrUyEzCh+XLlw9MiNGnzlr4443X38ik3xcCgDFdFqAtQ4C777q36OfdZ5+9IyJt2u0hbfE6avz/pOF5DzrogD4VzfPnL4h5896O1uP/m4c2VFdXx6yZf+/T8R9wwH5RUVnR6pK0PP6WQcTRRx/V6wCjrenTb4mamlVhmD+AAABgSIUAEYX5+H+adm0ccdQxMX36jKitqx00QUDTB/U0YupRR8S999we+0/Zt+HYulu1bDW/qoPsBuOYsWOy6TNJRHV1zdAJABpDi4atF7Nog1GjRnZ7fZOGUveBWQ8WvR3g9ttvG5UVFd3+6FprjY9tttm6Ty+76dNnxJKlyzr91STJxV9u+GufTmHDDTeILbfYoss2S5Ikhg8fFrvttmsRr7kk6uvr49777u/mdenuP4AAAGCQhgOFECAfL774cpz21dPjmGM/Hg88MKtpWsBgGhEwZvTo+OMffxcnnXh8i+PqzboA7tiVytKlyzIr2isrK4fcROphw4Y19dVirVixsrBoXWe1ZIuu/84778Tzz79Y1HaAw4cPj917sDL+oYce0udznPXgg92+/mY9+PdYumxZrxcCLC8vj+2337bbwnv0qJExceLGRb1dfrhoUbz++ptDLqACEAAArGGFfpJEFyMBCkFAPl8fzz3/Ynzq05+LY487Pp588unBFQTk0ygvK4+LL7ogTv/6V7pdF4D+U19XFytWrCy+n6SFO+C5oRIANBzmJptMLP6hGs65R9s4Js3/cetttxf93Hvv1f3K+FMm79P7c8olUVNTEzNnPthN/Z/GqlWr4vHHnujVS7qxED/qqCNaL1jZgf332y8qKioK64z00QP3zYzFS5a0mGeUdHZhABAAAAx8pdJ5XdUwqDjNR319fTz51NNx3MdOiM985vPxyKOPxaraVYUgYIDDgMYpAd/+9r/EFz7/2RbTAda8azmoCo8kiSVLslkJv7KyMobSaI1cksRmm26W2eMtWbq0N80ef/7zDUVvB7jHHrtFV9NqRo0cFfsfsF+fHvuhhx6JZcuXt+utLV+5aRqRz6cx7epr+vQcu+6yS1RVjely4MiRRx5R9LW59777C+9B6nwAAQDA0CwcO/r7wtoA+Xw+7rrn3jjp5E/FEUceE9/97vfj6WdmN48KGKAwoPGu379+++zYfrttGo7BkNwBlaaFACDJ5tqOGDlyyMwCyJWVxbjx47ILAJYs7fHrN22YBvDmm28V1fa77rpLrLXW+Gi93WbhK0kittpqi1hr/Pg+Pfb1f76h6dibiv4WCUDTDoRpGo8/8WQsW7a81+8r66+/Xqy7zjot3gtafkXkkoi99tq9qOtSX18fd9x1t9c6gAAAYGiFAEnSkykBSdOH8traunjl1dfj17+9Ij728RNjj70mx/nnXxTPPfdC1OfrW4UB/RUIpPk0hlUOi9//7tcxfvy4NoXLmn19B6D6jzQiFi9ektkjbjJxYmGU9aC9nM1DwMvKcjF8xPBMHjWfzzdPAUjavibbXN+kcByramsL63YUcSqjRo2KzTaZ2MnrN4nttt0mysvLezV8PkmSWLFiZdzVUDSnbU+lXa9NY/78BYUdFZLevRfkcrmYetSRnb4GNt1001h33XX7PPw/ySXx3PMvxAcffNDq2rc+X/+6AAgAAIZ0odi8PkCa5iNN87FqVW28++578ZNLfx5HHHVMHHzIkXHuud+NRx5+tLASej+uGZCmaWy44Qbx/370wygr6/k/FcYKlMaiRYsyDQAGX7HfsYry8hg5YkRGAUDagzUAklaHlqYR111/faRp2ufXXXl5eWy5xRYdPldlRUWccMLxfXqLef75F2LpsmU9esdJ04ja2rq44a839ukcjpp6ZKfnP7kP6xe0dfONfxs0u6MACAAA6FMI0PVogLZBQPPWgY1/vvra6/G7K66ME0/5hzj8iKnxjW+eFY8+9nikkfbbNIFDDzkott5qq0iSXIuCLVX2Z99dOv1emkZ88MGHmT3Vzjvv1OY5B/Z6drjoe1q4yz1ixPDYYIMNMmnfNM3HosVLenB+SYvfSWPO3HmF9k/6cm6F5zr6mKlRXlbW6iWUJBGjR4+K7bbbtnen0vCav/rqa6Kurr6TBmx9HknDuTz8yGO9DzPSiG232TrGjBnduss0nMOuO+/c98uSJFFXVxc33nxzmPwPIAAAWE0qu6SHQ1jbjuEtjA6oq6uNt+bMi+v//Nc48cRPxi677hU/+MH/xJNPPh119c3TBDIvzPJpDBs2LM44/WstZhkr+gfC+++/n9lj7brLzkNmq7X11ls3Ro0aWdTq8o3qauviww97GaSkacyfvzAeeeTRop57u+23jVGjRrZ5DSWx5ZZbxPjx43p3fklEdXV1PPTwI+1q/fZLALau5J96+ul47733er0bQGVlZRyw/36FV32LUfojR4yMyVP2Lert8fU33owFCxa26JMdDf8XDgAIAACGWBDQ/WiAzoKAaJomUFtXFwvf/yB+8cvL45jjjo8DDzosLr74p7F48eLSjAhII445ZmpsvPGEjv9SEFBaDc371NPPZPaQ22+/XYzIaF59CV8uERExderUzB5y3ttvx6pVtdFB1dz5ATQUwPfce29R13CjDTeMsWPHRJIkzfVzEnHiJ07o00O++cZbMWfuvEjTfJviv/PziIioq6uL++6b2afnPOTgg6JxTYq08I4WEydOiPXXX6+o63LXnXdFdc0q7yUAAgCA1S8E6PnUgI6DgKaiOy1ME3jjzTfjwot/GoceNjWuu/4vTesEZFZ/pmmUlZXFF7/4+e4/oPv8XjKPP/FE1NXVFR/wpBEjR42Mrbfasotr3n8Xs/1AhOZvJEnEnnvsntlzzZ79bO8Xk2v4+QceeLDhmJI+vYZyuVzsv99+zefX8DAHHrR/n87l1ttuj5qaVS2aq2dhRkQS115/fZ/OZZ99945hw4a1yBuSmLDRRjF8+PA+dZckSSKfz8f0W27t4me6OzcABAAAQyoMiF6uE9D8rSQa9/jOxzvvvhdnfuucOOMb3yoUihlPCZiy7z4W6Sp99dtpAVm9sjrmz1+QSS2Uy+Viq622jIikxSF0MhG/tA3QxbeTyOVyse2222R2GI8//mR0uOJ/D47zjTffitdee72o9p/asJBe40NM3HhCbDxhQp+mN9x3/wO9P40GTzzxVLz//ge9/t2NNtwwtt1m66bfy+WSpt0B+jSlJIlYsmRJvPHGm50O/wdAAACwWgYBEX2YHtBmn+98vj6u//Nf46Mf+0R8+OGiTAv2zbf4SGw8YYLLNRDdI9JYtnx5zJv3dgaZQ6HQOuH4j0dZWVk0be3et2yipIHAAftNibXXXiuz9QruuffeXr4mWk8DuPPO4vap33nnnSLXIpg77NBDet8dkiSWLFnSEGakfTqXVTWr4oknnuz1pSkvL4/tttu2aQTT8OHDYu999iqqTf7+94fj/Q8+GKgOByAAAGBgg4DCh+ve7B7QMIKgoWhL0zSeenp2nHzKp6JmVU02IwHSiIqKithhh+0Kz+mzevY1fjftX1dXH7fedltTEVisvffeMzaesGEkSa7F5Uw7CAFKcbEbd7ro+K/ShnP83Oc+k0375pJYsHBhzJk7r8/nkyRJXH3NtX1u/zSfxtprrxWbbbpp01Xff78pfeos9957f9SsqulND2rVwPk0jSuv+lOvzqUxhDn8sEMbgqMkRgwfHptsUtyWkvfce183tb8RAQACAIA1qCzs2ToBrT8np2kazz//Ylx00U8zKRgbtw3bbLNNTQPot2vferpHmqbxyCOPRX19ffHldz6NESNGxMknndjDPlaCCKDLuf9JTNx4Quy33+TMnu/hhx6J+rr6PtxoTppeA2+88WZhFEYR7bX//vtFJBFrjR8Xe+yxR58e49rr/tzH12HS1NazZz8XS5cu7fW57L77rlFVNTYiIvadvG9UVFQUtUPD3Xffq84HEAAA0LIQ7OnuAW02EIxf/urXcc+992X24XrChht1VK9R0uvf3OCzn30u3u3lFm5dOfXUk2P48GHRelRHqUcBpF0W4Y13/4884rAYNmxY0U/dWChf8Yc/Rj4tZteKNGpW1casWQ8WdTy777ZrJEkSW221RVSNG9vrc/nww0Xx0MMPF3cF0jTmL1gYLzz/Ym+bINZbb71Yd911ItKIo444vO/XJZfESy+9HPPefruT/j4wwRSAAACAXhcKHX8VXwh2/oG4xZoALT7kr6qtjSuv7N1Q365svc3WkcvlOttinMyL/tbtW11dE3ffdU82vTSfxgYbrB/HHXt08+XrbE2+tHEIeFr066Lj4j9tep4kSWLMmNHx1a+e1rDZRVp0c3744aJ45ZXXotUG9u2K6+4LzjRN489/vqGo19Puu+0alZXDYoftt4+ysrLe3T1PIp566umorq5p0Y59O476+vq46W/Te3Uujddi6pFHRnlFeey6yy5FdYnbbr/TmweAAABgaBf9hWKp9Vf7YCDDwrCrn0/TmDfv7airq8vkLMePHx8V5eUu90AEAg1//OWGGzPttj/4/n/Fhhus32p/+q77aF/6cHOB39nfRdpYhCdxzr98K9Zff73MFv975NFHY/6ChZ0+Xsv6t6taOE3TeOXV12LJkiV9HoUxfvz4OOLwQ+Lggw7qXS9oOLCr/jQt6uvzXV6DnoYZDz30SJ/a+NBDD4lddt4pNtpowz79fuO5TJt2dafva+7+AwgAAAZt8d++2G/7YbttIJDVyIDuy65XXn2tT3N9OzJixPAorygPE3YHziOPPhYvvfRyJiM60jSN0aNHxff+6z8il8tFkkSX2wK2D7R60gO7Kv6bfyxtSDkm77t3/NM/fSaTl0ZjG/3+93+IfD7fOlDpVaHZPHf+vffmx+xnnu3zC3L48OHx6U99Krbbbtte//qyZcvj2Wef77Lo7j7MaD6X5194ofdrGqQRO07aIT7/uc9GWVlZHy9MxJtvvtUmlEm6OFYABAAAg6LwT5uGLfemIGsdCKRNX51PH+hrWJDGihUronpldTZnbKuuEku6LUDz+TR++tOfN2wBmUEIkE/jqKOOiKlHHR5JkmtT26ed9t/G/tD1V1fBWNpU+acNxeqIEcPjh+d9L7u+1lBozpz1925eP0n0aDvONKI+n49bb7u9z6+fioqKmDx5n8IIh14O/3/xxRdjbqudDDoLM3q2tWh9fX2vtzZsPIejjz6qMB2oj+677/5YuWJlGP4PIAAAGCLFf+OH7iTWXWft2GfvvZqGMPe9wI4Oi6buRhh0VTVUja2KMWPHZnLWNTU1UVdb50N7f9X9nYQAd99zbyxYsCCzG6RlubK44Pz/iW232SpyjVMBehgC9PX10/hH46J/FRUVcdGP/19stdWWRa0q39Yvf/XrqK2t66Khkw7/P+niR+9/YFZx7V1W1qe753fccVfUdbsLRNKLjpXEn/9yQ5+DjD519YaGnX7LjE7fRQo/4u4/gAAAYJAU/21N2GjDuO7aq+Knl1wU66y9VmZb5fWl6E/bfJD+yEc2jeHDh2dyPEsWL4najNYToK99Io3FS5bGH/5wVaaPWVVVFddcfVVss83WTSFA+/UrsnjttC3+IyoqyuPH5/9PfPSjx2aWLSVJEu+8825cfc11XfxM54Vx+9ddcwDz0ssvx7x5b0eSS/rc3n0Z4XBnFwtAdrtAaCffe2b2s/Hee/N7/Z7V5xEaScTSZcvipZdfNaIIQAAAMDSK/7afWysqC3fDTjjhYzHjlpvisMMOjvLyshYfyrPeFaDjoqr1caWRJLk48ojDo7y8LJO7qq+88mphLnUand04paSa96T/5eW/iQULFva5CG3Xi/JprLXW+Ljm6itju+23jVyusP1k6+7a1/7b+nfSVnf+K+PHF/woTjzxhGxW/W943Egizjvvf6K6uiY66rDd1btdFcRp2mL/+v646rkk3n3nvXjxxZeis+H/hWbr7YJ6adTW1sXDDz/Sr6/fp558Ot57b36LNyxvJgACAIBBWoB1VJ9sttlmTUXUBuuvH7/7za/imquvjEMOPijKynINawTkOimKitubvHUB0Lr432D99eIzn/mHzM7+tddf0wUGhTSWLl0WF150SbaPmk9j7bXXiuuuuSoOPGD/SKJ5Ofn2uwCmvfhq/s/GNTNyuSSqxo6Jy/7v0jjxE8dHmk+zuyOcRLzxxpsx47bbu3nMvhWaSZLENddd169X/M677+5y+H9fRx2laRpX/OGPRT1Gr8/lrrsL10WdDyAAABjUZVcnxcQ+e+/d+mfSiL332jOu+P2vY9bMe+Iz//gPMa5qbOSSXPOH7KIKqja/3K74T2LkiBHxs0sviaqqqqLv/idJEmmaxmuvvWHY7oBrrpr+NO2aeOXVVzMt3NJ8YTrAlX/8Xfzi/34WG2+8USS5XNM2gU3TUnqSW7Uo+htvUOdyuaioKI9TTzkpZs28J4488vCSLClx7n98N2pqaqKYcK2zZk3TNF54/sXC0Plc/1Sxf5p2dVHXuf2vNo8mef31N+PDDxf1W0F+2213eBkDCAAAhqayXC7WW2/ddgVCmi98bbzRhPjvH34/Hrj/rjjvB9+N7bbdNsrLK1ps1p10Ush3X1ylLYurpg/6uRg1alRc/qv/i3322SubBdWSiNra2njp5Vfa1qAMWAiQRn19Pr7xjbNiZfXKTAvRNF/oVMceOzVuv/Vv8bnPfjo22GC9hq0Ck+Zum3Rc8Lc6zKR5l4wRI0bEPnvvGddf+6f48QU/inFV47K98x+F4fI33TQ97r1vZsPjtj/Qni0y19Xc+TSqa1bFE088VfornUvi3XffixdfeKnTLfMK59PXkQ5pvDd/QTz99NP9ci5vvvlWvPnWW50eW+K9BUAAADA4tL8jmCQRubJcjB8/rvPfaggDxlWNi89+9h/jbzf/JW752w1x7r99O444/NAYPWpkU4GU5HLRekuypH2xn7acQ91cXCVJEmVlZbHffvvGrbfcFAceuH+mq6nPnTMv3pozN+wAMIh6ZJqPp56eHT//+S8a+mOGIUBDvx07Zmyc94P/ijtvvyWu+O2v4jOf/lSsv956hT4XSes/cw1fLfpkRUVF7L/f5Pjuud+Je+66La65+srYfffdMpvv37bAnDtvXvzLOf8aaZrvY0EcPSpI8/l8/OlP0zJv9448+OBDUVOzqogiv+tzSdM0br/9zn7ps3fccVfT+ykAA6NcEwD0tChq/6E7l8vFuHHjelRQRRpRWVEZ22+/XWy//Xbx1a9+Oerq6mP2M7Pjjrvujhv/elMseH9h1Nfno76+Purr85Gvr498mnb48b6srCyGVVbEsGGVceCBB8SXv/SF2GmnHQvPl8/2A/Ydd93dTVFF/yqMAkjTNP7vsl/FscceHdtuu03mdVWappFEEuPGjYtDDj04Djn04Pjv//5+vPXmnJj39tuxcOH7sXDhwnjnnXdixYqVscEG68f6668f6667Tqyz9tqx2Uc2jTFjxrR4wOz7ZmMRXl9fH+ec82+xfPmKFnf/e1YEd9XGnbXLy6++GkuXLYsxo0eXpJ5tnHozbdrVke8kLOn5+XR9Lg/MnNXqOUvz/pnGNdde1+WxACAAABjUyhpHAPTw82zaZsx+eVlZ7LLrzrHLrjvHv5z1zVj4/vuxdMnSWLZ8eSxftjwWLFgQzzwzO958882oWVUTFRWVUVlZERtP2Dj23Wef2GjjjWLjCRNi5MgRJSmukiSJlStXxv/94rIOPrg3D4nupsbIrOBtG8gkQ3jMcNqj9m8+187apLq6Jj79mX+KGbfcFOusvXbmfaBtn02SJDbdbJPYdLNNenSSpSj42/bRSCIuvvincd/9MzsNqrLZX755a4S5c9+OF154MfbcY/eSdfkli5fEa2+80enw/86/17tzefW1N+K1116PzTf/SGnCjFwSb7/9Trz55lvdTGUwBwBAAAAwaMu3wgiAsWPHZlJcJUkS66y9dqyz9tqtfua4444ZuCIrifjb326JBQvez6joGNoG6qyTpLMQoNAB3n13fnzxi1+J66+bFmW5spIu1tg2EBgMF+Uvf/lrXPLTn3dTXBZTJLdXX18fd915d+kCgIh48omn4t133otsGrzzc8nn6+OOO+6KL3/5CyU7l0ceeTSWr1gZ7v4DDCxrAAAUUQpuuOGGmQ2bbbl4YNuvlov/t/v7EhV7SZJEXV1dXPqz/2sRenRUBielLZAHPGsYmIKlozUnOmucNM3Ho489Ef/27/+5RmUzSS6JZ56ZHf9yzneaXyCdNkD2DXPf/Q+U9Pxuv+POTof/Z3lOSZLEtdddX7L3kTRN4/o//6XT9yp3/wEEAABDQuOc+5KXoGna9NU/xWdhWPXvf/+HeO2117sZgtxRybw63eVL+v05mov91otCNm0e0UkIcNWfro7zL7ioaTG+1b34f+XVV+MfP/uFqKlZVbLisrP2joh49tnn4/2FH2S+HWDjtbvn3vsz7Yed952IV159LebOm5f91oZJxIoVK+OVV17r9fsIAAIAgEEkjYkTJqym1VXE3Hnz4scXXtJwBzLt8e9l3sqpIcPdN3Dh+/l8Gpf+7H/jRz+6oGkLvtW1+H/5lVfjE584NRYufL/FvP9SbCuXdPr6r62ri/sfeKAkl/nVV1+LN958q9uQICt1dfVx//0zS3K9nnvu+Zgz1y4iAAIAgKFc/qeFKQCro+rq6vjSl74aS5ctj86H/vdXyTuIithBUVB3FQKkkc+n8fP/+2V8//v/vVqGAEkuidmzn4sTPnFKvP/Bhz0o/os9/7TLIvyqP11dkvO89dY7GsKvtMRduHlHiWnTrins/JBxn7nrrrsjny/9VAYABAAAJbXBBuuvXsVVw37uF170k3hm9rMttlPr7gN66T7Ap2vsXcOk6+uUdBUC5OOXl/8mPv+F02LpsqWrxZSAxr557bXXx/EnnBwfdFH8Z9svky6nATz19NPx4YeLMhs633idrvrTtBbXLMtFDTt5naVpzJkzNz78cFHmL+c77rq702NI1P4AAgCAwVmAtP/eJhMnrlbFfyQRV199bfzyV79pWHW+N8V3UpIP9M0jAJIBvNbJgPaz3v1s8x3d226/Mw4/4ph4+ZVXh/RogCSXRF19XfzXf50XZ5717VhZ3XI1+aSTdin9uaZpYRvGp556JssOH6+//ka8++67JVzgs8OziQUL348nn3gy0/eUt99+J1588SX/gAAIAACGVAnS4TZs5RXlzcXzalD8//HKP8U5/3pu1NXVRdcrqvefzkYAlK7Ju77z3l/9rbifaQwB8jFn7rw45tiPx29/d0XU5+uzX+StxP0yySXx0ksvx/HHnxyX/+Z3LRbDTPqx+E86HTpfX5+Pa669NtNnu/2OO6O6ZlWJ+n3S6ffSNB+33Hpbpt34gQdmtRj+73Y/gAAAYMgUI+2/d/wJJ8dvfvP7qKuvG5LDrJNcocBavmJFfOnLX41/+7f/bCj++/phPYnV+UN+aa5vUtTvdrwzQMvHTWP58hXxn9/9fhx73PHxwgsvNl33wdpfG4+vZlVNXPDji+LoYz4WTzz1dMOQ/86DqdLe+e+8cJ49+7lYuXJl0eFKkiSRz+dj+vQZTdeuq+fN+lzSNOLBBx/KpK83/v4Vf/hji3Ppz+sFgAAAIOMPzQvf/yD+879+EFP2PziuvHJarGgoAgpztAfvB9vGO6tLly6NadOuicOPODpumXF71Ofz0fWiZ9FFwbm6Ffs9+15fZbe2QVdTLxoDmcLigM/Mfi6OOvqj8a//+u/x9rx3CtMCBlEQ0NgvV6xYGddd9+c44KDD4ic//d9YWV3T7Xz/gSom0zSNt+bMjblz52VyKRctWhyvNm29WYriP7p8jb/x5pvx/PMvZJIxLFiwIF597fUOj9vcfwABAMAgl7b70No4HHnevLfj2985N46aelxc9aerY868uYOuuGpZYC1YuCB++tOfxxFHHhv/cs6/xZtvzenh3dWefYAv9dZ9pW/Sjqd89E/VUoqRF81TAmpr6+KPV10dBx16RHzlK//cVOwNZF9tvOO/dNnSuOyyy+PIo46Nb37rnJg79+0W/XLgi//Omqeuri5uvnl6Js/x4IN/LyzEV9Lul3T6WGkacddd92byLE8++XQsX768i/cDKQBAfyvXBAC9KbIKIUDbz7ONH3Bfe/2N+Pa//nuMGDE8Nv/I5vGpT54SRxxxWMe7BaSlK5Yb5/S39e6778Wll/5v3PDXG2PxkqXRuFhc98VVR3/fcVtERIwcObKpsCvqH6mK8nbbAGa3vVv3xV7bc6usqMzkvCIickku8wKvUMCnHYcXLaYEpGlhWsDN02fEbXfcGTtsv1184fOfi0MPOyTGjB7drp9m1UebAoY25/n0U8/En66+Jm666W+xaPGShtdFvtvr3F99oXXh3FH7pjHrwb/HmWeeUXTfuP3Ou0pc/Hd9LkmSxJ+mTYuvf/20os/lxptu7mL7P8U/wIB8mp0wcYtUMwD0RtpQoHT2dy3vpKZRliuL7bffNg45+KDYYYftY8edJsXoUaNj1KiRUVlZ2ZOn6tPn58WLF8fChe/HfffeH888+1w89dTT8dLLLzcNLe55gZX0qi2SJImjjjwsdt9t16itrevweJPOTjFtylkiV5aLpUuXxeWX/zaqa2p6cUwZXukWJ5YkSWy5xebxqU+eHNXVNd2eV4fn1mD48GFx8SWXxtJlzXdHsy1mOwsBOjqgpCk4qKysjIMPOjD23WevOOCA/WO99daNcePG9b5vdnEq1dXVsWjR4nj88Sfi4YcfjVtvvz3mvDW3qQEK7ZH2sG8ORCHZ8eu/vLwszjrzjEiSXHO/Sbo+wrTNf5SVl8UvfvGr+KCDEQCl6fcdv37Lcrn4yle+FGPHjIn6fH2P3nZanksul4u6+rr43e//GAsXLuwgZBAAAAgAAIZYCNB1gZV2+JE5SSKGDxse48ePi3HjqqKqqiq223ab2P+A/WK9ddeN4cOHR2VlZVQOq4xhw4bFsMrKqKws/HdjqFBXVxcrV65s+KqOlStXRnV1ddN/33PPvfHkU0/H/Pnz4733FsSq2toeHVvfC6yO7yJ21SatC46uy4u2d5/7r3hIOznWpMdFYddtmPbwsbMtVHvSV5MkorysPNZff71Yf/31YvPNN4sp+06OiZtMjLXWXivGjx9X6KsVFVFZWdnqetfV1cWqVbVRW7sqFi9ZGh+8/34sWLAwnnzqqXjsscdj/vyF8c4777QKP3rTLwdHAdnx6799v+/8GnTWNzoabVHa8+3JuXT82u37uQgAAAQAAEMwBOi+wOp8+GvLD9i5XC7KynKRS5JIcrlIkqTw341fucL/pxGRz+cjzaeRT9MW/52PNC0s9JbP51t8+O5wInsJiqti2qJnxzaQd3x7V0RHP7V5f5xDcz9NkiTKynJRVlYW5WVlzX2zoX8mDaNK8g3rYqRpRL6+Purq66O+Pt/ULzvvm92f/+C6c5xFvxgsYUd3r9+eflRMhtD1A1gzWQMAoM86XxOg4w/EaZviofn/6+vTqK+v7+WH5bSLaQi9+2DeusDuj7bo5aMP6F3DzuZ9Z3luSb+cQ9dFXkd9tbmfpmkhfKqtrevxYoGd3+HvXbsN1rvGXff34o+3/9ZkTKKo+UaDpp8DIAAA6JcQIOnBQmldDYtPOyieIqJPW8UlRZ5P8UVE94VRfx9bfxR7g7nAa9lXe3IenfXVtIPCvrTXb/AWjo0jI9IoxaYX/X/ezUFX1n3dln8AAgCA1SwEaF6BvXUBP3iL2tLcVW3cXiwtuogYXHd9kxbHlPbi+g6282p/HoOtrw69OeJJJv1icJz76vr6BUAAAFDCAqvxA3SxBUFpC6xSfjhvvjvamyKzf44ti3Pr/fUdfOc2uPrq0Lj22ff5wVksJ33uF0P/OgIIAAAourhKMttLvTcfxNtu79WT7dVK3Q7NOjqWdIgUDd2dV2drPyRDrq+WZjpHyz45lK57b9uz+x00Bm/faLl7SU+uz2Dv5wAIAAD69UN0l7vEt/6bPt9x66zAGugP5kkR3xsa17fz7yVDvK+mXfaxzrc+LLYvrD6v/eJ+xrkAIAAAWI0LhLQPi2b58E3/99OuC359EgAEAAAo5tFPAYB+l9MEAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAwJqovGblCq0AAAAAqzkjAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAGAJgAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAGAoKdcEwJpu8rZpXPftfERlPpKKNKIyH1GeZvocs57JxYVXVcSsZ4ZO7jp2VBpf/lhdfOlj9TF2VIbtUZtEfn555BdURH5BeTz7WhJH37RKRwQAEAAAlFY6qiwizUfU5CKtiYgoi0gi00Bg8o75mPw/NUMiCMi88G9T8KeLylr99eKlqU4IACAAAOiPd8IkYlRZxPL6FqlAlCQQGMxBQGaFfzcFf1vpcl0QAEAAANBP0nFlkbQMANr9QLaBwGAKAoou/HtZ8LeVX6H/AQAIAAD6S1V5xLxezEPPKBAYyCCgz4V/kQV/q2asjoh63Q8AQAAA0E/SqrJIinqA4gKB/gwCel34Z1jwt2u2FUlD4wEAIAAA6Jd3ww7WARiAQKCUQUCPC/8SFvztmsn8fwAAAQBAf+t2HYB+DASyDAK6Lfz7seBvK78i0fEAAAQAAP2st+sA9EMgUEwQ0GnhP4AFf6smMP8fAEAAADAgBWmx6wCUMBDoTRDQrvCvTSI/r2LAC/52p+zuPwCAAABgYN4RM14HoASBwOQt0pj8g1Ux6/mkXRDQVPhPzcfoFWWRf3lErBpEBX+7UzT/HwBAAAAwYEVpKdcByDAQ2HeDiOv+tT5mvZCPy28si+3H5+IL+yYxesXISO8oi9oh0Nbm/wMACAAABk5/rgOQQSAweZMk9j6uIvILyiJ9OxkyG+qZ/w8A0P9ymgCgRWFaVTZ0DrY+ifo3KyOtzkUyJo1keDp02tndfwAAAQDAgGpcB2AIFf+NhlIIYP4/AIAAAGDgi9NxgzwA6KD4H2ohgPn/AAD9zxoAAG0N5nUAuij+W4YAERFp9eAssgfT/P8bbrgupkyZnNnjffzjJ8bMmbOKfpxzzjkrzj77rMyO64ILLozzz7+wX9p04sSJ8fjjD2X2eLNnPxsHH3x4yY737rtvj0mTdijJY0+bdnWcfvqZg65NGy1evCQOPvjwmDNnTsn74GAwc+as+PjHT/RvHLBGMwIAoG2BOljXAehB8d8yBBisIwHM/1+9ffKTJ2f6eJMm7RATJ04s2fGefvo3S/bYp556SibHft553yvJ8V1wwYUdFv8ACAAA1hyDcR2AXhT/gz0EMP9/9XbqqSdn/phZhwotzZ79bFxwQelGR1x66cVF/f6UKZPj6KOPyvy4pk+fEZdd9isdFkAAAMCgWgegD8X/YA4BzP9ffU2ZMrkkd+tLESq0dP75F2YydaOzNilmmsnZZ38r82NavHhJnHHGN3VYAAEAABFRWAdgiBf/gzEEGEzz/8neqaeeVJLHnThxYsnm6Tc6/fQzY/HiJSV57L4O4T/66KMyXaOi0RlnfLNk5wqAAABgyBkU6wBkUPwPthDA/P/V29SpU0v22Ked9sWSHvucOXNKdld80qQd4tRTT+m34KAr06fPiOnTZ+isAAIAAJoM9DoAGRb/gykEMP9/9XXqqadEVdXYkj1+KcOF/iiOzznnW71qn6wWEGzJ0H8ABAAAnRWrA7UOQAmK/8ESApj/v/qaOvXIkj5+VdXYkiyG19YZZ3yzJCvjT5w4MU477Us9PtdS3P039B8AAQCwxluypJOCeCDWAShh8T/QIUBn8/+X1OmDQ93EiRP7pTg/5ZSTS/4cixcvidNPP7Mkj/3lL3+pR6MATjvtS5mPprjssl8Z+g+AAADg2efz8eBD7SvTfl8HoB+K/4EMATqb///79yQAQ11/FP+Nz1PKaQaNZs6cVZIt8npyZ7+qamx8+ctfyvR558yZU9KtDgEQAAAMKRddWtv+m/25DkA/Fv8DFQJ0NP//oaX18dBS2wIMdaXepq+l/lgLICLi3HO/G7NnP1uCtup6bv95530v85CjlDscACAAABhyHnyovuNRAP2xDsAAFP8DEQJ0NP//0nnu/g91kybtUPIt+loq9W4ArQvn0syZv/TSizv8/sSJE/u0W0BXLrvsVzFz5iwdFQABAEBLHY4CKPU6AANY/PdnCNDR/H93/1cP/Xn3P6IQOGS9On5nZs9+tiRD56dMmRxTpkzucTDQV4b+AyAAAOhER6MASroOwCAo/vsrBEjd/V+NA4BT+v05P/nJ/gsdSnUHvW2x31koUAxD/wEQAAB0od0ogFKtAzCIiv/+CAHazv9393/10F+L8rXV36MOPvvZz2deSLcd7n/22d/K9PEvuOBCQ/8BEAAAdKXDUQBZrwMwCIv/UocAbef/u/u/euiPbfk6K577c92BxYuXxBlnfDPzx21c8O/UU0/J9O7/7NnPxvnnG/oPQHvlmgCgtYsurY1r925R9FeVR8xbtdoX/y1DgIiItDrJ5PHazv9393/1UFU1tt+2/+vIaad9MU4//cx+e77p02fEtGlXZzrloapqbJx22pcyH9Fw+unfHHT9ZebMWTFr1oMDegxvvTXXCxcQAGgCgNYaRwHs2xACpFVlkUkpPASK/1KEAKm7/6ul/tqOr+vnP7Nfn/Pcc78bU6ZMznQRwrPPPivTY7zgggtLsn1hsWbNetCoBIBBwBQAgA60Wgsgi3UAhlDx3zIEyGI6QMv5/+7+rz76czu+jgzECITFi5fEZz7z+UF7TQz9B0AAANAHbdcCKGodgCFY/GcZArSc/+/u/+qhv+fgd2Yg1iAo1daAxVq8eMmgHPoPgAAAYEhoNQqgqo8zpoZw8Z9FCNBy/r+7/6uPgb7732igdiE4//zBN8x+sA79B0AAADAktBwFkFb1YQTAalD8FxsCpO7+r5ayGHqf1bZ6A7UWwWc+k/3WgH01c+asuOyyX+mYAHTLIoAAXWjaEaBxHYDlPbyDvRoV/y1DgIjeLQzYOP9/Tbn7f95534vFixcX/TibbDJx0J5jVovg3XLLLTF16tSi7+CfdtoXY9q0q/u9HebMmRMXXHBhnHfe9wb0ehSG/p8ZACAAAChSyx0B0nFlkfQkAFgNi/++hgCN8//XlLv/g2FefKmdeupJmTzOLbfc2vB4pxTd5hMnTow5c+b0e1tcdtmvYvLkfQd0O8QLLrhwQM4dAAEAwGqpaRRAVXnEvFVrbPHf2xCgcf6/uf+rj6qqsZkMuV+8eElMnz4jxo6tKjoAiIj45CdPHrDV788445sxZcrDA7IWwVAa+n/qqSfH5Mn79vvzTpt27YCMEAEQAAAMUU2jAHYvi2QNL/57EwKka9jd/zVBFkP2IwrD/5v/vDiT4nKgAoDFi5fEZz/7+bjhhusG5HmHiokTJ2YydaS3Zs160AsXoAWLAAL0wEWX1javA7CGF/8tQ4CuFgZMl7v7v/oFAEdm8jiNw/8XL14SM2fOyqS4HMjpFwNxJ/6MM745aBYhBEAAALBaaRwFkI4rU/z3MATIr0jc/V+NTJw4MbO57i2L/sYwoFgDvTVhf27DN336jJg+fYZOCYAAAKBULrq0trAOgOK/2xAgrY54aJG7/6uTrIr/6dNntLpzncUIgIiB2w6wUWE1/m/2y/OcccY3dUgABAAApfTgQ/Ux65VE8d+DECB193+1k9Ud9rZ3/GfPfjaTVeyrqsZmsqBgMWbPfjYuuKC0axEY+g+AAACgnzSNAlD8dxkC/P3dvLv/q5HGrfayCQBuafe97EYBHLnaX4u33rLlHwACAIB+8eBD9THruVD8dxMC/ORld/9XJ1nd/Z89+9kO715ntQ7A0UcfNSDb8TWaNGmHOPvss0r6HJdeeokOCYAAAKC/vPVSLtIab5+dSWsj5q7Ma4jVSFbz66dNu6bD72c1AiAiBnQaQH8U55Mm7RDnnHOWTgmAAACg1CZOSOLkg3ORG5ePSLRHW/lFSdS/m4szNq3QGKuJLO+qd7Zy/eLFSzJb1f7UU08ekHY677zv9dtWhGeffdaAbnsIgAAAYI1w5hmVEQvyEeWpEKCj4v/twj8rn9ioPCYM0zirg1NOyaag7m6xv1mzHszkebJcr6CnpkyZHKed9qV+fU5TAQAQAACU0MQJSZx8QIu3TSFAh8V/RERSkcYZGxkFMNRVVY3NbPu/7ob5Z7mvfVZrFvS0jS699OJ+vzamAgAgAAAooaa7/y0JAdoV/xERURFxwjpGAQx1Wc6n72z+f6M5c+Zksh1gRGQWWvTE2Wef1e8jDlo+t6kAAAgAADI2cUISJ59QHrGwg8Xt1uAQoMPiv0FSEUYBDPkAIJvh/3PmzInZs5/t9ueyGgUwceLEmDJlcsnbZyCG/rdlKgAAvVGuCQC6d+YZlYX/WNDJ6vYNIUB+US4iVfxHRERlYRTAT9+ujXk1a0ajFLa5W1z042yyycQBu6vcsojO6u5yTwv7WbMezKygPvXUkzLdXaCtgRr631bjVIDzz7/QGzUAAgCAoguhru7+r6EhQLfFfxTWAUgjiTM2qohvv75qjegr55773UyKznPOOavk+8l3J8t59D1d4G/69BmxePGSTHYdKGxdeGbJ2mcgh/53dCzTp8/o0SiLgTJnzpx46605/f68b7011z9iAAIAgJ7r9u7/GhYC9KT4j4iIhtH/a9oogNVFVvPoe7vF38yZszJ57qqqsXHqqafEtGlXl6RtBnrof1uXXnpJfPzjn4jFi5cMyv40bdo1RikACAAABremu/8R3Y8AWANCgB4X/w2Sioi0NtaoUQCrS/Gf1d3tqqqxsWDB2wNyHlOnHpl5AFBVNTZ++tNLBt01mzRphzj77LPi3HO/qwMD0CmLAAJ0oenuf0TPRgC0CQFWp4UBe1v8R0REQ/PZEWBomTr1yNXiPI4++qhMphO09NOfXpL5Y2bltNO+1C+LHwIgAABY7fTp7v9qGgL0qfiPwjoAjewIMDRUVY1tmD+/eshyK8Ojjz6qX7cY7ItLL7140AYUAAgAAAatPt/9X81CgL4W/xHRtA5AhFEAQ8XUqVNXqwIyq60MB+vQ/7YmTpw44AtIAiAAABhSWt39j+jbCIDVIAQoqvhvkLQIAYwCGAoF80mr1flMmrRDJusZlGLof+OuB1kzFQAAAQBAL7S6+x/R9xEAQzgEyKL4j4imdQAijAIY7CZOnLhaFo7FbmlYiqH/ixcviXPP/W788pe/Ksk5mwoAQIcfSTUBQJsiKMu7/x2EAENhd4DMiv8orAOQtkg+7AgweA32+e3FnFdfV8efOHFiSYb+//KXv4o5c+bE+edfGKeeenJmuy60PO7BtCvA5Mn7xjnnDPzUhLfemluSrSEBBAAAQ1Tmd/+HWAiQZfEfEa3WAYgojAL46du1Ma8m1dkGmWLvlA9WjSMbZs6c1evfLcWd9Dlz5sRllzXf+T/33O/G73//mxJczy/FLbfc2qfzztqUKZMHxeiSmTNnCQCANZopAAAtC4W2d/8jshsB0CYEGIzTATIv/hskbUIAawEMPlnNlR+s+rK2Qanm0p977ndbzf2fPn1GyYp0UwEAEAAAdKLd3f+IbEcADOIQoFTFf0S0WgcgwloAg9Hqeve/UW+3NizVavozZ86K6dNndBgKlIJdAQAQAAB09EG5P+7+D9IQoKTFfxTWAWjLKIChXSAPNVVVY+PUU0/p8c+X6s756aef2eH3Z89+tmRD00877Uur7foOAAgAAPqk3+7+D7IQoNTFf0S0WwcgwiiAweTUU09ZI4aJT516ZI8L5lIM/b/gggtjzpw5nf5926kBWSrFNoYACAAAhqQO7/5HlHYEwCAIAfql+G+QdBACGAUwtArjoe7oo4/qtgieNGmHkgyZX7x4SauF/zr7mVJtC1hVNbYkuxkAIAAAGHI6vPsfUfoRAAMYAvRn8R8R7dYBiDAKYDCoqhq7Rg0P724awKWXluZOeU/v7p9/ftejBIpx9NFHmQoAIAAAWLMN6N3/AQoB+r34j47XAYgwCmCwF8S99fGPnxjrrrtRZl+dzZnv+/me3OnfnXPOWTFp0g6Zt3Fvt57L+pxbMhUAQAAAsEbbeONO3goX5Pv/YPohBBiI4j8iOlwHICKMABjwAODkzB5r8eIlmW9nd8stt2T6eJ1td1iqof8RvV/hf+bMWSXbFtBUAAABAAAdWZgfmOctYQgwYMV/g8TN/kFl0qQdMr3jnXWx3hgqzJ79bKaP2dGWh5deWpqi+LLLftWn4y/lKABTAQAEAAC0tSA/cM9dghBgoIv/iOhwHQAGTpZ3/wsBwK0lOc5bbpmReQHcUqmG/i9evCQuuODCPv3unDlzul00sBimAgAIAABotDA/8MeQYQgwKIr/6HwdAAZGlneBFy9eEtOnzyjJcWb9uBMnTmza5q+UQ/8vuODCorb1K/b3u2IqAIAAAIBGC/KD4zgyCAEGS/EfEYV1AEz5HzTFf0dz4fuqVHPWIyJmz34285XxTz31pKiqGluyof+zZz9b9B38YkYQ9LQPmAoAIAAAYGF+8BxLESHAoCr+GySmAQwKU6cemenjlWr4f6OsA4apU6fG2WeXZuh/RO8X/uvMZZf9qmTbAkaYCgAgAABg8IwAKCIEGIzFf0REmAYw4Kqqxma+/V8pFgBs/fi3Zt4Gp532pZIc67RpV2caWJRyQUBTAQAEAABrtoX5wXlcvQgBBm3xH3YCGAymTp2a6eNNnz6jZHPVG5VyikGWFi9ektnd/5bnXsrzP/roo0oWhgAwyD6HrbPOhm7FAGu0ffcui2v/OLz5G8/XFb4Gq7ok8otyEenQK/6bjnFh0nT8Dy2tj0+/UDMgxzFp0g5RVVWV2ePNnj07k0J44sSJsckm2c3Pf+utOa2GkZf68YfK9SpNALA4820LIwp36idNmtRvx511H1ndrw+AAABgqAYA968afFMAehgCDIXiPyIiXZJEWjPwAQAAwJrEFACAtgZ78R/R4XSAoVL8R4R1AAAABAAAA2xhfugca4sQYEgV/2EdAAAAAQDAQFswdAKA/KJcvPlyEmfdXBfXPpuP3Lh06BTW5dGnbQ0BACjuIxgAjQbxCID8olykiwtz/996J+KnL9fG9XPrIyLi2sjHT56rizP3LYsTt8lFujyJdEVS+LN2cJ5PUhlN6wAAACAAAOhfg2UEQF1Dwb+8UPDnFxVul89dmbYq/FuauziNs2bUxcUPJnHmvmVx0qTCIK+0NgZnIFCRRtQYBgAAIAAA6G8Defe/oeDPN9zhT5e1Loy7Kvx7EgQk49KIcemgCgSSik53MgQAQAAAUEL9efe/m4K/L4V/T4KAxsJ7UAQC1gEAABAAAAyIUo4A6GHBn0Xh39MgoNFABgJJpW4HACAAAOhvWY4A6GXBX4rCv7dBwIAEAhUmAQAACAAA+lOxd//7WPD3R+Hf1yCgPwKBIbNtIQCAAABgNdHbu/9FFvwDUfgXGwSUJBCwDgAAgAAAoF91NwIgo4J/MBT+WQUBWQUCRgEAAAgAAPpP2xEAGRf8g7HwzzoI6GsgYCFAAAABAED/Ff91uZIU/EOh8C9VENDTQGDMcF0QAKA/JOuss6ElmIE12tgREduNzJX0OR56Pz9k22fjqiQmji3dRP20NuLv7+Z1RAAAAQAAAABQrJwmAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAQBMAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAA/58dOyABAAAAEPT/dTsCnSEIAAAAAEAAAAAAAAIAAAAAEAAAAACAAAAAAAABAAAAAAgAAAAAQAAAAAAAAgAAAAAQAAAAAIAAAAAAAAQAAAAAIAAAAABAAAAAAAACAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAEAAAAACAAAAAAAAEAAAAACAAAAAAAAEAAAAACAAAAABAAAAAAAACAAAAABAAAAAAIAAAAAAAAQAAAAAIAAAAAEAAAAAAAAIAAAAAEAAAAACAAAAAAAAEAAAAAAgAAAAAQAAAAAAATwEAAP//AwDCUED8rClxvwAAAABJRU5ErkJggg"},{ name : "unlit.textured.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7DQoNCnZhcnlpbmcgdmVjMiB2X3V2Ow0KDQp2b2lkIG1haW4oKSB7DQogICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYpOw0KfQ"},{ name : "unlit.coloured.vert", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uOw0KdW5pZm9ybSBtYXQ0IHZpZXc7DQp1bmlmb3JtIG1hdDQgbW9kZWw7DQoNCmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzQgY29sb3VyOw0KDQp2YXJ5aW5nIHZlYzQgdl9jb2xvdXI7DQoNCnZvaWQgbWFpbigpIHsNCgl2X2NvbG91ciA9IGNvbG91cjsNCglnbF9Qb2ludFNpemUgPSAyLjA7DQoJZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogdmVjNChwb3NpdGlvbiwgMS4wKTsNCn0"}];
var __map_reserved = {}
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = $global.DataView || js_html_compat_DataView;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
var global = window;
(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var setImmediate;

    function addFromSetImmediateArguments(args) {
        tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
        return nextHandle++;
    }

    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    function partiallyApplied(handler) {
        var args = [].slice.call(arguments, 1);
        return function() {
            if (typeof handler === "function") {
                handler.apply(undefined, args);
            } else {
                (new Function("" + handler))();
            }
        };
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    task();
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function installNextTickImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            process.nextTick(partiallyApplied(runIfPresent, handle));
            return handle;
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            global.postMessage(messagePrefix + handle, "*");
            return handle;
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
    }

    function installSetTimeoutImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
            return handle;
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(new Function("return this")()));
;
snow_system_input_Scancodes.MASK = 1073741824;
snow_system_input_Scancodes.unknown = 0;
snow_system_input_Scancodes.key_a = 4;
snow_system_input_Scancodes.key_b = 5;
snow_system_input_Scancodes.key_c = 6;
snow_system_input_Scancodes.key_d = 7;
snow_system_input_Scancodes.key_e = 8;
snow_system_input_Scancodes.key_f = 9;
snow_system_input_Scancodes.key_g = 10;
snow_system_input_Scancodes.key_h = 11;
snow_system_input_Scancodes.key_i = 12;
snow_system_input_Scancodes.key_j = 13;
snow_system_input_Scancodes.key_k = 14;
snow_system_input_Scancodes.key_l = 15;
snow_system_input_Scancodes.key_m = 16;
snow_system_input_Scancodes.key_n = 17;
snow_system_input_Scancodes.key_o = 18;
snow_system_input_Scancodes.key_p = 19;
snow_system_input_Scancodes.key_q = 20;
snow_system_input_Scancodes.key_r = 21;
snow_system_input_Scancodes.key_s = 22;
snow_system_input_Scancodes.key_t = 23;
snow_system_input_Scancodes.key_u = 24;
snow_system_input_Scancodes.key_v = 25;
snow_system_input_Scancodes.key_w = 26;
snow_system_input_Scancodes.key_x = 27;
snow_system_input_Scancodes.key_y = 28;
snow_system_input_Scancodes.key_z = 29;
snow_system_input_Scancodes.key_1 = 30;
snow_system_input_Scancodes.key_2 = 31;
snow_system_input_Scancodes.key_3 = 32;
snow_system_input_Scancodes.key_4 = 33;
snow_system_input_Scancodes.key_5 = 34;
snow_system_input_Scancodes.key_6 = 35;
snow_system_input_Scancodes.key_7 = 36;
snow_system_input_Scancodes.key_8 = 37;
snow_system_input_Scancodes.key_9 = 38;
snow_system_input_Scancodes.key_0 = 39;
snow_system_input_Scancodes.enter = 40;
snow_system_input_Scancodes.escape = 41;
snow_system_input_Scancodes.backspace = 42;
snow_system_input_Scancodes.tab = 43;
snow_system_input_Scancodes.space = 44;
snow_system_input_Scancodes.equals = 46;
snow_system_input_Scancodes.leftbracket = 47;
snow_system_input_Scancodes.rightbracket = 48;
snow_system_input_Scancodes.backslash = 49;
snow_system_input_Scancodes.semicolon = 51;
snow_system_input_Scancodes.grave = 53;
snow_system_input_Scancodes.slash = 56;
snow_system_input_Scancodes.capslock = 57;
snow_system_input_Scancodes.f1 = 58;
snow_system_input_Scancodes.f2 = 59;
snow_system_input_Scancodes.f3 = 60;
snow_system_input_Scancodes.f4 = 61;
snow_system_input_Scancodes.f5 = 62;
snow_system_input_Scancodes.f6 = 63;
snow_system_input_Scancodes.f7 = 64;
snow_system_input_Scancodes.f8 = 65;
snow_system_input_Scancodes.f9 = 66;
snow_system_input_Scancodes.f10 = 67;
snow_system_input_Scancodes.f11 = 68;
snow_system_input_Scancodes.f12 = 69;
snow_system_input_Scancodes.printscreen = 70;
snow_system_input_Scancodes.insert = 73;
snow_system_input_Scancodes.home = 74;
snow_system_input_Scancodes.pageup = 75;
snow_system_input_Scancodes.end = 77;
snow_system_input_Scancodes.pagedown = 78;
snow_system_input_Scancodes.right = 79;
snow_system_input_Scancodes.left = 80;
snow_system_input_Scancodes.down = 81;
snow_system_input_Scancodes.up = 82;
snow_system_input_Scancodes.numlockclear = 83;
snow_system_input_Scancodes.kp_divide = 84;
snow_system_input_Scancodes.kp_multiply = 85;
snow_system_input_Scancodes.kp_minus = 86;
snow_system_input_Scancodes.kp_plus = 87;
snow_system_input_Scancodes.kp_1 = 89;
snow_system_input_Scancodes.kp_2 = 90;
snow_system_input_Scancodes.kp_3 = 91;
snow_system_input_Scancodes.kp_4 = 92;
snow_system_input_Scancodes.kp_5 = 93;
snow_system_input_Scancodes.kp_6 = 94;
snow_system_input_Scancodes.kp_7 = 95;
snow_system_input_Scancodes.kp_8 = 96;
snow_system_input_Scancodes.kp_9 = 97;
snow_system_input_Scancodes.kp_0 = 98;
snow_system_input_Scancodes.f13 = 104;
snow_system_input_Scancodes.f14 = 105;
snow_system_input_Scancodes.f15 = 106;
snow_system_input_Scancodes.f16 = 107;
snow_system_input_Scancodes.f17 = 108;
snow_system_input_Scancodes.f18 = 109;
snow_system_input_Scancodes.f19 = 110;
snow_system_input_Scancodes.f20 = 111;
snow_system_input_Scancodes.f21 = 112;
snow_system_input_Scancodes.f22 = 113;
snow_system_input_Scancodes.f23 = 114;
snow_system_input_Scancodes.f24 = 115;
snow_system_input_Scancodes.volumeup = 128;
snow_system_input_Scancodes.volumedown = 129;
snow_system_input_Scancodes.kp_decimal = 220;
snow_system_input_Scancodes.lctrl = 224;
snow_system_input_Scancodes.lshift = 225;
snow_system_input_Scancodes.lalt = 226;
snow_system_input_Scancodes.lmeta = 227;
snow_system_input_Scancodes.rmeta = 231;
snow_system_input_Scancodes.audiomute = 262;
snow_system_input_Keycodes.enter = 13;
snow_system_input_Keycodes.backspace = 8;
snow_system_input_Keycodes.tab = 9;
snow_system_input_Keycodes.exclaim = 33;
snow_system_input_Keycodes.quotedbl = 34;
snow_system_input_Keycodes.hash = 35;
snow_system_input_Keycodes.percent = 37;
snow_system_input_Keycodes.dollar = 36;
snow_system_input_Keycodes.ampersand = 38;
snow_system_input_Keycodes.quote = 39;
snow_system_input_Keycodes.leftparen = 40;
snow_system_input_Keycodes.rightparen = 41;
snow_system_input_Keycodes.asterisk = 42;
snow_system_input_Keycodes.plus = 43;
snow_system_input_Keycodes.comma = 44;
snow_system_input_Keycodes.minus = 45;
snow_system_input_Keycodes.period = 46;
snow_system_input_Keycodes.slash = 47;
snow_system_input_Keycodes.leftbracket = 91;
snow_system_input_Keycodes.backslash = 92;
snow_system_input_Keycodes.rightbracket = 93;
snow_system_input_Keycodes.caret = 94;
snow_system_input_Keycodes.underscore = 95;
snow_system_input_Keycodes.backquote = 96;
snow_system_input_Keycodes.key_e = 101;
snow_system_input_Keycodes.key_i = 105;
snow_system_input_Keycodes.key_p = 112;
snow_system_input_Keycodes.key_q = 113;
snow_system_input_Keycodes.capslock = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.capslock);
snow_system_input_Keycodes.f1 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f1);
snow_system_input_Keycodes.f2 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f2);
snow_system_input_Keycodes.f3 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f3);
snow_system_input_Keycodes.f4 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f4);
snow_system_input_Keycodes.f5 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f5);
snow_system_input_Keycodes.f6 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f6);
snow_system_input_Keycodes.f7 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f7);
snow_system_input_Keycodes.f8 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f8);
snow_system_input_Keycodes.f9 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f9);
snow_system_input_Keycodes.f10 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f10);
snow_system_input_Keycodes.f11 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f11);
snow_system_input_Keycodes.f12 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f12);
snow_system_input_Keycodes.printscreen = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.printscreen);
snow_system_input_Keycodes.insert = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.insert);
snow_system_input_Keycodes.home = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.home);
snow_system_input_Keycodes.pageup = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.pageup);
snow_system_input_Keycodes["delete"] = 127;
snow_system_input_Keycodes.end = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.end);
snow_system_input_Keycodes.pagedown = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.pagedown);
snow_system_input_Keycodes.right = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.right);
snow_system_input_Keycodes.left = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.left);
snow_system_input_Keycodes.down = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.down);
snow_system_input_Keycodes.up = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.up);
snow_system_input_Keycodes.numlockclear = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.numlockclear);
snow_system_input_Keycodes.kp_divide = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_divide);
snow_system_input_Keycodes.kp_multiply = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_multiply);
snow_system_input_Keycodes.kp_minus = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_minus);
snow_system_input_Keycodes.kp_plus = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_plus);
snow_system_input_Keycodes.kp_1 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_1);
snow_system_input_Keycodes.kp_2 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_2);
snow_system_input_Keycodes.kp_3 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_3);
snow_system_input_Keycodes.kp_4 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_4);
snow_system_input_Keycodes.kp_5 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_5);
snow_system_input_Keycodes.kp_6 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_6);
snow_system_input_Keycodes.kp_7 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_7);
snow_system_input_Keycodes.kp_8 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_8);
snow_system_input_Keycodes.kp_9 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_9);
snow_system_input_Keycodes.kp_0 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_0);
snow_system_input_Keycodes.f13 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f13);
snow_system_input_Keycodes.f14 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f14);
snow_system_input_Keycodes.f15 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f15);
snow_system_input_Keycodes.f16 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f16);
snow_system_input_Keycodes.f17 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f17);
snow_system_input_Keycodes.f18 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f18);
snow_system_input_Keycodes.f19 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f19);
snow_system_input_Keycodes.f20 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f20);
snow_system_input_Keycodes.f21 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f21);
snow_system_input_Keycodes.f22 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f22);
snow_system_input_Keycodes.f23 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f23);
snow_system_input_Keycodes.f24 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.f24);
snow_system_input_Keycodes.volumeup = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.volumeup);
snow_system_input_Keycodes.volumedown = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.volumedown);
snow_system_input_Keycodes.kp_decimal = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_decimal);
snow_system_input_Keycodes.lctrl = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.lctrl);
snow_system_input_Keycodes.lshift = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.lshift);
snow_system_input_Keycodes.lalt = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.lalt);
snow_system_input_Keycodes.lmeta = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.lmeta);
snow_system_input_Keycodes.rmeta = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.rmeta);
snow_system_input_Keycodes.audiomute = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.audiomute);
GameTracker.player = [new Player("Player 1",false,snow_system_input_Keycodes.key_q,"Q",snow_system_input_Keycodes.key_e,"E",(function($this) {
	var $r;
	var a = glm__$Vec3_Vec3_$Impl_$._new(205,53,23);
	$r = glm__$Vec3_Vec3_$Impl_$.divideScalar(glm__$Vec3_Vec3_$Impl_$.clone(a),255);
	return $r;
}(this))),new Player("Mr. Computer",true,snow_system_input_Keycodes.key_i,"I",snow_system_input_Keycodes.key_p,"P",(function($this) {
	var $r;
	var a1 = glm__$Vec3_Vec3_$Impl_$._new(238,196,49);
	$r = glm__$Vec3_Vec3_$Impl_$.divideScalar(glm__$Vec3_Vec3_$Impl_$.clone(a1),255);
	return $r;
}(this)))];
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_crypto_Base64.BYTES = haxe_io_Bytes.ofString(haxe_crypto_Base64.CHARS);
haxe_ds_ObjectMap.count = 0;
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
tusk_Component.tid = -1;
tusk_PromiseComponent.tid = 3;
minigames_sledtillyouredead_AnimatedSledComponent.tid = 25;
minigames_sledtillyouredead_CollisionComponent.tid = 24;
minigames_spacecops_BulletComponent.tid = 28;
minigames_spacecops_MovementComponent.tid = 33;
minigames_spacecops_RailedMovementComponent.tid = 29;
minigames_spacecops_ScrollComponent.tid = 32;
minigames_spacecops_ShooterComponent.tid = 31;
minigames_spacecops_WaveComponent.tid = 30;
promhx_base_AsyncBase.id_ctr = 0;
promhx_base_EventLoop.queue = new List();
snow_api_Promises.calls = [];
snow_api_Promises.defers = [];
snow_api_Timer.running_timers = [];
snow_core_web_assets_Assets.POT = true;
snow_core_web_input_Input._keypress_blacklist = [snow_system_input_Keycodes.backspace,snow_system_input_Keycodes.enter];
snow_system_audio_Audio.splitter = " • ";
tusk_Entity.nextID = 0;
tusk_debug_Exception.showStackTrace = false;
tusk_lib_comp_Camera2DComponent.tid = 11;
tusk_lib_comp_CircleEffectComponent.tid = 4;
tusk_lib_comp_CustomUniformsComponent.tid = 12;
tusk_lib_comp_MaterialComponent.tid = 9;
tusk_lib_comp_MeshComponent.tid = 8;
tusk_lib_comp_SoundComponent.tid = 7;
tusk_lib_comp_TextComponent.tid = 1;
tusk_lib_comp_TimedPromiseComponent.tid = 6;
tusk_lib_comp_TransformComponent.tid = 5;
tusk_lib_proc_Camera2DProcessor.cameras = [];
TuskApp.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=ld34.js.map
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
	,___disconnectRoutes: function() {
	}
	,hasProcessor: function(processor) {
		return HxOverrides.indexOf(this.processors,processor,0) > -1;
	}
	,useProcessor: function(processor) {
		if(this.hasProcessor(processor)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Can't add processor '" + Type.getClassName(processor == null?null:js_Boot.getClass(processor)) + "' because it already exists!",null,null,{ fileName : "Scene.hx", lineNumber : 67, className : "tusk.Scene", methodName : "useProcessor"}));
		processor.___connectRoutes();
		this.processors.push(processor);
	}
	,getProcessor: function(type) {
		var _g = 0;
		var _g1 = this.processors;
		while(_g < _g1.length) {
			var processor = _g1[_g];
			++_g;
			if((processor == null?null:js_Boot.getClass(processor)) == type) return processor;
		}
		return null;
	}
	,onLoad: function(event) {
	}
	,onDestroy: function(event) {
	}
	,onUpdate: function(event) {
	}
	,onRender: function(event) {
	}
	,onKeyDown: function(event) {
	}
	,onKeyUp: function(event) {
	}
	,onMouseDown: function(event) {
	}
	,onMouseUp: function(event) {
	}
	,onMouseMove: function(event) {
	}
	,__class__: tusk_Scene
};
var LoadingScreen = function(gameName) {
	this.gameName = gameName;
	tusk_Scene.call(this,"Loading screen!");
};
$hxClasses["LoadingScreen"] = LoadingScreen;
LoadingScreen.__name__ = ["LoadingScreen"];
LoadingScreen.__super__ = tusk_Scene;
LoadingScreen.prototype = $extend(tusk_Scene.prototype,{
	generateName: function() {
		var s = new StringBuf();
		s.add(LoadingScreen.salutations[Math.floor((LoadingScreen.salutations.length - 1 + 1) * Math.random())]);
		s.b += " ";
		s.add(LoadingScreen.adjectives[Math.floor((LoadingScreen.adjectives.length - 1 + 1) * Math.random())]);
		s.b += " ";
		s.add(LoadingScreen.nouns[Math.floor((LoadingScreen.nouns.length - 1 + 1) * Math.random())]);
		return s.b;
	}
	,onLoad: function(event) {
		var _g = this;
		if(event.scene != this) return;
		tusk_debug_Log.log("load screen..",tusk_debug_LogFunctions.Info,{ fileName : "LoadingScreen.hx", lineNumber : 52, className : "LoadingScreen", methodName : "onLoad"});
		((function($this) {
			var $r;
			var varargf = function(f) {
				var ret = new promhx_Promise();
				var arr = [tusk_defaults_Primitives.loadTextMesh(),tusk_defaults_Fonts.loadSubatomic_Screen(),tusk_defaults_Materials.loadTextBasic()];
				var p = promhx_Promise.whenAll(arr);
				p._update.push({ async : ret, linkf : function(x) {
					ret.handleResolve(f(arr[0]._val,arr[1]._val,arr[2]._val));
				}});
				return ret;
			};
			$r = { then : varargf};
			return $r;
		}(this))).then(function(textMesh,font,fontMat) {
			fontMat.textures = [];
			fontMat.textures.push(font.texture);
			_g.useProcessor(new tusk_lib_proc_TimedPromiseProcessor());
			_g.useProcessor(new tusk_lib_proc_MaterialProcessor());
			_g.useProcessor(new tusk_lib_proc_Camera2DProcessor());
			_g.useProcessor(new loading_SlamProcessor());
			_g.useProcessor(new loading_SlideProcessor());
			_g.useProcessor(new tusk_lib_proc_TransformProcessor());
			_g.useProcessor(new tusk_lib_proc_TextProcessor());
			_g.useProcessor(new tusk_lib_proc_MeshProcessor());
			_g.useProcessor(new tusk_lib_proc_Renderer2DProcessor(glm__$Vec4_Vec4_$Impl_$._new(0.25,0.25,0.25,1.0)));
			var w = tusk_Tusk.instance.app.window.width;
			var h = tusk_Tusk.instance.app.window.height;
			_g.entities.push(new tusk_Entity(_g,"Camera",[new tusk_lib_comp_TransformComponent(),new tusk_lib_comp_Camera2DComponent((function($this) {
				var $r;
				var a = glm__$Vec2_Vec2_$Impl_$._new(w,h);
				$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),-2.0);
				return $r;
			}(this)),(function($this) {
				var $r;
				var a1 = glm__$Vec2_Vec2_$Impl_$._new(w,h);
				$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a1),2.0);
				return $r;
			}(this)),-100,100)]));
			var scp1 = new loading_SlamComponent(0.5,16,2);
			_g.entities.push(new tusk_Entity(_g,"Player 1",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(-256,0,0.05),(function($this) {
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
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(2,2,2)),new tusk_lib_comp_MeshComponent(null,textMesh.clone("p1text")),new tusk_lib_comp_MaterialComponent(fontMat.path),new tusk_lib_comp_TextComponent(font,"Player 1\nAKA. " + _g.generateName(),tusk_lib_comp_TextAlign.Centre,tusk_lib_comp_TextVerticalAlign.Centre,glm__$Vec4_Vec4_$Impl_$._new(1,1,1,1)),scp1]));
			scp1.done.pipe(function(_) {
				var scvs = new loading_SlamComponent(0.5,96,16);
				_g.entities.push(new tusk_Entity(_g,"VS",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,0,0.05),(function($this) {
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
				}(this)),glm__$Vec3_Vec3_$Impl_$._new(16,16,16)),new tusk_lib_comp_MeshComponent(null,textMesh.clone("vstext")),new tusk_lib_comp_MaterialComponent(fontMat.path),new tusk_lib_comp_TextComponent(font,"VS",tusk_lib_comp_TextAlign.Centre,tusk_lib_comp_TextVerticalAlign.Centre,glm__$Vec4_Vec4_$Impl_$._new(1,1,1,1)),scvs]));
				return scvs.done;
			}).pipe(function(_1) {
				var scp2 = new loading_SlamComponent(0.5,16,2);
				_g.entities.push(new tusk_Entity(_g,"Player 2",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(256,0,0.05),(function($this) {
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
				}(this)),glm__$Vec3_Vec3_$Impl_$._new(2,2,2)),new tusk_lib_comp_MeshComponent(null,textMesh.clone("p2text")),new tusk_lib_comp_MaterialComponent(fontMat.path),new tusk_lib_comp_TextComponent(font,"Player 2\nAKA. " + _g.generateName(),tusk_lib_comp_TextAlign.Centre,tusk_lib_comp_TextVerticalAlign.Centre,glm__$Vec4_Vec4_$Impl_$._new(1,1,1,1)),scp2]));
				return scp2.done;
			}).pipe(function(_2) {
				var scn = new loading_SlideComponent(1,glm__$Vec3_Vec3_$Impl_$._new(0,-300,0.05),glm__$Vec3_Vec3_$Impl_$._new(0,-192,0.05));
				_g.entities.push(new tusk_Entity(_g,"in:\n" + _g.gameName,[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,-192,0.05),(function($this) {
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
				}(this)),glm__$Vec3_Vec3_$Impl_$._new(4,4,4)),new tusk_lib_comp_MeshComponent(null,textMesh.clone("vstext")),new tusk_lib_comp_MaterialComponent(fontMat.path),new tusk_lib_comp_TextComponent(font,"in:\n" + _g.gameName,tusk_lib_comp_TextAlign.Centre,tusk_lib_comp_TextVerticalAlign.Centre,glm__$Vec4_Vec4_$Impl_$._new(1,1,1,1)),scn]));
				return scn.done;
			}).then(function(_3) {
				_g.sceneDone.resolve(_g);
			});
			tusk_Tusk.router.onEvent(tusk_events_EventType.Start);
		});
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
	}
	,__class__: LoadingScreen
});
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
		return "LD34 by FuzzyWuzzie";
	}
	,get_width: function() {
		return 900;
	}
	,setup: function() {
		tusk_debug_Log.log("Setting up game...",tusk_debug_LogFunctions.Info,{ fileName : "Main.hx", lineNumber : 24, className : "Main", methodName : "setup"});
		tusk_Tusk.pushScene(new minigames_BottleRocket());
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
Type.getClass = function(o) {
	if(o == null) return null; else return js_Boot.getClass(o);
};
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
glm_GLM.axisAngle = function(axis,angle) {
	angle /= 2;
	var s = Math.sin(angle);
	var q = glm__$Quat_Quat_$Impl_$._new(Math.cos(angle),s * glm__$Vec3_Vec3_$Impl_$.get_x(axis),s * glm__$Vec3_Vec3_$Impl_$.get_y(axis),s * glm__$Vec3_Vec3_$Impl_$.get_z(axis));
	return q;
};
glm_GLM.rotate = function(q,v) {
	var l = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
	if(l != 0) {
		q[0] /= l;
		q[1] /= l;
		q[2] /= l;
		q[3] /= l;
	} else {
		q[0] = 0;
		q[1] = 0;
		q[2] = 0;
		q[3] = 0;
		q;
	}
	q;
	var qv = glm__$Quat_Quat_$Impl_$._new(0,glm__$Vec3_Vec3_$Impl_$.get_x(v),glm__$Vec3_Vec3_$Impl_$.get_y(v),glm__$Vec3_Vec3_$Impl_$.get_z(v));
	var r;
	var a;
	var this1 = glm__$Quat_Quat_$Impl_$.clone(q);
	var ax = glm__$Quat_Quat_$Impl_$.get_x(this1);
	var ay = glm__$Quat_Quat_$Impl_$.get_y(this1);
	var az = glm__$Quat_Quat_$Impl_$.get_z(this1);
	var aw = glm__$Quat_Quat_$Impl_$.get_w(this1);
	var bx = glm__$Quat_Quat_$Impl_$.get_x(qv);
	var by = glm__$Quat_Quat_$Impl_$.get_y(qv);
	var bz = glm__$Quat_Quat_$Impl_$.get_z(qv);
	var bw = glm__$Quat_Quat_$Impl_$.get_w(qv);
	glm__$Quat_Quat_$Impl_$.set_x(this1,ax * bw + aw * bx + ay * bz - az * by);
	glm__$Quat_Quat_$Impl_$.set_y(this1,ay * bw + aw * by + az * bx - ax * bz);
	glm__$Quat_Quat_$Impl_$.set_z(this1,az * bw + aw * bz + ax * by - ay * bx);
	glm__$Quat_Quat_$Impl_$.set_w(this1,aw * bw - ax * bx - ay * by - az * bz);
	a = this1;
	var b;
	q[1] *= -1;
	q[2] *= -1;
	q[3] *= -1;
	b = q;
	var this2 = glm__$Quat_Quat_$Impl_$.clone(a);
	var ax1 = glm__$Quat_Quat_$Impl_$.get_x(this2);
	var ay1 = glm__$Quat_Quat_$Impl_$.get_y(this2);
	var az1 = glm__$Quat_Quat_$Impl_$.get_z(this2);
	var aw1 = glm__$Quat_Quat_$Impl_$.get_w(this2);
	var bx1 = glm__$Quat_Quat_$Impl_$.get_x(b);
	var by1 = glm__$Quat_Quat_$Impl_$.get_y(b);
	var bz1 = glm__$Quat_Quat_$Impl_$.get_z(b);
	var bw1 = glm__$Quat_Quat_$Impl_$.get_w(b);
	glm__$Quat_Quat_$Impl_$.set_x(this2,ax1 * bw1 + aw1 * bx1 + ay1 * bz1 - az1 * by1);
	glm__$Quat_Quat_$Impl_$.set_y(this2,ay1 * bw1 + aw1 * by1 + az1 * bx1 - ax1 * bz1);
	glm__$Quat_Quat_$Impl_$.set_z(this2,az1 * bw1 + aw1 * bz1 + ax1 * by1 - ay1 * bx1);
	glm__$Quat_Quat_$Impl_$.set_w(this2,aw1 * bw1 - ax1 * bx1 - ay1 * by1 - az1 * bz1);
	r = this2;
	return glm__$Vec3_Vec3_$Impl_$._new(glm__$Quat_Quat_$Impl_$.get_x(r),glm__$Quat_Quat_$Impl_$.get_y(r),glm__$Quat_Quat_$Impl_$.get_z(r));
};
glm_GLM.lerp = function(a,b,t) {
	return a + t * (b - a);
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
glm__$Mat3_Mat3_$Impl_$.fromRowArray = function(rows) {
	if(rows.length != 3) throw new js__$Boot_HaxeError("You must supply 3 Vec3s to build a Mat3 this way!");
	var m = glm__$Mat3_Mat3_$Impl_$._new();
	m[0] = rows[0];
	m[1] = rows[1];
	m[2] = rows[2];
	return m;
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
glm__$Mat3_Mat3_$Impl_$.setZero = function(this1) {
	glm__$Vec3_Vec3_$Impl_$.zero(this1[0]);
	glm__$Vec3_Vec3_$Impl_$.zero(this1[1]);
	glm__$Vec3_Vec3_$Impl_$.zero(this1[2]);
	return this1;
};
glm__$Mat3_Mat3_$Impl_$.zero = function() {
	var m = glm__$Mat3_Mat3_$Impl_$._new();
	glm__$Mat3_Mat3_$Impl_$.setZero(m);
	return m;
};
glm__$Mat3_Mat3_$Impl_$.clone = function(this1) {
	var copy = glm__$Mat3_Mat3_$Impl_$._new();
	var x = glm__$Vec3_Vec3_$Impl_$.clone(this1[0]);
	copy[0] = x;
	var x1 = glm__$Vec3_Vec3_$Impl_$.clone(this1[1]);
	copy[1] = x1;
	var x2 = glm__$Vec3_Vec3_$Impl_$.clone(this1[2]);
	copy[2] = x2;
	return copy;
};
glm__$Mat3_Mat3_$Impl_$.copy = function(this1,m) {
	glm__$Vec3_Vec3_$Impl_$.copy(this1[0],m[0]);
	glm__$Vec3_Vec3_$Impl_$.copy(this1[1],m[1]);
	glm__$Vec3_Vec3_$Impl_$.copy(this1[1],m[2]);
	return this1;
};
glm__$Mat3_Mat3_$Impl_$.setIdentity = function(this1) {
	glm__$Vec3_Vec3_$Impl_$.set(this1[0],1,0,0);
	glm__$Vec3_Vec3_$Impl_$.set(this1[1],0,1,0);
	glm__$Vec3_Vec3_$Impl_$.set(this1[2],0,0,1);
	return this1;
};
glm__$Mat3_Mat3_$Impl_$.identity = function() {
	var m = glm__$Mat3_Mat3_$Impl_$._new();
	glm__$Mat3_Mat3_$Impl_$.setIdentity(m);
	return m;
};
glm__$Mat3_Mat3_$Impl_$.arrayGet = function(this1,i) {
	return this1[i];
};
glm__$Mat3_Mat3_$Impl_$.arraySet = function(this1,i,x) {
	return this1[i] = x;
};
glm__$Mat3_Mat3_$Impl_$.toArrayRowMajor = function(this1) {
	return this1[0].concat(this1[1].concat(this1[2]));
};
glm__$Mat3_Mat3_$Impl_$.toArrayColMajor = function(this1) {
	var ret = [];
	var _g = 0;
	while(_g < 3) {
		var j = _g++;
		var _g1 = 0;
		while(_g1 < 3) {
			var i = _g1++;
			ret.push(this1[i][j]);
		}
	}
	return ret;
};
glm__$Mat3_Mat3_$Impl_$.multVec3 = function(this1,b) {
	return glm__$Vec3_Vec3_$Impl_$._new(this1[0][0] * b[0] + this1[0][1] * b[1] + this1[0][2] * b[2],this1[1][0] * b[0] + this1[1][1] * b[1] + this1[1][2] * b[2],this1[2][0] * b[0] + this1[2][1] * b[1] + this1[2][2] * b[2]);
};
glm__$Mat3_Mat3_$Impl_$.multiplyVec3Op = function(a,b) {
	return glm__$Mat3_Mat3_$Impl_$.multVec3(a,b);
};
glm__$Mat3_Mat3_$Impl_$.multMat3 = function(this1,b) {
	var rows = [(function($this) {
		var $r;
		var a;
		{
			var a1 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[0]),this1[0][0]);
			var b2 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[1]),this1[0][1]);
			a = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a1),b2);
		}
		var b1 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[2]),this1[0][2]);
		$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a),b1);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a2;
		{
			var a3 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[0]),this1[1][0]);
			var b4 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[1]),this1[1][1]);
			a2 = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a3),b4);
		}
		var b3 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[2]),this1[1][2]);
		$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a2),b3);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a4;
		{
			var a5 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[0]),this1[2][0]);
			var b6 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[1]),this1[2][1]);
			a4 = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a5),b6);
		}
		var b5 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[2]),this1[2][2]);
		$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a4),b5);
		return $r;
	}(this))];
	this1 = rows;
	return this1;
};
glm__$Mat3_Mat3_$Impl_$.multiplyMat3Op = function(a,b) {
	var rows = [(function($this) {
		var $r;
		var a1;
		{
			var a2 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[0]),a[0][0]);
			var b2 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[1]),a[0][1]);
			a1 = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a2),b2);
		}
		var b1 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[2]),a[0][2]);
		$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a1),b1);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a3;
		{
			var a4 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[0]),a[1][0]);
			var b4 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[1]),a[1][1]);
			a3 = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a4),b4);
		}
		var b3 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[2]),a[1][2]);
		$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a3),b3);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a5;
		{
			var a6 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[0]),a[2][0]);
			var b6 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[1]),a[2][1]);
			a5 = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a6),b6);
		}
		var b5 = glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b[2]),a[2][2]);
		$r = glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a5),b5);
		return $r;
	}(this))];
	a = rows;
	return a;
};
glm__$Mat3_Mat3_$Impl_$.transpose = function(this1) {
	var t01 = this1[0][1];
	var t02 = this1[0][2];
	var t12 = this1[1][2];
	this1[0][1] = this1[1][0];
	this1[0][2] = this1[2][0];
	this1[1][2] = this1[2][1];
	this1[1][0] = t01;
	this1[2][0] = t02;
	this1[2][1] = t12;
	return this1;
};
glm__$Mat3_Mat3_$Impl_$.invert = function(this1) {
	var det = this1[0][0] * (this1[2][2] * this1[1][1] - this1[1][2] * this1[2][1]) + this1[0][1] * (-this1[2][2] * this1[1][0] + this1[1][2] * this1[2][0]) + this1[0][2] * (this1[2][1] * this1[1][0] - this1[1][1] * this1[2][0]);
	if(det == 0) return null;
	det = 1.0 / det;
	var t00 = this1[0][0];
	var t01 = this1[0][1];
	var t02 = this1[0][2];
	var t10 = this1[1][0];
	var t11 = this1[1][1];
	var t12 = this1[1][2];
	var t20 = this1[2][0];
	var t21 = this1[2][1];
	var t22 = this1[2][2];
	this1[0][0] = (t22 * t11 - t12 * t21) * det;
	this1[0][1] = (-t22 * t01 + t02 * t21) * det;
	this1[0][2] = (t12 * t01 - t02 * t11) * det;
	this1[1][0] = (-t22 * t10 + t12 * t20) * det;
	this1[1][1] = (t22 * t00 - t02 * t20) * det;
	this1[1][2] = (-t12 * t00 + t02 * t10) * det;
	this1[2][0] = (t21 * t10 - t11 * t20) * det;
	this1[2][1] = (-t21 * t00 + t01 * t20) * det;
	this1[2][2] = (t11 * t00 - t01 * t10) * det;
	return this1;
};
glm__$Mat3_Mat3_$Impl_$.determinant = function(this1) {
	return this1[0][0] * (this1[2][2] * this1[1][1] - this1[1][2] * this1[2][1]) + this1[0][1] * (-this1[2][2] * this1[1][0] + this1[1][2] * this1[2][0]) + this1[0][2] * (this1[2][1] * this1[1][0] - this1[1][1] * this1[2][0]);
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
glm__$Mat4_Mat4_$Impl_$.fromRowArray = function(rows) {
	if(rows.length != 4) throw new js__$Boot_HaxeError("You must supply 4 Vec4s to build a Mat4 this way!");
	var m = glm__$Mat4_Mat4_$Impl_$._new();
	m[0] = rows[0];
	m[1] = rows[1];
	m[2] = rows[2];
	m[3] = rows[3];
	return m;
};
glm__$Mat4_Mat4_$Impl_$.fromRows = function(a,b,c,d) {
	var m = glm__$Mat4_Mat4_$Impl_$._new();
	m[0] = a;
	m[1] = b;
	m[2] = c;
	m[3] = d;
	return m;
};
glm__$Mat4_Mat4_$Impl_$.setZero = function(this1) {
	glm__$Vec4_Vec4_$Impl_$.zero(this1[0]);
	glm__$Vec4_Vec4_$Impl_$.zero(this1[1]);
	glm__$Vec4_Vec4_$Impl_$.zero(this1[2]);
	glm__$Vec4_Vec4_$Impl_$.zero(this1[3]);
	return this1;
};
glm__$Mat4_Mat4_$Impl_$.zero = function() {
	var m = glm__$Mat4_Mat4_$Impl_$._new();
	glm__$Mat4_Mat4_$Impl_$.setZero(m);
	return m;
};
glm__$Mat4_Mat4_$Impl_$.clone = function(this1) {
	var copy = glm__$Mat4_Mat4_$Impl_$._new();
	var x = glm__$Vec4_Vec4_$Impl_$.clone(this1[0]);
	copy[0] = x;
	var x1 = glm__$Vec4_Vec4_$Impl_$.clone(this1[1]);
	copy[1] = x1;
	var x2 = glm__$Vec4_Vec4_$Impl_$.clone(this1[2]);
	copy[2] = x2;
	var x3 = glm__$Vec4_Vec4_$Impl_$.clone(this1[3]);
	copy[3] = x3;
	return copy;
};
glm__$Mat4_Mat4_$Impl_$.copy = function(this1,m) {
	glm__$Vec4_Vec4_$Impl_$.copy(this1[0],m[0]);
	glm__$Vec4_Vec4_$Impl_$.copy(this1[1],m[1]);
	glm__$Vec4_Vec4_$Impl_$.copy(this1[2],m[2]);
	glm__$Vec4_Vec4_$Impl_$.copy(this1[3],m[3]);
	return this1;
};
glm__$Mat4_Mat4_$Impl_$.setIdentity = function(this1) {
	glm__$Vec4_Vec4_$Impl_$.set(this1[0],1,0,0,0);
	glm__$Vec4_Vec4_$Impl_$.set(this1[1],0,1,0,0);
	glm__$Vec4_Vec4_$Impl_$.set(this1[2],0,0,1,0);
	glm__$Vec4_Vec4_$Impl_$.set(this1[3],0,0,0,1);
	return this1;
};
glm__$Mat4_Mat4_$Impl_$.identity = function() {
	var m = glm__$Mat4_Mat4_$Impl_$._new();
	glm__$Mat4_Mat4_$Impl_$.setIdentity(m);
	return m;
};
glm__$Mat4_Mat4_$Impl_$.arrayGet = function(this1,i) {
	return this1[i];
};
glm__$Mat4_Mat4_$Impl_$.arraySet = function(this1,i,x) {
	return this1[i] = x;
};
glm__$Mat4_Mat4_$Impl_$.toArrayRowMajor = function(this1) {
	return this1[0].concat(this1[1].concat(this1[2].concat(this1[3])));
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
glm__$Mat4_Mat4_$Impl_$.multVec4 = function(this1,b) {
	return glm__$Vec4_Vec4_$Impl_$._new(this1[0][0] * b[0] + this1[0][1] * b[1] + this1[0][2] * b[2] + this1[0][3] * b[3],this1[1][0] * b[0] + this1[1][1] * b[1] + this1[1][2] * b[2] + this1[1][3] * b[3],this1[2][0] * b[0] + this1[2][1] * b[1] + this1[2][2] * b[2] + this1[2][3] * b[3],this1[3][0] * b[0] + this1[3][1] * b[1] + this1[3][2] * b[2] + this1[3][3] * b[3]);
};
glm__$Mat4_Mat4_$Impl_$.multiplyVec4Op = function(a,b) {
	return glm__$Mat4_Mat4_$Impl_$.multVec4(a,b);
};
glm__$Mat4_Mat4_$Impl_$.multMat4 = function(this1,b) {
	var rows = [(function($this) {
		var $r;
		var a;
		{
			var a1;
			var a2 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),this1[0][0]);
			var b3 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),this1[0][1]);
			a1 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a2),b3);
			var b2 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),this1[0][2]);
			a = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a1),b2);
		}
		var b1 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),this1[0][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a),b1);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a3;
		{
			var a4;
			var a5 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),this1[1][0]);
			var b6 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),this1[1][1]);
			a4 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a5),b6);
			var b5 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),this1[1][2]);
			a3 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a4),b5);
		}
		var b4 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),this1[1][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a3),b4);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a6;
		{
			var a7;
			var a8 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),this1[2][0]);
			var b9 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),this1[2][1]);
			a7 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a8),b9);
			var b8 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),this1[2][2]);
			a6 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a7),b8);
		}
		var b7 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),this1[2][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a6),b7);
		return $r;
	}(this)),(function($this) {
		var $r;
		var a9;
		{
			var a10;
			var a11 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[0]),this1[3][0]);
			var b12 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[1]),this1[3][1]);
			a10 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a11),b12);
			var b11 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[2]),this1[3][2]);
			a9 = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a10),b11);
		}
		var b10 = glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b[3]),this1[3][3]);
		$r = glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a9),b10);
		return $r;
	}(this))];
	this1 = rows;
	return this1;
};
glm__$Mat4_Mat4_$Impl_$.multiplyMat4Op = function(a,b) {
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
	return a;
};
glm__$Mat4_Mat4_$Impl_$.transpose = function(this1) {
	var t01 = this1[0][1];
	var t02 = this1[0][2];
	var t03 = this1[0][3];
	var t12 = this1[1][2];
	var t13 = this1[1][3];
	var t23 = this1[2][3];
	this1[0][1] = this1[1][0];
	this1[0][2] = this1[2][0];
	this1[0][3] = this1[3][0];
	this1[1][2] = this1[2][1];
	this1[1][3] = this1[3][1];
	this1[2][3] = this1[3][2];
	this1[1][0] = t01;
	this1[2][0] = t02;
	this1[3][0] = t03;
	this1[2][1] = t12;
	this1[3][1] = t13;
	this1[3][2] = t23;
	return this1;
};
glm__$Mat4_Mat4_$Impl_$.invert = function(this1) {
	var det;
	var b001 = this1[0][0] * this1[1][1] - this1[0][1] * this1[1][0];
	var b011 = this1[0][0] * this1[1][2] - this1[0][2] * this1[1][0];
	var b021 = this1[0][0] * this1[1][3] - this1[0][3] * this1[1][0];
	var b031 = this1[0][1] * this1[1][2] - this1[0][2] * this1[1][1];
	var b041 = this1[0][1] * this1[1][3] - this1[0][3] * this1[1][1];
	var b051 = this1[0][2] * this1[1][3] - this1[0][3] * this1[1][2];
	var b061 = this1[2][0] * this1[3][1] - this1[2][1] * this1[3][0];
	var b071 = this1[2][0] * this1[3][2] - this1[2][2] * this1[3][0];
	var b081 = this1[2][0] * this1[3][3] - this1[2][3] * this1[3][0];
	var b091 = this1[2][1] * this1[3][2] - this1[2][2] * this1[3][1];
	var b101 = this1[2][1] * this1[3][3] - this1[2][3] * this1[3][1];
	var b111 = this1[2][2] * this1[3][3] - this1[2][3] * this1[3][2];
	det = b001 * b111 - b011 * b101 + b021 * b091 + b031 * b081 - b041 * b071 + b051 * b061;
	if(det == 0) return null;
	det = 1.0 / det;
	var t00 = this1[0][0];
	var t01 = this1[0][1];
	var t02 = this1[0][2];
	var t03 = this1[0][3];
	var t10 = this1[1][0];
	var t11 = this1[1][1];
	var t12 = this1[1][2];
	var t13 = this1[1][3];
	var t20 = this1[2][0];
	var t21 = this1[2][1];
	var t22 = this1[2][2];
	var t23 = this1[2][3];
	var t30 = this1[3][0];
	var t31 = this1[3][1];
	var t32 = this1[3][2];
	var t33 = this1[3][3];
	var b00 = t00 * t11 - t01 * t10;
	var b01 = t00 * t12 - t02 * t10;
	var b02 = t00 * t13 - t03 * t10;
	var b03 = t01 * t12 - t02 * t11;
	var b04 = t01 * t13 - t03 * t11;
	var b05 = t02 * t13 - t03 * t12;
	var b06 = t20 * t31 - t21 * t30;
	var b07 = t20 * t32 - t22 * t30;
	var b08 = t20 * t33 - t23 * t30;
	var b09 = t21 * t32 - t22 * t31;
	var b10 = t21 * t33 - t23 * t31;
	var b11 = t22 * t33 - t23 * t32;
	this1[0][0] = (t11 * b11 - t12 * b10 + t13 * b09) * det;
	this1[0][1] = (t02 * b10 - t01 * b11 - t03 * b09) * det;
	this1[0][2] = (t31 * b05 - t32 * b04 + t33 * b03) * det;
	this1[0][3] = (t22 * b04 - t21 * b05 - t23 * b03) * det;
	this1[1][0] = (t12 * b08 - t10 * b11 - t13 * b07) * det;
	this1[1][1] = (t00 * b11 - t02 * b08 + t03 * b07) * det;
	this1[1][2] = (t32 * b02 - t30 * b05 - t33 * b01) * det;
	this1[1][3] = (t20 * b05 - t22 * b02 + t23 * b01) * det;
	this1[2][0] = (t10 * b10 - t11 * b08 + t13 * b06) * det;
	this1[2][1] = (t01 * b08 - t00 * b10 - t03 * b06) * det;
	this1[2][2] = (t30 * b04 - t31 * b02 + t33 * b00) * det;
	this1[2][3] = (t21 * b02 - t20 * b04 - t23 * b00) * det;
	this1[3][0] = (t11 * b07 - t10 * b09 - t12 * b06) * det;
	this1[3][1] = (t00 * b09 - t01 * b07 + t02 * b06) * det;
	this1[3][2] = (t31 * b01 - t30 * b03 - t32 * b00) * det;
	this1[3][3] = (t20 * b03 - t21 * b01 + t22 * b00) * det;
	return this1;
};
glm__$Mat4_Mat4_$Impl_$.determinant = function(this1) {
	var b00 = this1[0][0] * this1[1][1] - this1[0][1] * this1[1][0];
	var b01 = this1[0][0] * this1[1][2] - this1[0][2] * this1[1][0];
	var b02 = this1[0][0] * this1[1][3] - this1[0][3] * this1[1][0];
	var b03 = this1[0][1] * this1[1][2] - this1[0][2] * this1[1][1];
	var b04 = this1[0][1] * this1[1][3] - this1[0][3] * this1[1][1];
	var b05 = this1[0][2] * this1[1][3] - this1[0][3] * this1[1][2];
	var b06 = this1[2][0] * this1[3][1] - this1[2][1] * this1[3][0];
	var b07 = this1[2][0] * this1[3][2] - this1[2][2] * this1[3][0];
	var b08 = this1[2][0] * this1[3][3] - this1[2][3] * this1[3][0];
	var b09 = this1[2][1] * this1[3][2] - this1[2][2] * this1[3][1];
	var b10 = this1[2][1] * this1[3][3] - this1[2][3] * this1[3][1];
	var b11 = this1[2][2] * this1[3][3] - this1[2][3] * this1[3][2];
	return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};
glm__$Mat4_Mat4_$Impl_$.fromMat3 = function(v) {
	var r = glm__$Mat4_Mat4_$Impl_$.fromRows(glm__$Vec4_Vec4_$Impl_$._new(v[0][0],v[0][1],v[0][2],0),glm__$Vec4_Vec4_$Impl_$._new(v[1][0],v[1][1],v[1][2],0),glm__$Vec4_Vec4_$Impl_$._new(v[2][0],v[2][1],v[2][2],0),glm__$Vec4_Vec4_$Impl_$._new(0,0,0,1));
	return r;
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
glm_Projection.perspective = function(fovy,aspect,near,far) {
	var result = glm__$Mat4_Mat4_$Impl_$.identity();
	var x = 1 / (aspect * Math.tan(fovy / 2));
	result[0][0] = x;
	var x1 = 1 / Math.tan(fovy / 2);
	result[1][1] = x1;
	result[2][2] = -(far + near) / (far - near);
	result[3][2] = -1;
	result[2][3] = -(2 * far * near) / (far - near);
	return result;
};
glm_Projection.frustum = function(left,right,bottom,top,near,far) {
	if(far == null) far = 1;
	if(near == null) near = -1;
	var result = glm__$Mat4_Mat4_$Impl_$.fromRows(glm__$Vec4_Vec4_$Impl_$._new(2 * near / (right - left),0,(right + left) / (right - left),0),glm__$Vec4_Vec4_$Impl_$._new(0,2 * near / (top - bottom),(top + bottom) / (top - bottom),0),glm__$Vec4_Vec4_$Impl_$._new(0,0,-(far + near) / (far - near),-2 * far * near / (far - near)),glm__$Vec4_Vec4_$Impl_$._new(0,0,-1,0));
	return result;
};
var glm__$Quat_Quat_$Impl_$ = {};
$hxClasses["glm._Quat.Quat_Impl_"] = glm__$Quat_Quat_$Impl_$;
glm__$Quat_Quat_$Impl_$.__name__ = ["glm","_Quat","Quat_Impl_"];
glm__$Quat_Quat_$Impl_$.get_w = function(this1) {
	return this1[0];
};
glm__$Quat_Quat_$Impl_$.set_w = function(this1,v) {
	return this1[0] = v;
};
glm__$Quat_Quat_$Impl_$.get_x = function(this1) {
	return this1[1];
};
glm__$Quat_Quat_$Impl_$.set_x = function(this1,v) {
	return this1[1] = v;
};
glm__$Quat_Quat_$Impl_$.get_y = function(this1) {
	return this1[2];
};
glm__$Quat_Quat_$Impl_$.set_y = function(this1,v) {
	return this1[2] = v;
};
glm__$Quat_Quat_$Impl_$.get_z = function(this1) {
	return this1[3];
};
glm__$Quat_Quat_$Impl_$.set_z = function(this1,v) {
	return this1[3] = v;
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
glm__$Quat_Quat_$Impl_$.set = function(this1,w,x,y,z) {
	if(w != null) this1[0] = w;
	if(x != null) this1[1] = x;
	if(y != null) this1[2] = y;
	if(z != null) this1[3] = z;
	return this1;
};
glm__$Quat_Quat_$Impl_$.clone = function(this1) {
	var copy = glm__$Quat_Quat_$Impl_$._new();
	copy[0] = this1[0];
	copy[1] = this1[1];
	copy[2] = this1[2];
	copy[3] = this1[3];
	return copy;
};
glm__$Quat_Quat_$Impl_$.copy = function(this1,q) {
	this1[0] = q[0];
	this1[1] = q[1];
	this1[2] = q[2];
	this1[3] = q[3];
	return this1;
};
glm__$Quat_Quat_$Impl_$.arrayGet = function(this1,i) {
	return this1[i];
};
glm__$Quat_Quat_$Impl_$.arraySet = function(this1,i,x) {
	return this1[i] = x;
};
glm__$Quat_Quat_$Impl_$.toArray = function(this1) {
	return this1;
};
glm__$Quat_Quat_$Impl_$.setIdentity = function(this1) {
	this1[0] = 1;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	return this1;
};
glm__$Quat_Quat_$Impl_$.identity = function() {
	var q = glm__$Quat_Quat_$Impl_$._new();
	q[0] = 1;
	q[1] = 0;
	q[2] = 0;
	q[3] = 0;
	q;
	return q;
};
glm__$Quat_Quat_$Impl_$.setZero = function(this1) {
	this1[0] = 0;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	return this1;
};
glm__$Quat_Quat_$Impl_$.zero = function() {
	var q = glm__$Quat_Quat_$Impl_$._new();
	q[0] = 0;
	q[1] = 0;
	q[2] = 0;
	q[3] = 0;
	q;
	return q;
};
glm__$Quat_Quat_$Impl_$.sqrLength = function(this1) {
	return this1[0] * this1[0] + this1[1] * this1[1] + this1[2] * this1[2] + this1[3] * this1[3];
};
glm__$Quat_Quat_$Impl_$.$length = function(this1) {
	return Math.sqrt(this1[0] * this1[0] + this1[1] * this1[1] + this1[2] * this1[2] + this1[3] * this1[3]);
};
glm__$Quat_Quat_$Impl_$.normalize = function(this1) {
	var l = Math.sqrt(this1[0] * this1[0] + this1[1] * this1[1] + this1[2] * this1[2] + this1[3] * this1[3]);
	if(l != 0) {
		this1[0] /= l;
		this1[1] /= l;
		this1[2] /= l;
		this1[3] /= l;
	} else {
		this1[0] = 0;
		this1[1] = 0;
		this1[2] = 0;
		this1[3] = 0;
		this1;
	}
	return this1;
};
glm__$Quat_Quat_$Impl_$.conjugate = function(this1) {
	this1[1] *= -1;
	this1[2] *= -1;
	this1[3] *= -1;
	return this1;
};
glm__$Quat_Quat_$Impl_$.invert = function(this1) {
	var a_0 = this1[0];
	var a_1 = this1[1];
	var a_2 = this1[2];
	var a_3 = this1[3];
	var dot = this1[0] * a_0 + this1[1] * a_1 + this1[2] * a_2 + this1[3] * a_3;
	if(dot == 0) {
		this1[0] = 0;
		this1[1] = 0;
		this1[2] = 0;
		this1[3] = 0;
		this1;
		return this1;
	}
	var invDot = 1.0 / dot;
	this1[0] = a_0 * invDot;
	this1[1] = -a_1 * invDot;
	this1[2] = -a_2 * invDot;
	this1[3] = -a_3 * invDot;
	return this1;
};
glm__$Quat_Quat_$Impl_$.multQuat = function(this1,b) {
	var ax = glm__$Quat_Quat_$Impl_$.get_x(this1);
	var ay = glm__$Quat_Quat_$Impl_$.get_y(this1);
	var az = glm__$Quat_Quat_$Impl_$.get_z(this1);
	var aw = glm__$Quat_Quat_$Impl_$.get_w(this1);
	var bx = glm__$Quat_Quat_$Impl_$.get_x(b);
	var by = glm__$Quat_Quat_$Impl_$.get_y(b);
	var bz = glm__$Quat_Quat_$Impl_$.get_z(b);
	var bw = glm__$Quat_Quat_$Impl_$.get_w(b);
	glm__$Quat_Quat_$Impl_$.set_x(this1,ax * bw + aw * bx + ay * bz - az * by);
	glm__$Quat_Quat_$Impl_$.set_y(this1,ay * bw + aw * by + az * bx - ax * bz);
	glm__$Quat_Quat_$Impl_$.set_z(this1,az * bw + aw * bz + ax * by - ay * bx);
	glm__$Quat_Quat_$Impl_$.set_w(this1,aw * bw - ax * bx - ay * by - az * bz);
	return this1;
};
glm__$Quat_Quat_$Impl_$.multQuatOp = function(a,b) {
	var this1 = glm__$Quat_Quat_$Impl_$.clone(a);
	var ax = glm__$Quat_Quat_$Impl_$.get_x(this1);
	var ay = glm__$Quat_Quat_$Impl_$.get_y(this1);
	var az = glm__$Quat_Quat_$Impl_$.get_z(this1);
	var aw = glm__$Quat_Quat_$Impl_$.get_w(this1);
	var bx = glm__$Quat_Quat_$Impl_$.get_x(b);
	var by = glm__$Quat_Quat_$Impl_$.get_y(b);
	var bz = glm__$Quat_Quat_$Impl_$.get_z(b);
	var bw = glm__$Quat_Quat_$Impl_$.get_w(b);
	glm__$Quat_Quat_$Impl_$.set_x(this1,ax * bw + aw * bx + ay * bz - az * by);
	glm__$Quat_Quat_$Impl_$.set_y(this1,ay * bw + aw * by + az * bx - ax * bz);
	glm__$Quat_Quat_$Impl_$.set_z(this1,az * bw + aw * bz + ax * by - ay * bx);
	glm__$Quat_Quat_$Impl_$.set_w(this1,aw * bw - ax * bx - ay * by - az * bz);
	return this1;
};
glm__$Quat_Quat_$Impl_$.fromVec4 = function(v) {
	return glm__$Quat_Quat_$Impl_$._new(glm__$Vec4_Vec4_$Impl_$.get_w(v),glm__$Vec4_Vec4_$Impl_$.get_x(v),glm__$Vec4_Vec4_$Impl_$.get_y(v),glm__$Vec4_Vec4_$Impl_$.get_z(v));
};
glm__$Quat_Quat_$Impl_$.slerp = function(this1,target,t) {
	var b = glm__$Quat_Quat_$Impl_$.clone(target);
	var cosom = glm__$Quat_Quat_$Impl_$.get_x(this1) * glm__$Quat_Quat_$Impl_$.get_x(b) + glm__$Quat_Quat_$Impl_$.get_y(this1) * glm__$Quat_Quat_$Impl_$.get_y(b) + glm__$Quat_Quat_$Impl_$.get_z(this1) * glm__$Quat_Quat_$Impl_$.get_z(b) + glm__$Quat_Quat_$Impl_$.get_w(this1) * glm__$Quat_Quat_$Impl_$.get_w(b);
	if(cosom < 0) {
		cosom *= -1;
		glm__$Quat_Quat_$Impl_$.set_w(b,glm__$Quat_Quat_$Impl_$.get_w(b) * -1);
		glm__$Quat_Quat_$Impl_$.set_x(b,glm__$Quat_Quat_$Impl_$.get_x(b) * -1);
		glm__$Quat_Quat_$Impl_$.set_y(b,glm__$Quat_Quat_$Impl_$.get_y(b) * -1);
		glm__$Quat_Quat_$Impl_$.set_z(b,glm__$Quat_Quat_$Impl_$.get_z(b) * -1);
	}
	var scale0;
	var scale1;
	if(1.0 - cosom > 0.000001) {
		var omega = Math.acos(cosom);
		var sinom = Math.sin(omega);
		scale0 = Math.sin((1.0 - t) * omega) / sinom;
		scale1 = Math.sin(t * omega) / sinom;
	} else {
		scale0 = 1.0 - t;
		scale1 = t;
	}
	this1[0] = scale0 * this1[0] + b[0] * scale1;
	this1[1] = scale0 * this1[1] + b[1] * scale1;
	this1[2] = scale0 * this1[2] + b[2] * scale1;
	this1[3] = scale0 * this1[3] + b[3] * scale1;
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
glm__$Vec2_Vec2_$Impl_$.get_s = function(this1) {
	return this1[0];
};
glm__$Vec2_Vec2_$Impl_$.set_s = function(this1,v) {
	return this1[0] = v;
};
glm__$Vec2_Vec2_$Impl_$.get_t = function(this1) {
	return this1[1];
};
glm__$Vec2_Vec2_$Impl_$.set_t = function(this1,v) {
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
glm__$Vec2_Vec2_$Impl_$.set = function(this1,x,y) {
	if(x != null) this1[0] = x;
	if(y != null) this1[1] = y;
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.zero = function(this1) {
	this1[0] = 0;
	this1[1] = 0;
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.sqrLength = function(this1) {
	return this1[0] * this1[0] + this1[1] * this1[1];
};
glm__$Vec2_Vec2_$Impl_$.$length = function(this1) {
	return Math.sqrt(glm__$Vec2_Vec2_$Impl_$.sqrLength(this1));
};
glm__$Vec2_Vec2_$Impl_$.normalize = function(this1) {
	var l = glm__$Vec2_Vec2_$Impl_$.$length(this1);
	if(l != 0) {
		this1[0] /= l;
		this1[1] /= l;
	} else glm__$Vec2_Vec2_$Impl_$.zero(this1);
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.clone = function(this1) {
	var copy = glm__$Vec2_Vec2_$Impl_$._new();
	copy[0] = this1[0];
	copy[1] = this1[1];
	return copy;
};
glm__$Vec2_Vec2_$Impl_$.copy = function(this1,v) {
	this1[0] = v[0];
	this1[1] = v[1];
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.addVec2 = function(this1,b) {
	this1[0] += b[0];
	this1[1] += b[1];
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.addVec2Op = function(a,b) {
	return glm__$Vec2_Vec2_$Impl_$.addVec2(glm__$Vec2_Vec2_$Impl_$.clone(a),b);
};
glm__$Vec2_Vec2_$Impl_$.subtractVec2 = function(this1,b) {
	this1[0] -= b[0];
	this1[1] -= b[1];
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.subtractVec2Op = function(a,b) {
	return glm__$Vec2_Vec2_$Impl_$.subtractVec2(glm__$Vec2_Vec2_$Impl_$.clone(a),b);
};
glm__$Vec2_Vec2_$Impl_$.addScalar = function(this1,b) {
	this1[0] += b;
	this1[1] += b;
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.addScalarOp = function(a,b) {
	return glm__$Vec2_Vec2_$Impl_$.addScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),b);
};
glm__$Vec2_Vec2_$Impl_$.addScalarOp2 = function(b,a) {
	return glm__$Vec2_Vec2_$Impl_$.addScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),b);
};
glm__$Vec2_Vec2_$Impl_$.subtractScalar = function(this1,b) {
	this1[0] -= b;
	this1[1] -= b;
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.subtractScalarOp = function(a,b) {
	return glm__$Vec2_Vec2_$Impl_$.subtractScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),b);
};
glm__$Vec2_Vec2_$Impl_$.subtractScalarOp2 = function(a,b) {
	return glm__$Vec2_Vec2_$Impl_$.addScalar(glm__$Vec2_Vec2_$Impl_$.multiplyScalar(glm__$Vec2_Vec2_$Impl_$.clone(b),-1),a);
};
glm__$Vec2_Vec2_$Impl_$.multiplyScalar = function(this1,b) {
	this1[0] *= b;
	this1[1] *= b;
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.multiplyScalarOp = function(a,b) {
	return glm__$Vec2_Vec2_$Impl_$.multiplyScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),b);
};
glm__$Vec2_Vec2_$Impl_$.multiplyScalarOp2 = function(b,a) {
	return glm__$Vec2_Vec2_$Impl_$.multiplyScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),b);
};
glm__$Vec2_Vec2_$Impl_$.divideScalar = function(this1,b) {
	this1[0] /= b;
	this1[1] /= b;
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.divideScalarOp = function(a,b) {
	return glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),b);
};
glm__$Vec2_Vec2_$Impl_$.arrayGet = function(this1,i) {
	return this1[i];
};
glm__$Vec2_Vec2_$Impl_$.arraySet = function(this1,i,x) {
	return this1[i] = x;
};
glm__$Vec2_Vec2_$Impl_$.toArray = function(this1) {
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.lerp = function(this1,target,t) {
	this1[0] = glm_GLM.lerp(this1[0],target[0],t);
	this1[1] = glm_GLM.lerp(this1[1],target[1],t);
	return this1;
};
glm__$Vec2_Vec2_$Impl_$.dot = function(a,b) {
	return a[0] * b[0] + a[1] * b[1];
};
glm__$Vec2_Vec2_$Impl_$.fromVec3 = function(v) {
	return glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(v),glm__$Vec3_Vec3_$Impl_$.get_y(v));
};
glm__$Vec2_Vec2_$Impl_$.fromVec4 = function(v) {
	return glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec4_Vec4_$Impl_$.get_x(v),glm__$Vec4_Vec4_$Impl_$.get_y(v));
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
glm__$Vec3_Vec3_$Impl_$.get_r = function(this1) {
	return this1[0];
};
glm__$Vec3_Vec3_$Impl_$.set_r = function(this1,v) {
	return this1[0] = v;
};
glm__$Vec3_Vec3_$Impl_$.get_g = function(this1) {
	return this1[1];
};
glm__$Vec3_Vec3_$Impl_$.set_g = function(this1,v) {
	return this1[1] = v;
};
glm__$Vec3_Vec3_$Impl_$.get_b = function(this1) {
	return this1[2];
};
glm__$Vec3_Vec3_$Impl_$.set_b = function(this1,v) {
	return this1[2] = v;
};
glm__$Vec3_Vec3_$Impl_$.get_s = function(this1) {
	return this1[0];
};
glm__$Vec3_Vec3_$Impl_$.set_s = function(this1,v) {
	return this1[0] = v;
};
glm__$Vec3_Vec3_$Impl_$.get_t = function(this1) {
	return this1[1];
};
glm__$Vec3_Vec3_$Impl_$.set_t = function(this1,v) {
	return this1[1] = v;
};
glm__$Vec3_Vec3_$Impl_$.get_p = function(this1) {
	return this1[2];
};
glm__$Vec3_Vec3_$Impl_$.set_p = function(this1,v) {
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
glm__$Vec3_Vec3_$Impl_$.zero = function(this1) {
	this1[0] = 0;
	this1[1] = 0;
	this1[2] = 0;
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.sqrLength = function(this1) {
	return this1[0] * this1[0] + this1[1] * this1[1] + this1[2] * this1[2];
};
glm__$Vec3_Vec3_$Impl_$.$length = function(this1) {
	return Math.sqrt(glm__$Vec3_Vec3_$Impl_$.sqrLength(this1));
};
glm__$Vec3_Vec3_$Impl_$.normalize = function(this1) {
	var l = glm__$Vec3_Vec3_$Impl_$.$length(this1);
	if(l != 0) {
		this1[0] /= l;
		this1[1] /= l;
		this1[2] /= l;
	} else glm__$Vec3_Vec3_$Impl_$.zero(this1);
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
glm__$Vec3_Vec3_$Impl_$.addVec3Op = function(a,b) {
	return glm__$Vec3_Vec3_$Impl_$.addVec3(glm__$Vec3_Vec3_$Impl_$.clone(a),b);
};
glm__$Vec3_Vec3_$Impl_$.subtractVec3 = function(this1,b) {
	this1[0] -= b[0];
	this1[1] -= b[1];
	this1[2] -= b[2];
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.subtractVec3Op = function(a,b) {
	return glm__$Vec3_Vec3_$Impl_$.subtractVec3(glm__$Vec3_Vec3_$Impl_$.clone(a),b);
};
glm__$Vec3_Vec3_$Impl_$.addScalar = function(this1,b) {
	this1[0] += b;
	this1[1] += b;
	this1[2] += b;
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.addScalarOp = function(a,b) {
	return glm__$Vec3_Vec3_$Impl_$.addScalar(glm__$Vec3_Vec3_$Impl_$.clone(a),b);
};
glm__$Vec3_Vec3_$Impl_$.addScalarOp2 = function(b,a) {
	return glm__$Vec3_Vec3_$Impl_$.addScalar(glm__$Vec3_Vec3_$Impl_$.clone(a),b);
};
glm__$Vec3_Vec3_$Impl_$.subtractScalar = function(this1,b) {
	this1[0] -= b;
	this1[1] -= b;
	this1[2] -= b;
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.subtractScalarOp = function(a,b) {
	return glm__$Vec3_Vec3_$Impl_$.subtractScalar(glm__$Vec3_Vec3_$Impl_$.clone(a),b);
};
glm__$Vec3_Vec3_$Impl_$.subtractScalarOp2 = function(a,b) {
	return glm__$Vec3_Vec3_$Impl_$.addScalar(glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(b),-1),a);
};
glm__$Vec3_Vec3_$Impl_$.multiplyScalar = function(this1,b) {
	this1[0] *= b;
	this1[1] *= b;
	this1[2] *= b;
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.multiplyScalarOp = function(a,b) {
	return glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(a),b);
};
glm__$Vec3_Vec3_$Impl_$.multiplyScalarOp2 = function(b,a) {
	return glm__$Vec3_Vec3_$Impl_$.multiplyScalar(glm__$Vec3_Vec3_$Impl_$.clone(a),b);
};
glm__$Vec3_Vec3_$Impl_$.divideScalar = function(this1,b) {
	this1[0] /= b;
	this1[1] /= b;
	this1[2] /= b;
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.divideScalarOp = function(a,b) {
	return glm__$Vec3_Vec3_$Impl_$.divideScalar(glm__$Vec3_Vec3_$Impl_$.clone(a),b);
};
glm__$Vec3_Vec3_$Impl_$.arrayGet = function(this1,i) {
	return this1[i];
};
glm__$Vec3_Vec3_$Impl_$.arraySet = function(this1,i,x) {
	return this1[i] = x;
};
glm__$Vec3_Vec3_$Impl_$.toArray = function(this1) {
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.lerp = function(this1,target,t) {
	this1[0] = glm_GLM.lerp(this1[0],target[0],t);
	this1[1] = glm_GLM.lerp(this1[1],target[1],t);
	this1[2] = glm_GLM.lerp(this1[2],target[2],t);
	return this1;
};
glm__$Vec3_Vec3_$Impl_$.toVec4 = function(this1) {
	return glm__$Vec4_Vec4_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(this1),glm__$Vec3_Vec3_$Impl_$.get_y(this1),glm__$Vec3_Vec3_$Impl_$.get_z(this1),0);
};
glm__$Vec3_Vec3_$Impl_$.dot = function(a,b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
glm__$Vec3_Vec3_$Impl_$.cross = function(a,b) {
	return glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_y(a) * glm__$Vec3_Vec3_$Impl_$.get_z(b) - glm__$Vec3_Vec3_$Impl_$.get_y(b) * glm__$Vec3_Vec3_$Impl_$.get_z(a),glm__$Vec3_Vec3_$Impl_$.get_z(a) * glm__$Vec3_Vec3_$Impl_$.get_x(b) - glm__$Vec3_Vec3_$Impl_$.get_z(b) * glm__$Vec3_Vec3_$Impl_$.get_x(a),glm__$Vec3_Vec3_$Impl_$.get_x(a) * glm__$Vec3_Vec3_$Impl_$.get_y(b) - glm__$Vec3_Vec3_$Impl_$.get_x(b) * glm__$Vec3_Vec3_$Impl_$.get_y(a));
};
glm__$Vec3_Vec3_$Impl_$.fromVec2 = function(v) {
	return glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(v),glm__$Vec2_Vec2_$Impl_$.get_y(v),0);
};
glm__$Vec3_Vec3_$Impl_$.fromVec4 = function(v) {
	return glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec4_Vec4_$Impl_$.get_x(v),glm__$Vec4_Vec4_$Impl_$.get_y(v),glm__$Vec4_Vec4_$Impl_$.get_z(v));
};
var glm__$Vec4_Vec4_$Impl_$ = {};
$hxClasses["glm._Vec4.Vec4_Impl_"] = glm__$Vec4_Vec4_$Impl_$;
glm__$Vec4_Vec4_$Impl_$.__name__ = ["glm","_Vec4","Vec4_Impl_"];
glm__$Vec4_Vec4_$Impl_$.get_x = function(this1) {
	return this1[0];
};
glm__$Vec4_Vec4_$Impl_$.set_x = function(this1,v) {
	return this1[0] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_y = function(this1) {
	return this1[1];
};
glm__$Vec4_Vec4_$Impl_$.set_y = function(this1,v) {
	return this1[1] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_z = function(this1) {
	return this1[2];
};
glm__$Vec4_Vec4_$Impl_$.set_z = function(this1,v) {
	return this1[2] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_w = function(this1) {
	return this1[3];
};
glm__$Vec4_Vec4_$Impl_$.set_w = function(this1,v) {
	return this1[3] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_r = function(this1) {
	return this1[0];
};
glm__$Vec4_Vec4_$Impl_$.set_r = function(this1,v) {
	return this1[0] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_g = function(this1) {
	return this1[1];
};
glm__$Vec4_Vec4_$Impl_$.set_g = function(this1,v) {
	return this1[1] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_b = function(this1) {
	return this1[2];
};
glm__$Vec4_Vec4_$Impl_$.set_b = function(this1,v) {
	return this1[2] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_a = function(this1) {
	return this1[3];
};
glm__$Vec4_Vec4_$Impl_$.set_a = function(this1,v) {
	return this1[3] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_s = function(this1) {
	return this1[0];
};
glm__$Vec4_Vec4_$Impl_$.set_s = function(this1,v) {
	return this1[0] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_t = function(this1) {
	return this1[1];
};
glm__$Vec4_Vec4_$Impl_$.set_t = function(this1,v) {
	return this1[1] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_p = function(this1) {
	return this1[2];
};
glm__$Vec4_Vec4_$Impl_$.set_p = function(this1,v) {
	return this1[2] = v;
};
glm__$Vec4_Vec4_$Impl_$.get_q = function(this1) {
	return this1[3];
};
glm__$Vec4_Vec4_$Impl_$.set_q = function(this1,v) {
	return this1[3] = v;
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
glm__$Vec4_Vec4_$Impl_$.set = function(this1,x,y,z,w) {
	if(x != null) this1[0] = x;
	if(y != null) this1[1] = y;
	if(z != null) this1[2] = z;
	if(w != null) this1[3] = w;
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.zero = function(this1) {
	this1[0] = 0;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.sqrLength = function(this1) {
	return this1[0] * this1[0] + this1[1] * this1[1] + this1[2] * this1[2] + this1[3] * this1[3];
};
glm__$Vec4_Vec4_$Impl_$.$length = function(this1) {
	return Math.sqrt(glm__$Vec4_Vec4_$Impl_$.sqrLength(this1));
};
glm__$Vec4_Vec4_$Impl_$.normalize = function(this1) {
	var l = glm__$Vec4_Vec4_$Impl_$.$length(this1);
	if(l != 0) {
		this1[0] /= l;
		this1[1] /= l;
		this1[2] /= l;
		this1[3] /= l;
	} else glm__$Vec4_Vec4_$Impl_$.zero(this1);
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
glm__$Vec4_Vec4_$Impl_$.copy = function(this1,v) {
	this1[0] = v[0];
	this1[1] = v[1];
	this1[2] = v[2];
	this1[3] = v[3];
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.addVec4 = function(this1,b) {
	this1[0] += b[0];
	this1[1] += b[1];
	this1[2] += b[2];
	this1[3] += b[3];
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.addVec4Op = function(a,b) {
	return glm__$Vec4_Vec4_$Impl_$.addVec4(glm__$Vec4_Vec4_$Impl_$.clone(a),b);
};
glm__$Vec4_Vec4_$Impl_$.subtractVec4 = function(this1,b) {
	this1[0] -= b[0];
	this1[1] -= b[1];
	this1[2] -= b[2];
	this1[3] -= b[3];
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.subtractVec4Op = function(a,b) {
	return glm__$Vec4_Vec4_$Impl_$.subtractVec4(glm__$Vec4_Vec4_$Impl_$.clone(a),b);
};
glm__$Vec4_Vec4_$Impl_$.addScalar = function(this1,b) {
	this1[0] += b;
	this1[1] += b;
	this1[2] += b;
	this1[3] += b;
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.addScalarOp = function(a,b) {
	return glm__$Vec4_Vec4_$Impl_$.addScalar(glm__$Vec4_Vec4_$Impl_$.clone(a),b);
};
glm__$Vec4_Vec4_$Impl_$.addScalarOp2 = function(b,a) {
	return glm__$Vec4_Vec4_$Impl_$.addScalar(glm__$Vec4_Vec4_$Impl_$.clone(a),b);
};
glm__$Vec4_Vec4_$Impl_$.subtractScalar = function(this1,b) {
	this1[0] -= b;
	this1[1] -= b;
	this1[2] -= b;
	this1[3] -= b;
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.subtractScalarOp = function(a,b) {
	return glm__$Vec4_Vec4_$Impl_$.subtractScalar(glm__$Vec4_Vec4_$Impl_$.clone(a),b);
};
glm__$Vec4_Vec4_$Impl_$.subtractScalarOp2 = function(a,b) {
	return glm__$Vec4_Vec4_$Impl_$.addScalar(glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(b),-1),a);
};
glm__$Vec4_Vec4_$Impl_$.multiplyScalar = function(this1,b) {
	this1[0] *= b;
	this1[1] *= b;
	this1[2] *= b;
	this1[3] *= b;
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.multiplyScalarOp = function(a,b) {
	return glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(a),b);
};
glm__$Vec4_Vec4_$Impl_$.multiplyScalarOp2 = function(b,a) {
	return glm__$Vec4_Vec4_$Impl_$.multiplyScalar(glm__$Vec4_Vec4_$Impl_$.clone(a),b);
};
glm__$Vec4_Vec4_$Impl_$.divideScalar = function(this1,b) {
	this1[0] /= b;
	this1[1] /= b;
	this1[2] /= b;
	this1[3] /= b;
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.divideScalarOp = function(a,b) {
	return glm__$Vec4_Vec4_$Impl_$.divideScalar(glm__$Vec4_Vec4_$Impl_$.clone(a),b);
};
glm__$Vec4_Vec4_$Impl_$.arrayGet = function(this1,i) {
	return this1[i];
};
glm__$Vec4_Vec4_$Impl_$.arraySet = function(this1,i,x) {
	return this1[i] = x;
};
glm__$Vec4_Vec4_$Impl_$.toArray = function(this1) {
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.lerp = function(this1,target,t) {
	this1[0] = glm_GLM.lerp(this1[0],target[0],t);
	this1[1] = glm_GLM.lerp(this1[1],target[1],t);
	this1[2] = glm_GLM.lerp(this1[2],target[2],t);
	this1[3] = glm_GLM.lerp(this1[3],target[3],t);
	return this1;
};
glm__$Vec4_Vec4_$Impl_$.dot = function(a,b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};
glm__$Vec4_Vec4_$Impl_$.fromVec2 = function(v) {
	return glm__$Vec4_Vec4_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(v),glm__$Vec2_Vec2_$Impl_$.get_y(v),0,1);
};
glm__$Vec4_Vec4_$Impl_$.fromVec3 = function(v) {
	return glm__$Vec4_Vec4_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(v),glm__$Vec3_Vec3_$Impl_$.get_y(v),glm__$Vec3_Vec3_$Impl_$.get_z(v),1);
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
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
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
var haxe_Serializer = function() {
	this.buf = new StringBuf();
	this.cache = [];
	this.useCache = haxe_Serializer.USE_CACHE;
	this.useEnumIndex = haxe_Serializer.USE_ENUM_INDEX;
	this.shash = new haxe_ds_StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe_Serializer;
haxe_Serializer.__name__ = ["haxe","Serializer"];
haxe_Serializer.run = function(v) {
	var s = new haxe_Serializer();
	s.serialize(v);
	return s.toString();
};
haxe_Serializer.prototype = {
	toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
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
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = [];
	this.cache = [];
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
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
haxe_Unserializer.run = function(v) {
	return new haxe_Unserializer(v).unserialize();
};
haxe_Unserializer.prototype = {
	setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
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
var haxe_Utf8 = function(size) {
	this.__b = "";
};
$hxClasses["haxe.Utf8"] = haxe_Utf8;
haxe_Utf8.__name__ = ["haxe","Utf8"];
haxe_Utf8.prototype = {
	__class__: haxe_Utf8
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
var haxe_ds_Option = $hxClasses["haxe.ds.Option"] = { __ename__ : ["haxe","ds","Option"], __constructs__ : ["Some","None"] };
haxe_ds_Option.Some = function(v) { var $x = ["Some",0,v]; $x.__enum__ = haxe_ds_Option; $x.toString = $estr; return $x; };
haxe_ds_Option.None = ["None",1];
haxe_ds_Option.None.toString = $estr;
haxe_ds_Option.None.__enum__ = haxe_ds_Option;
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
haxe_io_Path.directory = function(path) {
	var s = new haxe_io_Path(path);
	if(s.dir == null) return "";
	return s.dir;
};
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
var haxe_macro_Constant = $hxClasses["haxe.macro.Constant"] = { __ename__ : ["haxe","macro","Constant"], __constructs__ : ["CInt","CFloat","CString","CIdent","CRegexp"] };
haxe_macro_Constant.CInt = function(v) { var $x = ["CInt",0,v]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
haxe_macro_Constant.CFloat = function(f) { var $x = ["CFloat",1,f]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
haxe_macro_Constant.CString = function(s) { var $x = ["CString",2,s]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
haxe_macro_Constant.CIdent = function(s) { var $x = ["CIdent",3,s]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
haxe_macro_Constant.CRegexp = function(r,opt) { var $x = ["CRegexp",4,r,opt]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
var haxe_macro_Binop = $hxClasses["haxe.macro.Binop"] = { __ename__ : ["haxe","macro","Binop"], __constructs__ : ["OpAdd","OpMult","OpDiv","OpSub","OpAssign","OpEq","OpNotEq","OpGt","OpGte","OpLt","OpLte","OpAnd","OpOr","OpXor","OpBoolAnd","OpBoolOr","OpShl","OpShr","OpUShr","OpMod","OpAssignOp","OpInterval","OpArrow"] };
haxe_macro_Binop.OpAdd = ["OpAdd",0];
haxe_macro_Binop.OpAdd.toString = $estr;
haxe_macro_Binop.OpAdd.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpMult = ["OpMult",1];
haxe_macro_Binop.OpMult.toString = $estr;
haxe_macro_Binop.OpMult.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpDiv = ["OpDiv",2];
haxe_macro_Binop.OpDiv.toString = $estr;
haxe_macro_Binop.OpDiv.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpSub = ["OpSub",3];
haxe_macro_Binop.OpSub.toString = $estr;
haxe_macro_Binop.OpSub.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpAssign = ["OpAssign",4];
haxe_macro_Binop.OpAssign.toString = $estr;
haxe_macro_Binop.OpAssign.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpEq = ["OpEq",5];
haxe_macro_Binop.OpEq.toString = $estr;
haxe_macro_Binop.OpEq.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpNotEq = ["OpNotEq",6];
haxe_macro_Binop.OpNotEq.toString = $estr;
haxe_macro_Binop.OpNotEq.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpGt = ["OpGt",7];
haxe_macro_Binop.OpGt.toString = $estr;
haxe_macro_Binop.OpGt.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpGte = ["OpGte",8];
haxe_macro_Binop.OpGte.toString = $estr;
haxe_macro_Binop.OpGte.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpLt = ["OpLt",9];
haxe_macro_Binop.OpLt.toString = $estr;
haxe_macro_Binop.OpLt.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpLte = ["OpLte",10];
haxe_macro_Binop.OpLte.toString = $estr;
haxe_macro_Binop.OpLte.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpAnd = ["OpAnd",11];
haxe_macro_Binop.OpAnd.toString = $estr;
haxe_macro_Binop.OpAnd.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpOr = ["OpOr",12];
haxe_macro_Binop.OpOr.toString = $estr;
haxe_macro_Binop.OpOr.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpXor = ["OpXor",13];
haxe_macro_Binop.OpXor.toString = $estr;
haxe_macro_Binop.OpXor.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpBoolAnd = ["OpBoolAnd",14];
haxe_macro_Binop.OpBoolAnd.toString = $estr;
haxe_macro_Binop.OpBoolAnd.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpBoolOr = ["OpBoolOr",15];
haxe_macro_Binop.OpBoolOr.toString = $estr;
haxe_macro_Binop.OpBoolOr.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpShl = ["OpShl",16];
haxe_macro_Binop.OpShl.toString = $estr;
haxe_macro_Binop.OpShl.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpShr = ["OpShr",17];
haxe_macro_Binop.OpShr.toString = $estr;
haxe_macro_Binop.OpShr.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpUShr = ["OpUShr",18];
haxe_macro_Binop.OpUShr.toString = $estr;
haxe_macro_Binop.OpUShr.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpMod = ["OpMod",19];
haxe_macro_Binop.OpMod.toString = $estr;
haxe_macro_Binop.OpMod.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpAssignOp = function(op) { var $x = ["OpAssignOp",20,op]; $x.__enum__ = haxe_macro_Binop; $x.toString = $estr; return $x; };
haxe_macro_Binop.OpInterval = ["OpInterval",21];
haxe_macro_Binop.OpInterval.toString = $estr;
haxe_macro_Binop.OpInterval.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpArrow = ["OpArrow",22];
haxe_macro_Binop.OpArrow.toString = $estr;
haxe_macro_Binop.OpArrow.__enum__ = haxe_macro_Binop;
var haxe_macro_Unop = $hxClasses["haxe.macro.Unop"] = { __ename__ : ["haxe","macro","Unop"], __constructs__ : ["OpIncrement","OpDecrement","OpNot","OpNeg","OpNegBits"] };
haxe_macro_Unop.OpIncrement = ["OpIncrement",0];
haxe_macro_Unop.OpIncrement.toString = $estr;
haxe_macro_Unop.OpIncrement.__enum__ = haxe_macro_Unop;
haxe_macro_Unop.OpDecrement = ["OpDecrement",1];
haxe_macro_Unop.OpDecrement.toString = $estr;
haxe_macro_Unop.OpDecrement.__enum__ = haxe_macro_Unop;
haxe_macro_Unop.OpNot = ["OpNot",2];
haxe_macro_Unop.OpNot.toString = $estr;
haxe_macro_Unop.OpNot.__enum__ = haxe_macro_Unop;
haxe_macro_Unop.OpNeg = ["OpNeg",3];
haxe_macro_Unop.OpNeg.toString = $estr;
haxe_macro_Unop.OpNeg.__enum__ = haxe_macro_Unop;
haxe_macro_Unop.OpNegBits = ["OpNegBits",4];
haxe_macro_Unop.OpNegBits.toString = $estr;
haxe_macro_Unop.OpNegBits.__enum__ = haxe_macro_Unop;
var haxe_macro_ExprDef = $hxClasses["haxe.macro.ExprDef"] = { __ename__ : ["haxe","macro","ExprDef"], __constructs__ : ["EConst","EArray","EBinop","EField","EParenthesis","EObjectDecl","EArrayDecl","ECall","ENew","EUnop","EVars","EFunction","EBlock","EFor","EIn","EIf","EWhile","ESwitch","ETry","EReturn","EBreak","EContinue","EUntyped","EThrow","ECast","EDisplay","EDisplayNew","ETernary","ECheckType","EMeta"] };
haxe_macro_ExprDef.EConst = function(c) { var $x = ["EConst",0,c]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EArray = function(e1,e2) { var $x = ["EArray",1,e1,e2]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EBinop = function(op,e1,e2) { var $x = ["EBinop",2,op,e1,e2]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EField = function(e,field) { var $x = ["EField",3,e,field]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EParenthesis = function(e) { var $x = ["EParenthesis",4,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EObjectDecl = function(fields) { var $x = ["EObjectDecl",5,fields]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EArrayDecl = function(values) { var $x = ["EArrayDecl",6,values]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ECall = function(e,params) { var $x = ["ECall",7,e,params]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ENew = function(t,params) { var $x = ["ENew",8,t,params]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EUnop = function(op,postFix,e) { var $x = ["EUnop",9,op,postFix,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EVars = function(vars) { var $x = ["EVars",10,vars]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EFunction = function(name,f) { var $x = ["EFunction",11,name,f]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EBlock = function(exprs) { var $x = ["EBlock",12,exprs]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EFor = function(it,expr) { var $x = ["EFor",13,it,expr]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EIn = function(e1,e2) { var $x = ["EIn",14,e1,e2]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EIf = function(econd,eif,eelse) { var $x = ["EIf",15,econd,eif,eelse]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EWhile = function(econd,e,normalWhile) { var $x = ["EWhile",16,econd,e,normalWhile]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ESwitch = function(e,cases,edef) { var $x = ["ESwitch",17,e,cases,edef]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ETry = function(e,catches) { var $x = ["ETry",18,e,catches]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EReturn = function(e) { var $x = ["EReturn",19,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EBreak = ["EBreak",20];
haxe_macro_ExprDef.EBreak.toString = $estr;
haxe_macro_ExprDef.EBreak.__enum__ = haxe_macro_ExprDef;
haxe_macro_ExprDef.EContinue = ["EContinue",21];
haxe_macro_ExprDef.EContinue.toString = $estr;
haxe_macro_ExprDef.EContinue.__enum__ = haxe_macro_ExprDef;
haxe_macro_ExprDef.EUntyped = function(e) { var $x = ["EUntyped",22,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EThrow = function(e) { var $x = ["EThrow",23,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ECast = function(e,t) { var $x = ["ECast",24,e,t]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EDisplay = function(e,isCall) { var $x = ["EDisplay",25,e,isCall]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EDisplayNew = function(t) { var $x = ["EDisplayNew",26,t]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ETernary = function(econd,eif,eelse) { var $x = ["ETernary",27,econd,eif,eelse]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ECheckType = function(e,t) { var $x = ["ECheckType",28,e,t]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EMeta = function(s,e) { var $x = ["EMeta",29,s,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
var haxe_macro_ComplexType = $hxClasses["haxe.macro.ComplexType"] = { __ename__ : ["haxe","macro","ComplexType"], __constructs__ : ["TPath","TFunction","TAnonymous","TParent","TExtend","TOptional"] };
haxe_macro_ComplexType.TPath = function(p) { var $x = ["TPath",0,p]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TFunction = function(args,ret) { var $x = ["TFunction",1,args,ret]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TAnonymous = function(fields) { var $x = ["TAnonymous",2,fields]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TParent = function(t) { var $x = ["TParent",3,t]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TExtend = function(p,fields) { var $x = ["TExtend",4,p,fields]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TOptional = function(t) { var $x = ["TOptional",5,t]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
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
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
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
		this.onDone.resolve(true);
	}
	,get__tid: function() {
		return 3;
	}
	,hxSerialize: function(s) {
	}
	,hxUnserialize: function(s) {
	}
	,__class__: tusk_PromiseComponent
});
var loading_SlamComponent = function(time,startScale,endScale,easing) {
	this.t = 0;
	this.totalLength = time;
	this.startScale = startScale;
	this.endScale = endScale;
	if(easing == null) this.easing = tusk_math_Ease.OutElastic; else this.easing = easing;
	tusk_PromiseComponent.call(this);
};
$hxClasses["loading.SlamComponent"] = loading_SlamComponent;
loading_SlamComponent.__name__ = ["loading","SlamComponent"];
loading_SlamComponent.__super__ = tusk_PromiseComponent;
loading_SlamComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	hxSerialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.totalLength);
		s.serialize(this.easing);
		s.serialize(this.startScale);
		s.serialize(this.endScale);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.totalLength);
		s.serialize(this.easing);
		s.serialize(this.startScale);
		s.serialize(this.endScale);
	}
	,get__tid: function() {
		return 12;
	}
	,__class__: loading_SlamComponent
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
	,___disconnectRoutes: function() {
	}
	,onEnabled: function() {
	}
	,onDisabled: function() {
	}
	,onEntityChanged: function(entity,event) {
	}
	,onStart: function(event) {
	}
	,onDestroy: function(event) {
	}
	,onUpdate: function(event) {
	}
	,onRender: function(event) {
	}
	,onKeyDown: function(event) {
	}
	,onKeyUp: function(event) {
	}
	,onMouseDown: function(event) {
	}
	,onMouseUp: function(event) {
	}
	,onMouseMove: function(event) {
	}
	,hxSerialize: function(s) {
		s.serialize(this.enabled);
	}
	,hxUnserialize: function(u) {
		this.set_enabled(u.unserialize());
	}
	,__class__: tusk_Processor
};
var loading_SlamProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(5).include(12);
	tusk_Processor.call(this,entities);
};
$hxClasses["loading.SlamProcessor"] = loading_SlamProcessor;
loading_SlamProcessor.__name__ = ["loading","SlamProcessor"];
loading_SlamProcessor.__super__ = tusk_Processor;
loading_SlamProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var s = entity.get(12);
			if(s.done._resolved) continue;
			s.t += data.dt;
			if(s.t >= s.totalLength) {
				s.t = s.totalLength;
				s.finish();
			}
			glm__$Vec3_Vec3_$Impl_$.copy(t.lastScale,t.scale);
			glm__$Vec3_Vec3_$Impl_$.set_x(t.scale,s.easing(s.t,s.startScale,s.endScale - s.startScale,s.totalLength));
			glm__$Vec3_Vec3_$Impl_$.set_y(t.scale,glm__$Vec3_Vec3_$Impl_$.get_x(t.scale));
			glm__$Vec3_Vec3_$Impl_$.set_z(t.scale,glm__$Vec3_Vec3_$Impl_$.get_x(t.scale));
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: loading_SlamProcessor
});
var loading_SlideComponent = function(time,startPos,endPos,easing) {
	this.t = 0;
	this.totalLength = time;
	this.startPos = startPos;
	this.endPos = endPos;
	if(easing == null) this.easing = tusk_math_Ease.OutElastic; else this.easing = easing;
	tusk_PromiseComponent.call(this);
};
$hxClasses["loading.SlideComponent"] = loading_SlideComponent;
loading_SlideComponent.__name__ = ["loading","SlideComponent"];
loading_SlideComponent.__super__ = tusk_PromiseComponent;
loading_SlideComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	hxSerialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.totalLength);
		s.serialize(this.easing);
		s.serialize(this.startPos);
		s.serialize(this.endPos);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.totalLength);
		s.serialize(this.easing);
		s.serialize(this.startPos);
		s.serialize(this.endPos);
	}
	,get__tid: function() {
		return 13;
	}
	,__class__: loading_SlideComponent
});
var loading_SlideProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(5).include(13);
	tusk_Processor.call(this,entities);
};
$hxClasses["loading.SlideProcessor"] = loading_SlideProcessor;
loading_SlideProcessor.__name__ = ["loading","SlideProcessor"];
loading_SlideProcessor.__super__ = tusk_Processor;
loading_SlideProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var s = entity.get(13);
			if(s.done._resolved) continue;
			s.t += data.dt;
			if(s.t >= s.totalLength) {
				s.t = s.totalLength;
				s.finish();
			}
			glm__$Vec3_Vec3_$Impl_$.copy(t.lastPosition,t.position);
			glm__$Vec3_Vec3_$Impl_$.set_x(t.position,s.easing(s.t,glm__$Vec3_Vec3_$Impl_$.get_x(s.startPos),glm__$Vec3_Vec3_$Impl_$.get_x(s.endPos) - glm__$Vec3_Vec3_$Impl_$.get_x(s.startPos),s.totalLength));
			glm__$Vec3_Vec3_$Impl_$.set_y(t.position,s.easing(s.t,glm__$Vec3_Vec3_$Impl_$.get_y(s.startPos),glm__$Vec3_Vec3_$Impl_$.get_y(s.endPos) - glm__$Vec3_Vec3_$Impl_$.get_y(s.startPos),s.totalLength));
			glm__$Vec3_Vec3_$Impl_$.set_z(t.position,s.easing(s.t,glm__$Vec3_Vec3_$Impl_$.get_z(s.startPos),glm__$Vec3_Vec3_$Impl_$.get_z(s.endPos) - glm__$Vec3_Vec3_$Impl_$.get_z(s.startPos),s.totalLength));
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: loading_SlideProcessor
});
var minigames_BottleRocket = function() {
	tusk_Scene.call(this,"BottleRocket");
};
$hxClasses["minigames.BottleRocket"] = minigames_BottleRocket;
minigames_BottleRocket.__name__ = ["minigames","BottleRocket"];
minigames_BottleRocket.__super__ = tusk_Scene;
minigames_BottleRocket.prototype = $extend(tusk_Scene.prototype,{
	loadAssets: function() {
		var _g = this;
		var def = new promhx_Deferred();
		var prom = def.promise();
		((function($this) {
			var $r;
			var varargf = function(f) {
				var ret = new promhx_Promise();
				var arr = [tusk_defaults_Primitives.loadQuad(),tusk_defaults_Materials.loadParticlesUntextured(),tusk_defaults_Materials.loadUnlitTextured(),tusk_Tusk.assets.loadTexture("assets/sprites/bottlerocket.png"),tusk_Tusk.assets.loadTexture("assets/tilemaps/bottlerocketbackground.png"),tusk_Tusk.assets.loadText("assets/tilemaps/bottlerocketbackground.json")];
				var p = promhx_Promise.whenAll(arr);
				p._update.push({ async : ret, linkf : function(x) {
					ret.handleResolve(f(arr[0]._val,arr[1]._val,arr[2]._val,arr[3]._val,arr[4]._val,arr[5]._val));
				}});
				return ret;
			};
			$r = { then : varargf};
			return $r;
		}(this))).then(function(quad,particlesMaterial,unlitTextured,spriteSheet,backgroundSheet,backgroundJSON) {
			_g.quad = quad;
			_g.particlesMaterial = particlesMaterial;
			_g.spriteMaterial = unlitTextured.clone("br_spriteMaterial");
			_g.spriteMaterial.textures = [];
			_g.spriteMaterial.textures.push(spriteSheet);
			_g.backgroundMaterial = unlitTextured.clone("br_bgMaterial");
			_g.backgroundMaterial.textures = [];
			_g.backgroundMaterial.textures.push(backgroundSheet);
			_g.backgroundTileMap = tusk_modules_tiled_TileMap.fromJSON(backgroundJSON.text);
			tusk_modules_tiled_TileMap.buildMesh(_g.backgroundTileMap,"tilemap.bottlerocket").then(function(mesh) {
				_g.backgroundMesh = mesh;
				def.resolve(_g);
			});
		}).catchError(function(err) {
			tusk_debug_Log.log(err,tusk_debug_LogFunctions.Error,{ fileName : "BottleRocket.hx", lineNumber : 70, className : "minigames.BottleRocket", methodName : "loadAssets"});
			def.handleError("Failed to load assets!");
		});
		return prom;
	}
	,onLoad: function(event) {
		var _g = this;
		if(event.scene != this) return;
		tusk_debug_Log.log("Loading bottle rocket scene..",tusk_debug_LogFunctions.Info,{ fileName : "BottleRocket.hx", lineNumber : 79, className : "minigames.BottleRocket", methodName : "onLoad"});
		var loadingScreen = new LoadingScreen("Bottle Rocket Blast");
		tusk_Tusk.pushScene(loadingScreen);
		((function($this) {
			var $r;
			var varargf = function(f) {
				var ret = new promhx_Promise();
				var arr = [loadingScreen.sceneDone.promise(),_g.loadAssets()];
				var p = promhx_Promise.whenAll(arr);
				p._update.push({ async : ret, linkf : function(x) {
					ret.handleResolve(f(arr[0]._val,arr[1]._val));
				}});
				return ret;
			};
			$r = { then : varargf};
			return $r;
		}(this))).then(function(_,_1) {
			tusk_Tusk.removeScene(loadingScreen);
			tusk_debug_Log.log("Minigame started!",tusk_debug_LogFunctions.Info,{ fileName : "BottleRocket.hx", lineNumber : 86, className : "minigames.BottleRocket", methodName : "onLoad"});
		});
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
	}
	,__class__: minigames_BottleRocket
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
promhx_base_AsyncBase.allResolved = function($as) {
	var $it0 = $iterator($as)();
	while( $it0.hasNext() ) {
		var a = $it0.next();
		if(!a._resolved) return false;
	}
	return true;
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
	,errorThen: function(f) {
		this._errorMap = f;
		return this;
	}
	,isResolved: function() {
		return this._resolved;
	}
	,isErrored: function() {
		return this._errored;
	}
	,isErrorHandled: function() {
		return this._error.length > 0;
	}
	,isErrorPending: function() {
		return this._errorPending;
	}
	,isFulfilled: function() {
		return this._fulfilled;
	}
	,isPending: function() {
		return this._pending;
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
	,then: function(f) {
		var ret = new promhx_base_AsyncBase();
		promhx_base_AsyncBase.link(this,ret,f);
		return ret;
	}
	,unlink: function(to) {
		var _g = this;
		promhx_base_EventLoop.queue.add(function() {
			_g._update = _g._update.filter(function(x) {
				return x.async != to;
			});
		});
		promhx_base_EventLoop.continueOnNextLoop();
	}
	,isLinked: function(to) {
		var updated = false;
		var _g = 0;
		var _g1 = this._update;
		while(_g < _g1.length) {
			var u = _g1[_g];
			++_g;
			if(u.async == to) return true;
		}
		return updated;
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
	,stream: function() {
		return new promhx_Stream(this);
	}
	,publicStream: function() {
		return new promhx_PublicStream(this);
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
promhx_Promise.promise = function(_val) {
	var ret = new promhx_Promise();
	ret.handleResolve(_val);
	return ret;
};
promhx_Promise.__super__ = promhx_base_AsyncBase;
promhx_Promise.prototype = $extend(promhx_base_AsyncBase.prototype,{
	isRejected: function() {
		return this._rejected;
	}
	,reject: function(e) {
		this._rejected = true;
		this.handleError(e);
	}
	,handleResolve: function(val) {
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
	,unlink: function(to) {
		var _g = this;
		promhx_base_EventLoop.queue.add(function() {
			if(!_g._fulfilled) {
				var msg = "Downstream Promise is not fullfilled";
				_g.handleError(promhx_error_PromiseError.DownstreamNotFullfilled(msg));
			} else _g._update = _g._update.filter(function(x) {
				return x.async != to;
			});
		});
		promhx_base_EventLoop.continueOnNextLoop();
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
	,errorPipe: function(f) {
		var ret = new promhx_Promise();
		this.catchError(function(e) {
			var piped = f(e);
			piped.then($bind(ret,ret._resolve));
		});
		this.then($bind(ret,ret._resolve));
		return ret;
	}
	,__class__: promhx_Promise
});
var promhx_Stream = $hx_exports.promhx.Stream = function(d) {
	promhx_base_AsyncBase.call(this,d);
	this._end_deferred = new promhx_Deferred();
	this._end_promise = this._end_deferred.promise();
};
$hxClasses["promhx.Stream"] = promhx_Stream;
promhx_Stream.__name__ = ["promhx","Stream"];
promhx_Stream.foreach = function(itb) {
	var s = new promhx_Stream();
	var $it0 = $iterator(itb)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		s.handleResolve(i);
	}
	s.end();
	return s;
};
promhx_Stream.wheneverAll = function(itb) {
	var ret = new promhx_Stream();
	promhx_base_AsyncBase.linkAll(itb,ret);
	return ret;
};
promhx_Stream.concatAll = function(itb) {
	var ret = new promhx_Stream();
	var $it0 = $iterator(itb)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		ret.concat(i);
	}
	return ret;
};
promhx_Stream.mergeAll = function(itb) {
	var ret = new promhx_Stream();
	var $it0 = $iterator(itb)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		ret.merge(i);
	}
	return ret;
};
promhx_Stream.stream = function(_val) {
	var ret = new promhx_Stream();
	ret.handleResolve(_val);
	return ret;
};
promhx_Stream.__super__ = promhx_base_AsyncBase;
promhx_Stream.prototype = $extend(promhx_base_AsyncBase.prototype,{
	then: function(f) {
		var ret = new promhx_Stream();
		promhx_base_AsyncBase.link(this,ret,f);
		this._end_promise.then(function(x) {
			ret.end();
		});
		return ret;
	}
	,detachStream: function(str) {
		var filtered = [];
		var removed = false;
		var _g = 0;
		var _g1 = this._update;
		while(_g < _g1.length) {
			var u = _g1[_g];
			++_g;
			if(u.async == str) removed = true; else filtered.push(u);
		}
		this._update = filtered;
		return removed;
	}
	,first: function() {
		var s = new promhx_Promise();
		this.then(function(x) {
			if(!s._resolved) s.handleResolve(x);
		});
		return s;
	}
	,handleResolve: function(val) {
		if(!this._end && !this._pause) this._resolve(val);
	}
	,pause: function(set) {
		if(set == null) set = !this._pause;
		this._pause = set;
	}
	,pipe: function(f) {
		var ret = new promhx_Stream();
		promhx_base_AsyncBase.pipeLink(this,ret,f);
		this._end_promise.then(function(x) {
			ret.end();
		});
		return ret;
	}
	,errorPipe: function(f) {
		var ret = new promhx_Stream();
		this.catchError(function(e) {
			var piped = f(e);
			piped.then($bind(ret,ret._resolve));
			piped._end_promise.then(($_=ret._end_promise,$bind($_,$_._resolve)));
		});
		this.then($bind(ret,ret._resolve));
		this._end_promise.then(function(x) {
			ret.end();
		});
		return ret;
	}
	,handleEnd: function() {
		if(this._pending) {
			promhx_base_EventLoop.queue.add($bind(this,this.handleEnd));
			promhx_base_EventLoop.continueOnNextLoop();
		} else if(this._end_promise._resolved) return; else {
			this._end = true;
			var o;
			if(this._resolved) o = haxe_ds_Option.Some(this._val); else o = haxe_ds_Option.None;
			this._end_promise.handleResolve(o);
			this._update = [];
			this._error = [];
		}
	}
	,end: function() {
		promhx_base_EventLoop.queue.add($bind(this,this.handleEnd));
		promhx_base_EventLoop.continueOnNextLoop();
		return this;
	}
	,endThen: function(f) {
		return this._end_promise.then(f);
	}
	,filter: function(f) {
		var ret = new promhx_Stream();
		this._update.push({ async : ret, linkf : function(x) {
			if(f(x)) ret.handleResolve(x);
		}});
		promhx_base_AsyncBase.immediateLinkUpdate(this,ret,function(x1) {
			return x1;
		});
		return ret;
	}
	,concat: function(s) {
		var ret = new promhx_Stream();
		this._update.push({ async : ret, linkf : $bind(ret,ret.handleResolve)});
		promhx_base_AsyncBase.immediateLinkUpdate(this,ret,function(x) {
			return x;
		});
		this._end_promise.then(function(_) {
			s.pipe(function(x1) {
				ret.handleResolve(x1);
				return ret;
			});
			s._end_promise.then(function(_1) {
				ret.end();
			});
		});
		return ret;
	}
	,merge: function(s) {
		var ret = new promhx_Stream();
		this._update.push({ async : ret, linkf : $bind(ret,ret.handleResolve)});
		s._update.push({ async : ret, linkf : $bind(ret,ret.handleResolve)});
		promhx_base_AsyncBase.immediateLinkUpdate(this,ret,function(x) {
			return x;
		});
		promhx_base_AsyncBase.immediateLinkUpdate(s,ret,function(x1) {
			return x1;
		});
		return ret;
	}
	,__class__: promhx_Stream
});
var promhx_PublicStream = $hx_exports.promhx.PublicStream = function(def) {
	promhx_Stream.call(this,def);
};
$hxClasses["promhx.PublicStream"] = promhx_PublicStream;
promhx_PublicStream.__name__ = ["promhx","PublicStream"];
promhx_PublicStream.publicstream = function(val) {
	var ps = new promhx_PublicStream();
	ps.handleResolve(val);
	return ps;
};
promhx_PublicStream.__super__ = promhx_Stream;
promhx_PublicStream.prototype = $extend(promhx_Stream.prototype,{
	resolve: function(val) {
		this.handleResolve(val);
	}
	,throwError: function(e) {
		this.handleError(e);
	}
	,update: function(val) {
		this.handleResolve(val);
	}
	,__class__: promhx_PublicStream
});
var promhx_base_EventLoop = function() { };
$hxClasses["promhx.base.EventLoop"] = promhx_base_EventLoop;
promhx_base_EventLoop.__name__ = ["promhx","base","EventLoop"];
promhx_base_EventLoop.enqueue = function(eqf) {
	promhx_base_EventLoop.queue.add(eqf);
	promhx_base_EventLoop.continueOnNextLoop();
};
promhx_base_EventLoop.set_nextLoop = function(f) {
	if(promhx_base_EventLoop.nextLoop != null) throw new js__$Boot_HaxeError("nextLoop has already been set"); else promhx_base_EventLoop.nextLoop = f;
	return promhx_base_EventLoop.nextLoop;
};
promhx_base_EventLoop.queueEmpty = function() {
	return promhx_base_EventLoop.queue.isEmpty();
};
promhx_base_EventLoop.finish = function(max_iterations) {
	if(max_iterations == null) max_iterations = 1000;
	var fn = null;
	while(max_iterations-- > 0 && (fn = promhx_base_EventLoop.queue.pop()) != null) fn();
	return promhx_base_EventLoop.queue.isEmpty();
};
promhx_base_EventLoop.clear = function() {
	promhx_base_EventLoop.queue = new List();
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
	this.debug = true;
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
snow_Snow.defer = function(func) {
	if(func != null) snow_Snow.defer_queue.push(func);
};
snow_Snow.get_timestamp = function() {
	return snow_Snow.core.timestamp();
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
			haxe_Log.trace("     i / snow / " + "Goodbye.",{ fileName : "Snow.hx", lineNumber : 351, className : "snow.Snow", methodName : "on_event"});
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
	,set_freeze: function(_freeze) {
		this.freeze = _freeze;
		if(_freeze) this.audio.suspend(); else this.audio.resume();
		return this.freeze;
	}
	,get_time: function() {
		return snow_Snow.core.timestamp();
	}
	,get_uniqueid: function() {
		return this.make_uniqueid();
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
	,typename: function(t) {
		return Type.getClassName(Type.getClass(t));
	}
	,__class__: snow_Snow
};
var snow_api__$Debug_LogError = $hxClasses["snow.api._Debug.LogError"] = { __ename__ : ["snow","api","_Debug","LogError"], __constructs__ : ["RequireString"] };
snow_api__$Debug_LogError.RequireString = function(detail) { var $x = ["RequireString",0,detail]; $x.__enum__ = snow_api__$Debug_LogError; $x.toString = $estr; return $x; };
var snow_api_Debug = function() { };
$hxClasses["snow.api.Debug"] = snow_api_Debug;
snow_api_Debug.__name__ = ["snow","api","Debug"];
snow_api_Debug._get_spacing = function(_file) {
	var _spaces = "";
	var _trace_length = _file.length + 4;
	var _diff = snow_api_Debug._log_width - _trace_length;
	if(_diff > 0) {
		var _g = 0;
		while(_g < _diff) {
			var i = _g++;
			_spaces += " ";
		}
	}
	return _spaces;
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
snow_api_Promise.all = function(list) {
	var _g = 0;
	while(_g < list.length) {
		var item = list[_g];
		++_g;
		if(item == null) throw new js__$Boot_HaxeError("Promise.all handed an array with null items within it");
	}
	return new snow_api_Promise(function(ok,no) {
		var current = 0;
		var total = list.length;
		var fulfill_result = [];
		var reject_result = null;
		var all_state = 0;
		var single_ok = function(index,val) {
			if(all_state != 0) return;
			current++;
			fulfill_result[index] = val;
			if(total == current) {
				all_state = 1;
				ok(fulfill_result);
			}
		};
		var single_err = function(val1) {
			if(all_state != 0) return;
			all_state = 2;
			reject_result = val1;
			no(reject_result);
		};
		var index1 = 0;
		var _g1 = 0;
		while(_g1 < list.length) {
			var promise = list[_g1];
			++_g1;
			promise.then((function(f,a1) {
				return function(a2) {
					f(a1,a2);
				};
			})(single_ok,index1)).error(single_err);
			index1++;
		}
	});
};
snow_api_Promise.race = function(list) {
	return new snow_api_Promise(function(ok,no) {
		var settled = false;
		var single_ok = function(val) {
			if(settled) return;
			settled = true;
			ok(val);
		};
		var single_err = function(val1) {
			if(settled) return;
			settled = true;
			no(val1);
		};
		var _g = 0;
		while(_g < list.length) {
			var promise = list[_g];
			++_g;
			promise.then(single_ok).error(single_err);
		}
	});
};
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
	,toString: function() {
		return "Promise { state:" + this.state_string() + ", result:" + Std.string(this.result) + " }";
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
	,new_linked_resolve: function() {
		var _g = this;
		return new snow_api_Promise(function(f,r) {
			_g.add_settle(function(val) {
				f(val);
			});
		});
	}
	,new_linked_reject: function() {
		var _g = this;
		return new snow_api_Promise(function(f,r) {
			_g.add_settle(function(val) {
				r(val);
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
	,new_linked_reject_empty: function() {
		var _g = this;
		return new snow_api_Promise(function(f,r) {
			_g.add_settle(function(_) {
				r();
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
	,onexception: function(err) {
		var _g = this;
		this.add_settle(function(_) {
			if(!_g.was_caught) {
				if(_g.state == 2) {
					throw new js__$Boot_HaxeError(snow_api_PromiseError.UnhandledPromiseRejection(_g.toString()));
					return;
				}
			}
		});
		if(this.state == 0) this.onreject(err);
	}
	,state_string: function() {
		var _g = this.state;
		switch(_g) {
		case 0:
			return "pending";
		case 1:
			return "fulfilled";
		case 2:
			return "rejected";
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
var snow_api_PromiseError = $hxClasses["snow.api.PromiseError"] = { __ename__ : ["snow","api","PromiseError"], __constructs__ : ["UnhandledPromiseRejection"] };
snow_api_PromiseError.UnhandledPromiseRejection = function(err) { var $x = ["UnhandledPromiseRejection",0,err]; $x.__enum__ = snow_api_PromiseError; $x.toString = $estr; return $x; };
var snow_api_Timer = function(_time) {
	this.time = _time;
	snow_api_Timer.running_timers.push(this);
	this.fire_at = snow_Snow.core.timestamp() + this.time;
	this.running = true;
};
$hxClasses["snow.api.Timer"] = snow_api_Timer;
snow_api_Timer.__name__ = ["snow","api","Timer"];
snow_api_Timer.measure = function(f,pos) {
	var t0 = snow_Snow.core.timestamp();
	var r = f();
	haxe_Log.trace(snow_Snow.core.timestamp() - t0 + "s",pos);
	return r;
};
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
snow_api_Timer.delay = function(_time,_f) {
	var t = new snow_api_Timer(_time);
	t.run = function() {
		t.stop();
		_f();
	};
	return t;
};
snow_api_Timer.prototype = {
	run: function() {
	}
	,stop: function() {
		if(this.running) {
			this.running = false;
			HxOverrides.remove(snow_api_Timer.running_timers,this);
		}
	}
	,__class__: snow_api_Timer
};
var snow_api_buffers__$Float32Array_Float32Array_$Impl_$ = {};
$hxClasses["snow.api.buffers._Float32Array.Float32Array_Impl_"] = snow_api_buffers__$Float32Array_Float32Array_$Impl_$;
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.__name__ = ["snow","api","buffers","_Float32Array","Float32Array_Impl_"];
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) byteOffset = 0;
	if(byteOffset == null) return new Float32Array(bytes.b.bufferValue);
	if(len == null) return new Float32Array(bytes.b.bufferValue,byteOffset);
	return new Float32Array(bytes.b.bufferValue,byteOffset,len);
};
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.toString = function(this1) {
	return "Float32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
};
var snow_api_buffers__$Int32Array_Int32Array_$Impl_$ = {};
$hxClasses["snow.api.buffers._Int32Array.Int32Array_Impl_"] = snow_api_buffers__$Int32Array_Int32Array_$Impl_$;
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.__name__ = ["snow","api","buffers","_Int32Array","Int32Array_Impl_"];
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) byteOffset = 0;
	if(byteOffset == null) return new Int32Array(bytes.b.bufferValue);
	if(len == null) return new Int32Array(bytes.b.bufferValue,byteOffset);
	return new Int32Array(bytes.b.bufferValue,byteOffset,len);
};
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.toString = function(this1) {
	return "Int32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
};
var snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$ = {};
$hxClasses["snow.api.buffers._Uint8Array.Uint8Array_Impl_"] = snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$;
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.__name__ = ["snow","api","buffers","_Uint8Array","Uint8Array_Impl_"];
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) return new Uint8Array(bytes.b.bufferValue);
	if(len == null) return new Uint8Array(bytes.b.bufferValue,byteOffset);
	return new Uint8Array(bytes.b.bufferValue,byteOffset,len);
};
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.toString = function(this1) {
	return "Uint8Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
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
			haxe_Log.trace("     i / core / " + ("warning : requestAnimationFrame not found, falling back to render_rate! render_rate:" + this.app.host.render_rate),{ fileName : "Core.hx", lineNumber : 80, className : "snow.core.web.Core", methodName : "request_update"});
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
snow_modules_interfaces_Assets.prototype = {
	__class__: snow_modules_interfaces_Assets
};
var snow_core_web_assets_Assets = function(_system) {
	this.system = _system;
};
$hxClasses["snow.core.web.assets.Assets"] = snow_core_web_assets_Assets;
snow_core_web_assets_Assets.__name__ = ["snow","core","web","assets","Assets"];
snow_core_web_assets_Assets.__interfaces__ = [snow_modules_interfaces_Assets];
snow_core_web_assets_Assets.prototype = {
	init: function() {
	}
	,update: function() {
	}
	,destroy: function() {
	}
	,on_event: function(event) {
	}
	,image_load_info: function(_id,_components) {
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
	,image_info_from_pixels: function(_id,_width,_height,_pixels) {
		var width_pot = this.nearest_power_of_two(_width);
		var height_pot = this.nearest_power_of_two(_height);
		var image_bytes = this.POT_bytes_from_pixels(_width,_height,width_pot,height_pot,_pixels);
		var info = { id : _id, bpp : 4, width : _width, height : _height, width_actual : width_pot, height_actual : height_pot, bpp_source : 4, pixels : image_bytes};
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
	,POT_bytes_from_pixels: function(_width,_height,_width_pot,_height_pot,_source) {
		var tmp_canvas;
		var _this = window.document;
		tmp_canvas = _this.createElement("canvas");
		tmp_canvas.width = _width_pot;
		tmp_canvas.height = _height_pot;
		var tmp_context = tmp_canvas.getContext("2d",null);
		tmp_context.clearRect(0,0,tmp_canvas.width,tmp_canvas.height);
		var image_bytes = null;
		var _pixels = new Uint8ClampedArray(_source.buffer);
		var _imgdata = tmp_context.createImageData(_width,_height);
		_imgdata.data.set(_pixels);
		try {
			tmp_context.putImageData(_imgdata,0,0);
			image_bytes = tmp_context.getImageData(0,0,tmp_canvas.width,tmp_canvas.height);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			var tips = "- textures served from file:/// throw security errors\n";
			tips += "- textures served over http:// work for cross origin byte requests";
			haxe_Log.trace("   i / assets / " + tips,{ fileName : "Assets.hx", lineNumber : 199, className : "snow.core.web.assets.Assets", methodName : "POT_bytes_from_pixels"});
			throw new js__$Boot_HaxeError(e);
		}
		tmp_canvas = null;
		tmp_context = null;
		_imgdata = null;
		var view = image_bytes.data;
		var this1;
		if(view != null) this1 = new Uint8Array(view); else this1 = null;
		return this1;
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
			haxe_Log.trace("   i / assets / " + tips,{ fileName : "Assets.hx", lineNumber : 235, className : "snow.core.web.assets.Assets", methodName : "POT_bytes_from_element"});
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
snow_modules_interfaces_Input.prototype = {
	__class__: snow_modules_interfaces_Input
};
var snow_system_input_Scancodes = function() { };
$hxClasses["snow.system.input.Scancodes"] = snow_system_input_Scancodes;
snow_system_input_Scancodes.__name__ = ["snow","system","input","Scancodes"];
snow_system_input_Scancodes.$name = function(scancode) {
	var res = null;
	if(scancode >= 0 && scancode < snow_system_input_Scancodes.scancode_names.length) res = snow_system_input_Scancodes.scancode_names[scancode];
	if(res != null) return res; else return "";
};
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
snow_system_input_Keycodes.$name = function(keycode) {
	if((keycode & snow_system_input_Scancodes.MASK) != 0) return snow_system_input_Scancodes.$name(keycode & ~snow_system_input_Scancodes.MASK);
	switch(keycode) {
	case 13:
		return snow_system_input_Scancodes.$name(snow_system_input_Scancodes.enter);
	case 27:
		return snow_system_input_Scancodes.$name(snow_system_input_Scancodes.escape);
	case 8:
		return snow_system_input_Scancodes.$name(snow_system_input_Scancodes.backspace);
	case 9:
		return snow_system_input_Scancodes.$name(snow_system_input_Scancodes.tab);
	case 32:
		return snow_system_input_Scancodes.$name(snow_system_input_Scancodes.space);
	case 127:
		return snow_system_input_Scancodes.$name(snow_system_input_Scancodes["delete"]);
	default:
		var decoder = new haxe_Utf8();
		decoder.__b += String.fromCharCode(keycode);
		return decoder.__b;
	}
};
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
		haxe_Log.trace("    i / input / " + ("Gamepads supported: " + Std.string(this.gamepads_supported)),{ fileName : "Input.hx", lineNumber : 51, className : "snow.core.web.input.Input", methodName : "init"});
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
	,unlisten: function(window) {
	}
	,on_event: function(_event) {
	}
	,text_input_start: function() {
	}
	,text_input_stop: function() {
	}
	,text_input_rect: function(x,y,w,h) {
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
		haxe_Log.trace("    i / input / " + "Gamepads are not supported in this browser :(",{ fileName : "Input.hx", lineNumber : 308, className : "snow.core.web.input.Input", methodName : "fail_gamepads"});
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
snow_modules_interfaces_IO.prototype = {
	__class__: snow_modules_interfaces_IO
};
var snow_core_web_io_IO = function(_system) {
	this.system = _system;
};
$hxClasses["snow.core.web.io.IO"] = snow_core_web_io_IO;
snow_core_web_io_IO.__name__ = ["snow","core","web","io","IO"];
snow_core_web_io_IO.__interfaces__ = [snow_modules_interfaces_IO];
snow_core_web_io_IO.prototype = {
	url_open: function(_url) {
		if(_url != null && _url.length > 0) window.open(_url,"_blank");
	}
	,data_load: function(_path,_options) {
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
	,data_save: function(_path,_data,_options) {
		return false;
	}
	,string_save_path: function(_slot) {
		if(_slot == null) _slot = 0;
		var _pref_path = "<localstorage>";
		var _slot_path = this.string_slot_id(_slot);
		var _path = haxe_io_Path.join([_pref_path,_slot_path]);
		return haxe_io_Path.normalize(_path);
	}
	,init: function() {
	}
	,update: function() {
	}
	,destroy: function() {
	}
	,on_event: function(_event) {
	}
	,string_slot_id: function(_slot) {
		if(_slot == null) _slot = 0;
		var _parts = this.system.app.snow_config.app_package.split(".");
		var _appname = _parts.pop();
		var _org = _parts.join(".");
		return "" + _org + "/" + _appname + "/" + this.system.string_save_prefix + "." + _slot;
	}
	,string_slot_destroy: function(_slot) {
		if(_slot == null) _slot = 0;
		var storage = window.localStorage;
		if(storage == null) {
			haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 115, className : "snow.core.web.io.IO", methodName : "string_slot_destroy"});
			return false;
		}
		var _id = this.string_slot_id(_slot);
		storage.removeItem(_id);
		return false;
	}
	,string_slot_save: function(_slot,_contents) {
		if(_slot == null) _slot = 0;
		var storage = window.localStorage;
		if(storage == null) {
			haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 132, className : "snow.core.web.io.IO", methodName : "string_slot_save"});
			return false;
		}
		var _id = this.string_slot_id(_slot);
		storage.setItem(_id,_contents);
		return true;
	}
	,string_slot_load: function(_slot) {
		if(_slot == null) _slot = 0;
		var storage = window.localStorage;
		if(storage == null) {
			haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 150, className : "snow.core.web.io.IO", methodName : "string_slot_load"});
			return null;
		}
		var _id = this.string_slot_id(_slot);
		return storage.getItem(_id);
	}
	,string_slot_encode: function(_string) {
		return window.btoa(_string);
	}
	,string_slot_decode: function(_string) {
		return window.atob(_string);
	}
	,__class__: snow_core_web_io_IO
};
var snow_modules_interfaces_Windowing = function() { };
$hxClasses["snow.modules.interfaces.Windowing"] = snow_modules_interfaces_Windowing;
snow_modules_interfaces_Windowing.__name__ = ["snow","modules","interfaces","Windowing"];
snow_modules_interfaces_Windowing.prototype = {
	__class__: snow_modules_interfaces_Windowing
};
var snow_core_web_window_Windowing = function(_system) {
	this._hidden_event_name = "";
	this._hidden_name = "";
	this._cursor_visible = true;
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
	,on_event: function(event) {
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
	,destroy_window: function(_window) {
		window.document.body.removeChild(_window.handle);
	}
	,close: function(_window) {
		_window.handle.style.display = "none";
	}
	,show: function(_window) {
		_window.handle.style.display = null;
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
	,simple_message: function(_window,message,title) {
		if(title == null) title = "";
		window.alert(message);
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
	,set_title: function(_window,title) {
		window.document.title = title;
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
	,fullscreen: function(_window,fullscreen) {
		this.internal_fullscreen(_window,fullscreen);
	}
	,bordered: function(_window,bordered) {
	}
	,grab: function(_window,grabbed) {
		if(grabbed) {
			if(($_=_window.handle,$bind($_,$_.requestPointerLock)) == null) {
				if(_window.handle.webkitRequestPointerLock == null) {
					if(_window.handle.mozRequestPointerLock == null) {
					} else _window.handle.mozRequestPointerLock();
				} else _window.handle.webkitRequestPointerLock();
			} else _window.handle.requestPointerLock();
		} else {
		}
	}
	,set_cursor_position: function(_window,x,y) {
	}
	,system_enable_cursor: function(enable) {
		if(this.cursor_style == null) {
			var _this = window.document;
			this.cursor_style = _this.createElement("style");
			this.cursor_style.innerHTML = "* { cursor:none; }";
		}
		if(enable && !this._cursor_visible) {
			this._cursor_visible = true;
			window.document.body.removeChild(this.cursor_style);
		} else if(!enable && this._cursor_visible) {
			this._cursor_visible = false;
			window.document.body.appendChild(this.cursor_style);
		}
	}
	,system_lock_cursor: function(enable) {
		if(this.system.app.window != null) this.grab(this.system.app.window,enable);
	}
	,system_enable_vsync: function(enable) {
		return -1;
	}
	,display_count: function() {
		return 1;
	}
	,display_mode_count: function(display) {
		return 1;
	}
	,display_native_mode: function(display) {
		return { format : 0, refresh_rate : 0, width : window.screen.width, height : window.screen.height};
	}
	,display_current_mode: function(display) {
		return this.display_native_mode(display);
	}
	,display_mode: function(display,mode_index) {
		return this.display_native_mode(display);
	}
	,display_bounds: function(display) {
		return { x : 0, y : 0, width : window.innerWidth, height : window.innerHeight};
	}
	,display_name: function(display) {
		return window.navigator.vendor;
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
	,unlisten: function(_window) {
		_window.handle.removeEventListener("mouseleave",$bind(this,this.on_internal_leave));
		_window.handle.removeEventListener("mouseenter",$bind(this,this.on_internal_enter));
		HxOverrides.remove(this.fs_windows,_window);
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
snow_modules_interfaces_Audio.prototype = {
	__class__: snow_modules_interfaces_Audio
};
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
	,create_sound_from_bytes: function(_name,_bytes,_format) {
		var _g = this;
		var _ext;
		switch(_format) {
		case 1:
			_ext = "ogg";
			break;
		case 2:
			_ext = "wav";
			break;
		case 3:
			throw new js__$Boot_HaxeError(snow_types_Error.error("pcm audio format unsupported atm"));
			break;
		case 0:
			throw new js__$Boot_HaxeError(snow_types_Error.error("unknown audio format for create_sound_from_bytes " + _name));
			break;
		}
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
		var src = "data:audio/" + _ext + ";base64," + b64;
		var info = this.info_from_id("bytes;" + _name,_format);
		var sound = new snow_modules_howlerjs_sound_Sound(this.system,_name,false);
		info.handle = new window.Howl({ urls : [src], onend : function() {
			_g.system.app.audio.module._on_end(info.handle);
		}, onloaderror : function() {
			throw new js__$Boot_HaxeError(snow_types_Error.error("failed to create sound " + _name + " from bytes"));
		}, onload : function() {
			info.handle = this;
			sound.set_info(info);
			var key = info.handle;
			_g.handles.set(key,sound);
		}});
		return sound;
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
	this.position_bytes = 0;
	this.length_bytes = 0;
	this.duration = 0.0;
	this.position = 0.0;
	this.looping = false;
	this.pan = 0.0;
	this.volume = 1.0;
	this.pitch = 1.0;
	this.loaded = false;
	this.paused = false;
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
		haxe_Log.trace("    i / sound / " + "Sound:play called in root Sound module. Nothing will happen.",{ fileName : "Sound.hx", lineNumber : 102, className : "snow.system.audio.Sound", methodName : "play"});
	}
	,loop: function() {
		haxe_Log.trace("    i / sound / " + "Sound:loop called in root Sound module. Nothing will happen.",{ fileName : "Sound.hx", lineNumber : 104, className : "snow.system.audio.Sound", methodName : "loop"});
	}
	,stop: function() {
		haxe_Log.trace("    i / sound / " + "Sound:stop called in root Sound module. Nothing will happen.",{ fileName : "Sound.hx", lineNumber : 106, className : "snow.system.audio.Sound", methodName : "stop"});
	}
	,pause: function() {
		haxe_Log.trace("    i / sound / " + "Sound:pause called in root Sound module. Nothing will happen.",{ fileName : "Sound.hx", lineNumber : 108, className : "snow.system.audio.Sound", methodName : "pause"});
	}
	,destroy: function() {
		haxe_Log.trace("    i / sound / " + "Sound:destroy called in root Sound module. Nothing will happen.",{ fileName : "Sound.hx", lineNumber : 110, className : "snow.system.audio.Sound", methodName : "destroy"});
	}
	,internal_update: function() {
	}
	,internal_play: function() {
	}
	,internal_loop: function() {
	}
	,internal_stop: function() {
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
	,get_paused: function() {
		return this.paused;
	}
	,get_loaded: function() {
		return this.loaded;
	}
	,get_info: function() {
		return this.info;
	}
	,set_info: function(_info) {
		return this.info = _info;
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
	,get_position: function() {
		return this.position;
	}
	,get_position_bytes: function() {
		return this.position_bytes;
	}
	,get_length_bytes: function() {
		return this.length_bytes;
	}
	,get_duration: function() {
		return 0;
	}
	,set_playing: function(_playing) {
		return this.playing = _playing;
	}
	,set_paused: function(_paused) {
		return this.paused = _paused;
	}
	,set_loaded: function(_loaded) {
		return this.loaded = _loaded;
	}
	,set_pan: function(_pan) {
		return this.pan = _pan;
	}
	,set_pitch: function(_pitch) {
		return this.pitch = _pitch;
	}
	,set_volume: function(_volume) {
		return this.volume = _volume;
	}
	,set_position: function(_position) {
		return this.position = _position;
	}
	,set_looping: function(_looping) {
		return this.looping = _looping;
	}
	,set_position_bytes: function(_position_bytes) {
		return this.position_bytes = _position_bytes;
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
			haxe_Log.trace("    i / sound / " + "not creating sound, info was null",{ fileName : "Sound.hx", lineNumber : 29, className : "snow.modules.howlerjs.sound.Sound", methodName : "set_info"});
			return this.get_info();
		}
		this.info = _info;
		this.set_loaded(true);
		return this.get_info();
	}
	,set_pan: function(_pan) {
		if(this.get_info() != null && this.get_info().handle != null) this.get_info().handle.pos3d(this.get_pan());
		return this.pan = _pan;
	}
	,set_volume: function(_volume) {
		if(this.get_info() != null && this.get_info().handle != null) this.get_info().handle.volume(_volume);
		return this.volume = _volume;
	}
	,set_pitch: function(_pitch) {
		if(this.get_info() != null && this.get_info().handle != null) this.get_info().handle.rate(_pitch);
		return this.pitch = _pitch;
	}
	,set_position: function(_position) {
		if(this.get_info() != null && this.get_info().handle != null) this.get_info().handle.pos(_position);
		return this.position = _position;
	}
	,get_position: function() {
		if(this.get_info() != null && this.get_info().handle != null) return this.get_info().handle.pos();
		return this.position;
	}
	,get_duration: function() {
		if(this.get_info() != null && this.get_info().handle != null) return this.get_info().handle._duration;
		return 0;
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
	,ensure_parameters: function() {
		if(this.get_info() != null && this.get_info().handle != null) {
			this.get_info().handle.rate(this.get_pitch());
			this.get_info().handle.volume(this.get_volume());
			this.get_info().handle.pos3d(this.get_pan());
		}
	}
	,__class__: snow_modules_howlerjs_sound_Sound
});
var snow_modules_opengl_web_GL = function() { };
$hxClasses["snow.modules.opengl.web.GL"] = snow_modules_opengl_web_GL;
snow_modules_opengl_web_GL.__name__ = ["snow","modules","opengl","web","GL"];
snow_modules_opengl_web_GL.versionString = function() {
	var ver = snow_modules_opengl_web_GL.current_context.getParameter(7938);
	var slver = snow_modules_opengl_web_GL.current_context.getParameter(35724);
	var ren = snow_modules_opengl_web_GL.current_context.getParameter(7937);
	var ven = snow_modules_opengl_web_GL.current_context.getParameter(7936);
	return "/ " + ver + " / " + slver + " / " + ren + " / " + ven + " /";
};
snow_modules_opengl_web_GL.activeTexture = function(texture) {
	snow_modules_opengl_web_GL.current_context.activeTexture(texture);
};
snow_modules_opengl_web_GL.attachShader = function(program,shader) {
	snow_modules_opengl_web_GL.current_context.attachShader(program,shader);
};
snow_modules_opengl_web_GL.bindAttribLocation = function(program,index,name) {
	snow_modules_opengl_web_GL.current_context.bindAttribLocation(program,index,name);
};
snow_modules_opengl_web_GL.bindBuffer = function(target,buffer) {
	snow_modules_opengl_web_GL.current_context.bindBuffer(target,buffer);
};
snow_modules_opengl_web_GL.bindFramebuffer = function(target,framebuffer) {
	snow_modules_opengl_web_GL.current_context.bindFramebuffer(target,framebuffer);
};
snow_modules_opengl_web_GL.bindRenderbuffer = function(target,renderbuffer) {
	snow_modules_opengl_web_GL.current_context.bindRenderbuffer(target,renderbuffer);
};
snow_modules_opengl_web_GL.bindTexture = function(target,texture) {
	snow_modules_opengl_web_GL.current_context.bindTexture(target,texture);
};
snow_modules_opengl_web_GL.blendColor = function(red,green,blue,alpha) {
	snow_modules_opengl_web_GL.current_context.blendColor(red,green,blue,alpha);
};
snow_modules_opengl_web_GL.blendEquation = function(mode) {
	snow_modules_opengl_web_GL.current_context.blendEquation(mode);
};
snow_modules_opengl_web_GL.blendEquationSeparate = function(modeRGB,modeAlpha) {
	snow_modules_opengl_web_GL.current_context.blendEquationSeparate(modeRGB,modeAlpha);
};
snow_modules_opengl_web_GL.blendFunc = function(sfactor,dfactor) {
	snow_modules_opengl_web_GL.current_context.blendFunc(sfactor,dfactor);
};
snow_modules_opengl_web_GL.blendFuncSeparate = function(srcRGB,dstRGB,srcAlpha,dstAlpha) {
	snow_modules_opengl_web_GL.current_context.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);
};
snow_modules_opengl_web_GL.bufferData = function(target,data,usage) {
	snow_modules_opengl_web_GL.current_context.bufferData(target,data,usage);
};
snow_modules_opengl_web_GL.bufferSubData = function(target,offset,data) {
	snow_modules_opengl_web_GL.current_context.bufferSubData(target,offset,data);
};
snow_modules_opengl_web_GL.checkFramebufferStatus = function(target) {
	return snow_modules_opengl_web_GL.current_context.checkFramebufferStatus(target);
};
snow_modules_opengl_web_GL.clear = function(mask) {
	snow_modules_opengl_web_GL.current_context.clear(mask);
};
snow_modules_opengl_web_GL.clearColor = function(red,green,blue,alpha) {
	snow_modules_opengl_web_GL.current_context.clearColor(red,green,blue,alpha);
};
snow_modules_opengl_web_GL.clearDepth = function(depth) {
	snow_modules_opengl_web_GL.current_context.clearDepth(depth);
};
snow_modules_opengl_web_GL.clearStencil = function(s) {
	snow_modules_opengl_web_GL.current_context.clearStencil(s);
};
snow_modules_opengl_web_GL.colorMask = function(red,green,blue,alpha) {
	snow_modules_opengl_web_GL.current_context.colorMask(red,green,blue,alpha);
};
snow_modules_opengl_web_GL.compileShader = function(shader) {
	snow_modules_opengl_web_GL.current_context.compileShader(shader);
};
snow_modules_opengl_web_GL.compressedTexImage2D = function(target,level,internalformat,width,height,border,data) {
	snow_modules_opengl_web_GL.current_context.compressedTexImage2D(target,level,internalformat,width,height,border,data);
};
snow_modules_opengl_web_GL.compressedTexSubImage2D = function(target,level,xoffset,yoffset,width,height,format,data) {
	snow_modules_opengl_web_GL.current_context.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,data);
};
snow_modules_opengl_web_GL.copyTexImage2D = function(target,level,internalformat,x,y,width,height,border) {
	snow_modules_opengl_web_GL.current_context.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
};
snow_modules_opengl_web_GL.copyTexSubImage2D = function(target,level,xoffset,yoffset,x,y,width,height) {
	snow_modules_opengl_web_GL.current_context.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
};
snow_modules_opengl_web_GL.createBuffer = function() {
	return snow_modules_opengl_web_GL.current_context.createBuffer();
};
snow_modules_opengl_web_GL.createFramebuffer = function() {
	return snow_modules_opengl_web_GL.current_context.createFramebuffer();
};
snow_modules_opengl_web_GL.createProgram = function() {
	return snow_modules_opengl_web_GL.current_context.createProgram();
};
snow_modules_opengl_web_GL.createRenderbuffer = function() {
	return snow_modules_opengl_web_GL.current_context.createRenderbuffer();
};
snow_modules_opengl_web_GL.createShader = function(type) {
	return snow_modules_opengl_web_GL.current_context.createShader(type);
};
snow_modules_opengl_web_GL.createTexture = function() {
	return snow_modules_opengl_web_GL.current_context.createTexture();
};
snow_modules_opengl_web_GL.cullFace = function(mode) {
	snow_modules_opengl_web_GL.current_context.cullFace(mode);
};
snow_modules_opengl_web_GL.deleteBuffer = function(buffer) {
	snow_modules_opengl_web_GL.current_context.deleteBuffer(buffer);
};
snow_modules_opengl_web_GL.deleteFramebuffer = function(framebuffer) {
	snow_modules_opengl_web_GL.current_context.deleteFramebuffer(framebuffer);
};
snow_modules_opengl_web_GL.deleteProgram = function(program) {
	snow_modules_opengl_web_GL.current_context.deleteProgram(program);
};
snow_modules_opengl_web_GL.deleteRenderbuffer = function(renderbuffer) {
	snow_modules_opengl_web_GL.current_context.deleteRenderbuffer(renderbuffer);
};
snow_modules_opengl_web_GL.deleteShader = function(shader) {
	snow_modules_opengl_web_GL.current_context.deleteShader(shader);
};
snow_modules_opengl_web_GL.deleteTexture = function(texture) {
	snow_modules_opengl_web_GL.current_context.deleteTexture(texture);
};
snow_modules_opengl_web_GL.depthFunc = function(func) {
	snow_modules_opengl_web_GL.current_context.depthFunc(func);
};
snow_modules_opengl_web_GL.depthMask = function(flag) {
	snow_modules_opengl_web_GL.current_context.depthMask(flag);
};
snow_modules_opengl_web_GL.depthRange = function(zNear,zFar) {
	snow_modules_opengl_web_GL.current_context.depthRange(zNear,zFar);
};
snow_modules_opengl_web_GL.detachShader = function(program,shader) {
	snow_modules_opengl_web_GL.current_context.detachShader(program,shader);
};
snow_modules_opengl_web_GL.disable = function(cap) {
	snow_modules_opengl_web_GL.current_context.disable(cap);
};
snow_modules_opengl_web_GL.disableVertexAttribArray = function(index) {
	snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(index);
};
snow_modules_opengl_web_GL.drawArrays = function(mode,first,count) {
	snow_modules_opengl_web_GL.current_context.drawArrays(mode,first,count);
};
snow_modules_opengl_web_GL.drawElements = function(mode,count,type,offset) {
	snow_modules_opengl_web_GL.current_context.drawElements(mode,count,type,offset);
};
snow_modules_opengl_web_GL.enable = function(cap) {
	snow_modules_opengl_web_GL.current_context.enable(cap);
};
snow_modules_opengl_web_GL.enableVertexAttribArray = function(index) {
	snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(index);
};
snow_modules_opengl_web_GL.finish = function() {
	snow_modules_opengl_web_GL.current_context.finish();
};
snow_modules_opengl_web_GL.flush = function() {
	snow_modules_opengl_web_GL.current_context.flush();
};
snow_modules_opengl_web_GL.framebufferRenderbuffer = function(target,attachment,renderbuffertarget,renderbuffer) {
	snow_modules_opengl_web_GL.current_context.framebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer);
};
snow_modules_opengl_web_GL.framebufferTexture2D = function(target,attachment,textarget,texture,level) {
	snow_modules_opengl_web_GL.current_context.framebufferTexture2D(target,attachment,textarget,texture,level);
};
snow_modules_opengl_web_GL.frontFace = function(mode) {
	snow_modules_opengl_web_GL.current_context.frontFace(mode);
};
snow_modules_opengl_web_GL.generateMipmap = function(target) {
	snow_modules_opengl_web_GL.current_context.generateMipmap(target);
};
snow_modules_opengl_web_GL.getActiveAttrib = function(program,index) {
	return snow_modules_opengl_web_GL.current_context.getActiveAttrib(program,index);
};
snow_modules_opengl_web_GL.getActiveUniform = function(program,index) {
	return snow_modules_opengl_web_GL.current_context.getActiveUniform(program,index);
};
snow_modules_opengl_web_GL.getAttachedShaders = function(program) {
	return snow_modules_opengl_web_GL.current_context.getAttachedShaders(program);
};
snow_modules_opengl_web_GL.getAttribLocation = function(program,name) {
	return snow_modules_opengl_web_GL.current_context.getAttribLocation(program,name);
};
snow_modules_opengl_web_GL.getBufferParameter = function(target,pname) {
	return snow_modules_opengl_web_GL.current_context.getBufferParameter(target,pname);
};
snow_modules_opengl_web_GL.getContextAttributes = function() {
	return snow_modules_opengl_web_GL.current_context.getContextAttributes();
};
snow_modules_opengl_web_GL.getError = function() {
	return snow_modules_opengl_web_GL.current_context.getError();
};
snow_modules_opengl_web_GL.getExtension = function(name) {
	return snow_modules_opengl_web_GL.current_context.getExtension(name);
};
snow_modules_opengl_web_GL.getFramebufferAttachmentParameter = function(target,attachment,pname) {
	return snow_modules_opengl_web_GL.current_context.getFramebufferAttachmentParameter(target,attachment,pname);
};
snow_modules_opengl_web_GL.getParameter = function(pname) {
	return snow_modules_opengl_web_GL.current_context.getParameter(pname);
};
snow_modules_opengl_web_GL.getProgramInfoLog = function(program) {
	return snow_modules_opengl_web_GL.current_context.getProgramInfoLog(program);
};
snow_modules_opengl_web_GL.getProgramParameter = function(program,pname) {
	return snow_modules_opengl_web_GL.current_context.getProgramParameter(program,pname);
};
snow_modules_opengl_web_GL.getRenderbufferParameter = function(target,pname) {
	return snow_modules_opengl_web_GL.current_context.getRenderbufferParameter(target,pname);
};
snow_modules_opengl_web_GL.getShaderInfoLog = function(shader) {
	return snow_modules_opengl_web_GL.current_context.getShaderInfoLog(shader);
};
snow_modules_opengl_web_GL.getShaderParameter = function(shader,pname) {
	return snow_modules_opengl_web_GL.current_context.getShaderParameter(shader,pname);
};
snow_modules_opengl_web_GL.getShaderPrecisionFormat = function(shadertype,precisiontype) {
	return snow_modules_opengl_web_GL.current_context.getShaderPrecisionFormat(shadertype,precisiontype);
};
snow_modules_opengl_web_GL.getShaderSource = function(shader) {
	return snow_modules_opengl_web_GL.current_context.getShaderSource(shader);
};
snow_modules_opengl_web_GL.getSupportedExtensions = function() {
	return snow_modules_opengl_web_GL.current_context.getSupportedExtensions();
};
snow_modules_opengl_web_GL.getTexParameter = function(target,pname) {
	return snow_modules_opengl_web_GL.current_context.getTexParameter(target,pname);
};
snow_modules_opengl_web_GL.getUniform = function(program,location) {
	return snow_modules_opengl_web_GL.current_context.getUniform(program,location);
};
snow_modules_opengl_web_GL.getUniformLocation = function(program,name) {
	return snow_modules_opengl_web_GL.current_context.getUniformLocation(program,name);
};
snow_modules_opengl_web_GL.getVertexAttrib = function(index,pname) {
	return snow_modules_opengl_web_GL.current_context.getVertexAttrib(index,pname);
};
snow_modules_opengl_web_GL.getVertexAttribOffset = function(index,pname) {
	return snow_modules_opengl_web_GL.current_context.getVertexAttribOffset(index,pname);
};
snow_modules_opengl_web_GL.hint = function(target,mode) {
	snow_modules_opengl_web_GL.current_context.hint(target,mode);
};
snow_modules_opengl_web_GL.isBuffer = function(buffer) {
	return snow_modules_opengl_web_GL.current_context.isBuffer(buffer);
};
snow_modules_opengl_web_GL.isEnabled = function(cap) {
	return snow_modules_opengl_web_GL.current_context.isEnabled(cap);
};
snow_modules_opengl_web_GL.isFramebuffer = function(framebuffer) {
	return snow_modules_opengl_web_GL.current_context.isFramebuffer(framebuffer);
};
snow_modules_opengl_web_GL.isProgram = function(program) {
	return snow_modules_opengl_web_GL.current_context.isProgram(program);
};
snow_modules_opengl_web_GL.isRenderbuffer = function(renderbuffer) {
	return snow_modules_opengl_web_GL.current_context.isRenderbuffer(renderbuffer);
};
snow_modules_opengl_web_GL.isShader = function(shader) {
	return snow_modules_opengl_web_GL.current_context.isShader(shader);
};
snow_modules_opengl_web_GL.isTexture = function(texture) {
	return snow_modules_opengl_web_GL.current_context.isTexture(texture);
};
snow_modules_opengl_web_GL.lineWidth = function(width) {
	snow_modules_opengl_web_GL.current_context.lineWidth(width);
};
snow_modules_opengl_web_GL.linkProgram = function(program) {
	snow_modules_opengl_web_GL.current_context.linkProgram(program);
};
snow_modules_opengl_web_GL.pixelStorei = function(pname,param) {
	snow_modules_opengl_web_GL.current_context.pixelStorei(pname,param);
};
snow_modules_opengl_web_GL.polygonOffset = function(factor,units) {
	snow_modules_opengl_web_GL.current_context.polygonOffset(factor,units);
};
snow_modules_opengl_web_GL.readPixels = function(x,y,width,height,format,type,data) {
	snow_modules_opengl_web_GL.current_context.readPixels(x,y,width,height,format,type,data);
};
snow_modules_opengl_web_GL.renderbufferStorage = function(target,internalformat,width,height) {
	snow_modules_opengl_web_GL.current_context.renderbufferStorage(target,internalformat,width,height);
};
snow_modules_opengl_web_GL.sampleCoverage = function(value,invert) {
	snow_modules_opengl_web_GL.current_context.sampleCoverage(value,invert);
};
snow_modules_opengl_web_GL.scissor = function(x,y,width,height) {
	snow_modules_opengl_web_GL.current_context.scissor(x,y,width,height);
};
snow_modules_opengl_web_GL.shaderSource = function(shader,source) {
	snow_modules_opengl_web_GL.current_context.shaderSource(shader,source);
};
snow_modules_opengl_web_GL.stencilFunc = function(func,ref,mask) {
	snow_modules_opengl_web_GL.current_context.stencilFunc(func,ref,mask);
};
snow_modules_opengl_web_GL.stencilFuncSeparate = function(face,func,ref,mask) {
	snow_modules_opengl_web_GL.current_context.stencilFuncSeparate(face,func,ref,mask);
};
snow_modules_opengl_web_GL.stencilMask = function(mask) {
	snow_modules_opengl_web_GL.current_context.stencilMask(mask);
};
snow_modules_opengl_web_GL.stencilMaskSeparate = function(face,mask) {
	snow_modules_opengl_web_GL.current_context.stencilMaskSeparate(face,mask);
};
snow_modules_opengl_web_GL.stencilOp = function(fail,zfail,zpass) {
	snow_modules_opengl_web_GL.current_context.stencilOp(fail,zfail,zpass);
};
snow_modules_opengl_web_GL.stencilOpSeparate = function(face,fail,zfail,zpass) {
	snow_modules_opengl_web_GL.current_context.stencilOpSeparate(face,fail,zfail,zpass);
};
snow_modules_opengl_web_GL.texImage2D = function(target,level,internalformat,width,height,border,format,type,data) {
	snow_modules_opengl_web_GL.current_context.texImage2D(target,level,internalformat,width,height,border,format,type,data);
};
snow_modules_opengl_web_GL.texParameterf = function(target,pname,param) {
	snow_modules_opengl_web_GL.current_context.texParameterf(target,pname,param);
};
snow_modules_opengl_web_GL.texParameteri = function(target,pname,param) {
	snow_modules_opengl_web_GL.current_context.texParameteri(target,pname,param);
};
snow_modules_opengl_web_GL.texSubImage2D = function(target,level,xoffset,yoffset,width,height,format,type,data) {
	snow_modules_opengl_web_GL.current_context.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,data);
};
snow_modules_opengl_web_GL.uniform1f = function(location,x) {
	snow_modules_opengl_web_GL.current_context.uniform1f(location,x);
};
snow_modules_opengl_web_GL.uniform1fv = function(location,data) {
	snow_modules_opengl_web_GL.current_context.uniform1fv(location,data);
};
snow_modules_opengl_web_GL.uniform1i = function(location,x) {
	snow_modules_opengl_web_GL.current_context.uniform1i(location,x);
};
snow_modules_opengl_web_GL.uniform1iv = function(location,data) {
	snow_modules_opengl_web_GL.current_context.uniform1iv(location,data);
};
snow_modules_opengl_web_GL.uniform2f = function(location,x,y) {
	snow_modules_opengl_web_GL.current_context.uniform2f(location,x,y);
};
snow_modules_opengl_web_GL.uniform2fv = function(location,data) {
	snow_modules_opengl_web_GL.current_context.uniform2fv(location,data);
};
snow_modules_opengl_web_GL.uniform2i = function(location,x,y) {
	snow_modules_opengl_web_GL.current_context.uniform2i(location,x,y);
};
snow_modules_opengl_web_GL.uniform2iv = function(location,data) {
	snow_modules_opengl_web_GL.current_context.uniform2iv(location,data);
};
snow_modules_opengl_web_GL.uniform3f = function(location,x,y,z) {
	snow_modules_opengl_web_GL.current_context.uniform3f(location,x,y,z);
};
snow_modules_opengl_web_GL.uniform3fv = function(location,data) {
	snow_modules_opengl_web_GL.current_context.uniform3fv(location,data);
};
snow_modules_opengl_web_GL.uniform3i = function(location,x,y,z) {
	snow_modules_opengl_web_GL.current_context.uniform3i(location,x,y,z);
};
snow_modules_opengl_web_GL.uniform3iv = function(location,data) {
	snow_modules_opengl_web_GL.current_context.uniform3iv(location,data);
};
snow_modules_opengl_web_GL.uniform4f = function(location,x,y,z,w) {
	snow_modules_opengl_web_GL.current_context.uniform4f(location,x,y,z,w);
};
snow_modules_opengl_web_GL.uniform4fv = function(location,data) {
	snow_modules_opengl_web_GL.current_context.uniform4fv(location,data);
};
snow_modules_opengl_web_GL.uniform4i = function(location,x,y,z,w) {
	snow_modules_opengl_web_GL.current_context.uniform4i(location,x,y,z,w);
};
snow_modules_opengl_web_GL.uniform4iv = function(location,data) {
	snow_modules_opengl_web_GL.current_context.uniform4iv(location,data);
};
snow_modules_opengl_web_GL.uniformMatrix2fv = function(location,transpose,data) {
	snow_modules_opengl_web_GL.current_context.uniformMatrix2fv(location,transpose,data);
};
snow_modules_opengl_web_GL.uniformMatrix3fv = function(location,transpose,data) {
	snow_modules_opengl_web_GL.current_context.uniformMatrix3fv(location,transpose,data);
};
snow_modules_opengl_web_GL.uniformMatrix4fv = function(location,transpose,data) {
	snow_modules_opengl_web_GL.current_context.uniformMatrix4fv(location,transpose,data);
};
snow_modules_opengl_web_GL.useProgram = function(program) {
	snow_modules_opengl_web_GL.current_context.useProgram(program);
};
snow_modules_opengl_web_GL.validateProgram = function(program) {
	snow_modules_opengl_web_GL.current_context.validateProgram(program);
};
snow_modules_opengl_web_GL.vertexAttrib1f = function(indx,x) {
	snow_modules_opengl_web_GL.current_context.vertexAttrib1f(indx,x);
};
snow_modules_opengl_web_GL.vertexAttrib1fv = function(indx,data) {
	snow_modules_opengl_web_GL.current_context.vertexAttrib1fv(indx,data);
};
snow_modules_opengl_web_GL.vertexAttrib2f = function(indx,x,y) {
	snow_modules_opengl_web_GL.current_context.vertexAttrib2f(indx,x,y);
};
snow_modules_opengl_web_GL.vertexAttrib2fv = function(indx,data) {
	snow_modules_opengl_web_GL.current_context.vertexAttrib2fv(indx,data);
};
snow_modules_opengl_web_GL.vertexAttrib3f = function(indx,x,y,z) {
	snow_modules_opengl_web_GL.current_context.vertexAttrib3f(indx,x,y,z);
};
snow_modules_opengl_web_GL.vertexAttrib3fv = function(indx,data) {
	snow_modules_opengl_web_GL.current_context.vertexAttrib3fv(indx,data);
};
snow_modules_opengl_web_GL.vertexAttrib4f = function(indx,x,y,z,w) {
	snow_modules_opengl_web_GL.current_context.vertexAttrib4f(indx,x,y,z,w);
};
snow_modules_opengl_web_GL.vertexAttrib4fv = function(indx,data) {
	snow_modules_opengl_web_GL.current_context.vertexAttrib4fv(indx,data);
};
snow_modules_opengl_web_GL.vertexAttribPointer = function(indx,size,type,normalized,stride,offset) {
	snow_modules_opengl_web_GL.current_context.vertexAttribPointer(indx,size,type,normalized,stride,offset);
};
snow_modules_opengl_web_GL.viewport = function(x,y,width,height) {
	snow_modules_opengl_web_GL.current_context.viewport(x,y,width,height);
};
snow_modules_opengl_web_GL.get_version = function() {
	return 7938;
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
	destroy: function() {
	}
	,__class__: snow_system_assets_Asset
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
snow_system_assets_AssetImage.load_from_pixels = function(_system,_id,_width,_height,_pixels) {
	if(_id == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	if(_pixels == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_pixels was null"));
	if(_system == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	var info = _system.module.image_info_from_pixels(_id,_width,_height,_pixels);
	return new snow_system_assets_AssetImage(_system,_id,info);
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
	,destroy: function() {
		this.set_image(null);
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
	,reload_from_pixels: function(_width,_height,_pixels) {
		this.loaded = false;
		this.set_image(this.system.module.image_info_from_pixels(this.id,_width,_height,_pixels));
	}
	,set_image: function(_image) {
		this.loaded = _image != null;
		return this.image = _image;
	}
	,__class__: snow_system_assets_AssetImage
});
var snow_system_assets_AssetBytes = function(_system,_id,_bytes) {
	snow_system_assets_Asset.call(this,_system,_id,1);
	this.set_bytes(_bytes);
};
$hxClasses["snow.system.assets.AssetBytes"] = snow_system_assets_AssetBytes;
snow_system_assets_AssetBytes.__name__ = ["snow","system","assets","AssetBytes"];
snow_system_assets_AssetBytes.load = function(_system,_id) {
	return new snow_system_assets_AssetBytes(_system,_id,null).reload();
};
snow_system_assets_AssetBytes.__super__ = snow_system_assets_Asset;
snow_system_assets_AssetBytes.prototype = $extend(snow_system_assets_Asset.prototype,{
	reload: function() {
		var _g = this;
		return new snow_api_Promise(function(resolve,reject) {
			_g.system.app.io.data_flow(haxe_io_Path.join([_g.system.root,_g.id])).then(function(_bytes) {
				_g.set_bytes(_bytes);
				resolve(_g);
			}).error(reject);
		});
	}
	,destroy: function() {
		this.set_bytes(null);
	}
	,set_bytes: function(_bytes) {
		this.loaded = _bytes != null;
		return this.bytes = _bytes;
	}
	,__class__: snow_system_assets_AssetBytes
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
	,destroy: function() {
		this.set_text(null);
	}
	,set_text: function(_text) {
		this.loaded = _text != null;
		return this.text = _text;
	}
	,__class__: snow_system_assets_AssetText
});
var snow_system_assets_AssetJSON = function(_system,_id,_json) {
	snow_system_assets_Asset.call(this,_system,_id,3);
	this.set_json(_json);
};
$hxClasses["snow.system.assets.AssetJSON"] = snow_system_assets_AssetJSON;
snow_system_assets_AssetJSON.__name__ = ["snow","system","assets","AssetJSON"];
snow_system_assets_AssetJSON.load = function(_system,_id) {
	return new snow_system_assets_AssetJSON(_system,_id,null).reload();
};
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
	reload: function() {
		var _g = this;
		return new snow_api_Promise(function(resolve,reject) {
			_g.system.app.io.data_flow(haxe_io_Path.join([_g.system.root,_g.id]),snow_system_assets_AssetJSON.processor).then(function(_json) {
				_g.set_json(_json);
				resolve(_g);
			}).error(reject);
		});
	}
	,destroy: function() {
		this.set_json(null);
	}
	,set_json: function(_json) {
		this.loaded = _json != null;
		return this.json = _json;
	}
	,__class__: snow_system_assets_AssetJSON
});
var snow_system_assets_Assets = function(_app) {
	this.root = "";
	this.app = _app;
	this.module = new snow_core_web_assets_Assets(this);
};
$hxClasses["snow.system.assets.Assets"] = snow_system_assets_Assets;
snow_system_assets_Assets.__name__ = ["snow","system","assets","Assets"];
snow_system_assets_Assets.prototype = {
	path: function(_id) {
		return haxe_io_Path.join([this.root,_id]);
	}
	,bytes: function(_id) {
		return snow_system_assets_AssetBytes.load(this,_id);
	}
	,text: function(_id) {
		return snow_system_assets_AssetText.load(this,_id);
	}
	,json: function(_id) {
		return snow_system_assets_AssetJSON.load(this,_id);
	}
	,image: function(_id) {
		return snow_system_assets_AssetImage.load(this,_id);
	}
	,image_from_bytes: function(_id,_bytes) {
		return snow_system_assets_AssetImage.load_from_bytes(this,_id,_bytes);
	}
	,image_from_pixels: function(_id,_width,_height,_pixels) {
		return snow_system_assets_AssetImage.load_from_pixels(this,_id,_width,_height,_pixels);
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
		haxe_Log.trace("    i / audio / " + ("creating sound named " + _name + " (stream: " + (_streaming == null?"null":"" + _streaming) + ")"),{ fileName : "Audio.hx", lineNumber : 53, className : "snow.system.audio.Audio", methodName : "create"});
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
	,create_from_bytes: function(_name,_bytes,_format) {
		if(_name == null) _name = "";
		if(_name == "") _name = this.app.make_uniqueid();
		var sound = this.module.create_sound_from_bytes(_name,_bytes,_format);
		if(sound == null) throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("sound was null"));
		this.sound_list.set(_name,sound);
		return sound;
	}
	,uncreate: function(_name) {
		var _sound = this.sound_list.get(_name);
		if(_sound == null) haxe_Log.trace("    i / audio / " + ("can't find sound, unable to uncreate, use create first: " + _name),{ fileName : "Audio.hx", lineNumber : 99, className : "snow.system.audio.Audio", methodName : "uncreate"});
		_sound.destroy();
	}
	,add: function(sound) {
		this.sound_list.set(sound.name,sound);
		if(sound.is_stream) this.stream_list.set(sound.name,sound);
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
	,volume: function(_name,_volume) {
		var sound = this.get(_name);
		if(sound != null) {
			if(_volume != null) return sound.set_volume(_volume); else return sound.get_volume();
		}
		return 0;
	}
	,pan: function(_name,_pan) {
		var sound = this.get(_name);
		if(sound != null) {
			if(_pan != null) return sound.set_pan(_pan); else return sound.get_pan();
		}
		return 0;
	}
	,pitch: function(_name,_pitch) {
		var sound = this.get(_name);
		if(sound != null) {
			if(_pitch != null) return sound.set_pitch(_pitch); else return sound.get_pitch();
		}
		return 0;
	}
	,position: function(_name,_position) {
		var sound = this.get(_name);
		if(sound != null) {
			if(_position != null) return sound.set_position(_position); else return sound.get_position();
		}
		return 0;
	}
	,duration: function(_name) {
		var sound = this.get(_name);
		if(sound != null) return sound.get_duration();
		return 0;
	}
	,play: function(_name) {
		if(!this.active) return;
		var sound = this.get(_name);
		if(sound != null) sound.play();
	}
	,loop: function(_name) {
		if(!this.active) return;
		var sound = this.get(_name);
		if(sound != null) sound.loop();
	}
	,pause: function(_name) {
		if(!this.active) return;
		var sound = this.get(_name);
		if(sound != null) sound.pause();
	}
	,stop: function(_name) {
		if(!this.active) return;
		var sound = this.get(_name);
		if(sound != null) sound.stop();
	}
	,toggle: function(_name) {
		if(!this.active) return;
		var sound = this.get(_name);
		if(sound != null) sound.toggle();
	}
	,kill: function(_sound) {
		if(_sound == null) return;
		this.sound_list.remove(_sound.name);
		this.stream_list.remove(_sound.name);
	}
	,suspend: function() {
		if(!this.active) return;
		haxe_Log.trace("    i / audio / " + "suspending sound context",{ fileName : "Audio.hx", lineNumber : 354, className : "snow.system.audio.Audio", methodName : "suspend"});
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
		haxe_Log.trace("    i / audio / " + "resuming sound context",{ fileName : "Audio.hx", lineNumber : 372, className : "snow.system.audio.Audio", methodName : "resume"});
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
	keypressed: function(_code) {
		return this.key_code_pressed.h.hasOwnProperty(_code);
	}
	,keyreleased: function(_code) {
		return this.key_code_released.h.hasOwnProperty(_code);
	}
	,keydown: function(_code) {
		return this.key_code_down.h.hasOwnProperty(_code);
	}
	,scanpressed: function(_code) {
		return this.scan_code_pressed.h.hasOwnProperty(_code);
	}
	,scanreleased: function(_code) {
		return this.scan_code_released.h.hasOwnProperty(_code);
	}
	,scandown: function(_code) {
		return this.scan_code_down.h.hasOwnProperty(_code);
	}
	,mousepressed: function(_button) {
		return this.mouse_button_pressed.h.hasOwnProperty(_button);
	}
	,mousereleased: function(_button) {
		return this.mouse_button_released.h.hasOwnProperty(_button);
	}
	,mousedown: function(_button) {
		return this.mouse_button_down.h.hasOwnProperty(_button);
	}
	,gamepadpressed: function(_gamepad,_button) {
		var _gamepad_state = this.gamepad_button_pressed.h[_gamepad];
		if(_gamepad_state != null) return _gamepad_state.h.hasOwnProperty(_button); else return false;
	}
	,gamepadreleased: function(_gamepad,_button) {
		var _gamepad_state = this.gamepad_button_released.h[_gamepad];
		if(_gamepad_state != null) return _gamepad_state.h.hasOwnProperty(_button); else return false;
	}
	,gamepaddown: function(_gamepad,_button) {
		var _gamepad_state = this.gamepad_button_down.h[_gamepad];
		if(_gamepad_state != null) return _gamepad_state.h.hasOwnProperty(_button); else return false;
	}
	,gamepadaxis: function(_gamepad,_axis) {
		var _gamepad_state = this.gamepad_axis_values.h[_gamepad];
		if(_gamepad_state != null) {
			if(_gamepad_state.h.hasOwnProperty(_axis)) return _gamepad_state.h[_axis];
		}
		return 0;
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
	,unlisten: function(_window) {
		this.module.unlisten(_window);
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
	this.string_save_prefix = "slot";
	this.app = _app;
	this.module = new snow_core_web_io_IO(this);
	this.module.init();
};
$hxClasses["snow.system.io.IO"] = snow_system_io_IO;
snow_system_io_IO.__name__ = ["snow","system","io","IO"];
snow_system_io_IO.prototype = {
	url_open: function(_url) {
		this.module.url_open(_url);
	}
	,data_load: function(_path,_options) {
		return this.module.data_load(_path,_options);
	}
	,data_save: function(_path,_data,_options) {
		return this.module.data_save(_path,_data,_options);
	}
	,data_flow: function(_id,_processor,_provider) {
		var _g = this;
		if(_provider == null) _provider = $bind(this,this.default_provider);
		return new snow_api_Promise(function(resolve,reject) {
			_provider(_g.app,_id).then(function(data) {
				if(_processor != null) _processor(_g.app,_id,data).then(resolve,reject); else resolve(data);
			}).error(reject);
		});
	}
	,string_save_path: function(_slot) {
		if(_slot == null) _slot = 0;
		return this.module.string_save_path(_slot);
	}
	,string_save: function(_key,_value,_slot) {
		if(_slot == null) _slot = 0;
		var _string_map = this.string_slots_sync(_slot);
		var _encoded_key = window.btoa(_key);
		if(_value == null) _string_map.remove(_encoded_key); else {
			var _encoded_value = window.btoa(_value);
			if(__map_reserved[_encoded_key] != null) _string_map.setReserved(_encoded_key,_encoded_value); else _string_map.h[_encoded_key] = _encoded_value;
		}
		var _contents = haxe_Serializer.run(_string_map);
		_contents = window.btoa(_contents);
		return this.module.string_slot_save(_slot,_contents);
	}
	,string_load: function(_key,_slot) {
		if(_slot == null) _slot = 0;
		var _string_map = this.string_slots_sync(_slot);
		var _encoded_key = window.btoa(_key);
		var _encoded_value;
		_encoded_value = __map_reserved[_encoded_key] != null?_string_map.getReserved(_encoded_key):_string_map.h[_encoded_key];
		if(_encoded_value == null) return null;
		return window.atob(_encoded_value);
	}
	,string_destroy: function(_slot) {
		if(_slot == null) _slot = 0;
		if(this.string_slots == null) this.string_slots = new haxe_ds_IntMap(); else this.string_slots.remove(_slot);
		return this.module.string_slot_destroy(_slot);
	}
	,string_slots_sync: function(_slot) {
		if(_slot == null) _slot = 0;
		if(this.string_slots == null) this.string_slots = new haxe_ds_IntMap();
		var _string_map = this.string_slots.h[_slot];
		if(_string_map == null) {
			var _string = this.module.string_slot_load(_slot);
			if(_string == null) _string_map = new haxe_ds_StringMap(); else {
				_string = window.atob(_string);
				_string_map = haxe_Unserializer.run(_string);
			}
			this.string_slots.h[_slot] = _string_map;
		}
		return _string_map;
	}
	,default_provider: function(_app,_id) {
		return this.module.data_load(_id,null);
	}
	,on_event: function(_event) {
		this.module.on_event(_event);
	}
	,update: function() {
		this.module.update();
	}
	,destroy: function() {
		this.module.destroy();
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
	this.fullscreen = false;
	this.grab = false;
	this.bordered = true;
	this.title = "snow window";
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
			haxe_Log.trace("   i / window / " + "failed to create window",{ fileName : "Window.hx", lineNumber : 92, className : "snow.system.window.Window", methodName : "on_window_created"});
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
	,destroy: function() {
		this.closed = true;
		if(this.handle == null) return;
		this.system.remove(this);
		this.system.module.destroy_window(this);
		this.handle = null;
	}
	,close: function() {
		this.closed = true;
		if(this.handle == null) return;
		this.system.module.close(this);
	}
	,show: function() {
		if(this.handle == null) return;
		this.closed = false;
		this.system.module.show(this);
	}
	,simple_message: function(message,title) {
		if(title == null) title = "";
		if(this.handle == null) return;
		this.system.module.simple_message(this,message,title);
	}
	,get_fullscreen: function() {
		return this.fullscreen;
	}
	,set_fullscreen: function(_enable) {
		if(this.handle != null) this.system.module.fullscreen(this,_enable);
		return this.fullscreen = _enable;
	}
	,get_bordered: function() {
		return this.bordered;
	}
	,get_grab: function() {
		return this.grab;
	}
	,get_max_size: function() {
		return this.max_size;
	}
	,get_min_size: function() {
		return this.min_size;
	}
	,get_title: function() {
		return this.title;
	}
	,set_title: function(_title) {
		if(this.handle != null) this.system.module.set_title(this,_title);
		return this.title = _title;
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
	,set_cursor_position: function(_x,_y) {
		if(this.handle != null && !this.closed) this.system.module.set_cursor_position(this,_x,_y);
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
	,set_bordered: function(_bordered) {
		if(this.handle != null) this.system.module.bordered(this,_bordered);
		return this.bordered = _bordered;
	}
	,set_grab: function(_grab) {
		if(this.handle != null) this.system.module.grab(this,_grab);
		return this.grab = _grab;
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
	,remove: function(_window) {
		this.window_list.remove(_window.id);
		this.window_handles.remove(_window.handle);
		this.window_count--;
		this.module.unlisten(_window);
		if(_window.config.no_input == null || _window.config.no_input == false) this.app.input.unlisten(_window);
	}
	,window_from_handle: function(_handle) {
		if(this.window_handles.h.__keys__[_handle.__id__] != null) {
			var _id = this.window_handles.h[_handle.__id__];
			return this.window_list.h[_id];
		}
		return null;
	}
	,window_from_id: function(_id) {
		return this.window_list.h[_id];
	}
	,enable_vsync: function(_enable) {
		return this.module.system_enable_vsync(_enable);
	}
	,enable_cursor: function(_enable) {
		this.module.system_enable_cursor(_enable);
	}
	,enable_cursor_lock: function(_enable) {
		this.module.system_lock_cursor(_enable);
	}
	,display_count: function() {
		return this.module.display_count();
	}
	,display_mode_count: function(display) {
		return this.module.display_mode_count(display);
	}
	,display_native_mode: function(display) {
		return this.module.display_native_mode(display);
	}
	,display_current_mode: function(display) {
		return this.module.display_current_mode(display);
	}
	,display_mode: function(display,mode_index) {
		return this.module.display_mode(display,mode_index);
	}
	,display_bounds: function(display) {
		return this.module.display_bounds(display);
	}
	,display_name: function(display) {
		return this.module.display_name(display);
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
var snow_types__$Types_AssetType_$Impl_$ = {};
$hxClasses["snow.types._Types.AssetType_Impl_"] = snow_types__$Types_AssetType_$Impl_$;
snow_types__$Types_AssetType_$Impl_$.__name__ = ["snow","types","_Types","AssetType_Impl_"];
snow_types__$Types_AssetType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "unknown";
	case 1:
		return "bytes";
	case 2:
		return "text";
	case 3:
		return "json";
	case 4:
		return "image";
	case 5:
		return "audio";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_OpenGLProfile_$Impl_$ = {};
$hxClasses["snow.types._Types.OpenGLProfile_Impl_"] = snow_types__$Types_OpenGLProfile_$Impl_$;
snow_types__$Types_OpenGLProfile_$Impl_$.__name__ = ["snow","types","_Types","OpenGLProfile_Impl_"];
snow_types__$Types_OpenGLProfile_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "compatibility";
	case 1:
		return "core";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_TextEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.TextEventType_Impl_"] = snow_types__$Types_TextEventType_$Impl_$;
snow_types__$Types_TextEventType_$Impl_$.__name__ = ["snow","types","_Types","TextEventType_Impl_"];
snow_types__$Types_TextEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "unknown";
	case 1:
		return "edit";
	case 2:
		return "input";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_GamepadDeviceEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.GamepadDeviceEventType_Impl_"] = snow_types__$Types_GamepadDeviceEventType_$Impl_$;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.__name__ = ["snow","types","_Types","GamepadDeviceEventType_Impl_"];
snow_types__$Types_GamepadDeviceEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "unknown";
	case 1:
		return "device_added";
	case 2:
		return "device_removed";
	case 3:
		return "device_remapped";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_SystemEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.SystemEventType_Impl_"] = snow_types__$Types_SystemEventType_$Impl_$;
snow_types__$Types_SystemEventType_$Impl_$.__name__ = ["snow","types","_Types","SystemEventType_Impl_"];
snow_types__$Types_SystemEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "unknown";
	case 1:
		return "init";
	case 2:
		return "ready";
	case 3:
		return "update";
	case 4:
		return "shutdown";
	case 5:
		return "window";
	case 6:
		return "input";
	case 7:
		return "quit";
	case 8:
		return "app_terminating";
	case 9:
		return "app_lowmemory";
	case 10:
		return "app_willenterbackground";
	case 11:
		return "app_didenterbackground";
	case 12:
		return "app_willenterforeground";
	case 13:
		return "app_didenterforeground";
	case 14:
		return "file";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_WindowEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.WindowEventType_Impl_"] = snow_types__$Types_WindowEventType_$Impl_$;
snow_types__$Types_WindowEventType_$Impl_$.__name__ = ["snow","types","_Types","WindowEventType_Impl_"];
snow_types__$Types_WindowEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "unknown";
	case 1:
		return "created";
	case 2:
		return "shown";
	case 3:
		return "hidden";
	case 4:
		return "exposed";
	case 5:
		return "moved";
	case 6:
		return "resized";
	case 7:
		return "size_changed";
	case 8:
		return "minimized";
	case 9:
		return "maximized";
	case 10:
		return "restored";
	case 11:
		return "enter";
	case 12:
		return "leave";
	case 13:
		return "focus_gained";
	case 14:
		return "focus_lost";
	case 15:
		return "close";
	case 16:
		return "destroy";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_InputEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.InputEventType_Impl_"] = snow_types__$Types_InputEventType_$Impl_$;
snow_types__$Types_InputEventType_$Impl_$.__name__ = ["snow","types","_Types","InputEventType_Impl_"];
snow_types__$Types_InputEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "unknown";
	case 1:
		return "key";
	case 2:
		return "mouse";
	case 3:
		return "touch";
	case 4:
		return "joystick";
	case 5:
		return "controller";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_FileEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.FileEventType_Impl_"] = snow_types__$Types_FileEventType_$Impl_$;
snow_types__$Types_FileEventType_$Impl_$.__name__ = ["snow","types","_Types","FileEventType_Impl_"];
snow_types__$Types_FileEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "unknown";
	case 1:
		return "modify";
	case 2:
		return "remove";
	case 3:
		return "create";
	case 4:
		return "drop";
	default:
		return "" + this1;
	}
};
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
	,remove: function(component) {
		return this.removeType(component.get__tid());
	}
	,hxSerialize: function(s) {
		s.serialize(this.components);
	}
	,hxUnserialize: function(u) {
		this.components = u.unserialize();
	}
	,__class__: tusk_Entity
};
var tusk_Files = function() { };
$hxClasses["tusk.Files"] = tusk_Files;
tusk_Files.__name__ = ["tusk","Files"];
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
	,exclude: function(tid) {
		if(HxOverrides.indexOf(this.includes,tid,0) >= 0) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Can't add component '" + tid + "' because it is already in the includes list!",null,null,{ fileName : "Matcher.hx", lineNumber : 40, className : "tusk.Matcher", methodName : "exclude"}));
		if(HxOverrides.indexOf(this.excludes,tid,0) < 0) this.excludes.push(tid);
		return this;
	}
	,custom: function(customMatcher) {
		this.customMatcher = customMatcher;
		return this;
	}
	,isIncluded: function(tid) {
		return HxOverrides.indexOf(this.includes,tid,0) > -1;
	}
	,isExcluded: function(tid) {
		return HxOverrides.indexOf(this.excludes,tid,0) > -1;
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
tusk_Tusk.unrouteEvent = function(type,handler) {
	tusk_Tusk.router.unregisterHandler(type,handler);
};
tusk_Tusk.pushScene = function(scene) {
	if(HxOverrides.indexOf(tusk_Tusk.game.currentScenes,scene,0) >= 0) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Scene is already running!",null,null,{ fileName : "Tusk.hx", lineNumber : 180, className : "tusk.Tusk", methodName : "pushScene"}));
	tusk_Tusk.game.currentScenes.push(scene);
	scene.sceneDone = new promhx_Deferred();
	scene.___connectRoutes();
	scene.onLoad(new tusk_events_LoadEvent(scene));
	return scene.sceneDone.promise();
};
tusk_Tusk.removeScene = function(scene) {
	if(!HxOverrides.remove(tusk_Tusk.game.currentScenes,scene)) return;
	tusk_Tusk.router.onEvent(tusk_events_EventType.Destroy,new tusk_events_DestroyEvent(scene));
	var _g = 0;
	var _g1 = scene.processors;
	while(_g < _g1.length) {
		var processor = _g1[_g];
		++_g;
		processor.___disconnectRoutes();
	}
	scene.___disconnectRoutes();
	var _g2 = 0;
	var _g11 = scene.entities;
	while(_g2 < _g11.length) {
		var entity = _g11[_g2];
		++_g2;
		tusk_Tusk.removeEntity(entity);
	}
	if(!scene.sceneDone._resolved) scene.sceneDone.resolve(scene);
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
tusk_Tusk.serialize = function() {
	var s = new haxe_Serializer();
	var result = s.toString();
	return result;
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
var tusk_defaults_Materials = function() {
};
$hxClasses["tusk.defaults.Materials"] = tusk_defaults_Materials;
tusk_defaults_Materials.__name__ = ["tusk","defaults","Materials"];
tusk_defaults_Materials.loadUnlitColoured = function() {
	if(tusk_Tusk.assets.isLoaded("unlit.coloured")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getMaterial("unlit.coloured"));
		return d.promise();
	}
	var shader = new tusk_resources_Shader("unlit.coloured",haxe_Resource.getString("unlit.coloured.vert"),haxe_Resource.getString("unlit.coloured.frag"));
	var mat = new tusk_resources_Material("unlit.coloured",shader);
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.Pos3[1];
	mat.attributeFlags |= 1 << tusk_resources_AttributeTypes.Colour4[1];
	snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
	var posLocation = mat.shader.getAttributeLocation("position");
	var colourLocation = mat.shader.getAttributeLocation("colour");
	mat.onRender = function(setupUniforms,vertexBuffer,vertexCount) {
		snow_modules_opengl_web_GL.current_context.useProgram(mat.shader.program);
		snow_modules_opengl_web_GL.current_context.blendFunc(770,771);
		setupUniforms(mat);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.enableVertexAttribArray(colourLocation);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,vertexBuffer);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(posLocation,3,5126,false,28,0);
		snow_modules_opengl_web_GL.current_context.vertexAttribPointer(colourLocation,4,5126,false,28,12);
		snow_modules_opengl_web_GL.current_context.drawArrays(4,0,vertexCount);
		snow_modules_opengl_web_GL.current_context.bindTexture(3553,null);
		snow_modules_opengl_web_GL.current_context.bindBuffer(34962,null);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(colourLocation);
		snow_modules_opengl_web_GL.current_context.disableVertexAttribArray(posLocation);
		snow_modules_opengl_web_GL.current_context.useProgram(null);
	};
	return tusk_Tusk.assets.loadMaterial("unlit.coloured",mat);
};
tusk_defaults_Materials.loadUnlitTextured = function() {
	if(tusk_Tusk.assets.isLoaded("unlit.textured")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getMaterial("unlit.textured"));
		return d.promise();
	}
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
tusk_defaults_Materials.loadEffectFadeout = function() {
	if(tusk_Tusk.assets.isLoaded("effect.fadeout")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getMaterial("effect.fadeout"));
		return d.promise();
	}
	var shader = new tusk_resources_Shader("effect.fadeout",haxe_Resource.getString("unlit.textured.vert"),haxe_Resource.getString("effect.fadeout.frag"));
	var mat = new tusk_resources_Material("effect.fadeout",shader);
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
	return tusk_Tusk.assets.loadMaterial("effect.fadeout",mat);
};
tusk_defaults_Materials.loadEffectCircleOut = function() {
	if(tusk_Tusk.assets.isLoaded("effect.circleout")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getMaterial("effect.circleout"));
		return d.promise();
	}
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
	if(tusk_Tusk.assets.isLoaded("text.basic")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getMaterial("text.basic"));
		return d.promise();
	}
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
	if(tusk_Tusk.assets.isLoaded("particles.untextured")) {
		var d = new promhx_Deferred();
		d.resolve(tusk_Tusk.assets.getMaterial("particles.untextured"));
		return d.promise();
	}
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
tusk_defaults_Materials.prototype = {
	__class__: tusk_defaults_Materials
};
var tusk_defaults_Primitives = function() {
};
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
tusk_defaults_Primitives.prototype = {
	__class__: tusk_defaults_Primitives
};
var tusk_defaults_scenes_SplashScreen = function() {
	tusk_Scene.call(this,"Tusk Splash Screen");
};
$hxClasses["tusk.defaults.scenes.SplashScreen"] = tusk_defaults_scenes_SplashScreen;
tusk_defaults_scenes_SplashScreen.__name__ = ["tusk","defaults","scenes","SplashScreen"];
tusk_defaults_scenes_SplashScreen.__super__ = tusk_Scene;
tusk_defaults_scenes_SplashScreen.prototype = $extend(tusk_Scene.prototype,{
	onLoad: function(event) {
		var _g = this;
		if(event.scene != this) return;
		tusk_debug_Log.log("Loading splash screen..",tusk_debug_LogFunctions.Info,{ fileName : "SplashScreen.hx", lineNumber : 47, className : "tusk.defaults.scenes.SplashScreen", methodName : "onLoad"});
		((function($this) {
			var $r;
			var varargf = function(f) {
				var ret = new promhx_Promise();
				var arr = [tusk_defaults_Primitives.loadQuad(),tusk_defaults_Primitives.loadTextMesh(),tusk_defaults_Materials.loadUnlitTextured(),tusk_defaults_Fonts.loadSubatomic_Screen(),tusk_defaults_Materials.loadTextBasic(),tusk_Tusk.assets.loadTexture("blazingmammothgames.png",haxe_Resource.getBytes("blazingmammothgames.png")),tusk_Tusk.assets.loadSound("assets/sounds/blazingmammothgames.ogg"),tusk_defaults_Materials.loadEffectCircleOut(),tusk_defaults_Materials.loadParticlesUntextured()];
				var p = promhx_Promise.whenAll(arr);
				p._update.push({ async : ret, linkf : function(x) {
					ret.handleResolve(f(arr[0]._val,arr[1]._val,arr[2]._val,arr[3]._val,arr[4]._val,arr[5]._val,arr[6]._val,arr[7]._val,arr[8]._val));
				}});
				return ret;
			};
			$r = { then : varargf};
			return $r;
		}(this))).then(function(quad,textMesh,mat,font,fontMat,logo,roar,circleOutMat,particlesMat) {
			mat.textures = [];
			mat.textures.push(logo);
			fontMat.textures = [];
			fontMat.textures.push(font.texture);
			_g.useProcessor(new tusk_lib_proc_TimedPromiseProcessor());
			_g.useProcessor(new tusk_lib_proc_SplashScreen_$RoarShakeProcessor());
			_g.useProcessor(new tusk_lib_proc_SoundProcessor());
			_g.useProcessor(new tusk_lib_proc_MaterialProcessor());
			_g.useProcessor(new tusk_lib_proc_Camera2DProcessor());
			_g.useProcessor(new tusk_lib_proc_TransformProcessor());
			_g.useProcessor(new tusk_lib_proc_TextProcessor());
			_g.useProcessor(new tusk_lib_proc_MeshProcessor());
			_g.useProcessor(new tusk_lib_proc_Renderer2DProcessor(glm__$Vec4_Vec4_$Impl_$._new(0.25,0.25,0.25,1.0)));
			_g.useProcessor(new tusk_lib_proc_ParticleSystemProcessor(glm__$Vec4_Vec4_$Impl_$._new(0,0,0,1),false));
			_g.useProcessor(new tusk_lib_proc_CircleEffectRendererProcessor());
			var w = tusk_Tusk.instance.app.window.width;
			var h = tusk_Tusk.instance.app.window.height;
			_g.entities.push(new tusk_Entity(_g,"Camera",[new tusk_lib_comp_TransformComponent(),new tusk_lib_comp_Camera2DComponent((function($this) {
				var $r;
				var a = glm__$Vec2_Vec2_$Impl_$._new(w,h);
				$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),-2.0);
				return $r;
			}(this)),(function($this) {
				var $r;
				var a1 = glm__$Vec2_Vec2_$Impl_$._new(w,h);
				$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a1),2.0);
				return $r;
			}(this)),-100,100)]));
			var logoEnt = new tusk_Entity(_g,"Logo",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(),(function($this) {
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
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(256,256,256)),new tusk_lib_comp_MeshComponent(quad.path),new tusk_lib_comp_MaterialComponent(mat.path)]);
			_g.entities.push(logoEnt);
			_g.entities.push(new tusk_Entity(_g,"Logo Text",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,-96,0.05),(function($this) {
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
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(3,3,3)),new tusk_lib_comp_MeshComponent(textMesh.path),new tusk_lib_comp_MaterialComponent(fontMat.path),new tusk_lib_comp_TextComponent(font,"Blazing Mammoth Games",tusk_lib_comp_TextAlign.Centre,null,glm__$Vec4_Vec4_$Impl_$._new(1,1,1,1))]));
			var psc = new tusk_lib_comp_ParticleSystemComponent(1000,10);
			psc.customUpdater = function(particle,pc,dt) {
				glm__$Vec3_Vec3_$Impl_$.set_x(particle.vel,Math.sin(2 * Math.PI * particle.t * 0.2 + 4 * Math.PI * particle.seed) * 32);
				glm__$Vec3_Vec3_$Impl_$.set_y(particle.vel,-40);
				glm__$Vec3_Vec3_$Impl_$.set_z(particle.vel,0);
				glm__$Vec3_Vec3_$Impl_$.set(particle.lastPos,glm__$Vec3_Vec3_$Impl_$.get_x(particle.pos),glm__$Vec3_Vec3_$Impl_$.get_y(particle.pos),glm__$Vec3_Vec3_$Impl_$.get_z(particle.pos));
				var _g1 = particle.pos;
				glm__$Vec3_Vec3_$Impl_$.set_x(_g1,glm__$Vec3_Vec3_$Impl_$.get_x(_g1) + glm__$Vec3_Vec3_$Impl_$.get_x(particle.vel) * dt);
				var _g11 = particle.pos;
				glm__$Vec3_Vec3_$Impl_$.set_y(_g11,glm__$Vec3_Vec3_$Impl_$.get_y(_g11) + glm__$Vec3_Vec3_$Impl_$.get_y(particle.vel) * dt);
				var _g12 = particle.pos;
				glm__$Vec3_Vec3_$Impl_$.set_z(_g12,glm__$Vec3_Vec3_$Impl_$.get_z(_g12) + glm__$Vec3_Vec3_$Impl_$.get_z(particle.vel) * dt);
			};
			_g.entities.push(new tusk_Entity(_g,"Particle System",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,tusk_Tusk.instance.app.window.height / 2,0),(function($this) {
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
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(2,2,2)),psc,new tusk_lib_comp_MaterialComponent(particlesMat.path)]));
			var cec = new tusk_lib_comp_CircleEffectComponent(true);
			_g.entities.push(new tusk_Entity(_g,"Circle Effect",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,0,0.1),(function($this) {
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
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(1024,1024,1024)),new tusk_lib_comp_MeshComponent(quad.path),new tusk_lib_comp_MaterialComponent(circleOutMat.path),cec]));
			cec.done.pipe(function(_) {
				if(!_g.sceneDone._resolved) {
					logoEnt.push(new tusk_lib_comp_SplashScreen_$ShakeComponent());
					logoEnt.push(new tusk_lib_comp_SoundComponent(roar.path,true));
					var timer = new tusk_lib_comp_TimedPromiseComponent(4.297);
					_g.entities.push(new tusk_Entity(_g,"Timer",[timer]));
					return timer.done;
				}
				return null;
			}).pipe(function(_1) {
				if(!_g.sceneDone._resolved) {
					cec.t = 0;
					cec.circleIn = false;
					cec.reset();
					return cec.done;
				}
				return null;
			}).then(function(_2) {
				if(!_g.sceneDone._resolved) _g.sceneDone.resolve(_g);
				return null;
			});
			tusk_Tusk.router.onEvent(tusk_events_EventType.Start);
		});
	}
	,onKeyDown: function(event) {
		if(event.keyCode == snow_system_input_Keycodes.escape) this.sceneDone.resolve(this);
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
		tusk_Tusk.routeEvent(tusk_events_EventType.KeyDown,$bind(this,this.onKeyDown));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
		tusk_Tusk.unrouteEvent(tusk_events_EventType.KeyDown,$bind(this,this.onKeyDown));
	}
	,__class__: tusk_defaults_scenes_SplashScreen
});
var tusk_defaults_scenes_TechScreen = function() {
	tusk_Scene.call(this,"Technology");
};
$hxClasses["tusk.defaults.scenes.TechScreen"] = tusk_defaults_scenes_TechScreen;
tusk_defaults_scenes_TechScreen.__name__ = ["tusk","defaults","scenes","TechScreen"];
tusk_defaults_scenes_TechScreen.__super__ = tusk_Scene;
tusk_defaults_scenes_TechScreen.prototype = $extend(tusk_Scene.prototype,{
	onLoad: function(_) {
		var _g = this;
		tusk_debug_Log.log("Loading tech screen...",tusk_debug_LogFunctions.Info,{ fileName : "TechScreen.hx", lineNumber : 36, className : "tusk.defaults.scenes.TechScreen", methodName : "onLoad"});
		((function($this) {
			var $r;
			var varargf = function(f) {
				var ret = new promhx_Promise();
				var arr = [tusk_defaults_Primitives.loadQuad(),tusk_defaults_Materials.loadUnlitTextured(),tusk_Tusk.assets.loadTexture("technologies.png",haxe_Resource.getBytes("technologies.png")),tusk_defaults_Materials.loadEffectFadeout()];
				var p = promhx_Promise.whenAll(arr);
				p._update.push({ async : ret, linkf : function(x) {
					ret.handleResolve(f(arr[0]._val,arr[1]._val,arr[2]._val,arr[3]._val));
				}});
				return ret;
			};
			$r = { then : varargf};
			return $r;
		}(this))).then(function(quad,mat,screen,fadeOutMat) {
			mat.textures = [];
			mat.textures.push(screen);
			_g.useProcessor(new tusk_lib_proc_TimedPromiseProcessor());
			_g.useProcessor(new tusk_lib_proc_MeshProcessor());
			_g.useProcessor(new tusk_lib_proc_MaterialProcessor());
			_g.useProcessor(new tusk_lib_proc_Camera2DProcessor());
			_g.useProcessor(new tusk_lib_proc_TransformProcessor());
			_g.useProcessor(new tusk_lib_proc_Renderer2DProcessor(glm__$Vec4_Vec4_$Impl_$._new(1.0,0.0,0.0,1.0)));
			_g.useProcessor(new tusk_lib_proc_FadeEffectRendererProcessor());
			var w = tusk_Tusk.instance.app.window.width;
			var h = tusk_Tusk.instance.app.window.height;
			_g.entities.push(new tusk_Entity(_g,"Camera",[new tusk_lib_comp_TransformComponent(),new tusk_lib_comp_Camera2DComponent((function($this) {
				var $r;
				var a = glm__$Vec2_Vec2_$Impl_$._new(w,h);
				$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a),-2.0);
				return $r;
			}(this)),(function($this) {
				var $r;
				var a1 = glm__$Vec2_Vec2_$Impl_$._new(w,h);
				$r = glm__$Vec2_Vec2_$Impl_$.divideScalar(glm__$Vec2_Vec2_$Impl_$.clone(a1),2.0);
				return $r;
			}(this)),-100,100)]));
			var imageEntity = new tusk_Entity(_g,"Image",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(),(function($this) {
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
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(1024,1024,1024)),new tusk_lib_comp_MeshComponent(quad.path),new tusk_lib_comp_MaterialComponent(mat.path)]);
			_g.entities.push(imageEntity);
			var fec = new tusk_lib_comp_FadeEffectComponent(true);
			_g.entities.push(new tusk_Entity(_g,"Fader",[new tusk_lib_comp_TransformComponent(glm__$Vec3_Vec3_$Impl_$._new(0,0,0.1),(function($this) {
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
			}(this)),glm__$Vec3_Vec3_$Impl_$._new(1024,1024,1024)),new tusk_lib_comp_MeshComponent(quad.path),new tusk_lib_comp_MaterialComponent(fadeOutMat.path),fec]));
			fec.done.pipe(function(_1) {
				if(!_g.sceneDone._resolved) {
					var timer = new tusk_lib_comp_TimedPromiseComponent(3.0);
					_g.entities.push(new tusk_Entity(_g,"Timer",[timer]));
					return timer.done;
				}
				return null;
			}).pipe(function(_2) {
				if(!_g.sceneDone._resolved) {
					fec.t = 0;
					fec.fadeIn = false;
					fec.reset();
					return fec.done;
				}
				return null;
			}).then(function(_3) {
				if(!_g.sceneDone._resolved) _g.sceneDone.resolve(_g);
				return null;
			});
			tusk_Tusk.router.onEvent(tusk_events_EventType.Start);
		});
	}
	,onKeyDown: function(event) {
		if(event.keyCode == snow_system_input_Keycodes.escape) this.sceneDone.resolve(this);
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
		tusk_Tusk.routeEvent(tusk_events_EventType.KeyDown,$bind(this,this.onKeyDown));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Load,$bind(this,this.onLoad));
		tusk_Tusk.unrouteEvent(tusk_events_EventType.KeyDown,$bind(this,this.onKeyDown));
	}
	,__class__: tusk_defaults_scenes_TechScreen
});
var tusk_events_Event = function() {
};
$hxClasses["tusk.events.Event"] = tusk_events_Event;
tusk_events_Event.__name__ = ["tusk","events","Event"];
tusk_events_Event.prototype = {
	__class__: tusk_events_Event
};
var tusk_events_DestroyEvent = function(scene) {
	this.scene = scene;
	tusk_events_Event.call(this);
};
$hxClasses["tusk.events.DestroyEvent"] = tusk_events_DestroyEvent;
tusk_events_DestroyEvent.__name__ = ["tusk","events","DestroyEvent"];
tusk_events_DestroyEvent.__super__ = tusk_events_Event;
tusk_events_DestroyEvent.prototype = $extend(tusk_events_Event.prototype,{
	__class__: tusk_events_DestroyEvent
});
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
	,unregisterHandler: function(type,handler) {
		if(!this.handlers.exists(type)) return;
		var _this = this.handlers.get(type);
		HxOverrides.remove(_this,handler);
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
var tusk_events_StartEvent = function() {
	tusk_events_Event.call(this);
};
$hxClasses["tusk.events.StartEvent"] = tusk_events_StartEvent;
tusk_events_StartEvent.__name__ = ["tusk","events","StartEvent"];
tusk_events_StartEvent.__super__ = tusk_events_Event;
tusk_events_StartEvent.prototype = $extend(tusk_events_Event.prototype,{
	__class__: tusk_events_StartEvent
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
	,hxSerialize: function(s) {
		s.serialize(this.projectionMatrixDirty);
		s.serialize(this.viewMatrixDirty);
		s.serialize(this.min);
		s.serialize(this.max);
		s.serialize(this.near);
		s.serialize(this.far);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.projectionMatrixDirty);
		s.serialize(this.viewMatrixDirty);
		s.serialize(this.min);
		s.serialize(this.max);
		s.serialize(this.near);
		s.serialize(this.far);
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
	hxSerialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.circleIn);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.circleIn);
	}
	,get__tid: function() {
		return 4;
	}
	,__class__: tusk_lib_comp_CircleEffectComponent
});
var tusk_lib_comp_FadeEffectComponent = function(fadeIn) {
	this.fadeIn = true;
	this.t = 0;
	this.fadeIn = fadeIn;
	tusk_PromiseComponent.call(this);
};
$hxClasses["tusk.lib.comp.FadeEffectComponent"] = tusk_lib_comp_FadeEffectComponent;
tusk_lib_comp_FadeEffectComponent.__name__ = ["tusk","lib","comp","FadeEffectComponent"];
tusk_lib_comp_FadeEffectComponent.__super__ = tusk_PromiseComponent;
tusk_lib_comp_FadeEffectComponent.prototype = $extend(tusk_PromiseComponent.prototype,{
	hxSerialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.fadeIn);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.fadeIn);
	}
	,get__tid: function() {
		return 10;
	}
	,__class__: tusk_lib_comp_FadeEffectComponent
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
	,hxSerialize: function(s) {
		s.serialize(this.path);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.path);
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
	,hxSerialize: function(s) {
		s.serialize(this.path);
		s.serialize(this.bufferDirty);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.path);
		s.serialize(this.bufferDirty);
	}
	,__class__: tusk_lib_comp_MeshComponent
});
var tusk_lib_comp_Particle = function() {
	this.seed = 0;
	this.lastSize = 1;
	this.size = 1;
	this.lastColour = glm__$Vec4_Vec4_$Impl_$._new();
	this.colour = glm__$Vec4_Vec4_$Impl_$._new();
	this.lastPos = glm__$Vec3_Vec3_$Impl_$._new();
	this.pos = glm__$Vec3_Vec3_$Impl_$._new();
	this.t = 0;
	this.lifeTime = 1;
	this.vel = glm__$Vec3_Vec3_$Impl_$._new();
	this.alive = false;
};
$hxClasses["tusk.lib.comp.Particle"] = tusk_lib_comp_Particle;
tusk_lib_comp_Particle.__name__ = ["tusk","lib","comp","Particle"];
tusk_lib_comp_Particle.prototype = {
	__class__: tusk_lib_comp_Particle
};
var tusk_lib_comp_ParticleSystemComponent = function(particleCount,preSimulateTime) {
	this.vertexBuffer = null;
	this.emissionAccumulator = 0;
	this.customUpdater = null;
	this.preSimulateTime = 0;
	this.gravity = glm__$Vec3_Vec3_$Impl_$._new(0,-10,0);
	this.startVelocityMax = glm__$Vec3_Vec3_$Impl_$._new(0,0,0);
	this.startVelocityMin = glm__$Vec3_Vec3_$Impl_$._new(0,0,0);
	this.startPositionRange = glm__$Vec3_Vec3_$Impl_$._new(256,0,0);
	this.endSize = 2;
	this.startSize = 2;
	this.endColour = glm__$Vec4_Vec4_$Impl_$._new(1,1,1,0.5);
	this.startColour = glm__$Vec4_Vec4_$Impl_$._new(1,1,1,0.75);
	this.lifeTime = glm__$Vec2_Vec2_$Impl_$._new(5,10);
	this.emissionRate = 100;
	this.particles = null;
	this.particleCount = 0;
	this.particleCount = particleCount;
	this.preSimulateTime = preSimulateTime;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.ParticleSystemComponent"] = tusk_lib_comp_ParticleSystemComponent;
tusk_lib_comp_ParticleSystemComponent.__name__ = ["tusk","lib","comp","ParticleSystemComponent"];
tusk_lib_comp_ParticleSystemComponent.__super__ = tusk_Component;
tusk_lib_comp_ParticleSystemComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 0;
	}
	,hxSerialize: function(s) {
		s.serialize(this.particleCount);
		s.serialize(this.particles);
		s.serialize(this.emissionRate);
		s.serialize(this.lifeTime);
		s.serialize(this.startColour);
		s.serialize(this.endColour);
		s.serialize(this.startSize);
		s.serialize(this.endSize);
		s.serialize(this.startPositionRange);
		s.serialize(this.startVelocityMin);
		s.serialize(this.startVelocityMax);
		s.serialize(this.gravity);
		s.serialize(this.preSimulateTime);
		s.serialize(this.customUpdater);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.particleCount);
		s.serialize(this.particles);
		s.serialize(this.emissionRate);
		s.serialize(this.lifeTime);
		s.serialize(this.startColour);
		s.serialize(this.endColour);
		s.serialize(this.startSize);
		s.serialize(this.endSize);
		s.serialize(this.startPositionRange);
		s.serialize(this.startVelocityMin);
		s.serialize(this.startVelocityMax);
		s.serialize(this.gravity);
		s.serialize(this.preSimulateTime);
		s.serialize(this.customUpdater);
	}
	,__class__: tusk_lib_comp_ParticleSystemComponent
});
var tusk_lib_comp_SoundComponent = function(path,play) {
	this.path = "";
	this.playing = false;
	this.play = false;
	this.path = path;
	this.play = play;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.SoundComponent"] = tusk_lib_comp_SoundComponent;
tusk_lib_comp_SoundComponent.__name__ = ["tusk","lib","comp","SoundComponent"];
tusk_lib_comp_SoundComponent.__super__ = tusk_Component;
tusk_lib_comp_SoundComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 7;
	}
	,hxSerialize: function(s) {
		s.serialize(this.play);
		s.serialize(this.playing);
		s.serialize(this.path);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.play);
		s.serialize(this.playing);
		s.serialize(this.path);
	}
	,__class__: tusk_lib_comp_SoundComponent
});
var tusk_lib_comp_SplashScreen_$ShakeComponent = function() {
	this.t = 0;
	this.shaking = true;
	this.shakeDelayTimer = 0.5;
	tusk_Component.call(this);
};
$hxClasses["tusk.lib.comp.SplashScreen_ShakeComponent"] = tusk_lib_comp_SplashScreen_$ShakeComponent;
tusk_lib_comp_SplashScreen_$ShakeComponent.__name__ = ["tusk","lib","comp","SplashScreen_ShakeComponent"];
tusk_lib_comp_SplashScreen_$ShakeComponent.__super__ = tusk_Component;
tusk_lib_comp_SplashScreen_$ShakeComponent.prototype = $extend(tusk_Component.prototype,{
	get__tid: function() {
		return 2;
	}
	,hxSerialize: function(s) {
		s.serialize(this.shakeDelayTimer);
		s.serialize(this.shaking);
		s.serialize(this.t);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.shakeDelayTimer);
		s.serialize(this.shaking);
		s.serialize(this.t);
	}
	,__class__: tusk_lib_comp_SplashScreen_$ShakeComponent
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
	,hxSerialize: function(s) {
		s.serialize(this.text);
		s.serialize(this.textDirty);
		s.serialize(this.font);
		s.serialize(this.align);
		s.serialize(this.valign);
		s.serialize(this.colour);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.text);
		s.serialize(this.textDirty);
		s.serialize(this.font);
		s.serialize(this.align);
		s.serialize(this.valign);
		s.serialize(this.colour);
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
	hxSerialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.wait);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.t);
		s.serialize(this.wait);
	}
	,get__tid: function() {
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
	,hxSerialize: function(s) {
		s.serialize(this.position);
		s.serialize(this.rotation);
		s.serialize(this.scale);
		s.serialize(this.lastPosition);
		s.serialize(this.lastRotation);
		s.serialize(this.lastScale);
	}
	,hxUnserialize: function(s) {
		s.serialize(this.position);
		s.serialize(this.rotation);
		s.serialize(this.scale);
		s.serialize(this.lastPosition);
		s.serialize(this.lastRotation);
		s.serialize(this.lastScale);
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
			if(transform.position != transform.lastPosition || transform.rotation != transform.lastRotation) camera.viewMatrixDirty = true;
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
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
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
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,__class__: tusk_lib_proc_CircleEffectRendererProcessor
});
var tusk_lib_proc_FadeEffectRendererProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(9).include(8).include(10).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.FadeEffectRendererProcessor"] = tusk_lib_proc_FadeEffectRendererProcessor;
tusk_lib_proc_FadeEffectRendererProcessor.__name__ = ["tusk","lib","proc","FadeEffectRendererProcessor"];
tusk_lib_proc_FadeEffectRendererProcessor.__super__ = tusk_Processor;
tusk_lib_proc_FadeEffectRendererProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var fadeEffect = entity.get(10);
			fadeEffect.t += data.dt;
			if(fadeEffect.t >= 1.0 && !fadeEffect.done._resolved) fadeEffect.finish();
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
				var fadeEffect = [entity.get(10)];
				if(mesh.mesh == null) continue;
				material[0].material.onRender((function(fadeEffect,material,transform,camera) {
					return function(mat) {
						mat.setMat4("projection",camera[0].projectionMatrix);
						mat.setMat4("view",camera[0].viewMatrix);
						mat.setMat4("model",transform[0].modelMatrix);
						material[0].material.setFloat("fadeAlpha",tusk_math_Ease.InOutCubic(fadeEffect[0].fadeIn?1.0 - fadeEffect[0].t:fadeEffect[0].t,0,1,1.0));
					};
				})(fadeEffect,material,transform,camera),mesh.vertexBuffer,mesh.mesh.vertices.length);
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
		tusk_Tusk.routeEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,__class__: tusk_lib_proc_FadeEffectRendererProcessor
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
	,___disconnectRoutes: function() {
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
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: tusk_lib_proc_MeshProcessor
});
var tusk_lib_proc_ParticleSystemProcessor = function(clearColour,doClear,entities) {
	this.doClear = true;
	this.clearColour = glm__$Vec4_Vec4_$Impl_$._new(0.25,0.25,0.25,1.0);
	if(clearColour != null) this.clearColour = clearColour;
	if(doClear != null) this.doClear = doClear;
	this.matcher = new tusk_Matcher().include(9).include(0).include(5);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.ParticleSystemProcessor"] = tusk_lib_proc_ParticleSystemProcessor;
tusk_lib_proc_ParticleSystemProcessor.__name__ = ["tusk","lib","proc","ParticleSystemProcessor"];
tusk_lib_proc_ParticleSystemProcessor.__super__ = tusk_Processor;
tusk_lib_proc_ParticleSystemProcessor.prototype = $extend(tusk_Processor.prototype,{
	simulate: function(pc,dt) {
		var particlesToEmit = pc.emissionRate * dt | 0;
		if(pc.emissionAccumulator >= 1.0) {
			particlesToEmit += 1;
			pc.emissionAccumulator -= 1.0;
		}
		pc.emissionAccumulator += pc.emissionRate * dt - particlesToEmit;
		var _g = 0;
		var _g1 = pc.particles;
		while(_g < _g1.length) {
			var particle = _g1[_g];
			++_g;
			if(particle.alive) {
				particle.t += dt;
				if(particle.t >= particle.lifeTime) {
					particle.alive = false;
					continue;
				}
				if(pc.customUpdater != null) pc.customUpdater(particle,pc,dt); else {
					var _g2 = particle.vel;
					glm__$Vec3_Vec3_$Impl_$.set_x(_g2,glm__$Vec3_Vec3_$Impl_$.get_x(_g2) + glm__$Vec3_Vec3_$Impl_$.get_x(pc.gravity) * dt);
					var _g21 = particle.vel;
					glm__$Vec3_Vec3_$Impl_$.set_y(_g21,glm__$Vec3_Vec3_$Impl_$.get_y(_g21) + glm__$Vec3_Vec3_$Impl_$.get_y(pc.gravity) * dt);
					var _g22 = particle.vel;
					glm__$Vec3_Vec3_$Impl_$.set_z(_g22,glm__$Vec3_Vec3_$Impl_$.get_z(_g22) + glm__$Vec3_Vec3_$Impl_$.get_z(pc.gravity) * dt);
					glm__$Vec3_Vec3_$Impl_$.set(particle.lastPos,glm__$Vec3_Vec3_$Impl_$.get_x(particle.pos),glm__$Vec3_Vec3_$Impl_$.get_y(particle.pos),glm__$Vec3_Vec3_$Impl_$.get_z(particle.pos));
					var _g23 = particle.pos;
					glm__$Vec3_Vec3_$Impl_$.set_x(_g23,glm__$Vec3_Vec3_$Impl_$.get_x(_g23) + glm__$Vec3_Vec3_$Impl_$.get_x(particle.vel) * dt);
					var _g24 = particle.pos;
					glm__$Vec3_Vec3_$Impl_$.set_y(_g24,glm__$Vec3_Vec3_$Impl_$.get_y(_g24) + glm__$Vec3_Vec3_$Impl_$.get_y(particle.vel) * dt);
					var _g25 = particle.pos;
					glm__$Vec3_Vec3_$Impl_$.set_z(_g25,glm__$Vec3_Vec3_$Impl_$.get_z(_g25) + glm__$Vec3_Vec3_$Impl_$.get_z(particle.vel) * dt);
					particle.lastColour = glm__$Vec4_Vec4_$Impl_$.clone(particle.colour);
					var this1 = glm__$Vec4_Vec4_$Impl_$.clone(pc.startColour);
					var target = pc.endColour;
					var t = particle.t / particle.lifeTime;
					this1[0] = glm_GLM.lerp(this1[0],target[0],t);
					this1[1] = glm_GLM.lerp(this1[1],target[1],t);
					this1[2] = glm_GLM.lerp(this1[2],target[2],t);
					this1[3] = glm_GLM.lerp(this1[3],target[3],t);
					particle.colour = this1;
					particle.lastSize = particle.size;
					particle.size = tusk_math_Lerp.LerpF(pc.startSize,pc.endSize,particle.t / particle.lifeTime);
				}
			} else if(particlesToEmit > 0) {
				particle.alive = true;
				glm__$Vec3_Vec3_$Impl_$.set_x(particle.pos,tusk_math_Random["float"](-glm__$Vec3_Vec3_$Impl_$.get_x(pc.startPositionRange),glm__$Vec3_Vec3_$Impl_$.get_x(pc.startPositionRange)));
				glm__$Vec3_Vec3_$Impl_$.set_y(particle.pos,tusk_math_Random["float"](-glm__$Vec3_Vec3_$Impl_$.get_y(pc.startPositionRange),glm__$Vec3_Vec3_$Impl_$.get_y(pc.startPositionRange)));
				glm__$Vec3_Vec3_$Impl_$.set_z(particle.pos,tusk_math_Random["float"](-glm__$Vec3_Vec3_$Impl_$.get_z(pc.startPositionRange),glm__$Vec3_Vec3_$Impl_$.get_z(pc.startPositionRange)));
				particle.lastPos = glm__$Vec3_Vec3_$Impl_$.clone(particle.pos);
				glm__$Vec3_Vec3_$Impl_$.set_x(particle.vel,tusk_math_Random["float"](glm__$Vec3_Vec3_$Impl_$.get_x(pc.startVelocityMin),glm__$Vec3_Vec3_$Impl_$.get_x(pc.startVelocityMax)));
				glm__$Vec3_Vec3_$Impl_$.set_y(particle.vel,tusk_math_Random["float"](glm__$Vec3_Vec3_$Impl_$.get_y(pc.startVelocityMin),glm__$Vec3_Vec3_$Impl_$.get_y(pc.startVelocityMax)));
				glm__$Vec3_Vec3_$Impl_$.set_z(particle.vel,tusk_math_Random["float"](glm__$Vec3_Vec3_$Impl_$.get_z(pc.startVelocityMin),glm__$Vec3_Vec3_$Impl_$.get_z(pc.startVelocityMax)));
				particle.colour = glm__$Vec4_Vec4_$Impl_$.clone(pc.startColour);
				particle.lastColour = glm__$Vec4_Vec4_$Impl_$.clone(particle.colour);
				particle.size = pc.startSize;
				particle.lastSize = particle.size;
				particle.t = 0;
				particle.lifeTime = tusk_math_Random["float"](glm__$Vec2_Vec2_$Impl_$.get_x(pc.lifeTime),glm__$Vec2_Vec2_$Impl_$.get_y(pc.lifeTime));
				particle.seed = Math.random();
				particlesToEmit -= 1;
			}
		}
	}
	,onUpdate: function(event) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var pc = entity.get(0);
			var mat = entity.get(9);
			if(pc.vertexBuffer == null) pc.vertexBuffer = snow_modules_opengl_web_GL.current_context.createBuffer();
			if(pc.particles == null) {
				pc.particles = [];
				var _g3 = 0;
				var _g2 = pc.particleCount;
				while(_g3 < _g2) {
					var i = _g3++;
					pc.particles.push(new tusk_lib_comp_Particle());
				}
				var t = 0;
				var dt = event.dt;
				while(t < pc.preSimulateTime) {
					this.simulate(pc,dt);
					t += dt;
				}
				var array;
				var _g31 = [];
				var _g5 = 0;
				var _g4 = pc.particleCount * 8;
				while(_g5 < _g4) {
					var i1 = _g5++;
					_g31.push(0.0);
				}
				array = _g31;
				var this1;
				if(array != null) this1 = new Float32Array(array); else this1 = null;
				pc.bufferData = this1;
			}
			this.simulate(pc,event.dt);
		}
	}
	,onRender: function(event) {
		snow_modules_opengl_web_GL.current_context.disable(2929);
		snow_modules_opengl_web_GL.current_context.enable(3042);
		snow_modules_opengl_web_GL.current_context.depthFunc(513);
		snow_modules_opengl_web_GL.current_context.viewport(0,0,tusk_Tusk.instance.app.window.width,tusk_Tusk.instance.app.window.height);
		snow_modules_opengl_web_GL.clearColor(glm__$Vec4_Vec4_$Impl_$.get_r(this.clearColour),glm__$Vec4_Vec4_$Impl_$.get_g(this.clearColour),glm__$Vec4_Vec4_$Impl_$.get_b(this.clearColour),glm__$Vec4_Vec4_$Impl_$.get_a(this.clearColour));
		if(this.doClear) snow_modules_opengl_web_GL.current_context.clear(16640);
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
				var pc = entity.get(0);
				var material = entity.get(9);
				if(pc.bufferData == null || pc.vertexBuffer == null) continue;
				var _g5 = 0;
				var _g4 = pc.particleCount;
				while(_g5 < _g4) {
					var i = _g5++;
					var pi = i * 8;
					if(pc.particles[i].alive) {
						var val = tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_x(pc.particles[i].lastPos),glm__$Vec3_Vec3_$Impl_$.get_x(pc.particles[i].pos),event.alpha);
						pc.bufferData[pi] = val;
						var val1 = tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_y(pc.particles[i].lastPos),glm__$Vec3_Vec3_$Impl_$.get_y(pc.particles[i].pos),event.alpha);
						pc.bufferData[pi + 1] = val1;
						var val2 = tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_z(pc.particles[i].lastPos),glm__$Vec3_Vec3_$Impl_$.get_z(pc.particles[i].pos),event.alpha);
						pc.bufferData[pi + 2] = val2;
						var val3 = tusk_math_Lerp.LerpF(glm__$Vec4_Vec4_$Impl_$.get_r(pc.particles[i].lastColour),glm__$Vec4_Vec4_$Impl_$.get_r(pc.particles[i].colour),event.alpha);
						pc.bufferData[pi + 3] = val3;
						var val4 = tusk_math_Lerp.LerpF(glm__$Vec4_Vec4_$Impl_$.get_g(pc.particles[i].lastColour),glm__$Vec4_Vec4_$Impl_$.get_g(pc.particles[i].colour),event.alpha);
						pc.bufferData[pi + 4] = val4;
						var val5 = tusk_math_Lerp.LerpF(glm__$Vec4_Vec4_$Impl_$.get_b(pc.particles[i].lastColour),glm__$Vec4_Vec4_$Impl_$.get_b(pc.particles[i].colour),event.alpha);
						pc.bufferData[pi + 5] = val5;
						var val6 = tusk_math_Lerp.LerpF(glm__$Vec4_Vec4_$Impl_$.get_a(pc.particles[i].lastColour),glm__$Vec4_Vec4_$Impl_$.get_a(pc.particles[i].colour),event.alpha);
						pc.bufferData[pi + 6] = val6;
						var val7 = tusk_math_Lerp.LerpF(pc.particles[i].lastSize,pc.particles[i].size,event.alpha);
						pc.bufferData[pi + 7] = val7;
					} else {
						pc.bufferData[pi] = 0;
						pc.bufferData[pi + 1] = 0;
						pc.bufferData[pi + 2] = 0;
						pc.bufferData[pi + 3] = 0;
						pc.bufferData[pi + 4] = 0;
						pc.bufferData[pi + 5] = 0;
						pc.bufferData[pi + 6] = 0;
						pc.bufferData[pi + 7] = 0;
					}
				}
				snow_modules_opengl_web_GL.current_context.bindBuffer(34962,pc.vertexBuffer);
				snow_modules_opengl_web_GL.current_context.bufferData(34962,pc.bufferData,35048);
				snow_modules_opengl_web_GL.current_context.bindBuffer(34962,null);
				material.material.onRender((function(transform,camera) {
					return function(mat) {
						mat.setMat4("projection",camera[0].projectionMatrix);
						mat.setMat4("view",camera[0].viewMatrix);
						mat.setMat4("model",transform[0].modelMatrix);
					};
				})(transform,camera),pc.vertexBuffer,pc.particles.length);
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
		tusk_Tusk.routeEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,__class__: tusk_lib_proc_ParticleSystemProcessor
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
					};
				})(transform,entity,camera),mesh.vertexBuffer,mesh.mesh.vertices.length);
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
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
					};
				})(s));
				s[0].play = false;
				s[0].playing = true;
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: tusk_lib_proc_SoundProcessor
});
var tusk_lib_proc_SplashScreen_$RoarShakeProcessor = function(entities) {
	this.matcher = new tusk_Matcher().include(5).include(8).include(2);
	tusk_Processor.call(this,entities);
};
$hxClasses["tusk.lib.proc.SplashScreen_RoarShakeProcessor"] = tusk_lib_proc_SplashScreen_$RoarShakeProcessor;
tusk_lib_proc_SplashScreen_$RoarShakeProcessor.__name__ = ["tusk","lib","proc","SplashScreen_RoarShakeProcessor"];
tusk_lib_proc_SplashScreen_$RoarShakeProcessor.__super__ = tusk_Processor;
tusk_lib_proc_SplashScreen_$RoarShakeProcessor.prototype = $extend(tusk_Processor.prototype,{
	onUpdate: function(data) {
		var _g = 0;
		var _g1 = this.entities;
		while(_g < _g1.length) {
			var entity = _g1[_g];
			++_g;
			var t = entity.get(5);
			var s = entity.get(2);
			if(s.shakeDelayTimer > 0) {
				s.shakeDelayTimer -= data.dt;
				continue;
			}
			if(s.shaking) {
				s.t += data.dt;
				var a = -0.149 * Math.pow(s.t,4) + 1.2605 * Math.pow(s.t,3) - 3.6256 * Math.pow(s.t,2) + 3.6298 * s.t - 0.1685;
				t.lastPosition = t.position;
				if(s.t >= 3.297) {
					s.shaking = false;
					glm__$Vec3_Vec3_$Impl_$.set_x(t.position,0);
					glm__$Vec3_Vec3_$Impl_$.set_y(t.position,0);
				} else {
					glm__$Vec3_Vec3_$Impl_$.set_x(t.position,(Math.random() * 2 - 1) * 10 * a);
					glm__$Vec3_Vec3_$Impl_$.set_y(t.position,(Math.random() * 2 - 1) * 10 * a);
				}
			}
		}
	}
	,___connectRoutes: function() {
		tusk_Tusk.routeEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
	}
	,__class__: tusk_lib_proc_SplashScreen_$RoarShakeProcessor
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
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
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
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Update,$bind(this,this.onUpdate));
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
	,___disconnectRoutes: function() {
		tusk_Tusk.unrouteEvent(tusk_events_EventType.Render,$bind(this,this.onRender));
	}
	,__class__: tusk_lib_proc_TransformProcessor
});
var tusk_macros_ComponentIndexer = function() { };
$hxClasses["tusk.macros.ComponentIndexer"] = tusk_macros_ComponentIndexer;
tusk_macros_ComponentIndexer.__name__ = ["tusk","macros","ComponentIndexer"];
tusk_macros_ComponentIndexer.ensureID = function(name) {
	if(!tusk_macros_ComponentIndexer.componentMap.exists(name)) {
		tusk_macros_ComponentIndexer.componentMap.set(name,tusk_macros_ComponentIndexer.nextID);
		tusk_macros_ComponentIndexer.indexMap.h[tusk_macros_ComponentIndexer.nextID] = name;
		tusk_macros_ComponentIndexer.nextID++;
	}
};
tusk_macros_ComponentIndexer.getCompName = function(e) {
	{
		var _g = e.expr;
		switch(_g[1]) {
		case 0:
			var c = _g[2];
			switch(c[1]) {
			case 3:
				var s = c[2];
				return s;
			default:
				return null;
			}
			break;
		case 3:
			var field = _g[3];
			var e1 = _g[2];
			return tusk_macros_ComponentIndexer.getCompName(e1) + "." + field;
		default:
			return null;
		}
	}
};
var tusk_macros_Version = function() { };
$hxClasses["tusk.macros.Version"] = tusk_macros_Version;
tusk_macros_Version.__name__ = ["tusk","macros","Version"];
var tusk_math_Ease = function() { };
$hxClasses["tusk.math.Ease"] = tusk_math_Ease;
tusk_math_Ease.__name__ = ["tusk","math","Ease"];
tusk_math_Ease.InQuad = function(t,b,c,d) {
	return c * (t /= d) * t + b;
};
tusk_math_Ease.OutQuad = function(t,b,c,d) {
	return -c * (t /= d) * (t - 2) + b;
};
tusk_math_Ease.InOutQuad = function(t,b,c,d) {
	if((t /= d / 2) < 1) return c / 2 * t * t + b;
	return -c / 2 * (--t * (t - 2) - 1) + b;
};
tusk_math_Ease.InCubic = function(t,b,c,d) {
	return c * (t /= d) * t * t + b;
};
tusk_math_Ease.OutCubic = function(t,b,c,d) {
	return c * ((t = t / d - 1) * t * t + 1) + b;
};
tusk_math_Ease.InOutCubic = function(t,b,c,d) {
	if((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	return c / 2 * ((t -= 2) * t * t + 2) + b;
};
tusk_math_Ease.InQuart = function(t,b,c,d) {
	return c * (t /= d) * t * t * t + b;
};
tusk_math_Ease.OutQuart = function(t,b,c,d) {
	return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
tusk_math_Ease.InOutQuart = function(t,b,c,d) {
	if((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};
tusk_math_Ease.InQuint = function(t,b,c,d) {
	return c * (t /= d) * t * t * t * t + b;
};
tusk_math_Ease.OutQuint = function(t,b,c,d) {
	return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};
tusk_math_Ease.InOutQuint = function(t,b,c,d) {
	if((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};
tusk_math_Ease.InSine = function(t,b,c,d) {
	return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
tusk_math_Ease.OutSine = function(t,b,c,d) {
	return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
tusk_math_Ease.InOutSine = function(t,b,c,d) {
	return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
tusk_math_Ease.InExpo = function(t,b,c,d) {
	if(t == 0) return b; else return c * Math.pow(2,10 * (t / d - 1)) + b;
};
tusk_math_Ease.OutExpo = function(t,b,c,d) {
	if(t == d) return b + c; else return c * (-Math.pow(2,-10 * t / d) + 1) + b;
};
tusk_math_Ease.InOutExpo = function(t,b,c,d) {
	if(t == 0) return b;
	if(t == d) return b + c;
	if((t /= d / 2) < 1) return c / 2 * Math.pow(2,10 * (t - 1)) + b;
	return c / 2 * (-Math.pow(2,-10 * --t) + 2) + b;
};
tusk_math_Ease.InCirc = function(t,b,c,d) {
	return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};
tusk_math_Ease.OutCirc = function(t,b,c,d) {
	return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};
tusk_math_Ease.InOutCirc = function(t,b,c,d) {
	if((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
};
tusk_math_Ease.InElastic = function(t,b,c,d) {
	var s = 1.70158;
	var p = 0;
	var a = c;
	if(t == 0) return b;
	if((t /= d) == 1) return b + c;
	p = d * .3;
	if(a < Math.abs(c)) {
		a = c;
		var s1 = p / 4;
	} else {
		var s2 = p / (2 * Math.PI) * Math.asin(c / a);
	}
	return -(a * Math.pow(2,10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};
tusk_math_Ease.OutElastic = function(t,b,c,d) {
	var s = 1.70158;
	var p = 0;
	var a = c;
	if(t == 0) return b;
	if((t /= d) == 1) return b + c;
	p = d * .3;
	if(a < Math.abs(c)) {
		a = c;
		var s1 = p / 4;
	} else {
		var s2 = p / (2 * Math.PI) * Math.asin(c / a);
	}
	return a * Math.pow(2,-10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};
tusk_math_Ease.InOutElastic = function(t,b,c,d) {
	var s = 1.70158;
	var p = 0;
	var a = c;
	if(t == 0) return b;
	if((t /= d / 2) == 2) return b + c;
	p = d * 0.44999999999999996;
	if(a < Math.abs(c)) {
		a = c;
		var s1 = p / 4;
	} else {
		var s2 = p / (2 * Math.PI) * Math.asin(c / a);
	}
	if(t < 1) return -0.5 * (a * Math.pow(2,10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	return a * Math.pow(2,-10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
};
tusk_math_Ease.InBack = function(t,b,c,d) {
	var s = 1.70158;
	return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
tusk_math_Ease.OutBack = function(t,b,c,d) {
	var s = 1.70158;
	return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
tusk_math_Ease.InOutBack = function(t,b,c,d) {
	var s = 1.70158;
	if((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
	return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};
tusk_math_Ease.InBounce = function(t,b,c,d) {
	return c - tusk_math_Ease.OutBounce(d - t,b,c,d) + b;
};
tusk_math_Ease.OutBounce = function(t,b,c,d) {
	if((t /= d) < 0.36363636363636365) return c * (7.5625 * t * t) + b; else if(t < 0.72727272727272729) return c * (7.5625 * (t -= 0.54545454545454541) * t + .75) + b; else if(t < 0.90909090909090906) return c * (7.5625 * (t -= 0.81818181818181823) * t + .9375) + b; else return c * (7.5625 * (t -= 0.95454545454545459) * t + .984375) + b;
};
tusk_math_Ease.InOutBounce = function(t,b,c,d) {
	if(t < d / 2) return tusk_math_Ease.InBounce(t * 2,0,c,d) * .5 + b;
	return tusk_math_Ease.OutBounce(t * 2 - d,0,c,d) * .5 + c * .5 + b;
};
var tusk_math_Lerp = function() { };
$hxClasses["tusk.math.Lerp"] = tusk_math_Lerp;
tusk_math_Lerp.__name__ = ["tusk","math","Lerp"];
tusk_math_Lerp.LerpF = function(a,b,t) {
	return a + t * (b - a);
};
tusk_math_Lerp.LerpV2 = function(a,b,t) {
	glm__$Vec2_Vec2_$Impl_$.set_x(a,tusk_math_Lerp.LerpF(glm__$Vec2_Vec2_$Impl_$.get_x(a),glm__$Vec2_Vec2_$Impl_$.get_x(b),t));
	glm__$Vec2_Vec2_$Impl_$.set_y(a,tusk_math_Lerp.LerpF(glm__$Vec2_Vec2_$Impl_$.get_y(a),glm__$Vec2_Vec2_$Impl_$.get_y(b),t));
	return a;
};
tusk_math_Lerp.LerpV3 = function(a,b,t) {
	glm__$Vec3_Vec3_$Impl_$.set_x(a,tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_x(a),glm__$Vec3_Vec3_$Impl_$.get_x(b),t));
	glm__$Vec3_Vec3_$Impl_$.set_y(a,tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_y(a),glm__$Vec3_Vec3_$Impl_$.get_y(b),t));
	glm__$Vec3_Vec3_$Impl_$.set_z(a,tusk_math_Lerp.LerpF(glm__$Vec3_Vec3_$Impl_$.get_z(a),glm__$Vec3_Vec3_$Impl_$.get_z(b),t));
	return a;
};
tusk_math_Lerp.LerpV4 = function(a,b,t) {
	glm__$Vec4_Vec4_$Impl_$.set_x(a,tusk_math_Lerp.LerpF(glm__$Vec4_Vec4_$Impl_$.get_x(a),glm__$Vec4_Vec4_$Impl_$.get_x(b),t));
	glm__$Vec4_Vec4_$Impl_$.set_y(a,tusk_math_Lerp.LerpF(glm__$Vec4_Vec4_$Impl_$.get_y(a),glm__$Vec4_Vec4_$Impl_$.get_y(b),t));
	glm__$Vec4_Vec4_$Impl_$.set_z(a,tusk_math_Lerp.LerpF(glm__$Vec4_Vec4_$Impl_$.get_z(a),glm__$Vec4_Vec4_$Impl_$.get_z(b),t));
	glm__$Vec4_Vec4_$Impl_$.set_w(a,tusk_math_Lerp.LerpF(glm__$Vec4_Vec4_$Impl_$.get_w(a),glm__$Vec4_Vec4_$Impl_$.get_w(b),t));
	return a;
};
var tusk_math_Random = function() { };
$hxClasses["tusk.math.Random"] = tusk_math_Random;
tusk_math_Random.__name__ = ["tusk","math","Random"];
tusk_math_Random.bool = function() {
	return Math.random() < 0.5;
};
tusk_math_Random["int"] = function(from,to) {
	return from + Math.floor((to - from + 1) * Math.random());
};
tusk_math_Random["float"] = function(from,to) {
	return from + (to - from) * Math.random();
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
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Texture '${path}' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Textures.hx", lineNumber : 58, className : "tusk.modules.Assets", methodName : "getTexture"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Texture);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '${path}' isn't a texture!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Textures.hx", lineNumber : 64, className : "tusk.modules.Assets", methodName : "getTexture"}));
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
			def.throwError(new tusk_debug_Exception("Unable to load sound '${path}'!",null,tusk_debug_ExceptionType.FileNotFound,{ fileName : "Sounds.hx", lineNumber : 29, className : "tusk.modules.Assets", methodName : "loadSound"}));
		});
		return promise;
	}
	,getSound: function(path) {
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Sound '${path}' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Sounds.hx", lineNumber : 48, className : "tusk.modules.Assets", methodName : "getSound"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Sound);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '${path}' isn't a sound!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Sounds.hx", lineNumber : 54, className : "tusk.modules.Assets", methodName : "getSound"}));
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
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Mesh '${path}' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Meshes.hx", lineNumber : 23, className : "tusk.modules.Assets", methodName : "getMesh"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Mesh);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '${path}' isn't a mesh!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Meshes.hx", lineNumber : 29, className : "tusk.modules.Assets", methodName : "getMesh"}));
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
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Font '${path}' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Fonts.hx", lineNumber : 55, className : "tusk.modules.Assets", methodName : "getFont"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Font);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '${path}' isn't a font!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Fonts.hx", lineNumber : 61, className : "tusk.modules.Assets", methodName : "getFont"}));
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
		if(!this.assets.exists(path)) throw new js__$Boot_HaxeError(new tusk_debug_Exception("Text '${path}' hasn't been loaded yet!",null,tusk_debug_ExceptionType.AssetNotFound,{ fileName : "Texts.hx", lineNumber : 50, className : "tusk.modules.Assets", methodName : "getText"}));
		try {
			return js_Boot.__cast(this.assets.get(path) , tusk_resources_Text);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,String) ) {
				throw new js__$Boot_HaxeError(new tusk_debug_Exception("Asset '${path}' isn't a text!",null,tusk_debug_ExceptionType.InvalidAssetType,{ fileName : "Texts.hx", lineNumber : 56, className : "tusk.modules.Assets", methodName : "getText"}));
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
	,__class__: tusk_modules_Sound
};
var tusk_modules_tiled_Layer = function() { };
$hxClasses["tusk.modules.tiled.Layer"] = tusk_modules_tiled_Layer;
tusk_modules_tiled_Layer.__name__ = ["tusk","modules","tiled","Layer"];
tusk_modules_tiled_Layer.prototype = {
	__class__: tusk_modules_tiled_Layer
};
var tusk_modules_tiled_Object = function() { };
$hxClasses["tusk.modules.tiled.Object"] = tusk_modules_tiled_Object;
tusk_modules_tiled_Object.__name__ = ["tusk","modules","tiled","Object"];
tusk_modules_tiled_Object.prototype = {
	__class__: tusk_modules_tiled_Object
};
var tusk_modules_tiled_TileMap = function() {
};
$hxClasses["tusk.modules.tiled.TileMap"] = tusk_modules_tiled_TileMap;
tusk_modules_tiled_TileMap.__name__ = ["tusk","modules","tiled","TileMap"];
tusk_modules_tiled_TileMap.fromJSON = function(json) {
	var tm = JSON.parse(json);
	return tm;
};
tusk_modules_tiled_TileMap.buildMesh = function(tm,path,zSpacing) {
	if(zSpacing == null) zSpacing = 0.1;
	var m = new tusk_resources_Mesh(path);
	m.vertices = [];
	m.uvs = [];
	if(tm.tilesets.length != 1) throw new js__$Boot_HaxeError(new tusk_debug_Exception("TileMap loader can only deal with singular tilesets for now!",null,null,{ fileName : "TileMap.hx", lineNumber : 53, className : "tusk.modules.tiled.TileMap", methodName : "buildMesh"}));
	var tileSize = glm__$Vec2_Vec2_$Impl_$._new(tm.tilesets[0].tilewidth,tm.tilesets[0].tileheight);
	var tileSizeInUV = glm__$Vec2_Vec2_$Impl_$._new(tm.tilesets[0].tilewidth / tm.tilesets[0].imagewidth,tm.tilesets[0].tileheight / tm.tilesets[0].imageheight);
	var tileUVBases = [];
	tileUVBases.push(null);
	var tilePos = glm__$Vec2_Vec2_$Impl_$._new(0,0);
	while(glm__$Vec2_Vec2_$Impl_$.get_y(tilePos) < tm.tilesets[0].imageheight) {
		glm__$Vec2_Vec2_$Impl_$.set_x(tilePos,0);
		while(glm__$Vec2_Vec2_$Impl_$.get_x(tilePos) < tm.tilesets[0].imagewidth) {
			tileUVBases.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(tilePos) / tm.tilesets[0].imagewidth,glm__$Vec2_Vec2_$Impl_$.get_y(tilePos) / tm.tilesets[0].imageheight));
			glm__$Vec2_Vec2_$Impl_$.set_x(tilePos,glm__$Vec2_Vec2_$Impl_$.get_x(tilePos) + tm.tilesets[0].tilewidth);
		}
		glm__$Vec2_Vec2_$Impl_$.set_y(tilePos,glm__$Vec2_Vec2_$Impl_$.get_y(tilePos) + tm.tilesets[0].tileheight);
	}
	var pos = glm__$Vec3_Vec3_$Impl_$._new(0,0,0);
	var _g = 0;
	var _g1 = tm.layers;
	while(_g < _g1.length) {
		var layer = _g1[_g];
		++_g;
		if(layer.type != "tilelayer") continue;
		glm__$Vec3_Vec3_$Impl_$.set_x(pos,0);
		glm__$Vec3_Vec3_$Impl_$.set_y(pos,layer.height * glm__$Vec2_Vec2_$Impl_$.get_y(tileSize));
		var _g2 = 0;
		var _g3 = layer.data;
		while(_g2 < _g3.length) {
			var gid = _g3[_g2];
			++_g2;
			if(gid != 0) {
				m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(pos),glm__$Vec3_Vec3_$Impl_$.get_y(pos),glm__$Vec3_Vec3_$Impl_$.get_z(pos)));
				m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(tileUVBases[gid]),glm__$Vec2_Vec2_$Impl_$.get_y(tileUVBases[gid]) + glm__$Vec2_Vec2_$Impl_$.get_y(tileSizeInUV)));
				m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(pos) + glm__$Vec2_Vec2_$Impl_$.get_x(tileSize),glm__$Vec3_Vec3_$Impl_$.get_y(pos),glm__$Vec3_Vec3_$Impl_$.get_z(pos)));
				m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(tileUVBases[gid]) + glm__$Vec2_Vec2_$Impl_$.get_x(tileSizeInUV),glm__$Vec2_Vec2_$Impl_$.get_y(tileUVBases[gid]) + glm__$Vec2_Vec2_$Impl_$.get_y(tileSizeInUV)));
				m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(pos) + glm__$Vec2_Vec2_$Impl_$.get_x(tileSize),glm__$Vec3_Vec3_$Impl_$.get_y(pos) + glm__$Vec2_Vec2_$Impl_$.get_y(tileSize),glm__$Vec3_Vec3_$Impl_$.get_z(pos)));
				m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(tileUVBases[gid]) + glm__$Vec2_Vec2_$Impl_$.get_x(tileSizeInUV),glm__$Vec2_Vec2_$Impl_$.get_y(tileUVBases[gid])));
				m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(pos) + glm__$Vec2_Vec2_$Impl_$.get_x(tileSize),glm__$Vec3_Vec3_$Impl_$.get_y(pos) + glm__$Vec2_Vec2_$Impl_$.get_y(tileSize),glm__$Vec3_Vec3_$Impl_$.get_z(pos)));
				m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(tileUVBases[gid]) + glm__$Vec2_Vec2_$Impl_$.get_x(tileSizeInUV),glm__$Vec2_Vec2_$Impl_$.get_y(tileUVBases[gid])));
				m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(pos),glm__$Vec3_Vec3_$Impl_$.get_y(pos) + glm__$Vec2_Vec2_$Impl_$.get_y(tileSize),glm__$Vec3_Vec3_$Impl_$.get_z(pos)));
				m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(tileUVBases[gid]),glm__$Vec2_Vec2_$Impl_$.get_y(tileUVBases[gid])));
				m.vertices.push(glm__$Vec3_Vec3_$Impl_$._new(glm__$Vec3_Vec3_$Impl_$.get_x(pos),glm__$Vec3_Vec3_$Impl_$.get_y(pos),glm__$Vec3_Vec3_$Impl_$.get_z(pos)));
				m.uvs.push(glm__$Vec2_Vec2_$Impl_$._new(glm__$Vec2_Vec2_$Impl_$.get_x(tileUVBases[gid]),glm__$Vec2_Vec2_$Impl_$.get_y(tileUVBases[gid]) + glm__$Vec2_Vec2_$Impl_$.get_y(tileSizeInUV)));
			}
			glm__$Vec3_Vec3_$Impl_$.set_x(pos,glm__$Vec3_Vec3_$Impl_$.get_x(pos) + glm__$Vec2_Vec2_$Impl_$.get_x(tileSize));
			if(glm__$Vec3_Vec3_$Impl_$.get_x(pos) >= layer.width * glm__$Vec2_Vec2_$Impl_$.get_x(tileSize)) {
				glm__$Vec3_Vec3_$Impl_$.set_x(pos,0);
				glm__$Vec3_Vec3_$Impl_$.set_y(pos,glm__$Vec3_Vec3_$Impl_$.get_y(pos) - glm__$Vec2_Vec2_$Impl_$.get_y(tileSize));
			}
		}
		glm__$Vec3_Vec3_$Impl_$.set_z(pos,glm__$Vec3_Vec3_$Impl_$.get_z(pos) + zSpacing);
	}
	return tusk_Tusk.assets.loadMesh(path,m);
};
tusk_modules_tiled_TileMap.prototype = {
	__class__: tusk_modules_tiled_TileMap
};
var tusk_modules_tiled_TileSet = function() { };
$hxClasses["tusk.modules.tiled.TileSet"] = tusk_modules_tiled_TileSet;
tusk_modules_tiled_TileSet.__name__ = ["tusk","modules","tiled","TileSet"];
tusk_modules_tiled_TileSet.prototype = {
	__class__: tusk_modules_tiled_TileSet
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
	if(texture == null) {
		var basePath = haxe_io_Path.directory(path);
		var texturePath = haxe_io_Path.join([basePath,font.imageFileName]);
		tusk_Tusk.assets.loadTexture(texturePath).then(function(fontTexture) {
			font.texture = fontTexture;
			def.resolve(font);
		});
	} else {
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
	clone: function(newPath) {
		var m = new tusk_resources_Material(newPath,this.shader);
		m.onRender = this.onRender;
		if(this.textures != null) {
			m.textures = [];
			var _g = 0;
			var _g1 = this.textures;
			while(_g < _g1.length) {
				var texture = _g1[_g];
				++_g;
				m.textures.push(texture);
			}
		}
		m.attributeFlags = this.attributeFlags;
		return m;
	}
	,setFloat: function(name,v) {
		var location = this.shader.getUniformLocation(name);
		snow_modules_opengl_web_GL.current_context.uniform1f(location,v);
	}
	,setVec2: function(name,vec) {
		var location = this.shader.getUniformLocation(name);
		snow_modules_opengl_web_GL.uniform2f(location,glm__$Vec2_Vec2_$Impl_$.get_x(vec),glm__$Vec2_Vec2_$Impl_$.get_y(vec));
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
haxe_Resource.content = [{ name : "particles.untextured.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnZhcnlpbmcgdmVjNCB2X2NvbG91cjsNCg0Kdm9pZCBtYWluKCkgew0KICAgIGdsX0ZyYWdDb2xvciA9IHZfY29sb3VyOw0KfQ"},{ name : "unlit.textured.coloured.vert", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uOw0KdW5pZm9ybSBtYXQ0IHZpZXc7DQp1bmlmb3JtIG1hdDQgbW9kZWw7DQoNCmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzIgdXY7DQoNCnZhcnlpbmcgdmVjMiB2X3V2Ow0KDQp2b2lkIG1haW4oKSB7DQoJdl91diA9IHV2Ow0KICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQocG9zaXRpb24sIDEuMCk7DQp9"},{ name : "Subatomic_Screen.fnt", data : "aW5mbyBmYWNlPVN1YmF0b21pY19TY3JlZW4gc2l6ZT02IGJvbGQ9MCBpdGFsaWM9MCBjaGFyc2V0PSB1bmljb2RlPSBzdHJldGNoSD0xMDAgc21vb3RoPTEgYWE9MSBwYWRkaW5nPTIsMiwyLDIgc3BhY2luZz0wLDAgb3V0bGluZT0wCmNvbW1vbiBsaW5lSGVpZ2h0PTggYmFzZT02IHNjYWxlVz0xMjggc2NhbGVIPTEyOCBwYWdlcz0xIHBhY2tlZD0wCnBhZ2UgaWQ9MCBmaWxlPSJTdWJhdG9taWNfU2NyZWVuLnBuZyIKY2hhcnMgY291bnQ9OTUKY2hhciBpZD0zMiB4PTIgeT0yIHdpZHRoPTAgaGVpZ2h0PTAgeG9mZnNldD0wIHlvZmZzZXQ9NiB4YWR2YW5jZT00IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MzMgeD0yIHk9NCB3aWR0aD0xIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9MyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTM0IHg9MiB5PTExIHdpZHRoPTMgaGVpZ2h0PTIgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT01IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MzUgeD01IHk9MiB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTM2IHg9MiB5PTE1IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MzcgeD0yIHk9MjIgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0zOCB4PTIgeT0yOSB3aWR0aD02IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9OCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTM5IHg9NyB5PTkgd2lkdGg9MSBoZWlnaHQ9MiB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTMgcGFnZT0wIGNobmw9MTUKY2hhciBpZD00MCB4PTkgeT0xMyB3aWR0aD0yIGhlaWdodD03IHhvZmZzZXQ9MCB5b2Zmc2V0PTAgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTQxIHg9MTIgeT0yIHdpZHRoPTIgaGVpZ2h0PTcgeG9mZnNldD0wIHlvZmZzZXQ9MCB4YWR2YW5jZT00IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NDIgeD05IHk9MjIgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTggcGFnZT0wIGNobmw9MTUKY2hhciBpZD00MyB4PTEzIHk9MTEgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD00NCB4PTEzIHk9MTggd2lkdGg9MSBoZWlnaHQ9MiB4b2Zmc2V0PTAgeW9mZnNldD01IHhhZHZhbmNlPTMgcGFnZT0wIGNobmw9MTUKY2hhciBpZD00NSB4PTE2IHk9MiB3aWR0aD01IGhlaWdodD0xIHhvZmZzZXQ9MCB5b2Zmc2V0PTMgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTQ2IHg9MTYgeT01IHdpZHRoPTEgaGVpZ2h0PTEgeG9mZnNldD0wIHlvZmZzZXQ9NSB4YWR2YW5jZT0zIHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NDcgeD0yIHk9MzYgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD00OCB4PTIgeT00MyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTQ5IHg9MiB5PTUwIHdpZHRoPTIgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT00IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTAgeD0yIHk9NTcgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD01MSB4PTYgeT01MCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTUyIHg9OSB5PTM2IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTMgeD0xMCB5PTI5IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTQgeD05IHk9NDMgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD01NSB4PTE2IHk9MTggd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD01NiB4PTIwIHk9NSB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTU3IHg9MiB5PTY0IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTggeD0yMCB5PTEyIHdpZHRoPTEgaGVpZ2h0PTMgeG9mZnNldD0wIHlvZmZzZXQ9MyB4YWR2YW5jZT0zIHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NTkgeD0yIHk9NzEgd2lkdGg9MSBoZWlnaHQ9NCB4b2Zmc2V0PTAgeW9mZnNldD0zIHhhZHZhbmNlPTMgcGFnZT0wIGNobmw9MTUKY2hhciBpZD02MCB4PTIgeT03NyB3aWR0aD0zIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTYxIHg9NSB5PTcxIHdpZHRoPTUgaGVpZ2h0PTMgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NjIgeD05IHk9NTcgd2lkdGg9MyBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTUgcGFnZT0wIGNobmw9MTUKY2hhciBpZD02MyB4PTEzIHk9NTAgd2lkdGg9NCBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD02NCB4PTkgeT02NCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY1IHg9MTQgeT01NyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY2IHg9MTYgeT0zNiB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY3IHg9MTYgeT00MyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY4IHg9MTkgeT01MCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTY5IHg9MTcgeT0yNSB3aWR0aD00IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTcwIHg9MjMgeT0xMiB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTcxIHg9MjcgeT0yIHdpZHRoPTUgaGVpZ2h0PTcgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzIgeD0yMyB5PTE5IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzMgeD0yMyB5PTI2IHdpZHRoPTEgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT0zIHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzQgeD0yMyB5PTMzIHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzUgeD0yNiB5PTI2IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzYgeD0yMyB5PTQwIHdpZHRoPTQgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT02IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzcgeD0zMCB5PTExIHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzggeD0zMCB5PTE4IHdpZHRoPTUgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9NzkgeD0zNCB5PTIgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04MCB4PTIgeT04NCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTgxIHg9MiB5PTkxIHdpZHRoPTUgaGVpZ2h0PTcgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9ODIgeD03IHk9NzYgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04MyB4PTIgeT0xMDAgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04NCB4PTIgeT0xMDcgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04NSB4PTIgeT0xMTQgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04NiB4PTIgeT0xMjEgd2lkdGg9NSBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTcgcGFnZT0wIGNobmw9MTUKY2hhciBpZD04NyB4PTkgeT04MyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTg4IHg9MTQgeT03MSB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTg5IHg9MTYgeT02NCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTkwIHg9MjEgeT01NyB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTkxIHg9MjYgeT00NyB3aWR0aD0yIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTkyIHg9MjkgeT00MCB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTkzIHg9MzAgeT0zMyB3aWR0aD0yIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk0IHg9MTcgeT0zMiB3aWR0aD0zIGhlaWdodD0yIHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk1IHg9MjYgeT01NCB3aWR0aD01IGhlaWdodD0xIHhvZmZzZXQ9MCB5b2Zmc2V0PTUgeGFkdmFuY2U9NyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk2IHg9MTQgeT03OCB3aWR0aD0yIGhlaWdodD0yIHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk3IHg9MzAgeT00NyB3aWR0aD00IGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk4IHg9MzMgeT0yNSB3aWR0aD01IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTk5IHg9MzQgeT0zMiB3aWR0aD0zIGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwMCB4PTM3IHk9OSB3aWR0aD00IGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwMSB4PTQxIHk9MiB3aWR0aD00IGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwMiB4PTM3IHk9MTYgd2lkdGg9MyBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTUgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMDMgeD05IHk9OTAgd2lkdGg9NCBoZWlnaHQ9NiB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMDQgeD05IHk9OTggd2lkdGg9NCBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMDUgeD05IHk9MTA1IHdpZHRoPTEgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT0zIHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTA2IHg9OSB5PTExMiB3aWR0aD0yIGhlaWdodD03IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NCBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwNyB4PTEyIHk9MTA1IHdpZHRoPTMgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT01IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTA4IHg9OSB5PTEyMSB3aWR0aD0xIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9MyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEwOSB4PTEyIHk9MTIxIHdpZHRoPTUgaGVpZ2h0PTQgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTEwIHg9MTMgeT0xMTIgd2lkdGg9NCBoZWlnaHQ9NCB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMTEgeD0xNSB5PTkwIHdpZHRoPTQgaGVpZ2h0PTQgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT02IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTEyIHg9MTYgeT04MiB3aWR0aD00IGhlaWdodD02IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTExMyB4PTE1IHk9OTYgd2lkdGg9NCBoZWlnaHQ9NiB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMTQgeD0xNyB5PTEwNCB3aWR0aD0zIGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTExNSB4PTIxIHk9NzEgd2lkdGg9NCBoZWlnaHQ9NCB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMTYgeD0yMyB5PTY0IHdpZHRoPTIgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT00IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTE3IHg9MjEgeT05MCB3aWR0aD00IGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTExOCB4PTIxIHk9OTYgd2lkdGg9NCBoZWlnaHQ9NCB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMTkgeD0yMiB5PTc3IHdpZHRoPTUgaGVpZ2h0PTQgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT03IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTIwIHg9MjIgeT04MyB3aWR0aD0zIGhlaWdodD00IHhvZmZzZXQ9MCB5b2Zmc2V0PTIgeGFkdmFuY2U9NSBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEyMSB4PTI3IHk9NjQgd2lkdGg9NCBoZWlnaHQ9NiB4b2Zmc2V0PTAgeW9mZnNldD0yIHhhZHZhbmNlPTYgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMjIgeD0yOCB5PTU3IHdpZHRoPTQgaGVpZ2h0PTQgeG9mZnNldD0wIHlvZmZzZXQ9MiB4YWR2YW5jZT02IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTIzIHg9MTkgeT0xMTAgd2lkdGg9MyBoZWlnaHQ9NSB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTUgcGFnZT0wIGNobmw9MTUKY2hhciBpZD0xMjQgeD0yMiB5PTEwMiB3aWR0aD0xIGhlaWdodD01IHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9MyBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTEyNSB4PTE5IHk9MTE3IHdpZHRoPTMgaGVpZ2h0PTUgeG9mZnNldD0wIHlvZmZzZXQ9MSB4YWR2YW5jZT01IHBhZ2U9MCBjaG5sPTE1CmNoYXIgaWQ9MTI2IHg9MzMgeT01MyB3aWR0aD00IGhlaWdodD0yIHhvZmZzZXQ9MCB5b2Zmc2V0PTEgeGFkdmFuY2U9NiBwYWdlPTAgY2hubD0xNQpjaGFyIGlkPTMyIHg9MCB5PTAgd2lkdGg9MCBoZWlnaHQ9MCB4b2Zmc2V0PTAgeW9mZnNldD0xIHhhZHZhbmNlPTQgcGFnZT0wIGNobmw9MTU"},{ name : "effect.fadeout.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gZmxvYXQgZmFkZUFscGhhOw0KDQp2YXJ5aW5nIHZlYzIgdl91djsNCg0Kdm9pZCBtYWluKCkgew0KCWdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgZmFkZUFscGhhKTsNCn0"},{ name : "unlit.textured.vert", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uOw0KdW5pZm9ybSBtYXQ0IHZpZXc7DQp1bmlmb3JtIG1hdDQgbW9kZWw7DQoNCmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzIgdXY7DQoNCnZhcnlpbmcgdmVjMiB2X3V2Ow0KDQp2b2lkIG1haW4oKSB7DQoJdl91diA9IHV2Ow0KICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQocG9zaXRpb24sIDEuMCk7DQp9"},{ name : "blazingmammothgames.png", data : "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"},{ name : "Subatomic_Screen.png", data : "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADmUlEQVR42u3dXZLjIAwE4Nxs73+q3X1MZTwgYZKA+Polk9+acrelbozh8QAA+IG///H8+Pr68/NX9H73t8+2fiPy2zCR/B5Rd0QVee/5+bMYieDNZ3yvAswSwCuZPQEg/oMCyFSAVrmOtI/Ie0SwUQXIeoaoB4CFxRKtALNaCXyB1Az50QrgqBcRxWgFeOf/AF8UwOwoiokPkp054HfIiSYCAthMAFHX//y8NSZAABuOE2TiYmvIWQtY3Av0KkBLKLOGl+FNxitShu/kfALYyAO84+JPVIyYWSB6fZoIxC9WCSJX6rKmzdW/Tfp/NpqNXuIV/QqmhegkDwIoGhWjMVDJX6gFRDP+yOvGATY5g3uTQ2YYPdiolLciIhxQBSIV4I5AiGpB8md7gOhYAiY2H0PIVJSGGP44qkV8Q+QsJ4BFo2A00/9GcKYCaAELx8BRoyb3b14BWhd9HK3iffzu/P/ZLQi+6OZ7FaA3QtibFKolqDIEoM1oActn+178y8wHcNZvSP4Iqb1xA0d7I/J7BCO0IPlXJBvgOYj8iJHLTicnEqIiAlWFCJYkLDISGH0vQjARLHq2jtwIcvW9SEIggg0EsMp9g7BABRADeYDwe6+fyX4PDvcYQADwDZJG1vTNmkUtYMH+n41qlnwvXqYzO3hIBMUEkCXzjgBGFqqEL3mASE/P7C2EfACAJVJAdmLHSLkX/zZNBCOGz6ygTatA1iTOWFACFo2AsyuCFrCBB8jeLj5j+VgAAFjSBM7eDlZb2Cj2RUnv3f9HAJsZwSuCs9cGVIACFSG6Umj0NcmgkAeI5P6RcQcoLjJHAmDlnp8d5zfn/2DRWP7lwAoQMXOEsKkAZlUA5B8kGGQXHxdA8KFeYPQsH91pDBYr66MLQxBAARN4dxMJ5BczdlkiCeCQOAiSgpRwQlXobfXuhs+imX9EAMgvZAB7AsjeGQRFK4AEUNj9R3cMAfEPAI7J+5lt42Fjkmf8DZvHQAI4VADZFtAbH4CFBRDZCNrROswDtM50OHw8oLekDNEUFgETeLggXArmDR52EytKdLakI7xw3yeAw0v9iKkjiMPiIAEU7f8ZssW/A6rB6AZSUEwMd28bg8VbQCsGOtsPM39G+QiAAMS/XCtxJOV/qBwFmUFiuCSdCIqU/pFZwjwAAcAJAgACEAGriuCuuycAIALkQykP0NpLgAc4UABXj0AAUEUEo0vGQVETh2QAgIr4B8giiaxv8TqWAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC"},{ name : "unlit.textured.coloured.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7DQp1bmlmb3JtIHZlYzQgY29sb3VyOw0KDQp2YXJ5aW5nIHZlYzIgdl91djsNCg0Kdm9pZCBtYWluKCkgew0KICAgIGdsX0ZyYWdDb2xvciA9IGNvbG91ciAqIHRleHR1cmUyRCh0ZXh0dXJlLCB2X3V2KTsNCn0"},{ name : "effect.circleout.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uQ2VudGVyOw0KdW5pZm9ybSBmbG9hdCBjaXJjbGVEaXN0YW5jZTsNCg0KdmFyeWluZyB2ZWMyIHZfdXY7DQoNCnZvaWQgbWFpbigpIHsNCgl2ZWMyIGRlbHRhID0gYWJzKGdsX0ZyYWdDb29yZC54eSAtIHJlc29sdXRpb25DZW50ZXIpOw0KCWdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAwLjAsIDAuMCwgc3RlcChjaXJjbGVEaXN0YW5jZSwgbGVuZ3RoKGRlbHRhKSkpOw0KfQ"},{ name : "unlit.coloured.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnZhcnlpbmcgdmVjNCB2X2NvbG91cjsNCg0Kdm9pZCBtYWluKCkgew0KICAgIGdsX0ZyYWdDb2xvciA9IHZfY29sb3VyOw0KfQ"},{ name : "particles.untextured.vert", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uOw0KdW5pZm9ybSBtYXQ0IHZpZXc7DQp1bmlmb3JtIG1hdDQgbW9kZWw7DQoNCmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzQgY29sb3VyOw0KYXR0cmlidXRlIGZsb2F0IHBvaW50U2l6ZTsNCg0KdmFyeWluZyB2ZWM0IHZfY29sb3VyOw0KDQp2b2lkIG1haW4oKSB7DQoJdl9jb2xvdXIgPSBjb2xvdXI7DQoJZ2xfUG9pbnRTaXplID0gcG9pbnRTaXplOw0KCWdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQocG9zaXRpb24sIDEuMCk7DQp9"},{ name : "technologies.png", data : "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaldC9a1MBGMXh5yZKRSMdDOLQ4Q7BQRoxUYJu2iJVKaXECkl0SW7zISRNuDdFiqODa4cOfuBiERdn3cR/QBAE7aSDqzgouEiJQwopQgfP9OMcDu/LIVXpRr3k0Dl6a8O4vDAXVqq1cOqrjMBJeYV6lAyuLC8vOlC/PwngY74b9RL/p2OrzSQiOILL0SAeElzD0r3hYEjwCNmoU18leIXZuFKtEewg2xjzd2TblWqNFGTjlfI8qSzC9j5u7OOoE/dIXUCu112P9v4JkGmu3bqJHGYkyhbMCV131bySgktKSvKKzipwQL+IGUv6QpG+gQ2xu9o6hmaF1iWaQi2xpqauDahUa+G/2yat88XxhcwNDn8bjX6dYeopuw9Hoz/PR6PdbdI7vNua9PtbXPxBenPi5Z4x/YDXbyde4wVvNjn1ZVCP6yCNVKvFz5ccr3LiA0dvj3fby21/ZuU+i+95/ITTLabv/AVMhmdalRzY9wAAQZRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDktMDVUMTE6MTg6MzktMDI6MzA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE1LTEyLTAxVDE2OjIxOjA1LTA3OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNS0xMi0wMVQxNjoyMTowNS0wNzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxwaG90b3Nob3A6VGV4dExheWVycz4KICAgICAgICAgICAgPHJkZjpCYWc+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyTmFtZT5Qcm91ZGx5IGNyZWF0ZWQgd2l0aDwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ+UHJvdWRseSBjcmVhdGVkIHdpdGg8L3Bob3Rvc2hvcDpMYXllclRleHQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOlRleHRMYXllcnM+CiAgICAgICAgIDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MmZlMDYwMGQtNmQzNy00N2QyLWE1MTMtODQwMTdlY2FmOTJmPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2MDE4OWEyNi0xNTgzLTRiMGEtOTM0ZS0xNGQwNGY0NzE0ZTU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjg2ZGY3OGVjLTFiYTQtNGNhMy04Mjk4LTgyNDMyNGRmMWU4YzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6YmY4YTNlNTUtYWJiNy0zNTQ4LWJiMTMtMjFjYTI4YmExMTU5PC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6Y2I5YjEzNjItYTBiMi03YTRmLThhMDItZjIzZmQ5MzllYTlhPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjYwMTg5YTI2LTE1ODMtNGIwYS05MzRlLTE0ZDA0ZjQ3MTRlNTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjEwNzhmZjE2LTBiZTUtNDkzZS04YTVlLTM0N2NkOGVjMTkxZTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxMDc4ZmYxNi0wYmU1LTQ5M2UtOGE1ZS0zNDdjZDhlYzE5MWU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDktMDVUMTE6MTg6MzktMDI6MzA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowY2U5MTQxOS0zZjU3LTRkOTktYTkzYS03MjUyN2Q1MzIxMzI8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTItMDFUMTk6MjM6NDYtMDM6MzA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpjYjliMTM2Mi1hMGIyLTdhNGYtOGEwMi1mMjNmZDkzOWVhOWE8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTItMDFUMTY6MjE6MDUtMDc6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDoxMDc4ZmYxNi0wYmU1LTQ5M2UtOGE1ZS0zNDdjZDhlYzE5MWU8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6NjAxODlhMjYtMTU4My00YjBhLTkzNGUtMTRkMDRmNDcxNGU1PC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICAgICA8c3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6MTA3OGZmMTYtMGJlNS00OTNlLThhNWUtMzQ3Y2Q4ZWMxOTFlPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEwMjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTAyNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+1/oTzQAAACBjSFJNAAB6JwAAgI8AAPn/AACA6AAAdTAAAOpfAAA6lwAAF293mP3TAAB93UlEQVR42uzdd5xdZZ0/8O+5U9IzCR1CAOkl9J7QeygqSNN11bVhWVBkwXWXXVfFXX8gRdFdUWwoGJoiYAi9JkhvoXeSUJIA6ZnJzNzz++NO7zP33CnJ+/16zSswmbn3nOc89+Z+P+cpyYSJW6QBAAAArNZymgAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAAAgBNAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAA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WVlmw3RbFv35NB9Lly2L996bH6+99no8/czsuPuue+Phhx+N559/Id54482YP39+LF26NPJpvugw4O133mn+5E2fusqee+weJ55wfHR2CXpbIHa17sQmEyfE7357eVRUVKw526OlER//+EfjrG99o+f9PI1YvnxFPDBzZiaHsP0O28Xo0aMzeJ10PqR9ow03iB0m7ZB5822w/nqx9tprlW4aQFpolb323DOTh3v99Tdi3ry3I03z3l8A+qhcEwD08jNt2nGhvuOk7WP//acUfec1SZJWtcTTTz8Tv/nN7+Ohhx+O2traWLWqNlbV1saqVauirq4+crkkKioqoqK8PCoqKqK8vDwqKyti5512ipNO/kTstuuuMX78uFYfyntSIM6b93YkSU/vBA6OgrOpkOlpPZNGyYrlxkXrvvOdc+K2O+6IhQs/iI6GLadpRPf1V9rFvP8kxowZHVdc8ZumXRNK3saDoH1btvEZZ3w9nnvu+bh5+oxI8/ku+0DacA4zZtwWRx11RNEF7oYbbBBjRo+KJUuWNpxrR0PT+zJcvXlax7bbbB0jRgzP9GWW5tOorKyMyfvsE2++OafD4yz0zZ4ce2fJVMSo0aNizz12z+SYb7/9zqitre2kX0YIKwEEAABZlhudrroekcZ5P/he4e5rvsh5rknE/PkL4i9/+Wtc8ccrY86cuZHP56Ow80D7uc319RG1tXXtHmfO3Lfjb7fMiPKysth+++3i8MMPi8MOOTgm7bhD4Xm6Kc6effa56Pl+633Zl700BemqVauitrYu6uvr4sMPF8W777wb73/wQQwfNizGjR8f66+3XowZOzoqKytj+PDhzaFBCYrVNE1jrbXGx9e/+pX43g/+u4tisKsiq7uh/0lceMGPYssttihZ8d+2jaurq6O2tjZqalbFO++8EwvmL4jqmppYe621YsMNN4zxa42LXK4shg8fFmVlZSUNAxpDgIsuuiCefmZ2vDVnbiEE6KZuvfW226OmpiaGVQ7r83EV1gEojwMPOCCumnZNJz9TTMBTsP/++0WSJCW5vscf/7G4+trror4+y9dw2vS+sNmmm8S48eMyeegHZs7qtJ161s4ACAAAMrDF5pvHbkVu0dVYZF1++W/j/11wYaxYsaLVh9umgq9lzd1JkdhYKKRJxKp8Gk8+9Uw8+dQzcdHFP4n9pkyOb5zxz7H3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AAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAQAAAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAEAAAAAAAAgAAAABAAAAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAABAAAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAIAAQBMAAACAAAAAAAAQAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAgAAAAAAAEAAAAAIAAAAAAABAAAAAAAAIAAAAAQAAAAAAACAAAAAAAAQAAAAAIAAAAAAABAAAAACAAAAAAAAQAAAAAgAAAAAAAEAAAAAAAAgAAAABAAAAAAAACAAAAAEAAAAAAAAgAAAAAAAEAAAAA/58dOyABAAAAEPT/dTsCnSEIAAAAAEAAAAAAAAIAAAAAEAAAAACAAAAAAAABAAAAAAgAAAAAQAAAAAAAAgAAAAAQAAAAAIAAAAAAAAQAAAAAIAAAAABAAAAAAAACAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAEAAAAACAAAAAAAAEAAAAACAAAAAAAAEAAAAACAAAAABAAAAAAAACAAAAABAAAAAAIAAAAAAAAQAAAAAIAAAAAEAAAAAAAAIAAAAAEAAAAACAAAAAAAAEAAAAAAgAAAAAQAAAAAAATwEAAP//AwDCUED8rClxvwAAAABJRU5ErkJggg"},{ name : "unlit.textured.frag", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7DQoNCnZhcnlpbmcgdmVjMiB2X3V2Ow0KDQp2b2lkIG1haW4oKSB7DQogICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUsIHZfdXYpOw0KfQ"},{ name : "unlit.coloured.vert", data : "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7DQpwcmVjaXNpb24gbWVkaXVtcCBpbnQ7DQoNCnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uOw0KdW5pZm9ybSBtYXQ0IHZpZXc7DQp1bmlmb3JtIG1hdDQgbW9kZWw7DQoNCmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uOw0KYXR0cmlidXRlIHZlYzQgY29sb3VyOw0KDQp2YXJ5aW5nIHZlYzQgdl9jb2xvdXI7DQoNCnZvaWQgbWFpbigpIHsNCgl2X2NvbG91ciA9IGNvbG91cjsNCglnbF9Qb2ludFNpemUgPSAyLjA7DQoJZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogdmVjNChwb3NpdGlvbiwgMS4wKTsNCn0"}];
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
LoadingScreen.salutations = ["Mr.","Mrs.","Ms.","Dr.","The"];
LoadingScreen.adjectives = ["Purple","Green","Fast","Slow","Time-Travelling","Time Traveller's"];
LoadingScreen.nouns = ["Wife","Husband","Son","Daughter","Lawyer"];
glm_GLM.degToRad = 0.017453292519943295;
glm_GLM.radToDeg = 57.29577951308232;
haxe_Serializer.USE_CACHE = false;
haxe_Serializer.USE_ENUM_INDEX = false;
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.DEFAULT_RESOLVER = Type;
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
loading_SlamComponent.tid = 12;
loading_SlideComponent.tid = 13;
promhx_base_AsyncBase.id_ctr = 0;
promhx_base_EventLoop.queue = new List();
snow_api_Debug._level = 1;
snow_api_Debug._log_width = 16;
snow_api_Promises.calls = [];
snow_api_Promises.defers = [];
snow_api_Timer.running_timers = [];
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.BYTES_PER_ELEMENT = 4;
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.BYTES_PER_ELEMENT = 4;
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.BYTES_PER_ELEMENT = 1;
snow_core_web_assets_Assets.POT = true;
snow_core_web_input_DOMKeys.dom_shift = 16;
snow_core_web_input_DOMKeys.dom_ctrl = 17;
snow_core_web_input_DOMKeys.dom_alt = 18;
snow_core_web_input_DOMKeys.dom_capslock = 20;
snow_core_web_input_DOMKeys.dom_pageup = 33;
snow_core_web_input_DOMKeys.dom_pagedown = 34;
snow_core_web_input_DOMKeys.dom_end = 35;
snow_core_web_input_DOMKeys.dom_home = 36;
snow_core_web_input_DOMKeys.dom_left = 37;
snow_core_web_input_DOMKeys.dom_up = 38;
snow_core_web_input_DOMKeys.dom_right = 39;
snow_core_web_input_DOMKeys.dom_down = 40;
snow_core_web_input_DOMKeys.dom_printscr = 44;
snow_core_web_input_DOMKeys.dom_insert = 45;
snow_core_web_input_DOMKeys.dom_delete = 46;
snow_core_web_input_DOMKeys.dom_lmeta = 91;
snow_core_web_input_DOMKeys.dom_rmeta = 93;
snow_core_web_input_DOMKeys.dom_kp_0 = 96;
snow_core_web_input_DOMKeys.dom_kp_1 = 97;
snow_core_web_input_DOMKeys.dom_kp_2 = 98;
snow_core_web_input_DOMKeys.dom_kp_3 = 99;
snow_core_web_input_DOMKeys.dom_kp_4 = 100;
snow_core_web_input_DOMKeys.dom_kp_5 = 101;
snow_core_web_input_DOMKeys.dom_kp_6 = 102;
snow_core_web_input_DOMKeys.dom_kp_7 = 103;
snow_core_web_input_DOMKeys.dom_kp_8 = 104;
snow_core_web_input_DOMKeys.dom_kp_9 = 105;
snow_core_web_input_DOMKeys.dom_kp_multiply = 106;
snow_core_web_input_DOMKeys.dom_kp_plus = 107;
snow_core_web_input_DOMKeys.dom_kp_minus = 109;
snow_core_web_input_DOMKeys.dom_kp_decimal = 110;
snow_core_web_input_DOMKeys.dom_kp_divide = 111;
snow_core_web_input_DOMKeys.dom_kp_numlock = 144;
snow_core_web_input_DOMKeys.dom_f1 = 112;
snow_core_web_input_DOMKeys.dom_f2 = 113;
snow_core_web_input_DOMKeys.dom_f3 = 114;
snow_core_web_input_DOMKeys.dom_f4 = 115;
snow_core_web_input_DOMKeys.dom_f5 = 116;
snow_core_web_input_DOMKeys.dom_f6 = 117;
snow_core_web_input_DOMKeys.dom_f7 = 118;
snow_core_web_input_DOMKeys.dom_f8 = 119;
snow_core_web_input_DOMKeys.dom_f9 = 120;
snow_core_web_input_DOMKeys.dom_f10 = 121;
snow_core_web_input_DOMKeys.dom_f11 = 122;
snow_core_web_input_DOMKeys.dom_f12 = 123;
snow_core_web_input_DOMKeys.dom_f13 = 124;
snow_core_web_input_DOMKeys.dom_f14 = 125;
snow_core_web_input_DOMKeys.dom_f15 = 126;
snow_core_web_input_DOMKeys.dom_f16 = 127;
snow_core_web_input_DOMKeys.dom_f17 = 128;
snow_core_web_input_DOMKeys.dom_f18 = 129;
snow_core_web_input_DOMKeys.dom_f19 = 130;
snow_core_web_input_DOMKeys.dom_f20 = 131;
snow_core_web_input_DOMKeys.dom_f21 = 132;
snow_core_web_input_DOMKeys.dom_f22 = 133;
snow_core_web_input_DOMKeys.dom_f23 = 134;
snow_core_web_input_DOMKeys.dom_f24 = 135;
snow_core_web_input_DOMKeys.dom_caret = 160;
snow_core_web_input_DOMKeys.dom_exclaim = 161;
snow_core_web_input_DOMKeys.dom_quotedbl = 162;
snow_core_web_input_DOMKeys.dom_hash = 163;
snow_core_web_input_DOMKeys.dom_dollar = 164;
snow_core_web_input_DOMKeys.dom_percent = 165;
snow_core_web_input_DOMKeys.dom_ampersand = 166;
snow_core_web_input_DOMKeys.dom_underscore = 167;
snow_core_web_input_DOMKeys.dom_leftparen = 168;
snow_core_web_input_DOMKeys.dom_rightparen = 169;
snow_core_web_input_DOMKeys.dom_asterisk = 170;
snow_core_web_input_DOMKeys.dom_plus = 171;
snow_core_web_input_DOMKeys.dom_pipe = 172;
snow_core_web_input_DOMKeys.dom_minus = 173;
snow_core_web_input_DOMKeys.dom_leftbrace = 174;
snow_core_web_input_DOMKeys.dom_rightbrace = 175;
snow_core_web_input_DOMKeys.dom_tilde = 176;
snow_core_web_input_DOMKeys.dom_audiomute = 181;
snow_core_web_input_DOMKeys.dom_volumedown = 182;
snow_core_web_input_DOMKeys.dom_volumeup = 183;
snow_core_web_input_DOMKeys.dom_comma = 188;
snow_core_web_input_DOMKeys.dom_period = 190;
snow_core_web_input_DOMKeys.dom_slash = 191;
snow_core_web_input_DOMKeys.dom_backquote = 192;
snow_core_web_input_DOMKeys.dom_leftbracket = 219;
snow_core_web_input_DOMKeys.dom_rightbracket = 221;
snow_core_web_input_DOMKeys.dom_backslash = 220;
snow_core_web_input_DOMKeys.dom_quote = 222;
snow_core_web_input_DOMKeys.dom_meta = 224;
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
snow_system_input_Scancodes.minus = 45;
snow_system_input_Scancodes.equals = 46;
snow_system_input_Scancodes.leftbracket = 47;
snow_system_input_Scancodes.rightbracket = 48;
snow_system_input_Scancodes.backslash = 49;
snow_system_input_Scancodes.nonushash = 50;
snow_system_input_Scancodes.semicolon = 51;
snow_system_input_Scancodes.apostrophe = 52;
snow_system_input_Scancodes.grave = 53;
snow_system_input_Scancodes.comma = 54;
snow_system_input_Scancodes.period = 55;
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
snow_system_input_Scancodes.scrolllock = 71;
snow_system_input_Scancodes.pause = 72;
snow_system_input_Scancodes.insert = 73;
snow_system_input_Scancodes.home = 74;
snow_system_input_Scancodes.pageup = 75;
snow_system_input_Scancodes["delete"] = 76;
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
snow_system_input_Scancodes.kp_enter = 88;
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
snow_system_input_Scancodes.kp_period = 99;
snow_system_input_Scancodes.nonusbackslash = 100;
snow_system_input_Scancodes.application = 101;
snow_system_input_Scancodes.power = 102;
snow_system_input_Scancodes.kp_equals = 103;
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
snow_system_input_Scancodes.execute = 116;
snow_system_input_Scancodes.help = 117;
snow_system_input_Scancodes.menu = 118;
snow_system_input_Scancodes.select = 119;
snow_system_input_Scancodes.stop = 120;
snow_system_input_Scancodes.again = 121;
snow_system_input_Scancodes.undo = 122;
snow_system_input_Scancodes.cut = 123;
snow_system_input_Scancodes.copy = 124;
snow_system_input_Scancodes.paste = 125;
snow_system_input_Scancodes.find = 126;
snow_system_input_Scancodes.mute = 127;
snow_system_input_Scancodes.volumeup = 128;
snow_system_input_Scancodes.volumedown = 129;
snow_system_input_Scancodes.kp_comma = 133;
snow_system_input_Scancodes.kp_equalsas400 = 134;
snow_system_input_Scancodes.international1 = 135;
snow_system_input_Scancodes.international2 = 136;
snow_system_input_Scancodes.international3 = 137;
snow_system_input_Scancodes.international4 = 138;
snow_system_input_Scancodes.international5 = 139;
snow_system_input_Scancodes.international6 = 140;
snow_system_input_Scancodes.international7 = 141;
snow_system_input_Scancodes.international8 = 142;
snow_system_input_Scancodes.international9 = 143;
snow_system_input_Scancodes.lang1 = 144;
snow_system_input_Scancodes.lang2 = 145;
snow_system_input_Scancodes.lang3 = 146;
snow_system_input_Scancodes.lang4 = 147;
snow_system_input_Scancodes.lang5 = 148;
snow_system_input_Scancodes.lang6 = 149;
snow_system_input_Scancodes.lang7 = 150;
snow_system_input_Scancodes.lang8 = 151;
snow_system_input_Scancodes.lang9 = 152;
snow_system_input_Scancodes.alterase = 153;
snow_system_input_Scancodes.sysreq = 154;
snow_system_input_Scancodes.cancel = 155;
snow_system_input_Scancodes.clear = 156;
snow_system_input_Scancodes.prior = 157;
snow_system_input_Scancodes.return2 = 158;
snow_system_input_Scancodes.separator = 159;
snow_system_input_Scancodes.out = 160;
snow_system_input_Scancodes.oper = 161;
snow_system_input_Scancodes.clearagain = 162;
snow_system_input_Scancodes.crsel = 163;
snow_system_input_Scancodes.exsel = 164;
snow_system_input_Scancodes.kp_00 = 176;
snow_system_input_Scancodes.kp_000 = 177;
snow_system_input_Scancodes.thousandsseparator = 178;
snow_system_input_Scancodes.decimalseparator = 179;
snow_system_input_Scancodes.currencyunit = 180;
snow_system_input_Scancodes.currencysubunit = 181;
snow_system_input_Scancodes.kp_leftparen = 182;
snow_system_input_Scancodes.kp_rightparen = 183;
snow_system_input_Scancodes.kp_leftbrace = 184;
snow_system_input_Scancodes.kp_rightbrace = 185;
snow_system_input_Scancodes.kp_tab = 186;
snow_system_input_Scancodes.kp_backspace = 187;
snow_system_input_Scancodes.kp_a = 188;
snow_system_input_Scancodes.kp_b = 189;
snow_system_input_Scancodes.kp_c = 190;
snow_system_input_Scancodes.kp_d = 191;
snow_system_input_Scancodes.kp_e = 192;
snow_system_input_Scancodes.kp_f = 193;
snow_system_input_Scancodes.kp_xor = 194;
snow_system_input_Scancodes.kp_power = 195;
snow_system_input_Scancodes.kp_percent = 196;
snow_system_input_Scancodes.kp_less = 197;
snow_system_input_Scancodes.kp_greater = 198;
snow_system_input_Scancodes.kp_ampersand = 199;
snow_system_input_Scancodes.kp_dblampersand = 200;
snow_system_input_Scancodes.kp_verticalbar = 201;
snow_system_input_Scancodes.kp_dblverticalbar = 202;
snow_system_input_Scancodes.kp_colon = 203;
snow_system_input_Scancodes.kp_hash = 204;
snow_system_input_Scancodes.kp_space = 205;
snow_system_input_Scancodes.kp_at = 206;
snow_system_input_Scancodes.kp_exclam = 207;
snow_system_input_Scancodes.kp_memstore = 208;
snow_system_input_Scancodes.kp_memrecall = 209;
snow_system_input_Scancodes.kp_memclear = 210;
snow_system_input_Scancodes.kp_memadd = 211;
snow_system_input_Scancodes.kp_memsubtract = 212;
snow_system_input_Scancodes.kp_memmultiply = 213;
snow_system_input_Scancodes.kp_memdivide = 214;
snow_system_input_Scancodes.kp_plusminus = 215;
snow_system_input_Scancodes.kp_clear = 216;
snow_system_input_Scancodes.kp_clearentry = 217;
snow_system_input_Scancodes.kp_binary = 218;
snow_system_input_Scancodes.kp_octal = 219;
snow_system_input_Scancodes.kp_decimal = 220;
snow_system_input_Scancodes.kp_hexadecimal = 221;
snow_system_input_Scancodes.lctrl = 224;
snow_system_input_Scancodes.lshift = 225;
snow_system_input_Scancodes.lalt = 226;
snow_system_input_Scancodes.lmeta = 227;
snow_system_input_Scancodes.rctrl = 228;
snow_system_input_Scancodes.rshift = 229;
snow_system_input_Scancodes.ralt = 230;
snow_system_input_Scancodes.rmeta = 231;
snow_system_input_Scancodes.mode = 257;
snow_system_input_Scancodes.audionext = 258;
snow_system_input_Scancodes.audioprev = 259;
snow_system_input_Scancodes.audiostop = 260;
snow_system_input_Scancodes.audioplay = 261;
snow_system_input_Scancodes.audiomute = 262;
snow_system_input_Scancodes.mediaselect = 263;
snow_system_input_Scancodes.www = 264;
snow_system_input_Scancodes.mail = 265;
snow_system_input_Scancodes.calculator = 266;
snow_system_input_Scancodes.computer = 267;
snow_system_input_Scancodes.ac_search = 268;
snow_system_input_Scancodes.ac_home = 269;
snow_system_input_Scancodes.ac_back = 270;
snow_system_input_Scancodes.ac_forward = 271;
snow_system_input_Scancodes.ac_stop = 272;
snow_system_input_Scancodes.ac_refresh = 273;
snow_system_input_Scancodes.ac_bookmarks = 274;
snow_system_input_Scancodes.brightnessdown = 275;
snow_system_input_Scancodes.brightnessup = 276;
snow_system_input_Scancodes.displayswitch = 277;
snow_system_input_Scancodes.kbdillumtoggle = 278;
snow_system_input_Scancodes.kbdillumdown = 279;
snow_system_input_Scancodes.kbdillumup = 280;
snow_system_input_Scancodes.eject = 281;
snow_system_input_Scancodes.sleep = 282;
snow_system_input_Scancodes.app1 = 283;
snow_system_input_Scancodes.app2 = 284;
snow_system_input_Scancodes.scancode_names = [null,null,null,null,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","Enter","Escape","Backspace","Tab","Space","-","=","[","]","\\","#",";","'","`",",",".","/","CapsLock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","PrintScreen","ScrollLock","Pause","Insert","Home","PageUp","Delete","End","PageDown","Right","Left","Down","Up","Numlock","Keypad /","Keypad *","Keypad -","Keypad +","Keypad Enter","Keypad 1","Keypad 2","Keypad 3","Keypad 4","Keypad 5","Keypad 6","Keypad 7","Keypad 8","Keypad 9","Keypad 0","Keypad .",null,"Application","Power","Keypad =","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","Execute","Help","Menu","Select","Stop","Again","Undo","Cut","Copy","Paste","Find","Mute","VolumeUp","VolumeDown",null,null,null,"Keypad ,","Keypad = (AS400)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"AltErase","SysReq","Cancel","Clear","Prior","Enter","Separator","Out","Oper","Clear / Again","CrSel","ExSel",null,null,null,null,null,null,null,null,null,null,null,"Keypad 00","Keypad 000","ThousandsSeparator","DecimalSeparator","CurrencyUnit","CurrencySubUnit","Keypad (","Keypad )","Keypad {","Keypad }","Keypad Tab","Keypad Backspace","Keypad A","Keypad B","Keypad C","Keypad D","Keypad E","Keypad F","Keypad XOR","Keypad ^","Keypad %","Keypad <","Keypad >","Keypad &","Keypad &&","Keypad |","Keypad ||","Keypad :","Keypad #","Keypad Space","Keypad @","Keypad !","Keypad MemStore","Keypad MemRecall","Keypad MemClear","Keypad MemAdd","Keypad MemSubtract","Keypad MemMultiply","Keypad MemDivide","Keypad +/-","Keypad Clear","Keypad ClearEntry","Keypad Binary","Keypad Octal","Keypad Decimal","Keypad Hexadecimal",null,null,"Left Ctrl","Left Shift","Left Alt","Left Meta","Right Ctrl","Right Shift","Right Alt","Right Meta",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"ModeSwitch","AudioNext","AudioPrev","AudioStop","AudioPlay","AudioMute","MediaSelect","WWW","Mail","Calculator","Computer","AC Search","AC Home","AC Back","AC Forward","AC Stop","AC Refresh","AC Bookmarks","BrightnessDown","BrightnessUp","DisplaySwitch","KBDIllumToggle","KBDIllumDown","KBDIllumUp","Eject","Sleep"];
snow_system_input_Keycodes.unknown = 0;
snow_system_input_Keycodes.enter = 13;
snow_system_input_Keycodes.escape = 27;
snow_system_input_Keycodes.backspace = 8;
snow_system_input_Keycodes.tab = 9;
snow_system_input_Keycodes.space = 32;
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
snow_system_input_Keycodes.key_0 = 48;
snow_system_input_Keycodes.key_1 = 49;
snow_system_input_Keycodes.key_2 = 50;
snow_system_input_Keycodes.key_3 = 51;
snow_system_input_Keycodes.key_4 = 52;
snow_system_input_Keycodes.key_5 = 53;
snow_system_input_Keycodes.key_6 = 54;
snow_system_input_Keycodes.key_7 = 55;
snow_system_input_Keycodes.key_8 = 56;
snow_system_input_Keycodes.key_9 = 57;
snow_system_input_Keycodes.colon = 58;
snow_system_input_Keycodes.semicolon = 59;
snow_system_input_Keycodes.less = 60;
snow_system_input_Keycodes.equals = 61;
snow_system_input_Keycodes.greater = 62;
snow_system_input_Keycodes.question = 63;
snow_system_input_Keycodes.at = 64;
snow_system_input_Keycodes.leftbracket = 91;
snow_system_input_Keycodes.backslash = 92;
snow_system_input_Keycodes.rightbracket = 93;
snow_system_input_Keycodes.caret = 94;
snow_system_input_Keycodes.underscore = 95;
snow_system_input_Keycodes.backquote = 96;
snow_system_input_Keycodes.key_a = 97;
snow_system_input_Keycodes.key_b = 98;
snow_system_input_Keycodes.key_c = 99;
snow_system_input_Keycodes.key_d = 100;
snow_system_input_Keycodes.key_e = 101;
snow_system_input_Keycodes.key_f = 102;
snow_system_input_Keycodes.key_g = 103;
snow_system_input_Keycodes.key_h = 104;
snow_system_input_Keycodes.key_i = 105;
snow_system_input_Keycodes.key_j = 106;
snow_system_input_Keycodes.key_k = 107;
snow_system_input_Keycodes.key_l = 108;
snow_system_input_Keycodes.key_m = 109;
snow_system_input_Keycodes.key_n = 110;
snow_system_input_Keycodes.key_o = 111;
snow_system_input_Keycodes.key_p = 112;
snow_system_input_Keycodes.key_q = 113;
snow_system_input_Keycodes.key_r = 114;
snow_system_input_Keycodes.key_s = 115;
snow_system_input_Keycodes.key_t = 116;
snow_system_input_Keycodes.key_u = 117;
snow_system_input_Keycodes.key_v = 118;
snow_system_input_Keycodes.key_w = 119;
snow_system_input_Keycodes.key_x = 120;
snow_system_input_Keycodes.key_y = 121;
snow_system_input_Keycodes.key_z = 122;
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
snow_system_input_Keycodes.scrolllock = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.scrolllock);
snow_system_input_Keycodes.pause = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.pause);
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
snow_system_input_Keycodes.kp_enter = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_enter);
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
snow_system_input_Keycodes.kp_period = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_period);
snow_system_input_Keycodes.application = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.application);
snow_system_input_Keycodes.power = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.power);
snow_system_input_Keycodes.kp_equals = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_equals);
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
snow_system_input_Keycodes.execute = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.execute);
snow_system_input_Keycodes.help = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.help);
snow_system_input_Keycodes.menu = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.menu);
snow_system_input_Keycodes.select = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.select);
snow_system_input_Keycodes.stop = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.stop);
snow_system_input_Keycodes.again = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.again);
snow_system_input_Keycodes.undo = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.undo);
snow_system_input_Keycodes.cut = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.cut);
snow_system_input_Keycodes.copy = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.copy);
snow_system_input_Keycodes.paste = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.paste);
snow_system_input_Keycodes.find = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.find);
snow_system_input_Keycodes.mute = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.mute);
snow_system_input_Keycodes.volumeup = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.volumeup);
snow_system_input_Keycodes.volumedown = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.volumedown);
snow_system_input_Keycodes.kp_comma = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_comma);
snow_system_input_Keycodes.kp_equalsas400 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_equalsas400);
snow_system_input_Keycodes.alterase = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.alterase);
snow_system_input_Keycodes.sysreq = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.sysreq);
snow_system_input_Keycodes.cancel = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.cancel);
snow_system_input_Keycodes.clear = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.clear);
snow_system_input_Keycodes.prior = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.prior);
snow_system_input_Keycodes.return2 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.return2);
snow_system_input_Keycodes.separator = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.separator);
snow_system_input_Keycodes.out = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.out);
snow_system_input_Keycodes.oper = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.oper);
snow_system_input_Keycodes.clearagain = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.clearagain);
snow_system_input_Keycodes.crsel = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.crsel);
snow_system_input_Keycodes.exsel = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.exsel);
snow_system_input_Keycodes.kp_00 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_00);
snow_system_input_Keycodes.kp_000 = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_000);
snow_system_input_Keycodes.thousandsseparator = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.thousandsseparator);
snow_system_input_Keycodes.decimalseparator = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.decimalseparator);
snow_system_input_Keycodes.currencyunit = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.currencyunit);
snow_system_input_Keycodes.currencysubunit = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.currencysubunit);
snow_system_input_Keycodes.kp_leftparen = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_leftparen);
snow_system_input_Keycodes.kp_rightparen = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_rightparen);
snow_system_input_Keycodes.kp_leftbrace = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_leftbrace);
snow_system_input_Keycodes.kp_rightbrace = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_rightbrace);
snow_system_input_Keycodes.kp_tab = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_tab);
snow_system_input_Keycodes.kp_backspace = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_backspace);
snow_system_input_Keycodes.kp_a = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_a);
snow_system_input_Keycodes.kp_b = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_b);
snow_system_input_Keycodes.kp_c = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_c);
snow_system_input_Keycodes.kp_d = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_d);
snow_system_input_Keycodes.kp_e = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_e);
snow_system_input_Keycodes.kp_f = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_f);
snow_system_input_Keycodes.kp_xor = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_xor);
snow_system_input_Keycodes.kp_power = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_power);
snow_system_input_Keycodes.kp_percent = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_percent);
snow_system_input_Keycodes.kp_less = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_less);
snow_system_input_Keycodes.kp_greater = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_greater);
snow_system_input_Keycodes.kp_ampersand = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_ampersand);
snow_system_input_Keycodes.kp_dblampersand = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_dblampersand);
snow_system_input_Keycodes.kp_verticalbar = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_verticalbar);
snow_system_input_Keycodes.kp_dblverticalbar = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_dblverticalbar);
snow_system_input_Keycodes.kp_colon = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_colon);
snow_system_input_Keycodes.kp_hash = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_hash);
snow_system_input_Keycodes.kp_space = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_space);
snow_system_input_Keycodes.kp_at = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_at);
snow_system_input_Keycodes.kp_exclam = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_exclam);
snow_system_input_Keycodes.kp_memstore = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_memstore);
snow_system_input_Keycodes.kp_memrecall = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_memrecall);
snow_system_input_Keycodes.kp_memclear = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_memclear);
snow_system_input_Keycodes.kp_memadd = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_memadd);
snow_system_input_Keycodes.kp_memsubtract = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_memsubtract);
snow_system_input_Keycodes.kp_memmultiply = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_memmultiply);
snow_system_input_Keycodes.kp_memdivide = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_memdivide);
snow_system_input_Keycodes.kp_plusminus = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_plusminus);
snow_system_input_Keycodes.kp_clear = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_clear);
snow_system_input_Keycodes.kp_clearentry = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_clearentry);
snow_system_input_Keycodes.kp_binary = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_binary);
snow_system_input_Keycodes.kp_octal = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_octal);
snow_system_input_Keycodes.kp_decimal = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_decimal);
snow_system_input_Keycodes.kp_hexadecimal = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kp_hexadecimal);
snow_system_input_Keycodes.lctrl = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.lctrl);
snow_system_input_Keycodes.lshift = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.lshift);
snow_system_input_Keycodes.lalt = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.lalt);
snow_system_input_Keycodes.lmeta = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.lmeta);
snow_system_input_Keycodes.rctrl = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.rctrl);
snow_system_input_Keycodes.rshift = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.rshift);
snow_system_input_Keycodes.ralt = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.ralt);
snow_system_input_Keycodes.rmeta = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.rmeta);
snow_system_input_Keycodes.mode = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.mode);
snow_system_input_Keycodes.audionext = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.audionext);
snow_system_input_Keycodes.audioprev = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.audioprev);
snow_system_input_Keycodes.audiostop = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.audiostop);
snow_system_input_Keycodes.audioplay = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.audioplay);
snow_system_input_Keycodes.audiomute = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.audiomute);
snow_system_input_Keycodes.mediaselect = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.mediaselect);
snow_system_input_Keycodes.www = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.www);
snow_system_input_Keycodes.mail = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.mail);
snow_system_input_Keycodes.calculator = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.calculator);
snow_system_input_Keycodes.computer = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.computer);
snow_system_input_Keycodes.ac_search = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.ac_search);
snow_system_input_Keycodes.ac_home = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.ac_home);
snow_system_input_Keycodes.ac_back = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.ac_back);
snow_system_input_Keycodes.ac_forward = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.ac_forward);
snow_system_input_Keycodes.ac_stop = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.ac_stop);
snow_system_input_Keycodes.ac_refresh = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.ac_refresh);
snow_system_input_Keycodes.ac_bookmarks = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.ac_bookmarks);
snow_system_input_Keycodes.brightnessdown = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.brightnessdown);
snow_system_input_Keycodes.brightnessup = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.brightnessup);
snow_system_input_Keycodes.displayswitch = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.displayswitch);
snow_system_input_Keycodes.kbdillumtoggle = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kbdillumtoggle);
snow_system_input_Keycodes.kbdillumdown = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kbdillumdown);
snow_system_input_Keycodes.kbdillumup = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.kbdillumup);
snow_system_input_Keycodes.eject = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.eject);
snow_system_input_Keycodes.sleep = snow_system_input_Keycodes.from_scan(snow_system_input_Scancodes.sleep);
snow_core_web_input_Input._keypress_blacklist = [snow_system_input_Keycodes.backspace,snow_system_input_Keycodes.enter];
snow_modules_opengl_web_GL.DEPTH_BUFFER_BIT = 256;
snow_modules_opengl_web_GL.STENCIL_BUFFER_BIT = 1024;
snow_modules_opengl_web_GL.COLOR_BUFFER_BIT = 16384;
snow_modules_opengl_web_GL.POINTS = 0;
snow_modules_opengl_web_GL.LINES = 1;
snow_modules_opengl_web_GL.LINE_LOOP = 2;
snow_modules_opengl_web_GL.LINE_STRIP = 3;
snow_modules_opengl_web_GL.TRIANGLES = 4;
snow_modules_opengl_web_GL.TRIANGLE_STRIP = 5;
snow_modules_opengl_web_GL.TRIANGLE_FAN = 6;
snow_modules_opengl_web_GL.ZERO = 0;
snow_modules_opengl_web_GL.ONE = 1;
snow_modules_opengl_web_GL.SRC_COLOR = 768;
snow_modules_opengl_web_GL.ONE_MINUS_SRC_COLOR = 769;
snow_modules_opengl_web_GL.SRC_ALPHA = 770;
snow_modules_opengl_web_GL.ONE_MINUS_SRC_ALPHA = 771;
snow_modules_opengl_web_GL.DST_ALPHA = 772;
snow_modules_opengl_web_GL.ONE_MINUS_DST_ALPHA = 773;
snow_modules_opengl_web_GL.DST_COLOR = 774;
snow_modules_opengl_web_GL.ONE_MINUS_DST_COLOR = 775;
snow_modules_opengl_web_GL.SRC_ALPHA_SATURATE = 776;
snow_modules_opengl_web_GL.FUNC_ADD = 32774;
snow_modules_opengl_web_GL.BLEND_EQUATION = 32777;
snow_modules_opengl_web_GL.BLEND_EQUATION_RGB = 32777;
snow_modules_opengl_web_GL.BLEND_EQUATION_ALPHA = 34877;
snow_modules_opengl_web_GL.FUNC_SUBTRACT = 32778;
snow_modules_opengl_web_GL.FUNC_REVERSE_SUBTRACT = 32779;
snow_modules_opengl_web_GL.BLEND_DST_RGB = 32968;
snow_modules_opengl_web_GL.BLEND_SRC_RGB = 32969;
snow_modules_opengl_web_GL.BLEND_DST_ALPHA = 32970;
snow_modules_opengl_web_GL.BLEND_SRC_ALPHA = 32971;
snow_modules_opengl_web_GL.CONSTANT_COLOR = 32769;
snow_modules_opengl_web_GL.ONE_MINUS_CONSTANT_COLOR = 32770;
snow_modules_opengl_web_GL.CONSTANT_ALPHA = 32771;
snow_modules_opengl_web_GL.ONE_MINUS_CONSTANT_ALPHA = 32772;
snow_modules_opengl_web_GL.BLEND_COLOR = 32773;
snow_modules_opengl_web_GL.ARRAY_BUFFER = 34962;
snow_modules_opengl_web_GL.ELEMENT_ARRAY_BUFFER = 34963;
snow_modules_opengl_web_GL.ARRAY_BUFFER_BINDING = 34964;
snow_modules_opengl_web_GL.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
snow_modules_opengl_web_GL.STREAM_DRAW = 35040;
snow_modules_opengl_web_GL.STATIC_DRAW = 35044;
snow_modules_opengl_web_GL.DYNAMIC_DRAW = 35048;
snow_modules_opengl_web_GL.BUFFER_SIZE = 34660;
snow_modules_opengl_web_GL.BUFFER_USAGE = 34661;
snow_modules_opengl_web_GL.CURRENT_VERTEX_ATTRIB = 34342;
snow_modules_opengl_web_GL.FRONT = 1028;
snow_modules_opengl_web_GL.BACK = 1029;
snow_modules_opengl_web_GL.FRONT_AND_BACK = 1032;
snow_modules_opengl_web_GL.CULL_FACE = 2884;
snow_modules_opengl_web_GL.BLEND = 3042;
snow_modules_opengl_web_GL.DITHER = 3024;
snow_modules_opengl_web_GL.STENCIL_TEST = 2960;
snow_modules_opengl_web_GL.DEPTH_TEST = 2929;
snow_modules_opengl_web_GL.SCISSOR_TEST = 3089;
snow_modules_opengl_web_GL.POLYGON_OFFSET_FILL = 32823;
snow_modules_opengl_web_GL.SAMPLE_ALPHA_TO_COVERAGE = 32926;
snow_modules_opengl_web_GL.SAMPLE_COVERAGE = 32928;
snow_modules_opengl_web_GL.NO_ERROR = 0;
snow_modules_opengl_web_GL.INVALID_ENUM = 1280;
snow_modules_opengl_web_GL.INVALID_VALUE = 1281;
snow_modules_opengl_web_GL.INVALID_OPERATION = 1282;
snow_modules_opengl_web_GL.OUT_OF_MEMORY = 1285;
snow_modules_opengl_web_GL.CW = 2304;
snow_modules_opengl_web_GL.CCW = 2305;
snow_modules_opengl_web_GL.LINE_WIDTH = 2849;
snow_modules_opengl_web_GL.ALIASED_POINT_SIZE_RANGE = 33901;
snow_modules_opengl_web_GL.ALIASED_LINE_WIDTH_RANGE = 33902;
snow_modules_opengl_web_GL.CULL_FACE_MODE = 2885;
snow_modules_opengl_web_GL.FRONT_FACE = 2886;
snow_modules_opengl_web_GL.DEPTH_RANGE = 2928;
snow_modules_opengl_web_GL.DEPTH_WRITEMASK = 2930;
snow_modules_opengl_web_GL.DEPTH_CLEAR_VALUE = 2931;
snow_modules_opengl_web_GL.DEPTH_FUNC = 2932;
snow_modules_opengl_web_GL.STENCIL_CLEAR_VALUE = 2961;
snow_modules_opengl_web_GL.STENCIL_FUNC = 2962;
snow_modules_opengl_web_GL.STENCIL_FAIL = 2964;
snow_modules_opengl_web_GL.STENCIL_PASS_DEPTH_FAIL = 2965;
snow_modules_opengl_web_GL.STENCIL_PASS_DEPTH_PASS = 2966;
snow_modules_opengl_web_GL.STENCIL_REF = 2967;
snow_modules_opengl_web_GL.STENCIL_VALUE_MASK = 2963;
snow_modules_opengl_web_GL.STENCIL_WRITEMASK = 2968;
snow_modules_opengl_web_GL.STENCIL_BACK_FUNC = 34816;
snow_modules_opengl_web_GL.STENCIL_BACK_FAIL = 34817;
snow_modules_opengl_web_GL.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
snow_modules_opengl_web_GL.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
snow_modules_opengl_web_GL.STENCIL_BACK_REF = 36003;
snow_modules_opengl_web_GL.STENCIL_BACK_VALUE_MASK = 36004;
snow_modules_opengl_web_GL.STENCIL_BACK_WRITEMASK = 36005;
snow_modules_opengl_web_GL.VIEWPORT = 2978;
snow_modules_opengl_web_GL.SCISSOR_BOX = 3088;
snow_modules_opengl_web_GL.COLOR_CLEAR_VALUE = 3106;
snow_modules_opengl_web_GL.COLOR_WRITEMASK = 3107;
snow_modules_opengl_web_GL.UNPACK_ALIGNMENT = 3317;
snow_modules_opengl_web_GL.PACK_ALIGNMENT = 3333;
snow_modules_opengl_web_GL.MAX_TEXTURE_SIZE = 3379;
snow_modules_opengl_web_GL.MAX_VIEWPORT_DIMS = 3386;
snow_modules_opengl_web_GL.SUBPIXEL_BITS = 3408;
snow_modules_opengl_web_GL.RED_BITS = 3410;
snow_modules_opengl_web_GL.GREEN_BITS = 3411;
snow_modules_opengl_web_GL.BLUE_BITS = 3412;
snow_modules_opengl_web_GL.ALPHA_BITS = 3413;
snow_modules_opengl_web_GL.DEPTH_BITS = 3414;
snow_modules_opengl_web_GL.STENCIL_BITS = 3415;
snow_modules_opengl_web_GL.POLYGON_OFFSET_UNITS = 10752;
snow_modules_opengl_web_GL.POLYGON_OFFSET_FACTOR = 32824;
snow_modules_opengl_web_GL.TEXTURE_BINDING_2D = 32873;
snow_modules_opengl_web_GL.SAMPLE_BUFFERS = 32936;
snow_modules_opengl_web_GL.SAMPLES = 32937;
snow_modules_opengl_web_GL.SAMPLE_COVERAGE_VALUE = 32938;
snow_modules_opengl_web_GL.SAMPLE_COVERAGE_INVERT = 32939;
snow_modules_opengl_web_GL.COMPRESSED_TEXTURE_FORMATS = 34467;
snow_modules_opengl_web_GL.DONT_CARE = 4352;
snow_modules_opengl_web_GL.FASTEST = 4353;
snow_modules_opengl_web_GL.NICEST = 4354;
snow_modules_opengl_web_GL.GENERATE_MIPMAP_HINT = 33170;
snow_modules_opengl_web_GL.BYTE = 5120;
snow_modules_opengl_web_GL.UNSIGNED_BYTE = 5121;
snow_modules_opengl_web_GL.SHORT = 5122;
snow_modules_opengl_web_GL.UNSIGNED_SHORT = 5123;
snow_modules_opengl_web_GL.INT = 5124;
snow_modules_opengl_web_GL.UNSIGNED_INT = 5125;
snow_modules_opengl_web_GL.FLOAT = 5126;
snow_modules_opengl_web_GL.DEPTH_COMPONENT = 6402;
snow_modules_opengl_web_GL.ALPHA = 6406;
snow_modules_opengl_web_GL.RGB = 6407;
snow_modules_opengl_web_GL.RGBA = 6408;
snow_modules_opengl_web_GL.LUMINANCE = 6409;
snow_modules_opengl_web_GL.LUMINANCE_ALPHA = 6410;
snow_modules_opengl_web_GL.UNSIGNED_SHORT_4_4_4_4 = 32819;
snow_modules_opengl_web_GL.UNSIGNED_SHORT_5_5_5_1 = 32820;
snow_modules_opengl_web_GL.UNSIGNED_SHORT_5_6_5 = 33635;
snow_modules_opengl_web_GL.FRAGMENT_SHADER = 35632;
snow_modules_opengl_web_GL.VERTEX_SHADER = 35633;
snow_modules_opengl_web_GL.MAX_VERTEX_ATTRIBS = 34921;
snow_modules_opengl_web_GL.MAX_VERTEX_UNIFORM_VECTORS = 36347;
snow_modules_opengl_web_GL.MAX_VARYING_VECTORS = 36348;
snow_modules_opengl_web_GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
snow_modules_opengl_web_GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
snow_modules_opengl_web_GL.MAX_TEXTURE_IMAGE_UNITS = 34930;
snow_modules_opengl_web_GL.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
snow_modules_opengl_web_GL.SHADER_TYPE = 35663;
snow_modules_opengl_web_GL.DELETE_STATUS = 35712;
snow_modules_opengl_web_GL.LINK_STATUS = 35714;
snow_modules_opengl_web_GL.VALIDATE_STATUS = 35715;
snow_modules_opengl_web_GL.ATTACHED_SHADERS = 35717;
snow_modules_opengl_web_GL.ACTIVE_UNIFORMS = 35718;
snow_modules_opengl_web_GL.ACTIVE_ATTRIBUTES = 35721;
snow_modules_opengl_web_GL.SHADING_LANGUAGE_VERSION = 35724;
snow_modules_opengl_web_GL.CURRENT_PROGRAM = 35725;
snow_modules_opengl_web_GL.NEVER = 512;
snow_modules_opengl_web_GL.LESS = 513;
snow_modules_opengl_web_GL.EQUAL = 514;
snow_modules_opengl_web_GL.LEQUAL = 515;
snow_modules_opengl_web_GL.GREATER = 516;
snow_modules_opengl_web_GL.NOTEQUAL = 517;
snow_modules_opengl_web_GL.GEQUAL = 518;
snow_modules_opengl_web_GL.ALWAYS = 519;
snow_modules_opengl_web_GL.KEEP = 7680;
snow_modules_opengl_web_GL.REPLACE = 7681;
snow_modules_opengl_web_GL.INCR = 7682;
snow_modules_opengl_web_GL.DECR = 7683;
snow_modules_opengl_web_GL.INVERT = 5386;
snow_modules_opengl_web_GL.INCR_WRAP = 34055;
snow_modules_opengl_web_GL.DECR_WRAP = 34056;
snow_modules_opengl_web_GL.VENDOR = 7936;
snow_modules_opengl_web_GL.RENDERER = 7937;
snow_modules_opengl_web_GL.VERSION = 7938;
snow_modules_opengl_web_GL.NEAREST = 9728;
snow_modules_opengl_web_GL.LINEAR = 9729;
snow_modules_opengl_web_GL.NEAREST_MIPMAP_NEAREST = 9984;
snow_modules_opengl_web_GL.LINEAR_MIPMAP_NEAREST = 9985;
snow_modules_opengl_web_GL.NEAREST_MIPMAP_LINEAR = 9986;
snow_modules_opengl_web_GL.LINEAR_MIPMAP_LINEAR = 9987;
snow_modules_opengl_web_GL.TEXTURE_MAG_FILTER = 10240;
snow_modules_opengl_web_GL.TEXTURE_MIN_FILTER = 10241;
snow_modules_opengl_web_GL.TEXTURE_WRAP_S = 10242;
snow_modules_opengl_web_GL.TEXTURE_WRAP_T = 10243;
snow_modules_opengl_web_GL.TEXTURE_2D = 3553;
snow_modules_opengl_web_GL.TEXTURE = 5890;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP = 34067;
snow_modules_opengl_web_GL.TEXTURE_BINDING_CUBE_MAP = 34068;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
snow_modules_opengl_web_GL.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
snow_modules_opengl_web_GL.TEXTURE0 = 33984;
snow_modules_opengl_web_GL.TEXTURE1 = 33985;
snow_modules_opengl_web_GL.TEXTURE2 = 33986;
snow_modules_opengl_web_GL.TEXTURE3 = 33987;
snow_modules_opengl_web_GL.TEXTURE4 = 33988;
snow_modules_opengl_web_GL.TEXTURE5 = 33989;
snow_modules_opengl_web_GL.TEXTURE6 = 33990;
snow_modules_opengl_web_GL.TEXTURE7 = 33991;
snow_modules_opengl_web_GL.TEXTURE8 = 33992;
snow_modules_opengl_web_GL.TEXTURE9 = 33993;
snow_modules_opengl_web_GL.TEXTURE10 = 33994;
snow_modules_opengl_web_GL.TEXTURE11 = 33995;
snow_modules_opengl_web_GL.TEXTURE12 = 33996;
snow_modules_opengl_web_GL.TEXTURE13 = 33997;
snow_modules_opengl_web_GL.TEXTURE14 = 33998;
snow_modules_opengl_web_GL.TEXTURE15 = 33999;
snow_modules_opengl_web_GL.TEXTURE16 = 34000;
snow_modules_opengl_web_GL.TEXTURE17 = 34001;
snow_modules_opengl_web_GL.TEXTURE18 = 34002;
snow_modules_opengl_web_GL.TEXTURE19 = 34003;
snow_modules_opengl_web_GL.TEXTURE20 = 34004;
snow_modules_opengl_web_GL.TEXTURE21 = 34005;
snow_modules_opengl_web_GL.TEXTURE22 = 34006;
snow_modules_opengl_web_GL.TEXTURE23 = 34007;
snow_modules_opengl_web_GL.TEXTURE24 = 34008;
snow_modules_opengl_web_GL.TEXTURE25 = 34009;
snow_modules_opengl_web_GL.TEXTURE26 = 34010;
snow_modules_opengl_web_GL.TEXTURE27 = 34011;
snow_modules_opengl_web_GL.TEXTURE28 = 34012;
snow_modules_opengl_web_GL.TEXTURE29 = 34013;
snow_modules_opengl_web_GL.TEXTURE30 = 34014;
snow_modules_opengl_web_GL.TEXTURE31 = 34015;
snow_modules_opengl_web_GL.ACTIVE_TEXTURE = 34016;
snow_modules_opengl_web_GL.REPEAT = 10497;
snow_modules_opengl_web_GL.CLAMP_TO_EDGE = 33071;
snow_modules_opengl_web_GL.MIRRORED_REPEAT = 33648;
snow_modules_opengl_web_GL.FLOAT_VEC2 = 35664;
snow_modules_opengl_web_GL.FLOAT_VEC3 = 35665;
snow_modules_opengl_web_GL.FLOAT_VEC4 = 35666;
snow_modules_opengl_web_GL.INT_VEC2 = 35667;
snow_modules_opengl_web_GL.INT_VEC3 = 35668;
snow_modules_opengl_web_GL.INT_VEC4 = 35669;
snow_modules_opengl_web_GL.BOOL = 35670;
snow_modules_opengl_web_GL.BOOL_VEC2 = 35671;
snow_modules_opengl_web_GL.BOOL_VEC3 = 35672;
snow_modules_opengl_web_GL.BOOL_VEC4 = 35673;
snow_modules_opengl_web_GL.FLOAT_MAT2 = 35674;
snow_modules_opengl_web_GL.FLOAT_MAT3 = 35675;
snow_modules_opengl_web_GL.FLOAT_MAT4 = 35676;
snow_modules_opengl_web_GL.SAMPLER_2D = 35678;
snow_modules_opengl_web_GL.SAMPLER_CUBE = 35680;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
snow_modules_opengl_web_GL.VERTEX_PROGRAM_POINT_SIZE = 34370;
snow_modules_opengl_web_GL.POINT_SPRITE = 34913;
snow_modules_opengl_web_GL.COMPILE_STATUS = 35713;
snow_modules_opengl_web_GL.LOW_FLOAT = 36336;
snow_modules_opengl_web_GL.MEDIUM_FLOAT = 36337;
snow_modules_opengl_web_GL.HIGH_FLOAT = 36338;
snow_modules_opengl_web_GL.LOW_INT = 36339;
snow_modules_opengl_web_GL.MEDIUM_INT = 36340;
snow_modules_opengl_web_GL.HIGH_INT = 36341;
snow_modules_opengl_web_GL.FRAMEBUFFER = 36160;
snow_modules_opengl_web_GL.RENDERBUFFER = 36161;
snow_modules_opengl_web_GL.RGBA4 = 32854;
snow_modules_opengl_web_GL.RGB5_A1 = 32855;
snow_modules_opengl_web_GL.RGB565 = 36194;
snow_modules_opengl_web_GL.DEPTH_COMPONENT16 = 33189;
snow_modules_opengl_web_GL.STENCIL_INDEX = 6401;
snow_modules_opengl_web_GL.STENCIL_INDEX8 = 36168;
snow_modules_opengl_web_GL.DEPTH_STENCIL = 34041;
snow_modules_opengl_web_GL.RENDERBUFFER_WIDTH = 36162;
snow_modules_opengl_web_GL.RENDERBUFFER_HEIGHT = 36163;
snow_modules_opengl_web_GL.RENDERBUFFER_INTERNAL_FORMAT = 36164;
snow_modules_opengl_web_GL.RENDERBUFFER_RED_SIZE = 36176;
snow_modules_opengl_web_GL.RENDERBUFFER_GREEN_SIZE = 36177;
snow_modules_opengl_web_GL.RENDERBUFFER_BLUE_SIZE = 36178;
snow_modules_opengl_web_GL.RENDERBUFFER_ALPHA_SIZE = 36179;
snow_modules_opengl_web_GL.RENDERBUFFER_DEPTH_SIZE = 36180;
snow_modules_opengl_web_GL.RENDERBUFFER_STENCIL_SIZE = 36181;
snow_modules_opengl_web_GL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
snow_modules_opengl_web_GL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
snow_modules_opengl_web_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
snow_modules_opengl_web_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
snow_modules_opengl_web_GL.COLOR_ATTACHMENT0 = 36064;
snow_modules_opengl_web_GL.DEPTH_ATTACHMENT = 36096;
snow_modules_opengl_web_GL.STENCIL_ATTACHMENT = 36128;
snow_modules_opengl_web_GL.DEPTH_STENCIL_ATTACHMENT = 33306;
snow_modules_opengl_web_GL.NONE = 0;
snow_modules_opengl_web_GL.FRAMEBUFFER_COMPLETE = 36053;
snow_modules_opengl_web_GL.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
snow_modules_opengl_web_GL.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
snow_modules_opengl_web_GL.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
snow_modules_opengl_web_GL.FRAMEBUFFER_UNSUPPORTED = 36061;
snow_modules_opengl_web_GL.FRAMEBUFFER_BINDING = 36006;
snow_modules_opengl_web_GL.RENDERBUFFER_BINDING = 36007;
snow_modules_opengl_web_GL.MAX_RENDERBUFFER_SIZE = 34024;
snow_modules_opengl_web_GL.INVALID_FRAMEBUFFER_OPERATION = 1286;
snow_modules_opengl_web_GL.UNPACK_FLIP_Y_WEBGL = 37440;
snow_modules_opengl_web_GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
snow_modules_opengl_web_GL.CONTEXT_LOST_WEBGL = 37442;
snow_modules_opengl_web_GL.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
snow_modules_opengl_web_GL.BROWSER_DEFAULT_WEBGL = 37444;
snow_system_audio_Audio.splitter = " • ";
snow_types__$Types_AssetType_$Impl_$.unknown = 0;
snow_types__$Types_AssetType_$Impl_$.bytes = 1;
snow_types__$Types_AssetType_$Impl_$.text = 2;
snow_types__$Types_AssetType_$Impl_$.json = 3;
snow_types__$Types_AssetType_$Impl_$.image = 4;
snow_types__$Types_AssetType_$Impl_$.audio = 5;
snow_types__$Types_OpenGLProfile_$Impl_$.compatibility = 0;
snow_types__$Types_OpenGLProfile_$Impl_$.core = 1;
snow_types__$Types_TextEventType_$Impl_$.unknown = 0;
snow_types__$Types_TextEventType_$Impl_$.edit = 1;
snow_types__$Types_TextEventType_$Impl_$.input = 2;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.unknown = 0;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.device_added = 1;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.device_removed = 2;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.device_remapped = 3;
snow_types__$Types_SystemEventType_$Impl_$.unknown = 0;
snow_types__$Types_SystemEventType_$Impl_$.init = 1;
snow_types__$Types_SystemEventType_$Impl_$.ready = 2;
snow_types__$Types_SystemEventType_$Impl_$.update = 3;
snow_types__$Types_SystemEventType_$Impl_$.shutdown = 4;
snow_types__$Types_SystemEventType_$Impl_$.window = 5;
snow_types__$Types_SystemEventType_$Impl_$.input = 6;
snow_types__$Types_SystemEventType_$Impl_$.quit = 7;
snow_types__$Types_SystemEventType_$Impl_$.app_terminating = 8;
snow_types__$Types_SystemEventType_$Impl_$.app_lowmemory = 9;
snow_types__$Types_SystemEventType_$Impl_$.app_willenterbackground = 10;
snow_types__$Types_SystemEventType_$Impl_$.app_didenterbackground = 11;
snow_types__$Types_SystemEventType_$Impl_$.app_willenterforeground = 12;
snow_types__$Types_SystemEventType_$Impl_$.app_didenterforeground = 13;
snow_types__$Types_SystemEventType_$Impl_$.file = 14;
snow_types__$Types_WindowEventType_$Impl_$.unknown = 0;
snow_types__$Types_WindowEventType_$Impl_$.created = 1;
snow_types__$Types_WindowEventType_$Impl_$.shown = 2;
snow_types__$Types_WindowEventType_$Impl_$.hidden = 3;
snow_types__$Types_WindowEventType_$Impl_$.exposed = 4;
snow_types__$Types_WindowEventType_$Impl_$.moved = 5;
snow_types__$Types_WindowEventType_$Impl_$.resized = 6;
snow_types__$Types_WindowEventType_$Impl_$.size_changed = 7;
snow_types__$Types_WindowEventType_$Impl_$.minimized = 8;
snow_types__$Types_WindowEventType_$Impl_$.maximized = 9;
snow_types__$Types_WindowEventType_$Impl_$.restored = 10;
snow_types__$Types_WindowEventType_$Impl_$.enter = 11;
snow_types__$Types_WindowEventType_$Impl_$.leave = 12;
snow_types__$Types_WindowEventType_$Impl_$.focus_gained = 13;
snow_types__$Types_WindowEventType_$Impl_$.focus_lost = 14;
snow_types__$Types_WindowEventType_$Impl_$.close = 15;
snow_types__$Types_WindowEventType_$Impl_$.destroy = 16;
snow_types__$Types_InputEventType_$Impl_$.unknown = 0;
snow_types__$Types_InputEventType_$Impl_$.key = 1;
snow_types__$Types_InputEventType_$Impl_$.mouse = 2;
snow_types__$Types_InputEventType_$Impl_$.touch = 3;
snow_types__$Types_InputEventType_$Impl_$.joystick = 4;
snow_types__$Types_InputEventType_$Impl_$.controller = 5;
snow_types__$Types_FileEventType_$Impl_$.unknown = 0;
snow_types__$Types_FileEventType_$Impl_$.modify = 1;
snow_types__$Types_FileEventType_$Impl_$.remove = 2;
snow_types__$Types_FileEventType_$Impl_$.create = 3;
snow_types__$Types_FileEventType_$Impl_$.drop = 4;
tusk_Entity.nextID = 0;
tusk_Files.sprites___bottlerocket__png = "assets/sprites/bottlerocket.png";
tusk_Files.tilemaps___bottlerocketbackground__json = "assets/tilemaps/bottlerocketbackground.json";
tusk_Files.tilemaps___bottlerocketbackground__png = "assets/tilemaps/bottlerocketbackground.png";
tusk_Tusk.version = "unknown+17fd14";
tusk_debug_Exception.showStackTrace = false;
tusk_lib_comp_Camera2DComponent.tid = 11;
tusk_lib_comp_CircleEffectComponent.tid = 4;
tusk_lib_comp_FadeEffectComponent.tid = 10;
tusk_lib_comp_MaterialComponent.tid = 9;
tusk_lib_comp_MeshComponent.tid = 8;
tusk_lib_comp_ParticleSystemComponent.tid = 0;
tusk_lib_comp_SoundComponent.tid = 7;
tusk_lib_comp_SplashScreen_$ShakeComponent.tid = 2;
tusk_lib_comp_TextComponent.tid = 1;
tusk_lib_comp_TimedPromiseComponent.tid = 6;
tusk_lib_comp_TransformComponent.tid = 5;
tusk_lib_proc_Camera2DProcessor.cameras = [];
tusk_macros_ComponentIndexer.nextID = 0;
tusk_macros_ComponentIndexer.componentMap = new haxe_ds_StringMap();
tusk_macros_ComponentIndexer.indexMap = new haxe_ds_IntMap();
TuskApp.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=ld34.js.map
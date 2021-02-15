//demo main
define([
	"module",
	"../../lib/demo/goja/index"
],function(
	module,
	demolib
){
	"use strict";
	function App(){
		println("App:start");
		println("App:end");
	}
	module.exports=App;
});

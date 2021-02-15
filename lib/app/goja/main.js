//demo main
define([
	"module",
	"../../vendor/demo/goja/index"
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

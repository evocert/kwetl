//impl
require([
	"lib/config.js?cachebust="+new Date().getTime()
],function(){
	require([
		"module",
		"app/web/main"
	],function(
		module,
		App
	){
		//main
		alert('impl stub');
		var app=new App();
	});
});

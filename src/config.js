define(["module"],function(module){
	var baseUrl=module.uri.substring(0,module.uri.lastIndexOf('/'));
	var modPath="";
	requirejs.config({
		"waitSeconds":42,
		"baseUrl":baseUrl,
		"protocol":typeof(requirepreconf)=="object"?requirepreconf.protocol:null,//"ws://",
		"urlArgs":["cachebust",(new Date()).getTime()].join("="),
		"paths":{
		},
		"config":{},
		"map":{
		},
		"shim":{
		},
		"deps":[]
	});
});



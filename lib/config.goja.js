define(["module"],function(module){
	var baseUrl="/kwetl/lib";
	var modPath="";
	var GOJA=true;
	requirejs.config({
		//"useParseEval":true,
		"catchError": true,
		"enforceDefine": true,
		"waitSeconds":0,
		"baseUrl":baseUrl,
		"paths":{
			/*"":modPath+"vendor/",*/
		},
		"packages":[],
		"config":{
			"text":{
				"env":"goja"
			}
		},
		"map":{
		},
		"shim":{
		},
		"deps":[]
	});
});

define(["module"],function(module){
	"use strict";
	var baseUrl=typeof(dbms)=="undefined"?
		"/kwetl/src":
		(function(){
			var ret=action().Path().split("/");
			if(ret[2]=="src"){
				return ["/",ret.slice(1,3).join("/")].join("")
			}else{
				return ["/",ret.slice(1,2)].join("")
			}
		})()
	;
	if(typeof(dbms)!="undefined"){
		console.Log(action().Path());
		console.Log(baseUrl);
	}else{
		console.log(baseUrl);
	}
	
	module.exports={
		"catchError":true,
		"enforceDefine":true,
		"waitSeconds":0,
		"baseUrl":baseUrl,
		"paths":{
			"kwe.rebase":"lib/kwe/rebase/index",
			"text":"lib/requirejs/require.text",
			"jquery":"lib/jquery/jquery.3.5.1",
			"jquery-private":"lib/jquery/jquery-private",
			"css":"lib/requirecss/css",
		},
		"packages":[],
		"config":{
			"text":{}
		},
		"map":{
			"*":{},
			"jquery-private":{"jquery":"jquery"},
		},
		"shim":{
		},
		"deps":[]
	};
	require.config(module.exports);
});

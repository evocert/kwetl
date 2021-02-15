<@
	//require=null;
	//requirejs=null;
	//define=null;
	//eval(fsutils.File2String("./www/kweutils/lib/vendor/requirejs/require.evocert.js"));
	var GOJA={};
	try{
		//portability
		var configpath=action().Path().substring(1).split('/');
		configpath.pop();
		configpath.unshift('www');
		configpath.push('config.goja');
		configpath=configpath.join("/");
		configpath="./lib";
		//bootstrap
		require([configpath],function(console){
			//main
		});
	}catch(e){
		println(e.toString());
	}
@>

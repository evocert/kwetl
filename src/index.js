//demo
require([
	"./config.js?cachebust="+new Date().getTime()
	],
	function(){
		require([
			"module",
		],function(
			module,
		){
			//main
			alert('demo stub');
		});
	}
);


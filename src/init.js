<@
	require(["./require.conf"]);
	require(["text!./ini.js"],function(conf){
		var conf=JSON.parse(conf);
		println(JSON.stringify(conf));
	});
@>

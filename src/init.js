<@
	require(["./require.conf"]);
	require(["text!./ini.js"],function(conf){
		var conf=JSON.parse(conf);
		println(JSON.stringify(conf));
		//initialize resource manager via conf
		var rootname=conf.root_name;
		//compute init.js base path                                     ....sort out...
		var basepath=action().Path().split("/");basepath.pop();basepath="/mnt/c/tmp/www"+basepath.join("/");
		resourcing.RegisterEndpoint(rootname,basepath);
	});
@>

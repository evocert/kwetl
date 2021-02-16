<@

	//push require conf to fixed path for easier access for other resources
	resourcing.MapEndpointResource("/","require.conf.js",_scriptinclude("./require.conf.js"));
	require(["/require.conf.js"]);
	//handle configuration
	require(["text!./conf.json"],function(conf){
		var conf=JSON.parse(conf);
		println(JSON.stringify(conf));

		//initialize resource manager via conf
		//var rootname=conf.root_name;
		//compute init.js base path                                     ....sort out...
		//var basepath=action().Path().split("/");basepath.pop();basepath="/mnt/c/tmp/www"+basepath.join("/");
		//resourcing.RegisterEndpoint(rootname,basepath);
	});
@>

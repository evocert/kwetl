define([
	"module",
	"jquery",
	"text!modules/ui/layouts/main.html",
	"css!lib/bootswatch/4.5.2/slate/bootstrap.min.css",
	"css!modules/ui/css/style.css"
],function(
	module,
	jq,
	tpl_layout,
	tpl_admin,
	tpl_config
){
	"use strict";
	$=jq;
	module.exports=function(conf){
		tpl_layout=$(tpl_layout);
		var contents=tpl_layout.find("#contents");
		//tpl_layout.find("#contents").append(tpl_admin);
		//tpl_admin.find("#contents").append(tpl_config);
		var navigation=$("<div/>").attr({"id":"navigation"});
		Object.keys(conf.modules).forEach(function(k,kidx){
			navigation.append(
				$("<button/>").addClass(["btn","btn-sm"]).text(k).click(function(){
					contents.empty();
					contents.append($("<h3/>").text("Loading..."));
					require(["text!"+conf.modules[k].ui.entry+"?cachebust="+(new Date().getTime())],function(template){
						contents.empty();
						contents.append($(template));
					});
				}.bind(this))
			);
		}.bind(this));
		tpl_layout.prepend(navigation);
		$("body").find("#workspace").append(tpl_layout);
	}
});

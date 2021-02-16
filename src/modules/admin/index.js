define([
	"module",
	"jquery",
	"text!conf.json",
],function(
	module,
	jq,
	conf,
){
	module.exports=function(){
		$=jq;
		conf=JSON.parse(conf);
		var nod=$("#contents");//scan out
		//var scriptTag = document.getElementsByTagName('script');
		//scriptTag = scriptTag[scriptTag.length - 1];
		//var parentTag = scriptTag.parentNode;
		//var nod=$(parentTag )
		//var nod=$(document.scripts[document.scripts.length - 1].parentNode);
		{
			var table=$("<table/>").addClass(["table","table-sm","table-striped"]).attr({"id":"tbl_conf"});
			Object.keys(conf).forEach(function(k,kidx){
				var tr=$("<tr/>").attr({"id":k});
				tr.append($("<td/>").append($("<input/>").addClass(["form-control","form-control-sm"]).val(k)).keyup(function(e){
					console.log($(e.target).val());
				}));
				tr.append($("<td/>").append($("<input/>").addClass(["form-control","form-control-sm"]).val(conf[k])).data({"k":k}).keyup(function(e){
					console.log($(e.target).val());
				}));
				tr.append($("<td/>").append(
					$("<button/>").addClass(["btn","btn-sm"]).text("Remove").click(function(el){
						console.log($(this));
						$("#"+k).remove();
					})
				));
				table.append(tr);
			}.bind(this));
			nod.append(table);
		}
		{
			var table=$("<table/>").attr({"id":"tbl_conf_buttons"});
			var tr=$("<tr/>");
			tr.append($("<td/>"));
			tr.append($("<td/>").append([
				$("<button/>").addClass(["btn","btn-sm"]).text("Add").attr({"id":"k"}).click(function(el){
					var k="NEW";
					var tr=$("<tr/>").attr({"id":k});
					tr.append($("<td/>").append($("<input/>").addClass(["form-control","form-control-sm"]).val(k)));
					tr.append($("<td/>").append($("<input/>").addClass(["form-control","form-control-sm"]).val(conf[k])));
					tr.append($("<td/>").append(
						$("<button/>").addClass(["btn","btn-sm"]).text("Remove").click(function(el){
							console.log($(this));
							$("#"+k).remove();
						})
					));
					table.append(tr);
					$("#tbl_conf").append(tr)

				}),
				$("<button/>").addClass(["btn","btn-sm"]).text("Save").attr({"id":"k"}).click(function(){
					console.log(conf);
				})
			]));
			tr.append($("<td/>"));
			table.append(tr);
			nod.append(table);
		}
	}
});

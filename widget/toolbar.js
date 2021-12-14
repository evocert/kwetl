if (toolbar===undefined) {
   var toolbar=(id,...arguments)=>{
        if (arguments.length>0) {
            for(let arg in arguments) {
                var tab=arguments[arg];
                @><button id="<@print(id,"_",(arg+"")); @>" onclick="<@print(tab["action"]);@>"><@print(tab["caption"]);@></button><@
            }
        }
    };
}
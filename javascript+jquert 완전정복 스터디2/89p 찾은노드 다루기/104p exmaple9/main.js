$(document).ready(function(){
    let menu = $("ul.menu li");
    let count = 0;
    menu.on("click", function(){
        console.log("menu.index(this) = "+menu.index(this));
        console.log("$(this).index() = "+$(this).index());
         count = ($(this).index(".select") + 1);
         if(count) {
             console.log("찾았다 요놈");
         } else {
             console.log("어딧냐 요놈");
         }
    });
});
$(document).ready(function(){
    var menu = $("ul.menu li");
    var li_1 = menu.eq(1);
    console.log(li_1);
    var li = menu.get(1);
    console.log(li);
    li.style.border = "4px solid #f00";
});
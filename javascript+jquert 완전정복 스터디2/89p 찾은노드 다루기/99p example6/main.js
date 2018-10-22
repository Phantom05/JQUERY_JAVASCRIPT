$(document).ready(function(){
    var menu= $("ul.menu li");
    menu.each(function(i){
        var bo = (i + 1) * 2;
        $(this).css({
            border : bo + "px solid #f00"
        });
    });
});
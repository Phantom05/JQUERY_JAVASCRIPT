$(document).ready(function(){
    tabInit();
    tabEvent($("#tabMenu1"));
    tabEvent($("#tabMenu2"));
    tabIndex();
});


function tabInit() {
    var tab_menu = null;
    var tab_list = null;
}

function tabEvent(selector) {
    tab_list = selector.find("li");
    tab_list.click(function(){
        tabIndex();
        $(this).addClass("select");
        $(this).siblings().removeClass("select");
    });
}

function tabIndex(){
    console.log(tab_list.index(this));
}
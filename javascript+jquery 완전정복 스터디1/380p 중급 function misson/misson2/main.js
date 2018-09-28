$(document).ready(function(){
    tabMenu($("#tabMenu1"));
    tabMenu($("#tabMenu2"));
});

function tabMenu(selector){
    var tab_menu = null;
    var tab_list = null;
    var tab_index = 0;

    function init() {
        tab_menu = $(selector);
        tab_list = tab_menu.find("li");
        initEvent();
    }

    function initEvent() {
        tab_list.click(function(){
            tab_index = tab_list.index(this);
            console.log("클릭하신 리스트는 "+ tab_menu.attr("id") + "의 " + tab_index + "번째 리스트 입니다.");

            $(this).addClass("select");
            $(this).siblings().removeClass("select");
        });
    }

    init();

}

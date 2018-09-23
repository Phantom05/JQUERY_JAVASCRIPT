var tabMenu;
$(document).ready(function(){
    tabInit();
    tabEvent();
});

function tabInit() {
    tabMenu = $(".tab-menu > li");
}

function tabEvent() {
    tabMenu.click(function(){
        $(this).addClass("select");
        $(this).siblings().removeClass("select");
    });
}
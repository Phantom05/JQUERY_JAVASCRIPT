$(document).ready(function(){
    tabMenu("#tabMenu1", onSelectList);
});

function tabMenu(selector, callback){
    var tabMenu = null;
    var menuList = null;
    var selectMenuList = null;

    function init (selector) {
        tabMenu = $(selector);
        menuList = tabMenu.find("li");
    }

    function initEvent(){
        menuList.click(function(){
            setSelectMenuList($(this));
        });
    }

    function setSelectMenuList(list){
        if(selectMenuList){
            selectMenuList.removeClass("select");
        }
        console.log(selectMenuList);
        console.log(list);
        selectMenuList = list;
        selectMenuList.addClass("select");

        if(callback != null){
            callback(selectMenuList.index());
        }
    }
    init(selector);
    initEvent();
}

function onSelectList(index){
    $("#info").html(index);
}
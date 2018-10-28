let tab_menu = $(".tab-menu li");
let length = tab_menu.length;
let index = 0;
console.log(length);

function menuEvent() {
    tab_menu.on("click", function(){
        index = tab_menu.index(this);
        console.log(index);
    });
}
menuEvent();
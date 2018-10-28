let tab_menu = $(".tab-menu li");
let length = tab_menu.length;
let index = 0;
console.log(length);

function menuEvent() {
    tab_menu.on("click", function(){
        index = $(this).index();
        console.log(index);
    });
}
menuEvent();

let currentIndex = 0;
let timerID = 0;

timerID = setInterval(function(){
    currentIndex++;
    if(currentIndex >= length){
        currentIndex = 0;
    }
    tab_menu.eq(currentIndex).addClass("select").siblings().removeClass("select");
},1000);
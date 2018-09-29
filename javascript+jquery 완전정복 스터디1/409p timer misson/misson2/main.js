var fish = null;
var step = 50;
var timerId = 0;
$(document).ready(function(){
    init();
    initEvent();
});

function init(){
    fish = $("#fish");
}

function initEvent(){

    $("#btnStart").click(function(){
        start();
    });
        

    $("#btnStop").click(function(){
        stop();
    });

}

function start(){
    if(timerId == 0){
        timerId = setInterval(function(){
            moveFish();
        }, 100);
    }
}

function stop() {
    clearInterval(timerId);
    timerId = 0;
}

function moveFish(){
    var x = fish.position().left + step;

    if(x >= 430) {
        x = 430;
        fish.attr("src", "fish2.png");
        step -= 50;
    }else if(x <= 50) {
        x = 50;
        fish.attr("src", "fish1.png");
        step += 50;
    }

    fish.css("left", x);
}
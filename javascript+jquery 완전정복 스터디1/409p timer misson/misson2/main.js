var fish = null;
var move = 50;
var timerID = 0;

$(document).ready(function(){
    fishInit();
    fishEvent();
});

function fishInit(){
    fish = $("#fish");
}

function fishMove(){
    var x = fish.position().left + move;

    if(x >= 430){
        x = 430;
        fish.attr("src", "fish2.png");
        move = -50;
    }
    if(x <= 50){
        x = 50;
        fish.attr("src", "fish1.png");
        move = 50;
    }

    fish.css("left", x);
}

function start(){
    console.log(timerID);
    if(timerID == 0){
        timerID = setInterval(function(){
            fishMove();
        },100);
        console.log(timerID);
    }
}

function stop(){
    clearInterval(timerID);
    timerID = 0;
}

function fishEvent(){
    $("#btnStart").click(function(){
        start();
    });

    $("#btnStop").click(function(){
        stop();
    });
}
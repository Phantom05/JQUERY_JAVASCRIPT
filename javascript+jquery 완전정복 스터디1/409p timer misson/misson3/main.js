var banner = null;
var timerID = false;
var bannerArray = [];
var imgLength = 9;
var count = 0;

$(document).ready(function(){
    bannerInit();
    bannerEvent();
});

function bannerInit(){
    banner = $("#banner");
    btnStart = $("#btnStart");
    btnStop = $("#btnStop");
    for(var i = 1; i < imgLength; i++){
        bannerArray.push("images/logo_0"+ i +".jpg");
    }
}

function bannerEvent() {
    btnStart.click(function(){
        start();
    });

    btnStop.click(function(){
        stop();
    });
}

function start(){
    if(timerID == false){
        timerID = setInterval(bannerMove, 1000);
    }
}

function stop(){
    clearInterval(timerID);
    timerID = 0;
}

function bannerMove(){
    banner.attr("src", bannerArray[count]);
    count++;
    if(count == imgLength - 1){
        count = 0;
    }
}

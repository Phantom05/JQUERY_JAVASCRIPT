var fish = null;
var startBtn = null;
var info = null;
var timerID = 0;
var randomLeft = 0;


$(document).ready(function() {
    fish = $(".fish");
    // 물고기 배열 하기
    for (var i = 0; i < fish.length; i++) {
        var fishs = fish.eq(i);
        // 물고기 위치는 100부터 시작
        fishs.css({
            left : 0,
            top : 100 + (i * 150)
        });
    }
    start();

});


function start(){
    startBtn = $("#start");
    startBtn.on("click", function(){
        var timerID = setInterval(function(){
            for(var i = 0; i < fish.length; i++){
                randomLeft += Math.floor(Math.random() * 50);
                fish.eq(i).css({
                    left: randomLeft
                });

                if(parseInt(fish.eq(i).css("left")) >= 400){
                    alert((i + 1) + "번 물고기가 우승하였습니다.");
                    clearInterval(timerID);
                    timerID = 0;
                    break;
                }
            }

        },400);
    });
}

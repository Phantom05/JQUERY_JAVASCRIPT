let btnStart = $("#btnStart");
let fish = $("#fish");
let fish_count_p = $("#fish_count");
let fish_count = 0;
let x = 0;
let y = 0;
let timerID = false;

$(document).ready(function(){
    fishMove();
    fishStartBtn();
    fishEvent();
});


function fishMove(){
    timerID = setInterval(function(){
        x = Math.floor(Math.random() * 680) + 120;
        y = Math.floor(Math.random() * 530) + 70;

        fish.css({
            left : x,
            top : y
        });
    },1000);
    setTimeout(fishStop, 10000);
}

function fishStop(){
    clearInterval(timerID);
    timerID = false;
    alert("최종점수는 " + fish_count + "점 입니다.");
    fish_count = 0;
    fish_count_p.text(fish_count);
}


function fishEvent(){
    fish.on("click", function(){
        if(timerID == false) {
            fish_count = 0;
        }else{
            fish_count++;
            fish_count_p.text(fish_count);
            console.log(timerID);
        }
        
    });
    
}

function fishStartBtn() {
    btnStart.on("click", function(){
        if(timerID == 0){
            fishMove();
        } else if(timerID != 0){
            console.log("timerID의 동작이 끝나지 않았습니다.");
        }
    });
}
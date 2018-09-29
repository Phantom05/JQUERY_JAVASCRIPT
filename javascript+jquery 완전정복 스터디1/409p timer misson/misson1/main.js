$(document).ready(function(){
    var fish = $("#fish");
    var score = $("#score");
    var count = 0;
    var fishClear;
    var playing = true;



    /**
     *  time 조절
     */
    function fishInit(){
        fishClear = setInterval(fishTimer ,1000);
        fishClickEvent(true);
    }
    fishInit();

    function fishClearIn(){
        clearInterval(fishClear);
        playing = false;
    }

    setTimeout(fishClearIn, 5000);

    

    /**
     *  기능 logic
     */

    function fishTimer(){
        fishMove(480, 330);
    }

    function fishMove(left_x, top_y){
        var x = Math.floor(Math.random() * left_x);
        var y = Math.floor(Math.random() * top_y);
        console.log(x);
        fish.css({
            left : x,
            top : y
        });
    }

    function fishClickEvent(){
        fish.click(function(){
            if(playing) {    
                count++;
                console.log(count);
                score.text(count);
            }
        });
    }
    
});

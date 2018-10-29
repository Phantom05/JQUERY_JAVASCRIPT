let list = $("ul.menu > li");


// appendTo 방법
function listAppendEvent(){
    list.on("click", function(){
        $(this).appendTo("ul.menu");
    });
}
listAppendEvent();


// append 방법
function listAppendEvent2(){
    list.on("click", function(){
        $("ul.menu").append(this);
    });
}

listAppendEvent2();
let list = $("ul.menu > li");


// prependTo 방법
function listPrependEvent(){
    list.on("click", function(){
        $(this).prependTo("ul.menu");
    });
}
listPrependEvent();


// prepend 방법
function listPrependEvent2(){
    list.on("click", function(){
        $("ul.menu").prepend(this);
    });
}

listPrependEvent2();
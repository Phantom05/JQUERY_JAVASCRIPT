let menu = $("ul.menu");
let addBtn = $("#addBtn");
let count = 0;
let li = null;


// prepend 사용

function addFunc() {
    
    addBtn.on("click",function(){
        count++;
        li = "<li>new Count"+ count +"</li>";
        menu.prepend(li);
    });
}
addFunc();
// prependTo 사용

/* function addFunc2() {
    addBtn.on("click", function(){
        count++;
        li = $("<li>new Count"+count+"</li>");
        li.prependTo("ul.menu");
    });
}
addFunc2(); */
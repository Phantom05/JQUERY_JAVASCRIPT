let menu = $("ul.menu");
let addBtn = $("#addBtn");
let count = 0;
let li = null;


// append 사용

function addFunc() {
    
    addBtn.on("click",function(){
        count++;
        li = "<li>new Count"+ count +"</li>";
        menu.append(li);
    });
}
addFunc();

// appendTo 사용

/* function addFunc2() {
    addBtn.on("click", function(){
        count++;
        li = $("<li>new Count"+count+"</li>");
        li.appendTo("ul.menu");
    });
}
addFunc2(); */
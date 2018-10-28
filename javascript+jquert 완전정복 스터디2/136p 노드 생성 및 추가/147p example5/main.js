let menu = $("ul.menu .select");
let addBtn = $("#addBtn");
let count = 0;
let li = null;


// after 사용
/*
function addFunc(){
    addBtn.on("click", function(){
        count++;
        li = "<li>new Count"+count+"</li>";
        menu.after(li);
    });
}
addFunc();
*/

// insertAfter 사용

function addFunc2(){
    addBtn.on("click", function(){
        count++;
        li = $("<li>new Count"+count+"</li>");
        li.insertAfter(menu);
    });
}
addFunc2();
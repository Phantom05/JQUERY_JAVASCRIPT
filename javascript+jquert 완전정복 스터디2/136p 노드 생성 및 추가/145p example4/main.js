let menu = $("ul.menu .select");
let addBtn = $("#addBtn");
let count = 0;
let li = null;


// before 사용
/*
function addFunc(){
    addBtn.on("click", function(){
        count++;
        li = "<li>new Count"+count+"</li>";
        menu.before(li);
    });
}
addFunc();
*/

// insertBefore 사용

function addFunc2(){
    addBtn.on("click", function(){
        count++;
        li = $("<li>new Count"+count+"</li>");
        li.insertBefore(menu);
    });
}
addFunc2();
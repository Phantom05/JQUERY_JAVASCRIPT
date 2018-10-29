$(document).ready(function(){
    eventFunc();
});


let input = $("#menuName");
let menu = $("ul.menu");
let add = $("#add");
let update = $("#update");
let remove = $("#remove");
let up = $("#up");
let down = $("#down");
let inText = "";
let values = "";

function addHtml() {
    values = input.val();
    inText = "<li>"+values+"</li>";
}

function eventFunc() {
    add.on("click", function(){
        addHtml();
        menu.append(inText);
    });
}


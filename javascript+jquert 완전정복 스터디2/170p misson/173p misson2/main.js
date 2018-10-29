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

function selectBack() {
    let list = menu.find("li");
    list.on("click", function(){
        console.log($(this).addClass("select").siblings().removeClass("select"));
    });
    
}

// input에 쓰고 추가를 눌럿을때
eventFunc();
// click햇을때
selectBack();

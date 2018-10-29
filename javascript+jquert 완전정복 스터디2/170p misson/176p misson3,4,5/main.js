let input = $("#menuName");
let menu = $("ul.menu");
let add = $("#add");
let update = $("#update");
let remove = $("#remove");
let up = $("#up");
let down = $("#down");
let inText = "";
let values = "";
let clickChk = null;


// 메뉴 추가 텍스트
function addHtml() {
    values = input.val();
    inText = "<li>"+values+"</li>";
}

// 메뉴 추가
function eventFunc() {
    add.on("click", function(){
        addHtml();
        if(menu.find("li").hasClass("select")){
            menu.find("li.select").after(inText);
        } else {
            menu.append(inText);
        }
    });
}

// click 선택할 때
function selectBack() {
    let list = menu.find("li");
    list.on("click", function(){
        if($(this).attr("class") == "select") {
            $(this).removeClass("select");
        } else {
            clickChk = $(this).attr("class");
            console.log(clickChk);
            $(this).addClass("select").siblings().removeClass("select");
        }
    });
}

// 메뉴 수정
function menuFixed() {
    update.on("click", function(){
        addHtml();
        if(menu.find("li").hasClass("select")){
            menu.find("li.select").html(values);
        } else {
            alert("선택된 메뉴가 존재하지 않아 수정할 수 없습니다.");
        }
    });
}

// 메뉴 삭제
function menuRemove() {
    remove.on("click", function(){
        if(menu.find("li").hasClass("select")){
            menu.find("li.select").remove();
        } else {
            alert("선택된 메뉴가 존재하지 않아 삭제할 수 없습니다.");
        }
    });
}

// input에 쓰고 추가를 눌렀을 때 
eventFunc();
// click햇을때
selectBack();
// input에 쓰고 수정을 눌렀을 때
menuFixed();
// select을 하고 삭제를 눌렀을 때
menuRemove();
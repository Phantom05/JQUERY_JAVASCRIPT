let $input = null;
let $menu = null;
let $selectedItem = null;

$(document).ready(function(){
    init();
    initEvent();
});

function init() {
    $menu = $("ul.menu");
    $input = $("#menuName");
}

function initEvent() {
    // 메뉴추가
    $("#add").on("click",function(){
        addMenu();
    });

    $menu.on("click", "li", function(){
        selectItem($(this));
    });

    // 업데이트
    $("#update").on("click",function(){
        updateMenuItem();
    });

    // 선택 아이템 삭제
    $("#remove").on("click", function(){
        removeMenuItem();
    });

    // 선택 메뉴 아이템을 위로 이동
    $("#up").on("click", function(){
        upMenuItem();
    });

    // 선택 메뉴 아이템을 아래로 이동
    $("#down").on("click", function(){
        downMenuItem();
    });
}


// 메뉴 추가 처리
function addMenu() {
    let menuName = $input.val();
    let newMenuItem = "<li>"+menuName+"</li>";

    if($selectedItem){
        $selectedItem.after(newMenuItem);
    } else {
        $menu.append(newMenuItem);
    }
}

// 메뉴 선택 처리
function selectItem($item) {
    if($selectedItem!=null){
        $selectedItem.removeClass("select");
    }
    $selectedItem = $item;
    $selectedItem.addClass("select");
}

// 메뉴 아이템 이름 수정하기
function updateMenuItem(){
    if($selectedItem){
        let menuName = $input.val();
        $selectedItem.html(menuName);
    } else {
        alert("선택 메뉴가 존재하지 않습니다.");
    }
}

// 선택 메뉴 아이템 삭제
function removeMenuItem(){
    if($selectedItem){
        $selectedItem.remove();
        $selectedItem = null;
    } else {
        alert("선택 메뉴가 존재하지 않습니다.");
    }
}

// 위로 이동
function upMenuItem(){
    if($selectedItem){
        let $prevItem = $selectedItem.prev();
        if($prevItem){
            $selectedItem.insertBefore($prevItem);
        }
    } else {
        alert("선택 메뉴가 존재하지 않습니다.");
    }
}

// 아래로 이동
function downMenuItem(){
    if($selectedItem){
        let $nextItem = $selectedItem.next();
        if($nextItem){
            $selectedItem.insertAfter($nextItem);
        }
    } else {
        alert("선택 메뉴가 존재하지 않습니다.");
    }
}



let menu = $("ul.menu");
// 선택자를 이용하는 방법
menu.children(":first").css("border", "4px solid #f00");

// 메서드를 이용하는 방법
menu.children().first().css("border", "4px solid #f00");
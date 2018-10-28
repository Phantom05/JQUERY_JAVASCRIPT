let menu = $("ul.menu");

menu.children(":first").css("border","4px solid #f00");
menu.children(":last").css("border","4px solid #f00");

// 위에 코드를 좀더 효율적으로 작성하기

let menu_child = $("ul.menu").children();

menu_child.first().css("border", "4px solid #f00");
menu_child.last().css("border", "4px solid #f00");

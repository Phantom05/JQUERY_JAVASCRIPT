let menu = $("ul.menu");
menu.children(":eq(1)").css("border", "4px solid #f00");
// or
menu.children().eq(1).css("border", "4px solid #f00");
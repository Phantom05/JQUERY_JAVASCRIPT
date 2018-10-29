let menu = $("ul.menu");

function menuText() {
    menu.on("click", function(){
        console.log($(this).html());
        console.log($(this).text());
    });
}
menuText();
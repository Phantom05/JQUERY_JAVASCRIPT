let menu = $("ul.menu > li");


function menuText() {
    menu.on("click", function(){
        $(this).html("<a href='https://www.naver.com'>new Menu "+ (1+menu.index(this)) +"</a>");
    });
}
menuText();
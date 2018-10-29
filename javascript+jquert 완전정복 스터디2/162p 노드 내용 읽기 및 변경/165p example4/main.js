let menu = $("ul.menu");
let remove = $("#removeBtn");
function menuRemove() {
    remove.on("click",function(){
        menu.html("");
    });
}

menuRemove();
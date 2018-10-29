let menu = $("ul.menu");
let addBtn = $("#addBtn");
let count = 10;
let addHtml = "";

function addEvent () {
    addBtn.on("click", function(){
        
        for(var i = 0; i < count; i++) {
            addHtml += "<li>menu"+(i+1)+"</li>";
        }
        menu.html(addHtml);
    });
}

addEvent();
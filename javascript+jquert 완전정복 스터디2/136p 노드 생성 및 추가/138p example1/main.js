// jquery

let addBtn = $("#addBtn");
let count = 0;
let menu = $("ul.menu");
let li = null;
function addFunc () {
    addBtn.on("click", function(){
        count++;
        li = $("<li>new Count" + count + "</li>");
        menu.append(li.get(0));
    });
}
addFunc();

// javascript DOM

/*
let addBtn2 = document.getElementById("addBtn");
let count2 = 0;
let menu2 = document.getElementsByClassName("menu");
addBtn2.addEventListener("click", function(){
    count2++;
    console.log(count2);
    let li2 = document.createElement("LI");
    let li2_text = document.createTextNode("new Count" + count2);
    li2.appendChild(li2_text);
    console.log(li2);

    menu2[0].appendChild(li2);
});
*/
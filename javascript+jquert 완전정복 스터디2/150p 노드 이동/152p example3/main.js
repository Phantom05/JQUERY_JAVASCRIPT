let list = $("ul.menu > li");
let select = $(".select");


// before 방법
function switchList() {
    list.on("click", function(){
        if($(this).hasClass("select")){
            alert("자기 자신을 클릭하지 마십시요.");
        }
        select.before(this);
    });
}
switchList();


// insertBefore 방법
function swichList2() {
    list.on("click", function(){
        if($(this).hasClass("select")){
            alert("날 클릭하지 말라했지!!");
        }
        $(this).insertBefore(select);
    });
}
swichList2();
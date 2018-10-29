let list = $("ul.menu");
let remove = $("#remove");

function removeEven(){
    remove.on("click", function(){
        list.children(":even").remove();
    });
}
removeEven();
let list = $("ul.menu > li");

function removeList(){
    list.on("click", function(){
        $(this).remove();
    });
}
removeList();
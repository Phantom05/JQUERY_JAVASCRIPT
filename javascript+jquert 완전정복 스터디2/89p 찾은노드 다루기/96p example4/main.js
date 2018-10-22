$(document).ready(function(){
    let list = $("ul.menu li");
    list.each(function(index){
        console.log("index = " + index);
        console.log(this);
    });
});
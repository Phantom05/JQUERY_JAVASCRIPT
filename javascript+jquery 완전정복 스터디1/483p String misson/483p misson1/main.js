var input = $("#text_input");
var btn = $("#text_gogo");
var output = $("#text_output");



btn.on("click", function(){

    var value = input.val();

    var result = trims(value);
    
    output.text(value + " => " + result);
});

function trims(str){
    if(str.length <= 0){
        return "";
    }

    var firstCh = str.charAt(0);
    if(firstCh != "_"){
        return str;
    }

    for(var i = 1; i < str.length; i++){
        if(str.charAt(i) != "_"){
            break;
        }
    }

    var result = str.slice(i, str.length);
    return result;
}
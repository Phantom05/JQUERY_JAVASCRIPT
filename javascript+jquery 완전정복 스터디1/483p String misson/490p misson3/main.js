var input = $("#text_input");
var btn = $("#text_gogo");
var output = $("#text_output");



btn.on("click", function(){

    var value = input.val();

    var result = rtrim(value);
    result = ltrim(result);
    
    output.text(value + " => " + result);
});

function rtrim(str){
    if(str.length <= 0){
        return "";
    }

    var firstCh = str.charAt(str.length - 1);
    if(firstCh != "_"){
        return str;
    }

    for(var i = str.length; i > 1; i--){
        if(str.charAt(i - 1) != "_"){
            break;
        }
    }

    var result = str.slice(0, i);
    return result;
}


function ltrim(str){
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

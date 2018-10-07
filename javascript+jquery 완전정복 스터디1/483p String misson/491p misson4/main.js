var input = $("#text_input");
var btn = $("#text_gogo");
var output = $("#text_output");



btn.on("click", function(){

    var value = input.val();

    var result = won(value);
    
    output.text(value + " => " + result);
});


function won(str){
    if(str.length <= 3){
        return str;
    }

    var count = Math.floor((str.length - 1) / 3);
    var result = "";

    for(var i = 0; i < count; i++){
        var length = str.length;
        var strCut = str.substr(length - 3, length);

        result = "," + strCut + result;

        str = str.slice(0, length - 3);
    }

    str = str + result;

    return str;
}
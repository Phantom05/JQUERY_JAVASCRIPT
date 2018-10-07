$(document).ready(function(){
    var count = 0;
    var banner = $(".banner");

    var imgList = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];

    setInterval(function(){
        var imgName = imgList[count];
        count++;
        if(count > imgList.length - 1){
            count = 0;
        }
        console.log(imgName);
        banner.attr("src", "./images/" + imgName);
    }, 1000);
});
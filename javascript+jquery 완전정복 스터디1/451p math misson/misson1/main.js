var timerID = 0;
var count = 0;
var imgList1 = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg"];
var imgList2 = ["logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_01.jpg"];

banner("#banner1" , imgList1 , 500);
banner("#banner2" , imgList2 , 1000);

function banner(selector, imgList,timer){
    timerID = setInterval(function(){
        count = Math.floor(Math.random() * imgList.length);
        $(selector).attr("src" , "images/"+imgList[count]);
    },timer);
}
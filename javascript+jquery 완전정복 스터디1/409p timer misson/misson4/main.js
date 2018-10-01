$(document).ready(function(){
    var imgList1 = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg"];
    var imgList2 = ["logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_01.jpg"];
    banner("#banner1", imgList1, 100);
    banner("#banner2", imgList2, 300);
});


function banner(selector, imgList, timer) {
    var count = 0;
    var banner = $(selector);

    setInterval(function(){
        count++;
        if(count >= imgList.length){
            count = 0;
        }
        banner.attr("src", "images/" + imgList[count]);
    },timer);
}
var imgBox, img, btn;
$(document).ready(function(){

    imgInit();

    imgArrayInit(3, 250, 250);

    btnImgEvent(2, 300, 300);
    
});

function imgInit() {
    imgBox = $("#img_box");
    img = $("#img_box > img");
    btn = $("#img_btn");
}

function imgArrayInit(lowCol , leftInit, topInit) {
    for (var i = 0; i < img.length; i++) {
        img.eq(i).css({
            left: (i % lowCol) * leftInit + "px",
            top: parseInt(i / lowCol) * topInit + "px",
            transition : "all 1s"
        });
    }
}

function btnImgEvent(lowCol, leftInit, topInit) {
    btn.click(function(){
        for (var i = 0; i < img.length; i++) {
            img.eq(i).css({
                left: (i % lowCol) * leftInit + "px",
                top: parseInt(i / lowCol) * topInit + "px",
                transition: "all 1s"
            });
        }
    });
}
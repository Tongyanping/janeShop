/**
 * Created by tongyanping on 2017/1/7.
 */
// 品牌活动图片横向滑动展示
$(function () {
    $("#janeBrandTab li").click(function () {
        $(this).addClass("chos")
            .siblings().removeClass("chos");
        var index = $(this).index();
        showBrandList(index);
        return false;
    }).eq(0).click();
});
//显示不同的图片块
function showBrandList(index) {
    var $rollobj = $("#janeBrandList");
    var rollWidth = $rollobj.find("li").outerWidth();
    rollWidth = rollWidth*4;
    // alert(rollWidth*index);
    $rollobj.stop(true,false).animate({left:-rollWidth*index},1000);
}
/**
 * Created by tongyanping on 2017/1/6.
 */
// 首页大屏广告效果
$(function () {
    var $imgrolls = $("#janeImageroll div a");
    $imgrolls.css("opacity","0.7");
    var index=0;
    var len = $imgrolls.length;
    var adTimer = null;

    $imgrolls.mouseover(function () {
        index =$(this).index();
        showImg(index);
    }).eq(0).mouseover();
    //滑入，停止动画，滑出，开始动画
    $("#janeImageroll").hover(function () {
        if (adTimer){
            clearInterval(adTimer);
        }
    },function () {
        adTimer = setInterval(function () {
            showImg(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 5000);
    }).trigger("mouseleave");
})
    function showImg(index) {
        var $rollobj = $("#janeImageroll");
        var $rolllist = $rollobj.find("div a");
        var newhref = $rolllist.eq(index).attr("href");
        $("#imgWrap").attr("href",newhref)
            .find("img").eq(index).stop(true,true).fadeIn()
            .siblings().fadeOut();
        $rolllist.removeClass("chos").css("opacity","0.7")
            .eq(index).addClass("chos").css("opacity","1");
    }


/**
 * Created by tongyanping on 2017/1/12.
 */
// 切换尺寸
$(function () {
    $(".proSize li").click(function () {
        $(this).addClass("cur")
            .siblings().removeClass("cur");
        $(this).parent().siblings("strong")
            .text($(this).text());
    })
})
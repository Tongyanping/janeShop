/**
 * Created by tongyanping on 2017/1/7.
 */
// 设置子导航栏的显示与隐藏
$(function () {
    $("#nav li").hover(function () {
        $(this).find(".subNav").show();
    },function () {
        $(this).find(".subNav").hide();
    });
})
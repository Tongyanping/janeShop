/**
 * Created by tongyanping on 2017/1/24.
 */
//完成给商品评分的效果
$(function () {
    $("ul.rating li a").click(function () {
        var title = $(this).attr("title");
        alert("您给此商品的评分是："+title);
        var cl = $(this).parent().attr("class");
        $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
        return false;
    })
})
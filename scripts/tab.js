/**
 * Created by tongyanping on 2017/1/9.
 */
// 详细页的选项卡切换
$(function () {
    var $div_li = $("div.tabMenu ul li");
    $div_li.click(function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected");
        var index = $(this).index();
        $("div.tabBox>div")
            .eq(index).show()
            .siblings().hide();
    }).hover(function () {
        $(this).addClass("hover");
    },function () {
        $(this).removeClass("hover");
    })

})
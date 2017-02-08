/**
 * Created by tongyanping on 2017/1/12.
 */
// 切换颜色
$(function () {
    $(".proColor img").click(function () {
        //切换选中状态与未选择状态的边框样式
        $(this).addClass("selected")
            .parent().siblings().find("img").removeClass("selected");
        //根据选中的颜色切换颜色文字
        var colorText = $(this).attr('alt');
        $(".proColor strong").text(colorText);
        //根据选中的颜色切换显示的大小图片路径
        var imgSrc = $(this).attr("src");
        var i = imgSrc.lastIndexOf('.');
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0,i);
        var smallImgSrc = imgSrc+"_one_small"+unit;
        var bigImgSrc = imgSrc+"_one_big"+unit;
        $("#bigImg").attr({"src":smallImgSrc});
        $("#thickImg").attr("href",bigImgSrc);
        //根据选中的颜色切换小图片列表
        var imgColor = imgSrc.replace("images/pro_img/","");
        // alert(imgColor);
        $(".imgList li").hide()
            .parent().find(".imgList_"+imgColor).show();
        //根据选中的颜色切换放大镜图片
        $("#janeProitem ul.imgList").find(".imgList_"+imgColor).eq(0).find("a").click();
    })
})
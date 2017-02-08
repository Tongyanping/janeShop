/**
 * Created by tongyanping on 2017/1/10.
 */
/* 点击左侧产品小图片切换大图 */
$(function () {
    $("#janeProitem ul.imgList li a").click(function () {
        var imgSrc = $(this).find("img").attr("src");
        var i = imgSrc.lastIndexOf(".");
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0,i);
        var imgSrcBig = imgSrc+'_big'+unit;
        $("#thickImg").attr("href",imgSrcBig);
    })
})
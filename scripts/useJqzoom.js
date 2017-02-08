/**
 * Created by tongyanping on 2017/1/10.
 */
// 利用jqzoom插件实现产品图片放大镜的效果
$(function () {
    $(".jqzoom").jqzoom({
        zoomType:'standard',//默认值：’standard’，另一个值是’reverse’，是否将原图用半透明图层遮盖。
        lens:true,//默认值：true，若为false，则不在原图上显示镜头。
        preloadImages:false,//布尔值，表示是否重新加载大图像。
        alwaysOn:false,//放大镜是否总是显示
        zoomWidth: 340,//放大区域的宽度
        zoomHeight: 340,//放大区域的高度
        xOffset:10,//放大后的图片与原图片的水平距离
        yOffset:0,//放大后的图片与原图片的垂直距离
        position:'right'//默认值为right，表示放大的图片在原图片的右边显示，还可以设置为left，right，bottom
        }
    );
})

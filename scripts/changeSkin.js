/**
 * Created by tongyanping on 2017/1/7.
 */
// 网站换肤
$(function () {
    var $li = $("#skin li");
    //点击某个颜色，触发click事件，调用换肤函数
    $li.click(function () {
        switchSkin(this.id);
    })
    //网页初始化时，通过cookie来获取当前皮肤，如果cookie确实存在，则调用换肤函数将当前皮肤设置为cookie中记录的值
    var cookie_skin = $.cookie("MyCssSkin");
    if(cookie_skin){
        switchSkin(cookie_skin);
    }
    //换肤函数，将当前选择的li添加类selected，取消其他兄弟li的类selected，将肤色CSS设置为当前选中肤色，保存cookie
    function switchSkin(skinName){
        $("#"+skinName).addClass("selected")
            .siblings().removeClass("selected");
        $("#cssfile").attr("href","styles/skin/"+skinName+".css");
        $.cookie("MyCssSkin",skinName,{path:'/',expires:10});
    }
})
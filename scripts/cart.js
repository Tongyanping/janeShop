/**
 * Created by tongyanping on 2017/1/24.
 */
//放入购物车时，将用户选择产品的名称、尺寸、颜色、数量和总价告诉用户，以便用户进行确认选择是否正确

$(function () {
    $("#cart a").click(function () {
        var $product = $(".proDetails");
        var pro_name = $product.find("h2").text();
        var pro_size = $product.find('.proSize strong').text();
        var pro_color = $product.find('.proColor strong').text();
        var pro_num = $product.find('#numSort').val();
        var pro_price = $product.find('.totalPrice strong').text();
        // var dialog = "感谢您的购买。\n您购买的产品是："+pro_name+";尺寸是："+pro_size+";\n颜色是："+pro_color+
        //         ";数量是："+pro_num+";总价是："+pro_price+"元。";
        var dialog = "感谢您的购买。<div style='font-size:12px;font-weight:400;'>您购买的产品是："+pro_name+"；"+
            "尺寸是："+pro_size+"；"+
            "颜色是："+pro_color+"；"+
            "数量是："+pro_num+"；"+
            "总价是："+pro_price +"元。</div>";
        if(pro_size=='未选择')
        {
            $("#jnDialogContent").html("<div>请选择尺寸！</div>");
            $('#basic-dialog-ok').modal();
            // alert("请选择尺寸！");
        }
        else {
            // alert(dialog);
            $("#jnDialogContent").html(dialog);
            $('#basic-dialog-ok').modal();
        }
        return false;//避免页面跳转
    })
})

/**
 * Created by tongyanping on 2017/1/13.
 */
//数量和价格联动
$(function () {
    var price = $(".proPrice strong").text();
    // alert(price);
    $("#numSort").change(function () {
        var number = $(this).val();
        var totalPrice = price*number;
        // alert(totalPrice);
        $(".totalPrice strong").text(totalPrice)
    }).change();
})

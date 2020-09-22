var total, discount;
var discountRate = 0;
$('.qty-decrease').each(function () {
        $(this).on('click', function() {
            var updateQty = Number($(this).next('input').attr('value'));
            if (updateQty > 1) {
                updateQty--;
            }
            $(this).next('input').attr('value',updateQty);
            $(this).next('input').val(updateQty);
            updateSubtotal(this,updateQty);
            updateTotal();
        });
    });
    $('.qty-increase').each(function () {
        $(this).on('click', function() {
            var updateQty = Number($(this).prev('input').attr('value'));
            updateQty++;
            $(this).prev('input').attr('value',updateQty);
            $(this).prev('input').val(updateQty);
            updateSubtotal(this,updateQty);
            updateTotal();
        });
    });
    $('.product-remove button').each(function () {
        $(this).on('click', function() {
            $(this).parents('.cart-item').remove();
            updateTotal();
        });
    });

    $('.product-quantity input').each(function () {
        $(this).change(function(){
            var currentQty = $(this).val();
            $(this).attr('value',currentQty);
            updateSubtotal(this,currentQty);
            updateTotal();
        });
    });


function updateSubtotal (currentItem,currentQty) {
    var item = $(currentItem).parents('.product-quantity').siblings('.product-price').text().replace(/\./g, "");
    var subTotal = (Number(item)*currentQty).toLocaleString('vi');
    $(currentItem).parents('.product-quantity').siblings('.product-subtotal').text(subTotal);
}

function updateTotal () {
    sum = 0;
    $('td.product-subtotal').each(function () {
        sum += Number($(this).text().replace(/\./g, ""));
    });
    discount = sum*discountRate/100;
    total = sum - discount;
    $('.cart-subtotal td').text(sum.toLocaleString('vi'));
    $('.cart-discount td').text(discount.toLocaleString('vi'));    
    $('.amount').text(total.toLocaleString('vi'));
}

 $('.apply-coupon').click(function(){
        discountRate = $(this).prev('input').val();
        $('.discount-rate').text(discountRate + '%');
        updateTotal();
    });


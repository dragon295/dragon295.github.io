let total,
  discount,
  discountRate = 0;

// xóa cart
$(".btn-remove").each(function () {
  $(this).on("click", function () {
    $(this).parents(".sp-gh-1").remove();
    updateTotal();
  });
});

$(".button-minus").each(function () {
  $(this).on("click", function () {
    var updateQty = Number($(this).next("input").attr("value"));
    if (updateQty > 1) {
      updateQty--;
    }
    $(this).next("input").attr("value", updateQty);
    $(this).next("input").val(updateQty);
    updateSubtotal(this, updateQty);
    updateSubtotal2(this, updateQty);
    updateTotal();
  });
});

$(".button-plus").each(function () {
  $(this).on("click", function () {
    var updateQty = Number($(this).prev("input").attr("value"));
    updateQty++;
    $(this).prev("input").attr("value", updateQty);
    $(this).prev("input").val(updateQty);
    updateSubtotal(this, updateQty);
    updateSubtotal2(this, updateQty);
    updateTotal();
  });
});

$(".apply-coupon").click(function () {
  discountRate = $(this).prev("input").val();
  $(".discount-rate").text(discountRate + "%");
  updateTotal();
});

$(".product-quantity input").each(function () {
  $(this).change(function () {
    var currentQty = $(this).val();
    $(this).attr("value", currentQty);
    updateSubtotal(this, currentQty);
    updateSubtotal2(this, currentQty);
    updateTotal();
  });
});


function updateSubtotal(currentItem, currentQty) {
  var item = $(currentItem)
    .parents(".product-quantity")
    .siblings(".product-price")
    .text()
    .replace(/\./g, "");
  var subTotal = (Number(item) * currentQty).toLocaleString("vi");
  $(currentItem)
    .parents(".product-quantity")
    .siblings(".gia-sp-theobo")
    .children('.product-subtotal')
    .text(subTotal);
}

function updateSubtotal2(currentItem, currentQty) {
  var item = $(currentItem)
    .parents(".product-quantity")
    .siblings(".product-price-f")
    .text()
    .replace(/\./g, "");
  var subTotal = (Number(item) * currentQty).toLocaleString("vi");
  $(currentItem)
    .parents(".product-quantity")
    .siblings(".gia-sp-theobo")
    .children('.product-subtotal-f')
    .text(subTotal);
}


function updateTotal() {
  sum = 0;
  $(".product-subtotal").each(function () {
    sum += Number($(this).text().replace(/\./g, ""));
  });
  discount = (sum * discountRate) / 100;
  total = sum - discount;
  $(".cart-subtotal td").text(sum.toLocaleString("vi"));
  $(".cart-discount td").text(discount.toLocaleString("vi"));
  $(".amount").text(total.toLocaleString("vi"));
}

let name = $("#name");
let pass = $("#pass");
let repass = $("#repass");
$("#infor-dk").on("submit", function () {
  let flag = true;
  if (name.val().trim() == "") {
    name.next("span").text("Vui lòng nhập Tài khoản");
    flag = false;
  } else {
    name.next("span").text("");
  }

  if (pass.val().trim() == "") {
    pass.next("span").text("Vui lòng nhập Mật khẩu");
    flag = false;
  } else {
    pass.next("span").text("");
  }

  if (repass.val().trim() == "" || repass.val() !== pass.val()) {
    repass.next("span").text("Nhập lại mật khẩu chưa đúng hoặc chưa nhập");
    flag = false;
  } else {
    repass.next("span").text("");
  }
  return flag;
});

let nametk = $("#name-tk");
let passtk = $("#pass-tk");
$("#infor-dn").on("submit", function () {
  let flag = true;
  if (nametk.val().trim() == "") {
    nametk.next("span").text("Vui lòng nhập Tài khoản");
    flag = false;
  } else {
    nametk.next("span").text("");
  }

  if (passtk.val().trim() == "") {
    passtk.next("span").text("Vui lòng nhập Mật khẩu");
    flag = false;
  } else {
    passtk.next("span").text("");
  }
  return flag;
});

function openModalSignin() {
  $("#exampleModalCenter").modal("show");
  $("#pills-sign-in-tab").tab("show");
}

function openModalRegister() {
  $("#exampleModalCenter").modal("show");
  $("#pills-register-tab").tab("show");
}

$("#btn-send-email").click(function (event) {
  alert(
    "Chúng tôi đã nhận được Email của bạn - Tin tức sẽ sớm gửi đến bạn"
  );
});

$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".btn-top").fadeIn();
    } else {
      $(".btn-top").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".btn-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 850);
    return false;
  });
});

$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".btn-shopping").fadeIn();
    } else {
      $(".btn-shopping").fadeOut();
    }
  });
});

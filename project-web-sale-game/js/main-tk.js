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

// $(function () {

//   $(".gio-hang").each(function () {
//     $(this).click(function () {
//       $(this).children().hide();
//       $(this).addClass("onclick");
//       let b = $(this);
//       setTimeout(function () {
//         b.removeClass("onclick");
//         b.addClass("validate-gh");
//       }, 750);
//       let c = $(this);
//       setTimeout(() => {
//         c.removeClass("validate-gh");
//         c.children().show();
//       }, 1450);
//     });
//   });
// });

// $(function () {
//   $(".gio-hang-2").click(function () {
//     $(".gio-hang-2").addClass("onclick", 250, validate());
//     $(".icon-pay-2").hide();
//     $(".name-gh-2").hide();
//   });
//   function validate() {
//     setTimeout(function () {
//       $(".gio-hang-2").removeClass("onclick");
//       $(".gio-hang-2").addClass("validate-gh", 450, callback());
//     }, 1150);
//   }
//   function callback() {
//     setTimeout(function () {
//       $(".gio-hang-2").removeClass("validate-gh");
//       $(".icon-pay-2").show();
//       $(".name-gh-2").show();
//     }, 850);
//   }
// });

// $(function () {
//   $(".gio-hang-3").click(function () {
//     $(".gio-hang-3").addClass("onclick", 250, validate());
//     $(".icon-pay-3").hide();
//     $(".name-gh-3").hide();
//   });
//   function validate() {
//     setTimeout(function () {
//       $(".gio-hang-3").removeClass("onclick");
//       $(".gio-hang-3").addClass("validate-gh", 450, callback());
//     }, 1250);
//   }
//   function callback() {
//     setTimeout(function () {
//       $(".gio-hang-3").removeClass("validate-gh");
//       $(".icon-pay-3").show();
//       $(".name-gh-3").show();
//     }, 850);
//   }
// });

 $(".gio-hang").each(function() {
    $(this).click(function(event) {
     $(".modal-confirm").show()
     setTimeout(() => {
       $(".modal-confirm").hide()
      }, 1250);
    });
  });

(function () {
  var removeSuccess;

  removeSuccess = function () {
    return $(".tym").removeClass("success");
  };

  $(document).ready(function () {
    return $(".tym").click(function () {
      $(this).addClass("success");
      return setTimeout(removeSuccess, 650);
    });
  });
}.call(this));

$(".sp-line-3").hide();
$(".btn-load-more").click(function (event) {
  $(".sp-line-3").show("slow/400/slow", function () {});
  $(".see").remove();
  $(".icon-plus").hide();
  $(".text-plus").hide();
  $(".btn-load-more").hide();
  $(".sp-line-4").hide();
  $(".see-2").show();
  $(".icon-plus-2").show();
  $(".text-plus-2").show();
  $(".btn-load-more-2").show();
});

$(".sp-line-4").hide();
$(".see-2").hide();
$(".icon-plus-2").hide();
$(".text-plus-2").hide();
$(".btn-load-more-2").hide();
$(".btn-load-more-2").click(function (event) {
  $(".sp-line-4").show("slow/400/slow", function () {});
  $(".see-2").remove();
  $(".icon-plus-2").hide();
  $(".text-plus-2").hide();
  $(".btn-load-more-2").hide();
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

$(".btn-xoa-bo-loc").click(function (event) {
  let arrCheck = document.getElementsByClassName("input-check-tk");
  for (let i = 0; i < arrCheck.length; i++) {
    arrCheck[i].checked = false;
  }
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

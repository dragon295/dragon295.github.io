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


$(".owl-carousel").owlCarousel({
  items: 1,
  margin: 32,
  stagePadding: 30,
  smartSpeed: 650,
  video: true,
  width: 100,
  center: true,
  loop: true
});

// $(function () {
//   $(".gio-hang-sp").click(function () {
//     $(".gio-hang-sp").addClass("onclic", 250, validate());
//     $(".icon-pay").hide();
//     $(".add").hide();
//   });
//   function validate() {
//     setTimeout(function () {
//       $(".gio-hang-sp").removeClass("onclic");
//       $(".gio-hang-sp").addClass("validate", 450, callback());
//     }, 1150);
//   }
//   function callback() {
//     setTimeout(function () {
//       $(".gio-hang-sp").removeClass("validate");
//       $(".icon-pay").show();
//       $(".add").show();
//     }, 850);
//   }
// });

// $(function () {

//   $(".gio-hang").click(function () {
//     $(".gio-hang").addClass("onclick", 250, validate());
//     $(".icon-pay-1").hide();
//     $(".name-gh-1").hide();
//   });

//   function validate() {
//     setTimeout(function () {
//       $(".gio-hang").removeClass("onclick");
//       $(".gio-hang").addClass("validate-gh", 450, callback());
//     }, 1150);
//   }
  
//   function callback() {
//     setTimeout(function () {
//       $(".gio-hang").removeClass("validate-gh");
//       $(".icon-pay-1").show();
//       $(".name-gh-1").show();
//     }, 850);
//   }

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

$(".gio-hang-sp").each(function() {
    $(this).click(function(event) {
     $(".modal-confirm").show()
     setTimeout(() => {
       $(".modal-confirm").hide()
      }, 1250);
    });
  });

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
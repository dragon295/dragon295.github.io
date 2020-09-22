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

// $(function () {
//   $(".gio-hang").each(function () {
//     $(this).click(function () {
//       $(this).children().hide();
//       $(this).addClass("onclic");
//       let b = $(this);
//       setTimeout(function () {
//         b.removeClass("onclic");
//         b.addClass("validate");
//       }, 750);
//       let c = $(this);
//       setTimeout(() => {
//         c.removeClass("validate");
//         c.children().show();
//       }, 1450);
//     });
//   });
// });

  $(".gio-hang").each(function() {
    $(this).click(function(event) {
     $(".modal-confirm").show()
     setTimeout(() => {
       $(".modal-confirm").hide()
      }, 1250);
    });
  });

   $(".gio-hang-theobo").each(function() {
    $(this).click(function(event) {
     $(".modal-confirm").show()
     setTimeout(() => {
       $(".modal-confirm").hide()
      }, 1250);
    });
  });

   $(".gio-hang-giasoc").each(function() {
    $(this).click(function(event) {
     $(".modal-confirm").show()
     setTimeout(() => {
       $(".modal-confirm").hide()
      }, 1250);
    });
  });

  $(".gio-hang-banchay").each(function() {
    $(this).click(function(event) {
     $(".modal-confirm").show()
     setTimeout(() => {
       $(".modal-confirm").hide()
      }, 1250);
    });
  });

   $(".btn-banner").each(function() {
    $(this).click(function(event) {
     $(".modal-confirm").show()
     setTimeout(() => {
       $(".modal-confirm").hide()
      }, 1250);
    });
  });

// $(function () {
//   $(".gio-hang-theobo").each(function () {
//     $(this).click(function () {
//       $(this).children().hide();
//       $(this).addClass("onclick");
//       let b = $(this);
//       setTimeout(function () {
//         b.removeClass("onclick");
//         b.addClass("validate-tb");
//       }, 750);
//       let c = $(this);
//       setTimeout(() => {
//         c.removeClass("validate-tb");
//         c.children().show();
//       }, 1650);
//     });
//   });
// });

(function () {
  var removeSuccess;

  removeSuccess = function () {
    return $(".tym").removeClass("success");
  };

  $(document).ready(function () {
    return $(".tym").click(function () {
      $(this).addClass("success");
      return setTimeout(removeSuccess, 850);
    });
  });
}.call(this));

(function () {
  var removeSuccess;

  removeSuccess = function () {
    return $(".tym-theo-bo").removeClass("success");
  };

  $(document).ready(function () {
    return $(".tym-theo-bo").click(function () {
      $(this).addClass("success");
      return setTimeout(removeSuccess, 850);
    });
  });
}.call(this));

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

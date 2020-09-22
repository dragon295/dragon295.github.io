/* var province_select = document.querySelector("select[name='province']");
var province_list = ["An Giang","Bà Rịa - Vũng Tàu","Bạc Liêu","Bắc Giang","Bắc Kạn","Bắc Ninh","Bến Tre","Bình Dương","Bình Định","Bình Phước","Bình Thuận","Cà Mau","Cao Bằng","Cần Thơ","Đà Nẵng","Đắk Lắk","Đắk Nông","Đồng Nai","Đồng Tháp","Điện Biên","Gia Lai","Hà Giang","Hà Nam","Hà Nội","Hà Tĩnh","Hải Dương","Hải Phòng","Hòa Bình","Hậu Giang","Điện Biên","Thành phố Hồ Chí Minh","Khánh Hòa","Kiên Giang","Kon Tum","Lai Châu","Lào Cai","Lạng Sơn","Lâm Đồng","Long An","Nam Định","Nghệ An","Ninh Bình","Ninh Thuận","Phú Thọ","Phú Yên","Quảng Bình","Quảng Nam","Quảng Ngãi","Quảng Ninh","Quảng Trị","Sóc Trăng","Sơn La","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","Thừa Thiên - Huế","Tiền Giang","Trà Vinh","Tuyên Quang","Vĩnh Long","Vĩnh Phúc","Yên Bái"];
for (var index = 0; index < province_list.length; index++) {
	var option = document.createElement("option");
	option.setAttribute("value", province_list[index]);
	option.innerText = province_list[index];
	// console.log(option);
	province_select.append(option)
} */

$("#ic").fadeOut("slow/400/fast");
if ($("#ic").fadeOut("slow/400/fast")) {
  $("#btn").click(function (event) {
    $("#ic").fadeIn("slow/400/fast");
  });
} else if ($("#ic").fadeIn("slow/400/fast")) {
  $("#btn").click(function (event) {
    $("#ic").fadeOut("slow/400/fast");
  });
}

$("#ic-2").fadeOut("slow/400/fast");
if ($("#ic-2").fadeOut("slow/400/fast")) {
  $("#btn-2").click(function (event) {
    $("#ic-2").fadeIn("slow/400/fast");
  });
} else if ($("#ic-2").fadeIn("slow/400/fast")) {
  $("#btn-2").click(function (event) {
    $("#ic-2").fadeOut("slow/400/fast");
  });
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

$("#input-user-city-province").change(selectProvince);
function selectProvince() {
  let outputDistrict = "<option value='0'>&nbspChọn Quận/Huyện...</option>";
  let outputCommune = "<option value='0'>&nbspChọn Phường/Xã...</option>";
  let idProvince = $("#input-user-city-province > option")
    .filter(":selected")
    .val();
  for (let i = 0; i < listDistrict.length; i++) {
    if (listDistrict[i].idProvince == idProvince) {
      outputDistrict += `<option value='${listDistrict[i].idDistrict}'>&nbsp${listDistrict[i].name}</option>`;
    }
  }
  $("#input-user-commune").html(outputCommune);
  $("#input-user-district").html(outputDistrict);
}

$("#input-user-district").change(selectDistrict);
function selectDistrict() {
  let outputCommune = "<option value='0'>&nbspChọn Phường/Xã...</option>";
  let idDistrict = $("#input-user-district > option").filter(":selected").val();
  for (let i = 0; i < listCommune.length; i++) {
    if (listCommune[i].idDistrict == idDistrict) {
      outputCommune += `<option>&nbsp${listCommune[i].name}</option>`;
    }
  }
  $("#input-user-commune").html(outputCommune);
}

var arrays = {};
window.onload = function () {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    var input_id, quantity;
    if (inputs[i].id.indexOf("updates_") != -1) {
      input_id = inputs[i].id.replace("updates_", ""); //lấy id của input
      arrays[input_id] = document
        .getElementById("price_" + input_id)
        .innerHTML.replace(/₫|,/g, "");
      inputs[i].onchange = function () {
        input_id = this.id.replace("updates_", ""); //lấy id của input
        var price = document
          .getElementById("price_" + input_id)
          .innerHTML.replace(/₫|,/g, "");
        var line_total_price = 0;
        quantity = document.getElementById("updates_" + input_id).value;
        if (quantity != "") {
          line_total_price += parseInt(quantity) * price;
        }
        line_total_price = line_total_price
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        document.getElementById("line_price_" + input_id).innerHTML =
          line_total_price + "₫";

        //tổng tiền
        var total = 0;
        for (var array in arrays) {
          quantity = document.getElementById("updates_" + array).value;
          if (quantity != "") {
            total += parseInt(quantity) * arrays[array];
          }
        }
        total = total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        document.getElementById("total").innerHTML = total + "₫";
      };
    }
  }
};


$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.btn-top').fadeIn();
        } else {
            $('.btn-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.btn-top').click(function(){
        $('html, body').animate({scrollTop : 0},850);
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
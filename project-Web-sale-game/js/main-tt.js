var province_select = document.querySelector("select[name='province']");
var province_list = ["An Giang","Bà Rịa - Vũng Tàu","Bạc Liêu","Bắc Giang","Bắc Kạn","Bắc Ninh","Bến Tre","Bình Dương","Bình Định","Bình Phước","Bình Thuận","Cà Mau","Cao Bằng","Cần Thơ","Đà Nẵng","Đắk Lắk","Đắk Nông","Đồng Nai","Đồng Tháp","Điện Biên","Gia Lai","Hà Giang","Hà Nam","Hà Nội","Hà Tĩnh","Hải Dương","Hải Phòng","Hòa Bình","Hậu Giang","Điện Biên","Thành phố Hồ Chí Minh","Khánh Hòa","Kiên Giang","Kon Tum","Lai Châu","Lào Cai","Lạng Sơn","Lâm Đồng","Long An","Nam Định","Nghệ An","Ninh Bình","Ninh Thuận","Phú Thọ","Phú Yên","Quảng Bình","Quảng Nam","Quảng Ngãi","Quảng Ninh","Quảng Trị","Sóc Trăng","Sơn La","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","Thừa Thiên - Huế","Tiền Giang","Trà Vinh","Tuyên Quang","Vĩnh Long","Vĩnh Phúc","Yên Bái"];
for (var index = 0; index < province_list.length; index++) {
	var option = document.createElement("option");
	option.setAttribute("value", province_list[index]);
	option.innerText = province_list[index];
	// console.log(option);
	province_select.append(option)
}
$('#ic').fadeOut('slow/400/fast')
if ($('#ic').fadeOut('slow/400/fast')) {
	$('#btn').click(function(event) {
	$('#ic').fadeIn('slow/400/fast');
});
} else if ($('#ic').fadeIn('slow/400/fast')) {
	$('#btn').click(function(event) {
	$('#ic').fadeOut('slow/400/fast');
});
} 

$('#ic-2').fadeOut('slow/400/fast')
if ($('#ic-2').fadeOut('slow/400/fast')) {
	$('#btn-2').click(function(event) {
	$('#ic-2').fadeIn('slow/400/fast');
});
} else if ($('#ic-2').fadeIn('slow/400/fast')) {
	$('#btn-2').click(function(event) {
	$('#ic-2').fadeOut('slow/400/fast');
});
} 
 let name = $('#name');
let pass = $('#pass');
let repass = $('#repass')
$('#infor-dk').on('click', function() {
		let flag = true
		if ( name.val().trim() == '') {
			name.next('span').text('Vui lòng nhập Tài khoản')
			flag =  false
		} else {
			name.next('span').text('')
		}

		if ( pass.val().trim() == '') {
			pass.next('span').text('Vui lòng nhập Mật khẩu')
			flag =  false
		} else {
			pass.next('span').text('')
		}

		if ( repass.val().trim() == '' || repass.val() !== pass.val()) {
			repass.next('span').text('Nhập lại mật khẩu chưa đúng hoặc chưa nhập')
			flag =  false
		} else {
			repass.next('span').text('')
		}
		return flag
});

let nametk = $('#name-tk');
let passtk = $('#pass-tk');
$('#infor-dn').on('click', function() {
		let flag = true
		if ( nametk.val().trim() == '') {
			nametk.next('span').text('Vui lòng nhập Tài khoản')
			flag =  false
		} else {
			nametk.next('span').text('')
		}

		if ( passtk.val().trim() == '') {
			passtk.next('span').text('Vui lòng nhập Mật khẩu')
			flag =  false
		} else {
			passtk.next('span').text('')
		}
		return flag
});


function openModalSignin() {
	$('#exampleModalCenter').modal('show')
 		$('#pills-sign-in-tab').tab('show')
 }

 function openModalRegister() {
	$('#exampleModalCenter').modal('show')
 		$('#pills-register-tab').tab('show')
 }


$('#btn-send-email').click(function(event) {
	alert("Chúng tôi đã nhận được địa chỉ Email của bạn - Tin tức sẽ sớm gửi đến bạn")
});




mybutton = document.querySelector(".btn-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}






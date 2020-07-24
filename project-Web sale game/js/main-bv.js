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


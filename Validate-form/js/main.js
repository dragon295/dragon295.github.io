let selectDay = document.querySelector('select[name="day"]');
	//console.log(s1)
	
	for (let day = 1; day <= 31; day++) {
		let ngay = document.createElement('option');
		ngay.setAttribute('value', day);
		ngay.innerText = day;
		selectDay.append(ngay)
	}


let selectMonth =  document.querySelector('select[name="month"]');
	
	for (var month = 1 ; month <= 12 ; month++){
		let thang = document.createElement('option');
		thang.setAttribute('value', month);
		thang.innerText = month;
		selectMonth.append(thang)
	}


	let selectYear =  document.querySelector('select[name="year"]');
	
	for (var year = 1900 ; year <= 2020 ; year++){
		let nam = document.createElement('option');
		nam.setAttribute('value', year);
		nam.innerText = year;
		selectYear.append(nam)
	}

///////////////////////////////////// Data jquery /////////////
$('.t2').hide();
		$('.btn2').click(function(event) {
	$('.t2').fadeIn('slow/400/fast');
});
////////// Khai báo //////
	let name = $('#a1');
	let age = $('#a2');
	let sex = $('#a3');
	let address = $('#a4');
	let phone = $('#a5');
	let email = $('#a6');
	let password = $('#a7');
	let repassword = $('#a8');
	let fb = $('#a51');
///// check info ////////
	$('#form-infor').on('submit', function() {
		let flag = true
		if ( name.val().trim() == '') {
			name.next('span').text(' - Vui lòng nhập tên')
			flag =  false
		} else {
			name.next('span').text('')
		}

		if ( address.val().trim() == '') {
			address.next('span').text(' - Vui lòng nhập địa chỉ')
			flag =  false
		} else {
			address.next('span').text('')
		}

		if ( phone.val().trim() == '' || phone.val().trim().match(/^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/) == null) {
			phone.next('span').text(' - Vui lòng nhập số điện thoại')
			flag =  false
		} else {
			phone.next('span').text('')
		}

		if ( fb.val().trim() == '' || fb.val().trim().match(/(?:http:\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(\d.*))?([\w\-]*)?/) == null){
			fb.next('span').text(' - Vui lòng nhập đúng địa chỉ fb ' + "(VD: https://www.facebook.com/CLG123)")
			flag =  false
		} else {
			fb.next('span').text('')
		}

		if ( email.val().trim() == '' || email.val().trim().match(/[\w-]+@([\w-]+\.)+[\w-]+/) == null){
			email.next('span').text(' - Vui lòng nhập đúng email ' + "( Email phải có cả chữ và số , VD: lolhack394@gmail.com)")
			flag =  false
		} else {
			email.next('span').text('')
		}

		if ( password.val().trim() == '' || password.val().trim().match(/^(?=.*\d).{4,8}$/) == null) {
			password.next('span').text(" - Vui lòng nhập mật khẩu" + " (Mật khẩu phải dài từ 4 đến 8 chữ số và bao gồm ít nhất một chữ số.)")
			flag =  false
		} else {
			password.next('span').text('')
		}

		if ( repassword.val().trim() == '' || repassword.val() !== password.val()) {
			repassword.next('span').text(' - Nhập lại mật khẩu chưa đúng hoặc chưa nhập')
			flag =  false
		} else {
			repassword.next('span').text('')
		}
		return flag
	});
	


	



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

function kiemTra () {
	let name  = $('#a1').val();
	let age = $('#a2').val();
	let sex = $('#a3').val();
	let address = $('#a4').val();
	let phone = $('#a5').val();
	let email = $('#a6').val();
	let password = $('#a7').val();
	let repassword = $('#a8').val();
	let info;
///// check info ////////
	if (name == "") {
	 $('#errorname').text('Vui lòng nhập tên');
	} else {
	$('#errorname').text('')
	}

	if (address == "") {
	 $('#erroradress').text('Vui lòng nhập địa chỉ');
	} else {
	$('#erroradress').text('')
	}

	if (phone == "") {
	 $('#errorphone').text('Vui lòng nhập số điện thoại');
	} else {
	$('#errorphone').text('')
	}

	if (email == "") {
	 $('#erroremail').text('Vui lòng nhập email');
	} else {
	$('#erroremail').text('')
	}

	if (password == "") {
	 $('#errorpassword').text('Vui lòng nhập mật khẩu');
	} else {
	$('#errorpassword').text('')
	}

	if (repassword == "" || repassword !== password) {
	 $('#errorrepassword').text('Nhập lại mật khẩu chưa đúng hoặc chưa nhập');
	} else {
	$('#errorrepassword').text('')
	}

	if (name && age && sex && address && phone && email && password && repaassword) {
		info = "Tên của bạn là: " + name;
		info += "Tuổi của bạn là: " + age;
		info += "Giới tính của bạn là: " + sex
		info += "Địa chỉ của bạn là: " + address
		info += "Điện thoại của bạn là: " + phone
		info += "Email của bạn là: " + email
		info += "Mật khẩu của bạn là: " + password
	}
	
}

	



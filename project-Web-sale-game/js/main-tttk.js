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
	
	for (let year = 1900 ; year <= 2020 ; year++){
		let nam = document.createElement('option');
		nam.setAttribute('value', year);
		nam.innerText = year;
		selectYear.append(nam)
	}
let province_select = document.querySelector("select[name='province']");
let province_list = ["An Giang","Bà Rịa - Vũng Tàu","Bạc Liêu","Bắc Giang","Bắc Kạn","Bắc Ninh","Bến Tre","Bình Dương","Bình Định","Bình Phước","Bình Thuận","Cà Mau","Cao Bằng","Cần Thơ","Đà Nẵng","Đắk Lắk","Đắk Nông","Đồng Nai","Đồng Tháp","Điện Biên","Gia Lai","Hà Giang","Hà Nam","Hà Nội","Hà Tĩnh","Hải Dương","Hải Phòng","Hòa Bình","Hậu Giang","Điện Biên","Thành phố Hồ Chí Minh","Khánh Hòa","Kiên Giang","Kon Tum","Lai Châu","Lào Cai","Lạng Sơn","Lâm Đồng","Long An","Nam Định","Nghệ An","Ninh Bình","Ninh Thuận","Phú Thọ","Phú Yên","Quảng Bình","Quảng Nam","Quảng Ngãi","Quảng Ninh","Quảng Trị","Sóc Trăng","Sơn La","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","Thừa Thiên - Huế","Tiền Giang","Trà Vinh","Tuyên Quang","Vĩnh Long","Vĩnh Phúc","Yên Bái"];
for (let index = 0; index < province_list.length; index++) {
	let option = document.createElement("option");
	option.setAttribute("value", province_list[index]);
	option.innerText = province_list[index];
	province_select.append(option)
}
$('#ic').hide();
$('#ic-2').hide();
$('#btn').click(function(event) {
	$('#ic').fadeIn('slow/400/fast');
});
$('#btn-2').click(function(event) {
	$('#ic-2').fadeIn('slow/400/fast');
});
$('#button1').click(function(event) {
	alert("Cập nhật thông tin thành công. Bấm OK để tiếp tục")
});
$('#button2').click(function(event) {
	alert("Đổi mật khẩu thành công")
});
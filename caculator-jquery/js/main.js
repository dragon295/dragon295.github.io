function btn(num) {
	$('.input').val($('.input').val() + num)
}
function clearMen() {
	$('.input').val('')
}
function back() {
	let back1 = $('.input').val()
	$('.input').val(back1.substring(0,back1.length-1))
}
function kq () {
	$('.input').val(eval($('.input').val()))
}
function phanTram () {
	let pt = $('.input').val()
	$('.input').val(eval(pt/100))
}
function can () {
	let c = $('.input').val()
	$('.input').val(eval(Math.sqrt(c)))
}
function binhPhuong () {
	let bp = $('.input').val() * $('.input').val()
	$('.input').val(eval(bp))
}
function factorial () {
	 let r = 1;
	let gt = $('.input').val()
	while (gt > 0) r *= gt--;
    $('.input').val(eval(r)) 
}
function changeTheme(theme) {
	let ct = $('body')
	if ($('body').hasClass('theme')) {
		$('body').removeClass('theme')
	} else {
		for (var i = 0; i < ct.length; i++) {
		ct[i].setAttribute('class', 'theme')
	}
	}
}

 	

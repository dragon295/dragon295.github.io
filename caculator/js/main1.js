function btn(num) {
	document.form.input.value = document.form.input.value + num
}
function clearMen() {
	document.form.input.value = ""
}
function back() {
	let back1 = document.form.input.value ;
	document.form.input.value = back1.substring(0,back1.length-1) 
}
function kq () {
	let ketqua = document.form.input.value
	if (ketqua) {
		document.form.input.value = eval(ketqua)
	}	
}
function phanTram () {
	let pt = document.form.input.value
	document.form.input.value = eval(pt/100)
}
function can () {
	let c = document.form.input.value
	document.form.input.value = eval(Math.sqrt(c))
}
function binhPhuong () {
	let bp = document.form.input.value * document.form.input.value
	document.form.input.value = eval(bp)
}
 function factorial() {
  let r = 1;
  let gt = document.form.input.value
  while (gt > 0) r *= gt--;
    document.form.input.value = eval(r)
}

 	

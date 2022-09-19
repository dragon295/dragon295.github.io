// 1

let upper_case = (str) => {
	return /^[A-Z]/.test(str) ? "String's first character is uppercase" : "String's first character is not uppercase";
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2

let is_creditCard = (str, regex) => {
	regex = /^(?:(4[\d]{12}(?:[\d]{3})?)|5[1-5][\d]{14}|(?:6011|5[0-9]{2})[0-9]{12}|3[47][\d]{13}|3(?:0[0-5]|[68][\d])[\d]{11}|((?:2131|1800|35[\d]{3})[\d]{11}))$/
	console.log(str.length);
	return regex.test(str);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3


let valid_email = (str, regex) => {
	regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
	return regex.test(str) ? "Valid email address!" : "You have entered an invalid email address!"
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4

let is_dateString = (str, regex) => {
	regex = /^1[0-2]|0?[1-9]\/(3[01]|[1-2][0-9]|0[1-9])\/(?:[0-9]{2})?[0-9]{2}$/g;
	return regex.test(str);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5


let trim = (str, regex) => {
	regex = /^\s*|\s*$/g;
	return str.replace(regex, "")
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6
let  count_words = () => {
	let str1= document.getElementById("InputText").value;
//exclude  start and end white-space
str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1  
str1 = str1.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing  
str1 = str1.replace(/\n /,"\n");
document.getElementById("noofwords").value = str1.split(' ').length;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7

let is_IP = (str, regex) => {
	regex =  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
	return regex.test(str)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8


let vowel_count = (str) => str.match(/[aiueo]/gi).length

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9

let is_url = (str, regex) => {
	regex =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	return regex.test(str)
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10

let is_alphaNumeric = (str, regex) => {
	return /^[\w]+$/.test(str)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

let is_timeString = (str, regex) => {
	regex = /^(2[0-3]|[0-1]\d):([0-5][0-9]):([0-5][0-9])$/gi;
	// regex = /^(2[0-3]|[0-1]?\d):([0-5]?[0-9]):([0-5]?[0-9])$/gi;
	return regex.test(str)
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

let is_usZipCode = (str, regex) => {
	regex = /^[0-9]{5}(?:-[0-9]{4})?$/gi;
	return regex.test(str)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 13

let is_ukPostCode = (str, regex) => {
	regex = /^[A-Z]{1,2}-?[0-9]{3,}?[A-Z]{2,}$/
	// regex = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$/
	return regex.test(str)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 14


let is_caPostalCode = (str, regex) => {
	regex = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
	return regex.test(str)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15

let is_socialSecurity_Number = (str, regex) => {
	regex = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
	return regex.test(str)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16

let is_hexadecimal = (str, regex) => {
	regex = /^[\da-fA-f]+$/
	return regex.test(str)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17

let is_hexcolor = (str, regex) => {
	regex = /^#?([\da-fA-f]{3}|[\da-fA-f]{6})$/
	return regex.test(str)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 18

let is_domain = (str, regexs) => {
	regex = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i
	return regex.test(str)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 19

let is_html = (str, regex) => {
	regex = /<([a-z]+) *[^/]*?>/
	return regex.test(str)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 20

let is_alphaDash = (str, regex) => {
	regex = /^[\w\-]+$/i;
	return regex.test(str)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 21

let thousands_separators = (str) => {
	let num_parts = num.toString().split(".");
	num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return num_parts.join(".");
}
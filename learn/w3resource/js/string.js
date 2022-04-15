/////////////////////////////////////////////////////////////////////////////////////////////////
// 1


let is_string = (str) => {
	return typeof str === "string";
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 2

let is_Blank = (str) => {
	return str === "";
	// return str.length === 0 ? true : false
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 3

let string_to_array = (str) => {
	return str.trim().split(" ");
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 4


let truncate_string = (str, num) => {
	// return str.substring(0, num);
	// return str.substr(0, num);
	return typeof str === "string" &&  num > 0 ?  str.slice(0, num) : undefined;
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 5

let abbrev_name = (str) => {
	let convert = str.trim().split(" ");
	if (convert.length > 1) convert[0] = convert[0] + " " + convert[1].slice(0, 1);
	return convert[0];
} 


/////////////////////////////////////////////////////////////////////////////////////////////////
// 6

let protect_email = (str) => {
	let convert = str.split("@");
	return convert[0].slice(0, convert[0].indexOf("_")) + "...@" + convert[1].slice(0);

	// let protect = str.slice(str.indexOf("_"), str.indexOf("@"));
// console.log(str.slice(0, str.indexOf(protect)) + "..." + str.slice(str.indexOf("@")))

}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 7

let string_parameterize = (str) => {
	return str.trim().toLowerCase().split(" ").join("-");
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 8

let capitalize = (str) => {
	return str.trim().charAt(0).toUpperCase() + str.substr(1)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 9

let capitalize_Words = (str) => {
	// let arr = str.trim().toLowerCase().split(" ");
	// return arr.map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ");

	console.log(str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1)))
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 10 

let swapcase = (str) => {
	return str.replace(/([a-z]+)|([A-Z]+)/g, (val1, val2) => {
		return val2 !== undefined ? val1.toUpperCase() : val1.toLowerCase();
	})
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 11

let camelize = (str) => {
	console.log(str.replace(/\W+(.)/g, (match, chr) => {
		return chr.toUpperCase();
	}))
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 12

let uncamelize = (str, separator) => {
	if(typeof(separator) === "undefined")  separator = " ";
	str = str.replace(/[A-Z]/g, (letter) => {
		return separator + letter.toLowerCase();
	})
	return str.split(" ").join(separator);
	// return str.replace("/^" + separator + "/", '');
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 13

let repeat = (str, n) => {
	if (n === undefined) n = 1;
	return str.repeat(n);

	// if(typeof(n) == "undefined") n =1;
	// return n < 1 ? '' : new Array(n + 1).join(str);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 14


let insert = (str, str_add, n) => {
	if (str_add === undefined && n === undefined) return str;
	if (str_add !== null && n === undefined) return str_add + str;
	return str.slice(0, n) + str_add + str.slice(n)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 15

let humanize_format = (num, divide = num % 100) => {
	if (typeof num === "undefined") return;
	switch (divide) {
		case 1: return num + "st";
		case 2: return num + "nd";
		case 3: return num + "rd";
		default: return num + "th";
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 16

let text_truncate = (str, length, ending) => {
	if (length === null) length = 100;
	if (ending === null) ending = '...';
	if (str.length > length) {
		return str.substring(0, length - ending.length) + ending;
	} else {
		return str;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 17


let string_chop = (str, num, array = []) => {
	if (str === null) return [];
	if (num === undefined) return [str]
		for (let i = 0 ; i < str.length; i+=num) array.push(str.slice(i, i+num))
			return array
	}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 18


let countCharac = (str, val) => {
	const regex = new RegExp(val, "gi");
	return str.match(regex).length
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 19

let escape_HTML = (str) => {
	if (str === undefined) return ""; 
	const regex = new RegExp(/[<>"]/g)
	return str.replace(regex, (val) => {
		switch(val) {
			case "<": return  "&lt;";
			case ">": return "&gt;";
			default :  return "&quot;";
		}
	})
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 20


let formatted_string = (pad, user_str, pad_pos) => {
	if (typeof user_str === 'undefined') return pad;
	if (pad_pos === 'l') {
		return (pad + user_str).slice(-pad.length);
	}
	else {
		return (user_str + pad).substring(0, pad.length);
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 21


let repeat_string = (str, num) => {
	// if (str === null || num === Infinity || num === null || num < 0)  return 'Error in string or count.';
	// return str.repeat(num);
	// debugger
	if (str === null || num === Infinity || num === null || num < 0)  return 'Error in string or count.';
	num = num || 0;
	return new Array(num + 1).join(str);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 22

let subStrAfterChars = (str, char, pos) => {
	if(pos=='b') return str.substring(str.indexOf(char) + 1);
	else if(pos=='a') return str.substring(0, str.indexOf(char));
	else return str;  
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 23

let strip = (str) => {
	// return str.trim();

	return str.replace(/^\s+|\s+$/g, "")
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 24

let truncate = (str, n) => {
	return str.split(" ").slice(0, n).join(" ")
}



/////////////////////////////////////////////////////////////////////////////////////////////////
// 25

let alphabetize_string = (str) => {
	console.log(str.split("").sort().join("").trim())
}



/////////////////////////////////////////////////////////////////////////////////////////////////
// 26

let remove_first_occurrence = (str, val) => {
	let regex = new RegExp(val, "g");
	console.log(str.trim().replace(regex, "").split(" ").filter(val => val).join(" "))
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 27


let ascii_to_hexa = (str, arr = []) => {
	for (let i = 0 ; i < str.length; i++) {
		let hex = Number(str.charCodeAt(i)).toString(16);
		arr.push(hex);
	}
	return arr.join('');
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 28

let hex_to_ascii = (str, add_str = "") => {
	let hex = str.toString();
	for (let i = 0; i < hex.length; i += 2) add_str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		return add_str;
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 29

let search_word = (str, val) => {
	let regex = new RegExp(val, "g") 
	return `'${val}' was found in ${str.match(regex).length} times`
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 30


let string_endsWith = (str, val) => {
	return str.slice(-val.length) === val
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 31


let escape_html = (str) => {
	return str.replace(/[<>&'"]/g, (val) => {
		switch(val) {
			case "<" : return "&lt;";
			case ">" : return "&gt;";
			case "'" : return "&apos;";
			case '"' : return "&quot;";
			default : return "&amp;" 
		}
	})
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 32

let remove_non_ascii = (str) => {
	if ((str===null) || (str==='')) return false;
	else str = str.toString();

	return str.replace(/[^\x20-\x7E]/g, '');
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 33

let remove_non_word = (str) => {
	if ((str===null) || (str==='')) return false;
	else str = str.toString();

	return str.replace(/\W+/g, " - ")
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 34

let sentenceCase = (str) => {
	if ((str===null) || (str==='')) return false;
	else str = str.toString();
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	// return str.trim().toLowerCase().split(" ").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
} 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 35

let strip_html_tags = (str) => {
	if ((str===null) || (str==='')) return false;
	else str = str.toString();

	return str.trim().replace(/<[^<]*>/g, "")
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 36

let zeroFill = (number, width, osign) => {
	let num = '' + Math.abs(number),
	zerosw = width - num.length,
	sign = number >= 0;
	return (sign ? (osign ? '+' : '') : '-') +
	Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}



/////////////////////////////////////////////////////////////////////////////////////////////////
// 37

let compare_strings = (str1, str2) => {
	return str1.toLowerCase() === str2.toLowerCase();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 38

let case_insensitive_search = (str, val) => {
	return str.slice(str.length - val.length) === val.charAt(0).toUpperCase() + val.slice(1)
	? "Matched" : "Not Matched"
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 39

let Uncapitalize = (str) => {
	return str1.charAt(0).toLowerCase() + str1.slice(1);
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 40

let unCapitalize_Words = (str) => {
	return str.replace(/\w\S*/g, (val) => {
		return val.charAt(0).toUpperCase() + val.slice(1)
	})
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 41

let capitalizeWords = (str) => {
	return str.replace(/\w\S*/g, (val) => {
		return val.slice(0).toUpperCase()
	})
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 42


let unCapitalizeWords = (str) => {
	return str.replace(/\w\S*/g, (val) => {
		return val.slice(0).toLowerCase()
	})
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 43

let isUpperCaseAt = (str, n) => {
	return str.charAt(n) === str.charAt(n).toUpperCase();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 44

let isLowerCaseAt = (str, n) => {
	return str.charAt(n) === str.charAt(n).toLowerCase();
}



/////////////////////////////////////////////////////////////////////////////////////////////////
// 45

let humanize = (num, divide = num % 100) => {
	if (typeof num === "undefined") return;
	switch(divide) {
		case 1: return num + "st";
		case 2: return num + "nd";
		case 3: return num + "rd";
		default : return num + "th"
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 46

let startsWith = (str, val) => str.slice(0, val.length) === val;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 47

let endsWith = (str, val) => str.slice(str.length - val.length) === val;


/////////////////////////////////////////////////////////////////////////////////////////////////
// 48



const successor = (str) => {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz',
	length = alphabet.length,
	result = str,
	i = str.length;

	while(i >= 0) {
		var last = str.charAt(--i),
		next = '',
		carry = false;

		if (isNaN(last)) {
			index = alphabet.indexOf(last.toLowerCase());

			if (index === -1) {
				next = last;
				carry = true;
			}
			else {
				var isUpperCase = last === last.toUpperCase();
				next = alphabet.charAt((index + 1) % length);
				if (isUpperCase) {
					next = next.toUpperCase();
				}

				carry = index + 1 >= length;
				if (carry && i === 0) {
					var added = isUpperCase ? 'A' : 'a';
					result = added + next + result.slice(1);
					break;
				}
			}
		}
		else {
			next = +last + 1;
			if(next > 9) {
				next = 0;
				carry = true;
			}

			if (carry && i === 0) {
				result = '1' + next + result.slice(1);
				break;
			}
		}

		result = result.slice(0, i) + next + result.slice(i + 1);
		if (!carry) {
			break;
		}
	}
	return result;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 49

let guid = (num) => {
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', arr = [], len = num || 32
	for (let i = 0 ; i < len; i++) arr.push(chars[Math.floor(Math.random() * chars.length)])
		console.log(arr.join(""))
}

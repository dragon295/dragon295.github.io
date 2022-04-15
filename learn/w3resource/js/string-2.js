//1

const is_string = (v) => Object.prototype.toString.call(v) === '[object String]';

/////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const is_Blank = (str) => str.length === 0 ? true : false;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const string_to_array = (str) => str.trim().split(" ");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 4

const truncate_string = (str, n) => typeof str === "string" ? str.substring(0, n) : `${str} is not string`

/////////////////////////////////////////////////////////////////////////////////////////////////
// 5

const abbrev_name = (str) => {
	let cut = str.trim().split(" ");
	return cut[0] + " " + cut[1].slice(0, 1) + ".";
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 6

const protect_email = (str) => {
	let cutFrom = str.slice(str.indexOf("_"), str.indexOf("@"));
	return str.replace(cutFrom, "...")
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const string_parameterize = (str) => str.trim().toLowerCase().replace(/\s/g, "-");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const capitalize = (str) => str.trim().replace(/^[\w]{1}/, l => l.toUpperCase());

/////////////////////////////////////////////////////////////////////////////////////////////////
// 9

const capitalize_Words = (str) => str.trim().replace(/(^\w{1})|(\s+\w{1})/g, l => l.toUpperCase());

/////////////////////////////////////////////////////////////////////////////////////////////////
// 10

const swapcase = (str) => {
	return str.replace(/([a-z]+)|([A-Z]+)/g, (match, chr) => {
		console.log(chr);
		return chr ? match.toUpperCase() : match.toLowerCase();
	})
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 11

const camelize = (str) => {
	console.log(str.replace(/\s+(.)/g, (match, chr) => {
		return match.trim().toUpperCase();
	}))
} 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const uncamelize = (str, change = " ") => 
str.replace(/[A-Z]/g, (match) => change + match.toLowerCase());

/////////////////////////////////////////////////////////////////////////////////////////////////
// 13

const repeat = (str, n) => {
	if(typeof(n) == "undefined") n = 1;
	return n < 1 ? '' : new Array(n + 1).join(str);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const insert = (str, add, n) => {
	if(add === undefined && n === undefined) return str
		else if(add !== undefined && n === undefined) return add + str;
	else return str.slice(0, n) + add + str.slice(n);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const humanize_format = (n) => n === undefined 
? undefined 
: n % 10 === 1 && n !== 11 
? n + "st"
: n % 20 === 2 && n !== 12 
? n + "nd"
: n % 30 === 3 && n !== 13
? n + "rd"
: n + "th" 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const text_truncate = (str, length, ending) => {
	// debugger
	if (length == null) length = 100;

	if (ending == null) ending = '...';

	if (str.length > length) return str.substring(0, length - ending.length) + ending;
	else return str;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const string_chop = (str, n , array= []) => {
	if (str === null) return [];
	if (n === undefined) return str.split(" ");
	for(let i = 0 ; i < str.length; i+= n) array.push(str.slice(i, i+n))
		console.log(array)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const count = (str, val) => {
	const regex = new RegExp(val, "gi");
	return str.match(regex).length
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 19

const escape_HTML = (str) => {
	'use strict';

	return str.replace(/[&<>"]/g, (tag) => {
		var chars_to_replace = {
			'&': '&',
			'<': '<',
			'>': '>',
			'"': '"'
		};

		return chars_to_replace[tag] || tag;
	});
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 20

const formatted_string = (str, add, n) => {
	if (n === undefined) return add + str;
	else if(n === "l") return (str+add).slice(-str.length);
	else return (add + str).substring(0, str.length);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 21

const repeat_string = (str, n) => {
	if (n === undefined) return "Error in string or count."
		if (n === 0) return "";
	return str + repeat_string(str, n - 1);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 22

const subStrAfterChars = (str, char, pos) => {
	console.log(str.indexOf(char))
	if(pos ==='b') return str.substring(str.indexOf(char) + 1);
	else if(pos === 'a') return str.substring(0, str.indexOf(char));
	else return str;  
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 23

const strip = (str) => str.replace(/^(\s+)|(\s+)$/gi, "");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 24

const truncate = (str, n) => str.split(" ").slice(0, n).join(" ");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 25

const alphabetize_string = (str) => str.split("").sort().join("").trim();

/////////////////////////////////////////////////////////////////////////////////////////////////
// 26

const remove_first_occurrence = (str, rm) => 
str.trim().replace(rm, "").split(" ").filter(v => v).join(" ");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 27

const ascii_to_hexa = (str, arr = []) => {
	for (let i = 0 ; i < str.length; i++) {
		let hex = Number(str.charCodeAt(i)).toString(16);
		arr.push(hex);
	}
	return arr.join('');
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 28

const hex_to_ascii = (str, add_str = "") => {
	let hex = str.toString();
	for (let i = 0; i < hex.length; i += 2) add_str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		return add_str;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 29

const search_word = (str, word) =>  {
	let regex = new RegExp(word, "g");
	return `${word} was found ${str.match(regex).length} times.`;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 30

const string_endsWith = (str, word) => str.slice(-word.length) === word;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 31

const escape_html2 = (str) => {
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

const remove_non_ascii = (str) => str.replace(/\W+/gi, "");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 33

const remove_non_word = (str) => str.replace(/\W+/gi, " - ");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 34

const sentenceCase = (str) => 
str.trim().toLowerCase().replace(/^(\w{1})|(\s+\w{1})/g, l => l.toUpperCase());

/////////////////////////////////////////////////////////////////////////////////////////////////
// 35

const strip_html_tags = (str) => str.trim().replace(/(<[^<]+>)/gi, "");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 36

const zeroFill = (number, width, osign) => {
	let num = '' + Math.abs(number),
	zerosw = width - num.length,
	sign = number >= 0;
	return (sign ? (osign ? '+' : '') : '-') +
	Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 37

const compare_strings = (str1, str2) => 
str1.trim().toLowerCase().split("").sort().join("") === str2.trim().toLowerCase().split("").sort().join("")

/////////////////////////////////////////////////////////////////////////////////////////////////
// 38

const case_insensitive_search = (str, word) => 
new RegExp(word, "gi").test(str.toLowerCase()) ? "Matched" : "Not Matched";


/////////////////////////////////////////////////////////////////////////////////////////////////
// 39

const Uncapitalize = (str) =>  str.replace(/^\w{1}/, l => l.toLowerCase());

/////////////////////////////////////////////////////////////////////////////////////////////////
// 40

const unCapitalize_Words = (str) => str.replace(/^(\w{1})|(\s+\w{1})/g, l => l.toLowerCase());

/////////////////////////////////////////////////////////////////////////////////////////////////
// 41

const capitalizeWords = (str) => str.replace(/\w+/g, l => l.toUpperCase());

/////////////////////////////////////////////////////////////////////////////////////////////////
// 42

const unCapitalizeWords = (str) => str.replace(/\w+/g, l => l.toLowerCase());

/////////////////////////////////////////////////////////////////////////////////////////////////
// 43

const isUpperCaseAt = (str, i) => str.charAt(index).toUpperCase() === str.charAt(index);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 44

const isLowerCaseAt = (str, i) => str.charAt(index).toLowerCase() === str.charAt(index);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 45

const humanize = (n) => n === undefined 
? undefined 
: n % 10 === 1 && n !== 11 
? n + "st"
: n % 20 === 2 && n !== 12 
? n + "nd"
: n % 30 === 3 && n !== 13
? n + "rd"
: n + "th" 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 46

const startsWith = (str, word) => str.slice(0, word.length) === word;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 47

const endsWith = (str, word) => str.slice(-word.length) === word;

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

const guid = (n) => {
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', arr = [], len = n || 32;
	for (let i = 0 ; i < len; i++) arr.push(chars[Math.floor(Math.random() * chars.length)])
		console.log(arr.join(""))
}
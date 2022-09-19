// (function () {
// 	console.log("sad");
// })();

// function capitalize(str) {
// 	return str.trim().toLowerCase().split(' ').map(val => {
// 		return val.charAt(0).toUpperCase() + val.slice(1);
// 	}).join(" ");
// }

// function getExtensionFilename(str) {
// 	let sad = str.split(".");
// 	return sad[sad.length - 1];
// }

// function findMax(num1 ,num2, num3) {
// 	return Math.max(num1, num2, num3)
// }

// findMax(-6, 5, 4)


// function findMaxDiff(arr) {
//   // debugger;
//   if(arr.length < 2) {
//   	return 0
//   }
//   let maxDiff = 0;
//   for (let i = 0 ; i < arr.length; i+=1) {
//   	maxDiff = (maxDiff < Math.abs(arr[i] - arr[i+1])) ? Math.abs(arr[i] - arr[i+1]) : maxDiff;
//   }
//   return maxDiff;
// }


// function first(arr, n) {
// 	return n === "undefined" ? [arr[0]] : n < 0 ? [] : arr.slice(0, n)
// }


// function toNextChar(str) { 
// 	let arr = str.split("");
// 	for (let i = 0 ; i < arr.length ; i++) {
// 		arr[i] = String.fromCharCode(str.charCodeAt(i) + 1);
// 	}
// 	return arr.join('')
// }

// function maxOfSumChain(arr, k) {
// 	let cut = arr.splice(arr[0], k)
// 	let sum = 0; 
// 	for(let calc of cut) {
// 		sum += calc;
// 	}
// 	return sum
// }


// function rearrangeChar(str1, str2) {
// 	let sort1 = str1.split('').sort();
// 	let sort2 = str2.split('').sort();
// 	return sort1.every(val => {
// 		return sort1[val] !== sort2[val] ? false : true;
// 	})
// }


// function findmaxDiff(arr){
//    // debugger
//    let max = Math.max(...arr);
//    let count = 0;
//    for (let i = 0 ; i < arr.length; i++) {
//    	if (max - arr[i] > count) {
//    		count = max - arr[i];
//    	}
//    }
//    return count
// }

// function findMostFrequent(arr) {
// 	return [...new Set(arr)]
// 	.map((value) => [value, arr.filter((v) => v === value).length])
// 	.sort((a, b) => a[1] - b[1])
// 	.reverse()
// 	.filter((value, i, a) => a.indexOf(value) === i)
// 	.filter((v, i, a) => v[1] === a[0][1])
// 	.map((v) => v[0]).reverse()
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1
function setTime() {
	let toDay = new Date();
	let hours = "";
	let dayList = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	console.log(`Today is : ${dayList[1]}`);
	let hourNow = toDay.getHours(10);
	let minuteNow = toDay.getMinutes();
	let secondNow = toDay.getSeconds();
	console.log(`Current time is : ${hourNow} ${hours < 12 ? "AM" : "PM"} : ${minuteNow} : ${secondNow}`);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2

function printOut() {
	window.print();
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3

function setDayJS() {
	let setDate = new Date();
	let year = setDate.getFullYear();
	let month = setDate.getMonth() + 1;
	let day = setDate.getDate();
	console.log(`${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}-${year}`);
	console.log(`${month < 10 ? "0" + month : month}/${day < 10 ? "0" + day : day}/${year}`);
	console.log(`${day < 10 ? "0" + day : day}-${month < 10 ? "0" + month : month}-${year}`);
	console.log(`${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4


function caculateTriangle(a, b, c) {
	let half = (a + b + c) / 2;
	console.log(Math.sqrt(half*(half - a) * (half - b) * (half - c)));
}

document.addEventListener('load', animate_string);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5

function animate_string(id) {
	const element = document.getElementById(id);
    const textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;
    setInterval(() => {
    	text = text[text.length - 1] + text.substring(0, text.length - 1);
    	textNode.data = text;
    }, 100);
}

animate_string('target');


/////////////////////////////////////////////////////////////////////////////////////////////////
// 6

function leapYear(year) {
	// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
	return (""+year).lastIndexOf(0) !== 1 && year % 400 !== 0 ? false : true;

}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 7

function countDay() {
	for (let year = 2014; year <= 2050; year++) {
		let d = new Date(year, 0, 1);
		if (d.getDay() === 0) {
			console.log(year)
		}
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 8

function userInput() {
	let random = Math.round(Math.random() * 10);
	let sad = prompt("What is number: ");
	return +sad === random ? "Good Work" : "Not matched";
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 9

function countChristmas() {
	let rightNow = new Date();
	let christmas = new Date(rightNow.getFullYear(), 12, 25);
	let oneDay = 1000*60*60*24;
	console.log(Math.floor((christmas.getTime() - rightNow.getTime()) / (oneDay)) + " days left");
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 10

let input1 = document.getElementById("val1");
let input2 = document.getElementById("val2");
let buttonFirst = document.getElementById("b1");
let buttonSec = document.getElementById("b2");
let buttonThird = document.getElementById("b3");
let divVal = document.getElementById("returnValue");
buttonFirst.addEventListener("click", () => {
	multiply(input1, input2);
})
buttonSec.addEventListener("click", () => {
	divide(input1, input2);
})
buttonThird.addEventListener("click", () => {
	clearForm();
})
function multiply(input1, input2) {
	divVal.innerText = `The Result Is: ${input1.value * input2.value}`;
}

function divide(input1, input2) {
	divVal.innerText = `The Result Is: ${input1.value / input2.value}`;
}

function clearForm() {
	input1.value = "";
	input2.value = "";
	divVal.innerText = `The Result Is: ${0}`;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 11

function convertCelsius(num) {
	let fahrenheit  = num * (9/5) + 32;
	console.log(`${num}°C is ${fahrenheit}°F`);
}

function convertFahrenheit(num) {
	let celsius  = (num - 32) * (5/9) ;
	console.log(`${num}°F is ${celsius}°C`)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 12

function getCurrentURL() {
	console.log(window.location.href);	
	console.log(document.URL);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 13

function createletiable(val) {
	let name = "";
	let no = val;
	name = no
	console.log(name)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 14

function getExtension(url) {
	console.log(url.split(".").pop());
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 15


function check13(num) {
	return num <= 13 ? 13 - num : Math.pow(num, 2) 
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 16


function sumValue(num1, num2) {
	return num1 === num2 ? (num1 + num2) * 3 : (num1 + num2);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 17


function check19(num) {
	return num >= 19 ? Math.abs(num - 19) * 3 : 19 - num;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 18


let sumValue50 = (a, b) => {
	return a === 50 || b === 50 || ( a + b === 50) ? true : false
} 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 19


let valueInside = (num) => {
	return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 20

let checkNumber = (a, b) => {
	return( a < 0 && b > 0) || (a > 0 && b < 0) ? true : false 
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 21

let addPy = (str) => {
	return str === null || str === undefined || str.startsWith("Py") ? str : "Py" + str;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 22

let removeCharac = (str, i) => {
	console.log(str.slice(0, i) + str.slice(i + 1, str.length));
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 23

let changingString = (str) => {
	let rest = str.slice(1, str.length - 1);
	return str.length < 1 ? str : str[str.length -1] + rest + str.charAt(0);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 24

let addFirstCharac = (str) => {
	return str.charAt(0) + str + str.charAt(0);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 25

let checkDivisible = (num) => {
	return num % 3 === 0 || num % 7 === 0 ? true : false;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 26

let addThreeCharac = (str) => {
	return str.length < 3 ? str : str.slice(0, 3) + str + str.slice(0, 3);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 27

let checkJava = (str) => {
	return str.slice(0, 4) === "Java"
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 28

let lucLoz = (num1, num2) => {
	return (99 >= num1 && num1 >= 50) || (99 >= num2 && num2 >= 50);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 29

let lucLoz2 = (a, b, c) => {
	return (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 30

let checkStr = (str) => {
	return str.indexOf("Script") === 4 ? str.slice(0, str.length - "Script".length) : str;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 31

let checkInteger = (a, b, c) => {
	return Math.max(a, b, c);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 32

let near100 = (a, b) => {
	return (100 - a < 100 - b) ? a : b  
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 33

let nearValue = (x, y) => {
	return (x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100) 
	? true 
	: false;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 34

let comapreVal = (x, y) => {
	return Math.max(x, y);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 35

let checkStr2 = (str, val) => {
	return str.indexOf(val) === 1 || str.indexOf(val) === 2 || str.indexOf(val) === 3;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 36

let checkLastDigit = (a, b, c) => {
	return (a > 0 && b > 0 && c > 0) 
	? (a % 10 === b % 10 && a % 10 === c % 10 && b % 10 === c % 10) 
	: false
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 37

let moreCharac = (str) => {
	return str.length <= 3 
	? str.toUpperCase() 
	: str.slice(0, 3).toLowerCase() + str.slice(3, str.length);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 38

let findScore = (num) => {
	return num >= 90 && num <= 100 ? true : false;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 39

let sumNum = (x, y) => {
	return (x + y) >= 50 && (x + y) <= 80 ? 65 : 80 
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 40

let findEight = (a, b) => {
	return a === 8 || b === 8 || (a + b === 8) || (Math.abs(a- b) === 8) ? true : false
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 41

let findEqual = (a, b, c) => {
	return a === b && a === c && b === c ? 30 : a === b || a === c || b === c ? 40 : 20
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 42

let riseUp = (a, b, c) => {
	return a < b && b < c ? "strict mode" : b < c ? "soft mode" : "undefined";
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 43

let findRightDigit = (p, q, r) => {
	return (p % 10 === q % 10) || (p % 10 === r % 10) || (q % 10 === r % 10);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 44
let lessby20_others = (x, y, z) => {
	return (x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < y || z < x));
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 45

let findFifteen = (a, b) => {
	return a === 15 || b === 15 || (a + b === 15) || (Math.abs(a- b) === 15) ? true : false
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 46

let findMultiple = (a, b) => {
	return !(a % 7 === 0 || a % 11 === 0 && b % 7 === 0 || b % 11 === 0) 
	? a % 7 === 0 || a % 11 === 0 || b % 7 === 0 || b % 11 === 0 
	: false 
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 47

let findValue = (x, y, z) => {
	return y < 40 || y > 10000 ? false : y >=x && y <= z ? true : false
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 48

let reverseStr = (str) => {
	return str.split("").reverse().join("");
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 49

let nextAlphabet = (str) => {
	for (let i = 0 ; i < str.length ; i++) {
		console.log(String.fromCharCode(str.charCodeAt(i) + 1))
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 50

let convertStr = (str) => {
	let convert = str.split(" ");
	return convert.map(val => {
		return val.charAt(0).toUpperCase() + val.slice(1);
	}).join(" ")
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 51

let convertToTime = (num) => {
	console.log(`${Math.floor(num / 60)}:${num % 60}`);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 52

let sortAlphabet = (str) => {
	console.log(str.split("").sort().join(""));
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 53

let findDistance = (str) => {
	return (/a...b/).test(str) || (/b...a/).test(str);
	// return Math.abs(str.indexOf("b") - str.indexOf("a")) === 4  ? true : false;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 54

let findVowels = (str) => {
	console.log(str.match(/[aiueo]/gi).length);
	// return str.replace(/[^aeiou]/g, "").length; 
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 55

let countPAndT = (str) => {
	return str.match(/[p]/gi).length ===  str.match(/[t]/gi).length;
	 // return str.replace(/[^p]/, "").length === str.replace(/[^t]/, "").length
	}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 56

let divideTwoNum = (a, b) => {
	let divide = Math.round(a / b).toString().split("");
	let arr = [];
	for (val of divide) {
		arr.push(val);
	}
	console.log(arr)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 57

let copiesVal = (str, i) => {
	return i <= 1 ? str : str + copiesVal(str, i - 1);
	return i < 0 ? str : str.repeat(i);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 58
let duplicateStr = (str) => {
	return str.length < 3 ? str : str.slice(str.length - 3).repeat(4);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 59
let cutStr = (str) => {
	return str.length % 2 !== 0 ? str : str.slice(0, str.length / 2)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 60

let noFirstLast = (str) => {
	return str.slice(1, str.length - 1);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 61

let cutFirstLetter = (str1, str2) => {
	return str1.substring(1) + str2.substring(1);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 62

let right_three = (str) => {
	if (str.length > 1) return str.slice(-3) + str.slice(0, -3);
	return str;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 63

let cutThreeLetter = (str) => {
	let cut = (str.length + 1) / 2;
	return str.length % 2 !== 0 ? str.slice(cut - 2, cut + 1) : str;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 64

let concatStr = (str1, str2) => {
	return str1.length > str2.length 
	? str1.slice(- str2.length) + str2 
	: str1 + str2.slice(-str1.length) 
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 65

let findEnd = (str) => {
	return str.slice(-"Script".length) === "Script" ? true : false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 66

let findFirstLetter = (str) => {
	return str.startsWith("Los") || str.startsWith("New") ? true : ""
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 67

let removeP = (str) => {
	return str.startsWith("P") && str.endsWith("P") ? str.slice(1, str.length - 1) : str.startsWith("P")
	? str.slice(1) : str.endsWith("P") ? str.slice(0, str.length - 1) : str;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 68

let cutNumStr = (str, i) => {
	return str.substr(0, i) + str.substring(str.length - i);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 69

let sumVal = (arr) => {
	return arr[0] + arr[1] + arr[2];
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 70

let rotateArr = (arr) => {
	return [arr[1], arr[2], arr[0]];
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 71

let check1 = (arr) => {
	return arr[0] === 1 || arr[arr.length - 1] === 1 ? true: false
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 72
let checkFirstandLast = (arr) => {
	return arr[0] === arr[arr.length - 1] ? true : false
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 73
let sortArr = (array) => {
	// return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
	return array.sort();
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 74
let createNewArr = (arr) => {
	let mang = [];
	let i = 0;
	while (i < arr.length) {
		mang.push(Math.max(...arr));
		i++;
	}
	console.log(mang);
} 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 75
let addMiddleEle = (arr, arr1) => {
	let mang = [];
	mang.push(arr[1], arr1[1]);
	console.log(mang)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 76

let test1 = (arr) => {
	return [arr[0], arr[arr.length - 1]];
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 77
let find1Arrr = (arr) => {
	return arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1 ? true : false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 78

let find1And3Arrr = (arr) => {
	return arr.indexOf(1) === -1 || arr.indexOf(3) === -1 ? true : false;
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 79
let checkVal = (arr) => {
	return arr.indexOf(30) !== arr.lastIndexOf(30) || arr.indexOf(40) !== arr.lastIndexOf(40) 
	? true : false
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 80
let reverseArrEle = (arr) => {
	[arr[0], arr[arr.length - 1]] = [ arr[arr.length - 1], arr[0]];
	return arr
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 81

let sumNumber = (num) => {
	return num % 10 + Math.floor(num / 10);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 82

let addNum = (a, b) => {
	console.log( +(""+(a+b)).slice(1) )
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 83 

let findLongest = (arr) => {
	let max = arr[0].length;
	arr.forEach(val => max = Math.max(max, val.length));
	let result = arr.filter(val => val.length === max)
	return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////
//84

let nextAbc = (str) => {
	let arr = str.split('');
	for (let i = 0 ; i < arr.length; i++) {
		arr[i] = String.fromCharCode(str.charCodeAt(i) + 1);
		if(arr[i].charCodeAt() > "z".charCodeAt()) {
			arr[i] = String.fromCharCode(str.charCodeAt(i - str.indexOf("z")))
		}
	}
	return arr.join("");
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 85

let sumArrVal = (arr) => {
	debugger
	let result = [0, 0];
	for(let i = 0; i < arr.length; i++) {
		if(i % 2) result[1] += arr[i];
		else
			result[0] += arr[i];
	}
	return result
}



////////////////////////////////////////////////////////////////////////////////////////////////
// 86

let findAngle = (num) => {
	if (num < 0) {
		return false
	} else if (0 <= num && num < 90) {
		return "Acute angle"
	} else if (num === 90) {
		return "Right angle";
	} else if (90 < num && num < 180) {
		return "Obtuse angle"
	} else {
		return "Straight angle.";
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 87

let checkEqual = (arr1, arr2) => {
	for (let i = 0; i < arr1.length; i++) {
		return arr1[i] === arr2[i]
	}

	// for(let i = 0; i < arra1.length; i++) {
	// 	for(let j = i; j < arra1.length; j++) {
	// 		let result = true,
	// 		temp = arra1[i];
	// 		arra1[i] = arra1[j];
	// 		arra1[j] = temp;
	// 		for(let k = 0; k < arra1.length; k++) {
	// 			if(arra1[k] !== arra2[k]) {
	// 				result = false;
	// 				break;
	// 			}
	// 		}
	// 		if(result) {
	// 			return true;
	// 		}
	// 		arra1[j] = arra1[i];
	// 		arra1[i] = temp;
	// 	}
	// }
	// return false;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 88

let divideVal = (a, b, c) => {
	return a % c === b % c ? true : false;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 89

let findTrueDivision = (a, b, c) => {
	return a + b === c || a - b === c || a * b === c || a / b === c
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 90

let findThird = (arr, k) => {
	let sort = arr.sort((a,b) => b - a);
	return sort[k - 1];
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 91

let findMaxSum = (arr, k) => {
	let result = 0;
	let temp_sum = 0;
	for (var i = 0; i < k - 1; i++) {
		temp_sum += nums[i];
	}
	for (var i = k - 1; i < nums.length; i++) {
		temp_sum += nums[i];
		if (temp_sum > result) {
			result = temp_sum;
		}
		temp_sum -= nums[i - k + 1];
	}
	return result;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 92

let findBigSum = (arr) => {
	debugger
	// let sum = 0;
	// for (let i = 0 ; i < arr.length; i++) {
	// 	sum = (sum < Math.abs(arr[i] - arr[i+1])) ? Math.abs(arr[i] - arr[i + 1]) : sum;
	// }
	// return sum
	let max = -1;
	let temp;
	for (let i = 0; i < arr.length - 1; i++) {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	}
	return max;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 93

let findDifferent = (arr) => {
	let max = 0;
	let temp;
	for (let i = 0 ; i < arr.length; i++) {
		temp = Math.max(...arr) - arr[i];
		max = Math.max(max, temp);
	}
	return max
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 94 

let findMostAppear = (arr) => {
	// let count = 0;
	// let compareCount = 1;
	// let item = "";
	// for (let i = 0 ; i < arr.length ; i++) {
	// 	for (let j = i; j < arr.length ; j++) {
	// 		if (arr[i] === arr[j]) {
	// 			count++;
	// 		}
	// 		if (count > compareCount) {
	// 			compareCount = count
	// 			item = arr[i];
	// 		}
	// 	}
	// 	count = 0;
	// }
	// return item

	const ctr = [];
	let ans = 0;

	for(var i = 0; i < 10; i++) {
		ctr.push(0);
	}
	for(var i = 0; i < arr.length; i++) {
		ctr[arr[i] - 1]++;
		if(ctr[arr[i] - 1] > ctr[ans]) {
			ans = arr[i] - 1;
		}
	}
	return ans + 1;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 95

let arrTest = [1, 2, 3, 2, 2, 8, 1, 9];
let replaceAll = (arr, a, b) => {
	return arr.map(val => val === a ? val = b : val)
}

////////////////////////////////////////////////////////////////////////////////////////////////
//96

let  sumOfAbsolute = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		sum += Math.abs(arr[i] - arr[i + 1])
	}
	return sum
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 97

let refuseStr = (str) => {

	// var flag;
	// for (var i = new_str.length;; i++) {
	// 	flag = true;
	// 	for (var j = 0; j < i - j - 1; j++) {
	// 		if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
	// 			flag = false;
	// 			break;
	// 		}
	// 	}
	// 	if (flag) {
	// 		for (var j = new_str.length; j < i; j++) {
	// 			new_str += new_str[i - j - 1];
	// 		}
	// 		return new_str;
	// 	}
	// }

	let convert = str.split("");
	let bv = [];
	convert.filter(val => convert.indexOf(val) === convert.lastIndexOf(val) ? bv.push(val) : val)
	convert.push(bv.sort().reverse());
	return convert.flat().join("");
} 

////////////////////////////////////////////////////////////////////////////////////////////////
// 98

let convertUpperCase = (str) => {
	let count = 0;
	for( let i = 0 ; i < str.length ; i++) {
		if (/[A-Z]/g.test(str[i])) count++;
	}
	return count > 1 ? str.toUpperCase() : str.toLowerCase();


	// let x = 0;
	// let y = 0;

	// for (let i = 0; i < new_str.length; i++) {
	// 	if (/[A-Z]/.test(new_str[i])) {
	// 		x++;
	// 	} else y++;
	// }

	// if (y > x) return new_str.toLowerCase();
	// return new_str.toUpperCase();
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 99

let checkEqualStr = (str1, str2) => {
	return str1.split("").sort().join("") === str2.split("").sort().join("") ? true : false;

	// const first_set = str1.split('');
	// const second_set = str2.split('');
	// let result = true;

	// first_set.sort();
	// second_set.sort();

	// for (let i = 0; i < Math.max(first_set.length, second_set.length); i++) {
	// 	if (first_set[i] !== second_set[i]) {
	// 		result = false;
	// 	}
	// }

	// return result;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 100

let commonEle = (arr1, arr2) => {
	return arr1.some((v) => arr2.includes(v));

	// for (let i = 0; i < arr1.length; i++) {
	// 	if (arr2.indexOf(arr1[i]) != -1) 
	// 		return true;
	// }
	// return false;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 101

let findOnlyLatinLetter = (str) => {
	let check;
	for (let i = 0 ; i < str.length; i++) {
		let upper = str[i].toUpperCase();
		if(str[str.indexOf(str[i])] === upper) {
			check = str[str.indexOf(str[i - 1])] === str.charAt(0).toLowerCase() 
			&& str[str.indexOf(str[i + 1])] === str[str.length - 1].toLowerCase();
		}
	}
	console.log(check);
}




////////////////////////////////////////////////////////////////////////////////////////////////
// 102

let findInversions = (arr) => {
	// debugger;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) 
				count++;
		}
	}
	return count;
}  

////////////////////////////////////////////////////////////////////////////////////////////////
// 103

let findBisggestSum = (num) => {
	let convert = (""+num);
	return convert.indexOf("0") < 0 
	? convert = +convert.slice(convert.charAt(convert.indexOf("1"))) 
	: convert = +convert.slice(0, convert.length - 1);

	// let result = 0,
	// num_digits = [];
	// while (num) {
	// 	num_digits.push(num % 10);
	// 	num = Math.floor(num / 10);
	// }
	// for (let index_num = 0; index_num < num_digits.length; index_num++) {
	// 	let n = 0;
	// 	for (let i = num_digits.length - 1; i >= 0; i--) {
	// 		if (i !== index_num) {
	// 			n = n * 10 + num_digits[i];
	// 		}
	// 	}
	// 	result = Math.max(n, result);
	// }
	// return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 104

let  findAbsNum = (arr, k) => {
	let mang = [];
	for (let i = 0 ; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length ; j++) {
			if (Math.abs(arr[i] - arr[j]) <= k) mang.push(Math.abs(arr[i] - arr[j]));
		}
	}
	return Math.max(...mang);
}



////////////////////////////////////////////////////////////////////////////////////////////////
// 105

let findDigitNum = (num) => {
	let convert = ""+num;
	let count = 0;
	let sum = 0;
	for (let i = 0 ; i < convert.length; i++) {
		sum += +convert[i];
	}
	(sum < 10) ? count++ : count+=2
	return count

	// let digitSum = function(num) {

	// 	let digit_sum = 0;
	// 	while (num) {
	// 		digit_sum += num % 10;
	// 		num = Math.floor(num / 10);
	// 	}

	// 	return digit_sum;
	// };

	// let result = 0;

	// while (num >= 10) {
	// 	result += 1;
	// 	num = digitSum(num);
	// }

	// return result;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 106

let findFinalNum = (num, d) => {
	return (num % d === 0 && Number.isInteger((num / d) / d)) ? (num / d) / d : num;
}



////////////////////////////////////////////////////////////////////////////////////////////////
// 107

let findDivisible = (arr) => {
	let count = 0;
	for (let i = 0 ; i < arr.length ; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) count++
		}
}
return count;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 108

let count3DVectors = (arr1, arr2) => {
	let num = 0;
	for (let i = 0 ; i < arr1.length; i++) {
		num += arr1[i] * arr2[i];
	}
	console.log(num)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 109

let sortPrimeNum = (num) => {
	let arr = [];
	const isPrime = num => {
		for(let i = 2; i < num; i++) if(num % i === 0) return false;
			return num > 1;
	}
	for (let i = 0 ; i <= num; i++) if(isPrime(i)) arr.push(i)
		console.log(arr)
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 110

let countEvenNum = (arr, k) => {
	let count= 0;
	console.log(arr.length)
	for (let i = k + 1; i <= arr.length; i++) {
		if (i % 2 === 0) count++;
	}
	return count
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 111

let findEqualNum = (x, y, z) => {
	if ((x !== y) && (y !== z) && (x !== z)) return "Not Equal!";
	return (x === y) ? z : (y === z) ? x : y
}

////////////////////////////////////////////////////////////////////////////////////////////////
/// 112
let findNumInFactorial = (n) => {
	let result = 0;
	for (let i = 5; i <= n; i += 5) {
		let divide = i;
		while (divide % 5 === 0) {
			divide /= 5;
			result++;
		}
	}
	return result;
} 


////////////////////////////////////////////////////////////////////////////////////////////////
// 113

let caculateNum = (num) => {
	let sum = 0;
	while (num > 0) {
		sum += num;
		num = Math.floor(num / 2);
	}
	return sum;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 114

let findChararAndDot = (str) => {
	return /[A-Z]/g.test(str.charAt(0)) && str[str.length - 1] === "." ? true : false
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 115

let testMatrix = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0 ; j < arr.length; j++) {
			if(i !== j && arr[i][j] !== 0) return false
		}
}
return true
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 116

let findDivisibleThree = (str) => {
	let mang = [];
	let sort;
	for (let i = 0 ; i < 10; i++) {
		sort = str.replace(/#/gi, i);
		if (parseInt(sort) % 3 === 0) mang.push(sort)
	}
return mang
} 



////////////////////////////////////////////////////////////////////////////////////////////////
// 117

let findIdentityMatrix = (arr) => {
	for (let i = 0 ; i < arr.length; i++) {
		for (let j = 0 ; j < arr.length; j++) {
			if (i !== j && arr[i][j] === 1 || i === j && arr[i][j] !== 1) return false
		}
}
return true
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 118

let checkInRange = (x, y, z) => {
	return x <= y && y <= z;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 119

let findNumIncrease = (num) => {
	let arr = (""+num).split("");
	for (let i = 0 ; i < arr.length - 1; i++) {
		if (parseInt(arr[i]) > parseInt(arr[i + 1])) return false 
	}
return true;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 120

let findPointInCircle = (a, b, x, y, z) => {
	let point = Math.pow(2, (x - a)) + Math.pow(2, (y - b));
	return point < Math.pow(2, r) ? true : false
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 121

let findSmallTriangle = (arr) => {
	debugger;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[0].length; j++) {
			if (j > i&& arr[i][j] !== 0) return false;
		}
	}
	return true;
}



////////////////////////////////////////////////////////////////////////////////////////////////
// 122

let checkNextStep = (arr) => {
	if (arr.length === 1)  return true;
	for (let i = 0 ; i < arr.length - 1 ; i++) {
		if (arr[i] >= arr[i + 1]) return false;
	}
	return true;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 123


let checkPositionNum = (arr, n) => {
	for (let i = 0 ; i < n ; i++) {
		if (arr.indexOf(i + 1) < 0) return false
	}
return true
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 124

let checkBoolean = (a, b) => {
	return a === b;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 125

let checkLonggestStr = (arr) => {
	let first = arr[0].length;
	for (let i = 0; i < arr.length ; i++) 
		if (first < arr[i].length) first = arr[i].length;
	return first
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 126

let findLargestNum = (arr) => {
	// arr.sort((x, y) => y - x);
	// for (let i = 0 ; i < arr.length ; i++) {
	// 	if (arr[i] % 2 === 0) return arr[i];
	// }

	return arr.sort((a, b) => b - a).filter(v => v % 10 === 0)[0]
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 127

let mirrorBit = (num) => {
	return parseInt(num.toString(2).split("").reverse().join(""), 2)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 128

let findSmallestRound = (num) => {
	while (num % 10) {
		num ++ 
	}
	return num
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 129

let findBiggerPrime = (num) => {
	let arr = [];
	const isPrime = num => {
		for(let i = 2; i < num; i++) if(num % i === 0) return false;
			return num > 1;
	}
	for (let i = 0 ; i < num * 2; i++) if (isPrime(i)) arr.push(i);
		return arr[arr.indexOf(num) + 1];
} 


////////////////////////////////////////////////////////////////////////////////////////////////
// 130

let findEvenDigit = (num) => {
	return (""+num).split("").filter(val => parseInt(val) % 2 === 0).length;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 131

let prefixSum = (arr) => {
	let new_arr = [];
	for (let i = 0; i < arr.length; i++) {
		new_arr[i] = 0;
		for (let j = 0; j < i + 1; j++) {
			new_arr[i] += arr[j];
		}
	}
	return new_arr;
}
////////////////////////////////////////////////////////////////////////////////////////////////
// 132

let primeFactors = (num) => {

	const isPrime = num => {
		for(let i = 2; i < num; i++) if(num % i === 0) return false;
			return num > 1;
	}

	const arr = [];

	for (let i = 2; i <= num; i++) {
		while (isPrime(i) && num % i === 0)  {
			if (!arr.includes(i)) arr.push(i);
			num /= i;
		}
	}
	return arr;
}




////////////////////////////////////////////////////////////////////////////////////////////////
// 133

let checkProper = (num) => {
	return Math.abs(num[0] / num[1]) < 1
	? "Proper fraction."
	: "Improper fraction.";
}


//////////////////////////////////////////////////////////////////////////////////////////////// 
// 134

let replaceStr = (str) => {
	let arr = [];
	for (let i = 0 ; i < str.length; i++) {
		let order = str.charCodeAt(i)- "a".charCodeAt(0);
		order = 25 - order + "a".charCodeAt(0);
		arr.push(String.fromCharCode(order))
	}
	console.log(arr.join(""))
}



////////////////////////////////////////////////////////////////////////////////////////////////
// 135

let removeAlHave = (str) => {
	let convert = str.split("");
	let arr = [];
	for (let i = 0 ; i < convert.length; i++) {
		if (convert.indexOf(convert[i]) === convert.lastIndexOf(convert[i])) arr.push(convert[i])
	}
return arr.join("")
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 136

let convertDigit = (str) => {
	return str.replace(/[0-9]/gi, "$")
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 137

let checkEqual15 = (num) => {
	return num > 15 ? num : 15;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 138

let convertTo16Bit = (num) => {
	debugger
	let result = 0;
	for (let i = 0; i < 16; i++) {
		result = result * 2 + (num % 2);
		num = Math.floor(num / 2);
	}
	return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 139

let findRoundNum = (arr) => {
	let find =  arr.filter(val => val % 10 === 0);
	return arr.indexOf(+find) === -1 ? 0 : arr.indexOf(+find);
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 140

let checkSameDigit = (num) => {
	let arr = (""+num);
	for (let i = 0 ; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1]) return false
	}
return true
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 141

let countElementEqual = (arr1, arr2) => {
	let count = 0;
	for (let i = 0 ; i < arr1.length; i++) if (arr1[i] === arr2[i]) count++;
		return count;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 142

let convertToUnixStyle = (path) => {
	return "/" + path.split("/").filter(val => /[^w][a-z]/gi.test(val)).join("/");
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 143

let sortArrAlphabet = (arr) => {
	return arr.sort()
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 144

let cutTheSlash = (str) => {
	let data = url_add.split("://");
	const protocol = data[0];
	data = data[1].split(".com");
	const domain = data[0];
	data = data[1].split("/");

	if(data[1]){
		return [protocol,domain,data[1]]
	}

	return [protocol,domain]
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 145

let findTheSmallerNum = (num) => {
	debugger
	let sn = 0;
	let i = 0;
	while (sn <= num) {
		sn += i++;
	}
	return i - 2
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 146

let findCubeNum = (num) => {
	let sum = 0;
	for (let i = 1 ; i <= num; i++) {
		sum += Math.pow(3, i);
	}
	return sum
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 147

let findDigitSum = (str) => {
	let num = 0;
	for (let i = 0 ; i < str.length; i++) if (Number.isInteger(parseInt(str[i]))) num += parseInt(str[i])
		return num
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 148

let reverseArrFromThree= (arr) => {
	if (((arr.length)%2)!=0) return false;

	for (let i = 0 ; i < arr.length / 2; i++) {
		const tmp = arr[i];
		arr[i] = arr[i + arr.length / 2];
		arr[i + arr.length / 2] = tmp
	}

	return arr
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 149

let reverseTwoNum = (num)  => {
	let arr = (""+num).split("");
	if (((arr.length)%2)!=0) return false;
	for (let i = 0; i < arr.length - 1; i+=2) {
		let reverse = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = reverse;
	}
	return +(arr.join(""))
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 150

let upperCaseLetter = (str) => {
	let lowerCase = str.split("").filter(val => /[a-z]/g.test(val)).join("").toUpperCase();
	let upperCase = str.split("").filter(val => /[A-Z]/g.test(val)).join("").toLowerCase();
	return upperCase + lowerCase;

	// let str1 = "";
	// for (let i = 0; i < str.length; i++) {
	// 	if (/[A-Z]/.test(str[i])) str1 += str[i].toLowerCase();
	// 	else str1 += str[i].toUpperCase();
	// }
	// return str1;
}
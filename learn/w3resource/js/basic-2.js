///////////////////////////////////////////////////////////////////////////////////////////
// 1


const displayTime = () => {
	let now = new Date();
	const arrDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	console.log(`Today is ${arrDay[1]}`);
	let hour = now.setHours(10)
	let minute = now.setMinutes(30);
	let second = now.setSeconds(38);
	console.log(`Current time is: ${now.getHours(hour) + " PM"} : ${now.getMinutes(minute)} : ${now.getSeconds(second)}`)
}

// displayTime(); 
// 10 phut


///////////////////////////////////////////////////////////////////////////////////////////
// 2

const printContent = () => window.print();
// 10s


///////////////////////////////////////////////////////////////////////////////////////////
// 3

const getCurrentDate = () => {
	let now = new Date();
	let month = now.getMonth() + 1;
	let date = now.getDate();
	console.log(`${month >= 10 ? month : "0" + month}-${date >= 10 ? date : "0" + date}-${now.getFullYear()}`);
	console.log(`${date >= 10 ? date : "0" + date}-${month >= 10 ? month : "0" + month}-${now.getFullYear()}`);
	console.log(`${month >= 10 ? month : "0" + month}/${date >= 10 ? date : "0" + date}/${now.getFullYear()}`);
	console.log(`${date >= 10 ? date : "0" + date}/${month >= 10 ? month : "0" + month}/${now.getFullYear()}`);
} 

// getCurrentDate();
// 5p

///////////////////////////////////////////////////////////////////////////////////////////
// 4

const areaTriangle = (a, b, c) => {
	let p = (a + b + c) / 2;
	return Math.sqrt(p * (p - a) * (p - b) * (p- c));
}

// areaTriangle();
// 2p

///////////////////////////////////////////////////////////////////////////////////////////
// 5

const animateString = () => {
	const target = document.getElementById("target");
	let textNode = target.childNodes[0];
	let text = textNode.data;
	setInterval(() => {
		text = text[text.length - 1] + text.slice(0, text.length - 1);
		textNode.data = text
	}, 100)
}

// animateString();
// 2p

///////////////////////////////////////////////////////////////////////////////////////////
// 6

const isLeapYear = (y) =>  y % 100 === 0 ? y % 400 === 0 : y % 4 === 0;

// console.log(isLeapYear(2016));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1800));
// console.log(isLeapYear(100));

// 3p

///////////////////////////////////////////////////////////////////////////////////////////
// 7

const firstSunday = () => {
	for (let year = 2014; year <= 2050; year++) {
		let day = new Date(year, 0, 1);
		if(day.getDay() === 0) 
			console.log("1st January is being a Sunday " + year);
	}
}

// 2p

///////////////////////////////////////////////////////////////////////////////////////////
// 8

const checValue = () => {
	let anounce = prompt("Choose a number");
	let random = Math.floor(Math.random() * (11 - 1) + 1);
	return +anounce === random ? "Good Work" :  "Not matched";
}

//5p

///////////////////////////////////////////////////////////////////////////////////////////
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

// 5p


/////////////////////////////////////////////////////////////////////////////////////////////////
// 11

function convertCelsius(num) {
	let fahrenheit  = num * (9/5) + 32;
	console.log(`${num}°C is ${fahrenheit}°F`);
}

function convertFahrenheit(num) {
	let celsius  = (num - 32) * (5/9) ;
	console.log(`${num}°F is ${celsius}°C`)
}

// 1p

/////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const getUrl = () => {
	console.log(window.location.href);
	console.log(document.URL)
}

//1p

/////////////////////////////////////////////////////////////////////////////////////////////////
// 13

const createVariable = () => {
	const name = "abcd";
	let n = 100;
	this.name = n;
	console.log(this.name)
}
// 2p

/////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const getExtensionFile = (f) => {
	let get = f.split(".").pop();
	console.log(get)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const theDifference = (num) => {
	return num >= 13 ? (num - 13) * 2 : 13 - num; 
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const sumValue = (a, b) => a !== b ? a + b : (a + b) * 3;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const checkDifference19 = (n) => n >= 19 ? (n - 19) * 3 : 19 - n;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const checkSumOf2Value = (a, b) => a === 50 || b === 50 ? true : a + b === 50 ? true : false;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 19

const checkInside = (n) => ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));

/////////////////////////////////////////////////////////////////////////////////////////////////
// 20

const checkPositive = (a, b) => a > 0 && b < 0 || a < 0 && b > 0 ? true : false;


/////////////////////////////////////////////////////////////////////////////////////////////////
// 21

const addPyString = (str) => str === null || str === undefined ||  tr.slice(0, 2) === "Py" ? str : "Py" + str;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 22


const removeChar = (str, n) => {
	if(str === null || str === undefined || str.length < 1) return undefined
		let troll = str.split("").splice(n, 1).join("");
	console.log(str.slice(0, str.indexOf(troll)) + str.slice(str.indexOf(troll) + 1, str.length));
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 23

const changeChar = (str) => {
	if (str.length === 1) return str;
	console.log(str[str.length - 1] + str.slice(1, str.length - 1) + str.slice(0, 1))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 24

const front_back = (str) => {
	console.log(str.slice(0, 1) + str + str.slice(0, 1));
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 25

const Multiply37 = (n) => {
	if(n % 3 || n % 7) return true;
	else return false
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 26

const cut3Char = (str) => {
	if (str.length < 3) return str;
	console.log(str.slice(str.length - 3) + str + str.slice(str.length - 3))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 27

const startWithJava = (str) => str.substring(0, 4) === "Java" ? true : false


/////////////////////////////////////////////////////////////////////////////////////////////////
// 28

const check2Numbers = (x, y) => (x >= 50 && x <= 90) || (y >= 50 && y <= 90) ? true : false


/////////////////////////////////////////////////////////////////////////////////////////////////
// 29

const check3Numbers = (x, y, z) => 
(x >= 50 && x <= 90) || (y >= 50 && y <= 90) || (z >= 50 && z <= 90) ? true : false;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 30

const checkIndexStr = (str) => 
str.indexOf("Script") === 4 ? str.slice(0, str.indexOf("Script")) : str;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 31

const largestIntegers = (x, y , z) => Math.max(x, y, z)


/////////////////////////////////////////////////////////////////////////////////////////////////
// 32

const nearest100 = (x, y) => {
	if(x === y) return false;
	return Math.abs(100 - x) < Math.abs(100 - y) ? "x is nearest to 100" : "y is nearest to 100"
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 33

const inRange = (x, y) => 
(40 <= x && x <= 60) && (40 <= y && y <= 60) || (70 <= x && x <= 100) && (70 <= y && y <= 100)
? true 
: false



/////////////////////////////////////////////////////////////////////////////////////////////////
// 34


const findLargestInRange = (x, y) => {
	if (40 <= x && x <= 60 && 40 <= y && y <= 60) console.log(Math.max(x, y))
		else return "Numbers don't fit in range";
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 35

const countChar = (str, c) => {
	return str.indexOf(val) === 1 || str.indexOf(val) === 2 || str.indexOf(val) === 3;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 36

const lastDigitEqual0 = (x, y, z) => {
	return (a > 0 && b > 0 && c > 0) 
	? (a % 10 === b % 10 && a % 10 === c % 10 && b % 10 === c % 10) 
	: false
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 37

const cutFirst3Char = (str) => {
	if(str.length < 3) return str.toUpperCase();
	return str.slice(0, 3).toLowerCase() + str.slice(3, str.length);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 38

const examTest = (mark, is_exam) =>  {
	if (is_exam) return totmarks >= 90;
	return (totmarks >= 89 && totmarks <= 100);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 39

const sumNum = (x, y) => {
	return (x + y) >= 50 && (x + y) <= 80 ? 65 : 80 
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 40

const findEight = (x, y) => {
	return a === 8 || b === 8 || (a + b === 8) || (Math.abs(a- b) === 8) ? true : false
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 41

const findEqual = () =>  a === b && a === c && b === c ? 30 : a === b || a === c || b === c ? 40 : 20;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 42

const riseUp = (a, b, c) => a < b && b < c ? "strict mode" : b < c ? "soft mode" : "undefined";

/////////////////////////////////////////////////////////////////////////////////////////////////
// 43

const findRightDigit = (a, b, c) => 
a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10

/////////////////////////////////////////////////////////////////////////////////////////////////
// 44

const lessby20_others = (x, y, z) =>
(x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < x || z < y)) 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 45

const equalTo15 = (x, y) => x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15;


/////////////////////////////////////////////////////////////////////////////////////////////////
// 46


const findMultiple = (x, y) => !((x % 7 === 0 || y & 7 === 0) ||( x % 11 === 0 || y % 11 === 0 ))
? x % 7 === 0 || y & 7 === 0 || x % 11 === 0 || y % 11 === 0
: false 


/////////////////////////////////////////////////////////////////////////////////////////////////
// 47

const findValue = (x, y, n) =>
n < 40 || n > 1000 ? false : n <= y && n >= x ? true : false;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 48

const reverseStr = (str) => str.split("").reverse().join("");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 49

const nextAlphabet = (str, storage = []) => {
	for(let i = 0 ; i < str.length; i++) storage.push(String.fromCharCode(str.charCodeAt(i) + 1))
		console.log(storage.join(""))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 50

const capitalizeFirst = (str) => str.trim().toLowerCase().split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(" ");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 51

const convertToTime = (n) => `${Math.floor(n / 60)}:${n % 60}`;



/////////////////////////////////////////////////////////////////////////////////////////////////
// 52
const alphabetSort = (str) => str.split("").sort().join("");

/////////////////////////////////////////////////////////////////////////////////////////////////
// 53

const findDistance = (str) => (/a...b/).test(str) || (/b...a/).test(str);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 54

const findVowels = (str) => str.match(/[aiueo]/g).length;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 55

const countPAndT = (str) => str.match(/[p]/gi).length === str.match(/[t]/gi).length;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 56

const divideTwoNum = (a, b) => {
	let divide = Math.round(a / b).toString().split("");
	console.log(divide)
	// let arr = [];
	// for (val of divide) {
	// 	arr.push(val);
	// }
	// console.log(arr)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 57

const copiesVal = (str, n) =>  {
	if (n < 1) return false;

	return str.repeat(n)
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 58

const duplicateStr = (str) => {
	if(str.length < 3) return false
		else return str.slice(-3).repeat(4)
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 59

const cutStr = (str) => {
	if(str.length % 2 !== 0) return str
		else return str.slice(0, str.length / 2)
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 60

const noFirstLast = (str) => str.slice(1, str.length - 1);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 61

const cutFirstLetter = (str1, str2) => str1.slice(1) + str2.slice(1); 


/////////////////////////////////////////////////////////////////////////////////////////////////
// 62

const right_three = (str) => {
	if(str.length < 3) return  str
		else return str.slice(-3) + str.slice(0, str.length - 3)
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 63

const cutThreeLetter = (str) =>  {
	if(str.length % 2 === 0) return str
		else return str.slice(Math.floor(str.length / 2) - 1, Math.floor(str.length / 2) + 2)
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 64

const concatStr = (str1, str2) => {
	return str1.length > str2.length 
	? str1.slice(- str2.length) + str2 
	: str1 + str2.slice(-str1.length) 
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 65

const endWith = (str) => str.slice(-"Script".length) === "Script";

/////////////////////////////////////////////////////////////////////////////////////////////////
// 66

const findFirstLetter = (str) => str.startsWith("Los") || str.startsWith("New") ? true : "";

/////////////////////////////////////////////////////////////////////////////////////////////////
// 67

const removeP = (str) => {
	return str.startsWith("P") && str.endsWith("P") ? str.slice(1, str.length - 1) : str.startsWith("P")
	? str.slice(1) : str.endsWith("P") ? str.slice(0, str.length - 1) : str;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 68


const cutNumStr = (str, i) => str.substr(0, i) + str.substring(str.length - i);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 69

const sumVal = (arr) => arr[0] + arr[1] + arr[2];

/////////////////////////////////////////////////////////////////////////////////////////////////
// 70

const rotateArr = (arr) => [arr[1], arr[2], arr[0]];


/////////////////////////////////////////////////////////////////////////////////////////////////
// 71

const check1 = (arr) => {
	if(arr === undefined) return false
		else return arr[0] === 1 || arr[arr.length - 1] === 0;
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 72

const checkFirstLastArr = (arr) => arr[0] === arr[arr.length - 1];


/////////////////////////////////////////////////////////////////////////////////////////////////
// 73

const reverseArr = (arr) => arr.map((ele, i, arr) => arr[(arr.length - 1) - i]);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 74

const createNewArr = (arr) => arr.map(val => val = Math.max(...arr));


/////////////////////////////////////////////////////////////////////////////////////////////////
// 75

const addMiddleEle = (arr1, arr2) => [arr1[Math.floor(arr1.length / 2)], arr2[Math.floor(arr2.length / 2)]];

/////////////////////////////////////////////////////////////////////////////////////////////////
// 76

const arrFirstLast = (arr) => {
	if(arr === undefined) return false;
	return [arr[0], arr[arr.length - 1]] 
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 77

const includesValue1Or3 = (arr) => arr.includes(1) || arr.includes(3);


/////////////////////////////////////////////////////////////////////////////////////////////////
// 78

const notIncludesValue1Or3 = (arr) => !arr.includes(1) && !arr.includes(3);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 79

const twice3040 = (arr) => arr.indexOf(30) !== arr.lastIndexOf(30) || arr.indexOf(40) !== arr.lastIndexOf(40) 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 80

const reverseArrEle = (arr) => {
	[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
	return arr
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 81

const sumNumber = (n) => n % 10 + Math.floor(n / 10);


/////////////////////////////////////////////////////////////////////////////////////////////////
// 82

const addNum = (num1, num2) => +(("" + (num1 + num2)).slice(1));

/////////////////////////////////////////////////////////////////////////////////////////////////
// 83

const findLongest = (arr) => arr.sort((a, b) => b.length - a.length)[0];

/////////////////////////////////////////////////////////////////////////////////////////////////
// 84

const nextAbc = (str) => {
	let arr = str.split("");
	for(let i = 0 ; i < arr.length; i++) {
		arr[i] = String.fromCharCode(str.charCodeAt(i) + 1); 
		if(arr[i].charCodeAt() > "z".charCodeAt())
			arr[i] = String.fromCharCode(str.charCodeAt(i - str.indexOf("z")))
	}
	console.log(arr.join(""))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 85

const sumArrVal = (arr) => {
	let array = [0, 0];
	for(let i = 0 ; i < arr.length; i++) {
		if(i % 2 === 0) array[0] += arr[i]
			else array[1] += arr[i]
		}
	console.log(array)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 86

const findAngle = (n) => 
0 <= n && n < 90 ? "Acute angle." : n === 90 ? "Right angle." : n < 180 ? "Obtuse angle." : "Straight angle.";

/////////////////////////////////////////////////////////////////////////////////////////////////
// 87

const checkEqual = (arr1, arr2) => {
	for(let i = 0; i < arr1.length; i++) {
		for(let j = 0 ; j < arr2.length; j++) {
			return arr1[i] === arr2[j]
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 88

const divideVal = (a, b, c) => 
a % c === 0 && b % c === 0 || a % c !== 0 && b % c !== 0 ? true : false;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 89

const findTrueDivision = (a, b, c) => 
a + b === c || a - b === c || a * b === c || a / b === c


/////////////////////////////////////////////////////////////////////////////////////////////////
// 90

const findK = (arr, k) => {
	let result = arr.sort((a, b) => b - a)
	return result[k - 1]
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 91

const findMaxSum = (arr, k) => {
	const array = [];
	for(let i = 0 ; i < arr.length - k + 1; i++) 
		array.push(arr.slice(i, i + k).reduce((prev, cur) => prev + cur, 0))
	console.log(array)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 92

const findBigSum = (arr, array = []) => {
	for(let i =0 ; i < arr.length - 1; i++) array.push(Math.abs(arr[i] - arr[i + 1]))
		console.log(Math.max(...array))
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 93

const findDifferent = (arr, array = []) => {
	arr.forEach(v => arr.forEach(b => array.push(Math.abs(v- b))))
	console.log(Math.max(...array))
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 94

const findMostAppear = (arr) => {
	// debugger
	// return arr.reduce((previous, current, i, arr) => {
	// 	return arr.filter(item => item === previous).length >
	// 	arr.filter(item => item === current).length
	// 	? previous
	// 	: current
	// 	})
	


	return arr.sort((prev, curr) => 
		arr.filter(item => item === prev).length -
		arr.filter(item => item === curr).length)
	.pop();
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 95

const replaceAll = (arr, o, n) => arr.map(val => val === o ? val = n : val);

////////////////////////////////////////////////////////////////////////////////////////////////
// 96

const sumOfAbsolute = (arr, sum = 0) => {
	for(let i = 0 ; i < arr.length - 1; i++) sum += Math.abs(arr[i] - arr[i + 1]);
		return sum
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 97

const refuseStr = (str, arr = []) => {
	let convert = str.split("");
	convert.filter(val => str.indexOf(val) === str.lastIndexOf(val) ? arr.push(val) : val);
	convert.push(arr.sort().reverse().join(""))
	return convert.join("")
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 98

const convertUpperCase = (str) => 
str.match(/[a-z]/g).length >  str.match(/[A-Z]/g).length ? str.toLowerCase() : str.toUpperCase()

////////////////////////////////////////////////////////////////////////////////////////////////
// 99

const checkEqualStr = (str1, str2) =>
str1.split("").sort().join("") === str2.split("").sort().join("");

////////////////////////////////////////////////////////////////////////////////////////////////
// 100

const commonEl = (arr1, arr2) => arr1.some((v) => arr2.includes(v));

////////////////////////////////////////////////////////////////////////////////////////////////
// 101

const findOnlyLatinLetter = (str) =>  {
	let arr = str.split("").every((v, i, arr) => /[a-zA-Z]?/g.test(v));
	let firstLower, firstUpper;
	for (let i = 1 ; i < str.length; i++) {
		let upper = str[i].toUpperCase();
		if(str[i] === upper) {
			firstLower = str[i] === str[i].toUpperCase() && str[i + 1] === str[i + 1].toLowerCase() 
			&& str[i - 1] === str[i].toLowerCase()
		} 

		let lower = str[i].toLowerCase();
		if(str[i] === lower) {
			firstUpper = str[i] === str[i].toLowerCase() && str[i + 1] === str[i + 1].toUpperCase()
			&& str[i - 1] === str[i].toUpperCase()
		}
	}
	console.log(firstLower)
	return (arr && firstLower) || (arr && firstUpper) ? true : false
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 102

const findInversions = (arr) => {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) count++;
		}
	}
	return count;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 103

const findBisggestSum = (num) => {
	let convert = (""+num);
	console.log(convert.indexOf("0"))
	return convert.indexOf("0") < 0 
	? convert = +convert.slice(convert.charAt(convert.indexOf("1"))) 
	: convert = +convert.slice(0, convert.length - 1);
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 104

const findAbsNum = (arr, k) => {
	const array = [];
	for(let i = 0 ; i < arr.length; i++){
		for (let j = i + 1; j < arr.length ; j++) {
			if (Math.abs(arr[i] - arr[j]) <= k) array.push(Math.abs(arr[i] - arr[j]));
		}
	}
	console.log(Math.max(...array))
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 105

const findDigitNum = (n) => {
	let arr = (""+n).split(""), count = 0;
	return arr.reduce((prev, curr) =>  (+prev) + (+curr),0) < 10 ? 1 : 2
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 106

const findFinalNum = (n, d) => {
	if (d==1) return n;
	else while (n % d === 0) n /= d;
	return n;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 107

const findDivisible = (arr, count = 0) => {
	for(let i = 0 ; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++)  {
			if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) count++
		}
}
console.log(count)
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

const sortPrimeNum = (num) => {
	const arr = [];
	const isPrime = (num ) => {
		for(let i = 2; i < num; i++) if(num % i === 0) return false
			return num > 1
	}
	for (let i = 0 ; i <= num; i++) if(isPrime(i)) arr.push(i)
		console.log(arr)
} 

////////////////////////////////////////////////////////////////////////////////////////////////
// 110

const countEvenNum = (arr, n, count = 0) => {
	arr.forEach(v => v < n && v % 2 === 0 ? count++ : v)
	console.log(count)
} 


////////////////////////////////////////////////////////////////////////////////////////////////
// 111

const findEqualNum = (x, y, z) => {
	if ((x !== y) && (y !== z) && (x !== z)) return "Not Equal!";
	return x === y ? z : x === z ? y : x
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 112

const findNumInFactorial = (n, div = 1, count = 0) => {
	for(let i = 1 ; i <= n; i++) div*= i
		while(div % 10 === 0) {
			div = div / 10;
			count++
		}
		console.log(count)
	}


////////////////////////////////////////////////////////////////////////////////////////////////
// 113

const caculateNum = (num, sum = 0) => {
	while(num > 0) {
		sum += num
		num = Math.floor(num / 2);
	} 
	console.log(sum)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 114

const findChararAndDot = (str) => 
/[A-Z]/g.test(str.charAt(0)) && str[str.length - 1] === "." ? true : false;

////////////////////////////////////////////////////////////////////////////////////////////////
// 115

const testMatrix = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0 ; j < arr.length; j++) {
			if(i !== j && arr[i][j] !== 0) return false
		}
}
return true
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 116

const findDivisibleThree = (str, arr = []) => {
	for(let i = 0 ; i < 10; i++) 
		if(parseInt(str.replace(/#/gi, i)) % 3 === 0) arr.push(str.replace(/#/gi, i))
			console.log(arr)
	}

////////////////////////////////////////////////////////////////////////////////////////////////
// 117

const findIdentityMatrix = (arr) => {
	debugger
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0 ; j < arr.length; j++) {
			if(i !== j && arr[i][j] === 1 || i === j && arr[i][j] !== 1) return false
		}
}
return true
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 118

const checkInRange = (x, y, z) =>  x <= y && y <= z;

////////////////////////////////////////////////////////////////////////////////////////////////
// 119

const findNumIncrease = (n) => {
	let arr = (""+n).split("")
	for(let i = 0 ; i < arr.length - 1; i++) 
		if(parseInt(arr[i]) >= parseInt( arr[i +1])) return false
			return true
	} 

////////////////////////////////////////////////////////////////////////////////////////////////
// 120

const findPointInCircle = (a, b, x, y, r) => {
	let point = Math.pow(2, (x - a)) + Math.pow(2, (y - b));
	return point < Math.pow(2, r) ? true : false
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 121


const findSmallTriangle = (arr) => {
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

const checkNextStep = (arr) => {
	if (arr.length === 1)  return true;
	for (let i = 0 ; i < arr.length - 1 ; i++) 
		if (arr[i] >= arr[i + 1]) return false;
	return true;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 123

const checkPositionNum = (arr, n) => {
	for(let i = 0 ; i < n; i++) 
		if(arr.indexOf(i + 1) < 0) return false
			return true
	}

////////////////////////////////////////////////////////////////////////////////////////////////
// 124

const checkBoolean = (a, b) => (!a && !b)

////////////////////////////////////////////////////////////////////////////////////////////////
// 125

const checkLonggestStr = (arr) => arr.sort((a, b) => b.length - a.length)[0];

////////////////////////////////////////////////////////////////////////////////////////////////
// 126

const findLargestNum = (arr) => 
arr.sort((a, b) => b - a).filter(v => v % 10 === 0)[0];

////////////////////////////////////////////////////////////////////////////////////////////////
// 127

const mirrorBit = (num) => 
parseInt(num.toString(2).split("").reverse().join(""), 2)

////////////////////////////////////////////////////////////////////////////////////////////////
// 128

const findSmallestRound = (num) => {
	while (num % 10) num ++ 
		return num
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 129

const findBiggerPrime = (num, arr = []) => {
	const isPrime = (num) => {
		for(let i = 2; i < num; i++) if(num % i === 0) return false
			return num > 1
	}
	for(let i = 0 ; i < num * 5 ; i++) if(isPrime(i)) arr.push(i)
		console.log(arr[arr.indexOf(num) + 1])

	// for (let i = num + 1;; i++) {
	// 	let isPrime = true;
	// 	for (let d = 2; d * d <= i; d++) {
	// 		if (i % d === 0) {
	// 			isPrime = false;
	// 			break;
	// 		}
	// 	}
	// 	if (isPrime) return i;
	// }
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 130

const findEvenDigit = (num) => (""+num).split("").filter(v => parseInt(v) % 2 === 0).length

////////////////////////////////////////////////////////////////////////////////////////////////
// 131

const prefixSum = (arr) => 
arr.map((v, i ,arr) => arr.slice(0, i + 1).reduce((prev, curr) => prev + curr, 0));

////////////////////////////////////////////////////////////////////////////////////////////////
// 132

const primeFactors = (num, arr = []) => {
	const isPrime = num => {
		for(let i = 2; i < Math.sqrt(num); i++) if(num % i === 0) return false;
			return num > 1;
	}

	for(let i = 2 ; i <= num; i++) {
		while(isPrime(i) && num % i === 0) {
			if(!arr.includes(i)) arr.push(i);
			num /= i;
		}
	}

	console.log(arr)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 133

const checkProper = (arr) => 
Math.abs(arr[0] / arr[1]) < 1
? "Proper fraction."
: "Improper fraction.";

////////////////////////////////////////////////////////////////////////////////////////////////
// 134

const replaceStr = (str, arr = []) => {
	for (let i = 0 ; i < str.length; i++) {
		let order = str.charCodeAt(i)- "a".charCodeAt();
		order = (25 - order) + "a".charCodeAt();
		arr.push(String.fromCharCode(order))
	}
	console.log(arr.join(""))
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 135

const removeDuplicate = (str) => 
str.split("").filter(v => str.split("").indexOf(v) === str.split("").lastIndexOf(v)).join("")


////////////////////////////////////////////////////////////////////////////////////////////////
// 136

const convertDigit = (str) => str.replace(/\d/gi, "$");


////////////////////////////////////////////////////////////////////////////////////////////////
// 137

const checkEqual15 = (num) => num <= 15 ? 15 : num;

////////////////////////////////////////////////////////////////////////////////////////////////
// 138

const convertTo16Bit = (num) => {
	debugger
	var result = 0;
	for (var i = 0; i < 16; i++) {
		result = result * 2 + (num % 2);
		num = Math.floor(num / 2);
	}
	return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 139

const findRoundNum = (arr) => {
	let find = arr.filter(v => v % 10 === 0);
	return arr.indexOf(find[0]) !== -1 ? arr.indexOf(find[0]) : 0
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 140

const checkSameDigit = (num) => {
	let arr = (""+num).split("");
	for(let i = 0 ; i < arr.length - 1; i++) if(arr[i] !== arr[i + 1]) return false
		return true
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 141

const countElementEqual = (arr1, arr2) => arr1.filter(v => arr2.includes(v)).length;

////////////////////////////////////////////////////////////////////////////////////////////////
// 142

const convertToUnixStyle = (path) => {
	let replace = path.replace(/[w\W]+/gi, "/");
	return replace.slice(0, replace.length - 1)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 143

const sortArrAlphabet = (arr) => {
	for (let i = 0; i < arr.length; i++){
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[i].length > arr[j].length) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp
			}
		}
	}
	console.log(arr);
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 144

const cutTheSlash = (str) => 
str.replace(/[/:]+/gi, " ").slice(0, str.replace(/[/:]+/gi, " ").length - 1).split(" ");

////////////////////////////////////////////////////////////////////////////////////////////////
// 145

const findTheSmallerNum = (val) => {
	debugger
	let sn = 0;
	let i = 0;
	while (sn <= val) {
		sn += i++;
	}
	return i - 2;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 146

const findCubeNum = (n) =>  {
	let i = 0, sumn = 0;
	while(i <= n) {
		sumn+= Math.pow(i, 3);
		i++;
	}
	console.log(sumn)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 147

const findDigitSum = (str) => 
str.split("")
.filter(v => Number.isInteger(parseInt(v))).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0)

////////////////////////////////////////////////////////////////////////////////////////////////
// 148

const reverseArrFromThree = (arr) => {
	if(arr.length % 2 !== 0) return false;

	return [arr.slice(Math.floor(arr.length / 2)), arr.slice(0, Math.floor(arr.length / 2))].flat(1)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 149

const upperCaseLetter = (txt) => 
txt.match(/[A-Z]/g) 
? txt.charAt(txt.match(/[A-Z]/g)).toLowerCase() + txt.slice(txt.charAt(txt.match(/[A-Z]/g) + 1))  : false


////////////////////////////////////////////////////////////////////////////////////////////////
// 150

const reverseTwoNum = (num, array = []) => {
	let arr = (""+num).split("")
	if(arr.length % 2 !== 0) return false;
	for(let i= 0 ;i <arr.length; i+= 2) array.push(arr.slice(i, i + 2).reverse())
	return +(array.flat().join(""))
}
// 1

let convertToAnotherBase = (num, initBase, changeBase) => {
	if ((initBase && changeBase) <2 || (initBase && changeBase)>36)
		return 'Base between 2 and 36';

	console.log(parseInt(num, initBase).toString(changeBase))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 2

let convertBinaryToDecimal = (num) => {
	console.log(parseInt(num, 2))
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 3

let convertDecimal = (num, base) => {
	switch(base) {
		case "B":
		return parseInt(num, 10).toString(2);
		break;
		case "H":
		return parseInt(num, 10).toString(16);
		break;
		case "O":
		return parseInt(num, 10).toString(8);
		break;
		default :
		return "Wrong input...";
	}
}



/////////////////////////////////////////////////////////////////////////////////////////////////
// 4

let generateNum = (min, max) => {
	if (min === null && max === null) return 0;   

	console.log(Math.floor(Math.random() * (max - min + 1) + min))
} 


/////////////////////////////////////////////////////////////////////////////////////////////////
// 5


let formatNum = (num, k) => {
	console.log(num.toFixed(k))
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 6


let findBiggestNum = (arr) => {
	return Math.max.apply(null, arr);
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 7


let findSmallestNum = (arr) => {
	return Math.min.apply(null, arr)
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 8


let gcd = (x, y) => {
	x = Math.abs(x);
	y = Math.abs(y);
	while(y) {
		let t = y;
		y = x % y;
		x = t;
	}
	return x;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 9

let gcdMoreThanTwo = (arr) => {
	let len = arr.length, a, b;
	if (!b) a = arr[0]
		for (let i = 0 ; i < len.length; i++) {
			b = input[i];
			a = gcd(a, b)
		}
		return a
	}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 10

let lcmTwoNum = (x, y) => {
	return (!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y));
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 11

let lcmMoreThanTwo = (arr) => {
	let r1 = 0, r2 = 0, l = arr.length;
	for(let i=0 ;i<l ;i++) {
		r1 = arr[i] % arr[i + 1];
		if(r1 === 0) {
			arr[i + 1] = (arr[i] * arr[i+1]) / arr[i + 1];
		}
		else {
			r2 = arr[i + 1] % r1;
			if(r2 === 0) {
				arr[i + 1] = (arr[i] * arr[i + 1]) / r1;
			}
			else {
				arr[i+1] = (arr[i] * arr[i + 1]) / r2;
			}
		}
	}
	return arr[l - 1];
} 



/////////////////////////////////////////////////////////////////////////////////////////////////
// 12

let checkNaturalNum = (num) => {
	return Number.isInteger(num) && num >= 0; 
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 13


let findPower = (num) => {
	return Number.isInteger(Math.sqrt(num))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 14

let roundNum = (num, k) => {
	return num.toFixed(k)
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 15

let checkIntegerNum = (num) => {
	return Number.isInteger(num)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 16

let isNumeric = (num) => {
	return typeof num === "number"
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 17

let addArrNum = (arr) => {
	return arr.filter(val => typeof val === "number").reduce((val1, val2) => val1 + val2,0)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 18

let multipleArrNum = (arr) => {
	return arr.filter(val => typeof val === "number").reduce((val1, val2) => val1 * val2,1)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 19

let caculatePythago = (a,b) => {
	let c = Math.pow(a, 2) + Math.pow(b, 2);
	return Math.sqrt(c)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 20

let evalueBinomial = (n, k) => {
	if ((typeof n !== 'number') || (typeof k !== 'number')) return false; 
	let coeff = 1;
	for (let x = n-k+1; x <= n; x++) coeff *= x;
		for (x = 1; x <= k; x++) coeff /= x;
			return coeff;
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 21


let convertToRoman = (num) => {
	if (typeof num !== 'number') 
		return false; 

	let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L","XL", "X", "IX", "V", "IV", "I"];
	let rmcm = "";
	for(let i = 0; i < decimalValue.length; i++) {
		while(decimalValue[i] <= num) {
			rmcm+= romanNumeral[i];
			num-=  decimalValue[i]
		}
	}
	return rmcm;

	// var digits = String(+num).split(""),
	// key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
	// "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
	// "","I","II","III","IV","V","VI","VII","VIII","IX"],
	// roman_num = "",
	// i = 3;
	// while (i--)
	// 	roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
	// return Array(+digits.join("") + 1).join("M") + roman_num;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 22

let  arabic = (roman) => {
	const romanMap = {
		"M": 1000,
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500
	}
	let sum = 0;
	for(let i = 0 ; i < roman.length; i++) {
		const current = romanMap[roman[i]];
		const next = romanMap[roman[i + 1]];
		if(next === undefined) {
			sum+= current;
			continue;
		}
		if(current >= next) {
			sum+= current;
			continue;
		}

		sum -= current;
	}

	return sum

	// if(roman == null) return -1;
	// var num = char_to_int(roman.charAt(0));
	// var pre, curr;

	// for(var i = 1; i < roman.length; i++){
	// 	curr = char_to_int(roman.charAt(i));
	// 	pre = char_to_int(roman.charAt(i-1));
	// 	if(curr <= pre){
	// 		num += curr;
	// 	} else {
	// 		num = num - pre*2 + curr;
	// 	}
	// }

	// return num;
}


function char_to_int(c){
	switch (c){
		case 'I': return 1;
		case 'V': return 5;
		case 'X': return 10;
		case 'L': return 50;
		case 'C': return 100;
		case 'D': return 500;
		case 'M': return 1000;
		default: return -1;
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 23 

let createID = () => {
	let dt = new Date().getTime();
	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		let r = (dt + Math.random()*16)%16 | 0;
		dt = Math.floor(dt/16);
		return (c=='x' ? r :(r&0x3|0x8)).toString(16);
	});
	return uuid;
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 24

let roundDigitNum = (num) => {
	return parseFloat(num.toFixed(4))
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 25

let caculateDollarNum = (n1, n2) => {
	let regex = /[^0-9.-]+/g;
	console.log(parseFloat(n1.replace(regex, "")) + parseFloat(n2.replace(regex, "")));
	console.log(parseFloat(n1.replace(regex, "")) - parseFloat(n2.replace(regex, "")));
	console.log(parseFloat(n1.replace(regex, "")) * parseFloat(n2.replace(regex, "")));
	console.log(parseFloat(n1.replace(regex, "")) / parseFloat(n2.replace(regex, "")));
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 26

let squareRoot = (num, k) => {
	return Math.sqrt(k, num)
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 27


let caculateDegrees = (x1, y1, x2, y2) => {
	return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 28


let roundUpNum = (num) => {
	return Math.ceil(num / 5) * 5;
}



/////////////////////////////////////////////////////////////////////////////////////////////////
// 29


let convertToNegative = (num) => {
	return -Math.abs(num)
} 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 30

let convertIntegerSqrt = (num) => {
	return Math.floor(Math.sqrt(num))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 31

let findBiggestNum2 = (num1, num2, num3) => {
	return Math.max(num1, num2, num3)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 32


let caculatePercent = (num, per) => {
	return (num * per) / 100
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 33

let convertRadianToDegree = (degree) => {
	return degree * Math.PI / 180;
}



/////////////////////////////////////////////////////////////////////////////////////////////////
// 34

let convertDegreeToRadian = (radian) => {
	return radian * (180 / Math.PI);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 35

let pythagoRyan = (a, b) => {
	return Math.hypot(a, b)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 36

let checkSqrt = (num) => {
	return Number.isInteger(Math.sqrt(num));

	 // return num && (num & (num - 1)) === 0;
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 37

let checkMinMax = (val, min, max) => {
	return val < max && val > min ? val : val < max && val < min ? min : max
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 38


let checkNumOrDecimal = (num) => {
	return Number.isInteger(num) ? "It is a whole number." : "Number has a decimal place."
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 39

let thousands_separators = (num) => {
	let num_parts = num.toString().split(".");
	num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return num_parts.join(".");
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 40

let randomBgColor = () => {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);

	let bg = `rgb(${x}, ${y}, ${z})`;
	document.body.style.background = bg;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 41

let digitCount = (num) => {
	let count = 0;
	if (n >= 1) ++count;

	while (n / 10 >= 1) {
		n /= 10;
		++count;
	}

	return count;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 42
let  product_Range = (a,b) => {
	let prd = a,i = a;

	while (i++< b) {
		prd*=i;
	}
	return prd;
}

let combinations = (n, r) => {
	if (n==r)  {
		return 1;
	} else {
		r=(r < n-r) ? n-r : r;
		return product_Range(r+1, n)/product_Range(1,n-r);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 43

let addPrime = (num) => {
	let arr = [];
	const isPrime = num => {
		for (let i = 2 ; i < num; i++) if (num % i === 0) return false;
			return num > 1;
	}
	for (let i = 0 ; i <= num; i++) if (isPrime(i)) arr.push(i)
		console.log(arr)
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 44

let Hamming = (n) => {
	let succession = [1];
	let length = succession.length;
	let candidate = 2;
	while (length < n) {
		if (isHammingNumber(candidate)) {
			succession[length] = candidate;
			length++;
		}
		candidate++;
	}
	return succession;
}

let isHammingNumber = (num) => {
	while (num % 5 === 0) num /= 5;
	while (num % 3 === 0) num /= 3;
	while (num % 2 === 0) num /= 2;

	return num == 1;
}



////////////////////////////////////////////////////////////////////////////////////////////////
// 45

let subtractNum = (arr) => {
	console.log(arr.reduce((a, b) => a - b))
}



////////////////////////////////////////////////////////////////////////////////////////////////
// 46

let div_mod = (a, b) => {
	if (b <= 0) throw new Error("b cannot be zero. Undefined.");
	if (isInt(a) && !isInt(b)) throw new Error("A or B are not integers.");
	return [Math.floor(a / b), a % b];
}

let isInt = (n) => {
	return n % 1 === 0;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 47

const Euclid_gcd = (a, b) => {
	a = +a;
	b = +b;
	if (a !== a || b !== b) {
		return [NaN, NaN, NaN];
	}
	
	if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
		return [Infinity, Infinity, Infinity];
	}
  // Checks if a or b are decimals
  if ((a % 1 !== 0) || (b % 1 !== 0)) {
  	return false;
  }
  var signX = (a < 0) ? -1 : 1,
  signY = (b < 0) ? -1 : 1,
  x = 0,
  y = 1,
  u = 1,
  v = 0,
  q, r, m, n;
  a = Math.abs(a);
  b = Math.abs(b);

  while (a !== 0) {
  	q = Math.floor(b / a);
  	r = b % a;
  	m = x - u * q;
  	n = y - v * q;
  	b = a;
  	a = r;
  	x = u;
  	y = v;
  	u = m;
  	v = n;
  }
  return [b, signX * x, signY * y];
}

////////////////////////////////////////////////////////////////////////////////////////////////
// 48


let fallingFactorial = (n, k) => {
	let i = (n - k + 1), r = 1;
	if (n < 0) throw new Error("n must be positive.");
	if (k > n) throw new Error("k cannot be greater than n.");
	while (i <= n) r *= i++;
	return r;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 49


let Lanczos_Gamma = (num) =>{
	let p = [ 0.99999999999980993, 676.5203681218851, -1259.1392167224028,771.32342877765313, 
	-176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 
	1.5056327351493116e-7], i, g = 7;
	if (num < 0.5) return Math.PI / (Math.sin(Math.PI * num) * calculus.LanczosGamma(1 - num));
	num -= 1;
	let a = p[0];
	let t = num + g + 0.5;
	for (i = 1; i < p.length; i++) a += p[i] / (num + i);
		return Math.sqrt(2 * Math.PI) * Math.pow(t, num + 0.5) * Math.exp(-t) * a;
}


////////////////////////////////////////////////////////////////////////////////////////////////
// 50 -- 51 -- 52 -- 53 : +-*/ số phức cần thì tìm hiểu
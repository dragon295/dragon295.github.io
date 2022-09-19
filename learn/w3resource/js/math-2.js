// 1
const convertToAnotherBase = (num, initBase, changeBase) => {
	if ((initBase && changeBase) <2 || (initBase && changeBase)>36)
		return 'Base between 2 and 36';

	console.log(parseInt(num, initBase).toString(changeBase))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const convertBinaryToDecimal = (str) => 
parseInt(str.replace(/[^01]/gi, ''), 2);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const convertDecimal = (num, base) => {
	if (num < 0) {
		num = 0xFFFFFFFF + num + 1;
	} 
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

const generateNum = (num1, num2) => {
	if (num1==null && num2 ==null) return 0; 
	if(num2 == null) {
		num2 = num1;
		num1 = 0
	} 
	let max = Math.max(num1, num2);
	let min = Math.min(num1, num2);
	return Math.floor(Math.random() * (max -min + 1))
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 5

const formatNum = (n, k) => {
	if ((typeof n !== 'number') || (typeof d !== 'number'))
		return false;
	n = parseFloat(n) || 0;
	return n.toFixed(d);
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 6

const findBiggestNum = (arr) => Math.max.apply(null, arr);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const findSmallestNum = () =>  Math.min.apply(null, arr);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const gcd = (a, b) => {
	let x = Math.abs(a);
	let y = Math.abs(b);
	while(y) {
		let t = y;
		y = x % y;
		x = t
	}
	return x
	// return !b ? a : gcd(b, a % b)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 9

const gcdMoreThanTwo = (arr) => {
	let a, b, len = arr.length;
	if(!b) a = arr[0];
	for(let i = 0 ;i < len; i++) {
		b = arr[i];
		a = gcd(a, b)
	}
	return a
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 10

const lcmTwoNum = (x, y) => 
(!x || !y) ? 0 : Math.abs((x * y) / gcd(x, y)); 


/////////////////////////////////////////////////////////////////////////////////////////////////
// 11

const lcmMoreThanTwo = (arr) => {
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

const checkNaturalNum = (v) => Number.isInteger(v) && v >= 0; 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 13

const checkPower = (n) => Number.isInteger(Math.sqrt(n));

/////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const roundNum = (n, k) => n.toFixed(k);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const checkIntegerNum = (n) =>  Number.isInteger(n);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const isNumeric = (num) =>!isNaN(parseFloat(num)) && isFinite(num);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const addArrNum = (arr) => arr.filter(v => !isNaN(v)).reduce((prev, curr) => prev + curr,0);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const multipleArrNum = (arr) => arr.filter(v => !isNaN(v)).reduce((prev, curr) => prev * curr,1)

/////////////////////////////////////////////////////////////////////////////////////////////////
// 19

const caculatePythago = (a, b) => Math.hypot(a, b);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 20


const evalueBinomial = (n, k) => {
	// debugger
	if ((typeof n !== 'number') || (typeof k !== 'number')) return false; 
	let coeff = 1;
	for(let x = n - k + 1; x <= n; x++) coeff *= x;
		for(let y = 1; y <= k; y++) coeff /= y;
			return coeff
	} 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 21

const convertToRoman = (num) => {
	let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L","XL", "X", "IX", "V", "IV", "I"];
	let convertStr = "";
	for(let i = 0; i < decimalValue.length; i++) {
		while(decimalValue[i] <= num) {
			convertStr += romanNumeral[i];
			num -= decimalValue[i]
		}
	}
	console.log(convertStr);
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// 22

const arabic = (roman) => {
	const romanMap = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000
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
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 23

const createID = () => {
	let dt = new Date().getTime();
	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		let r = (dt + Math.random()*16)%16 | 0;
		dt = Math.floor(dt/16);
		return (c ==='x' ? r :(r&0x3|0x8)).toString(16);
	});
	return uuid;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 24

const roundDigitNum = (n) => parseFloat(n.toFixed(4));


/////////////////////////////////////////////////////////////////////////////////////////////////
// 25

const caculateDollarNum = (n1, n2) => {
	let regex = /[^0-9.-]+/g;
	console.log(parseFloat(n1.replace(regex, "")) + parseFloat(n2.replace(regex, "")));
	console.log(parseFloat(n1.replace(regex, "")) - parseFloat(n2.replace(regex, "")));
	console.log(parseFloat(n1.replace(regex, "")) * parseFloat(n2.replace(regex, "")));
	console.log(parseFloat(n1.replace(regex, "")) / parseFloat(n2.replace(regex, "")));
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 26

const squareRoot = (n, k) => Math.pow(n, 1/k);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 27

const caculateDegrees = (x1, y1, x2, y2) => 
Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 28

const roundUpNum = (num) => {
	while(num % 5 !== 0) num++
		return num
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 29

const convertToNegative = (num) => -Math.abs(num);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 30 

const convertIntegerSqrt = (num) => Math.floor(Math.sqrt(num));

/////////////////////////////////////////////////////////////////////////////////////////////////
// 31

const findBiggestNum2 = (num1, num2, num3) => 
num1 > num2 && num1 > num3 
? num1 
: num2 > num1 && num2 > num3 ? num2 : num3 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 32

const caculatePercent = (num, per) => (num * per) / 100;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 33

const convertRadianToDegree = (degree) => degree * (Math.PI / 180);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 34

const convertDegreeToRadian = (radian) =>  radian * (180 / Math.PI);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 35

const pythagoRyan = (a, b) => Math.hypot(a, b);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 36

const checkSqrt = (num) => Number.isInteger(Math.sqrt(num)) || num && (num & (num - 1)) === 0;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 37

const checkMinMax = (n, min, max) => min < n && n < max ? n : n < min ? min : max 

/////////////////////////////////////////////////////////////////////////////////////////////////
// 38

const checkNumOrDecimal = (n) => 
Number.isInteger(n) ? "It is a whole number." : "Number has a decimal place.";

/////////////////////////////////////////////////////////////////////////////////////////////////
// 39

const thousands_separators = (num) => {
	let num_parts = num.toString().split(".");
	num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return num_parts.join(".");
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 40

const randomBgColor = () => {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);

	let bg = `rgb(${x}, ${y}, ${z})`;
	document.body.style.background = bg;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 41

const digitCount = (n) => (""+n).split("").length;

/////////////////////////////////////////////////////////////////////////////////////////////////
// 42

const combinations = (n, k) => {
	if ((typeof n !== 'number') || (typeof k !== 'number')) return false; 
	let calculate = 1;
	for(let x = n - k + 1; x <= n; x++) calculate*=x
		for(let y = 1; y <= k; y++) calculate /= y;
			return calculate 
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 43

const addPrime = (num, arr = []) => {
	const isPrime = (num) => {
		for(let i = 2; i < num ; i++) if(num % i === 0) return false;
			return num > 1
	}

	for(let i = 0; i < num; i++) if(isPrime(i)) arr.push(i)
		console.log(arr)
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 44

const Hamming = (n) => {
	// debugger
	let succession = [1];
	let length = succession.length;
	let candidate = 2;
	while(length < n) {
		if(isHammingNumber(candidate)) {
			succession[length] = candidate;
			length++
		}
		candidate++
	}
	return succession
}

const isHammingNumber = (num) => {
	while (num % 5 === 0) num /= 5;
	while (num % 3 === 0) num /= 3;
	while (num % 2 === 0) num /= 2;

	return num == 1;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 45

const subtractNum = (arr) => arr.reduce((prev, curr) => prev - curr);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 46

const div_mod = (a, b) => {
	if( b <= 0)  throw new Error("b cannot be zero. Undefined.");

	if( !Number.isInteger(a) || !Number.isInteger(b))
		throw new Error("A or B are not integers.");

	return [Math.floor(a / b), a % b]
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

/////////////////////////////////////////////////////////////////////////////////////////////////
// 48

const fallingFactorial = (n, k) => {
	var i = (n - k + 1),
	r = 1;
	if (n < 0) throw new Error("n must be positive.");
	if (k > n) throw new Error("k cannot be greater than n.");
	while (i <= n) r *= i++;
	return r;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// 49

const Lanczos_Gamma = (num) =>{
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

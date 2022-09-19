// 1

const FactorialNum = (n) => n < 1 ? 1 : n * FactorialNum(n - 1);

///////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const gcd = (a, b) => {
	debugger
	return !b ? a : gcd(b, a % b)
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const range = (a, b) => {
	let arr = [];
	while(a < b - 1) arr.push(++a);
	console.log(arr)
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// 4


const array_sum2 = (arr) => arr.reduce((prev, curr) => prev + curr, 0);

///////////////////////////////////////////////////////////////////////////////////////////////////
// 5

const exponent = (a, n) => n === 0 ? 1 : a * exponent(a, n - 1);

///////////////////////////////////////////////////////////////////////////////////////////////////
// 6

const fibonacciNum = (n) => {
	// Công thức Fibonacci F(n) = F(n-1) + F(n-2)
	if (n===1) {
		return [0, 1];
	} 
	else {
		let s = fibonacciNum(n - 1);
		console.log(s)
		s.push(s[s.length - 1] + s[s.length - 2]);
		return s;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const findEvenNum = (n) => n % 2 === 0 ? true : false

///////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const binarySearch = (arr, item) => {
	debugger
	let l = 0,
	r = arr.length - 1;
	while (l <= r) {
		const mid = Math.floor((l + r) / 2);
		const guess = arr[mid];
		if (guess === item) return mid;
		if (guess > item) r = mid - 1;
		else l = mid + 1;
	}
	return -1;
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// 9

const sortArr = (arr) => {
	for(let i = 0 ; i < arr.length; i++) {
		for(let j = 0 ; j < arr.length; j++) {
			if(arr[i] < arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp
			}
		}
	}
	console.log(arr)
}


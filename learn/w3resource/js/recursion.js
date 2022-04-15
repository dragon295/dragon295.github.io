// 1
let FactorialNum = (n) => {
	return n < 1 ? 1 : n * FactorialNum(n - 1);
}


 ///////////////////////////////////////////////////////////////////////////////////////////////////
 // 2

 let gcd = (a, b) => {
 	if ( ! b) {
 		return a;
 	}

 	return gcd(b, a % b);
 }


 ///////////////////////////////////////////////////////////////////////////////////////////////////
 // 3


 let range = (x, y) => {
 	debugger;
 	if (y - x === 2) {
 		return [x + 1];
 	} else {
 		let list = range(x, y - 1);
 		list.push(y - 1);
 		return list;
 	}
 }


 ///////////////////////////////////////////////////////////////////////////////////////////////////
 // 4


 let arrSum = (arr) => {
 	return arr.length === 1 ? arr[0] : arr.pop() + arrSum(arr);

 }

 ///////////////////////////////////////////////////////////////////////////////////////////////////
 // 5


 let exponent = (a, n) => {
 	if (n === 0) {
 		return 1
 	} else {
 		return a * exponent(a, n - 1);
 	}
 }

///////////////////////////////////////////////////////////////////////////////////////////////////
// 6


let fibonacciNum = (n) => {
	debugger
	if (n===1) {
		return [0, 1];
	} 
	else {
		let s = fibonacciNum(n - 1);
		s.push(s[s.length - 1] + s[s.length - 2]);
		return s;
	}
} 




///////////////////////////////////////////////////////////////////////////////////////////////////
// 7


let findEvenNum = (num) => {
	debugger
	if (num < 0) {
		num = Math.abs(num);
	}
	if (num===0) {
		return true;
	}
	if (num===1) {
		return false;
	} else {
		num = num - 2;
		return findEvenNum(num);
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const l= [0,1,2,3,4,5];
Array.prototype.br_search = function (target) {
	var half = parseInt(this.length / 2);
	if (target === this[half]) {
		return half;
	}
	if (target > this[half]) {
		return half + this.slice(half,this.length).br_search(target);
	} else {
		return this.slice(0, half).br_search(target);
	}
};



///////////////////////////////////////////////////////////////////////////////////////////////////
// 8


let sortArr = (arr) => {
	for (let i = 0 ; i < arr.length ; i++) {
		for (let j = 0 ; j < arr.length ; j++) {
			if (arr[j] < arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp; 
			}
		}
	}
	console.log(arr)
}


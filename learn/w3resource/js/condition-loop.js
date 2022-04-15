// let num1, num2;

// num1 = window.prompt("Input the First integer");
// num2 = window.prompt("Input the second integer");

// if(parseInt(num1, 10) > parseInt(num2, 10)) { 
// 	console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
// }  else if(parseInt(num2, 10) > parseInt(num1, 10)) {
// 	console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
// }  else {
// 	console.log("The values "+ num1+ " and "+num2+ " are equal.");
// }

///////////////////////////////////////////////////////////////////////////////////////////
// 2

let findMinus = (x, y, z) => {
	return x < 0|| y < 0 || z < 0 ? "The sign is -" : "The sign is +"
}


///////////////////////////////////////////////////////////////////////////////////////////
// 3

let sortNum = (x,y,z) => {
	if (x < y && x < z) {
		if (y < z) {
			return `${z}, ${y}, ${x}`
		} else {
			return `${y}, ${z}, ${x}`
		}
	} else if (y < x && y < z)  {
		if (x < z) {
			return `${z}, ${x}, ${y}`
		} else {
			return `${x}, ${z}, ${y}`
		}
	} else if (z < x && z < y) {
		if (y < x) {
			return `${x}, ${y}, ${z}`
		} else {
			return `${y}, ${x}, ${z}`
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////
// 4


let checkBiggestNum = (a,b,c,d,f) => {
	if (a > b && a > c && a > d && a > f) {
		console.log(a)
	} else if (b > a && b > c && b > d && b > f) {
		console.log(b)
	} else if (c > a && c > b && c > d && c > f) {
		console.log(c)
	} else if (d > a && d > b && d > c && d > f) {
		console.log(d)
	} else if (f > a && f > b && f > c && f > d) {
		console.log(f)
	}
}

///////////////////////////////////////////////////////////////////////////////////////////
// 5

let checkEvenAndOdd = (num) => {
	for (let i = 0 ; i < num; i++) {
		if (i % 2 === 0) {
			console.log(`${i} is even`)
		} else {
			console.log(`${i} is odd`)
		}
	}
}



///////////////////////////////////////////////////////////////////////////////////////////
// 6

let countPointStudent = (students) => {
	let Avgmarks = 0, avg;
	for (let i=0; i < students.length; i++) {
		Avgmarks += students[i][1];
		avg = (Avgmarks/students.length);
	}

	console.log("Average grade: " + (Avgmarks)/students.length);

	if (avg < 60) {
		console.log("Grade : F");      
	} 
	else if (avg < 70) {
		console.log("Grade : D"); 
	} 
	else if (avg < 80) 
	{
		console.log("Grade : C"); 
	} else if (avg < 90) {
		console.log("Grade : B"); 
	} else if (avg < 100) {
		console.log("Grade : A"); 
	}
}


///////////////////////////////////////////////////////////////////////////////////////////
// 7


let checkFizzBuzz = (num) => {
	for ( let i = 1; i <= num; i++ ) {
		if ( i % 3 === 0 && i % 5 === 0 ) {
			console.log( i + " FizzBuzz" );
		}
		else if ( i % 3 === 0 ) {
			console.log(i+ " Fizz" );
		}
		else if ( i % 5 === 0 ) {
			console.log(i+ " Buzz" );
		}
		else {
			console.log(i);
		}
	}
}


///////////////////////////////////////////////////////////////////////////////////////////
// 8


const happyNum = (n) => {
	if (!n >= 0) return -1;
	let digits = n.toString().split("");
	let sum = 0;
	for (let i = 0; i < digits.length; i++) {
		let digit = parseInt(digits[i], 10);
		sum += digit * digit;
	}
	return sum;
}

///////////////////////////////////////////////////////////////////////////////////////////
// 9

let checkArmstrongNum = (num) => {
	let str = ("" + num), sum = 0;
	for (let i = 0 ; i < str.length; i++) sum += Math.pow(parseInt(str[i]), 3)
		return sum === num ? `${num} is an Armstrong number` : `${num} is not an Armstrong number`
}


///////////////////////////////////////////////////////////////////////////////////////////
// 10


let createTriangle = (x, y) => {
	let chr;
	for(x=1; x <=6; x++) {
		for (y=1; y < x; y++) {
			chr=chr+("*");        
		}
		console.log(chr);
		chr=''; 
	}
}
///////////////////////////////////////////////////////////////////////////////////////////
// 11

let gcd = (a, b) => {
	return !b ? a : gcd(b, a % b);
}

///////////////////////////////////////////////////////////////////////////////////////////
// 12



let sumMultiplesThreeAndFive = () => {
	let sum = 0;
	for (var x = 0; x < 1000; x++) if (x % 3 === 0 || x % 5 === 0) sum += x;
}
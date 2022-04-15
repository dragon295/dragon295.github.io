//1

const reverseNum = (num) => +(""+num).split("").reverse().join("");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const checkPalindrome = (str) =>
str.toLowerCase().replace(/[\s]/g, '') === str.toLowerCase().replace(/[\s]/g, '').split("").reverse().join("");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const generateAllCombine = (str) => {
	debugger
	let result = [], indexCurrent = 0;

	while(indexCurrent < str.length) {
		let char = str.charAt(indexCurrent);
		let arrTemp = [char];

		for(let x in result) arrTemp.push(""+result[x]+char);

		result = result.concat(arrTemp);
		indexCurrent++;
	}
	return result
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 4

const sortAlphabet = (str) => str.split("").sort().join("");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 5

const upperCaseFirstLetter = (str) => str.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, l => l.toUpperCase());

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 6

const findLonggestStr = (str) => str.split(" ").sort((a, b) => b.length - a.length)[0];

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const countVowels = (str) => str.match(/[aiueo]/gi).length;

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const checkPrimeNum = (num) => {
	for (let i = 2; i < num; i++) if (num % i === 0) return false
		return num > 1
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 9

const checkType = (value) => typeof value;


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 10

const createMaxtrix = (num) => {
	for (let i = 0 ; i < num; i++) {
		for (let j = 0 ; j < num; j++) {
			if (i === j){
				console.log(' 1 ');
			} else {
				console.log(' 0 ');
			}
			console.log('----------');
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

const findBetweenNum = (arr) => 
arr.sort((a, b) => a - b).filter(v => v === arr[1] || v === arr[arr.length - 2]).join(",");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const findPerfectNum = (n, arr = []) => {
	let i = 0;
	while(i < n) {
		if(n % i === 0) arr.push(i);
		i++
	}
	return arr.reduce((prev, curr) => (prev + curr), 0) === n 
	? "It is a perfect number."
	: "It is not a perfect number." 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 13

const factors = (n, arr = []) => {
	let i = 0;
	while (i <= n) {
		if(n % i === 0) arr.push(i);
		i++;
	}
	return arr
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const amountTocoins = (amount, coins, str = 0) => {
	for(let i = 0 ; i < coins.length ; i++) {
		if(amount >= coins[i]) {
			amount = amount - coins[i];
			str = str + coins[i] + " ";
			i--;
		}
	}
	console.log(str.slice(0, str.length - 1).split(" ").map(v => parseInt(v)))
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const caculateBnVal = (b, n) => {
	let num = 1;
	for (let i = 1 ; i <= n; i++) num = b * num
		return num
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const uniqueVal = (str) => {
	let unique = "";
	for(let i = 0 ;i < str.length ; i++) 
		if(unique.indexOf(str[i]) === -1) unique += str[i]
			console.log(unique)
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const charCount = (str) => {
	debugger
	let uchars = {};
	str.replace(/\S/g, (l) => {uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
	return uchars;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const binarySearch = (arr, item) => {
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 19

const findBiggerElement = (val, arr) => arr.filter(v => v >= val) ;

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 20

const makeid = (str, n) => {
	let cutStr = "";
	for(let i = 0 ; i < n; i++) cutStr += str.charAt(Math.floor(Math.random() * str.length))
		return cutStr
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 21

const subArr = (arr) => {
	arr = arr.sort((a, b)  => b- a);
	return new Array(1 << arr.length).fill().map((e1, i) => arr.filter((e2, j) => i & 1 << j)).filter(a => a.length >= 2);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 22


const countCharacInStr = (str, index) => str.split("").filter(val => val === index).length;

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 23

const findNotRepeatCharac = (str) => {
	let arr = str.split("");
	return arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val)).join("");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 24

const burbleSorting = (arr) => {
	for (let i = 0 ; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] < arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp
			}
		}
	}
	return arr;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 25

const findLonggestStrInArr = (arr) => arr.sort((a, b) => b.length - a.length)[0];

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 26

const cutTheString = (str) => {
	let cut = "";
	for(let i = 0 ; i < str.length; i++) {
		if(cut.indexOf(str[i]) === -1) cut += str[i];
	}
	console.log(cut)
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 27


const  isPalindrome = (str1) => {
	let rev = str1.split("").reverse().join("");
	return str1 == rev;
}

const longestPalindrome = (str1) => {

	let max_length = 0, maxp = '';

	for(let i=0; i < str1.length; i++) {
		let subs = str1.substr(i, str1.length);

		for(let j=subs.length; j>=0; j--) {
			let sub_subs_str = subs.substr(0, j);
			if (sub_subs_str.length <= 1)
				continue;

			if (is_Palindrome(sub_subs_str)) {
				if (sub_subs_str.length > max_length) {
					max_length = sub_subs_str.length;
					maxp = sub_subs_str;
				}
			}
		}
	}

	return maxp;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 28

const callBackFunc = (id, callBack) => callBack(id)


const helloFunc = (id) => {
	console.log("hello " + id)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 29

const abc = () => arguments.callee.name

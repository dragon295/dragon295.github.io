// 1
let reverseNum = (num) => {
	return +(""+num).split("").reverse().join("");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 2

let checkPalindrome = (str) => {
	return str.toLowerCase().replace(/[\s]/g, '') === str.toLowerCase().replace(/[\s]/g, '').split("").reverse().join("");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 3

let generateAllCombine = (str) => {
	let result = [], indexCurrent = 0;

	while(indexCurrent < str.length) {
		let char = str.charAt(indexCurrent);
		let arrTemp = [char];
		
		for(let x in result) arrTemp.push(""+result[x]+char);

			result = result.concat(arrTemp);
		indexCurrent++;
	}
	return result

	//////////////////////////////////////////////

	// let array1 = [];
	// for (let x = 0, y=1; x < str.length; x++,y++) array1[x]=str.substring(x, y);
	// let combi = [];
	// let temp= "";
	// let slent = Math.pow(2, array1.length);

	// for (let i = 0; i < slent ; i++) {
	// 	temp= "";
	// 	for (let j=0;j<array1.length;j++) {
	// 		if ((i & Math.pow(2,j))) temp += array1[j];
	// 	}
	// 	if (temp !== "") combi.push(temp)
	// }
	// console.log(combi);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 4

let sortAlphabet = (str) => {
	return str.split("").sort().join("");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 5

let upperCaseFirstLetter = (str) => {
	return str.toLowerCase().split(" ").map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 6

let findLonggestStr = (str) => {
	return str.split(" ").sort((a, b) => b.length - a.length)[0]
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 7

let countVowels = (str) => {
	console.log(str.match(/[aiueo]/gi).length)
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 8

let checkPrimeNum = (num) => {
	for (let i = 2; i < num; i++) if (num % i === 0) return false
		return num > 1
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 9

let checkType = (item) => typeof item;


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 10

let createMaxtrix = (num) => {
	let arr = []
	for (let i = 0 ; i < num; i++) {
		for (let j = 0 ; j < num; j++) {
			if (i === j) {
				arr.push(1);
			} else {
				arr.push(0);
			}
			console.log('----------');
		}
	}
	return arr
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

let findBetweenNum = (arr) => [arr[Math.floor(arr.length / 2) - 1], arr[Math.floor(arr.length / 2) + 1]]


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

let findPerfectNum = (num) => {
	let sum = 0;
	for (let i = 0 ; i < num; i++) if(num % i === 0) sum+=i;
		return sum === num && sum !==0 ? "It is a perfect number." : "It is not a perfect number.";
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
// 13

let findPositiveNum = (num) => {
	let arr = [];
	for (let i = 0 ; i <= num; i++) if (num % i === 0) arr.push(i);
		console.log(arr)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 14


let amountTocoins = (amount, coins) => {
	if (amount === 0) {
		return [];
	} 
	else {
		if (amount >= coins[0]) {
			left = (amount - coins[0]);
			return [coins[0]].concat( amountTocoins(left, coins) );
		} else {
			coins.shift();
			return amountTocoins(amount, coins);
		}
	}
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 15

let caculateBnVal = (b, n) => {
	let num = 1;
	for (let i = 1 ; i <= n; i++) num = b * num
		return num
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
// 16

let uniqueVal = (str) => {
	// return [... new Set(str.split(""))].join("");
	let uniql="";
	for (let i=0;i < str.length;i++) if(uniql.indexOf(str.charAt(i))==-1)  uniql += str[i];  
		return uniql; 
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 17

let charCount = (str) => {
	let uchars = {};
	str.replace(/\S/g, (l) => {uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
	return uchars;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 18

function array_binarySearch(narray, delement) {
	let mposition = Math.floor(narray.length / 2);

	if (narray[mposition] === delement) return mposition;
	else if (narray.length === 1) return null;
	else if (narray[mposition] < delement) {
		let arr = narray.slice(mposition + 1);
		let res = array_binarySearch(arr, delement);
		if (res === null) return null;
		else return mposition + 1 + res;
	}
	else {
		let arr1 = narray.slice(0, mposition);
		return array_binarySearch(arr1, delement);
	}
}




//////////////////////////////////////////////////////////////////////////////////////////////////////
// 19

let findBiggerElement = (val) => {
	return function (ite, i, arr) {
		return ite >= val;
	}
}

let result = [11, 45, 4, 31, 64, 10]. filter(findBiggerElement(10));
// console.log(result);


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 20

let  makeid = (l) => {
	let text = "";
	let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=0; i < l; i++) text += char_list.charAt(Math.floor(Math.random() * char_list.length));
		return text;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 21

let subArr = (arr, k) => {
	arr = arr.sort((a, b)  => b- a);
	return new Array(1 << arr.length).fill().map((e1, i) => arr.filter((e2, j) => i & 1 << j)).filter(a => a.length >= 2);

	// let result_set = [], 
	// result;


	// for(let x = 0; x < Math.pow(2, arra.length); x++) {
	// 	result = [];
	// 	i = arra.length - 1; 

	// 	do
	// 	{
	// 		if( (x & (1 << i)) !== 0)
	// 		{
	// 			result.push(arra[i]);
	// 		}
	// 	}  while(i--);

	// 	if( result.length >= arra_size) result_set.push(result);
	// }

	// return result_set; 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 20

let countCharacInStr = (str, index) => {
	return str.split("").filter(val => val === index).length;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 23

let findNotRepeatCharac = (str) => {
	let arr = str.split("");
	return arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val)).join("");
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 24

let burbleSorting = (arr) => {
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

let findLonggestStrInArr = (arr) => {
	// let count = Math.max(... arr.map(val => val.length));
	// return arr.filter(val => count === val.length).join("");
	return arr.reduce(function(lname, country) {
		return lname.length > country.length ? lname : country;
	},"");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 26

let cutTheString = (str) => {
	let chars = input.split(''), curr_char, str1 = "", longest_string = "", hash = {};
	for (let i = 0; i < chars.length; i++) {
		curr_char = chars[i];
		if (!hash[chars[i]]) { 
			str1 += curr_char; 
			hash[chars[i]] = {index:i};
		}
		else {
			if(longest_string.length <= str1.length)
			{
				longest_string = str1;
			}
			let prev_dupeIndex = hash[curr_char].index;
			let str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
			str1 = str_FromPrevDupe + curr_char;
			hash = {};
			for (let j = prev_dupeIndex + 1; j <= i; j++) {
				hash[input.charAt(j)] = {index:j};
			}
		}
	}
	return longest_string.length > str.length ? longest_string : str;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 27

let  isPalindrome = (str1) => {
	let rev = str1.split("").reverse().join("");
	return str1 == rev;
}

let longestPalindrome = (str1) => {

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

let callBackFunc = (id, callBack) => {
	callBack(id)
}

let helloFunc = (id) => {
	console.log("hello " + id)
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
// 29

let abc = () => {
	console.log(abc.name)
}
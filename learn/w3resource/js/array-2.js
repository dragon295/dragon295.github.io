// 1

const checkArr = (value) => Array.isArray(value);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const cloneArr = (arr) => [...arr]

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const checkPositionArr = (arr, k) => 
arr.length === 0 || k < 0  ? [] : k === undefined ? arr[0] :  arr.slice(0, k);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 4

const cut_arr = (arr, n) =>
n === undefined ? arr.slice(arr.length - 1) : arr.length < n ? arr.slice(0) : arr.slice(arr.length - n)

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 5

const convert_to_str = (arr) => {
	console.log(arr.toString());
	console.log(arr.join());
	console.log(arr.join("+"))
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 6

const break_arr = () => {
	debugger
	let num=window.prompt(), str = ("" + num), result = [str[0]];
	for(let x=1; x<str.length; x++) {
		if((str[x-1]%2 === 0)&&(str[x]%2 === 0)) {
			result.push('-', str[x]);
		}
		else {
			result.push(str[x]);
		}
	}
	console.log(result.join(''));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const sort_arr = (arr) => {
	for(let i = 0; i < arr.length; i++) {
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

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const count_item_arr = (arr) => {
	// debugger
	let count = 0, compareCount = 0, item = "";
	for(let i = 0 ; i < arr.length; i++) {
		for(let j = i; j < arr.length; j++) {
			if(arr[i] === arr[j]) count++;

			if(count > compareCount) {
				compareCount = count;
				item = arr[i];
			}
		}
		count = 0
	}
	return `${item}:${compareCount}`
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 9

const lower_upper = (str, arr = []) => {
	for (let i = 0 ; i < str.length ; i++) {
		let upper = str[i].toUpperCase();
		if(str[i] === upper) arr.push(str.charAt(i).toLowerCase());
		else arr.push(str.charAt(i).toUpperCase())
	}
console.log(arr.join(""))
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 10

const count_row = (arr) => {
	for(let i in arr) {
		console.log("row " + i)
		for(let j in arr[i]) {
			console.log(arr[i][j])
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

const square_sum = (arr, sum = 0) => {
	arr.forEach(v => sum+= Math.pow(v, 2))
	return sum
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const sum_product = (arr) => {
	let sum = 0;
	let product = 1;
	for (let item of arr) {
		sum += item;
		product *= item;
	}
	console.log(`${sum} and ${product}`)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 13

let val = 0;
let arrEle = [];
let addElement = () => {
	arrEle[val] = input.value;
	alert(`Element ${arrEle[val]} added at ${val}`);
	val++;
}
let displayEle = () => {
	let e = "";
	for (let i = 0 ; i < arrEle.length ; i++) e += `Element ${arrEle[i]} added at ${i} <br/>`;
		showVal.innerHTML = e
}

let input =  document.getElementById("ite");
let add = document.getElementById("add");
let display = document.getElementById("display");
let showVal = document.getElementById("show");
add.addEventListener("click", addElement);
display.addEventListener("click", displayEle);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const remove_duplicate = (arr, array = []) => {
	for(let i in arr) if(!array.includes(arr[i])) array.push(arr[i])
		console.log(array)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const serialNum = (color, o) => {
	let str = ""
	for(let i = 0 ; i < color.length ; i++) {
		if(i >= 3) str += `${i}${o[3]} choice is ${color[i]}\n`
			else str += `${i}${o[i + 1]} choice is ${color[i]}\n`
		}
	console.log(str)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const findLeapYear = (first, last, arr = []) => {
	for(let i = first; i <= last; i++) {
		if(i % 400 === 0 || i % 100 === 0 || i % 4 === 0) arr.push(i)
	}	
return arr
} 

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const shuffleArr = (arr) => {
	let length = arr.length;
	for (let i = 0 ; i < length ; i++) {
		while(length > 0) {
			index = Math.floor(Math.random() * length);
			length--;
			let temp = arr[i];
			arr[i] = arr[index]
			arr[index] = temp
		}
	}
	console.log(arr)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const binarySearch = (arr, k) => {
	let l = 0;
	let r = arr[arr.length - 1];
	while(l <= r) {
		let mid = Math.floor((l + r) / 2)
		let guess = arr[mid];
		if(guess === k) return mid;
		if(guess > k) r = mid - 1
			else l = mid + 1
		}
	return -1;
}  

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 19

const sum_two_arr = (arr1, arr2, arr = []) => {
	if (arr1.length === 0) 
		return "array1 is empty";
	if (arr2.length === 0) 
		return "array2 is empty";  
	for(let i = 0 ; i < arr1.length; i++) arr.push(arr1[i] + arr2[i])
		return arr
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 20

const find_duplicate = (arr) => {
	let arr1 = [];
	for (let i = 0 ; i < arr.length ; i++) 
		if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !arr1.includes(arr[i])) arr1.push(arr[i])
			console.log(arr1)
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////
// 21

const flat_arr = (a, shallow, r) => {
	if(!r){ r = []}

		if (shallow) {
			return r.concat.apply(r,a);
		}

		for(var i=0; i<a.length; i++){
			if(a[i].constructor == Array){
				flat_arr(a[i],shallow,r);
			}else{
				r.push(a[i]);
			}
		}
		return r;

	}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 22

const union = (arr1, arr2) => [... new Set(arr1.concat(arr2))].sort((a, b) => a - b);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 23

const differenceOf2arrys = (arr1, arr2) => {
	let convert = arr1.flat(5).concat(arr2.flat(5));
	return convert.filter(v =>convert.indexOf(v) === convert.lastIndexOf(v))
	.sort((a, b) => a - b)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 24

const remove_false = (arr) => arr.filter(v => v);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 25

const library = [ 

{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];


let compare_to_sort = (x,y) => {
	if (x.title < y.title)
		return -1;
	if (x.title > y.title)
		return 1;
	return 0;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 26

const findPositionSum = (arr, target, array = []) => {
	for(let i = 0 ; i < arr.length; i++) if(arr[i] + arr[i + 1] === target) array.push(i, i + 1)
		console.log(array)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 27

const library2 = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

const check_infor = (arr, key) => arr.map(v => v[key]);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 28

const slice_arr = (arr1) => {
	debugger
	let arr= arr1.concat().sort(),
	a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
	while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
	return a1.substring(0, i);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 29

const num_string_range = (start, end, step, arr = []) => {
	if ((step === 0) || (typeof start === "undefined" || typeof end === "undefined") || (typeof start != typeof end))
		return false;
	if (typeof start === "string" && typeof end === "string") {
		if(start.charCodeAt() < end.charCodeAt()) {
			for(let i = start.charCodeAt(); i < end.charCodeAt(); i+= step) 
				arr.push(String.fromCharCode(i))
		} else {
			for(let i = start.charCodeAt(); i > end.charCodeAt(); i-= step) 
				arr.push(String.fromCharCode(i))
		}
	}

	if (typeof start === "number" && typeof end === "number") {
		if(start < end) {
			for(let i = start ; i <= end; i+= step) 
				arr.push(i)
		} else {
			for(let i = start; i >= end; i-= step) 
				arr.push(i)
		}
	}
	console.log(arr)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 30

const merge_arr = (arr1, arr2) => {
	let combine = arr1.concat(arr2), arr = [];
	for (let val of combine) if(!arr.includes(val)) arr.push(val)
		console.log(arr)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 31

const remove_ele = (arr, k) =>
arr.indexOf(k) > -1 ? arr.splice(k, 1) : `k is small than -1 and cannot splice`

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 32

const contains = (arr, k) => 
arr.filter(v => arr.includes(k) && v === k)[0] !== undefined ? true : false;

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 33

const empty_arr = () => {
	arr = [1, 3, 6, 3, -5];
	console.log(arr);
	arr.length = 0;
	console.log(arr);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 34

const nthlargest = (arr, n) => arr.sort((a,b ) => b- a)[n- 1];

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 35

const random_item = (arr) => arr[Math.floor(Math.random() * arr.length)];

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 36

const array_filled = (n, k) => Array(...Array(n)).map(Number.prototype.valueOf, k)

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 37

const array_add = (n, val) => Array(...Array(n)).map(String.prototype.valueOf, val);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 38

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 39

const filter_array_values = (arr) => arr.filter(v => v);


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 40

const array_range = (start, length) =>{
	// debugger
	const arr = new Array(length);
	for (let i = 0; i < length; i++) {
		arr[i] = start;
		start++
	} 
	return arr;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 41

const rangeBetwee = (a, b, arr = []) => {
	if(a < b) {
		for(let i = a; i<= b; i++) arr.push(i)
	} else {
		for(let i = b; i <= a; i++) arr.push(i)
	}
return arr
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 42

const find_unique = (arr1, arr2) => 
[...new Set(arr1.flat(5).concat(arr2).flat(5))].sort((a,b) => a - b);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 43

const unzip = arr => {
	return arr.reduce((acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc), 
		Array.from({length: Math.max(...arr.map(x => x.length))}).map(x => []));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 44

const indexOn = (arr, key) =>
arr.reduce((obj, v) => {
	const { [key]: id, ...data } = v;
	obj[id] = data;
	return obj;
}, {});


console.log(indexOn([
	{ id: 10, name: 'apple' },
	{ id: 20, name: 'orange' }
	], x => x.id));
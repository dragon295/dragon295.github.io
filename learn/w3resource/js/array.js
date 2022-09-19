// 1
let checkArr = (type) => {
	// return  Array.isArary(type);
	return toString.call(type) === "[object array]" ? true : false
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 2

let cloneArr = (arr) => {
	return arr.slice(0);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 3

let checkPositionArr = (arr, n) => {
	return  n < 0 ? [] : typeof n === "undefined" ? arr[0] : arr.slice(0, n);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 4

let cut_arr = (arr, n) => {
	return typeof n === "undefined" ? arr.slice(arr.length - 1) : arr.length < n ? arr.slice(0) : arr.slice(arr.length - n)
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
// 5


let convert_to_str = (arr) => {
	console.log(arr.toString());
	console.log(arr.join());
	console.log(arr.join("+"))
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 6


let break_arr = () => {
	debugger
	const num=window.prompt(), str = ("" + num), result = [str[0]];
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

let sort_arr = (arr) => { 
	for (let i = 0 ; i < arr.length ; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp
			}
		}
	}
	return arr
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 8

let count_item_arr = (arr) => {
	debugger
	let count = 0;
	let compareCount = 1;
	let item = "";
	for (let i = 0 ; i < arr.length; i++) {
		for (let j = i ; j < arr.length ; j++) {
			if (arr[i] === arr[j]) {
				count++;
			}
			if (count > compareCount) {
				compareCount = count;
				item = arr[i];
			}
		}
		count = 0;
	}
	return item
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 9

let lower_upper = (str) => {
	let arr = [];
	for (let i = 0 ; i < str.length ; i++) {
		let upper = str[i].toUpperCase();
		if(str[i] === upper) arr.push(str.charAt(i).toLowerCase());
		else arr.push(str.charAt(i).toUpperCase())
	}
console.log(arr.join(""))
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 10


let count_row = (arr) => {
	for (let i in arr) {
		arr[i].unshift("row " + i);
		for (let j in arr[i]) {
			console.log(arr[i][j]);
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

let square_sum = (arr) => {
	let sum = 0;
	for (let i = 0 ; i < arr.length ; i++) {
		sum += Math.pow(arr[i], 2)
	}
	return sum
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

let sum_product = (arr) => {
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

let remove_duplicate = (arr) => {
	for (let i = 0 ; i < arr.length; i++) {
		for (let j = i + 1 ; j < arr.length - 1; j++) {
			if (arr[i] === arr[j]) arr.splice(j, i)
		}
}
return arr
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 15

let serialNum = (color, o) => {
	console.log(color)
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
// 16

let findLeapYear = (a, b) => {
	let arr = [];
	for (let i = a; i <= b ; i++) {
		if (i % 400 === 0 || i % 100 === 0 || i % 4 === 0) {
			arr.push(i)
		} 
	}
	console.log(arr)
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
// 17



let shuffleArr = (arr) => {
	for (let i = 0 ; i < arr.length ; i++) {
		let temp = arr[i];
		arr[i] = Math.floor(Math.random() * arr.length)
		arr[Math.floor(Math.random() * arr.length)] = temp
	}
	console.log(arr)
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
// 18


let binary_search = (arr) => {
	let firstIndex  = 0, lastIndex = items.length - 1, middleIndex = Math.floor((lastIndex + firstIndex)/2);

	while(items[middleIndex] != value && firstIndex < lastIndex) {
		if (value < items[middleIndex]) {
			lastIndex = middleIndex - 1;
		} 
		else if (value > items[middleIndex]) {
			firstIndex = middleIndex + 1;
		}
		middleIndex = Math.floor((lastIndex + firstIndex)/2);
	}

	return (items[middleIndex] != value) ? -1 : middleIndex;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
// 19


let sum_two_arr = (arr1, arr2) => {
	let arr = [];
	for (let i = 0 ; i < arr1.length ; i++) arr.push(arr1[i] + arr2[i])
		arr1.length < arr2.length 
	? arr = arr.concat(arr2.slice(arr1.length)) 
	:  arr = arr.concat(arr1.slice(arr2.length));
	console.log(arr)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 20


let find_duplicate = (arr) => {
	let arr1 = [];
	for (let i = 0 ; i < arr.length ; i++) {
		if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !arr1.includes(arr[i])) arr1.push(arr[i])
	}
console.log(arr1)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 21

let flat_arr = (a, shallow, r) => {
	if(!r){ r = []}

		if (shallow) {
			return r.concat(...a);
		}

		for(let i=0; i<a.length; i++){
			if(a[i].constructor == arry){
				flat_arr(a[i],shallow,r);
			}else{
				r.push(a[i]);
			}
		}
		return r;
	}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 22


let union_arr = (arr1, arr2) => {
	let union = arr1.concat(arr2), arr = [];
	for (let i = 0 ; i < union.length ;i++) if (!arr.includes(union[i])) arr.push(union[i]);
		console.log(arr.sort((a, b) => a - b))
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 23


function differenceOf2arrys (arry1, arry2) {
	const temp = [];
	arry1 = arry1.toString().split(',').map(Number);
	arry2 = arry2.toString().split(',').map(Number);

	console.log(arr)
	for (var i in arry1) {
		if(!arry2.includes(arry1[i])) temp.push(arry1[i]);
	}
	for(i in arry2) {
		if(!arry1.includes(arry2[i])) temp.push(arry2[i]);
	}
	return temp.sort((a,b) => a-b);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 24

let remove_false = (arr) => {
	return arr.filter(val => Boolean(val))
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 25
var library = [ 

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


let findPositionSum = (arr, target) => {
	// let arr1 = [];
	// for (let i = 0 ; i < arr.length ; i++) {
	// 	if (arr[i] + arr[i + 1] === target) arr1.push(i, i + 1)
	// }
	// return arr1

	const map = [];
	const indexnum = [];

	for (let x = 0; x < arr.length; x++) {
		if (map[arr[x]] != null) {
			var index = map[arr[x]];
			indexnum[0] = index;
			indexnum[1] = x;
			break;
		}
		else {
			map[target - arr[x]] = x;
		}
	}
	return indexnum;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 27


var library2 = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];


let check_infor = (arr, val) => {
	return arr.map(ite => ite[val])
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 28

let slice_arr = (arr1) => {
	const arr= arr1.concat().sort();
	const a1= arr[0];
	const a2= arr[arr.length-1];
	const L= a1.length;
	let i= 0;
	while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
	return a1.substring(0, i);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 29


let num_string_range = (start, end, step) => {
	const range = [];
	if ((step === 0) || (typeof start === "undefined" || typeof end === "undefined")
		|| (typeof start !== typeof end))
		return false;

	if (end < start) step = -step;


	if (typeof start === number) {
		while (step > 0 ? end >= start : start >= end) {
			range.push(step)
			start += step
		}
	} else if (typeof start === "string") {
		if (start.length !== 1 || end.length !== 1) {
			throw new Error("Strings with one character are supported.");
		}

		start = start.charCodeAt();
		end = end.charCodeAt();

		while (step > 0 ? end >= start : start >= end) {
			range.push(String.fromCharCode(start))
			start += step
		}
	} else {
		throw new Error("Only string and number are supported");
	}

	return range

} 



///////////////////////////////////////////////////////////////////////////////////////////////////////
// 30


let merge_arr = (arr1, arr2) => {
	let combine = arr1.concat(arr2), arr = [];
	for (let val of combine) if(!arr.includes(val)) arr.push(val)
		console.log(arr)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 31

let remove_ele = (arr, k) => {
	return arr.indexOf(k) > -1 ? arr.splice(k, 1) : `k is small than -1 and cannot splice`
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 32


let contains = (arr, k) => {
	return arr.filter(val => val === k)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 33

let empty_arr = () => {
	arr = [1, 3, 6, 3, -5];
	console.log(arr);
	arr.length = 0;
	console.log(arr);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 34

let nthlargest = (arr, n) => {
	let x = 0, y = 0, z = 0, temp = 0, flag = false, result = false;
	const tnum = arr.length;

	while(x < tnum){
		y = x + 1; 

		if(y < tnum){
			for(z = y; z < tnum; z++) {
				if (arr[x] < arr[z]) {
					temp = arr[z];
					arr[z] = arr[x];
					arr[x] = temp;
					flag = true; 
				} else {
					continue;
				}	
			}					
		}

		if (flag) {
			flag = false;
		} else{
			x++; 
			if(x === n) result = true;
		}
		if(result) break;
	}

	return (arr[(n - 1)]);
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 35

let  random_item = (items) => {

	return items[Math.floor(Math.random()*items.length)];

}



///////////////////////////////////////////////////////////////////////////////////////////////////////
// 36


let  array_filled = (n, val) => {
	return Array(...Array(n)).map(Number.prototype.valueOf,val);
	// return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 37


let array_add = (n, str) => {
	return Array(...Array(n)).map(String.prototype.valueOf(str));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 38

let reverse_arr = (arr, first, sec) => {
	while (old_index < 0) {
		old_index += arr.length;
	}
	while (new_index < 0) {
		new_index += arr.length;
	}
	if (new_index >= arr.length) {
		let k = new_index - arr.length;
		while ((k--) + 1) {
			arr.push(undefined);
		}
	}
	arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
	return arr;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 39

let filter_array_values = (arr) => {
	return arr.filter(val => Boolean(val))
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 40

let array_range = (start, length) =>{
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

let rangeBetween = (start, end) => {
	if (start < end) {
		const arr = new Array(end - start + 1);
		for (let i = 0 ; i < arr.length; i++) {
			arr[i] = start;
			start++;
		}
		return arr
	} else {
		const array = new Array(start - end + 1);
		// console.log(array)
		for (let j = 0 ; j < array.length; j++) {
			array[j] = start;
			start--
		}
		return array
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 42

let find_unique = (arr1, arr2) => {
	return [... new Set(arr1.concat(arr2.flat(5)))]
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 43


let unzip = arr => {
	return arr.reduce((acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc), 
		Array.from({length: Math.max(...arr.map(x => x.length))}).map(x => []));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 44

const indexOn = (arr, key) => {
	return arr.reduce((obj, v) => {
		const { [key]: id, ...data } = v;
		obj[id] = data;
		return obj;
	}, {});
}
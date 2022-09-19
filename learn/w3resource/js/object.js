// 1

let student = {
	name : "David Rayy",
	sclass : "VI",
	rollno : 12 
};

let keys = (obj, arr = []) => {
	for(let val in obj) {
		obj.hasOwnProperty(val) ? arr.push(val) : "Sorry it's wrong!";
	}
	console.log(arr)
	
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 2

let delete_key = (obj) => {
	console.log(obj);
	delete obj.rollno;
	console.log(obj)	
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 3

let countObjLength = (obj, count = 0) => {
	for (let key in obj) if (obj.hasOwnProperty(key)) count++
		console.log(count)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 4

const library = [{
	title: 'Bill Gates',
	author: 'The Road Ahead',
	readingStatus: true
},
{
	title: 'Steve Jobs',
	author: 'Walter Isaacson',
	readingStatus: true
},
{
	title: 'Mockingjay: The Final Book of The Hunger Games',
	author: 'Suzanne Collins',
	readingStatus: false
}];


let statusObj = (arr) => {
	console.log(arr.map(val => {
		let book = "'" + val.title + "'" + ' by ' + val.author + ".";
		return val.readingStatus ? "Already read " + book : "You still need to read " + book;
	}).join("\n"))
}



//////////////////////////////////////////////////////////////////////////////////////////////////
// 6

function Cylinder(diameter, height) {
	this.diameter = diameter;
	this.height = height;
}

Cylinder.prototype.Volume = function() {
	let radius = this.diameter / 2;
	return Math.PI * Math.pow(2, radius) * this.height;
}

let cyl = new Cylinder(4, 7);
// console.log(cyl.Volume().toFixed(4));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 7

let burbleSort = (arr) => {
	for (let i = 0 ; i < arr.length; i++) {
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


//////////////////////////////////////////////////////////////////////////////////////////////////
// 7

let sub_String  = (str, arr = []) => {
	for (let m = 0; m < str.length; m++) {
		for (let n = m+1; n < str.length+1; n++) {
			arr.push(str.slice(m,n));
		}
	}
	return arr
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 8

function my_Clock() {
	this.cur_date = new Date();
	this.hours = this.cur_date.getHours();
	this.minutes = this.cur_date.getMinutes();
	this.seconds = this.cur_date.getSeconds();
} 


my_Clock.prototype.run = function () {
	setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function () {
	this.updateTime(1);
	console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
my_Clock.prototype.updateTime = function (secs) {
	this.seconds+= secs;
	if (this.seconds >= 60) {
		this.minutes++;
		this.seconds= 0;
	}
	if (this.minutes >= 60) {
		this.hours++;
		this.minutes=0;
	}
	if (this.hours >= 24) {
		this.hours = 0;
	}
};
let clock = new my_Clock();
// clock.run();


//////////////////////////////////////////////////////////////////////////////////////////////////
// 9

function Circle(radius) {
	this.radius = radius;
	this.area = function() {
		return Math.pow(2, this.radius) * Math.PI
	};
	this.perimeter = function() {
		return 2*Math.PI*this.radius;
	}
}

let c = new Circle(3);
// console.log(c.area().toFixed(2));
// console.log(c.perimeter().toFixed(2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 10

let library_sort = [{
	title: 'Bill Gates',
	author: 'The Road Ahead',
	libraryID: 1254
},
{
	title: 'Steve Jobs',
	author: 'Walter Isaacson',
	libraryID: 4264
},
{
	title: 'Mockingjay: The Final Book of The Hunger Games',
	author: 'Suzanne Collins',
	libraryID: 3245
}];

let compare_to_sort = (arr, val) =>  {
	return typeof val === "number" ? console.log(arr.sort((a, b) => b[val] - a[val])) : console.log(arr.sort((a, b) => b[val].length - a[val].length))
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 11

function FindAllMethods(obj) {
	// return Object.getOwnPropertyNames(obj).filter(function(property) {
	// 	return typeof obj[property] == "function";
	// });

	return Object.getOwnPropertyNames(obj);
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 12

function parse_URL(url) {
	let a = document.createElement('a');
	a.href = url;
	return {
		source: url,
		protocol: a.protocol.replace(':', ''),
		host: a.hostname,
		port: a.port,
		query: a.search,
		params: (function () {
			let ret = {},
			seg = a.search.replace(/^\?/, '').split('&'),
			len = seg.length,
			i = 0,
			s;
			for (; i < len; i++) {
				if (!seg[i]) {
					continue;
				}
				s = seg[i].split('=');
				ret[s[0]] = s[1];
			}
			return ret;
		})(),
		file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
		hash: a.hash.replace('#', ''),
		path: a.pathname.replace(/^([^\/])/, '/$1'),
		relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
		segments: a.pathname.replace(/^\//, '').split('/')
	};
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 13

function allKeys(obj) {
	if (!isObject(obj)) return [];
	var keys = [];
	for (var key in obj) keys.push(key);
		return keys;
}
function isObject(obj) {
	var type = typeof obj;
	return type === 'function' || type === 'object' && !!obj;
}
function Student(name) {
	this.name = name;
}
Student.prototype.rollno = true;
// console.log(allKeys(new Student("Sara")));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 14

function all_values(obj, arr = []) {
	// console.log(Object.values(obj))
	if (typeof obj === "object" && obj !== null) {
		for (let val in obj) arr.push(obj[val]);
	}  
return arr
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 15

function key_value_pairs (obj, arr = []) {
	if (typeof obj === "object" && obj !== null) {
		for (let val in obj) arr.push([val, obj[val]]);
	}  
return arr
}

////////////////////////////////////////////////// Cach-2

function key_value_pairs(obj) {
	var keys = _keys(obj);
	var length = keys.length;
	var pairs = Array(length);
	for (var i = 0; i < length; i++) {
		pairs[i] = [keys[i], obj[keys[i]]];
	}
	return pairs;
}

function _keys(obj) {
	if (!isObject(obj)) return [];
	if (Object.keys) return Object.keys(obj);
	var keys = [];
	for (var key in obj) if (_.has(obj, key)) keys.push(key);
		return keys;
}

function isObject(obj) {
	var type = typeof obj;
	return type === 'function' || type === 'object' && !!obj;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 16

function invert_key_value(obj, object = {}) {
	for (let val in obj) {
		object[obj[val]] = val
	}
	return object
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 17

function hasKey(obj, key) {
	return obj !== null && obj.hasOwnProperty(key);

	// return obj != null && hasOwnProperty.call(obj, key);
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 18

function is_dom_element(obj) {
	// return !!(obj && obj.nodeType === 1);

	return obj !== null && obj.nodeType === 1;
}
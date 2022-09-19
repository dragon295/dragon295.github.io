// 1


const keys = (obj) => {
	if(typeof obj !== "object") return
		let key = Object.keys(obj);
	console.log(key)
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 2

let student = {
	name : "David Rayy",
	sclass : "VI",
	rollno : 12 
};

const delete_key = (obj) => {
	console.log(obj);
	delete obj.rollno;
	console.log(obj)	
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const objLength = (obj) => 
Object.prototype.toString.call(obj) === "[object Object]" 
? Object.keys(obj).length : "This isn't an object"

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

const statusObj = (obj) => 
obj.forEach(v => {
	if(v.readingStatus) console.log(`Already read '${v.title}' by '${v.author}'`)
		else console.log(`You still need to read '${v.title}' by '${v.author}'`)
	})

//////////////////////////////////////////////////////////////////////////////////////////////////
// 5

function Cylinder(cyl_height, cyl_diameter) {
	this.cyl_height = cyl_height;
	this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function() {
	var radius = this.cyl_diameter / 2;
	return this.cyl_height * Math.PI * radius * radius;
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 6

Array.prototype.burbleSort = function () {
	for(let i = 0 ; i < this.length; i++) {
		for(let j = 0 ; j < this.length; j++) {
			if(this[i] < this[j]) {
				let temp = this[i];
				this[i] = this[j];
				this[j] = temp
			}
		}
	}
	console.log(this)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 7

String.prototype.sub_String = function() {
	var subset = [];
	for (var m = 0; m < this.length; m++) {
		for (var n = m+1; n<this.length+1; n++) subset.push(this.slice(m,n));
	}
return subset;
};

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
	if(this.seconds < 10) this.seconds+= secs;
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

//////////////////////////////////////////////////////////////////////////////////////////////////
// 9

function circle(radius) {
	this.radius = radius;
  // area method
  this.area = function () {
  	return Math.PI * this.radius * this.radius;
  };
  // perimeter method
  this.perimeter = function () {
  	return 2*Math.PI*this.radius;
  };
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 10

Array.prototype.sortArr = function() {
	return this.sort((a, b) => b.libraryID - a.libraryID)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 11

const FindAllMethods = (obj) => Object.getOwnPropertyNames(obj); 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const parse_URL = (url) => {
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


function allKeys(obj, keys = []) {
	if (!isObject(obj)) return [];
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

//////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const all_values = (obj) => {
	if (!isObject(obj)) return [];
	return Object.values(obj)
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const key_value_pairs = (obj, arr = []) => {
	if (!isObject(obj)) return [];
	console.log(Object.entries(obj))
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const invert_key_value = (obj) => Object.fromEntries(Object.entries(obj).map(v => v.reverse()));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const hasKey = (obj, key) => obj !== null && obj.hasOwnProperty(key);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const is_dom_element = (obj) => obj !== null && obj.nodeType === 1;

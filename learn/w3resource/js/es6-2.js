//1

const matches = (obj, source) => 
Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])


//////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const copy_to_Clipboard = (str) => {
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	const selected =
	document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	if (selected) {
		document.getSelection().removeAllRanges();
		document.getSelection().addRange(selected);
	}
}; 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const csv_to_array = (data, delimiter = ',', omitFirstRow = false) => 
data
.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
.split("\n")
.map(v => v.split(delimiter));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 4

const CSV_to_JSON = (data, delimiter = ',') => {
	// debugger
	const titles = data.slice(0, data.indexOf("\n")).split(delimiter)
	return data
	.slice(data.indexOf("\n") + 1)
	.split("\n")
	.map(v => {
		const values = v.split(delimiter)
		return titles.reduce((obj, title, i) => (obj[title] = values[i],obj), {})
	})
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 5

const JSON_to_CSV = (arr, columns, delimiter = ',') => {
	// debugger
	return [columns.join(delimiter), ...arr.map(obj => 
		columns.reduce((acc,key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
			''))].join("\n")
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 6

const dig = (obj, target) => {
	debugger
	return obj.hasOwnProperty(target)
	? obj[target]
	: Object.values(obj).reduce((acc, val) => {
		if (acc !== undefined) return acc;
		if (typeof val === 'object') return dig(val, target);
	}, undefined)
}

const data = {
	level1: {
		level2: {
			level3: 'some data'
		}
	}
};

const dog = {
	"status": "success",
	"message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const digitize = n => [...`${n}`].map(v => parseInt(v));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const pull = (arr, ...args) => {
	let argState = Array.isArray(args[0]) ? args[0] : args;
	let pulled = arr.filter((v, i) => !argState.includes(v));
	arr.length = 0;
	pulled.forEach(v => arr.push(v));
	return pulled;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 9

const powerset = (arr) => 
arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 10

const pull_at_Index = (arr, pullArr) => {
	let removed = [];
	let pull = arr.map((v, i) => pullArr.includes(i) ? removed.push(v) : v)
	.filter((v, i) => !pullArr.includes(i))
	arr.length = 0;
	pull.forEach(v => arr.push(v))
	return removed
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 11

const random_hex_color_code = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0, 6);
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const remove_non_ASCII = (str) => str.replace(/\W/g, "");


//////////////////////////////////////////////////////////////////////////////////////////////////
// 13

const byte_Size  = (str) => new Blob([str]).size;

//////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const rename_keys = (keysMap, obj) => 
Object.keys(obj).reduce((acc, key) => ({
	...acc,
	...{ [keysMap[key] || key] : obj[key] }
}),{})

//////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const reduce_Which = (arr, comparator = (a, b) => a - b) =>
arr.reduce((a, b) => comparator(a, b) >= 0 ? b : a)


//////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const all = (arr, fn = Boolean) => arr.every(fn)

//////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const bifurcate = (arr, filter) => 
arr.reduce((acc, val, i) => (arr[filter[i] ? 0 : 1].push(val), acc),[[], []])

//////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const remove_from_left = (arr, n = 1) => 
arr.slice(n); 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 19

const remove_from_right = (arr, n = -1) => arr.slice(n);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 20

const extend_Hex = (str) => 
"#" + str.slice(str.startsWith("#") ? 1 : 0).split("").map(v => v + v).join("");


//////////////////////////////////////////////////////////////////////////////////////////////////
// 21

const every_nth = (arr, nth) => 
arr.filter((n, i) => i % nth === nth - 1);


//////////////////////////////////////////////////////////////////////////////////////////////////
// 22

const filter_Non_Unique = (arr) => [...new Set(arr)] || arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

//////////////////////////////////////////////////////////////////////////////////////////////////
// 23

const filter_Non_UniqueBy = (arr, fn) => 
arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 24

const decapitalize = ([first, ...rest], upperRest = false) => 
first.toLowerCase() + (upperRest ? rest.join("").toUpperCase() : rest.join(""));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 25

const xProd = (arr1, arr2) => {
	debugger
	return arr1.reduce((acc, i) => acc.concat(arr2.map(v => [v, i])), [])
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 26

const yes_No = (val, def = false) => 
/^(y|yes)$/i.test(val) ? true : /^(n|No)$/i.test(val) ? false : def;

//////////////////////////////////////////////////////////////////////////////////////////////////
// 27

const union_With = (a, b, comp) =>
Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 28

const time_taken = callback => {
	const result = callback();
	return result;
};

//////////////////////////////////////////////////////////////////////////////////////////////////
// 29

const to_Safe_Integer = num =>
Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 30

const without = (arr, ...args) => arr.filter(v => !args.includes(v));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 31

const tail = (arr) => arr.length > 1 ? arr.slice(1) : arr;

//////////////////////////////////////////////////////////////////////////////////////////////////
// 32

const sumBy = (arr, fn) =>
arr.map(v => typeof fn === "function" ? fn(v) : v[fn]).reduce((acc, val) => acc + val,0);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 33

const random_Number_In_Range = (num1, num2) => {
	let min = Math.min(num1, num2);
	let max = Math.max(num1, num2);
	return Math.random() * (max - min) + min

}

//////////////////////////////////////////////////////////////////////////////////////////////////
// 34

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//////////////////////////////////////////////////////////////////////////////////////////////////
// 35

const random_intArray_In_Range = (min, max, n = 1) =>
Array.from({length: n}, () => Math.floor(Math.random() * (max - min + 1)) + min);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 36

const over = (...fns) => {
	return (...args) => fns.map(fn => fn.apply(null, args));
}

const minMax = over(Math.min, Math.max);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 37

const orderBy = (arr, props, orders) => {
	return [...arr].sort((a, b) => 
		props.reduce((acc, prop, i) => {
			if (acc === 0) {
				const [p1, p2] =
				orders && orders[i] === 'desc'
				? [b[prop], a[prop]]
				: [a[prop], b[prop]];
				acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
			}
			return acc;
		}, 0)
		);
}

const users = [
{ name: 'fred', age: 48 },
{ name: 'barney', age: 36 },
{ name: 'fred', age: 40 },
];

//////////////////////////////////////////////////////////////////////////////////////////////////
// 38

const pad = (str, length, char = ' ') =>
str.padStart((str.length + length) / 2, char).padEnd(length, char);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 38

const omit = (obj, arr) =>
Object.keys(obj)
.filter(v => !arr.includes(v))
.reduce((acc, val) => (acc[val] = obj[val], acc),{});


//////////////////////////////////////////////////////////////////////////////////////////////////
// 40

const object_to_pairs = (obj) => Object.keys(obj).map(v =>[v, obj[v]]);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 41

const object_From_Pairs = (arr) =>  arr.reduce((acc, val) => ((acc[val[0]] = val[1]),acc),{});


//////////////////////////////////////////////////////////////////////////////////////////////////
// 42

const customCoalesce = (...args) => args.find(v => v);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 43

const collectInto = fn => (...args) => fn(args);
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
// Pall(p1, p2, p3).then(console.log)

//////////////////////////////////////////////////////////////////////////////////////////////////
// 44

const compact = arr => arr.filter(Boolean);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 45

const bifurcate2 = (arr, filter) => 
arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),[[], []]);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 46

const curry = (fn, arity = fn.length, ...args) =>
arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

// console.log(curry(Math.pow)(2)(8));
// console.log(curry(Math.min, 3)(10)(50)(2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 47

const equals = (a, b) => {
	if (a === b) return true;
	if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
	if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
	if (a === null || a === undefined || b === null || b === undefined) return false;
	if (a.prototype !== b.prototype) return false;
	let keys = Object.keys(a);
	if (keys.length !== Object.keys(b).length) return false;
	return keys.every(k => equals(a[k], b[k]));
};

//////////////////////////////////////////////////////////////////////////////////////////////////
// 48

const functions = (obj, inherited = false) =>
(inherited
	? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
	: Object.keys(obj)
	).filter(key => typeof obj[key] === 'function');

function Foo() {
	this.a = () => 1;
	this.b = () => 2;
}

Foo.prototype.c = () => 3;

// console.log(functions(new Foo()));
// console.log(functions(new Foo(), true));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 49

const get = (from, ...selectors) =>
[...selectors].map(s =>
	s
	.replace(/\[([^\[\]]*)\]/g, '.$1.')
	.split('.')
	.filter(t => t !== '')
	.reduce((prev, cur) => prev && prev[cur], from)
	);
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };


//////////////////////////////////////////////////////////////////////////////////////////////////
// 50

const get_Meridiem_Suffix_Of_Integer = num =>
num === 0 || num === 24
? 12 + 'am'
: num === 12 
? num + "am"
: num < 12
? (num % 12) + "am"
: (num % 12) + "pm"

//////////////////////////////////////////////////////////////////////////////////////////////////
// 51
// 1

const matches = (obj, source) => {
	return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
}

// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }))

// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }))

// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }))


//////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const copy_to_Clipboard = str => {
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

// copy_to_Clipboard("canna")


//////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const csv_to_array = (data, delimiter = ',', omitFirstRow = false) => {
	return data
	.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
	.split('\n')
	.map(v => v.split(delimiter));
}

// console.log(csv_to_array('a;b\nc;d', ';')); 

// console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 4

const CSV_to_JSON = (data, delimiter = ',') => {
	const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
	return data
	.slice(data.indexOf('\n') + 1)
	.split('\n')
	.map(v => {
		const values = v.split(delimiter);
		return titles.reduce((obj, title, index) =>  ((obj[title] = values[index]), obj), {});
	});
};

// console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); 

// console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 5


const JSON_to_CSV = (arr, columns, delimiter = ',') =>
[ columns.join(delimiter), ...arr.map(obj =>
	columns.reduce((acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,''))
].join('\n');

// console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));

// console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 6


const dig = (obj, target) =>
obj.hasOwnProperty(target)
? obj[target]
: Object.values(obj).reduce((acc, val) => {
	if (acc !== undefined) return acc;
	if (typeof val === 'object') return dig(val, target);
}, undefined);

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

// console.log(dig(data, 'level3'));

// console.log(dig(data, 'level4'));

// console.log(dig(dog, 'message'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const digitize = n => [...`${n}`].map(val => parseInt(val, 10));


// console.log(digitize(123));


// console.log(digitize(1230));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const pull = (arr, ...args) => {
	// debugger
	let argState = Array.isArray(args[0]) ? args[0] : args;
	console.log(argState)
	let pulled = arr.filter((v) => !argState.includes(v));
	arr.length = 0;
	pulled.forEach(v => arr.push(v));
	return pulled;
}


// console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c'));

// console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'b'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 9


const powerset = arr => {
	// debugger
	return arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
}

// console.log(powerset([1, 2]));

// console.log(powerset([1, 2, 3]));

// console.log(powerset([1, 2, 3, 4]));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 10

const pull_at_Index = (arr, pullArr) => {
	let removed = [];
	let pulled = arr
	.map((v,i) => pullArr.includes(i) ? removed.push(v) : v)
	.filter((v, i) => !pullArr.includes(i));
	arr.length = 0;
	pulled.forEach(v => arr.push(v));
	return removed
};


// let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(pull_at_Index(arra1, [1, 3]));

// let arra2 =  [1, 2, 3, 4, 5, 6, 7];
// console.log(pull_at_Index(arra2, [4]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 11

const random_hex_color_code = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0, 6);
};


// console.log(random_hex_color_code())


//////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const remove_non_ASCII = str => str.replace(/[^\w]+/g, '');


// console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 13


const byte_Size = str => new Blob([str]).size;

// console.log(byte_Size('123456'));  

// console.log(byte_Size('Hello World'));  

// console.log(byte_Size('Ã¢')); 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const rename_keys = (keysMap, obj) => {
	return Object.keys(obj).reduce((acc, key) => ({...acc, ...{ [keysMap[key] || key]: obj[key] }}),{});
}

// const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };

// console.log(obj);

// result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);

// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const reduce_Which = (arr, comparator = (a, b) => a - b) => {
	return arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
}

// console.log(reduce_Which([1, 3, 2])); 

// console.log(reduce_Which([10, 30, 20], (a, b) => b - a));  

// console.log(reduce_Which(
// 	[{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
// 	(a, b) => a.age - b.age)); 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const all = (arr, fn = Boolean) => arr.every(fn);


// console.log(all([4, 2, 3], x => x > 1)); 

// console.log(all([4, 2, 3], x => x < 1));

// console.log(all([1, 2, 3]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const bifurcate = (arr, filter) => {
	return arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []])
}


// console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));

// console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));

// console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const remove_from_left = (arr, n = 1) => {
	return arr.slice(n); 
}


// console.log(remove_from_left([1, 2, 3]));

// console.log(remove_from_left([1, 2, 3], 1));

// console.log(remove_from_left([1, 2, 3], 2));

// console.log(remove_from_left([1, 2, 3], 4));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 19


function remove_from_right(arr, n = -1){
	return arr.slice(n); 
}

// console.log(remove_from_right([1, 2, 3]));

// console.log(remove_from_right([1, 2, 3], -1));

// console.log(remove_from_right([1, 2, 3], -2));

// console.log(remove_from_right([1, 2, 3], -4));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 20


const extend_Hex = shortHex => {
	return '#' +  shortHex
	.slice(shortHex.startsWith('#') ? 1 : 0)
	.split('')
	.map(x => x + x)
	.join('');
}

// console.log(extend_Hex('#03f'));

// console.log(extend_Hex('05a'));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 21


const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

// console.log(every_nth([1, 2, 3, 4, 5, 6], 1));

// console.log(every_nth([1, 2, 3, 4, 5, 6], 2));

// console.log(every_nth([1, 2, 3, 4, 5, 6], 3));

// console.log(every_nth([1, 2, 3, 4, 5, 6], 4));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 22


const filter_Non_Unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

// console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));  

// console.log(filter_Non_Unique([1, 2, 3, 4]));  


//////////////////////////////////////////////////////////////////////////////////////////////////
// 23


const filter_Non_UniqueBy = (arr, callback) => {
	return arr.filter((v, i) => arr.every((x, j) => (i === j) === callback(v, x, i, j)));
}

// console.log(filter_Non_UniqueBy([
// 	{ id: 0, value: 'a' },
// 	{ id: 1, value: 'b' },
// 	{ id: 2, value: 'c' },
// 	{ id: 1, value: 'd' },
// 	{ id: 0, value: 'e' }
// 	],(a, b) => a.id === b.id)); 


//////////////////////////////////////////////////////////////////////////////////////////////////
// 24


const decapitalize = ([first, ...rest], upperRest = false) =>
first.toLowerCase() + (upperRest ? rest.join("").toUpperCase() : rest.join(""))

// console.log(decapitalize('W3resource'))

// console.log(decapitalize('Red', true));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 25


const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

// console.log(xProd([1, 2], ['a', 'b']));

// console.log(xProd([1, 2], [1, 2]));

// console.log(xProd(['a', 'b'], ['a', 'b']));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 26

const yes_No = (val, def = false) =>
/^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;

// console.log(yes_No('Y')); 

// console.log(yes_No('yes'));  

// console.log(yes_No('No')); 

// console.log(yes_No('Foo', true));  

//////////////////////////////////////////////////////////////////////////////////////////////////
// 27

const union_With = (a, b, comp) =>
Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));


// console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));

// console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 28

const time_taken = callback => {
	const result = callback();
	return result;
};

// console.time("start1");
// console.log("Time taken: " + time_taken(() => Math.pow(2, 10))+" ms"); 
// console.timeLog("start1");
// console.timeEnd("start1");

// console.time("start2");
// console.log("Time taken: " + time_taken(() => Math.sqrt(225))+" ms");
// console.timeLog("start2");
// console.timeEnd("start2");

// console.time("start3");
// console.log("Time taken: " + time_taken(() => Math.sqrt((5 * 5) + (6 * 6)))+" ms");
// console.timeLog("start3");
// console.timeEnd("start3");

//////////////////////////////////////////////////////////////////////////////////////////////////
// 29

const to_Safe_Integer = num => {
	return Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
}


// console.log(to_Safe_Integer('5.2'));

// console.log(to_Safe_Integer('5.52'));

// console.log(to_Safe_Integer(Infinity));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 30

const without = (arr, ...args) => arr.filter(val => !args.includes(val));

// console.log(without([2, 1, 2, 3], 1, 2));

// console.log(without([2, 1, 2, 3], 3));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 31

const tail = (arr) => arr.length > 1 ? arr.slice(1) : arr;

// console.log(tail([1, 2, 3])); 

// console.log(tail([1]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 32

const sumBy = (arr, fn) => {
	return arr.map(typeof fn === "function" ? fn : val => val[fn]).reduce((val1, val2) => val1 + val2, 0)
}

// console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));

// console.log(sumBy([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 33

const random_Number_In_Range  = (min, max) => Math.random() * (max - min) + min;

// console.log(random_Number_In_Range(2, 10)); 

// console.log(random_Number_In_Range(1, 5)); 

// console.log(random_Number_In_Range(-5, -2));

// console.log(random_Number_In_Range(0, 1)); 


//////////////////////////////////////////////////////////////////////////////////////////////////
// 34


const randomIntegerInRange  = (min, max) => Math.floor(Math.random() * (max - min + 1) + min) ;

// console.log(randomIntegerInRange(0, 5));

// console.log(randomIntegerInRange(2, 5));

// console.log(randomIntegerInRange(5, -5));

// console.log(randomIntegerInRange(-2, -7));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 35


const random_intArray_In_Range = (min, max, n = 0) => {
	return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}


// console.log(random_intArray_In_Range(1, 20, 10));

// console.log(random_intArray_In_Range(-10, 10, 5));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 36

const over = (...fns) => {
	return (...args) => fns.map(fn => fn.apply(null, args))
};
const minMax = over(Math.min, Math.max);


// console.log(minMax(1, 2, 3, 4, 5)); 

// console.log(minMax(1, 2, 5, 4, 3)); 

// console.log(minMax(1, 2, 5, -4, 3));


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


// console.log(orderBy(users, ['name', 'age'], ['asc', 'desc'])); 

// console.log(orderBy(users, ['name', 'age']));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 38

const pad = (str, length, char = ' ') => 
str.padStart((str.length + length) / 2, char).padEnd(length, char);

// console.log(pad('cat', 8));

// console.log(pad(String(42), 6, '0'))

// console.log(pad('foobar', 3))

//////////////////////////////////////////////////////////////////////////////////////////////////
// 39

const omit = (obj, arr) => {
	return Object.keys(obj)
	.filter(k => !arr.includes(k))
	.reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
}

// console.log(omit({ a: 1, b: '2', c: 3 }, ['b']));

// console.log(omit({ a: 1, b: 2, c: 3 }, ['c']));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 40

const object_to_pairs  = obj => Object.keys(obj).map(k => [k, obj[k]]);

// console.log(object_to_pairs({ a: 1, b: 2 }));

// console.log(object_to_pairs({ a: 1, b: 2, c: 3 }));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 41

const object_From_Pairs = (arr) => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});

// console.log(object_From_Pairs([['a', 1], ['b', 2]])); 

// console.log(object_From_Pairs([[1, 10], [2, 20], [3, 30]]));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 42

const coalesceFactory = valid => (...args) => args.find(valid);

const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));

// console.log(customCoalesce(undefined, null, NaN, '', 'Waldo'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 43


const collectInto = fn => (...args) => fn(args);
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
// Pall(p1, p2, p3).then(console.log);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 44

const compact = arr => arr.filter(Boolean);

// console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));

// console.log(compact([false, NaN, 'e' * 23]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 45

/// Như câu 17


//////////////////////////////////////////////////////////////////////////////////////////////////
// 46

const curry = (fn, arity = fn.length, ...args) => {
	// debugger; 
	return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
}

// console.log(curry(Math.pow)(2)(8));

// console.log(curry(Math.min, 3)(10)(50)(2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 47


const equals = (a, b) => {
	// debugger
	if (a === b) return true;
	if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
	if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
	if (a === null || a === undefined || b === null || b === undefined) return false;
	if (a.prototype !== b.prototype) return false;
	let keys = Object.keys(a);
	if (keys.length !== Object.keys(b).length) return false;
	return keys.every(k => equals(a[k], b[k]));
};

// console.log(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 48

const functions = (obj, inherited = false) =>(
	inherited
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

const get = (from, ...selectors) => {
	return [...selectors].map(s =>
		s
		.replace(/\[([^\[\]]*)\]/g, '.$1.')
		.split('.')
		.filter(t => t !== '')
		.reduce((prev, cur) => prev && prev[cur], from)
		);
}
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

// console.log(get(obj, 'selector.to.val', 'target[0]', 'target[2].a')); 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 50


const get_Meridiem_Suffix_Of_Integer = num => {
	return num === 0 || num === 24
	? 12 + ' AM'
	: num === 12
	? 12 + ' PM'
	: num < 12
	? (num % 12) + ' AM'
	: (num % 12) + ' PM';
}

// console.log(get_Meridiem_Suffix_Of_Integer(0));

// console.log(get_Meridiem_Suffix_Of_Integer(11));

// console.log(get_Meridiem_Suffix_Of_Integer(13));

// console.log(get_Meridiem_Suffix_Of_Integer(25));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 51

const get_URL_Parameters = url => {
	return (url.match(/([^?=&]+)(=([^&]*))/g) || [])
	.reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),{});
}


// console.log(get_URL_Parameters('http://url.com/page?name=Adam&surname=Smith')); 

// console.log(get_URL_Parameters('google.com'));

// console.log(get_URL_Parameters('https://www.w3resource.com'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 52

const group_By = (arr, fn) =>
arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
	acc[val] = (acc[val] || []).concat(arr[i]);
	return acc;
}, {});

// console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); 

// console.log(group_By([6.1, 4.2, 6.3], Math.floor)); 

// console.log(group_By(['one', 'two', 'three'], 'length'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 53

const initialize_2D_Array = (w, h, val = null) => {
	return Array.from({length : h}).map(() =>  Array.from({length : w}).fill(val))
}

// console.log(initialize_2D_Array(2, 2, 0));

// console.log(initialize_2D_Array(3, 3, 3));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 54


const initialize_Array_With_Range = (end, start = 0, step = 1) => {
	return Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start)
}


// console.log(initialize_Array_With_Range(6, 0, 3)); 

// console.log(initialize_Array_With_Range(8, 3));

// console.log(initialize_Array_With_Range(6, 0, 2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 55

const URL_Join = (...args) =>
args
.join('/')
.replace(/[\/]+/g, '/')
.replace(/^(.+):\//, '$1://')
.replace(/^file:/, 'file:/')
.replace(/\/(\?|&|#[^!])/g, '$1')
.replace(/\?/g, '&')
.replace('&', '?');


// console.log(URL_Join('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 56

const allEqual = arr => arr.every(val => val === arr[0]);

// console.log(allEqual([1, 2, 3, 4, 5, 6]));

// console.log(allEqual([12, 12, 12, 12]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 57

const averageBy = (arr, fn) =>  
arr.map(typeof fn === "function" ? fn : v => v[fn]).reduce((a,v) => a + v,0) / arr.length;


// console.log(averageBy([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));

// console.log(averageBy([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 58


const bifurcateBy = (arr, fn) => {
	return arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []])
}

// console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 59

// debugger
const bind = (fn, context, ...args) => 
function() {
	return fn.apply(context, args.concat(...arguments));
};


function greet(greeting, punctuation) {
	return greeting + ' ' + this.user + punctuation;
}

const freddy = { user: 'Morning' };
const freddyBound = bind(greet, freddy);

// console.log(freddyBound('Good', '!'));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 60

const bindKey = (context, fn, ...args) =>
function() {
	return context[fn].apply(context, args.concat(...arguments));
};

const freddy2 = {
	user: 'fred',
	greet: function(greeting, punctuation) {
		return greeting + ' ' + this.user + punctuation;
	}
};

const freddyBound2 = bindKey(freddy2, 'greet');

// console.log(freddyBound2('hi', '!'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 61

const castArray = val => (Array.isArray(val) ? val : [val]);

// console.log(castArray('w3r'));

// console.log(castArray([100]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 62

const chainAsync = fns => {
	let curr = 0;
	const next = () => fns[curr++](next);
	next();
};
chainAsync([
	next => {
		// console.log('0 seconds');
		setTimeout(next, 1000);
	},
	next => {
		// console.log('1 second');
	}
	]);


//////////////////////////////////////////////////////////////////////////////////////////////////
// 63

const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);
const regExp = /lorem ipsum/gi;
// console.log(regExp);
const regExp2 = cloneRegExp(regExp);
// console.log(regExp2);


//////////////////////////////////////////////////////////////////////////////////////////////////
// 64

const coalesce = (...args) => args.find(v => ![null, undefined].includes(v));

// console.log(coalesce(null, undefined, '', NaN, 'abcd'))

//////////////////////////////////////////////////////////////////////////////////////////////////
// 65

const colorize = (...args) => ({
	black: `\x1b[30m${args.join(' ')}`,
	red: `\x1b[31m${args.join(' ')}`,
	green: `\x1b[32m${args.join(' ')}`,
	yellow: `\x1b[33m${args.join(' ')}`,
	blue: `\x1b[34m${args.join(' ')}`,
	magenta: `\x1b[35m${args.join(' ')}`,
	cyan: `\x1b[36m${args.join(' ')}`,
	white: `\x1b[37m${args.join(' ')}`,
	bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
	bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
	bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
	bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
	bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
	bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
	bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
	bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});

// console.log(colorize('foo').red); 

// console.log(colorize('foo', 'bar').bgBlue); 

// console.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 66

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(add5, multiply);

// console.log(multiplyAndAdd5(5, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 67


const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);

// console.log(addAndSquare(1, 2));

// console.log(addAndSquare(3, 2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 68

const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));

const average = converge((a, b) => a / b, [
	arr => arr.reduce((a, v) => a + v, 0),
	arr => arr.length
	]);

// console.log(average([ 6, 7]));

// console.log(average([1, 2, 3, 4, 5, 6, 7]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 69

const countBy = (arr, fn) =>
arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
	acc[val] = (acc[val] || 0) + 1;
	return acc;
}, {});

// console.log(countBy([6, 10, 100, 10], Math.sqrt));

// console.log(countBy([6.1, 4.2, 6.3], Math.floor));

// console.log(countBy(['one', 'two', 'three'], 'length'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 70

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));

// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));

// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 71

const deepClone = obj => {
	let clone = Object.assign({}, obj);
	Object.keys(clone).forEach(
		key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
		);
	return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};

const a = { foo: 'bar', obj: { a: 1, b: 2 } };

const b = deepClone(a);

// console.log(b)


//////////////////////////////////////////////////////////////////////////////////////////////////
// 72

const detectDeviceType = () =>
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
? 'Mobile'
: 'Desktop';


// console.log(detectDeviceType());

//////////////////////////////////////////////////////////////////////////////////////////////////
// 73


const differenceBy = (a, b, fn) => {
	const s = new Set(b.map(v => fn(v)));
	return a.filter(x => !s.has(fn(x)));
};

// console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 74

const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

// console.log(differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 75


const elo = ([...ratings], kFactor = 32, selfRating) => {
	const [a, b] = ratings;
	const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
	const newRating = (rating, i) =>
	(selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
	if (ratings.length === 2) {
		return [newRating(a, 1), newRating(b, 0)];
	}
	for (let i = 0, len = ratings.length; i < len; i++) {
		let j = i;
		while (j < len - 1) {
			j++;
			[ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
		}
	}
	return ratings;
};


// console.log(elo([1200, 1200])); // [1216, 1184]

// console.log(elo([1200, 1200], 64)); // [1232, 1168]

// console.log(elo([1200, 1200, 1200, 1200]).map(Math.round));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 76


const forEachRight = (arr, callback) => arr.slice(0).reverse().forEach(callback);

// forEachRight([1, 2, 3, 4], val => console.log(val));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 77

const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
// forOwn({ foo: 'bar', a: 1 }, v => console.log(v));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 78

const invertKeyValues = (obj, fn) =>
Object.keys(obj).reduce((acc, key) => {
	const val = fn ? fn(obj[key]) : obj[key];
	acc[val] = acc[val] || [];
	acc[val].push(key);
	return acc;
}, {});

// console.log(invertKeyValues({ a: 1, b: 2, c: 1 }));

// console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 79


const longestItem = (...vals) => vals.sort((a, b) => b.length - a.length)[0];

// console.log(longestItem('this', 'is', 'a', 'testcase'));

// console.log(longestItem(...['a', 'ab', 'abc']));

// console.log(longestItem(...['a', 'ab', 'abc'], 'abcd'));

// console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));

// console.log(longestItem([1, 2, 3], 'foobar'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 80

const luhnCheck = num => {
	let arr = (num + '')
	.split('')
	.reverse()
	.map(x => parseInt(x));
	let lastDigit = arr.splice(0, 1)[0];
	let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
	sum += lastDigit;
	return sum % 10 === 0;
};

// console.log(luhnCheck('4485275742308327'));

// console.log(luhnCheck(6011329933655299));

// console.log(luhnCheck(123456789));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 81


const mapKeys = (obj, fn) => {
	debugger;
	return Object.keys(obj).reduce((acc, k) => {
		acc[fn(obj[k], k, obj)] = obj[k];
		return acc;
	}, {});
}

// console.log(mapKeys({ a: 1, b: 2 }, (val, key) => key + val));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 82


const mapObject = (arr, fn) =>(a => (
	(a = [arr, arr.map(fn)]), a[0].reduce((acc, val, i) => ((acc[val] = a[1][i]), acc), {})))();
	const squareIt = arr => mapObject(arr, a => a * a);
	// console.log(squareIt([1, 2, 3])); 

//////////////////////////////////////////////////////////////////////////////////////////////////
// 83


const mapString = (str, fn) => str.split('').map((c, i) => fn(c, i, str)).join('');

// console.log(mapString('Javascript exercises', c => c.toUpperCase()));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 84


const mapValues = (obj, fn) =>
Object.keys(obj).reduce((acc, k) => {
	acc[k] = fn(obj[k], k, obj);
	return acc;
}, {});

const users2 = {
	fred: { user: 'fred', age: 40 },
	pebbles: { user: 'pebbles', age: 1 }
};

// console.log(mapValues(users2, u => u.age));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 85

const mask = (cc, num = 4, mask = '*') => 
('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

// console.log(mask(1234567890)); 

// console.log(mask(1234567890, 3));

// console.log(mask(1234567890, -4, '$'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 86

const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));

// console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));

// console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 87


const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

// console.log(maxN([1, 2, 3]));

// console.log(maxN([1, 2, 3], 2));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 88


const median = arr => {
	const mid = Math.floor(arr.length / 2),
	nums = [...arr].sort((a, b) => a - b);
	return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

// console.log(median([5, 6, 50, 1, -5]));

// console.log(median([1, 2, 3, 4, 5]));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 89




const negate = func => (...args) => !func(...args);


// console.log([1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)));




//////////////////////////////////////////////////////////////////////////////////////////////////
// 90


const nest = (items, id = null, link = 'parent_id') =>
items
.filter(item => item[link] === id)
.map(item => ({ ...item, children: nest(items, item.id) }));
// One top level comment

const comments = [
{ id: 1, parent_id: null },
{ id: 2, parent_id: 1 },
{ id: 3, parent_id: 1 },
{ id: 4, parent_id: 2 },
{ id: 5, parent_id: 4 }
];

const nestedComments = nest(comments); 
// console.log(nestedComments);




//////////////////////////////////////////////////////////////////////////////////////////////////
// 91

const none = (arr, fn = Boolean) => !arr.some(fn);

// console.log(none([0, 1, 3, 0], x => x == 2));

// console.log(none([0, 0, 0]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 92

const nthArg = n => (...args) => args.slice(n)[0];
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
// console.log(last(1, 2, 3, 4, 5));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 93

const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);
const fn = () => console.log('!');
document.body.addEventListener('click', fn);
// console.log(off(document.body, 'click', fn)); 


//////////////////////////////////////////////////////////////////////////////////////////////////
// 94

const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];

// console.log(offset([1, 2, 3, 4, 5], 2));

// console.log(offset([1, 2, 3, 4, 5], -2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 95


const on = (el, evt, fn, opts = {}) => {
	const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
	el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
	if (opts.target) return delegatorFn;
};


// const fun = () => console.log('!');

// console.log(on(document.body, 'click', fun));  

// console.log(on(document.body, 'click', fun, { target: 'p' })); 

// console.log(on(document.body, 'click', fun, { options: true }));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 96


const pick = (obj, arr) =>
arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

// console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 97

const pickBy = (obj, fn) =>
Object.keys(obj)
.filter(k => fn(obj[k], k))
.reduce((acc, key) => ((acc[key] = obj[key]), acc),{})


// console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 98

const reducedFilter = (data, keys, fn) =>
data.filter(fn).map(el => keys.reduce((acc, key) => {
	acc[key] = el[key];
	return acc;
}, {}));

const data2 = [
{
	id: 1,
	name: 'john',
	age: 24
},
{
	id: 2,
	name: 'mike',
	age: 50
}
];

// console.log(reducedFilter(data2, ['id', 'name'], item => item.age > 24));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 99

const sdbm = str => {
	let arr = str.split('');
	return arr.reduce((hashCode, currentVal) =>
		(hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
		0
		);
};

// console.log(sdbm('w3r'));

// console.log(sdbm('name'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 100

const zipWith = (...array) => {
	const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;
	return Array.from(
		{ length: Math.max(...array.map(a => a.length)) },
		(_, i) => (fn ? fn(...array.map(a => a[i])) : array.map(a => a[i]))
		);
};

// console.log(zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c))

// console.log(zipWith([1, 2, 3],[10, 20], [100, 200],
// 	(a, b, c) => (a !== null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')
// 	))

//////////////////////////////////////////////////////////////////////////////////////////////////
// 101

const zipObject = (props, values) =>
props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});

// console.log(zipObject(['a', 'b', 'c'], [1, 2]));

// console.log(zipObject(['a', 'b'], [1, 2, 3]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 102

const zip = (...arr) => {
	const maxLength = Math.max(...arr.map(v => v.length));
	return Array.from({length: maxLength}).map((v,i) => {
		return Array.from({ length: arr.length }, (_, k) => arr[k][i])
	})
}


// console.log(zip(['a', 'b'], [1, 2], [true, false]));

// console.log(zip(['a'], [1, 2], [true, false]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 103

const words = (str, pattern = /[^\w]+/) => str.split(pattern).filter(Boolean);

// console.log(words('I love javaScript!!')); 

// console.log(words('python, java, php'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 104


const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);

const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);

// console.log(doubleEvenNumbers(2));

// console.log(doubleEvenNumbers(1));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 105

const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) === parseInt(n);

// console.log(validateNumber('200'));

// console.log(validateNumber('10'));

// console.log(validateNumber('abc'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 106

const unzipWith = (arr, fn) =>
arr.reduce((acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
	Array.from({
		length: Math.max(...arr.map(x => x.length))
	}).map(x => [])).map(val => fn(...val));


// console.log(unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 107

const uniqueElementsByRight = (arr, fn) =>
arr.reduceRight((acc, v) => {
	if (!acc.some(x => fn(v, x))) acc.push(v);
	return acc;
}, []);

// console.log(uniqueElementsByRight([
// 	{ id: 0, value: 'a' },
// 	{ id: 1, value: 'b' },
// 	{ id: 2, value: 'c' },
// 	{ id: 1, value: 'd' },
// 	{ id: 0, value: 'e' }
// ],(a, b) => a.id == b.id));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 108

const uniqueElementsByRight2 = (arr, fn) =>
arr.reduceRight((acc, v) => {
	if (!acc.some(x => fn(v, x))) acc.push(v);
	return acc;
}, []);

// console.log(uniqueElementsByRight2(
//   [
//     { id: 0, value: 'a' },
//     { id: 1, value: 'b' },
//     { id: 2, value: 'c' },
//     { id: 1, value: 'd' },
//     { id: 0, value: 'e' }
//   ],
//   (a, b) => a.id == b.id
// ));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 109

const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n) : arr)[0];

// console.log(nthElement(['a', 'b', 'c'], 1));

// console.log(nthElement(['a', 'b', 'b'], -3));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 110


const union = (a, b) => [... new Set([...a, ...b])];

// console.log(union([1, 2, 3], [4, 3, 2]));

// console.log(union([1, 2, 3], [1, 2, 3]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 111

const unfold = (fn, seed, result = []) => {
	// debugger
	val = [null, seed];
	while(val = fn(val[1])) result.push(val[0]);
	return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);

// console.log(unfold(f, 10));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 112


const unflattenObject = obj =>
Object.keys(obj).reduce((acc, k) => {
	if (k.indexOf('.') !== -1) {
		const keys = k.split('.');
		Object.assign(
			acc,
			JSON.parse(
				'{' +
				keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
				obj[k] +
				'}'.repeat(keys.length)
				)
			);
	} else acc[k] = obj[k];
	return acc;
}, {});

// console.log(unflattenObject({ 'a.b.c': 1, d: 1 }));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 113

const unescapeHTML = str =>
str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,
	tag => ({
		'&amp;': '&',
		'&lt;': '<',
		'&gt;': '>',
		'&#39;': "'",
		'&quot;': '"'
	} [tag] || tag)
	);

// console.log(unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 114

const uncurry = (fn, n = 1) => (...args) => {
	const next = acc => args => args.reduce((x, y) => x(y), acc);
	if (n > args.length) throw new RangeError('Arguments too few!');
	return next(fn)(args.slice(0, n));
};
const addNum = x => y => z => x + y + z;
const uncurriedAdd = uncurry(addNum, 3);

// console.log(uncurriedAdd(1, 2, 3));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 115

const unary = callback => val => callback(val);

// console.log(['6', '8', '10'].map(unary(parseInt)));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 116

const truthCheckCollection = (collection, pre) => collection.every(obj => pre in obj);


// console.log(truthCheckCollection([
// 	{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 117

const truncateString = (str, num) =>
str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

// console.log(truncateString('boomerang', 7));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 118

const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);

// console.log(transform({ a: 1, b: 2, c: 1 },
// 	(r, v, k) => {
// 		(r[v] || (r[v] = [])).push(k);
// 		return r;
// 	},{}
// 	));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 119


const tomorrow = (long = false) => {
	let t = new Date();
	t.setDate(t.getDate() + 1);
	const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(
		t.getDate()
		).padStart(2, '0')}`;
	return !long ? ret : `${ret} T00:00:00`;
};

// console.log(tomorrow());

// console.log(tomorrow(true));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 120

const toSnakeCase = str =>
str &&
str
.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
.map(x => x.toLowerCase())
.join('_');


// console.log(toSnakeCase('camelCase'));

// console.log(toSnakeCase('some text'));

// console.log(toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'));

// console.log(toSnakeCase('AllThe-small Things'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 121


const toSafeInteger = num =>
Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

// console.log(toSafeInteger('3.2'));

// console.log(toSafeInteger(Infinity));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 122

const toOrdinalSuffix  = num => {
	let con = parseInt(num) % 100;
	switch(con) {
		case 1: return num + "st";
		case 2: return num + "nd";
		case 3: return num + "rd";
		default: return num + "th";
	}
}

// console.log(toOrdinalSuffix('1')); 

// console.log(toOrdinalSuffix('4')); 

// console.log(toOrdinalSuffix('50')); 

// console.log(toOrdinalSuffix('123'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 123
// giong 120 nhung thay ("_") = ("-")

const toKebabCase = str =>
str &&
str
.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
.map(x => x.toLowerCase())
.join('-');

// console.log(toKebabCase('camelCase'));
// console.log(toKebabCase('some text'));
// console.log(toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'));
// console.log(toKebabCase('AllThe-small Things'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 124


const toHash = (object, key) =>
Array.prototype.reduce.call(object,
	(acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),{});


// console.log(toHash([4, 3, 2, 1]));

// console.log(toHash([{ a: 'label' }], 'a'));

// A more in depth example:
let usersN = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];
let managers = [{ manager: 1, employees: [2, 3] }];
managers.forEach(
	manager =>
	(manager.employees = manager.employees.map(function(id) {
		return this[id];
	}, toHash(users, 'id')))
	);
managers; // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] } ]
// console.log(managers);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 125

const toDecimalMark = num => num.toLocaleString('en-US');

// console.log(toDecimalMark(12305030388.9087));

// console.log(toDecimalMark(123.2264))

// console.log(toDecimalMark(-100.10));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 126

const toCurrency = (n, curr, LanguageFormat) => {
	return Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n)
}

// console.log(toCurrency(123456.789, 'EUR')); 

// console.log(toCurrency(123456.789, 'USD', 'en-us')); 

// console.log(toCurrency(123456.789, 'USD', 'fa')); 

// console.log(toCurrency(322342436423.2435, 'JPY'));

// console.log(toCurrency(322342436423.2435, 'JPY', 'fi'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 127


const times = (n, fn, context) => {
	let i = 0;

	while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
// console.log(output);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 128

const takeWhile = (arr, func) => {
	// debugger
	for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
		return arr;
};


// console.log(takeWhile([1, 2, 3, 4], n => n >= 3));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 129

const takeRightWhile = (arr, func) => {
	// debugger
	for (let i of arr.reverse().keys())
		if (func(arr[i])) return arr.reverse().slice(arr.length - i, arr.length);
	return arr;
};

// console.log(takeRightWhile([1, 2, 3, 4], n => n < 3));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 130

const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);


// console.log(takeRight([1, 2, 3], 2));

// console.log(takeRight([1, 2, 3]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 131


const take = (arr, n = 1) => arr.slice(0, n);

// console.log(take([1, 2, 3], 5));
// console.log(take([1, 2, 3], 0));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 132


const symmetricDifferenceWith = (arr, val, comp) => [
...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];


// console.log(symmetricDifferenceWith([1, 1.2, 1.5, 3, 0],[1.9, 3, 0, 3.9],
// 	(a, b) => Math.round(a) === Math.round(b)));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 133

const symmetricDifferenceBy = (a, b, fn) => {
	const sA = new Set(a.map(v => fn(v))),
	sB = new Set(b.map(v => fn(v)));
	return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};

// console.log(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 134

const symmetricDifference = (a, b) => {
	const sA = new Set(a),
	sB = new Set(b);
	return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

// console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 135

const sumPower = (end, power = 2, start = 1) =>
Array(end + 1 - start)
.fill(0)
.map((x, i) => (i + start) ** power)
.reduce((a, b) => a + b, 0);

// console.log(sumPower(10));

// console.log(sumPower(10, 3));

// console.log(sumPower(10, 3, 5));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 136


const stringPermutations = str => {
	if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
	return str
	.split('')
	.reduce((acc, letter, i) =>
		acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
		[]
		);
};


// console.log(stringPermutations('abc'));

// console.log(stringPermutations('*$*'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 137


const stableSort = (arr, compare) =>
arr
.map((item, index) => ({ item, index }))
.sort((a, b) => compare(a.item, b.item) || a.index - b.index)
.map(({ item }) => item);

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(stableSort(arr, () => 0));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 138

const spreadOver = fn => argsArr => fn(...argsArr);

const arrayMax = spreadOver(Math.max);

// console.log(arrayMax([1, 2, 3]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 139


const splitLines = str => str.split(/\r?\n/);

// console.log('Original string:');

// console.log('This\nis a\nmultiline\nstring.\n');

// console.log(splitLines('This\nis a\nmultiline\nstring.\n'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 140


const sortedLastIndexBy = (arr, n, fn) => {
	const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
	const val = fn(n);
	const index = arr
	.map(fn)
	.reverse()
	.findIndex(el => (isDescending ? val <= el : val >= el));
	return index === -1 ? 0 : arr.length - index;
};

// console.log(sortedLastIndexBy([{ x: 4 }, {x: 5}], { x: 4 }, o => o.x));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 141

const sortedLastIndex = (arr, n) => {
	const isDescending = arr[0] > arr[arr.length - 1];
	const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));
	return index === -1 ? 0 : arr.length - index;
};

// console.log(sortedLastIndex([10, 20, 30, 30, 40], 30));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 142

const sortedIndex = (arr, n) => {
	return arr.concat(n).sort((a, b) => b- a).indexOf(n)

	// const isDescending = arr[0] > arr[arr.length - 1];
	// const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
	// return index === -1 ? arr.length : index;
};


// console.log(sortedIndex([5, 3, 2, 1], 4));

// console.log(sortedIndex([30, 50], 40));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 143


const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

// console.log(sortCharactersInString('cabbage'));

// console.log(sortCharactersInString('a7fs23l1n4o6x'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 144


const similarity = (arr, values) => arr.filter(v => values.includes(v));

// console.log(similarity([1, 2, 3], [1, 2, 4]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 145

const shuffle = ([...arr]) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr;
};
const foo = [1, 2, 3];

// console.log(shuffle(foo));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 146


const shallowClone = obj => Object.assign({}, obj);
const x = { x: true, y: 1 };
const y = shallowClone(x);  

// console.log(y);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 147

const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

// console.log(serializeCookie('foo', 'bar'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 148 - tương tự như câu 99


//////////////////////////////////////////////////////////////////////////////////////////////////
// 149


const sample = arr => arr[Math.floor(Math.random() * arr.length)];

// console.log(sample([3, 7, 9, 11]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 150


const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

const delay = d => new Promise(r => setTimeout(r, d));

// console.log(runPromisesInSeries([() => delay(1000), () => delay(2000)]))



///PART-2



//////////////////////////////////////////////////////////////////////////////////////////////////
// 151


const runAsync = fn => {
	const worker = new Worker(
		URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
			type: 'application/javascript; charset=utf-8'
		})
		);
	return new Promise((res, rej) => {
		worker.onmessage = ({ data }) => {
			res(data), worker.terminate();
		};
		worker.onerror = err => {
			rej(err), worker.terminate();
		};
	});
};
const longRunningFunction = () => {
	let result = 0;
	for (let i = 0; i < 1000; i++) {
		for (let j = 0; j < 700; j++) {
			for (let k = 0; k < 300; k++) {
				result = result + i + j + k;
			}
		}
	}
	return result;
};


// runAsync(longRunningFunction).then(console.log);

// runAsync(() => 10 ** 3).then(console.log); 

// let outsideVariable = 50;

// runAsync(() => typeof outsideVariable).then(console.log);



//////////////////////////////////////////////////////////////////////////////////////////////////
// 152

const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)


// console.log(round(1.005, 2));

// console.log(round(1.05, 2));

// console.log(round(1.0005, 2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 153

const reverseString = str => [...str].reverse().join("");


// console.log(reverseString('php')); 
// console.log(reverseString('foobar'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 154

const omitBy = (obj, fn) =>
Object.keys(obj).filter(v => !fn(obj[v], v)).reduce((acc, val) => ((acc[val] = obj[val]), acc),{})



// console.log(omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 155

const reject = (pred, array) => array.filter(v => !pred(v))


// console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5]));

// console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 156

const reduceSuccessive = (arr, fn, acc) => {
	return arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res),[acc]);
}


// console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 157


const redirect = (url, asLink = true) => asLink ? window.location.href = url : window.location.repalce(url)


// console.log(redirect('https://google.com'))

//////////////////////////////////////////////////////////////////////////////////////////////////
// 158

const rearg = (fn, indexes) => {
	return (...args) => fn(...indexes.map(i => args[i]));
}

var rearged = rearg(
	function(a, b, c) {
		return [a, b, c];
	},
	[2, 0, 1]
	);

// console.log(rearged('b', 'c', 'a'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 159: Đọc file trong Node js


// const fs = require('fs');
// const readFileLines = filename =>
// fs
// .readFileSync(filename)
// .toString('UTF8')
// .split('\n');

// let arrRead = readFileLines('test.txt');

// console.log(arrRead)



//////////////////////////////////////////////////////////////////////////////////////////////////
// 160


const pullBy = (arr, ...args) => {
	const length = args.length;
	let fn = length > 1 ? args[length - 1] : undefined;
	fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
	let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
	let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
	arr.length = 0;
	pulled.forEach(v => arr.push(v));
};


// var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

// pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x);

// console.log(myArray);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 161

const pullAtValue = (arr, pullArr) => {
	let removed = [],
	pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
	mutateTo = arr.filter((v, i) => !pullArr.includes(v));
	arr.length = 0;
	mutateTo.forEach(v => arr.push(v));
	return removed;
};

let myArrayPull = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArrayPull, ['b', 'd']); 

// console.log('Original data', myArrayPull);

// console.log('Pulled data', pulled);


//////////////////////////////////////////////////////////////////////////////////////////////////
// 162

const promisify = func => (...args) =>
new Promise((resolve, reject) =>
	func(...args, (err, result) => (err ? reject(err) : resolve(result))));

const delayPromise = promisify((d, cb) => setTimeout(cb, d));

// delayPromise(2000).then(() => console.log('Hi!'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 163


const prettyBytes = (num, precision = 3, addSpace = true) => {
	const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
	const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
	const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
	return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};

// console.log(prettyBytes(1000));

// console.log(prettyBytes(-27145424323.5821, 5));

// console.log(prettyBytes(123456789, 3, false));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 164


const pluralize = (val, word, plural = word + 's') => {
	const _pluralize = (num, word, plural = word + 's') =>
	[1, -1].includes(Number(num)) ? word : plural;
	if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);
	return _pluralize(val, word, plural);
};
pluralize(0, 'apple'); // 'apples'
pluralize(1, 'apple'); // 'apple'
pluralize(2, 'apple'); // 'apples'
pluralize(2, 'person', 'people'); // 'people'

const PLURALS = {
	person: 'people',
	radius: 'radii'

};
const autoPluralize = pluralize(PLURALS);
// console.log(autoPluralize(2, 'person'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 165 Như câu 66


//////////////////////////////////////////////////////////////////////////////////////////////////
// 166


const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
const sum = pipeAsyncFunctions(
	x => x + 1,
	x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
	x => x + 3,
	async x => (await x) + 4
	);

// (async () => {
//   console.log(await sum(5)); // 15 (after one second)
// })();


//////////////////////////////////////////////////////////////////////////////////////////////////
// 167

const percentile = (arr, val) =>
(100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;

// console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 168


const partition = (arr, fn) =>
arr.reduce(
	(acc, val, i, arr) => {
		acc[fn(val, i, arr) ? 0 : 1].push(val);
		return acc;
	},
	[[], []]
	);

const usersPartition = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];

// console.log(partition(usersPartition, o => o.active));




//////////////////////////////////////////////////////////////////////////////////////////////////
// 169


const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);
const greetPartialRight = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greetPartialRight, 'John');
// console.log(greetJohn('Hello'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 170


const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);
const greetPartial = (greeting, name) => greeting + ' ' + name + '!';
const greetHello = partial(greetPartial, 'Hello');
// console.log(greetHello('John'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 171


const parseCookie = str =>
str
.split(';')
.map(v => v.split('='))
.reduce((acc, v) => {
	acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
	return acc;
}, {});

// console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 172

const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
const squareA = n => n * n;
const double = n => n * 2;
const fn1 = overArgs((x, y) => [x, y], [squareA, double]);

// console.log(fn1(9,3));

// console.log(fn1(5,2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 173 Giống câu 109 


//////////////////////////////////////////////////////////////////////////////////////////////////
// 174

const nodeListToArray = nodeList => Array.prototype.slice.call(nodeList);

// console.log(nodeListToArray(document.childNodes));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 175


const mostPerformant = (fns, iterations = 10000) => {
	const times = fns.map(fn => {
		const before = performance.now();
		for (let i = 0; i < iterations; i++) fn();
			return performance.now() - before;
	});
	return times.indexOf(Math.min(...times));
};


// console.log(mostPerformant([
// 	() => {
//     // Loops through the entire array before returning `false`
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');
// },
// () => {
//     // Only needs to reach index `1` before returning false
//     [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');
// }
// ]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 176

const minN = (arr, n = 1) => [...arr].sort((a,b) => a - b).slice(0, n)


// console.log(minN([1, 2, 3]));

// console.log(minN([1, 2, 3], 2));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 177


const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === "function" ? fn : val => val[fn]))


// console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));

// console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 178

const merge = (...objs) =>
[...objs].reduce((acc, obj) =>
	Object.keys(obj).reduce((a, k) => {
		acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
		return acc;
	}, {}),
	{}
	);

const object = {
	a: [{ x: 2 }, { y: 4 }],
	b: 1
};
const other = {
	a: { z: 3 },
	b: [2, 3],
	c: 'foo'
};

// console.log(merge(object, other));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 179

const matchesWith = (obj, source, fn) =>
Object.keys(source).every(
	key =>
	obj.hasOwnProperty(key) && fn
	? fn(obj[key], source[key], key, obj, source)
	: obj[key] == source[key]
	);
const isGreeting = val => /^h(?:i|ello)$/.test(val);

// console.log(matchesWith(
// 	{ greeting: 'hello' },
// 	{ greeting: 'hi' },
// 	(oV, sV) => isGreeting(oV) && isGreeting(sV)
// 	));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 180

const lowercaseKeys = obj => 
Object.keys(obj).reduce((acc, val) => ((acc[val.toLowerCase()] = obj[val]), acc),{})

const myObj = { Name: 'Adam', sUrnAME: 'Smith' };

const myObjLower = lowercaseKeys(myObj);

// console.log(myObjLower);


//////////////////////////////////////////////////////////////////////////////////////////////////
// 181

const lastNum = arr => arr[arr.length - 1];

// console.log(lastNum([1, 2, 3]));

// console.log(lastNum([1, 2, 3, 4, 5, 7]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 182


const join = (arr, separator = ',', end = separator) =>
arr.reduce((acc, val, i) =>
	i === arr.length - 2
	? acc + val + end
	: i === arr.length - 1
	? acc + val
	: acc + val + separator,
	''
	);

// console.log(join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'));

// console.log(join(['pen', 'pineapple', 'apple', 'pen'], ','));

// console.log(join(['pen', 'pineapple', 'apple', 'pen']));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 183

const isValidJSON = obj => {
	try {
		JSON.parse(obj);
		return true;
	} catch (e) {
		return false;
	}
};

// console.log(isValidJSON('{"name":"Adam","age":20}'));

// console.log(isValidJSON('{"name":"Adam",age:"20"}'));

// console.log(isValidJSON(null));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 184

const isUpperCase = str => str === str.toUpperCase();

// console.log(isUpperCase('ABC')); 

// console.log(isUpperCase('A3@$'));

// console.log(isUpperCase('aB4'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 185

const isUndefined = val => val === undefined;

// console.log(isUndefined(undefined));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 186

const isSymbol = val => typeof val === 'symbol';

// console.log(isSymbol(Symbol('x')));

// console.log(isSymbol(Symbol(1)));

// console.log(isSymbol(Symbol(')')))


//////////////////////////////////////////////////////////////////////////////////////////////////
// 187


const isString = val => typeof val === 'string';

// console.log(isString('10'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 188


const isSorted = arr => {
	let direction = -(arr[0] - arr[1]);
	for (let [i, val] of arr.entries()) {
		direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
		if (i === arr.length - 1) return !direction ? 0 : direction;
		else if ((val - arr[i + 1]) * direction > 0) return 0;
	}
};

// console.log(isSorted([0, 1, 2, 2]));

// console.log(isSorted([4, 3, 2]));

// console.log(isSorted([4, 3, 5]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 189


const isPromiseLike = obj =>
obj !== null &&
(typeof obj === 'object' || typeof obj === 'function') &&
typeof obj.then === 'function';

// console.log(isPromiseLike({
// 	then: function() {
// 		return '';
// 	}
// })); 
// console.log(isPromiseLike(null));
// console.log(isPromiseLike({}));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 190

const isPrimitive = val => !['object', 'function'].includes(typeof val) || val === null;

// console.log(isPrimitive(null));

// console.log(isPrimitive(50));

// console.log(isPrimitive('Hello!'));

// console.log(isPrimitive(false));

// console.log(isPrimitive(Symbol()));

// console.log(isPrimitive([]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 191

const isPrime = num => {
	for(let i = 2; i < num; i++) if(num % i === 0) return false;
		return num > 1;
}

// console.log(isPrime(11));

// console.log(isPrime(17));

// console.log(isPrime(8));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 192

const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

// console.log(isPlainObject({ a: 1 }));

// console.log(isPlainObject(new Map()));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 193


const isObjectLike = val => val !== null && typeof val === 'object';

// console.log(isObjectLike({}));

// console.log(isObjectLike([1, 2, 3]));

// console.log(isObjectLike(x => x));

// console.log(isObjectLike(null));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 194

const isObject = obj => obj === Object(obj);


// console.log(isObject([1, 2, 3, 4]));
// console.log(isObject([]));
// console.log(isObject(['Hello!']));
// console.log(isObject({ a: 1 }));
// console.log(isObject({}));
// console.log(isObject(true));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 195

const isNumber = val => typeof val === 'number';

// console.log(isNumber('1'));
// console.log(isNumber(1));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 196

const isNull = val => val === null;

// console.log(isNull(null)); 

// console.log(isNull(123));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 197

const isLowerCase = str => str === str.toLowerCase();

// console.log(isLowerCase('abc'));

// console.log(isLowerCase('a3@$'));

// console.log(isLowerCase('Ab4'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 198


const isFunction = val => typeof val === 'function';

// console.log(isFunction('x'));

// console.log(isFunction(x => x));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 199

const isEven = num => num % 2 === 0;


// console.log(isEven(3));

// console.log(isEven(32));

// console.log(isEven(1));

// console.log(isEven(0));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 200


const isEmpty = val => val === null || !(Object.keys(val) || val).length;

// console.log(isEmpty(new Map()));
// console.log(isEmpty(new Set()));
// console.log(isEmpty([]));
// console.log(isEmpty({}));
// console.log(isEmpty(''));
// console.log(isEmpty([1, 2]));
// console.log(isEmpty({ a: 1, b: 2 }));
// console.log(isEmpty('text'));
// console.log(isEmpty(123));
// console.log(isEmpty(true));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 201


const isDivisible = (dividend, divisor) => dividend % divisor === 0;

// console.log(isDivisible(6, 3));
// console.log(isDivisible(5, 3));
// console.log(isDivisible(100, 10));
// console.log(isDivisible(0, 3));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 202 Giống câu 199



//////////////////////////////////////////////////////////////////////////////////////////////////
// 203


const isBrowser = () => ![typeof window, typeof document].includes('undefined');

// console.log(isBrowser()); // true (browser)
// console.log(isBrowser()); // false (Node)

//////////////////////////////////////////////////////////////////////////////////////////////////
// 204


const isBoolean = val => typeof val === 'boolean';

// console.log(isBoolean(null));
// console.log(isBoolean(false));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 205

const isArrayLike = val => {
	try {
		return [...val], true;
	} catch (e) {
		return false;
	}
};

// console.log(isArrayLike(document.querySelectorAll('.className'))); 
// console.log(isArrayLike('abc'));
// console.log(isArrayLike(null));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 206


const isAnagram = (str1, str2) => {
	const normalize = str =>
	str
	.toLowerCase()
	.replace(/[^a-z0-9]/gi, '')
	.split('')
	.sort()
	.join('');
	return normalize(str1) === normalize(str2);
};

// console.log(isAnagram('iceman', 'cinema')); 
// console.log(isAnagram('madam', 'madam'));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 207

const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

// console.log(isAbsoluteURL('https://google.com')); 

// console.log(isAbsoluteURL('ftp://www.myserver.net'));

// console.log(isAbsoluteURL('/foo/bar')); 


//////////////////////////////////////////////////////////////////////////////////////////////////
// 208


const is = (type, val) => ![null].includes(val) && val.constructor === type;

// console.log(is(Array, [1])); // true

// console.log(is(ArrayBuffer, new ArrayBuffer()));

// console.log(is(Map, new Map()));

// console.log(is(RegExp, /./g));

// console.log(is(Set, new Set()));

// console.log(is(WeakMap, new WeakMap()));

// console.log(is(WeakSet, new WeakSet()));

// console.log(is(String, ''));

// console.log(is(String, new String('')));

// console.log(is(Number, 1));

// console.log(is(Number, new Number(1)));

// console.log(is(Boolean, true));

// console.log(is(Boolean, new Boolean(true)));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 209


const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

// console.log(intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 210

const intersectionBy = (a, b, fn) => {
	const s = new Set(b.map(x => fn(x)));
	return a.filter(x => s.has(fn(x)));
};

// console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 211

const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

// console.log(getColonTimeFromDate(new Date()));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 212

const initializeNDArray = (val, ...args) =>
args.length === 0
? val
: Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));


// console.log(initializeNDArray(1, 3));

// console.log(initializeNDArray(5, 2, 2, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 213

const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

// console.log(initializeArrayWithValues(5, 2));

// console.log(initializeArrayWithValues(4, 0));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 214

const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
	(v, i, arr) => (arr.length - i - 1) * step + start
	);

// console.log(initializeArrayWithRangeRight(5));

// console.log(initializeArrayWithRangeRight(7, 3));

// console.log(initializeArrayWithRangeRight(9, 0, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 215

const initial = arr => arr.slice(0, -1);

// console.log(initial([1, 2, 3]));  

// console.log(initial([0, -1, -2]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 216

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

// console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));

// console.log(indexOfAll([1, 2, 3], 4));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 217

const inRange = (n, start, end = null) => {
	if (end && start > end) end = [start, (start = end)][0];
	return end == null ? n >= 0 && n < start : n >= start && n < end;
};

// console.log(inRange(3, 2, 5));
// console.log(inRange(3, 4));
// console.log(inRange(2, 3, 5));
// console.log(inRange(3, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 218


const hz = (fn, iterations = 100) => {
	const before = performance.now();
	for (let i = 0; i < iterations; i++) fn();
		return (1000 * iterations) / (performance.now() - before);
};
// 10,000 element array
const numbers = Array(10000)
.fill()
.map((_, i) => i);

// Test functions with the same goal: sum up the elements in the array
const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
const sumForLoop = () => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
		return sum;
};


// console.log(Math.round(hz(sumReduce)));

// console.log(Math.round(hz(sumForLoop)));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 219


const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;

// console.log(hammingDistance(2, 3));

// console.log(hammingDistance(5, 3));



//////////////////////////////////////////////////////////////////////////////////////////////////
// 220


const getType = v =>
v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

// console.log(getType(new Set([1, 2, 3])));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 221 Gioosng câu 211

//////////////////////////////////////////////////////////////////////////////////////////////////
// 222

const geometricProgression = (end, start = 1, step = 2) =>
Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
	(v, i) => start * step ** i
	);

// console.log(geometricProgression(256));

// console.log(geometricProgression(256, 3));

// console.log(geometricProgression(256, 1, 4));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 223

const gcd = (...arr) => {
	const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
	return [...arr].reduce((a, b) => _gcd(a, b));
};

// console.log(gcd(8, 36));

// console.log(gcd(...[12, 8, 32]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 224

const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

// console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 225


const standardDeviation = (arr, usePopulation = false) => {

	const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
	return Math.sqrt(
		arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
		(arr.length - (usePopulation ? 0 : 1))
		);
};

// console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21]));

// console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 226

const sampleSize = ([...arr], n = 1) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr.slice(0, n);
};


// console.log(sampleSize([1, 2, 3], 2)); 

// console.log(sampleSize([1, 2, 3], 4));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 227

const remove = (arr, func) =>
Array.isArray(arr)
? arr.filter(func).reduce((acc, val) => {
	arr.splice(arr.indexOf(val), 1);
	return acc.concat(val);
}, [])
: [];

// console.log(remove([1, 2, 3, 4], n => n % 2 === 0));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 228

const functionName = fn => (console.debug(fn.name), fn);

// console.log(functionName(Math.abs));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 229

const fromCamelCase = (str, separator = '_') =>
str
.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
.toLowerCase();


// console.log(fromCamelCase('someDatabaseFieldName', ' '));

// console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-'));

// console.log(fromCamelCase('someJavascriptProperty', '_'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 230

const formatDuration = ms => {
	if (ms < 0) ms = -ms;
	const time = {
		day: Math.floor(ms / 86400000),
		hour: Math.floor(ms / 3600000) % 24,
		minute: Math.floor(ms / 60000) % 60,
		second: Math.floor(ms / 1000) % 60,
		millisecond: Math.floor(ms) % 1000
	};
	return Object.entries(time)
	.filter(val => val[1] !== 0)
	.map(val => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
	.join(', ');
};


// console.log(formatDuration(1001));

// console.log(formatDuration(34325055574));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 231

const forOwnRight = (obj, fn) =>
Object.keys(obj)
.reverse()
.forEach(key => fn(obj[key], key, obj));

// console.log(forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 232


const flip = fn => (first, ...rest) => fn(...rest, first);
let aFlip = { name: 'John Smith' };
let bFlip = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, aFlip);
mergePerson(bFlip); // == b
bFlip = {};

// console.log(Object.assign(bFlip, aFlip)); 


//////////////////////////////////////////////////////////////////////////////////////////////////
// 233


const flattenObject = (obj, prefix = '') =>
Object.keys(obj).reduce((acc, k) => {
	const pre = prefix.length ? prefix + '.' : '';
	if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
	else acc[pre + k] = obj[k];
	return acc;
}, {});

// console.log(flattenObject({ a: { b: { c: 1 } }, d: 1 }));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 234

const flatten = (arr, depth = 1) =>
arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

// console.log(flatten([1, [2], 3, 4])); 

// console.log(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 235

const findLastKey = (obj, fn) =>
Object.keys(obj)
.reverse()
.find(key => fn(obj[key], key, obj));

// console.log(findLastKey({
// 	barney: { age: 36, active: true },
// 	fred: { age: 40, active: false },
// 	pebbles: { age: 1, active: true }
// }, o => o['active']));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 236

const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

// console.log(findKey({
// 	barney: { age: 36, active: true },
// 	fred: { age: 40, active: false },
// 	pebbles: { age: 1, active: true }
// },
// o => o['active']
// ));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 237

const fibonacci = n =>
Array.from({ length: n }).reduce(
	(acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
	[]
	);

// console.log(fibonacci(2)); 

// console.log(fibonacci(3)); 

// console.log(fibonacci(6));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 238

const factorial = n =>
n < 0
? (() => {
	throw new TypeError('Negative numbers are not allowed!');
})()
: n <= 1
? 1
: n * factorial(n - 1);

// console.log(factorial(1));

// console.log(factorial(5));

// console.log(factorial(7));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 239

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');


// console.log(escapeRegExp('(test)'));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 240

const elementContains = (parent, child) => parent !== child && parent.contains(child);

// console.log(elementContains(document.querySelector('head'), document.querySelector('title')));

// console.log(elementContains(document.querySelector('body'), document.querySelector('body')));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 241

const dropWhile = (arr, func) => {
	while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
	return arr;
};

// console.log(dropWhile([1, 2, 3, 4], n => n >= 3));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 242

const dropRightWhile = (arr, func) => {
	while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
	return arr;
};


//////////////////////////////////////////////////////////////////////////////////////////////////
// 243

const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

// console.log(distance(1, 1, 2, 3)); 

// console.log(distance(-1, -1, 2, 3));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 244

const difference = (a, b) => {
	const s = new Set(b);
	return a.filter(x => !s.has(x));
};

// console.log(difference([1, 2, 3], [1, 2, 4]));

// console.log(difference([1, 2, 4],[1, 2, 3]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 245


const delayTime = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

// delayTime(function(text) {
// 	console.log(text);
// },1000,'later');

//////////////////////////////////////////////////////////////////////////////////////////////////
// 246

const degreesToRads = deg => (deg * Math.PI) / 180.0;

// console.log(degreesToRads(90.0));

// console.log(degreesToRads(30.0));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 247

const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

// console.log(defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 248

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// console.log(deepFlatten([1, [2], [[3], 4], 5]));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 249

const currentURL = () => window.location.href;

// console.log(currentURL());

//////////////////////////////////////////////////////////////////////////////////////////////////
// 250


const createElement = str => {
	const el = document.createElement('div');
	el.innerHTML = str;
	return el.firstElementChild;
};

const el = createElement(`<div class="container"><p>Hello!</p></div>`);
// console.log(el.className);

//////////////////////////////////////////////////////////////////////////////////////////////////
// 251

// const fs = require('fs');
// const JSONToFile = (obj, filename) =>
//   fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
// JSONToFile({ test: 'is passed' }, 'testJsonFile');


//////////////////////////////////////////////////////////////////////////////////////////////////
// 252

const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

// console.log(RGBToHex(255, 165, 1));

// console.log(RGBToHex(255, 255, 1));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 253

const UUIDGeneratorBrowser = () =>
([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
	(c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
	);

// console.log(UUIDGeneratorBrowser());

//////////////////////////////////////////////////////////////////////////////////////////////////
// 254

// const crypto = require('crypto');
// const UUIDGeneratorNode = () =>
// ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
// 	(c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
// 	);

// console.log(UUIDGeneratorNode());


//////////////////////////////////////////////////////////////////////////////////////////////////
// 255

const any = (arr, fn = Boolean) => arr.some(fn);

// console.log(any([0, 1, 2, 0], x => x >= 2));

// console.log(any([0, 0, 1, 0]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 256

const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

// console.log(approximatelyEqual(Math.PI / 2.0, 1.5708));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 257


const arrayToCSV = (arr, delimiter = ',') =>
arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

// console.log(arrayToCSV([['a', 'b'], ['c', 'd']]));
// console.log(arrayToCSV([['a', 'b'], ['c', 'd']], ';'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 258

const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
const firstTwoMax = ary(Math.max, 2);

// console.log([[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 259

const atob = str => new Buffer(str, 'base64').toString('binary');
// console.log(atob('Zm9vYmFy'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 260

const binomialCoefficient = (n, k) => {
	if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
	if (k < 0 || k > n) return 0;
	if (k === 0 || k === n) return 1;
	if (k === 1 || k === n - 1) return n;
	if (n - k < k) k = n - k;
	let res = n;
	for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
		return Math.round(res);
};

// console.log(binomialCoefficient(8, 2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 261


const bottomVisible = () =>
document.documentElement.clientHeight + window.scrollY >=
(document.documentElement.scrollHeight || document.documentElement.clientHeight);

// console.log(bottomVisible());


//////////////////////////////////////////////////////////////////////////////////////////////////
// 262

const btoa = str => new Buffer(str, 'binary').toString('base64');
// console.log(btoa('foobar'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 263

const capitalize = ([first, ...rest], lowerRest = false) =>
first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// console.log(capitalize('fooBar')); 

// console.log(capitalize('fooBar', true));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 264

const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

console.log(capitalizeEveryWord('hello world!'));

//////////////////////////////////////////////////////////////////////////////////////////////////
// 265

const chunk = (arr, size) =>
Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
	arr.slice(i * size, i * size + size)
	);
// console.log(chunk([1, 2, 3, 4, 5], 2));


//////////////////////////////////////////////////////////////////////////////////////////////////
// 266

const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

// console.log(clampNumber(2, 3, 5));

// console.log(clampNumber(1, -1, -5));



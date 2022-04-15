// function generator co the dc su dung de run infinite loop

function* generateId() {
	let id = 1;
	while(true) {
		yield id;
		id++;
	}
}

const callBack = generateId();
console.log(callBack.next())
console.log(callBack.next())

// Tao vong lap (iterator)

function* generatorArr(arr) {
	for(let i = 0 ; i < arr.length; i++) {
		yield arr[i];
	}
}

const array = generatorArr([1,2]);
console.log(array.next())
console.log(array.next())
console.log(array.next())


// Them gia tri qua moi lan iterator + return tai 1 value + throw Error

function* generatorVal() {
	let id = 1;


	while(true) {
		const increment = yield id;
		if(increment != null) {
			id+= increment;
		} else {
			id++;
		}
	}
}

const value = generatorVal();
console.log(value)
console.log(value.next())
console.log(value.next(4))
console.log(value.next(3))
console.log(value.return(10))
console.log(value.throw(new Error("Sorry we ended the generator")))


// 1

const btn = document.querySelector("#jsstyle");
const reset = document.querySelector("#reset");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
	text.style.color = "green";
	text.style.fontFamily = "Roboto";
	text.style.fontSize = "40px";
})


reset.addEventListener("click", () => {
	text.style = "unset"
})

////////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const form = document.querySelector("#form1");
// const tranfer = Array.from(form)


const getFormValue = () => {
	for(let i = 0 ; i < form.length; i++) 
		if(form.children[i].value) console.log(form.children[i].value)

	}

form.addEventListener("submit", getFormValue());

////////////////////////////////////////////////////////////////////////////////////////////////////
// 3


let button = document.getElementById("btn");
let para1 = document.getElementById("p-exersice");
let para2 = document.getElementById("p1-exersice");


let set_background = () => {
	para1.style.background = "aqua";
	para2.style.background = "darkorange";
}

button.addEventListener('click', set_background);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 4

let btnAttr = document.getElementById("getAttr");
let valAttr = document.getElementById("w3r");
let divAttr = document.getElementById("val-attr")

let getAttributes = (ele) => {
	for (let i =1;  i < ele.attributes.length; i++) {
		alert(`The value of the ${ele.attributes[i].name} attribute is: ${ele.attributes[i].value}`)
	}
}

btnAttr.addEventListener('click', () => {
	getAttributes(valAttr)
})

////////////////////////////////////////////////////////////////////////////////////////////////////
// 5


let inputRow = document.getElementById("row");

const addRow = () => {
	let table = document.getElementById("sampleTable").insertRow(0);
	let y = table.insertCell(0);
	let z = table.insertCell(1);
	y.innerText="New Cell1";
	z.innerText="New Cell2";
}

inputRow.addEventListener('click', addRow);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 6

let inputChange = document.getElementById("change-content");

let changeContent = () => {
	let rn = window.prompt("Input the Row number(0,1,2)", "0");
	let cn = window.prompt("Input the Column number(0,1)","0");
	content = window.prompt("Input the Cell content");  
	let x = document.getElementById('myTable').rows[parseInt(rn,10)].cells;
	x[parseInt(cn,10)].innerText=content;
}

inputChange.addEventListener('click', changeContent);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const changeTable = () => {
	let rn = window.prompt("Input number of rows", 1);
	let cn = window.prompt("Input number of columns",1);
	for (let i = 0 ; i < parseInt(rn, 10); i++) {
		let x = document.getElementById('theTable').insertRow(i);
		for(let c = 0 ; c < parseInt(cn,10); c++) {
			let y = x.insertCell(c);
			y.innerText="Row-"+ i +" Column-"+ c; 
		}
	}
}

let btnTable = document.getElementById("change-table");

btnTable.addEventListener("click", changeTable);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 8


let listColor = document.getElementById("colorSelect");

let changeColor = document.getElementById("change-color");

console.log(listColor)

const removeColor = () => 
listColor.remove(listColor.selectedIndex)


changeColor.addEventListener("click", removeColor);


////////////////////////////////////////////////////////////////////////////////////////////////////
// 9

let getOption = document.getElementById("option");
let valOpt = document.getElementById("mySelect");

let getValOpt = () => alert(valOpt.value)
getOption.addEventListener("click", getValOpt);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 10

let cal = document.getElementById("MyForm");

let  caculateSphere = () => {
	let inputRadius = document.getElementById("radius-sphere").value;
	let inputVolume = document.getElementById("volume-sphere").value;
	Math.abs(inputRadius);
	inputVolume = ((4/3) * Math.PI * Math.pow(parseInt(inputRadius, 10), 3)).toFixed(4);
	alert(inputVolume);
}

cal.addEventListener("submit", (e) => {
	e.preventDefault();
	caculateSphere()
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

let arrImg = [{
	src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
	width: "240",
	height: "160"
}, {
	src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
	width: "320",
	height: "195"
}, {
	src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
	width: "500",
	height: "343"
}];



const display_random_image = () => {
	let preBuffer = [];
	for (let i = 0 ; i < arrImg.length; i++) {
		preBuffer[i] = document.createElement("img");
		preBuffer[i].setAttribute("src", arrImg[i].src)
		preBuffer[i].setAttribute("width", arrImg[i].width)
		preBuffer[i].setAttribute("height", arrImg[i].height)
	}

	let getRandomInt = (min,max) => {
		let position = Math.floor(Math.random() * (max - min + 1)) + min;
		return preBuffer[position];
	}

	let newImg = getRandomInt(0, preBuffer.length - 1);
	let images = document.querySelectorAll('img');

	images.forEach(v => images[0].remove())

	document.body.appendChild(newImg);
}

let btnShow = document.getElementById("jsstyle-random");

btnShow.addEventListener("click", display_random_image);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const strong = document.querySelectorAll("strong");

const highlight = () => strong.forEach(v => v.style.color = "green");

const return_normal = () =>  strong.forEach(v => v.style.color = "red");

////////////////////////////////////////////////////////////////////////////////////////////////////
// 13

const getSize = () => {
	let w = window.innerWidth;
	let h = window.innerHeight;
	let size = document.querySelector("#wh");
	size.textContent = `Width is ${w}, Height is ${h}`;
	size.style.fontSize = "25px";
	size.style.fontWeight = "bold"
}

window.addEventListener("resize", getSize)
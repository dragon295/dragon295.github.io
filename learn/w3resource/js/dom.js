// 1

let btn = document.getElementById("jsstyle");
let text = document.getElementById("text");
let reset = document.getElementById("reset");

let js_style = () => {
	text.style.color = "red";
	text.style.fontFamily = "Bebas Neue";
	text.style.fontSize = "40px";
}

let resetAll = () => text.style = "unset";


btn.addEventListener("click", js_style);
reset.addEventListener("click", resetAll);


////////////////////////////////////////////////////////////////////////////////////////////////////
// 2


let valueInForm = document.getElementById("form1");
let getFormvalue = () => {
	for (let i = 0;i < valueInForm.length; i++) {
		if (valueInForm.elements[i].value!='Submit') console.log(valueInForm.elements[i].value);
	}
}

valueInForm.addEventListener("submit", getFormvalue);


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
		divAttr.innerHTML += `${ele.attributes[i].name.toUpperCase()}:${ele.attributes[i].value}-- `
	}
}

btnAttr.addEventListener('click', () => {
	getAttributes(valAttr)
})


////////////////////////////////////////////////////////////////////////////////////////////////////
// 5

let inputRow = document.getElementById("row");

let addRow = () => {
	let table = document.getElementById("sampleTable").insertRow(0);
	let y = table.insertCell(0);
	let z = table.insertCell(1);
	y.innerHTML="New Cell1";
	z.innerHTML="New Cell2";
}

inputRow.addEventListener('click', addRow);


////////////////////////////////////////////////////////////////////////////////////////////////////
// 6


let changeContent = () => {
	let rn = window.prompt("Input the Row number(0,1,2)", "0");
	let cn = window.prompt("Input the Column number(0,1)","0");
	content = window.prompt("Input the Cell content");  
	let x = document.getElementById('myTable').rows[parseInt(rn,10)].cells;
	x[parseInt(cn,10)].innerHTML=content;
}
let inputChange = document.getElementById("change-content");
inputChange.addEventListener('click', changeContent);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 7

let changeTable = () => {
	let rn = window.prompt("Input number of rows", 1);
	let cn = window.prompt("Input number of columns",1);
	for (let i = 0 ; i < parseInt(rn, 10); i++) {
		let x = document.getElementById('theTable').insertRow(i);
		for(let c = 0 ; c < parseInt(cn,10); c++) {
			let y = x.insertCell(c);
			y.innerHTML="Row-"+ i +" Column-"+ c; 
		}
	}
}

let btnTable = document.getElementById("change-table");

btnTable.addEventListener("click", changeTable);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 8

let listColor = document.getElementById("colorSelect");

let changeColor = document.getElementById("change-color");

let removeColor = () => {
	listColor.remove(listColor.selectedIndex)
}

changeColor.addEventListener("click", removeColor);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 9

let getOption = document.getElementById("option");
let valOpt = document.getElementById("mySelect");

let getValOpt = () => alert(valOpt.value)
getOption.addEventListener("click", getValOpt);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 10

let cal = document.getElementById("caculate");

let  caculateSphere = () => {
	let inputRadius = document.getElementById("radius-sphere").value;
	let inputVolume = document.getElementById("volume-sphere").value;
	Math.abs(inputRadius);
	inputVolume = ((4/3) * Math.PI * Math.pow(parseInt(inputRadius, 10), 3)).toFixed(4);
	console.log(inputVolume);
}

cal.addEventListener("click", caculateSphere);



////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

let btnShow = document.getElementById("jsstyle-random");

let display_random_image = () => {
	// debugger
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
	let images = document.getElementsByTagName('img');
	let l = images.length;
	for (let p = 0; p < l; p++) {
		images[0].parentNode.removeChild(images[0]);
	}

	document.body.appendChild(newImg);
	
}



btnShow.addEventListener("click", display_random_image);


////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

let bold_Items
let getBold_items = () => {
	bold_Items = document.getElementsByTagName('strong'); 

}

window.onload = getBold_items();

let highlight = () => {
	for (let i = 0 ;i < bold_Items.length; i++) {
		bold_Items[i].style.color = "green"
	}
}


let return_normal = () => {
	for (let i=0; i < bold_Items.length; i++) {
		bold_Items[i].style.color = "black";
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

let getSize = () =>{
	let w = document.documentElement.clientWidth;
	let h = document.documentElement.clientHeight;

// put the result into a h1 tag
document.getElementById('wh').innerHTML = "<h1>Width: " + w + " and Height: " + h + "</h1>";
}
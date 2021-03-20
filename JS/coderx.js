// let readlineSync = require('readline-sync');
// let fs = require('fs');

// let students = [];

// function loadData() {
// 	let fileContent = fs.readFileSync('./data.json');
// 	students = JSON.parse(fileContent)
// } 

// function showMenu() {
// 	console.log('1. Show all students');
// 	console.log('2. Create a new student');
// 	console.log('3. Save & Exit');

// 	let option = readlineSync.question('> ');
// 	switch(option) {
// 		case '1':
// 		showStudent();
// 		showMenu();
// 		break;
// 		case '2':
// 		createStudent();
// 		showMenu();
// 		break;
// 		case '3':
// 		saveAndExit();
// 		break
// 		default:
// 		console.log('Wrong option');
// 		showMenu();
// 		break
// 	}

// }

// function showStudent() {
// 	for(let student of students) {
// 		console.log(student.name, student.age)
// 	}
// }

// function createStudent(){
// 	let name = readlineSync.question('Name: ');
// 	let age = readlineSync.question('Age: ');
// 	let student = {
// 		name: name,
// 		age: parseInt(age)
// 	}
// 	students.push(student)
// } 

// function saveAndExit() {
// 	let content = JSON.stringify(students)
// 	fs.writeFileSync('./data.json', content, 
// 		{ encoding: 'utf8' })
// }

// function main() {
// 	loadData();
// 	showMenu();
// }

// main();

const path = require('path');

function getExtensionFilename(filename) {
   let show = path.extname(filename);
	let troll = show.split('').shift()
    console.log(troll)
}


getExtensionFilename('index.html')
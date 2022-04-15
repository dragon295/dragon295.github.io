const pw = document.getElementById("pw");
const copy = document.getElementById("copy");
const length = document.getElementById("length");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUYWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuywxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=";

const getUpperCase = () =>
  upperLetters[Math.floor(Math.random() * upperLetters.length)];

const getLowerCase = () =>
  lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

const getNumbers = () => numbers[Math.floor(Math.random() * numbers.length)];

const getSymbols = () => symbols[Math.floor(Math.random() * symbols.length)];

function generatePassword() {
  const len = length.value;

  let password = "";
  for (let i = 0; i < len; i++) {
    let val = generateVal();
    password += val;
  }

  pw.innerText = password;
}

function generateVal() {
  const arr = [];
  if (upperCase.checked) arr.push(getUpperCase());

  if (lowerCase.checked) arr.push(getLowerCase());

  if (number.checked) arr.push(getNumbers());

  if (symbol.checked) arr.push(getSymbols());

  if (arr.length === 0) return "";

  return arr[Math.floor(Math.random() * arr.length)];
}

copy.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pw.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

generate.addEventListener("click", generatePassword);

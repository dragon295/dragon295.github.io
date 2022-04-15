const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const operationSpec = document.querySelectorAll(".special-oper");
const equalBtn = document.querySelector(".equal");
const deleteBtn = document.querySelector(".delete");
const clearAllBtn = document.querySelector(".btn-clear-all");
const previousText = document.querySelector(".previous-text");
const currentText = document.querySelector(".current-text");

class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
    this.clearAll();
  }

  clearAll() {
    this.currentTextValue = "";
    this.previousTextValue = "";
    this.operation = undefined;
  }

  delete() {
    this.currentTextValue = this.currentTextValue.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentTextValue.includes(".")) return;
    this.currentTextValue = this.currentTextValue + number;
  }

  // Choose normal operation

  chooseOperation(operation) {
    if (this.currentTextValue === "") return;
    if (this.previousTextValue !== "") this.compute();
    this.operation = operation;
    this.previousTextValue = this.currentTextValue;
    this.currentTextValue = "";
  }

  // Choose special operation

  chooseOperationSpec(operationSpec) {
    if (this.currentTextValue === "") return;
    this.operationSpec = operationSpec;
    let currentSpecText = this.currentTextValue;
    switch (this.operationSpec) {
      case "%":
        this.currentTextValue = parseFloat(currentSpecText) / 100;
        break;
      case "√":
        this.currentTextValue = Math.sqrt(parseFloat(currentSpecText));
        break;
      case "x²":
        this.currentTextValue = Math.pow(parseFloat(currentSpecText), 2);
        break;
      case "x!":
        this.currentTextValue = this.factorial(parseFloat(currentSpecText));
        break;
      default:
        return;
    }
  }

  factorial(num) {
    if (num < 1) return 1;
    else return num * this.factorial(num - 1);
  }

  calculate() {
    let prev = parseFloat(this.previousTextValue);
    let curr = parseFloat(this.currentTextValue);

    let computation;
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      case "*":
        computation = prev * curr;
        break;
      case "÷":
        computation = prev / curr;
        break;
      default:
        return;
    }
    this.currentTextValue = computation;
    this.operation = undefined;
    this.previousTextValue = "";
  }

  formatNumber(number) {
    const stringNum = number.toString();
    const integerDigits = parseFloat(stringNum.split(".")[0]);
    const decimalDigits = stringNum.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("vn", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits !== undefined) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // Display value to the screen

  updateDisplay() {
    this.currentText.innerText = this.formatNumber(this.currentTextValue);
    if (this.operation !== undefined) {
      this.previousText.innerText = `${this.previousTextValue} ${this.operation} `;
    } else {
      this.previousText.innerText = "";
    }
  }
}

const calculator = new Calculator(previousText, currentText);

clearAllBtn.addEventListener("click", () => {
  calculator.clearAll();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

operationSpec.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperationSpec(button.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});

let display = document.getElementById("display");
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let shouldResetDisplay = false;

function appendNumber(number) {
  if (shouldResetDisplay) resetDisplay();
  display.value += number;
}

function chooseOperator(operator) {
  if (currentOperator !== null) calculate();
  firstOperand = display.value;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function calculate() {
  if (currentOperator === null || shouldResetDisplay) return;
  secondOperand = display.value;
  display.value = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));
  currentOperator = null;
}

function resetDisplay() {
  display.value = "";
  shouldResetDisplay = false;
}

function clearDisplay() {
  display.value = "";
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Помилка";
    default:
      return null;
  }
}

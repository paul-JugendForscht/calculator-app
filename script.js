let current = "";
let operator = "";
let previous = "";

function appendNumber(num) {
    current += num;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    previous = current;
    current = "";
}

function calculate() {
    let result;

    let a = parseFloat(previous);
    let b = parseFloat(current);

    if (operator === "+") result = a + b;
    if (operator === "-") result = a - b;
    if (operator === "*") result = a * b;
    if (operator === "/") result = a / b;

    current = result;
    operator = "";
    previous = "";

    updateDisplay();
}

function clearDisplay() {
    current = "";
    previous = "";
    operator = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = current;
}

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    if (+b === 0) return "Error: ÷0!";
    return +a / +b;
}

let operators = ["+", "-", "*", "/"];
let operand1;
let operand2;
let operator;
let shouldResetScreen = false;

function operate(num1, num2, sign) {
    switch (sign) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
    }
}

let buttons = document.querySelector(".digits");
for (let i = 9; i >= 0; i--) {
    let button = document.createElement("button");
    button.setAttribute("id", i);
    button.setAttribute("class","digit");
    button.innerText = i;
    button.addEventListener("click", printDigit);
    buttons.appendChild(button);
}

let display = document.querySelector(".display");

function printDigit() {
    if (display.innerText === "Error: ÷0!" || shouldResetScreen) {
        display.innerText = "";
        shouldResetScreen = false;
    }
    display.innerText += event.target.innerText;
}

function assignOperator() {
    if (operator && display.innerText !== "") {
        operand2 = display.innerText;
        operand1 = operate(operand1, operand2, operator);
        display.innerText = operand1;
    } else {
        operand1 = display.innerText;
    }
    operator = event.target.innerText;
    shouldResetScreen = true;
}

document.getElementById("0").addEventListener('click', printDigit);
document.getElementById("1").addEventListener('click', printDigit);
document.getElementById("2").addEventListener('click', printDigit);
document.getElementById("3").addEventListener('click', printDigit);
document.getElementById("4").addEventListener('click', printDigit);
document.getElementById("5").addEventListener('click', printDigit);
document.getElementById("6").addEventListener('click', printDigit);
document.getElementById("7").addEventListener('click', printDigit);
document.getElementById("8").addEventListener('click', printDigit);
document.getElementById("9").addEventListener('click', printDigit);
document.getElementById("plus").addEventListener('click', assignOperator);
document.getElementById("minus").addEventListener('click', assignOperator);
document.getElementById("multiply").addEventListener('click', assignOperator);
document.getElementById("divide").addEventListener('click', assignOperator);

document
    .getElementById("equal")
    .addEventListener('click', () => {
        if (!operator || display.innerText === "") return; // prevent empty eval
        operand2 = display.innerText;
        let result = operate(operand1, operand2, operator);
        display.innerText = result;
        operand1 = result;
        operand2 = "";
        operator = "";
        shouldResetScreen = true;
    });

document.getElementById("clear").addEventListener('click', () => {
    display.innerText = "";
    operand1 = '';
    operand2 = '';
    operator = '';
});

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let operand1;
let operand2;
let operator;

function operate(num1,num2,sign){
    switch(sign){
        case "+": 
        return add(num1,num2);
        break;

        case "-": 
        return substract(num1,num2);
        break;

        case "*": 
        return multiply(num1,num2);
        break;
        
        case "+": 
        return add(num1,num2);
        break;
    }
}

let buttons = document.querySelector(".buttons-container");
for(let i=0;i<=9;i++){
    let button = document.createElement("button");
    button.setAttribute("id",i);
    button.innerText = i;
    buttons.appendChild(button);
}
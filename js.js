function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": return add(num1, num2); break;

        case "-": return subtract(num1, num2); break;

        case "*": return multiply(num1, num2); break;

        case "/": return divide(num1, num2); break;

    }
}


let num1;
let operator;
let num2;

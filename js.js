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

function clearCalculationVars() {
    num1 = "";
    operator = undefined;
    num2 = "";
}

function clearDisplay() {
    const display = document.querySelector("#display");
    display.textContent = "";
}

function updateDisplay() {
    const display = document.querySelector("#display");
    clearDisplay();
    if (num1 !== "") display.textContent += num1;
    if (operator !== undefined) display.textContent += operator;
    if (num1 !== "") display.textContent += num2;
}

function calculate() {
    if (num1 === "" || num2 === "" || operator === undefined) alert("ERROR");
    else {
        const display = document.querySelector("#display");
        const newVal = operate(operator, parseFloat(num1), parseFloat(num2));
        display.textContent = newVal;
        clearCalculationVars();
        num1 = newVal;
    }
}

let num1 = "";
let operator = undefined;
let num2 = "";

const buttons = document.querySelectorAll("#calc button");
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        if (e.target.textContent === "=") calculate();
        else {
            const nums = "0123456789";
            const symbols = "+-/*";
            if (nums.includes(e.target.textContent)) {
                if (operator === undefined) num1 += e.target.textContent;
                else num2 += e.target.textContent;
            }
            else if (symbols.includes(e.target.textContent)) operator = e.target.textContent;
            else alert("ERROR");
            updateDisplay();
        }
    })
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    clearDisplay();
    clearCalculationVars();
})


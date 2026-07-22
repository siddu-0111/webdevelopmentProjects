let op1 = document.querySelector("#operand1");
let op2 = document.querySelector("#operand2");
let operation = document.querySelector(".operation");
let result = document.querySelector("#result");
let calculateBtn = document.querySelector("#calculate");

calculateBtn.addEventListener("click", () => {
    let operand1 = parseFloat(op1.value);
    let operand2 = parseFloat(op2.value);
    let operator = operation.value;
    let res;
    if(isNaN(operand1) || isNaN(operand2)) {
        result.textContent = "result: Invalid input";
        return;
    }
    if (operator === "+") {
        res = operand1 + operand2;
    } else if (operator === "-") {
        res = operand1 - operand2;
    } else if (operator === "*") {
        res = operand1 * operand2;
    } else if (operator === "/") {
        if (operand2 === 0) {
            result.textContent = "result: Cannot divide by zero";
            return;
        }
        res = operand1 / operand2;
    }
    console.log(res);
    result.textContent = "result: " + res;
});


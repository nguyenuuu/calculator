const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const textCurrNum = document.querySelector(".current-number");
const expression = document.querySelector(".expression");
const operators = document.querySelectorAll(".operator"); //::   / * + - .
const btnNums = document.querySelectorAll(".number");  // 1 2 3 4 5 6 7 8 9 0

var number1 = "", number2 = "", currNum = "";
var sign = "";

// add digit to number
btnNums.forEach((num, index) => {
    num.addEventListener("click", () => {
        currNum += btnNums[index].textContent;
        if (currNum.length > 19) {
            alert("over limit");
            return;
        }
        textCurrNum.textContent = currNum;
    });
});

// add operator to expression
operators.forEach((operator, index) => {
    operator.addEventListener("click", () => {
        if (index === 4) {
            currNum += ".";
            if (currNum.length > 19) {
                alert("over limit");
            }
        } else {
            if (currNum.length === 0 && index === 3) {
                currNum += "-";
            } else {
                if (expression.textContent.length !== 0 && index === 3) {
                    currNum += "-";
                } else {
                    sign = operators[index].textContent;
                    if(number1 === ""){
                        number1 = currNum;
                        currNum = "";
                    } 
                    expression.textContent = number1 + " " + sign;
                }
            }
        }
        textCurrNum.textContent = currNum;
    });
});

// result
equal.addEventListener("click", () => {
    number2 = currNum;
    currNum = calculate();
    expression.textContent = number1 + " " + sign + " " + number2 + " =";
    textCurrNum.textContent = currNum;
    number2 = "";
    number1 = currNum;
    currNum = "";
});

function calculate() {
    let n1 = parseFloat(number1);
    let n2 = parseFloat(number2);
    if (sign === "+") {
        return (n1 + n2).toString().slice(0, 19);
    }
    if (sign === "-") {
        return (n1 - n2).toString().slice(0, 19);
    }
    if (sign === "*") {
        return (n1 * n2).toString().slice(0, 19);
    }
    if (sign === "÷") {
        return (n1 / n2).toString().slice(0, 19);
    }
}

// delete
del.addEventListener("click", () => {
    if(currNum.length) {
        currNum = currNum.slice(0, currNum.length - 1);
        textCurrNum.textContent = currNum;
    }
});

// ac 
ac.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    currNum = "";
    textCurrNum.textContent = "0";
    expression.textContent = "";
});
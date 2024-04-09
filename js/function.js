function concatenaNumeri() {
    number += this.innerHTML;
    document.getElementById("result").innerHTML = number;
}
function sceltaOperatore() {
    if (contOperator) {
        document.getElementById("result").innerHTML = "ERROR";
        operator = "";
        number = "";
        numberFirst = 0;
       contOperator =false; 
    } else {
        operator = this.innerHTML;
        document.getElementById("result").innerHTML = "0";
        numberFirst = number;
        number = "";
        contOperator=true;
    }
}

function operazione() {
    let operationResult = 0;
    numberFirst = parseInt(numberFirst);
    number = parseInt(number);
    if (operator == "+") {
        operationResult = numberFirst + number;
    } else if (operator == "-") {
        operationResult = numberFirst - number;
    } else if (operator == "x") {
        operationResult = numberFirst * number;
    } else if (operator == "÷" && number != 0) {
        operationResult = numberFirst / number;
    } else {
        operationResult = "ERROR"
    }
    document.getElementById("result").innerHTML = operationResult;
    number = "";
    numberFirst = 0;
    contOperator =false;
}

function resetAll() {
    operator = "";
    number = "";
    numberFirst = 0;
    document.getElementById("result").innerHTML = "0";
    contOperator =false; 
}
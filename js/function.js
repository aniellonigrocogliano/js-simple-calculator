function concatenaNumeri() {
    number += this.innerHTML;
    document.getElementById("result").innerHTML = number;
}
function sceltaOperatore() {
    operator = this.innerHTML;
    document.getElementById("result").innerHTML = "0";
    numberFirst = number;
    number = "";

}

function operazione() {
    let operationResult = 0;
    numberFirst = parseInt(numberFirst);
    number = parseInt(number);
    if (operator == "+") {
        operationResult = numberFirst + number;
    }
    if (operator == "-") {
        operationResult = numberFirst - number;
    }
    if (operator == "x") {
        operationResult = numberFirst * number;
    }
    if (operator == "÷") {
        operationResult = numberFirst / number;
    }
    document.getElementById("result").innerHTML = operationResult;
    number = "";
    numberFirst = 0;
}

function resetAll() {
    operator = "";
    number = "";
    numberFirst = 0;
    document.getElementById("result").innerHTML = "0";
}
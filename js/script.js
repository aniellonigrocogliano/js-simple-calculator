let num = document.querySelectorAll(".num");
let ope = document.querySelectorAll(".ope");
let equal = document.querySelector(".equal");
let reset = document.querySelector(".reset");
let operator = "";
let number = "";
let numberFirst = 0;

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", concatenaNumeri);
}

for (let i = 0; i < ope.length; i++) {
    ope[i].addEventListener("click", sceltaOperatore)
}
equal.addEventListener("click", operazione);
reset.addEventListener("click", resetAll);
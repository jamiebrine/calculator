const topOutput = document.getElementById("top-display");
const bottomOutput = document.getElementById("bottom-display");
const calculator = document.getElementById("main");

document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clearDisplay)

calculator.addEventListener("click", function(e){
    if(e.target && e.target.classList.contains("calc-element") && !(e.target.id === "equals" ||e.target.id === "clear")) {
        currentInput += e.target.innerText;
        bottomOutput.innerText = currentInput;
    }
});

var currentInput = "";

function calculate() {
    
}

function clearDisplay() {
    currentInput = "";
    topOutput.innetText = "";
    bottomOutput.innerText = "";
}
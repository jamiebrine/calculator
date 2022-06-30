const topOutput = document.getElementById("top-display");
const bottomOutput = document.getElementById("bottom-display");
const calculator = document.getElementById("main");

document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("delete").addEventListener("click", deleteCharacter);

calculator.addEventListener("click", function(e){
    if(e.target && e.target.classList.contains("num") && !(e.target.id === "point" && currentInput.includes("."))) {
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

function deleteCharacter() {
    if(!(currentInput === "")) {
        currentInput = currentInput.slice(0, -1);
        bottomOutput.innerText = currentInput;
    }
}
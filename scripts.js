const topOutput = document.getElementById("top-display");
const bottomOutput = document.getElementById("bottom-display");
const calculator = document.getElementById("main");

document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("delete").addEventListener("click", deleteCharacter);

calculator.addEventListener("click", function(e){
    if(e.target && e.target.classList.contains("num") && !(e.target.id === "point" && currentInput.includes(".")) && currentInput.length < 11) {
        currentInput += e.target.innerText;
        bottomOutput.innerText = currentInput;
    }
    
    else if(e.target && e.target.classList.contains("btn") && !(e.target.id === "equals") && currentInput != "" && currentInput != ".") {
        currentStored += parseFloat(currentInput);
        currentInput = "";
        
        topOutput.innerText = currentStored;
        bottomOutput.innerText = currentInput;
    }
});


var currentInput = "";
var currentStored = "";

function calculate() {
    
}

function clearDisplay() {
    currentInput = "";
    currentStored = "";
    topOutput.innerText = "";
    bottomOutput.innerText = "";
}

function deleteCharacter() {
    if(!(currentInput === "")) {
        currentInput = currentInput.slice(0, -1);
        bottomOutput.innerText = currentInput;
    }
}
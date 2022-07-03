const topOutput = document.getElementById("top-display");
const bottomOutput = document.getElementById("bottom-display");
const calculator = document.getElementById("main");

calculator.addEventListener("click", function (e) {
  if (
    e.target &&
    e.target.classList.contains("num") &&
    !(e.target.id === "point" && currentInput.includes("."))
  ) {
    if (currentOperator === "=") {
      currentInput = "";
      currentOperator = "+";
      runningTotal = 0;
      topOutput.innerText = "";
    }
    console.log("hasdfg");
    currentInput += e.target.innerText;
    bottomOutput.innerText = currentInput;
  } else if (
    e.target &&
    e.target.classList.contains("btn") &&
    currentInput != "" &&
    currentInput != "."
  ) {
    if (currentOperator === "+") runningTotal += parseFloat(currentInput);
    else if (currentOperator === "-") runningTotal -= parseFloat(currentInput);
    else if (currentOperator === "*") runningTotal *= parseFloat(currentInput);
    else if (currentOperator === "/") runningTotal /= parseFloat(currentInput);
    else if (currentOperator === "=") topOutput.innerText = "";

    topOutput.innerText += parseFloat(currentInput) + e.target.innerText;
    currentOperator = e.target.innerText;

    currentInput = "";
    bottomOutput.innerText = currentInput;

    if (e.target.id === "equals") {
      bottomOutput.innerText = runningTotal;
      currentInput = runningTotal;
    }
  }
});

document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("delete").addEventListener("click", deleteCharacter);

var runningTotal = 0;
var currentOperator = "+";
var currentInput = "";

function clearDisplay() {
  runningTotal = 0;
  currentInput = "";
  currentOperator = "+";

  topOutput.innerText = "";
  bottomOutput.innerText = "";
}

function deleteCharacter() {
  if (!(currentInput === "")) {
    currentInput = currentInput.slice(0, -1);
    bottomOutput.innerText = currentInput;
  }
}

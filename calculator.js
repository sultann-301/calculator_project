import { calculate, operations } from "./logic.js";
const calculatorContainer = document.querySelector(".container");

const renderCalc = () => {
  //generate display
  const calcDisplay = document.createElement("div");
  calcDisplay.classList.add("num-display");
  calculatorContainer.appendChild(calcDisplay);
  //generate p tags to hold numbers

  const calcScreenCurrent = document.createElement("p");
  calcScreenCurrent.classList.add("screen-current");
  calcDisplay.appendChild(calcScreenCurrent);

  // equals, backspace, and clear key
  const equalBtn = document.createElement("button");
  const clearBtn = document.createElement("button");
  const backspaceBtn = document.createElement("button");
  equalBtn.classList.add("calculator-btn", "equals");
  clearBtn.classList.add("calculator-btn", "ac");
  backspaceBtn.classList.add("calculator-btn", "backspace");
  equalBtn.innerText = "=";
  clearBtn.innerText = "AC";
  backspaceBtn.innerText = "C";
  calculatorContainer.append(equalBtn, clearBtn, backspaceBtn);
  // generate operation buttons
  for (let operation of operations) {
    const operationBtn = document.createElement("button");
    operationBtn.classList.add("operands", "calculator-btn");
    operationBtn.innerText = operation.symbol;
    operationBtn.onclick = operation.function;
    calculatorContainer.appendChild(operationBtn);
  }
  // generate number buttons
  for (let i = 0; i < 10; i++) {
    const numButton = document.createElement("button");
    numButton.classList.add("calculator-btn");
    numButton.innerText = `${i}`;
    calculatorContainer.appendChild(numButton);
  }
  //add wide equals button
};

const Display = () => {
  const calculatorButtons = document.querySelectorAll(".calculator-btn");
  const calcScreenCurrent = document.querySelector(".screen-current");
  const getOccurrence = (array, value) => {
    return array.filter((v) => v === value).length;
  };
  for (let btn of calculatorButtons) {
    btn.addEventListener("click", () => {
      if (btn.innerText == "AC") {
        calcScreenCurrent.innerText = "";
      } else if (btn.innerText == "C") {
        const updatedScreen = calcScreenCurrent.innerText.slice(0, -1);
        calcScreenCurrent.innerText = updatedScreen;
      } else if (btn.innerText == "=") {
        let result = calculate();
        console.log(result);
        calcScreenCurrent.innerText = String(result);
      } else {
        calcScreenCurrent.innerText += `${btn.innerText}`;
        const numbersToCalculate = calcScreenCurrent.innerText.split("");

        if (
          getOccurrence(numbersToCalculate, "+") > 1 ||
          getOccurrence(numbersToCalculate, "-") > 1 ||
          getOccurrence(numbersToCalculate, "*") > 1 ||
          getOccurrence(numbersToCalculate, "/") > 1
        ) {
          let otherResult = calculate();
          calcScreenCurrent.innerText = String(otherResult);
        } else {
          console.log(numbersToCalculate);
        }
      }
    });
  }
};

export const renderCalculator = renderCalc;
export const populateDisplay = Display;

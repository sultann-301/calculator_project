const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operations = [
  {
    function: add,
    symbol: "+",
  },
  {
    function: subtract,
    symbol: "-",
  },
  {
    function: multiply,
    symbol: "*",
  },
  {
    function: divide,
    symbol: "/",
  },
];
const operate = (operand, x, y) => {
  //   if (!y) {
  //     return x;
  //   }
  for (let operation of operations) {
    if (operation.symbol === operand) {
      console.log(x);
      console.log(y);
      console.log(operand);

      return operation.function(x, y);
    }
  }
};

// console.log(operate("+", 5, 4));
// console.log(operate("-", 5, 4));
// console.log(operate("*", 5, 4));
// console.log(operate("/", 5, 5));
const calculatorContainer = document.querySelector(".container");
const renderCalculator = () => {
  //generate display
  const calcDisplay = document.createElement("div");
  calcDisplay.classList.add("num-display");
  calculatorContainer.appendChild(calcDisplay);
  //generate p tags to hold numbers

  const calcScreenCurrent = document.createElement("p");
  calcScreenCurrent.classList.add("screen-current");
  calcDisplay.appendChild(calcScreenCurrent);

  // equals and clear key
  const equalBtn = document.createElement("button");
  const clearBtn = document.createElement("button");
  equalBtn.classList.add("calculator-btn", "equals");
  clearBtn.classList.add("calculator-btn", "ac");
  equalBtn.innerText = "=";
  clearBtn.innerText = "AC";
  calculatorContainer.append(equalBtn, clearBtn);
  // generate number buttons
  for (let i = 0; i < 10; i++) {
    const numButton = document.createElement("button");
    numButton.classList.add("calculator-btn");
    numButton.innerText = `${i}`;
    calculatorContainer.appendChild(numButton);
  }
  // generate operation buttons
  for (let operation of operations) {
    const operationBtn = document.createElement("button");
    operationBtn.classList.add("operands", "calculator-btn");
    operationBtn.innerText = operation.symbol;
    operationBtn.onclick = operation.function;
    calculatorContainer.appendChild(operationBtn);
  }
};

renderCalculator();

const operands = document.querySelectorAll(".operands");
for (let operand of operands) {
  operand.addEventListener("click", () => {
    console.log("i've been clicked");
  });
}

const calculate = () => {
  const calcScreenCurrent = document.querySelector(".screen-current");

  const firstNum = parseInt(calcScreenCurrent.innerText[0]);
  console.log(firstNum);
  const secondNum = parseInt(calcScreenCurrent.innerText[2]);
  console.log(secondNum);
  const operand = calcScreenCurrent.innerText[1];
  console.log(operand);
  const result = operate(operand, firstNum, secondNum);
  return result;
};

const populateDisplay = () => {
  const calculatorButtons = document.querySelectorAll(".calculator-btn");
  const calcScreenCurrent = document.querySelector(".screen-current");
  for (let btn of calculatorButtons) {
    btn.addEventListener("click", () => {
      if (btn.innerText == "AC") {
        calcScreenCurrent.innerText = "";
      } else if (btn.innerText == "=") {
        let result = calculate();
        console.log(result);
        calcScreenCurrent.innerText = String(result);
      } else {
        console.log("copying text to screen!");
        calcScreenCurrent.innerText += `${btn.innerText}`;
      }
    });
  }
};

populateDisplay();

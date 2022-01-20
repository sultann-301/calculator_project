const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => {
  if (y == 0) {
    return "DIVISION BY ZERO IS FORBIDDEN!!";
  }
  return x / y;
};
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
      return operation.function(x, y);
    }
  }
};

const calculatefunc = () => {
  const calcScreenCurrent = document.querySelector(".screen-current");
  const numbersToCalculate = calcScreenCurrent.innerText.split("");
  console.log(numbersToCalculate);

  const operands = ["+", "-", "*", "/"];

  let foundOperand = null;
  let indexOfOperand = null;
  for (let operand of operands) {
    if (numbersToCalculate.includes(operand)) {
      foundOperand = operand;
      indexOfOperand = numbersToCalculate.indexOf(operand);
    }
  }
  //getting numbers from string array
  const firstNum = parseInt(
    numbersToCalculate.filter((elem, index) => index < indexOfOperand).join("")
  );
  console.log(firstNum);
  const secondNum = parseInt(
    numbersToCalculate.filter((elem, index) => index > indexOfOperand).join("")
  );
  console.log(foundOperand);
  console.log(secondNum);
  const result = operate(foundOperand, firstNum, secondNum);
  return result;
};

export const calculate = calculatefunc;
export { operations };

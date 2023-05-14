const clearBtn = document.getElementById("btn-clear");
const plusMinusBtn = document.getElementById("plusMinusBtn");
const percentBtn = document.getElementById("percentBtn");
const divisionBtn = document.getElementById("divisionBtn");
const multiBtn = document.getElementById("multiBtn");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const dotBtn = document.getElementById("dotBtn");
const equalBtn = document.getElementById("equalBtn");
const btns = document.querySelectorAll(".btn");
const input = document.querySelector(".screen");

clearBtn.addEventListener("click" , () => {
    input.value = "";
    firstNumber = null; 
    operator = null; 
    isSecondNumber = false; 
});

let firstNumber = null;
let operator = null;
let isSecondNumber = false;

btns.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.num;
  
      if (isSecondNumber) {
        input.value = value;
        isSecondNumber = false;
      } else {
        input.value += value;
      }
    });
  });
plusBtn.addEventListener("click", () => {
    if(firstNumber === null){
        firstNumber = parseFloat(input.value);
    }
    operator = "+"
    isSecondNumber = true;
})

minusBtn.addEventListener("click" , () => {
    if(firstNumber === null){
        firstNumber = parseFloat(input.value)
    }
    operator = "-";
    isSecondNumber = true
})

divisionBtn.addEventListener("click" , () => {
    if(firstNumber === null){
        firstNumber = parseFloat(input.value);
    }
    operator = "/";
    isSecondNumber = true;
} )

multiBtn.addEventListener("click" , () => {
    if(firstNumber === null){
        firstNumber = parseFloat(input.value)
    }
    operator = "*";
    isSecondNumber = true;
})

equalBtn.addEventListener("click" , () => {
    if(firstNumber !== null){
        const secondNumber = parseFloat(input.value);
        let result

        switch(operator){
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
            break;
            default:
                result = null ;
                break;
        }
        input.value = result;
        firstNumber = result;
        operator = null;
        isSecondNumber = false;

    }
})

percentBtn.addEventListener("click", () => {
    const currentValue = parseFloat(input.value);
    if (!isNaN(currentValue)) {
      const result = currentValue / 100;
      input.value = result.toString();
      firstNumber = result;
      operator = null;
      isSecondNumber = false;
    }
  });
  

  plusMinusBtn.addEventListener("click", () => {
    const currentValue = parseFloat(input.value);
    if (!isNaN(currentValue)) {
      input.value = (-currentValue).toString();
    }
  });
  
  
  
  
  
  
 
let btns = document.querySelectorAll(".btn");
let clearBtn = document.querySelector(".clear");
let equalBtn = document.querySelector("#equal");
let display = document.querySelector("#display");

console.log(btns);

btns.forEach( function(btn) {
    btn.addEventListener("click", ()=> {
        display.value += btn.innerText;
    })
})

clearBtn.addEventListener("click", () => {
    display.value = " ";
})

equalBtn.addEventListener("click", () => {
    calculateResult();
})


function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (e) {
        console.log(e);
        display.value = "error";
    }
}




// function evaluateExpression(expression) {
//     // Split the expression into tokens
//     const tokens = expression.split(/(\+|\-|\*|\/|\(|\))/);
  
//     // Helper function to perform an operation
//     function performOperation(operator, operand1, operand2) {
//       switch (operator) {
//         case '+': return operand1 + operand2;
//         case '-': return operand1 - operand2;
//         case '*': return operand1 * operand2;
//         case '/': return operand1 / operand2;
//       }
//     }
  
//     // Helper function to evaluate a sub-expression within parentheses
//     function evaluateSubExpression(tokens) {
//       let result = 0;
//       let operator = '+';
  
//       for (let i = 0; i < tokens.length; i++) {
//         const token = tokens[i];
  
//         if (token === '(') {
//           const closingParenIndex = tokens.indexOf(')', i);
//           const subExpression = tokens.slice(i + 1, closingParenIndex);
//           result = performOperation(operator, result, evaluateSubExpression(subExpression));
//           i = closingParenIndex;
//         } else if (token === '+' || token === '-' || token === '*' || token === '/') {
//           operator = token;
//         } else {
//           const operand = parseFloat(token);
//           result = performOperation(operator, result, operand);
//         }
//       }
  
//       return result;
//     }
  
//     return evaluateSubExpression(tokens);
//   }
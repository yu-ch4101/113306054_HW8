document.getElementById('calculate-btn').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const resultElement = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Result = Invalid input! Please enter numbers.";
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      if (num2 === 0) {
        resultElement.textContent = "Result = Error! Division by zero.";
        return;
      }
      result = divide(num1, num2);
      break;
    default:
      resultElement.textContent = "Result = Invalid operator!";
      return;
  }

  resultElement.textContent = `Result = ${result.toFixed(2)}`;
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let display = document.getElementById('display');

// Append values to the display
function appendValue(value) {
  // If the result is shown and the user clicks a number, reset the display
  if (display.value === 'Error' || display.value === '') {
    display.value = value; // Reset the display to the new number
  } else {
    // Check if last character is an operator and prevent adding another operator consecutively
    if (isOperator(value) && isOperator(display.value.slice(-1))) {
      return; // Prevent consecutive operators
    }

    // If the display has an operator at the end, and user presses a number, clear the display for a new entry
    if (isOperator(display.value.slice(-1)) && !isNaN(value)) {
      display.value = ''; // Clear the display to start a new number
    }

    display.value += value;
  }
}

// Check if the character is an operator
function isOperator(character) {
  return ['+', '-', '*', '/', '%'].includes(character);
}

// Perform basic arithmetic operations
function operation(op) {
  // Prevent appending multiple operators consecutively
  if (display.value === '' || isOperator(display.value.slice(-1))) {
    return; // Don't append if it's empty or if the last character is an operator
  }
  display.value += ` ${op} `;
}

// Calculate the result
function calculate() {
  let expression = display.value.trim();
  
  // Check if the expression ends with an operator and remove it before calculating
  if (isOperator(expression.slice(-1))) {
    expression = expression.slice(0, -1); // Remove last operator if present
  }

  try {
    // Now evaluate the expression
    display.value = eval(expression.replace('÷', '/').replace('×', '*'));
  } catch {
    display.value = 'Error'; // Handle errors in expression
  }
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete the last character
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Perform scientific calculations
function scientific(func, arg = null) {
  try {
    let value = parseFloat(display.value) || 0;
    let result;
    switch (func) {
      case 'sin':
        result = Math.sin((value * Math.PI) / 180); // Convert to radians
        break;
      case 'cos':
        result = Math.cos((value * Math.PI) / 180); // Convert to radians
        break;
      case 'tan':
        result = Math.tan((value * Math.PI) / 180); // Convert to radians
        break;
      case 'log':
        result = Math.log10(value);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'pow':
        result = Math.pow(value, arg);
        break;
      case 'exp':
        result = Math.exp(value);
        break;
      default:
        result = 'Error';
    }
    display.value = result;
  } catch {
    display.value = 'Error'; // Handle invalid inputs for scientific functions
  }
}

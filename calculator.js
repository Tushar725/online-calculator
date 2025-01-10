let display = document.getElementById('display');

// Append values to the display
function appendValue(value) {
  display.value += value;
}

// Perform basic arithmetic operations
function operation(op) {
  display.value += ` ${op} `;
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch {
    display.value = 'Error';
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
    display.value = 'Error';
  }
}

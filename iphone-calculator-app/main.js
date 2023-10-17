let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function append(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

updateDisplay();

document.onkeydown = function (e) {
    e = e || window.event;
    let key = e.key;

    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === '=') {
        append(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
};

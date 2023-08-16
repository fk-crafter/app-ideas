const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const counterInput = document.getElementById('counterInput');
const errorMessage = document.getElementById('errorMessage');

let counterValue = 0;
let intervalId = null;


function updateCounter(value) {
  counterValue = value;
  counterInput.value = value;
  hideErrorMessage();
}


function displayErrorMessage() {
  errorMessage.style.display = 'block';
}


function hideErrorMessage() {
  errorMessage.style.display = 'none';
}


function incrementCounter() {
  if (counterValue < 99) {
    counterValue++;
    updateCounter(counterValue);
  } else {
    displayErrorMessage();
  }
}


function decrementCounter() {
  if (counterValue > 0) {
    counterValue--;
    updateCounter(counterValue);
  } else {
    displayErrorMessage();
  }
}


function startIncrement() {
  incrementCounter();
  intervalId = setInterval(incrementCounter, 200);
}


function stopIncrement() {
  clearInterval(intervalId);
}


function startDecrement() {
  decrementCounter();
  intervalId = setInterval(decrementCounter, 200);
}


function stopDecrement() {
  clearInterval(intervalId);
}


function handleInput() {
  const value = parseInt(counterInput.value);

  if (!isNaN(value) && value >= 0 && value <= 99) {
    counterValue = value;
    hideErrorMessage();
  } else {
    displayErrorMessage();
  }
}


incrementButton.addEventListener('mousedown', startIncrement);
incrementButton.addEventListener('mouseup', stopIncrement);
incrementButton.addEventListener('mouseleave', stopIncrement);

decrementButton.addEventListener('mousedown', startDecrement);
decrementButton.addEventListener('mouseup', stopDecrement);
decrementButton.addEventListener('mouseleave', stopDecrement);


counterInput.addEventListener('input', handleInput);

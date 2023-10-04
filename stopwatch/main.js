let ;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.preventDefault();
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }
});

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10); // Met à jour toutes les 10 ms pour les millisecondes
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = Date.now();
  elapsedTime = 0;
  updateTimer();
  isRunning = false;
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  const milliseconds = Math.floor(elapsedTime % 1000);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
  const hours = Math.floor(elapsedTime / 1000 / 60 / 60);

  const formattedTime =
    formatTime(hours) +
    ':' +
    formatTime(minutes) +
    ':' +
    formatTime(seconds) +
    '<span id="milliseconds">' +
    '.' +
    formatMilliseconds(milliseconds) +
    '</span>';

  document.getElementById('timer').innerHTML = formattedTime;
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

function formatMilliseconds(milliseconds) {
  return milliseconds.toString().padStart(3, '0');
}

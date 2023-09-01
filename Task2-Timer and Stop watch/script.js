// Stopwatch
const stopwatchDisplay = document.querySelector('.stopwatch .display');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let stopwatchInterval;
let stopwatchTime = 0;

startButton.addEventListener('click', () => {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
});

resetButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
});

function updateStopwatch() {
    stopwatchTime++;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    stopwatchDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Timer
const timerDisplay = document.querySelector('.timer-display');
const timerInput = document.getElementById('timerInput');
const timerStartButton = document.querySelector('.timer-start');
const timerStopButton = document.querySelector('.timer-stop');
const timerResetButton = document.querySelector('.timer-reset');

let timerInterval;
let timerTime = 0;
let targetTime = 0;

timerStartButton.addEventListener('click', () => {
    targetTime = parseInt(timerInput.value);
    if (!isNaN(targetTime) && targetTime > 0) {
        timerInterval = setInterval(updateTimer, 1000);
        timerInput.disabled = true;
    }
});

timerStopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInput.disabled = false;
});

timerResetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerTime = 0;
    timerInput.value = '';
    timerInput.disabled = false;
    updateTimerDisplay();
});

function updateTimer() {
    if (timerTime >= targetTime) {
        clearInterval(timerInterval);
        timerInput.disabled = false;
    } else {
        timerTime++;
        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    const remainingTime = targetTime - timerTime;
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

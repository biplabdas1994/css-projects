let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(minutes / 60);
    const millisecondsRemainder = milliseconds % 1000;
    const formattedMilliseconds = millisecondsRemainder.toString().padStart(3, '0').substr(0, 2); // Ensure two-digit milliseconds

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${formattedMilliseconds}`;
}


function updateDisplay() {
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function () {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);

        document.getElementById('startBtn').disabled = true;
        document.getElementById('stopBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;

        document.getElementById('startBtn').disabled = false;
        document.getElementById('stopBtn').disabled = true;
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();

    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
}

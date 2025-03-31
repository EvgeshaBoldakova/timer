/* global moment */
const time = document.getElementById("time");
const reduction = document.getElementById("reduction");
const augmentation = document.getElementById("augmentation");

let count = 0;

reduction.addEventListener("click", () => {
    if (count > 0) {
        count--;
        time.textContent = count.toString();
    }
});

augmentation.addEventListener("click", () => {
    count++;
    time.textContent = count.toString();
});


const blockStart = document.getElementById("blockStart");
const blockFinish = document.getElementById("blockFinish");
const startButton = document.getElementById("start");
const countdown = document.getElementById("countdown");
const stopMessage = document.getElementById("stopMessage");

startButton.addEventListener("click", () => {
    let number = parseInt(time.textContent, 10);

    if (number <= 0) return;

    blockStart.style.display = "none";
    blockFinish.style.display = "block";

    let secondsNum = moment.duration(number, "minutes").asSeconds();
    countdown.textContent = displayTime(secondsNum);

    let interval = setInterval(() => {
        secondsNum --;

        countdown.textContent = displayTime(secondsNum);
        if (secondsNum === 0) {
            clearInterval(interval);
            countdown.textContent = "00:00";
            stopMessage.style.display = "block";
        }
    }, 1000);
});

function displayTime(secondsNum) {
    let duration = moment.duration(secondsNum, "seconds");
    let minutes = duration.minutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = duration.seconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return `${minutes}:${seconds}`;
}
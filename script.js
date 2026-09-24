const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const alarmTimeInput = document.getElementById("alarmTime");
const alarmStatus = document.getElementById("alarmStatus");

let alarmTime = null;
let alarmTriggered = false;

const alarmSound = new Audio("alarm.mp3"); // optional

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;

    dateEl.textContent = now.toDateString();

    if (alarmTime === `${hours}:${minutes}` && !alarmTriggered) {
        alarmSound.play();
        alarmStatus.textContent = "⏰ Alarm Ringing!";
        alarmTriggered = true;
    }
}

setInterval(updateClock, 1000);

function setAlarm() {
    alarmTime = alarmTimeInput.value;
    alarmTriggered = false;
    alarmStatus.textContent = `Alarm set for ${alarmTime}`;
}

function clearAlarm() {
    alarmTime = null;
    alarmStatus.textContent = "Alarm cleared";
    alarmSound.pause();
}

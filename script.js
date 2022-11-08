'use strict';

// global variables
const timeEl = document.querySelector('.watch .time');
const startBtnEl = document.getElementById('start');
const stopBtnEl = document.getElementById('stop');
const resetBtnEl = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Button Event Listeners
startBtnEl.addEventListener('click', startTimer);
stopBtnEl.addEventListener('click', stopTimer);
resetBtnEl.addEventListener('click', resetTimer);

// Timer
function timer() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (hrs < 10) {
    hrs = '0' + hrs;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (secs < 10) {
    secs = '0' + secs;
  }

  timeEl.innerText = `${hrs}:${mins}:${secs}`;
}

// START Function
function startTimer() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
  console.log(interval);
}

// STOP Function
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stop();
  seconds = 0;
  timeEl.innerText = '00:00:00';
}

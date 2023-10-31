const timerEl = document.querySelector('.timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 0;
let interval;

function updateTimer() {
  seconds++;

  let hrs = Math.floor(seconds/3600);
  let mins = Math.floor(seconds/60)%60;
  let secs = seconds%60;

  timerEl.innerText = 
    formatTime(hrs) + ':' + 
    formatTime(mins) + ':' +
    formatTime(secs);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function start() {
  if(!interval) interval = setInterval(updateTimer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {  
  stop();
  seconds = 0;
  timerEl.innerText = '00:00:00';
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop); 
resetBtn.addEventListener('click', reset);
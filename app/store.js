let hours;
let min;
let sec;
function initClock() {
  return 1e3 - (new Date).getMilliseconds()
}
function decTime(value) {
  return value < 10 ? '0' + value : value;
}

function getTime() {
  if (sec === 59) {
    sec = 0
    if (min === 59) {
      min = 0
      if (hours === 23) {
        hours = 0
      } else {
        hours += 1
      }
    } else {
      min += 1
    }
  } else {
    sec += 1
  }
  return `${hours} : ${decTime(min)}`
}

function updateClock(emitter) {
  let timer = setInterval(() => {
    emitter.emit('clock', getTime());
  }, 1000);
}

let targetDate = new Date('2020-06-20T00:00:00');

function getCountdown() {
  let currentDate = new Date();
  currentDate.getFullYear();
  let diff = targetDate - currentDate;
  let day = Math.floor(diff / 60 / 60 / 1000 / 24);
  let hours = Math.floor(diff / 60 / 60 / 1000) % 24;

  return `${day} days, ${hours} hours`;
}

module.exports = function(state, emitter) {
  let clockTimer;
  let countdownTimer;
  let c = new Date();
  hours = c.getHours()
  min = c.getMinutes()
  sec = c.getSeconds()

  state.clock = getTime();
  state.countdown = getCountdown();

  function render() {
    emitter.emit('render');
  }
  emitter.on('visible', v => {
    state.visible = v;
    render();
  });
  emitter.on('clock', v => {
    state.clock = v;
    render();
  });
  emitter.on('countdown', v => {
    state.countdown = v;
  });
  emitter.on('DOMContentLoaded', () => {
    window.addEventListener('beforeunload', function(e) {
      this.clearInterval(clockTimer);
      this.clearInterval(countdownTimer);
    });
    setTimeout(() => {
      clockTimer = updateClock(emitter);
    }, initClock());
    countdownTimer = setInterval(() => {
      emitter.emit('countdown', getCountdown());
    }, 1000 * 60 * 60);
  });
};

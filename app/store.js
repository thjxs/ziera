function updateClock(emitter) {
  let tm;
  let timer = setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    if (tm !== min) {
      tm = min;
      emitter.emit('clock', `${hours} : ${min}`);
    }
  }, 100);
}

let targetDate = new Date('2020-06-20T00:00:00');

function updateCountdown() {
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
  state.clock = '--:--';
  state.countdown = updateCountdown();

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
  emitter.on('countdown', () => {
    state.countdown = updateCountdown();
  });
  emitter.on('DOMContentLoaded', () => {
    updateClock(emitter);
    countdownTimer = setInterval(() => {
      emitter.emit('countdown');
    }, 1000 * 60 * 60);
  });
};

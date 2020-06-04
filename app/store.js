import * as timeUtils from './utils';

const minTimeout = 1000 * 60;
const hourTimeout = 1000 * 60 * 60;
let targetDate = new Date('2020-06-20T00:00:00');
let startDate = new Date('2019-09-06T00:00:00');
let clockTimer;
let countdownTimer;

export default function (state, emitter) {
  state.clock = timeUtils.getTime();
  state.countdown = timeUtils.getCountdown(targetDate);
  state.together = timeUtils.getCountdown(startDate);

  function render() {
    emitter.emit('render');
  }

  emitter.on('clock', (v) => {
    state.clock = v;
    render();
  });
  emitter.on('countdown', (v) => {
    state.countdown = v;
  });
  emitter.on('together', (v) => {
    state.together = v;
  });
  emitter.on('DOMContentLoaded', () => {
    window.addEventListener('beforeunload', function (e) {
      this.clearInterval(clockTimer);
      this.clearInterval(countdownTimer);
    });
    setTimeout(() => {
      emitter.emit('clock', timeUtils.getTime());
      clockTimer = setInterval(() => {
        emitter.emit('clock', timeUtils.getTime());
      }, minTimeout);
    }, timeUtils.reachMinTimeout());
    countdownTimer = setInterval(() => {
      emitter.emit('countdown', timeUtils.getCountdown(targetDate));
      emitter.emit('together', timeUtils.getCountdown(startDate));
    }, hourTimeout);
  });
}

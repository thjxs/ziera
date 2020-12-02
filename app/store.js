import Timer from './timer';
import * as timeUtils from './utils';

let targetDate = { monthIndex: 5, day: 20 };
let startDate = new Date('2019-09-06T00:00:00');

export default function (state, emitter) {
  const timer = new Timer(emitter, targetDate, startDate);
  state.clock = timeUtils.getTime();
  state.countdown = timeUtils.getCountdown(targetDate);
  state.together = timeUtils.since(startDate);

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
      timer.clear();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        timer.clear();
      } else {
        timer.update();
      }
    });
    timer.init();
  });
}

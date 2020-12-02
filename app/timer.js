const { getTime, reachMinTimeout, getCountdown, since } = require('./utils');

const minTimeout = 1000 * 60;
const hourTimeout = 1000 * 60 * 60;

class Timer {
  constructor(emitter, targetDate, together) {
    this.targetDate = targetDate;
    this.together = together;
    this.emitter = emitter;
  }

  clear() {
    clearInterval(this.clockTimerId);
    clearInterval(this.countdownTimerId);
  }

  init() {
    setTimeout(() => {
      this.emitter.emit('clock', getTime());
      this.clockTimerId = setInterval(() => {
        this.emitter.emit('clock', getTime());
      }, minTimeout);
    }, reachMinTimeout());

    this.countdownTimerId = setInterval(() => {
      this.emitter.emit('countdown', getCountdown(this.targetDate));
      this.emitter.emit('together', since(this.together));
    }, hourTimeout);
  }
}

export default Timer;

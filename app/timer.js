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

  emitClock() {
    this.emitter.emit('clock', getTime());
  }

  emitCountdown() {
    this.emitter.emit('countdown', getCountdown(this.targetDate));
    this.emitter.emit('together', since(this.together));
  }

  init() {
    setTimeout(() => {
      this.emitClock();
      this.clockTimerId = setInterval(() => {
        this.emitClock();
      }, minTimeout);
    }, reachMinTimeout());

    this.countdownTimerId = setInterval(() => {
      this.emitCountdown();
    }, hourTimeout);
  }

  update() {
    this.emitCountdown();
    this.emitClock();
    this.init();
  }
}

export default Timer;

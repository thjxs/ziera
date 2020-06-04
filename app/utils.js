/**
 * remaining seconds
 */
export function reachMinTimeout() {
  let t = new Date();
  return 60 * 1e3 - t.getSeconds() * 1e3 - t.getMilliseconds();
}

/**
 * 0 => 00, 1 => 01
 * @param {string} value
 */
function decTime(value) {
  return value < 10 ? '0' + value : value;
}

/**
 * get current time
 */
export function getTime() {
  let t = new Date();
  let h = t.getHours();
  let min = t.getMinutes();
  return `${h} : ${decTime(min)}`;
}

/**
 * get countdown of target date
 * @param {Date} t
 */
export function getCountdown(t) {
  let currentDate = new Date();
  currentDate.getFullYear();
  let diff = t - currentDate;
  if (diff < 0) {
    diff = -diff;
  }
  let day = Math.floor(diff / 60 / 60 / 1000 / 24);
  let hours = Math.floor(diff / 60 / 60 / 1000) % 24;

  return `${day} days, ${hours} hours`;
}

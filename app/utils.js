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
 * @param {Object} t
 */
export function getCountdown(t) {
  let now = new Date();
  let y = now.getFullYear();
  let r = new Date(y, t.monthIndex, t.day);
  if (r - now < 0) {
    r = new Date(y + 1, t.monthIndex, t.day);
  }
  const diff = r - now;
  return formattedDate(diff);
}

export function since(date) {
  const now = Date.now();
  const diff = now - date;

  return formattedDate(diff);
}

function formattedDate(diff) {
  const day = Math.floor(diff / 60 / 60 / 1000 / 24);
  const hours = Math.floor(diff / 60 / 60 / 1000) % 24;

  return `${day} days, ${hours} hours`;
}

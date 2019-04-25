/**
 * Author hpysirius
 */

export function formaTime(second = 0) {
  let str = 0;
  const d = Math.floor(second / 60 / 60 / 24);
  const h = Math.floor((second / 60 / 60) % 24);
  const m = Math.floor((second / 60) % 60);
  if (d) {
    str = `${d}天${h}时${m}分`;
  }
  if (!d && h) {
    str = `${h}时${m}分`;
  }
  if (!d && !h) {
    str = `${m}分`;
  }
  return str;
}

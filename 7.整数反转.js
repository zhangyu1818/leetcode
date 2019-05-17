/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let num = 0;
  while (x !== 0) {
    num = num * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  if (num < (-2) ** 31 || num > 2 ** 31 - 1) return 0;
  return num;
};

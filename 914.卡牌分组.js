/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = deck => {
  if (deck.length === 1) return false;
  // 辗转相除法求最大公约数
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  // 求出数字重复出现的次数
  const repeatArr = Object.values(
    deck.reduce((obj, n) => {
      obj[n] === undefined ? (obj[n] = 1) : obj[n]++;
      return obj;
    }, {})
  );
  // 两两相求最大公约数
  for (let i = 0; i < repeatArr.length - 1; i++) {
    if (gcd(repeatArr[i], repeatArr[i + 1]) === 1) return false;
  }
  return true;
};

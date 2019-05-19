/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]] && s[i + 1] !== undefined) num -= map[s[i]];
    else num += map[s[i]];
  }
  return num;
};

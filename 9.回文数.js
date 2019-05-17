/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0) return false;
  const str = x + "";
  let len = str.length - 1;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i]) return false;
  }
  return true;
};
// 整数翻转后判断
// const isPalindrome = x => {
//   if (x < 0) return false;
//   let num = 0,
//     temp = x;
//   while (temp !== 0) {
//     num = num * 10 + (temp % 10);
//     temp = (temp / 10) | 0;
//   }
//   return x === num;
// };

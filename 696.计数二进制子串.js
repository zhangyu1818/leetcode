/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = s => {
  // prv，上一次相同的数字重复的次数
  // cur，当前数字重复的次数，初始值是1，因为不可能是0，最少出现1次
  let prv = 0,
    cur = 1,
    count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    // 如果两两比较相同cur++
    if (s[i] === s[i + 1]) {
      cur++;
    } else {
      // 否则说明遇见不一样的数，上一次重复次数prv等于cur,并重置cur
      prv = cur;
      cur = 1;
    }
    // 如果上次重复次数大于等于当前重复次数,count++
    // 如00111,prv =2(00),cur=1(1),大于的情况匹配的0(01)11，等于情况匹配(0011)1
    if (prv >= cur) count++;
  }
  return count;
};

// 字符串slice遍历
// /**
//  * @param {string} s
//  * @return {number}
//  */
// const countBinarySubstrings = s => {
//   let count = 0;
//   //取出开头的0或1，拼接对应的数，看此子串是否在字符串中处于开头位置
//   const match = str => {
//     const [s] = str.match(/^(0+|1+)/);
//     const e = `${s[0] ^ 1}`.repeat(s.length);
//     const matchStr = s + e;
//     if (str.startsWith(matchStr)) count++;
//   };
//   for (let i = 0; i < s.length - 1; i++) {
//     match(s.slice(i));
//   }
//   return count;
// };

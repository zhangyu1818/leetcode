/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortArrayByParityII = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let cur = arr[i];
    // 下标和数值奇偶不同的判断
    if (cur % 2 !== i % 2) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] % 2 === i % 2) {
          [cur, arr[j]] = [arr[j], cur];
          break;
        }
      }
      arr[i] = cur;
    }
  }
  return arr;
};

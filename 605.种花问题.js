/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;
  // 判断数组只有1位且是0的情况
  if (flowerbed.length === 1 && flowerbed[0] === 0) return n <= 1;
  for (let i = 0; i < flowerbed.length; i++) {
    // 当前地为0
    if (flowerbed[i] === 0) {
      // 左边界的判断
      if (flowerbed[1] === 0 && i === 0) {
        count++;
        i++;
        // 左右都为0
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        count++;
        i++;
        // 右边界
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === undefined) {
        count++;
        break;
      }
    }
  }
  return count >= n;
};

// const canPlaceFlowers = (flowerbed, n) => {
//   let count = 0;
//   // 左右边界的判断
//   flowerbed.push(0);
//   flowerbed.unshift(0);
//   // 1之间相隔的0的地的个数
//   const emptyList = flowerbed
//     .join("")
//     .split("1")
//     .map(v => v.length);
//   for (const empty of emptyList) {
//     if (empty >= 3) {
//       const temp = ~~((empty - 1) / 2);
//       if (temp >= 1) count += temp;
//     }
//   }
//   return count >= n;
// };

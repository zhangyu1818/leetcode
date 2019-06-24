/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumGap = nums => {
  if (nums.length < 2) return 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1])
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
    if (i > 0) {
      let temp = nums[nums.length - i] - nums[nums.length - 1 - i];
      if (temp > max) max = temp;
    }
  }
  return max;
};

// 这个解法显然是不符合题意要求的线性时间复杂度和空间复杂度，只能解出答案了

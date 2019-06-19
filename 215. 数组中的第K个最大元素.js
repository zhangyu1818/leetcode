/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const len = nums.length;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1])
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }
  return nums[len - k];
}
// 冒泡排序循环k次，就只会排到k大的数
// 最简单的方法是调用sort排序后[k-1]

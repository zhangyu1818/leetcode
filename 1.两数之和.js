/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const len = nums.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    const value = target - nums[i];
    if (map[nums[i]] >= 0) return [map[nums[i]], i];
    map[value] = i;
  }
  return [];
};

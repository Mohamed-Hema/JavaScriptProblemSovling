/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// normal approach
const twoSum = (nums, target) => {
  let storage = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

// second approach
function twoSum(nums, target) {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const neededValue = target - currentValue;
    if (previousValues[neededValue] != null) {
      return [previousValues[neededValue], i];
    } else {
      previousValues[currentValue] = i;
    }
  }
  return [];
}

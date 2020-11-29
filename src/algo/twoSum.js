/**
 * 给定数组，返回数组的索引，使它们相加为特定值。
 */
export const twoSum = (nums, target) => {
  const pairs = {}

  for(let i = 0; i < nums.length; i++) {
    const different = target - nums[i]

    const tempKey = pairs[different]
    if (tempKey !== undefined && tempKey !== i) {
      return [tempKey, i]
    }

    pairs[nums[i]] = i
  }
}

// console.log('center twoSum', twoSum([11, 15, 2, 5], 17))
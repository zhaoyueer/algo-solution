/**
 * 三数之和为0
 * @param {*} nums 
 */
const threeSum = (nums) => {
  if (!nums.length) return []

  nums = nums.sort((a, b) => a - b)

  // 最大值小于0 或者 最小值大于0 找不到能满足条件的
  if (nums[0] > 0 || nums[nums.length - 1] < 0) return []

  const result = []
  const n = nums.length
  for(let i = 0;i< n; i++) {
    // 当前值大于0，右侧相加不会等于0
    if (nums[i] > 0) {
      return result
    }

    if (nums[i] === nums[i - 1]) continue

    let l = i + 1
    let r = n - 1
    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r]


      if (sum > 0) {
        while(nums[r] === nums[r - 1]) r--
        r--
      }
      if (sum < 0) {
        while(nums[l] === nums[l + 1]) l++
        l++
      }
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]])

        while(nums[l] === nums[l + 1]) l++
        while(nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  return result
}

console.log('center threeSum', threeSum([-1,0,1,2,-1,-4, 1, -1]));

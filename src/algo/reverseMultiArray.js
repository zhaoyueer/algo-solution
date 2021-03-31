/**
 * 多维数组 反转 [1, [2, [3, [4, null]]]] -> [4, [3, [2, [1, null]]]]
 * @param {Array} target 
 */
const reverseMultiArray = (target) => {
  const stringfiyTarget = target.join()
  const reverse = stringfiyTarget.split(',')
  reverse.pop()

  let result = [null]
  for (let i = 0; i < reverse.length; i++) {
    result.unshift(reverse[i])
    result = [result]
  }

  return result
}

// console.log('center reverseMulti', reverseMultiArray([1, [2, [3, [4, [5, null]]]]]))
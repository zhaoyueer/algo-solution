/**
 * 找出数组中最小的值
 */
const minValueIndex = (target) => {
  if (!Array.isArray(target) || !target.length) return -1

  function condition(value, threshold) {
    return value > threshold
  }

  let minValue = -1
  let minIndex = -1
  for(let i = 0; i < target.length; i++) {
    if (condition(target[i], 0)) {
      if (!condition(minValue, 0)) {
        minValue = target[i]
        minIndex = i
      }
      if (target[i] < minValue) {
        minValue = target[i]
        minIndex = i
      }
    }
  }

  if (condition(minValue, 0)) {
    return minIndex
  }
  return -1
}

const minValueIndex_opt = (target) => 
  target.reduce((targetIndex, value, index, array) => ((value > 0 && (targetIndex === -1 || value < array[targetIndex])) ? index : targetIndex), -1)

const a = [-2,10,21,0,-7,35,7,9,23,18]
// console.log('center minValueIndex', minValueIndex(a))
// console.log('center minValueIndex-before', minValueIndex_opt(a))
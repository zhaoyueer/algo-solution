/**
 * 寻找两个正序数组的中位数 （第k小数）
 * @param {*} num1 
 * @param {*} num2 
 */
const findMedianSortedArrays = (num1, num2) => {
  if (!Array.isArray(num1) || !Array.isArray(num2)) return 0

  const allLength  = num1.length + num2.length
  const isEven = allLength % 2 === 0
  let k = Math.ceil(allLength / 2)

  if (!num1.length) return isEven ? (num2[k - 1] + num2[k]) / 2 : num2[k - 1]
  if (!num2.length) return isEven ? (num1[k - 1] + num1[k]) / 2 : num1[k - 1]

  while(k >= 1) {
    let pointer = Math.floor(k / 2)
    let key = pointer - 1

    if (!pointer) {
      if (num1[k - 1] === (void 0)) {
        return isEven ? (num2[k] + num2[k - 1]) / 2 : num2[k - 1]
      } else if (num2[k - 1] === (void 0)) {
        return isEven ? (num1[k] + num1[k - 1]) / 2 : num1[k - 1]
      }

      if (isEven) {
        if (num1[k] && num1[k] <= num2[k - 1]) {
          return (num1[k-1] + num1[k]) / 2 
        } else if (num2[k] && num2[k] <= num1[k - 1]) {
          return (num2[k-1] + num2[k]) / 2 
        } else {
          return (num1[k-1] + num2[k-1]) / 2
        }
      }

      return Math.min(num1[k-1], num2[k-1])
    }

    if (num1[key] === (void 0)) {
      num2 = num2.slice(pointer)
    } else if (num2[key] === (void 0)) {
      num1 = num1.slice(pointer)
    } else if (num1[key] <= num2[key]) {
      num1 = num1.slice(pointer)
    } else if (num2[key] < num1[key]) {
      num2 = num2.slice(pointer)
    }
    k = k - pointer
  }
}

// console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15, 16, 17]))
console.log(findMedianSortedArrays([0, 0], [0,0]))
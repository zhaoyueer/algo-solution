/**
 * 整数的反向数字
 */
export const reverse = (num) => {
  const sign = num < 0 ? '-' : ''
  const result = Number(sign + String(Math.abs(num)).split('').reverse().join(''))
  return (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) ? 0 : result
}

// console.log('center reverse', reverse(-124323300))
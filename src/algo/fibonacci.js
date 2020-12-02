/**
 * 斐波那契数列，从小往大相加
 */
const fibonacci = (n) => {
  if (n <= 0) return 0
  
  if (n <= 2) return 1

  let num1 = 0
  let num2 = 1
  let result = 0
  for (let i = 1; i < n; i++) {
    result = num1 + num2
    num1 = num2
    num2 = result
  }
  return result
}

// console.log('center fibonacci', fibonacci(40))
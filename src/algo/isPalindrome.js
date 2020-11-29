/**
 * 整数是否是回文
 * @param {*} num 
 */
const isPalindrome = (num) => {
  const Stringify = String(num)
  const reverse = Stringify.split('').reverse().join('')

  return reverse === Stringify
}

// console.log('center isPalindrome', isPalindrome(32))
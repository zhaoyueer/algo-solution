/**
 * 最长公共前缀
 * @param {*} strs 
 */
const longestCommonPrefix = (strs) => {
  strs.sort((prev, next) => prev.length - next.length)

  const shortStr = strs[0]
  const length = shortStr && shortStr.length
  if (!length) return ''

  let result = ''
  for(let i = length; i > 0; i--) {
    const searchStr = shortStr.substr(0, i)
    const newStr = strs.every((str) => {
      return str && str.startsWith && str.startsWith(searchStr)
    })
    if (newStr) {
      result = searchStr
      break
    }
  }

  return result
}

// console.log('center longestCommonPrefix', longestCommonPrefix(["abab","aba","ab"]))
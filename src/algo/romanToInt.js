/**
 * 罗马到整数
 * @param {*} s 
 */
const romanToInt = (s) => {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let prev
  let num = 0
  for (let i = 0; i < s.length; i++) {
    num += romanMap[s[i]]
    if (prev && romanMap[prev] < romanMap[s[i]]) {
      num -= romanMap[prev] * 2
    }
    prev = s[i]
  }

  return num
}

// console.log('center romanToInt', romanToInt('IIIVIX'));
/**
 * 楼梯动态规划
 * 1，最优子结构
 * 2，边界
 */
const stairDynamicPlanning = (n) => {
  if (n === 0) return 0

  if (n === 1) return 1

  if (n === 2) return 2

  let oneNum = 1
  let twoNum = 2
  let numSum
  for (let i = 3; i <= n; i++) {
    numSum = oneNum + twoNum
    oneNum = twoNum
    twoNum = numSum
  }
  return numSum
}

// console.log('center stairDynamicPlanning', stairDynamicPlanning(12))
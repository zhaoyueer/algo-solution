/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const worlds = []
  equations.forEach((equation) => {
    const left = equation[0];
    const right = equation[3];
    if (!worlds[left]) worlds.push(left)
    if (!worlds[right]) worlds.push(right)
  })
  let expression = [...worlds]
  equations.forEach((equation) => {
    if (!(~equation.indexOf('=='))) {
      expression = expression.filter((item) => item !== equation[3])
    }
  })
  return expression.length === worlds.length
};
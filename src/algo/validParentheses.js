/**
 * 有效的括号
 * @param {*} target 
 */
const validParentheses = (target) => {
    if (typeof target !== 'string') {
        return false
    }

    const stack = [];
    let result = false

    for(let i = 0; i < target.length; i++) {
        if (target[i] === '{' || target[i] === '[' || target[i] === '(') {
            stack.push(target[i])
            continue
        }
        const leftParenthese = stack.pop()
        switch (target[i]) {
            case '}':
                result = leftParenthese === '{'
                break
            case ']':
                result = leftParenthese === ']'
                break
            case ')':
                result = leftParenthese === ')'
                break
        }
        if (!result) break
    }

    return result ? !stack.length : result
}

// console.log('center validParenthese', validParentheses('[{[}]'));
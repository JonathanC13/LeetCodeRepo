// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
create a stack for the operands
create Set for operators "+", "-", "*", "/"

iterate i in tokens
    if (tokens[i] in opSet)
        const op2 = stack.pop()
        const op1 = stack.pop()
        let res = 0
        if (tokens[i] === "+")
            res = op1 + op2
        else if ("-")
            res = op1 - op2
        else if ("*")
            res = op1 * op2
        else
            res = op1 / op2

            if (res < 0)
                res = Math.ceil(res)
            else
                res = Math.floor(res)

        operandsStack.push(res)
    else
        operandsStack.push(Number(tokens[i]))

return operandsStack.pop()

- Time: O(n)
- Space: O(n)
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operandsStack = new Array()
    const opSet = new Set(["+", "-", "*", "/"])

    for (let i = 0; i < tokens.length; i ++) {
        if (opSet.has(tokens[i])) {
            const op2 = operandsStack.pop()
            const op1 = operandsStack.pop()
            let res = 0
            if (tokens[i] === '+') {
                res = op1 + op2
            } else if (tokens[i] === '-') {
                res = op1 - op2
            } else if (tokens[i] === '*') {
                res = op1 * op2
            } else {
                res = op1 / op2
                if (res < 0) {
                    res = Math.ceil(res)
                } else {
                    res = Math.floor(res)
                }
            }
            operandsStack.push(res)
        } else {
            operandsStack.push(Number(tokens[i]))
        }
    }
    return operandsStack.pop()
};
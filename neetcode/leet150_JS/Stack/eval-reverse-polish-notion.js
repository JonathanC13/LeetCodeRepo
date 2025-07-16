// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Stack to hold the operands of the equation that await an operator.

iterate tokens
    if tokens[i] is an operator
        // check if invalid exp
        if (stack.length < 2) {
            return null
        }

        let operand2 = stack.pop()
        let operand1 = stack.pop()
        let res = 0
        if ('+')
            res = op1 + op2
        else if ('/')
            // if op2 === 0: return null
            // always truncate toward zero
            res = op1 / op2

            if (res > 0): res = floor(res)
            else: ceil(res)
        etc with '-' and '*'

        stack.push(res)

    else    // an operand
        stack.push(tokens[i])

// valid expression will result in the stack only containing one value
return stack.length === 1 ? stack.pop() : null

- Time: O(n)    // n = tokens.length
- Space: O(n)
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 0) {
        return 0
    }

    const stack = new Array()
    const operators = new Set(['+', '-', '*', '/'])

    for (let i = 0; i < tokens.length; i ++) {
        if (operators.has(tokens[i])) {
            let res = 0
            let op2 = stack.pop()
            let op1 = stack.pop()
            if (tokens[i] === '+') {
                res = op1 + op2
            } else if (tokens[i] === '-') {
                res = op1 - op2
            } else if (tokens[i] === '*') {
                res = op1 * op2
            } else {
                res = op1 / op2
                if (res > 0) {
                    res = Math.floor(res)
                } else {
                    res = Math.ceil(res)
                }
            }

            stack.push(res)
        } else {
            stack.push(Number(tokens[i]))
        }
    }

    return stack.pop()
};
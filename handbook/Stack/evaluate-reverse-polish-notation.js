// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
1. Assumptions
    1. the expression represented by input Array tokens is a valid reverse polish notion.
        If possible it is not, then it flags when an operation appears but the operand stack does not have 2 operands
    2. all calculated outcomes are in 32 bit and will not overflow

2. input validation
    1. the expression represented by input Array tokens is a valid reverse polish notion.
        If possible it is not, then it flags when an operation appears but the operand stack does not have 2 operands
        
3. time and space constraints
    BTTC: O(n)
    Space: O(m) // operand stack

4. edge cases and some test cases
    edge cases
    1. if tokens.length === 0: return 0
    test cases
    1. valid expression
        inputs
            ["2","1","+","3","*"]
        expected output
            9
    2. floor division
        inputs
            ["4","13","5","/","+"]
        expected output
            6

5. visualize by drawing and manually solve
6. break into subproblems
    Since in RPN when an operator appears, it operates on the 2 most recent operands. Therefore a Stack is used to store the order of operands in LIFO.

7. algos
    - stack operations

8. data structures
    - stack
    - array

9. complexity
    Time: O(n)
    Space: O(m) // m = operand stack


 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 0) {
        return 0
    }

    const operators = new Set(["+","-","*","/"])

    const operands = new Array()
    for (let i = 0; i < tokens.length; i ++) {
        if (operators.has(tokens[i])) {
            if (operands.length < 2) {
                return null
            }
            const op2 = operands.pop()
            const op1 = operands.pop()
            let res = null
            if (tokens[i] === "+") {
                res = op1 + op2
            } else if (tokens[i] === '-') {
                res = op1 - op2
            } else if (tokens[i] === '*') {
                res = op1 * op2
            } else if (tokens[i] === "/") {
                res = op1 / op2
                if (res < 0) {
                    res = Math.ceil(res)
                } else {
                    res = Math.floor(res)
                }
            } else {
                return null
            }

            operands.push(res)
        } else {
            operands.push(Number(tokens[i]))
        }
    }

    if (operands.length !== 1) {
        return null
    } else {
        return operands.pop()
    }
};
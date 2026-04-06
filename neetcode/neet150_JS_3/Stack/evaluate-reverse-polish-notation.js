// https://neetcode.io/problems/evaluate-reverse-polish-notation/question

/**
 * 1. Assumptions
 *  1. tokens is a valid arithmetic expression
 *  2. division truncate toward zero
 * 
 * 2. input validation
 *  1. tokens
 *      - tokens instanceof Array
 *      - tokens.length >= 0
 *      - tokens element's are String
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = tokens.length
 *  Space: O(m) // m = stacks for operands
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if tokens.length === 0: return 0
 * 
 *  test cases
 *  1. normal
 *      inputs
 *          tokens = ["1","2","+","3","*","4","-"]
 *      expected output
 *          5
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  iterate tokens
 *      if tokens[i].isNaN === false: push into operand stack
 *      else
 *          pop top 2 operands and perform operation
 * 
 *  The singular element in operand Stack is the result
 * 
 * 7. algos
 *  - stack operations
 * 
 * 8. data structures
 *  - Stack with Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(m)
 */

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if (tokens.length === 0) {
            return 0
        }

        const operands = new Array()
        for (let i = 0; i < tokens.length; i ++) {
            if (isNaN(tokens[i]) === false) {
                operands.push(Number(tokens[i]))
            } else {
                const op2 = operands.pop()
                const op1 = operands.pop()
                if (tokens[i] === '+') {
                    operands.push(op1 + op2)
                } else if (tokens[i] === '-') {
                    operands.push(op1 - op2)
                } else if (tokens[i] === '*') {
                    operands.push(op1 * op2)
                } else {
                    let res = op1 / op2
                    if (res < 0) {
                        res = Math.ceil(res)
                    } else {
                        res = Math.floor(res)
                    }
                    operands.push(res)
                }
            }
        }
        
        return operands.pop()
    }
}

// https://neetcode.io/problems/evaluate-reverse-polish-notation

/*
e.g. 3 + 4 in RPN is 3 4 +

tokens already in RPN

since when an operation is encountered, it performs it on the 2 most recent values. Remember the first popped is the 2nd operand

1. each value, push onto a stack
2. when an operation is encountered, pop 2 values from the stack and perform the operation
3. push the result back onto the stack
4. at the end, the remaining value in the stack is the final answer

**** Be careful of Number("0"), it will return 0 which means false

Time: O(n)
Space: O(n)
*/

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = Array()
        for (let i = 0; i < tokens.length; i ++) {
            
            if (tokens[i] === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (tokens[i] === '-') {
                const val2 = stack.pop()
                const val1 = stack.pop()
                stack.push(val1 - val2)
            } else if (tokens[i] === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (tokens[i] === '/') {
                const val2 = stack.pop()
                const val1 = stack.pop()
                let res = val1 / val2

                if (res > 0) {
                    res = Math.floor(res)
                } else {
                    res = Math.ceil(res)
                }
                stack.push(res)
            } else {
                stack.push(Number(tokens[i]))
            }
            
        }

        return stack.pop()
    }
}

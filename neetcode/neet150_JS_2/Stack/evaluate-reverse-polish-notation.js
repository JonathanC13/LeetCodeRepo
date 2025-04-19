// https://neetcode.io/problems/evaluate-reverse-polish-notation

/*
create a Stack using a Deque

when the element is not an operation, push the value onto the stack

if an operation, pop 2 values from the stack and eval the result, push result back onto the stack
    remember the first popped is the 2nd operand and the next is the 1st
    1st OP 2nd

When tokens is finished, since it is a valid RPN, the only remaining value in the Stack is the final result.

- Time: O(n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = new Deque()

        for (let i = 0; i < tokens.length; i ++) {
            if (tokens[i] === '+') {
                const op2 = stack.popBack()
                const op1 = stack.popBack()
                stack.pushBack(op1 + op2)
            } else if (tokens[i] === '-') {
                const op2 = stack.popBack()
                const op1 = stack.popBack()
                stack.pushBack(op1 - op2)
            } else if (tokens[i] === '*') {
                const op2 = stack.popBack()
                const op1 = stack.popBack()
                stack.pushBack(op1 * op2)
            } else if (tokens[i] === '/') {
                const op2 = stack.popBack()
                const op1 = stack.popBack()
                let quotient = op1 / op2
                quotient = quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient)
                stack.pushBack(quotient)
            } else {
                stack.pushBack(Number(tokens[i]))
            }
        }

        return stack.back()
    }
}

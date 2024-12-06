// https://neetcode.io/problems/evaluate-reverse-polish-notation

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if (tokens.length === 0) {
            return 0
        }

        const ops = new Set(['+', '-', '*', '/'])
        const stack = new Array()

        for (let t of tokens) {
            if (ops.has(t)) {
                const num2 = stack.pop()
                const num1 = stack.pop()

                let res = 0
                switch(t) {
                    case '+': {
                        res = num1 + num2
                        break
                    }
                    case '-': {
                        res = num1 - num2
                        break
                    }
                    case '*': {
                        res = num1 * num2
                        break
                    }
                    case '/': {
                        const quot = num1 / num2
                        res = (quot > 0) ? Math.floor(quot) : Math.ceil(quot)
                        break
                    }
                    default: {
                        break
                    }
                }
                console.log(num1, ' ', t, ' ', num2, ' = ', res)
                stack.push(res)
            } else {
                stack.push(Number(t))
            }
        }

        return (stack.length === 1) ? stack.pop() : null
    }
}

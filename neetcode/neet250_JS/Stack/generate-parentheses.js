// https://neetcode.io/problems/generate-parentheses

/*
n pairs mean n open and n close parentheses

recursive backtracking with stack

track number of open and number of close

Rec(open, close, n, stack, str, result)
- base case 1: if open === n && close === n && stack.length === 0: result.push(str)
- base case 2: if open > n || close > n: return

each step has 2 choices:
1. add open bracket
2. try to add close bracket, check top of stack and if open exists pop it and add close to str

return result

Time: O(n * 2^n)
Space: O(n)
*/

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        const result = []
        const stack = []

        const generate = (open, close, n, stack, str, result) => {
            console.log(stack)
            if (open === n && close === n && stack.length === 0) {
                result.push(str)
            }

            if (open > n || close > n) {
                return
            }

            // 1. try to add an open
            const s1 = Array.from(stack)
            s1.push('(')
            generate(open + 1, close, n, s1, str + '(', result)
            s1.pop()

            // 2. try to add a close
            if (s1[s1.length - 1] === '(') {
                s1.pop()
                generate(open, close + 1, n, s1, str + ')', result)
            }

            return
        }

        generate(0, 0, n, stack, "", result)
        return result
    }
}

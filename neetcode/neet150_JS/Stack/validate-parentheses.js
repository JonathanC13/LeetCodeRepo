// https://neetcode.io/problems/validate-parentheses

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0) {
            return true
        }

        const openning = new Set(['(', '{', '['])
        const closing = new Map([[')','('], ['}', '{'], [']','[']])
        
        const stack = new Array()

        for (let c of s) {
            console.log(stack)
            if (openning.has(c)) {
                stack.push(c)
            } else if (closing.has(c)) {
                if (stack.length === 0 || stack.pop() !== closing.get(c)) {
                    return false
                }
            }
        }

        return !stack.length
    }
}

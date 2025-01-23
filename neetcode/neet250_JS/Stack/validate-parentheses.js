// https://neetcode.io/problems/validate-parentheses

/*
Since when a closing parenthesis is found, need to check the most recent openning parenthesis. LIFO, use Stack

I'll use an Array.

- Time: O(s.length)
- Space: O(s.length)
*/

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0) {
            return true
        }

        const stack = new Array()

        const openningSet = new Set(['(', '{', '['])
        const closingMap = new Map([[')', '('], ['}', '{'], [']', '[']])

        for (let i = 0; i < s.length; i ++) {
            if (openningSet.has(s[i])) {
                // keep the openning parentheses because they need to be closed in order from most recent first
                stack.push(s[i])
            } else if (closingMap.has(s[i])) {
                // when a closing parenthesis is found, it needs to check if the most recent openning parenthesis is its counterpart, else false
                if (stack.length === 0) {
                    return false
                }
                
                const open = stack.pop()
                if (closingMap.get(s[i]) !== open) {
                    return false
                }
            }
        }

        // at the end for the string to be valid parentheses, all the open parentheses must have been closed
        return stack.length === 0 ? true : false
    }
}

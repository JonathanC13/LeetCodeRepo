// https://neetcode.io/problems/valid-parenthesis-string

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        if (s.length === 0) {
            return true
        }

        const openStack = []
        const starStack = []

        for (let i = 0; i < s.length; i ++) {
            if (s[i] === '(') {
                openStack.push(i)
            } else if (s[i] === '*') {
                starStack.push(i)
            } else {
                
                if (openStack.length === 0 && starStack.length === 0) {
                    return false
                } else if (openStack.length !== 0) {
                    openStack.pop()
                } else {
                    starStack.pop()
                }
            }
        }

        while (openStack.length > 0 && starStack.length > 0) {
            if (openStack.pop() > starStack.pop()) {
                return false
            }
        }

        return openStack.length === 0 ? true : false
    }
}

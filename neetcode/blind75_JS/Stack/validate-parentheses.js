// https://neetcode.io/problems/validate-parentheses
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0){
            return true
        }
        const parenth = new Set(['(', ')', '{', '}', '[', ']'])
        const map = new Map([
            [')', "("],
            ['}', "{"],
            [']', "["],
            ])
        const stack = []

        for (let i = 0; i < s.length; i ++) {
            if (parenth.has(s[i])) {
                if (map.has(s[i])) {
                    if (map.get(s[i]) !== stack.pop()){
                        return false
                    }
                } else {
                    stack.push(s[i])
                }
            }
        }

        return stack.length > 0 ? false : true
    }
}

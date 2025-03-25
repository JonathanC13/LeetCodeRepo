// https://neetcode.io/problems/validate-parentheses

/*
edge case 1: if s.length === 0: return true

create a Set for the openning bracket characters
create a Map to hold the k-v pairs
    key: closing bracket
    value: the corresponding openning bracket

create a Stack to maintain which open bracket needs to be closed next for Strig s to be valid parentheses
    Use an Array as the Stack

iterate String s
    if (openSet.has(s[i])) {
        char is an open bracket, push onto Stack
    } else if (closeMap.has(s[i])) {
        closing bracket, need to pop the top of the Stack and check if it is the corresponding openning bracket
        if not correct closing bracket
            return false
    } // else. continue

since iterated String s successfully, return true if stack is empty else false

- Time: O(n)
- Space: O(n)
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

        const openningSet = new Set(['(', '{', '['])
        const closingMap = new Map([[')', '('], ['}', '{'], [']', '[']])

        const stack = new Array()

        for (let i = 0; i < s.length; i ++) {
            if (openningSet.has(s[i])) {
                stack.push(s[i])
            } else if (closingMap.has(s[i])) {
                const open = stack.pop()
                if (closingMap.get(s[i]) !== open) {
                    return false
                }
            }
        }

        return stack.length === 0 ? true : false
    }
}

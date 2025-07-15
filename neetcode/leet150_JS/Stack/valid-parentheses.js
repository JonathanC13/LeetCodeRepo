// https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a set for the valid open parentheses
create a Map for the valid closing parentheses
    key: closing
    val: corresponding open

create a Stack using an Array

iterate s
    if s[i] is a valid open
        Stack.push(s[i])
    else if (s[i] is a valid close)
        // the close parethesis must close the most recent open, check if correct pair
    // else continue

- Time: O(n)    // n = length of s
- Space: O(n)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return true
    }
    const open = new Set(['(', '{', '['])
    const close = new Map([
        [')', '('],
        ['}', '{'],
        [']','[']
    ])
    const stack = new Array()

    for (let i = 0; i < s.length; i ++) {
        if (open.has(s[i])) {
            stack.push(s[i])
        } else if (close.has(s[i])) {
            if (stack.length === 0 || stack.pop() !== close.get(s[i])) {
                return false
            }
        }
    }

    return stack.length === 0 ? true : false
};
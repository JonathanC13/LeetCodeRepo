// https://leetcode.com/problems/valid-parentheses/description/

/**
// create Set for the valid open parentheses characters
const open = new Set(['(', '{', '['])
// create Map for the closing parentheses characters the the valid openning character
const close = new Map([
    [')', '('],
    ['}', '{'],
    [']','[']
])

create an Array as the Stack. Since an incoming parenthesis must close the most recent open parenthesis, the stack will maintain the most recent on the top.

iterate i in String s
    if (s[i] in open)
        push onto stack
    else if (s[i] in close)
        if (stack.length === 0 || the top open bracket in the stack !== appropriate open bracket for this close bracket at s[i]) {
            return false
        }
        pop stack
    // else can ignore

return true if Stack.length === 0 else false    // only true if all open brackets have been closed.

- Time: O(n)
- Space: O(n)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // create Set for the valid open parentheses characters
    const open = new Set(['(', '{', '['])
    // create Map for the closing parentheses characters the the valid openning character
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
            if (stack.length === 0 || stack[stack.length - 1] !== close.get(s[i])) {
                return false
            }
            stack.pop()
        }
    }

    return stack.length === 0 ? true : false
};
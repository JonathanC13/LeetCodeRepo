// https://leetcode.com/problems/backspace-string-compare/description/

/**
create a Stack for s
create a Stack for t

for s
    if s[i] === #
        sStack.pop()
    else
        push onto sStack

for t
    if t[i] === #
        tStack.pop()
    else
        push onto tStack

compare both sStack and tStack

- Time: O(s + t + min(stack))
- Space: O(s + t)
 */

const pushOntoStack = (str, stack) => {
    for (let i = 0; i < str.length; i ++) {
        if (str[i] === '#') {
            stack.pop()
        } else {
            stack.push(str[i])
        }
    }
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const sStack = new Array()
    const tStack = new Array()

    pushOntoStack(s, sStack)
    pushOntoStack(t, tStack)

    while (sStack.length !== 0 || tStack.length !== 0) {
        if (sStack.pop() !== tStack.pop()) {
            return false
        }
    }

    return true
};
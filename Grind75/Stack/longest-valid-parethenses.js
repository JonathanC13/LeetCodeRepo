// https://leetcode.com/problems/longest-valid-parentheses/description/

/*
create stack to hold the open brackets pending to be closed
longest = 0

- Time: O(n)
iterate i in s
    if (s[i] === '(') {
        stack.push(['(',i])
    } else {
        if (stack.length > 0 and stack.top[0] === '(') {
            stack.pop()
        } else {
            stack.push([')',i])
        }
    }

* the remaining items in the stack are invalid parethensis that were left open or had no open to close
if (stack.length === 0) {
    // it means entire s is valid
    return s.length
}

prev ind = s.length // start at s.length to maintain the equation for invalid index - invalid index to get the length inbetween
while (stack.length > 0) {
    // the length of the well formed substrings are from the prev index - top (which is the invalid parenthesis)
    // to invalid to invalid, only want the valid length within so -1, since 0 indexed
    longest = max(longest, prev - popped[1] - 1)
    prev = popped[1]
}
// final is at 0
longest = max(longest, prev)    // since prev is now the length from 0 to invalid, since 0 (valid) to prev (invalid) don't need -1 here

return longest

- Time: O(n)
- Space: O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const sk = new Array()
    let longest = 0

    for (let i = 0; i < s.length; i ++) {
        if (s[i] === '(') {
            sk.push(['(', i])
        } else {
            if (sk.length > 0 && sk[sk.length - 1][0] === '(') {
                sk.pop()
            } else {
                sk.push([')', i])
            }
        }
    }

    if (sk.length === 0) {
        return s.length
    }

    let prev = s.length
    while (sk.length > 0) {
        const popped = sk.pop()
        longest = Math.max(longest, prev - popped[1] - 1)
        prev = popped[1]
    }
    longest = Math.max(longest, prev)

    return longest
};
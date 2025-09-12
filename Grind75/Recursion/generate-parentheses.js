// https://leetcode.com/problems/generate-parentheses/description/

/**
n pairs mean n open brackets and n closed brackets

* {number} n
* {number} open
* {number} closed
* {String[]} stack
* {String[]} paren
* {String[][]} res
recursive
    base case 1: have the correct number of open and closed brackets and only got to the next recursive step if was valid to add.
    if open === n && closed === n:
        res.push(paren)
        return

    // 2 routes; 1. add open bracket. 2. add closed bracket
    if (open < n) {
        stack.push('(')
        rec(n, open + 1, closed, stack, paren += '(', res)
        stack.pop()
    }

    if (stack.length > 0 && closed < n) {
        stack.pop() // use
        rec(n, open, closed + 1, stack, paren + ')', res)
        stack.push('(') // put back so other path has it available
    }

    return

- Time: O(n * 2^n)
- Space: O(n)
    
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = new Array()
    
    rec(n, 0, 0, new Array(), '', res)
    return res
};

const rec = function(n, open, close, stack, paren, res) {
    if (open === n && close === n) {
        res.push(paren)
        return
    }

    if (open < n) {
        stack.push('(')
        rec(n, open + 1, close, stack, paren + '(', res)
        stack.pop()
    }

    if (stack.length > 0 && close < n) {
        stack.pop()
        rec(n, open, close + 1, stack, paren + ')', res)
        stack.push('(')
    }

    return
}
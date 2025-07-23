// https://leetcode.com/problems/generate-parentheses/description/?envType=study-plan-v2&envId=top-interview-150

/*
recursive backtracking. Maintain a variable for the number of open brackets used, the number of closed brackets used, the string, and a Stack to contain open backets that can be closed
    base case 1: if openBrackets === n AND closedBrackets === n
        res.push(str)
        return

    // 2 paths depending if has the resources
    1. if opened < n
        Stack.push('(')
        dfs(n, opened + 1, closed, str + '(', Stack, res)
        Stack.pop()

    2. if closed < n AND Stack.length > 0
        Stack.pop()
        dfs(n, opened, closed + 1, str + ')', Stack, res)
        Stack.push('(')     // put back open bracket for other path

    return

- Time: O(2^n)  // each n has 2 choices, either add ( (if it can) and add ) (if it can). Therefore Time is < O(2^n)
- Space: O(n)   // 2*n = n
*/

const dfs = function(n, opened, closed, str, stack, res) {
    if (opened === n && closed === n) {
        res.push(str)
        return
    }

    if (opened < n) {
        stack.push('(')
        dfs(n, opened + 1, closed, str + '(', stack, res)
        stack.pop()
    }

    if (closed < n && stack.length > 0) {
        stack.pop()
        dfs(n, opened, closed + 1, str + ')', stack, res)
        stack.push('(')
    }

    return
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 0) {
        return []
    }

    const res = new Array()
    dfs(n, 0, 0, '', [], res)
    return res
};
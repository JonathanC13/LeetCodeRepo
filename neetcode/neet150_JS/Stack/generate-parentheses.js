// https://neetcode.io/problems/generate-parentheses

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        if (n === 0) {
            return []
        }

        const res = new Array()

        this.dfs('', res, n, 0, 0)
        return res
    }

    dfs(currStr, res, n, open, close) {
        if (open + close === 2*n) {
            res.push(currStr)
            return
        }

        if (open < n) {
            this.dfs(currStr + '(', res, n, open + 1, close)
        }

        if (close < open) {
            this.dfs(currStr + ')', res, n, open, close + 1)
        }

        return
    }
}

// https://neetcode.io/problems/regular-expression-matching

class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const sL = s.length
        const pL = p.length

        // return this.dfsNoDP(0, 0, s, p, sL, pL)

        const dp = Array(sL + 1).fill().map((e) => {return Array(pL + 1).fill(null)})
        return this.dfsDP(0, 0, s, p, sL, pL, dp)
    }

    dfsDP(i, j, s, p, sL, pL, dp) {
        if (j === pL) {
            return i === sL
        }

        if (dp[i][j] !== null) {
            return dp[i][j]
        }

        let match = i < sL && (p[j] === '.' || s[i] === p[j])
        if (j + 1 < pL && p[j + 1] === '*') {
            dp[i][j] = this.dfsDP(i, j + 2, s, p, sL, pL, dp) || (match && this.dfsDP(i + 1, j, s, p, sL, pL, dp))
        } else {
            dp[i][j] = match && this.dfsDP(i + 1, j + 1, s, p, sL, pL, dp)
        }

        return dp[i][j]
    }

    dfsNoDP(i, j, s, p, sL, pL) {
        if (j === pL) {
            return i === sL
        }

        let match = i < sL && (p[j] === '.' || s[i] === p[j])
        if (j + 1 < pL && p[j + 1] === '*') {
            return this.dfsNoDP(i, j + 2, s, p, sL, pL) || (match && this.dfsNoDP(i + 1, j, s, p, sL, pL))
        }

        if (match) {
            return this.dfsNoDP(i + 1, j + 1, s, p, sL, pL)
        }

        return false
    }
}

// https://neetcode.io/problems/count-subsequences

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        if (t.length === 0) {
            return 0
        }

        //return this.dfsNoDP(0, 0, s, t)

        const dp = Array(s.length).fill().map((e) => {return Array(t.length).fill(-1)})
        const res = this.dfsDP(0, 0, s, t, dp)
        console.log(dp)
        return res
    }

    dfsDP(i, j, s, t, dp) {
        if (j === t.length) {
            // got to end without mismatch
            return 1
        }
        if (i === s.length) {
            return 0
        }
        if (dp[i][j] !== -1) {
            return dp[i][j]
        }

        // since subsequence of String s to match entire String of t, must build the DP from the end by matching String t moving up from the end. If build DP from front, if subset backtracking it will track into values that have been added to DP. e.g. found 'cat' DP {t:1, at: 1}. sequence backtracked to c -> pop c go to 'a', it sees {at:1}, return 1. Wrong
        let res = 0
        res = this.dfsDP(i + 1, j, s, t, dp)
        
        if (s[i] === t[j]) {
            // if match, move to next char
            res += this.dfsDP(i + 1, j + 1, s, t, dp)
        }
        dp[i][j] = res
        return res
    }

    dfsNoDP(i, j, s, t) {
        if (j === t.length) {
            // got to end without mismatch
            return 1
        }
        if (i === s.length) {
            return 0
        }

        // since subsequence of String s to match entire String of t, must build the DP from the end by matching String t moving up from the end. If build DP from front, if subset backtracking it will track into values that have been added to DP. e.g. found 'cat' DP {t:1, at: 1}. sequence backtracked to c -> pop c go to 'a', it sees {at:1}, return 1. Wrong
        let res = 0
        res = this.dfsNoDP(i + 1, j, s, t)
        
        if (s[i] === t[j]) {
            // if match, move to next char
            res += this.dfsNoDP(i + 1, j + 1, s, t)
        }

        return res
    }
}

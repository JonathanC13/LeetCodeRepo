// https://neetcode.io/problems/decode-ways

/*
[1, 26]

recursive dfs
    two options, backtracking
    1. try to take one digit, if 0, return 0
    2. try to take 2, if > 26, return 0

    if reach the end i === s.length, return 1

- Time: O(2^n)
- Space: O(n)

with DP to reduce the time complexity

create dp Array to store the sections that are decodable. new Array(s.length).fill(-1)
if (dp[i] !== -1) {return dp[i]}

- Time: O(n * 2)
- Space: O(n * 2)
*/

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s.length === 0 || s[0] === '0') {
            return 0
        }

        const dp = new Array(s.length).fill(-1)

        return this.dfs(s, 0, dp)
    }

    dfs(s, i, dp) {
        if (i >= s.length) {
            return 1
        }
        if (dp[i] !== -1) {
            return dp[i]
        }

        let decodeWays = 0
        if (s[i] === '0') {
            return 0
        } else {
            decodeWays += this.dfs(s, i + 1, dp)
        }

        if (i + 1 < s.length && (Number(s[i]) === 1 || (Number(s[i]) === 2 && Number(s[i + 1]) <= 6))) {
            decodeWays += this.dfs(s, i + 2, dp)
        }

        dp[i] = decodeWays
        return dp[i]
    }
}

// https://neetcode.io/problems/interleaving-string

/*
method 1: recursive dfs
    at each step 
    1. take char from s1 if match
    2. take char from s2 if match

    base case 1; if at end of s3, true if all chars used from s1 and s2
    if (k === s3.length) {
        return i === s1.length && j === s2.length
    }

    -Time: O(2^(n+m)), n = s1.length, m = s2.length
    -Space: O(n+m)

method 2: improve time with memoization
    create a 2D array
        rows of n + 1
        cols of m + 1
            fill with -1

    each coord not -1 indicates whether can interleave ahead with the current i of s1 and j of s2 combo 

    -Time: O(n * m)
    -Time: O(n * m)

method 3: bottom up with tabulation
    create 2D array 
        rows length n + 1
        cols length n + 1
            fill with false

        dp[s1.length][s2.length] = true
    
    iterate s1 with i from end
        iterate s2 with j from end
            // if can pick a char and match char to s3 && continuing valid interleave
            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true
            }

            // if can pick a char and match char to s3 && continuing valid interleave
            if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true
            }

            
    
    return dp[0][0]

    -Time: O(n * m)
    -Space: O(n * m)
*/

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) {
            return false
        }
        // return this.initdfs(s1, 0, s2, 0, s3, 0)
        // return this.topDown(s1, s2, s3)
        return this.bottomUp(s1, s2, s3)
    }

    bottomUp(s1, s2, s3) {
        const m = s1.length
        const n = s2.length

        const dp = Array.from(new Array(m + 1), (e) => new Array(n + 1).fill(false))
        dp[m][n] = true

        for (let i = m; i >= 0; i --) {
            for (let j = n; j >= 0; j --) {
                if (i < m && s1[i] === s3[i + j] && dp[i + 1][j]) {
                    dp[i][j] = true
                }

                if (j < n && s2[j] === s3[i + j] && dp[i][j + 1]) {
                    dp[i][j] = true
                }
            }
        }
        console.log(dp)
        return dp[0][0]
    }

    topDown(s1, s2, s3) {
        const memo = Array.from(new Array(s1.length + 1), (e) => new Array(s2.length + 1).fill(-1))

        return this.dfs(s1, 0, s2, 0, s3, 0, memo)
    }

    dfs(s1, i, s2, j, s3, k, memo) {
        if (k === s3.length) {
            return i === s1.length && j === s2.length
        }

        if (memo[i][j] !== -1) {
            return memo[i][j]
        }


        if (i < s1.length && s1[i] === s3[k]) {
            if (this.dfs(s1, i + 1, s2, j, s3, k + 1, memo)) {
                return true
            }
        }

        if (j < s2.length && s2[j] === s3[k]) {
            if (this.dfs(s1, i, s2, j + 1, s3, k + 1, memo)) {
                return true
            }
        }

        return false
    }

    initdfs(s1, i, s2, j, s3, k) {
        if (k === s3.length) {
            return i === s1.length && j === s2.length
        }

        let fromS1 = false
        if (i < s1.length && s1[i] === s3[k]) {
            fromS1 = this.initdfs(s1, i + 1, s2, j, s3, k + 1)
            if (fromS1) {
                return true
            }
        }

        let fromS2 = false
        if (j < s2.length && s2[j] === s3[k]) {
            fromS2 = this.initdfs(s1, i, s2, j + 1, s3, k + 1)
            if (fromS2) {
                return true
            }
        }

        return fromS1 || fromS2
    }
}

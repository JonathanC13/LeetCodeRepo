// https://neetcode.io/problems/longest-common-subsequence

/*
method 1: dfs recursive
    each recursive call has 2 options
    1. if char at i of text1 === char at j of text2
        len = 1 + dfs(i + 1, j + 1)

    2. explore subsequence with i + 1 and explore subsequence with j + 1
    len = Math.max(len, dfs(i + 1, j), dfs(i, j + 1))

    -Time: O(2^(m+n))
    -Space: O(m + n)

method 2: dfs with memoization
    -Time: O(m * n)
    -Space: O(m * n)

method 3: bottom up with tabulation
    iterate each char i in text1
        iterate each char j in text2
            if match
                currLen = 1

            // propagate the longest previous subsequence seen up to this match. Math.max
            // 1. match + by getting dp[i-1][j-1], i-1 and j-1 ensures that the subsequence length is from chars before this current i and j
            // 2. prev char sublen where i-1 matched j
            // 3. prev char sublen where i matched j-1
            dp[i][j] = Math.max(currLen + dp[i-1][j-1], dp[i][j - 1])

    -Time: O(m*n)
    -Space: O(m*n)
*/

class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        // return this.initDFS(text1, text2, 0, 0)
        // return this.dfsMemo(text1, text2)
        return this.bottomUp(text1, text2)
    }

    bottomUp(text1, text2) {
        const dp = new Array(text1.length).fill().map((e) => new Array(text2.length).fill(0))

        for (let i = 0; i < text1.length; i ++) {
            for (let j = 0; j < text2.length; j ++) {
                let len = 0
                if (text1[i] === text2[j]) {
                    len = 1
                }
                const prevContSubLen = i > 0 && j > 0 ? dp[i-1][j-1] : 0
                const prevOtherSubLen1 = i > 0 ? dp[i-1][j] : 0
                const prevOtherSubLen2 = j > 0 ? dp[i][j-1] : 0
                dp[i][j] = Math.max(len + prevContSubLen, prevOtherSubLen1, prevOtherSubLen2)
            }
        }
        
        // get longest sub len string
        const res = []
        let i = text1.length - 1
        let j = text2.length - 1
        while (i >= 0 && j >= 0) {
            // find matching char
            const up = i > 0 ? dp[i-1][j] : 0
            const down = j > 0 ? dp[i][j-1] : 0
            if (dp[i][j] === up) {
                // go up
                i -= 1
            } else if (dp[i][j] === down) {
                // go left
                j -= 1
            } else {
                if (text1[i] === text2[j]) {
                    res.push(text1[i])
                }

                i -= 1
                j -= 1
            }
        }
        console.log(res.reverse())

        return dp[text1.length-1][text2.length-1]
    }

    dfsMemo(text1, text2) {
        const memo = new Array(text1.length).fill().map((e) => new Array(text2.length).fill(-1))

        this.dfs(text1, text2, 0, 0, memo)
        return memo[0][0]
    }

    dfs(text1, text2, i, j, memo) {
        if (i === text1.length || j === text2.length) {
            return 0
        }
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }

        let currLen = 0
        if (text1[i] === text2[j]) {
            currLen = 1 + this.dfs(text1, text2, i + 1, j + 1, memo)
        }

        memo[i][j] = Math.max(currLen, this.dfs(text1, text2, i + 1, j, memo), this.dfs(text1, text2, i, j + 1, memo))
        return memo[i][j]
    }

    initDFS(text1, text2, i, j) {
        if (i === text1.length || j === text2.length) {
            return 0
        }

        let currSubLen = 0
        if (text1[i] === text2[j]) {
            currSubLen = 1 + this.initDFS(text1, text2, i + 1, j + 1)
        }

        currSubLen = Math.max(currSubLen, this.initDFS(text1, text2, i + 1, j), this.initDFS(text1, text2, i, j + 1))
        return currSubLen
    }
}

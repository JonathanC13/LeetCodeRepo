// https://neetcode.io/problems/longest-common-subsequence

/*
recursive dfs
    when 1 if the char at text1[i] === text2[j] + move to next chars i + 1 and j + 1

    if not match
    return the max length subsequence searching for either:
        1. char text1[i], so move j + 1 in search for text1[i] char
        2. char text1[j], so move i + 1 in search for text1[j] char

    - Time: O(2^(m + n))
    - Space: O(m + n)

reduce time complexity with memo
    - Time: O(m * n)
    - Space: O(m * n)
*/

class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        if (text1.length === 0 || text2.length === 0) {
            return 0
        }
        const memo = Array.from(new Array(text1.length), (v) => new Array(text2.length).fill(-1))
        const res = this.dfs(text1, text2, 0, 0, memo)
        console.log(memo)
        return res
    }

    dfs(text1, text2, i, j, memo) {
        if (i === text1.length || j === text2.length) {
            return 0
        }

        if (memo[i][j] !== -1) {
            return memo[i][j]
        }

        if (text1[i] === text2[j]) {
            memo[i][j] = 1 + this.dfs(text1, text2, i + 1, j + 1, memo)
        } else {
            memo[i][j] = Math.max(this.dfs(text1, text2, i, j + 1, memo), this.dfs(text1, text2, i + 1, j, memo))
        }

        return memo[i][j]
    }
}

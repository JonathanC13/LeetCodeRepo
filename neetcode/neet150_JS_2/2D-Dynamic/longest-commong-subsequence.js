// https://neetcode.io/problems/longest-common-subsequence

/*
recursive dfs
    base case 1: if either text >= length return 0 since no more characters to compare

    if the char at current indexes match
        return 1 + next indexes path longest match; i + 1, j + 1

    else explore paths when match i with j + 1 and i + 1 with j. return max (longest common subsequence)

- Time: O(2^(i+j))
- Space: O(i * j)

Reduce time with memo
- Time: O(i * j)
- Space: O(i * j)
*/

class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = new Array(text1.length).fill().map((e) => new Array(text2.length).fill(-1))
        return this.dfs(text1, text2, 0, 0, memo)
    }

    dfs(text1, text2, i, j, memo) {
        if (text1.length === i || text2.length === j) {
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

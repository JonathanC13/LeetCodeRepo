// https://leetcode.com/problems/longest-common-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

/*
recursive dfs
    base case 1: if i >= text1.length || j >= text2.length return 0

    3 paths
    1. If text1 at i === text2 at j. match = 1 + dfs(i + 1, j + 1)
    else
        2. look for match of text1 at i. looki = dfs(i, j + 1)
        3. look for match of text2 at j. lookj = dfs(i + 1, j)
        4. try diff chars. diff = dfs(i + 1, j + 1)

    return max(looki, lookj, diff)

- Time: O(3^(m + n))    // each char has max 3 paths
- Space: O(m + n)

* reduce time complexity with memo
2D Array to save the length of the common subsequence in row and col
- Time: O(m * n)
- Space: O(m * n)
*/

const dfs = (text1, text2, i, j) => {
    if (i >= text1.length || j >= text2.length) {
        return 0
    }

    if (text1[i] === text2[j]) {
        return 1 + dfs(text1, text2, i + 1, j + 1)
    }

    const looki = dfs(text1, text2, i, j + 1)
    const lookj = dfs(text1, text2, i + 1, j)
    const diff = dfs(text1, text2, i + 1, j + 1)
    return Math.max(looki, lookj, diff)
}

const dfsMemo = (text1, text2, i, j, memo) => {
    if (i >= text1.length || j >= text2.length) {
        return 0
    }
    if (memo[i][j] !== -1) {
        return memo[i][j]
    }
 

    if (text1[i] === text2[j]) {
        memo[i][j] = Math.max(memo[i][j], 1 + dfsMemo(text1, text2, i + 1, j + 1, memo))
        return memo[i][j]
    }

    const looki = dfsMemo(text1, text2, i, j + 1, memo)
    const lookj = dfsMemo(text1, text2, i + 1, j, memo)
    const diff = dfsMemo(text1, text2, i + 1, j + 1, memo)

    memo[i][j] = Math.max(looki, lookj, diff)
    return memo[i][j]
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // without memo
    // return dfs(text1, text2, 0, 0)

    // with memo
    const memo = Array.from(new Array(text1.length), (e) => new Array(text2.length).fill(-1))
    const res = dfsMemo(text1, text2, 0, 0, memo)
    return res
};
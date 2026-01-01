// https://leetcode.com/problems/longest-common-subsequence/

/**
1. Assumptions
    1. characters are lowercase English chars

2. input validation
    regex = '\^[a-z]*$\'

3. time and space constraints
    BTTC: O(n * m)
    Space: O(n * m)

4. edge cases and some test cases
    edge cases
    1. if text1.length === 0 || text2.length === 0: return 0

    test cases
    1. has a common subsequence
        inputs
            text1 = "abcde", text2 = "ace" 
        expected output
            3
    2. no matches
        inputs
            text1 = "abc", text2 = "def"
        expected output
            0

5 visualize by drawing and manually solve
6. break into subproblems
    starting with recursiive backtracking to include and exclude characters for common subsequence
        base case 1
        if i >= text1.length || j >= text2.length
            return 0

        // 3 paths
        // 1. match, 2. move text1 char forward, 3. move text2 char forward
        // Time: O(n * m * 2^(n + m))

        if (text1[i] === text2[j]) {
            return rec(i + 1, j + 1, ...) + 1
        }

        return Math.max(rec(i, j + 1, ...), rec(i + 1, j, ...))

    To reduce time complexity, use dynamic programming memoization
        memoization structure of 2D Matrix
            - rows = text1.length for its characters
            - cols = text2.length for its characters
            - fill with -1
            - The cell represents the longest common subsequence from r in text1 and c in text2 to the end of both Strings
        Reduces Time complexity to O(n * m)

7. algos
    - recursive backtracking
    - dp memoization

8. data structures
    - Array

9. Complexity
    Time: O(n * m)
    Space: O(n * m)
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text1.length === 0 || text2.length === 0) {
        return 0
    }

    const rec = (text1, i, text2, j, memo) => {
        // console.log(i, j)
        if (i >= text1.length || j >= text2.length) {
            return 0
        }
        if (memo[i][j] !== -1) {
            // console.log('hit', i, j, memo[i][j])
            return memo[i][j]
        }

        if (text1[i] === text2[j]) {
            memo[i][j] = rec(text1, i + 1, text2, j + 1, memo) + 1
        } else {
            memo[i][j] = Math.max(rec(text1, i, text2, j + 1, memo), rec(text1, i + 1, text2, j, memo))
        }
        return memo[i][j]
    }
    
    const memo = new Array(text1.length).fill().map((e) => new Array(text2.length).fill(-1))
    const res = rec(text1, 0, text2, 0, memo)
    // console.log(memo)
    return res
};
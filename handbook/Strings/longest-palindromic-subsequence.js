// https://leetcode.com/problems/longest-palindromic-subsequence/

/**
1. Assumptions
    - lowercase English characters

2. input validation
    ...

3. Time/space constraints
    BTTC: O(n^2)
    Space: O(n) // recursive stack

4. Some test cases and edge cases
    edge cases
    1. if s.length === 0: return 0
    some test cases
    1. s = ''   // expected = 0
    2. s = 'bbbab'  // expected = 4
    3. s = 'apple'  // expected = 2

5. visualize by drawing and manually solve
6. break into subproblems
    brute: Time: O(2^n) // each char has 2 paths: use, not use
        since subsequence, need to use recursive backtracking to choose whether to use the current character or not.
        Longest common subsequence solution. When i === s.length: if substring === substring.reverse() is true then update max palindromic length

    Need to reduce the time complexity to O(n^2) with dynamic programming with memo
        first String is s
        second String is s reversed, t

        i to track index in s, j to track index in t

        recursive backtracking
            base case 1
                if i or j out of bounds: return 0

            base case 2:
                if memo[i][j] !== -1: return memo[i][j]
            
            base case 3: match
                if s[i] === t[j]
                    return 1 + rec(..., i + 1, j + 1)   // since the chars match, increment both since these evaluated.

            // if no match, need to attempt to find match for current i by moving j up and j by moving i up
            const matchi = rec(..., i, j + 1)
            const matchj = rec(..., i + 1, j)

            memo[i][j] = Math.max(matchi, matchj)
            return memo[i][j]

7. algo
    Brute:
        - recursive backtracking

8. data structure
    Brute:
        - Input Array

9. Complexity
    Brute:
        - Time: O(2^n)
        - Space: O(n)
 */

const brute = function(s, i, currStr) {
    if (i === s.length) {
        if (currStr === currStr.split('').reverse().join('')) {
            return currStr.length
        } 
        return 0
    }

    // 1. don't use current char
    const notUse = brute(s, i + 1, currStr)

    // 2. use current char
    const use = brute(s, i + 1, currStr + s[i])

    return Math.max(notUse, use)
}

const dp = function(s, t, i, j, memo) {
    if (i === s.length || j === t.length) {
        return 0
    }

    if (memo[i][j] !== -1) {
        console.log('hit', i, j)
        return memo[i][j]
    }

    if (s[i] === t[j]) {
        return 1 + dp(s, t, i + 1, j + 1, memo)
    }

    const matchi = dp(s, t, i, j + 1, memo)
    const matchj = dp(s, t, i + 1, j, memo)
    memo[i][j] = Math.max(matchi, matchj)
    return memo[i][j]

}

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    if (s.length === 0) {
        return 0
    }
    // return brute(s, 0, '')   // as expected TLE.
    const n = s.length
    const memo = Array.from(new Array(n), (e) => new Array(n).fill(-1))
    const res = dp(s, s.split('').reverse().join(''), 0, 0, memo)
    console.log(memo)
    return res
};
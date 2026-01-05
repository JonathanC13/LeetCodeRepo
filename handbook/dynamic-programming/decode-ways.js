// https://leetcode.com/problems/decode-ways/

/**
1. Assumptions
    1. Can contain leading zeroes

2. input validation
    1. s
        - s instanceof String
        - s.length >= 0
        - regex = '/^[0-9]*$/'

3. time and space constraints
    BTTC: O(n)
    Space: O(n)

4. edge cases and some test cases
    edge cases
    1. if s.length === 0 || Number(s) === 0 || if s[0] === '0': return 0

    test cases
    1. can decode
        inputs
            s = '1224'
        expected output
            4

    2. cannot decode
        inputs
            s = '06'
        expected output
            0

5. visualize by drawing and manaully solve
6. break into subproblems
    - recursive backtracking solution first
        base case 1: can get to end
        if (i === s.length) {
            return 1
        }

        base case 2:
        if (i > s.length) {
            return 0
        }

        // only continue on path if can decode:
        // singe digit + 2 digit

        let ways = 0
        if (s[i] >= 1 && s[i] <= 9) {
            ways += rec(i + 1, s, ...)
        }

        if (i + 1 < s.length && (s[i] === 1 || (s[i] === 2 && s[i + 1] <= 6))) {
            ways += rec(i + 2, s, ...)
        }

        return ways

        Time: O(n * 2^n)

    - reduce time complexity with dynamic programming memoization
        1D Array for memoization
            - length = s.length
            - fill with -1
            - each index represents the number of ways to end from that index forward

        Time: O(n)
        Space: O(n)

7. algos
    - recursive backtracking
    - dp memoization

8. data structures
    - Arrays
    - recursive Stack

9. complexity
    Time: O(n)  // n = s.length
    Space: O(n)


 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0 || Number(s) === 0 || s[0] === '0') {
        return 0
    }

    const rec = (s, i, memo) => {
        if (i > s.length) {
            return 0
        }
        if (i === s.length) {
            return 1
        }
        if (memo[i] !== -1) {
            // console.log('hit', i)
            return memo[i]
        }

        let ways = 0

        if (Number(s[i]) >= 1 && Number(s[i]) <= 9) {
            ways += rec(s, i + 1, memo)
        }

        if (i + 1 < s.length && (Number(s[i]) === 1 || (Number(s[i]) === 2 && Number(s[i + 1]) <= 6))) {
            ways += rec(s, i + 2, memo)
        }
        memo[i] = ways
        return memo[i]
    }

    const memo = new Array(s.length).fill(-1)
    const res = rec(s, 0, memo)
    // console.log(memo)
    return res
};
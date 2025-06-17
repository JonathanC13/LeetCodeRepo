// https://leetcode.com/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=leetcode-75

/*
if n === 0: return 0
if n === 1: return 1
if n === 2: return 1

recursively call func with n - 1
- Time: O(3^n)
- Space: O(n)


reduce time complexity with dp memo
- Time: O(n)
- Space: O(n)
*/

const dp = (n, memo) => {
    if (memo[n] !== -1) {
        return memo[n]
    }

    memo[n] = dp(n - 3, memo) + dp(n - 2, memo) + dp(n - 1, memo)
    return memo[n]
}

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo = new Array(n + 1).fill(-1)
    memo[0] = 0
    memo[1] = 1
    memo[2] = 1

    dp(n, memo)
    return memo[n]
};
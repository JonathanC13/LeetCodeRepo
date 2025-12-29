// https://leetcode.com/problems/coin-change/

/**
1. Assumptions
    1. infinite number of each coin

2. input validation
    1. coins
        - coins instanceof Array === true
        - coins items are Numbers that are > 0
    2. amount
        - amount instanceof Number === true

3. time and space constraints
    BTTC: O(n)  // n = amount
    Space: O(n) // n for memo

4. edge cases and some test cases
    edge cases
    1. if coins.length === 0 || amount === 0: return -1
    test cases
    1. has a combination
        inputs
            coins = [1,2,5], amount = 11
        expected output
            3
    2. no combination
        inputs
            coins = [4,5], amount = 3
        expected output
            -1

5. visualize by drawing and manually solve
6. break into subproblems
    recursive backtracking to try different combinations and memo to reduce time complexity by storing previously calculated subproblems

    create memo Array of length amount + 1. fill with amount + 2. amount + 2 since impossible to have solution that requires amount + 2 number of coins.
    target is amount so memo[amount] = 0 since if at amount no number of coins (assuming coins > 0) will equate to the amount

    rec
        base case 1
        if i > amount:
            return amount

        base case 2
        if memo[i] < amount + 2:  // amount + 2 means not yet calculated number of coins, if lower it has been previously
            return memo[i]

        set up backtracking by creating recursive stack to the end
        rec(i + 1, ...)

        // iterate every coin to try combinations that can reach the amount
        for coins
            memo[i] = min(memo[i], rec(i + coins[j], ...) + 1)  // + 1 for the current coin used in combination

        return

    final solution is in memo[0]

7. algos
    - recursive backtracking with memoization for the dynamic programming

8. data structures
    - Array

9. Complexity
    Time: O(n)
    Space: O(n)

        
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (coins.length === 0 || amount === 0) {
        return 0
    }

    const memo = new Array(amount + 1).fill(-1)
    memo[amount] = 0

    const rec = function(i, amount, coins, memo) {
        if (i > amount) {
            return Number.POSITIVE_INFINITY
        }

        if (memo[i] !== -1) {
            return memo[i]
        }

        // rec(i + 1, amount, coins, memo)
        numCoins = Number.POSITIVE_INFINITY

        for (let coin of coins) {
            numCoins = Math.min(numCoins, rec(i + coin, amount, coins, memo) + 1)
        }

        memo[i] = numCoins
        return memo[i]
    }

    rec(0, amount, coins, memo)
    // console.log(memo)
    return memo[0] === Number.POSITIVE_INFINITY ? -1 : memo[0]
};
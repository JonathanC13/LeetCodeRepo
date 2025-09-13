// https://leetcode.com/problems/coin-change/

/**
recursive backtracking with memo

main
    create memo with length amount + 1. fill with [-1, []]  // for solution save the combination in index 1
    init states:
        memo[amount] = [0,[]]    // since if get here there is a valid combination

    rec(coins, amount, 0, memo)
    return memo[0]

* {number[]} coins
* {number} amount
* {number} currSum
* {number[]} memo
rec
    base case 1:
    if (currSum > amount) {
        return [nfin, []]
    }
    base case 2
    if memo[currSum][0] !== -1 
        return memo[currSum]

    let minCoins = infin
    let minCombo = []

    iterate i in the coins
        const path = rec(coins, amount, currSum + coins[i], memo)
        if (path[0] < minCoins) {
            // found path with lower number of coins used
            minCoins = path[0] + 1  // + 1 for this coin used
            minCombo = [coins[i], ...path[1]]
        }

    memo[currSum] = [minCoins, minCombo]
    return memo[currSum]

- Time: O(amount * coins)
- Space: O(amount)
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = new Array(amount + 1).fill().map((e) => [-1, new Array()])
    memo[amount] = [0, []]
    rec(coins, amount, 0, memo)
    // console.log(memo[0]) // leetcode out of mem if store the combo for large test case, remove.
    return memo[0][0] === Number.POSITIVE_INFINITY ? -1 : memo[0][0]
};

const rec = function(coins, amount, currSum, memo) {
    if (currSum > amount) {
        return [Number.POSITIVE_INFINITY, new Array()]
    }

    if (memo[currSum][0] !== -1) {
        return memo[currSum]
    }

    let minCoins = Number.POSITIVE_INFINITY
    let minCombo = new Array()

    for (let c = 0; c < coins.length; c ++) {
        const path = rec(coins, amount, currSum + coins[c], memo)
        if (path[0] < minCoins) {
            minCoins = path[0] + 1  // + 1 for this coin
            // minCombo = [coins[c], ...path[1]]
        }
    }

    memo[currSum] = [minCoins, minCombo]
    return memo[currSum]
}
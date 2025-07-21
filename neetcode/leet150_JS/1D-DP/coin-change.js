// https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=top-interview-150
/*
- recursive backtracking and improve time compelxity with 1D DP

main
    sort coins in non-ascending, so that the larget coins are used first.

    create Array of length amount + 1. fill with -1.    // each index will hold the min coins to satisfy amount (to 0)
        // NOTE: fill with -1 NOT POSITIVE INFINITY since the recursion takes more time to reference it? Leads to TLE
    initial state memo[0] = 0


recursive backtracking
    base case 1: if amount < 0
        return POS INFIN
    //base case 2: if amount === 0
        //return 0
    base case 2: if memo[amount] !== -1: return memo[i]

    minCoins = pos infin
    // to traverse all coins to choose the coin for the path
    iterate the coins
        // must eval each coin
        minCoins = min(minCoins, dfs(coins, amount - coins[i]), memo)

    memo[amount] = minCoins
    return memo[amount]

- Time: O(n * c.length)
- Space: O(n)
*/

const dfs = function(coins, amount, memo) {
    if (amount < 0) {
        return Number.POSITIVE_INFINITY
    }
    if (memo[amount] !== -1) {
        return memo[amount]
    }

    let minCoins = Number.POSITIVE_INFINITY
    for (let i = 0; i < coins.length; i ++) {
        minCoins = Math.min(minCoins, dfs(coins, amount - coins[i], memo) + 1)
    }

    memo[amount] = minCoins
    return memo[amount]
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort((a,b) => b - a)
    // console.log(coins)
    const memo = new Array(amount + 1).fill(-1)
    memo[0] = 0

    const res = dfs(coins, amount, memo)
    // console.log(memo)
    // if want the combination, perform greedy recursive from larget denomination first and try to reach target. The first time it is reached it is the min number of coin combo.
    return res === Number.POSITIVE_INFINITY ? -1 : res
};
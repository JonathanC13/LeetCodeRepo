// https://neetcode.io/problems/coin-change

/*
recursive backtrack with memo
rec:
    n coins paths, each recur step, try each coin to see if can reach the target

memo
    Array of size: amount. Fill with -1

- Time: O(n * c). n = amount. c = coins
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) {
            return 0
        }

        const memo = new Array(amount + 1).fill(-1)

        this.dfs(coins, amount, memo)
        console.log(memo)
        return memo[amount] === Number.POSITIVE_INFINITY ? -1 : memo[amount]
    }

    dfs(coins, amount, memo) {
        if (amount === 0) {
            return 0
        }
        if (amount < 0) {
            return Number.POSITIVE_INFINITY
        }
        if (memo[amount] !== -1) {
            return memo[amount]  // already calculated min coins to get amount
        }
        
        let minCoins = Number.POSITIVE_INFINITY
        for (let c = 0; c < coins.length; c ++) {
            let coinsUsed = this.dfs(coins, amount - coins[c], memo) + 1
            minCoins = Math.min(minCoins, coinsUsed)
        }
        
        memo[amount] = minCoins
        return minCoins
    }
}

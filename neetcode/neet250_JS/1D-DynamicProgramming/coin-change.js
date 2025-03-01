// https://neetcode.io/problems/coin-change

/*
- edge case 1: if coins.length === 0: return -1

unlimited use of same coin, in each recursive call start the coin index at 0

dfs recursive
    if (sum === amount) {
        return 0
    }

    minCoins = Positive Inf
    iterate the coins and add to sum.
        if (sum + coins[i] <= amount) {
            ret = dfs(coins, amount, sum + coins[i])
            minCoins = Math.min(minCoins, ret + 1)
        }
        
    return minCoins

- Time: O(n^amount)
- Space: O(amount). e.g amount = 5, coins = [1]

Use Memo dp Map for already calculated amount and minCoins
dp = new Map(). key = amount, val = minCoins to the amount

- Time: O(n * amount)
- Space: O(amount)
*/

class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (coins.length === 0) {
            return -1
        }
        const dp = new Map()
        const minCoins = this.dfs(coins, amount, dp)
        return minCoins === Number.POSITIVE_INFINITY ? -1 : minCoins
    }

    dfs(coins, amount, dp) {
        if (amount === 0) {
            return 0
        }
        if (dp.has(amount)) {
            return dp.get(amount)
        }
        
        let minCoins = Number.POSITIVE_INFINITY
        for (let i = 0; i < coins.length; i ++) {
            if (amount - coins[i] >= 0) {
                minCoins = Math.min(minCoins, this.dfs(coins, amount - coins[i], dp) + 1)
            }
        }
        dp.set(amount, minCoins)
        return dp.get(amount)
    }
}

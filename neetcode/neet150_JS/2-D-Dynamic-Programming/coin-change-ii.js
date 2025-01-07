// https://neetcode.io/problems/coin-change-ii

class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        if (coins.length === 0) {
            return 0
        }

        const n = coins.length
        const dp = Array(n + 1).fill().map((e) => {return Array(amount + 1).fill(0)})

        // initial states, first cols is 1 since [0,0] is 1 and then 1 combo is propagated down
        for (let r = 0; r < dp.length; r ++) {
            dp[r][0] = 1 
        }

        for (let r = 1; r < dp.length; r ++) {
            const coin = coins[r-1]
            for (let c = 1; c < dp[0].length; c ++) {
                // if curr coin is <= curr amount, evaluate combo to sum with purely itself
                if (coin <= c) {
                    dp[r][c] = dp[r][c - coin]
                }

                // add the prev coin's combos
                dp[r][c] += dp[r - 1][c]
                
            }
        }

        // console.log(dp)
        return dp[n][amount]

    }
}

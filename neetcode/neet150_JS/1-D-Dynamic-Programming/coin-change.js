// https://neetcode.io/problems/coin-change

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
        const n = amount + 1
        
        const dp = Array(n).fill(n)
        dp[amount] = 0

        for (let i = n - 1; i >= 0; i --) {
            
            for (let coin of coins) {
                if (i + coin < n) {
                    dp[i] = Math.min(dp[i], dp[i + coin] + 1)
                }
            }
        }

        const combo = []
        if (dp[0] !== n) {
            let coinIdx = 0
            for (let i = 0; i < n; i ++) {
                if (dp[i] === dp[coinIdx] - 1) {
                    combo.push(i - coinIdx)
                    coinIdx = i
                }
            }
        }
        console.log(combo)
        return (dp[0] === n ? -1 : dp[0])
    }
}

// https://neetcode.io/problems/coin-change

class Solution {
    /*
    DP bottom up
    create a dp table with the length + 1 of the amount
    eg. amount = 12. 0 - 12
    for each index in dp, check which coins can be used in this space + the previous num of coins combination (amount - coin value)
        If there are multiple, take the min number
    */
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) {return 0}
        const dpTable = Array(amount + 1).fill(amount + 1)
        dpTable[0] = 0

        for (let i = 1; i <= amount; i ++) {
            // eval each coin
            for (let val of coins) {
                if (i - val < 0) {
                    continue
                } else {
                    dpTable[i] = Math.min(dpTable[i], dpTable[i - val] + 1)
                }
            }
        }

        if (dpTable[amount] === amount + 1) {
            return -1
        } else {
            return dpTable[amount]
        }
    }
}

// https://neetcode.io/problems/coin-change

/*
edge case 1: if amount === 0: return 0

create a memo Map that saves the min number of coins that got to the amount.
    key = index
    value = min number of coins to amount

- Time: O(coins * n)
- Space: O(n)

thoughts, if want the path
    in the Map, also save the final path

    then at the end, start with the Map key = min then subtract the last value in the path
    key = amount
    val = [num coins, [path]]
    e.x.
        target = 3
        3, [3, [1]]
        2, [2, [1, 1]]
        1, [1, [1, 1, 1]]
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

        const memo = new Map()

        const res = this.dfs(coins, amount, memo)
        console.log(memo)
        return res === Number.POSITIVE_INFINITY ? -1 : res
    }

    dfs(coins, amount, memo) {
        if (amount === 0) {
            return 0
        }
        if (amount < 0) {
            return Number.POSITIVE_INFINITY
        }
        if (memo.has(amount)) {
            return memo.get(amount)
        }
        
        let count = Number.POSITIVE_INFINITY
        for (let c = 0; c < coins.length; c ++) {
            count = Math.min(count, this.dfs(coins, amount - coins[c], memo) + 1)   // 1 for this coin
        }
        memo.set(amount, count)
        return memo.get(amount)
    }
}

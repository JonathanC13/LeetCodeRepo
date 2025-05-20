// https://neetcode.io/problems/coin-change-ii

/*
sort the coins in non-descending order so that once a coin causes the amount to go < 0, can break and not evaluate the rest sicne they will also cause the same result.
* recur dfs
    base case 1: if i >= coins || amount < 0: return 0    // no more coins to evaluate
    base case 2: if amount === 0: return 1  // the path has a combination of coins that reduced the amount to 0

    // 2 paths
    1. use the current coin in the combination
    let combos = this.dfs(amount - coins[i], coins, i)

    2. do not and use the next coin
    combos += this.dfs(amount, coins, i + 1)

- Time: O(2^(amount/smallest denom))    // n = number of coins . 2^ since get the paths including current coin + skip and get paths including next coin
- Space: O(amount / smallest denom)

* Add dynamic programming memo to reduce time complexity
memo = rows = amount, cols = index of the coins. fill with -1. Each cell represents the number of distinct paths to the amount from that current amount(row) and coin(col)
- Time: O(n * amount)
- Space: O(n * amount)
*/

class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        coins.sort((a,b) => a - b)
    
        // return this.dfs(amount, coins, 0)

        const memo = new Array(coins.length).fill().map((e) => new Array(amount + 1).fill(-1))
        const res = this.memoDFS(amount, coins, 0, memo)
        console.log(memo)
        return res
    }

    memoDFS(amount, coins, i, memo) {
        if (i >= coins.length || amount < 0) {
            return 0
        }
        if (amount === 0) {
            return 1
        }
        if (memo[i][amount] !== -1) {
            return memo[i][amount]
        }

        let combos = this.memoDFS(amount - coins[i], coins, i, memo)
        combos += this.memoDFS(amount, coins, i + 1, memo)
        memo[i][amount] = combos
        return combos
    }

    dfs(amount, coins, i) {
        if (i >= coins.length || amount < 0) {
            return 0
        }
        if (amount === 0) {
            return 1
        }

        let combos = this.dfs(amount - coins[i], coins, i)
        combos += this.dfs(amount, coins, i + 1)
        return combos
    }
}

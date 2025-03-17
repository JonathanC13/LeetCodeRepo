// https://neetcode.io/problems/coin-change-ii

/*
method 1: recursive dfs
- first sort in non descending order so that once the coin value > remaining amount, can stop

    keep track of a starting index for the coins so that it will only create combinations with coins ahead of it, this ensures unqiue combinations,
    if wanted unique in the sense of positions too, then don't need it.

    base case 1: if (i === coins.length) {
        return 0
    }
    base case 2: if (target === 0) {
        return 1
    }

    combinations = 0
    if (coins[i] >= amount) {
        // 2 options 
        // 1. use the current coin in the combo, keep i the same because it can be reused
        combinations = this.dfs(amount - coins[i], coins, i)
        // 2. skip this coin
        combinations += this.dfs(amount, coins, i + 1)
    }

    return combinations

    -Time: O(2^max(n,m/a) Where n is the number of coins, a is the given amount and m is the minimum value among all the coins.
    -Space: O(max(n, m/a))

method 2: reduce time complexity with top down memoization
    create a 2D array with rows of length coins.length and cols oflength amount + 1, fill with -1
    fill col 0 with 1, which is the goal
    The rows represent the starting coin and its combinations to the goal of amount === 0
    The starting coin can only use coins ahead of it in the coins Array. This ensures unqiue combinations in terms of number of denominations and not sequencing.

    -Time: O(max(n, m/a))
    -Space: O(max(n, m/a))

method 3: bottom up with tabulation
    create a 2D array with rows of length coins.length and cols oflength amount + 1, fill with -1
    Build the table from the 'bottom', 0, and move up to the amount. For each coin, it checks if there was a path to 0.
    Final answer will be in dp[0][amount]

    iterate the coins from greatest to least so when populating the dp table, don't need to propagate the paths from the smallest value to the last row which is the largest value
    When putting the smallest coins last, they will fill the gaps to the target amount which accounts the large coin paths in the final answer row, 0.

    *Smallest coin first to largest of course works, just propagate the previous coins paths before checking if current coin can get the paths to 0.

    -Time: O(max(n,m/a))
    -Space: O(max(n,m/a))
*/

class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        coins.sort((a, b) => {return a - b})
        // return this.initdfs(amount, coins, 0)
        // return this.topDown(amount, coins)
        return this.bottomUp(amount, coins)
    }

    bottomUp(amount, coins) {
        const dp = Array.from(new Array(coins.length), (e) => new Array(amount + 1).fill(0))
        for (let r = 0; r < dp.length; r ++) {
            dp[r][0] = 1
        }

        // for (let c = coins.length - 1; c >= 0; c --) {
        //     for (let i = 0; i <= amount; i ++) {
                
        //         if (coins[c] > i) { continue }
        //         // get the paths that this coins contributed to
        //         dp[c][i] = dp[c][i - coins[c]]

        //         // get the paths that the previous coins have made.
        //         if (c < coins.length - 1) {
        //             dp[c][i] += dp[c + 1][i]
        //         }
        //     }
        // }
        
        // return dp[0][amount]

        for (let c = 0; c < coins.length; c ++) {
            for (let i = 0; i <= amount; i ++) {
                
                // get the paths that the previous coins have made.
                if (c > 0) {
                    dp[c][i] = dp[c - 1][i]
                }

                if (coins[c] > i) { continue }
                // get the paths that this coins contributed to
                dp[c][i] += dp[c][i - coins[c]]   
            }
        }
        // console.log(dp)
        return dp[coins.length - 1][amount]

    }

    topDown(amount, coins) {
        const memo = Array.from(new Array(coins.length), (e) => new Array(amount + 1).fill(-1))
        for (let r = 0; r < memo.length; r ++) {
            memo[r][0] = 1
        }

        return this.dfs(amount, coins, 0, memo)
    }

    dfs(amount, coins, i, memo) {
        if (i === coins.length) {
            return 0
        }
        if (memo[i][amount] !== -1) {
            return memo[i][amount]
        }

        let combos = 0
        if (coins[i] <= amount) {
            combos = this.dfs(amount - coins[i], coins, i, memo)
            combos += this.dfs(amount, coins, i + 1, memo)
        }

        memo[i][amount] = combos
        return memo[i][amount]
    }

    initdfs(amount, coins, i) {
        if (i === coins.length) {
            return 0
        }
        if (amount === 0) {
            return 1
        }

        let combos = 0

        if (coins[i] <= amount) {
            combos = this.initdfs(amount - coins[i], coins, i)
            combos += this.initdfs(amount, coins, i + 1)
        }

        return combos
    }
}

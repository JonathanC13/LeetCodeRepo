// https://neetcode.io/problems/coin-change/question

/**
 * 1. Assumptions
 *  1. Given: each coin can be used infinite number of times
 *      * If limited, use a Visited mechanism
 * 
 * 2. input validaton
 *  1. coins
 *      - coins instanceof Array
 *      - coins.length >= 0
 *      - coins element's are Number that are > 0
 *  2. amount
 *      - typeof amount === 'number'
 *      - amount >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(amount * n) // each amount may need to try each coin
 *  Space(amount)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if amount === 0: return 0
 * 
 *  test cases
 *  1. multiple combinations
 *      inputs
 *          coins = [1,2,5]
 *          amount = 6
 *      expected output
 *          2
 *  2. no combinations
 *      inputs
 *          coins = [2, 5]
 *          amount = 6
 *      expected output
 *          -1
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  sort coins in non-ascending so in the recursive backtracking the larger coins are used first, this is so the memo is filled from furthest first that may result in more hits in the memo from the smaller values when they go.
 * 
 *  memo of length amount + 1
 *  init state:
 *      memo[0] = 0 // to indicate reached target
 *  Result will be in memo[amount]
 * 
 *  recursive backtracking 
 *  (coins, 
 *  amount,
 *  memo
 *  )
 *      base case 1:
 *      if amount < 0: return pos_infin
 * 
 *      base case 2
 *      if memo[amount] !== -1
 *          return memo[amount]
 * 
 *      minCoins = pos_infin
 * 
 *      iterate the coins to try to use them in the combination
 *          minCoins = Min(minCoins, rec(coins, amount, j, memo))
 * 
 *      memo[amount] = minCoins + 1 // +1 for if current coin used
 *      return memo[amount]
 * 
 *  final if memo[amount] === pos_infin return -1
 * 
 * 7. algos
 *  - recursive backtracking with memo for 1D dp
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(amount * n)    // n = coins.length
 *  Space: O(amount)
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

        coins.sort((a, b) => b-a)

        const memo = new Array(amount + 1).fill(-1)
        memo[0] = 0
        const min = this.rec(coins, amount, memo)
        return min === Number.POSITIVE_INFINITY ? -1 : min
    }

    rec(coins, amount, memo) {
        if (amount < 0) {
            return Number.POSITIVE_INFINITY
        }
        if (memo[amount] !== -1) {
            return memo[amount]
        }

        let minCoins = Number.POSITIVE_INFINITY
        for (let j = 0; j < coins.length; j ++) {
            minCoins = Math.min(minCoins, this.rec(coins, amount - coins[j], memo))
        }
        memo[amount] = minCoins + 1
        return memo[amount]
    }
}

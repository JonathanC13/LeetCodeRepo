// https://neetcode.io/problems/coin-change-ii/question

/**
 * 1. Assumptions
 *  1. unlimited use of coin value
 * 
 * 2. input validation
 *  1. amount
 *      - typeof amount === 'number'
 *      - amount >= 0
 *  2. coins
 *      - coins instanceof Array
 *      - coins.length >= 0
 *      - coins's elements are Number > 0 and unique
 * 
 * 3. time and space constraints
 *  BTTC: O(n^2)
 *  Space: O(n * amount)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if amount === 0: return 1. combo of []
 *  2. coins.length === 0: return 0
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. DFS recursive backtracking to try different combinations
 *      base case 1: if amount === 0: return 1
 *      base case 2: if i >= coins.length || amount < 0: return 0
 * 
 *      ways = 0
 *      try to use coin j = i and forward
 *          ways += rec(j, amount - coin[j])
 *      OR
 *      1. not use
 *      2. use
 * 
 *      return ways
 *      Time: O(n * 2^n)
 * 
 *  2. add dp memo to reduce time complexity to O(n * amount)
 *      Space: O(n * amount)
 *      rows = coins.length
 *      cols = amount
 *      Cell represents the number of ways on coin r and amount c to amount
 * 
 * 7. algos
 *  - recursive backtracking with dp memo
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n * amount)
 *  Space: O(n * amount)
 */

class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        // if (amount === 0) {
        //     return 1    
        // }
        if (coins.length === 0) {
            return 0
        }
        const combos = []
        const memo = new Array(coins.length).fill().map((e) => new Array(amount + 1).fill(-1))
        // every i at amount = 1, in dfs make it a base case (1)
        const res = this.dfs(amount, coins, 0, [], combos, memo)
        // console.log(combos)
        // console.log(memo)
        return res
    }

    dfs(amount, coins, i, curr, combos, memo) {
        if (amount === 0) {
            // combos.push([...curr])
            return 1
        }
        if (i >= coins.length || amount < 0) {
            return 0
        }
        if (memo[i][amount] !== -1) {
            return memo[i][amount]
        }

        let ways = 0
        ways += this.dfs(amount, coins, i + 1, curr, combos, memo)

        curr.push(coins[i])
        ways += this.dfs(amount - coins[i], coins, i, curr, combos, memo)
        curr.pop()

        memo[i][amount] = ways
        return ways
    }
}

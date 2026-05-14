// https://neetcode.io/problems/buy-and-sell-crypto-with-cooldown/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. prices
 *      - prices instanceof Array
 *      - prices.length > 0
 *      - prices's elements are Number >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if prices.length === 0: return 0
 * 
 *  test cases
 *  1. > 1 buy/sell combinations
 *      inputs
 *          prices = [1,3,4,0,4]
 *      expected output
 *          6
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. solve it with DFS recursive backtracking
 *      Start with buy operation since cannot sell nothing
 *      For the current i:
 *      if (!buy)
 *          2 paths:
 *          1. sell now, rec(i + 2 for cooldown, !buy)
 *          2. do not sell, rec(i + 1, buy)
 *          profit = max(1, 2)
 *      else // buy
 *          2 paths:
 *          1. buy now, rec(i + 1, !buy)
 *          2. do not buy, rec(i + 1, buy)
 *          profit = max(1, 2)
 * 
 *      return profit
 * 
 *      Time: O(n * 2^n), each n *, 2 choices continue n remaining elements
 *      Space: O(n)
 *  2. Then reduce time complexity with memoization
 *      When the max profit already determined for i to end, just return
 *      Time: O(n)
 *      Space: O(2*n)   // for i, the operation can be either buy or sell
 * 
 * 7. algos
 *  - DFS recursive backtracking with memoziation
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */         

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const memo = new Map()
        const res = this.dfs(prices, 0, true, memo)
        // console.log(memo)
        return res
    }

    dfs(prices, i, buy, memo) {
        if (i >= prices.length) {
            return 0
        }
        const key = `${buy}-${i}`
        if (memo.has(key)) {
            // console.log('hit ', key)
            return memo.get(key)
        }

        let maxProf = 0
        if (buy) {
            const now = this.dfs(prices, i + 1, !buy, memo) - prices[i]
            const later = this.dfs(prices, i + 1, buy, memo)
            maxProf = Math.max(now, later)
        } else {
            const now = this.dfs(prices, i + 2, !buy, memo) + prices[i]
            const later = this.dfs(prices, i + 1, buy, memo)
            maxProf = Math.max(now, later)
        }
        memo.set(key, maxProf)
        return maxProf
    }
}

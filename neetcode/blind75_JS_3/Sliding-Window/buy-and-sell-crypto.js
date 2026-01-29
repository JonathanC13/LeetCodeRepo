// https://neetcode.io/problems/buy-and-sell-crypto/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. prices
 *      - prices instanceof Array
 *      - prices.length >= 0
 *      - prices's elements are positive Numbers
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if prices.length < 2: return 0
 * 
 *  test cases
 *  1. first buy price is the lowest
 *      inputs
 *          prices = [1, 5, 6, 3]
 *      expected output
 *          5
 * 
 *  2. There is a better buy price later
 *      inputs
 *          prices = [2, 5, 6, 1, 6]
 *      expected output
 *          5
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  sliding window where the left pointer is the lowest buy price and the right pointer is the current price to evaluate sell
 *  while evaluate the potential profit between the buy and sell price, if a lower buy price appears move left pointer to it since it the goal is to maximize profit
 * 
 * 7. algos
 *  - sliding window
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 * 
 */

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0
        }

        let maxProf = 0
        let l = 0
        for (let r = 1; r < prices.length; r ++) {
            maxProf = Math.max(maxProf, prices[r] - prices[l])

            if (prices[r] < prices[l]) {
                l = r
            }
        }

        return maxProf
    }
}

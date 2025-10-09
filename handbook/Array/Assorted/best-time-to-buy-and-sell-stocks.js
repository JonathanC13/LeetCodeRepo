// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
1. Assumptions:
    - Of course the sell index is > buy index

2. validate inputs
    - prices instance of Array
    - length
        if prices.length === 0:
            return 0
    - content
        prices contains Numbers

3. Time/space constraints
    - Time: O(n)    // one pass
    - Space: O(1)

4. Some test cases and edge cases
    edge cases
    - if prices.length === 0: return 0
    test cases
    - prices = []   // expected = 0
    - prices = [10, 5, 2]   // expected = 0 since cannot achieve positive profit
    - prices = [10, 11, 5, 7]   // expected = 2

5. Visualize by drawing and manually solve
    brute force method:
        - For each index i, search forward, j = i + 1, for sell prices and record max
        - Time: O(n^2)

    two pointer solution/ or just hold lowest seen buy price
        - left pointer at buy price, right pointer for sell price.
        - if right pointer is < left pointer, move left = right so that the new buy price is lower which will potentially result in larger profit.
        Time: O(n)

6. Break into subproblems

7. Determine algorithm
    - linear iteration

8. Determine data structures
    - Input Array

9. Complexity
    - Time: O(n)
    - Space: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) {
        return 0
    }

    let maxProf = 0
    let buy = prices[0]

    for (let sell = 0; sell < prices.length; sell ++) {
        maxProf = Math.max(maxProf, prices[sell] - buy)

        if (prices[sell] < buy) {
            buy = prices[sell]
        }
    }

    return maxProf
};
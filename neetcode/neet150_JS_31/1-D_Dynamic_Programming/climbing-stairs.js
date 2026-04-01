// https://neetcode.io/problems/climbing-stairs/question

/**
 * 1. Assumptions
 *  1. the top is n
 * 
 * 2. input validation
 *  1. n
 *      - typeof n === 'number'
 *      - n >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n <= 2: return n
 * 
 *  test cases
 *  1. n > 2
 *      inputs
 *          n = 3
 *      expected output
 *          3
 *          combos: 1 + 1 + 1, 1 + 2, 2 + 1
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  tabulation with Array of length n + 1 and starting states are:
 *      tab[0] = 0
 *      tab[1] = 1  // 1 way to step 1
 *      tab[2] = 2  // 2 ways to step 2
 *  * tabulation to save the already calculated result for i to reduce time complexity.
 *   
 *  to get combinations for n > 2, for i it is the sum of tab[i-1] + tab[i-2] because:
 *      1. tab[i-1], it extends those combinations by adding the +1 step to get to i
 *          e.g. for i = 3, 
 *              1. tab[3-1] = 2 which are combinations of:
 *                      1. 1 + 1
 *                      2. 2
 *                  To get to step 3, add +1
 *                      1. (1 + 1) + 1
 *                      2. (2) + 1
 *                  Therefore still 2 combinations
 *              2. tab[3-2] = 1, combo of:
 *                      1. 1
 *                  To get to 3, add +2
 *                      1. (1) + 2
 *                  Therefore still 1 combo
 * 
 *              Therefore tab[3] = tab[2] + tab[1] = 2 + 1 = 3
 * 
 *  * The non dynamic programming method can be done with recursion
 *      Each i has 2 paths, i + 1 and i + 2 for the next step. If i === n: return 1.
 *      return rec(i+1) + rec(i+2)
 *      Without memoization, the number of combinations from i to n are repeated resulting in Time: O(2^n)
 *      With memo: Time: O(n)
 * 
 * 7. algos
 *  - 1-D dynamic programming
 * 
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)             
 * 
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) {
            return n
        }

        const tab = new Array(n + 1).fill(0)
        tab[1] = 1
        tab[2] = 2

        for (let i = 3; i <= n; i ++) {
            tab[i] = tab[i-1] + tab[i-2]
        }

        return tab[n]
    }
}

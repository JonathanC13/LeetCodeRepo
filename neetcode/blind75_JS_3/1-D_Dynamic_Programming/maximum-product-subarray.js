// https://neetcode.io/problems/maximum-product-subarray/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return 0
 *  
 *  test cases
 *  1. even negatives
 *      input
 *          nums = [2,-5,3,-1]
 *      expected output
 *          30
 *  2. odd negatives
 *      input
 *          num = [-5, 2, 3, -1, -2]
 *      expected output
 *          30
 *  3. has a least one 0
 *      input
 *          num = [-4, 0, 2, -5]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  calculate and store the prefix and suffix products at each index.
 *  1. For even number of negatives. Prefix and suffix will produce the same max product at their ends
 *  2. For odd number of negatives. Prefix or suffix will have a positive product in more indexes than the other since one direction will meet an even number of negatives first.
 *  3. When encounter 0, reset current prefix to 1 then calculate prefix at current i
 * 
 *  Finally, iterate and find the max value in both
 * 
 *  Time: O(n)  // 2 * n
 *  Space: O(n) // 2 * n
 * 
 * 7. algos
 *  - prefix and suffix Array for 1d DP
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1) // can perform prefix and suffix without additional space
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (nums.length === 0) {
            return 0
        }

        const n = nums.length
        
        // can do without Arrays
        let prefix = 1
        let suffix = 1
        let max = nums[0]

        for (let i = 0; i < n; i ++) {
            prefix = (prefix === 0 ? 1 : prefix) * nums[i]
            suffix = (suffix === 0 ? 1 : suffix) * nums[n - 1 - i]
            max = Math.max(max, prefix, suffix)
        }

        // JS has -0 since 2s comp
        return max === -0 ? 0 : max
    }
}

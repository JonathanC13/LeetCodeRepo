// https://neetcode.io/problems/longest-increasing-subsequence/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums element's are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n^2)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length <= 1: return nums.length
 * 
 *  test cases
 *  1. many subsequences
 *      inputs
 *          nums = [9,1,4,2,3,3,7]
 *      expected output
 *          4
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 * 
 *  create dp table where each index stores the longest increasing subsequence from index to end
 *  maxInc = 0
 *  iterate i from end to 0
 *      iterate j from i + 1 to end
 *          if (nums[i] < nums[j])  // can contribute to increasing subsequence
 *              dp[i] = max(dp[i], dp[j] + 1)    // +1 for itself
 *              maxInc = max(maxInc, dp[i])
 * 
 *  return maxInc
 * 
 *  With 1D DP: Time: O(n^2)
 *  Without: Time: O(2^n) since at each i, would have to create the max subsequence forward repeatedly.
 *      Recursive backtracking
 *          At each i, 2 paths
 *          1. Not include in subsequence
 *          2. include only if strictly greater than previous
 *      Builds the increasing subsequence starting from the end toward i
 *      Then add memo to reduce to Time: O(n^2)
 *          2D matrix of rows n and cols n + 2. n + 2 cols because -1 offset and last index + 1
 *          -1 1 -1
 *           1 1 -1
 * 
 * 7. algos
 *  - 1D dp with tabulation
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(n^2)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length
        if (n <= 1) {
            return n
        }
        // const memo = Array.from({ length: n }, () => Array(n + 2).fill(-1));
        // const dfs = this.dfs(nums, -1, 0, memo)
        // console.log(memo)
        // return dfs

        const tab = new Array(n).fill(1)
        let maxInc = 1

        for (let i = n - 1; i >= 0; i --) {
            for (let j = i + 1; j < n; j ++) {
                if (nums[i] < nums[j]) {
                    tab[i] = Math.max(tab[i], tab[j] + 1)
                    maxInc = Math.max(maxInc, tab[i])
                }
            }
        }

        return maxInc
    }

    dfs(nums, prev, i, memo) {
        if (i >= nums.length) {
            return 0
        }
        if (memo[i][prev + 1] !== -1) {
            return memo[i][prev + 1]
        }

        // not include, go to end
        let maxInc = this.dfs(nums, prev, i + 1, memo)

        // include if strictly increasing or initial entry (prev === -1)
        if (prev === -1 || nums[prev] < nums[i]) {
            maxInc = Math.max(maxInc, this.dfs(nums, i, i + 1, memo) + 1)
        }
        memo[i][prev + 1] = maxInc
        return maxInc
    }
}

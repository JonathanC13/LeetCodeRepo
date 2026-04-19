// https://neetcode.io/problems/subsets/question

/**
 * 1. Assumptions
 *  1. Given: unique integers. So, a duplicate subset will not be produced if only adding forward integers to subset being built
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums's elements are Number and unique
 * 
 * 3. time and space constraints
 *  BTTC: O(2^n)    // each int has 2 paths, not include and include in the subset being built
 *  Space: O(n)     // recursive stack
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return [[]]
 * 
 *  test cases
 *  1. normal
 *      inputs
 *          nums = [1,2,3]
 *      expected output
 *          [[],[3],[2],[2,3],[1],[1,3],[1,2],[1,2,3]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  recursive backtracking to consider each integer in the current subset being built.
 *  Since unique integers and recursive backtracking explores current subset with forward integers, there will be no duplicate subsets in result
 * 
 *  2 paths for an integer
 *  1. not include in the subset
 *  2. include in the subset
 * 
 *  once reach the end of nums, subset complete
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity    
 *  Time: O(2^n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        if (nums.length === 0) {
            return [[]]
        }

        const res = new Array()
        this.rec(nums, 0, new Array(), res)
        return res
    }

    rec(nums, i, subset, res) {
        if (i === nums.length) {
            res.push([...subset])
            return
        }

        // 1. not include. 
        this.rec(nums, i + 1, subset, res)

        // 2. include
        subset.push(nums[i])
        this.rec(nums, i + 1, subset, res)
        subset.pop()
    }
}

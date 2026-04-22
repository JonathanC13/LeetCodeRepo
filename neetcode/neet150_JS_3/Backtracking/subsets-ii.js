// https://neetcode.io/problems/subsets-ii/question

/**
 * 1. Assumptions
 *  1. Given: Solution can be in any order
 * 
 * 2. input validation
 *  - nums instanceof Array
 *  - nums.length >= 0
 *  - nums's elements are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n * 2^n)    // 2^n: the combinations for each n element there is 2 choices to include/exclude from subset. * n: for each element to build subset
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return [[]]
 * 
 *  test cases
 *  1. has duplicate value
 *      inputs
 *          nums = [1,1,2]
 *      expected output
 *          [[1,1,2],[1,1],[1,2],[1],[2],[]]
 * 
 * 5. visualize by drawing and manully solve
 * 6. break into subproblems
 * 
 *  sort nums in non-descending so that the duplicate values are adjacent.
 * 
 *  recursive backtracking
 *      base case 1: if i === nums.length: res.push([...subset])
 * 
 *      iterate nums 
 *          choose current element to include
 *          on return, choose next that is not same value as current
 * 
 *      not include any elements from current onward: res.push([...subset])
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n * 2^n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        if (nums.length === 0) {
            return [[]]
        }

        nums.sort((a,b) => a - b)
        const res = new Array()
        this.rec(nums, 0, new Array(), res)
        return res
    }

    rec(nums, i, subset, res) {
        if (i === nums.length) {
            res.push([...subset])
            return 
        }
        
        // include current
        subset.push(nums[i])
        this.rec(nums, i + 1, subset, res)
        subset.pop()

        // not include self and duplicate of self.
        const prev = nums[i]
        i += 1
        while (i < nums.length && prev === nums[i]) {
            i += 1
        }
        this.rec(nums, i, subset, res)

        return
    }
}

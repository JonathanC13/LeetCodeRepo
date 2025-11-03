// https://leetcode.com/problems/subsets/

/**
 * 1. Assumptions:
 *  1. None
 * 
 * 2. Input validation
 *  - instance: 
 *      1. nums instanceof Array
 *  - length:
 *      1. if (nums.length === 0) {return []}
 *  - content:
 *      1. nums contains unique Numbers
 * 
 * 3. Time and space constraints
 *  BTTC: O(n * 2^n)    // since each n * has 2 paths. Tree
 *  Space: O(n) // n is the max depth for the recursive stack
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return []
 *  some test cases
 *  1.
 *      input
 *          nums = [1, 2, 3]
 *      expected output
 *          [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
 * 
 * 5. visualize by drawing and manually solve by hand
 * 6. break in subproblems
 *  recursive backtracking where there are two paths:
 *      1. do not use the current value in the subset
 *      2. use the current value in the subset
 *          iterate from i to n indexes in the input Array nums so that this recursive step will put each value in the subset then remove
 * 
 *      To avoid duplicates, the recursive call to the next step sets index i = i + 1 so the values to choose from are only ahead of the current step
 * 
 * 7. Algos
 *  - Recursive backtracking
 * 
 * 8. Data structures
 *  - Recursive Stack
 *  - Arrays
 * 
 * 9. Complexity
 *  Time: O(n * 2^n)
 *  Space: O(n)
 *      
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0) {
        return []
    }

    const res = new Array()
    rec(nums, 0, new Array(), res)
    return res
};

const rec = (nums, i ,subset, res) => {
    if (i === nums.length) {
        // no more elements to choose
        res.push(Array.from(subset))
        return
    }

    // path 1: do not use current element at index i
    rec(nums, i + 1, subset, res)

    // path 2: use current element at index i
    subset.push(nums[i])
    rec(nums, i + 1, subset, res)
    subset.pop()

    return
}
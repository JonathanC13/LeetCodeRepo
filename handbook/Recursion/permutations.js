// https://leetcode.com/problems/permutations/

/**
 * A permutation is the rearrangments of the values to generate different combination orders
 * 
 * 1. Assumptions:
 *  1. None
 * 
 * 2. Input validation
 *  - type
 *      1. nums instanceof === 'Array'
 *  - length
 *      1. If (nums.length === 0) {return []}
 *  - content
 *      1. nums contains unique Numbers
 * 
 * 3. Time and space constraints
 *  BTTC: O(n * !n)// each index has *, n! paths. Since using an index restricts the next step.
 *  Space: O(n)
 * 
 * 4. Edge cases and some test cases
 *  edge cases
 *  1. if nums.length === 0: return []
 *  test cases
 *  1. 
 *      input
 *          nums = [1]
 *      expected output
 *          [[1]]
 *  2. 
 *      input
 *          nums = [1, 2, 3]
 *      expected output
 *          [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 * 
 *      Create an Array of length nums.length to track which indexes are currently used in the permutation
 * 
 *      recursive backtracking
 *          base case 1: permutation complete
 *          if perm.length === nums.length
 *              res.push(Array.from(perm))
 *              return
 * 
 *          // find available value for the current position in the permutation
 *          iterate i = 0 to < nums.length
 *              if (used[i] === true) {
 *                  continue
 *              }
 * 
 *              // found available
 *              mark in used[i]
 *              add nums[i] in perm
 * 
 *              recursive call the next position
 * 
 *              unmark in used[i]
 *              remove nums[i] in perm by way of pop()
 * 
 * 7. algos
 *  1. recursive backtracking
 * 
 * 8. data structures
 *  1. recursive stack
 *  2. Arrays
 * 
 * 9. Complexity
 *  Time: O(n * !n)// each index has *, n! paths. Since using an index restricts the next step.
 *  Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length

    const res = new Array()
    const used = new Array(n).fill(false)
    rec(nums, n, used, new Array(), res)
    return res
};

const rec = (nums, n, used, perm, res) => {
    // base case 1: when permutation complete
    if (perm.length === n) {
        res.push(Array.from(perm))
        return
    }

    // iterate 0 to < n to find a value that has not been used yet in the current permutation, then recursively call the next step
    for (let i = 0; i < n; i ++) {
        if (used[i] === true) {
            continue
        }

        // found available index
        // mark used for current permutation
        used[i] = true
        perm.push(nums[i])
        
        // next val
        rec(nums, n, used, perm, res)

        // after value evaluated, release so another step can use it
        used[i] = false
        perm.pop()
    }

    return
}
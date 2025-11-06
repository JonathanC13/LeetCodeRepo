// https://leetcode.com/problems/permutations/

/**
A permutation is the rearrangments of the values to generate different combination orders

recursive backtracking to select the value for the current index

Complexity
    Time: O(n * n!) // each index has *, n! paths. Since using an index restricts the next step.
    Space: O(n)
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
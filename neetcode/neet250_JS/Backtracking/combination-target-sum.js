// https://neetcode.io/problems/combination-target-sum


/*
- edge case 1: if nums.length === 0: return []

use backtracking recursively
    in each recursive call it has 2 options, to include the current num in the sum or exclude it.
    backtracking will also provide the unique combinations because it will not retread the same path once processed.

- Time: O(n * 2^n)
- Space: O(n)

*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        if (nums.length === 0) {
            return []
        }

        const res = []
        this.dfs(nums, 0, target, res, [])
        return res
    }

    dfs(nums, i, target, res, combo) {
        if (target === 0) {
            res.push([...combo])
            return
        }
        if (i >= nums.length) {
            return
        }
        if (target < 0) {
            return
        }

        // include, and since can re-use itself keep i the same.
        combo.push(nums[i])
        this.dfs(nums, i, target - nums[i], res, combo)
        combo.pop()

        // exclude
        this.dfs(nums, i + 1, target, res, combo)

        return
    }

}

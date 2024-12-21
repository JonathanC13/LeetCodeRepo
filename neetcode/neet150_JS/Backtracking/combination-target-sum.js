// https://neetcode.io/problems/combination-target-sum

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
        const subset = []

        this.DFS(nums, target, 0, subset, res)
        return res
    }

    DFS(nums, target, i, subset, res) {
        if (target === 0) {
            res.push(Array.from(subset))
            return
        }
        if (i >= nums.length || target < 0) {
            return
        }

        subset.push(nums[i])
        this.DFS(nums, target - nums[i], i, subset, res)

        subset.pop()
        this.DFS(nums, target, i + 1, subset, res)

        return
    }
}

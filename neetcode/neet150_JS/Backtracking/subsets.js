// https://neetcode.io/problems/subsets

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        if (nums.length === 0) {
            return []
        }

        const res = []
        const subset = []
        this.DFS(nums, 0, res, subset)
        return res
    }

    DFS(nums, i, res, subset) {
        if (i >= nums.length) {
            res.push(Array.from(subset))
            return
        }

        subset.push(nums[i])
        this.DFS(nums, i + 1, res, subset)

        subset.pop()
        this.DFS(nums, i + 1, res, subset)
    }
}

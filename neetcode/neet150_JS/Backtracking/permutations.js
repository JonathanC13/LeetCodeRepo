// https://neetcode.io/problems/permutations

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (nums.length === 0) {
            return []
        }

        const res = []
        const subset = []
        const visited = Array(nums.length).fill(false)

        this.DFS(nums, subset, res, visited)
        return res
    }

    DFS(nums, subset, res, visited) {
        if (subset.length === nums.length) {
            res.push(Array.from(subset))
            return
        }

        for (let i = 0; i < nums.length; i ++) {
            if (!visited[i]) {
                visited[i] = true
                subset.push(nums[i])
                this.DFS(nums, subset, res, visited)

                visited[i] = false
                subset.pop()
            }
        }
    }
}

// https://neetcode.io/problems/subsets-ii

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        if (nums.length === 0) {
            return []
        }

        const res = []
        const subset = []
        nums.sort((a, b) => {return a - b})
        this.DFS(nums, 0, subset, res)

        return res
    }

    DFS(nums, i, subset, res) {
        res.push([...subset])

        for (let j = i; j < nums.length; j ++) {
            if (j > i && nums[j] === nums[j-1]) {
                continue
            }

            subset.push(nums[j])
            this.DFS(nums, j + 1, subset, res)
            subset.pop()
        }
    }
}

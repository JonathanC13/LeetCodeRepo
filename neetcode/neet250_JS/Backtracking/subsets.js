// https://neetcode.io/problems/subsets

/*
recursive solution

each index has 2 paths. Include the number at this index or exclude it.

Maintain an Array for the current subset and once i >= nums.length. Add the Array to the result list.

- Time: O(n * 2^n)
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []

        this.dfs(nums, 0, [], res)

        return res
    }

    dfs(nums, i, subset, res) {
        if (i >= nums.length) {
            res.push([...subset])
            return
        }

        // 2 options:
        // include
        subset.push(nums[i])
        this.dfs(nums, i + 1, subset, res)
        subset.pop()

        // exclude
        this.dfs(nums, i + 1, subset, res)

        return
    }
}

// https://neetcode.io/problems/combination-target-sum

/*
edge case 1: if nums.length === 0: return []

res = []
combo = []
recursive soln
    base case 1: if target === 0: res.push([...combo])
    base case 2: if i >== nums.length: return

    // to avoid duplicate combos, use back tracking and only use the nums that are at i or ahead

    // dfs to end of nums to setup backtracking
    this.dfs(nums, target, i + 1, combos)

    // use current num
    combo.push(nums[i])
    this.dfs(nums, target - nums[i], i, combo)   // i so start at the same num for the next num to evaluate.
    combo.pop()

    return

- Time: O(2^n). if n = 1, Time = 2, 1 for move to next num, 1 for use current num. Each num has 2 paths
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
        const combo = []
        this.backTrack(nums, target, 0, combo, res)
        return res
    }

    backTrack(nums, target, i, combo, res) {
        if (target === 0) {
            res.push([...combo])
            return
        }
        if (target < 0 || i >= nums.length) {
            return
        }

        this.backTrack(nums, target, i + 1, combo, res)

        combo.push(nums[i])
        this.backTrack(nums, target - nums[i], i, combo, res)
        combo.pop()

        return
    }
}

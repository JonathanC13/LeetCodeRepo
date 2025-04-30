// https://neetcode.io/problems/combination-target-sum

/*
Since all nums are distinct, don't have to handle different index with same value that will produce the same combination sum.

recursive backtrack
    base case 1:
        if i >= nums.length || target < 0:
            return
    
    base case 2:
        if target === 0
            add combo to res
            return

    // 2 options
    1. do not use the current num, i + 1

    2. use the current num, since can use the same unlimited number of times, i

- Time: O(n * 2^n)  .. really < n * 2^n since the target will terminate paths early.
- Space: O(n)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = new Array()
        const combo = new Array()

        this.bt(nums, 0, target, combo, res)
        return res

    }

    bt(nums, i, target, combo, res) {
        if (i >= nums.length || target < 0) {
            return
        }
        if (target === 0) {
            res.push([...combo])
            return
        }

        this.bt(nums, i + 1, target, combo, res)

        combo.push(nums[i])
        this.bt(nums, i, target - nums[i], combo, res)
        combo.pop()

        return
    }
}

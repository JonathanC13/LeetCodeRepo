// https://neetcode.io/problems/partition-equal-subset-sum

/*
first determine if solution is possible:
    get the total sum of all the values and divide by 2. if remainder is 1 then there is no solution.

- edge case 1: if totalSum % 2 === 1: return false

recursive dfs
    if (i === nums.length && sum1 === 0 and sum2 === 0) {
        return true
    }

    // disregard
    // each step has 2 options
    // 1. if sum1 > 0 && sum1 - nums[i] >= 0. proceed with subtracting from sum1
    // 2. if sum2 > 0 && sum2 - nums[i] >= 0. proceed with subtracting from sum2

    // else if no paths above resulted in true, there is no solution.
    return false

2nd rec 
    if (i === nums.length) {
        return target === 0
    }
    if (target < 0) {
        return false
    }

    // since both have to be equal, just need 1 sum
    each step has 2 options
    1. do not use current value
    2. use the current value

    return #1 || #2

- Time: O(2^n)
- Space: O(n)

Reduce time complexity with dp Map
store the result of specific index with specific sum

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        if (nums.length === 0) {
            return true
        }

        let totalSum = 0
        for (let i = 0; i < nums.length; i ++) {
            totalSum += nums[i]
        }

        if (totalSum % 2 === 1) {
            return false
        }

        const dp = new Map()
        return this.dfs(nums, 0, totalSum/2, dp)
    }

    dfs(nums, i, targ, dp) {
        if (i === nums.length) {
            return targ === 0
        }
        if (targ < 0) {
            return false
        }
        const key = `${i}-${targ}`
        if (dp.has(key)) {
            return dp.get(key)
        }

        const notUse = this.dfs(nums, i + 1, targ, dp)
        const use = this.dfs(nums, i + 1, targ - nums[i], dp)

        dp.set(key, notUse || use)
        return dp.get(key)
    }
}

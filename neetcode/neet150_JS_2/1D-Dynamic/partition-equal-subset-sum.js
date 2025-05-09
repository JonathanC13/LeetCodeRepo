// https://neetcode.io/problems/partition-equal-subset-sum

/*
iterate nums to get total sum
edge case 1: if totalSum % 2 === 1: return false    // if odd then cannot split into 2 equal subsets

target is total Sum / 2

recursive backtrack with memo
- recur
    2 paths
        1. not include current element for subet, i + 1
        2. include current element in subet, target - nums[i], i + 1

    base cases:
        1. if i === nums.length
            return target === 0
        2. if (target === 0): return true
            else if (target < 0): return false

- Add memo
    memo = 2D array of:
        rows = nums.length
        cols = totalSum / 2 + 1 .// need index for totalSum/2, so + 1
        Fill with null
        * Each cell represents if that value at index r can get to target

    added base case for recur
        if (memo[i][target] !== null): return memo[i][target]

    path results stored in memo

- Time: O(n * target)
- Space: O(n * target)
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let total = 0
        for (let i = 0; i < nums.length; i ++) {
            total += nums[i]
        }
        if (total % 2 === 1) {
            return false
        }

        const memo = Array.from(new Array(nums.length), (e) => new Array((total/2) + 1).fill(null))

        return this.dfs(nums, 0, total/2, memo)
    }

    dfs(nums, i, target, memo) {
        if (i === nums.length) {
            return target === 0
        }

        if (target === 0) {
            return true
        } else if (target < 0) {
            return false
        }

        if (memo[i][target] !== null) {
            return memo[i][target]
        }

        // not include in subset
        // if (this.dfs(nums, i + 1, target)) {
        //     return true
        // }  

        // include in subset
        // if (this.dfs(nums, i + 1, target - nums[i])) {
        //     return true
        // }

        memo[i][target] = this.dfs(nums, i + 1, target, memo) || this.dfs(nums, i + 1, target - nums[i], memo)

        return memo[i][target]
    }
}

// https://leetcode.com/problems/combination-sum-iv/description/

/**
recursive backtracking with memo
    memo = Array of length target + 1. each cell represents the number of path to satisfy target
    memo[target] = 1

    rec(nums, target, memo, currPath, paths)
    return memo[0]

rec
    base case 1:
    if (target === 0) {
        return 1
    }

    base case 2:
    if (target < 0) {
        return 0
    }

    base case 3:
    if (memo[target] !== -1) {
        return memo[target]
    }

    ways = 0
    
    iterate i in nums from 0 to nums.length since each value can be used an infinite number of times
        ways += rec(nums, target - nums[i], memo)

    memo[target] = ways
    return ways

- Time: O(target)   // without memo. n * n^n
- Space: O(target)
    
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const memo = new Array(target + 1).fill(-1)
    memo[0] = 1

    rec(nums, target, memo)
    return memo[target]
};

const rec = function(nums, target, memo) {
    if (target === 0) {
        return 1
    }
    if (target < 0) {
        return 0
    }
    if (memo[target] !== -1) {
        return memo[target]
    }

    let ways = 0
    for (let i = 0; i < nums.length; i ++) {
        ways += rec(nums, target - nums[i], memo)
    }

    memo[target] = ways
    return ways
}
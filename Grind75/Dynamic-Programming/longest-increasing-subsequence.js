// https://leetcode.com/problems/longest-increasing-subsequence/description/

/**
recursive backtracking
    base case 1:
    if i >= nums.length
        return 0
    
    // 2 paths: 1. don't use current value in path, 2. if prevVal < nums[i] it means increasing and can use value on path
    notUsed = dfs(nums, i + 1, prevVal)

    let used = 0
    if (prevVal < nums[i]) {
        used = dfs(nums, i + 1, nums[i]) + 1    // + 1 for itself.
    }

    return Math.max(notUsed, used)

- Time: O(n * 2^n)
- Space: O(n)

Add dynamic programming memo
- add memo
    create 2D Array of size n, n. Fill with -1. 
        1. where rows is the current index 
        2. cols is the prevI compared to i
        Each cell is the max increasing length from nums[prevI] to nums[I]
        The current cell has 2 paths:
            1. get the longest increasing without this nums[i]
            2. if prev not yet chosen so this nums[i] can be prev OR nums[prev] < nums[i] meaning this value extends an increasing subsequence
                get the longest increasing with this values included. new prev = i and move i = i + 1 for index ahead.

        for col 0, it stores the longest increasing from current index(row) to end
        therefore, final result will be stored in memo[0][0] which is the longest increasing from 0 to end

- Time: O(n^2)
- Space: O(n^2)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const memo = new Array(nums.length).fill().map((e) => new Array(nums.length).fill(-1))
    dfs(nums, 0, -1, memo)
    // console.log(memo)
    return memo[0][0]
};

const dfs = function(nums, i, prev, memo) {
    if (i >= nums.length) {
        return 0
    }
    if (memo[i][prev + 1] !== -1) {
        return memo[i][prev + 1]
    }

    let inc = dfs(nums, i + 1, prev, memo)

    if (prev === -1 || nums[prev] < nums[i]) {
        inc = Math.max(inc, dfs(nums, i + 1, i, memo) + 1)
    }

    memo[i][prev + 1] = inc
    return inc
}
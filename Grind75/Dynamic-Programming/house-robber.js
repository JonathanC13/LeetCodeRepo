// https://leetcode.com/problems/house-robber/description/

/**
memo Array of length nums.length. memo will hold the max value from that indexed house forward.

rec
    base case 1: no more houses
    if i >= nums.length
        return 0

    base case 2: the max from this house forward has already been evaluated
    if (memo[i] !== -1) {
        return memo[i]
    }

    // 2 paths: 1. not rob, 2. rob
    const notRob = rec(nums, i + 1, memo)   // i + 1 since not robbing this house can possibly rob next door

    const rob = nums[i] + rec(nums, i + 2, memo)    // i + 2 since cannot rob next house or it will trigger alarm

    memo[i] = Math.max(notRob, rob)
    return memo[i]

- Time: O(n)    // without memo. O(n * 2^n). each house has 2 paths = 2^n, * n houses.
- Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = new Array(nums.length).fill(-1)
    dfs(nums, 0, memo)
    return memo[0]
};

const dfs = (nums, i, memo) => {
    if (i >= nums.length) {
        return 0
    }
    if (memo[i] !== -1) {
        return memo[i]
    }

    const notRob = dfs(nums, i + 1, memo)
    const rob = dfs(nums, i + 2, memo) + nums[i]
    memo[i] = Math.max(notRob, rob)
    return memo[i]

}
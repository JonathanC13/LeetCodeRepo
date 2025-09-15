// https://leetcode.com/problems/jump-game/

/**
recursive backtracking with memo

main
    memo = new Array(nums.length).fill(null)    // each cell represents if that index has a path to the end.
    init state:
        memo[n - 1] = true

    rec(nums, 0, memo)
    return memo[0]

rec
    base case 1:
    if i >= n - 1
        // since target is last index, n - 1
        return true

    base case 2:
    if (memo[i] !== null) {
        return memo[i]
    }

    from the max jump of nums[i] to 1
        if (can get to end === true) {
            return true
        }
    memo[i] = false
    return false    // this index cannot get to end

- Time: O(n)    // without memo. O(n * maxJump^n)
- Space: O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const memo = new Array(nums.length).fill(null)
    rec(nums, 0, memo)

    return memo[0]
};

const rec = function(nums, i, memo) {
    if (i >= nums.length - 1) {
        return true
    }
    if (memo[i] !== null) {
        return memo[i]
    }

    for (let j = nums[i]; j >= 1; j --) {
        if (rec(nums, i + j, memo) === true) {
            return true
        }
    }

    memo[i] = false
    return false
}
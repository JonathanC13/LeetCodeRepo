// https://leetcode.com/problems/maximum-subarray/description/

/**
var max = neg infin

sliding window
let l = 0

sum = 0
for r in nums from 0 to nums.length
    sum += nums[r]
    max = Math.max(max, sum)

    while (l <= r and sum < 0) {
        // remove left values until sum > 0 since desire max
        sum -= nums[l]
        l += 1
    }

return max

- Time: O(n)
- Space: O(1)

Dp with memo
main
    create memo = 2D array where rows = 1 for must choose the current element since subarray or 0 for can skip. fill with -1

* {number[]} nums
* {number} i    // index of nums
* {number} pick // 1 for pick, 0 for not pick
* {number[][]} memo
dp
    base case 1: no more indexes to use
    if (i === nums.length) {
        if (pick === 1) {
            return 0    // because there is a running sum so don't return a value that modifies since end of Arrray
        } else {
            return neg infini   // since end of Array, ensure not recorded into max by returning neg infin
        }
    }

    base case 2: if already calculated max subarray where if picked and starting at i
    if memo[pick][i] !== -1
        return memo[pick][i]


    if (pick === 1) {
        // max of 0 to cut any negative sum coming from end to i
        // nums[i] + dp(...) to see if can extend subarray for larger max
        memo[pick][i] = Math.max(0, nums[i] + dp(nums, i + 1, 1, memo))
        return memo[pick][i]
    }

    // backtracking
    const notPicked = dp(nums, i + 1, 0, memo)  // dfs, get to end to evaluate build memo from end
    const picked = nums[i] + dp(nums, i + 1, 1, memo)   // build max subarray found from i to end
    memo[pick][i] = Math.max(notPicked, picked)
    return memo[pick][i]

- Time: O(n)    // without memo would be n * 2^n
- Space: O(2*n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // return linear(nums)

    const memo = new Array(2).fill().map((e) => new Array(nums.length).fill(-1))
    return dp(nums, 0, 0, memo)
};

const dp = function(nums, i, pick, memo) {
    if (i === nums.length) {
        if (pick === 1) {
            return 0
        } else {
            return Number.NEGATIVE_INFINITY
        }
    }
    if (memo[pick][i] !== -1) {
        return memo[pick][i]
    }

    if (pick === 1) {
        memo[pick][i] = Math.max(0, nums[i] + dp(nums, i + 1, 1, memo))
        return memo[pick][i]
    }

    const notPicked = dp(nums, i + 1, 0, memo)
    const picked = nums[i] + dp(nums, i + 1, 1, memo)
    memo[pick][i] = Math.max(notPicked, picked)
    return memo[pick][i]
}

const linear = function(nums) {
    let max = Number.NEGATIVE_INFINITY
    let l = 0
    let sum = 0
    for (let r = 0; r < nums.length; r ++) {
        sum += nums[r]
        max = Math.max(max, sum)

        while (l <= r && sum < 0) {
            sum -= nums[l]
            l += 1
        }
    }

    return max
}
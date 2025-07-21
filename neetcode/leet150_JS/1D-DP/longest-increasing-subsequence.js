// https://leetcode.com/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

/*
dp table = Array of length nums fill with 1 // 1 since all numbers by itself are its own subsequence.

maxInc = NEG INFIN
iterate nums from nums.length -2 to === 0
    iterate from i to end
        if (nums[i] < nums[j]) {
            tab[i] = tab[j] + 1 // with the addition of nums[i] it extends the increasing subsequence
            maxInc = max(maxInc, tab[i])
            break   // since tab[j] already has the increasing subsequene from nums[j] onward
        }

return maxInc

- Time: O(n^2)        // without DP, O(n^n)
- Space: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length
    }

    let maxInc = 1
    const tab = new Array(nums.length).fill(1)

    for (let i = nums.length - 2; i >= 0; i --) {
        for (let j = i + 1; j < nums.length; j ++) {
            // console.log(nums[i], nums[j])
            if (nums[i] < nums[j]) {
                tab[i] = Math.max(tab[i], tab[j] + 1)
                maxInc = Math.max(maxInc, tab[i])
            }
        }
    }

    return maxInc
};
// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

/*
*Brute force with Map to store frequencies
- Time: O(n)
- Space: O(n)

*Boyer-Moore Majority Vote Algorithm
2 passes, still O(n) // 2 * n ~= n

while iterating nums, stores the canditate that has the most votes. If votes === 0, then switch candidates since there have been other elements that are reducing its chance to be the majority (N/2)

After one pass to actually check if the candidate is the majority.

- Time: O(n)
- Space: O(1)

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let votes = 0
    let candidate = Number.NEGATIVE_INFINITY
    for (let i = 0; i < nums.length; i ++) {
        if (votes === 0) {
            candidate = nums[i]
            votes = 1
        } else if (candidate === nums[i]) {
            votes += 1
        } else {
            votes -= 1
        }
    }

    let count = 0
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === candidate) {
            count += 1
        }
    }

    return count > nums.length / 2 ? candidate : -1
};
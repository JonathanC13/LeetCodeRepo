// https://leetcode.com/problems/next-permutation/description/

/**
https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order

- Time: O(n)
- Space: O(1)
 */

/**
https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order

- Time: O(n)
- Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let k = -1
    // find k, the largest index where nums[k] < nums[k + 1]. This is the last index where when changed to a higher value will generate a lexi perm greater that current.
    for (let i = 0; i < nums.length - 1; i ++) {
        if (nums[i] < nums[i + 1]) {
            k = i
        }
    }

    // find l, the larget index where nums[l] > nums[k]. By getting the last value that is larger than nums[k], it will generate the very next greater permutation
    let l = 0
    if (k !== -1) {
        for (let i = k + 1; i < nums.length; i ++) {
            if (nums[i] > nums[k]) {
                l = i    
            }
        }

        // the swap to make the permutation greater than the current
        const tmp = nums[l]
        nums[l] = nums[k]
        nums[k] = tmp
    }

    // reverse from k + 1 to n-1. Reverse k + 1 to end so that is generates the very next lexi ascending permutation. It's like reseting the order in a rollover effect.
    let r = nums.length - 1
    k += 1
    while (k < r) {
        const tmp = nums[r]
        nums[r] = nums[k]
        nums[k] = tmp

        k += 1
        r -= 1
    }
};
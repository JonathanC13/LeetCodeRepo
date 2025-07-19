// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/*
find the left index of target with binary search

then with left index and right = length - 1
find the right bound

- Time: O(log n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const res = [-1, -1]
    if (nums.length === 0) {
        return res
    }

    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const mid = Math.floor((r - l)/2) + l

        if (nums[mid] === target) {
            res[0] = mid
        }

        if (target <= nums[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    console.log(res)
    if (res[0] === -1) {
        return res
    }

    r = nums.length - 1
    while (l <= r ) {
        const mid = Math.floor((r - l) / 2) + l

        if (target === nums[mid]) {
            res[1] = mid
        }

        if (target >= nums[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return res
};
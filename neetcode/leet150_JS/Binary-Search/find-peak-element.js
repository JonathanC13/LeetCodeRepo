// https://leetcode.com/problems/find-peak-element/description/?envType=study-plan-v2&envId=top-interview-150

/*
recursive to check both sides of the binary search, the first that finds a peak will end the recursion/
Needed since there is no clear indication which side to continue search over the other, therefore must do both eventually.

- Time: O(log n)
- Space: O(log n)
*/

const rec = function(nums, l, r) {
    if (l > r) {
        return -1
    }

    const mid = Math.floor((r - l) / 2) + l
    if ((mid - 1 < 0 || nums[mid - 1] < nums[mid]) && (mid + 1 >= nums.length || nums[mid + 1] < nums[mid])) {
        return mid
    }

    const left = rec(nums, l, mid - 1)
    if (left !== -1) {
        return left
    }
    const right = rec(nums, mid + 1, r)
    if (right !== -1) {
        return right
    }
    return -1
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    return rec(nums, 0, nums.length - 1)
};
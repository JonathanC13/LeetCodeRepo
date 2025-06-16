// https://leetcode.com/problems/find-peak-element/description/?envType=study-plan-v2&envId=leetcode-75

/*
recursive binary search (nums, l, r)
    base case 1: 
        if !(l <= r): return null

    const mid = l + (r - l)/2
    base case 2:
        if (mid - 1 < 0 || nums[mid - 1] < nums[mid]) && (mid + 1 >= nums.length || nums[mid + 1] < nums[mid]) {
            return mid
        } 

    // conduct binary search on each half
    const left = binSearch(nums, l, mid - 1)

    if (left !== null) {
        return left
    }

    const right = binSearch(nums, mid + 1, r)

    return right


- Time: O(log n)
- Space: O(n)
*/

const binSearch = (nums, l, r) => {
    if (l > r) {
        return null
    }

    const mid = l + Math.floor((r - l) / 2)

    if ((mid - 1 < 0 || nums[mid - 1] < nums[mid]) && (mid + 1 >= nums.length || nums[mid + 1] < nums[mid])) {
        return mid
    }

    const left = binSearch(nums, l, mid - 1)

    if (left !== null) {
        return left
    }

    const right = binSearch(nums, mid + 1, r)

    return right
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const res = binSearch(nums, 0, nums.length - 1)
    return res === null ? -1 : res
};
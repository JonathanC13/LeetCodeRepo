// https://leetcode.com/problems/sort-an-array/

/*
Mergesort
    Time worst: O(nlog(n))
    Space: O(n)

Split the array into subarrays until smallest possible, merge while sorting pairs of subarrays until the entire array is merged.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length - 1)
    return nums
};

const mergeSort = (nums, left, right) => {
    if (left >= right) {
        return
    }

    const mid = left + Math.floor((right - left)/2)
    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)
    merge(nums, left, mid, right)
}

const merge = (nums, left, mid, right) => {
    const leftLen = mid - left + 1
    const rightLen = right - mid

    const leftNums = nums.slice(left, mid + 1)
    const rightNums = nums.slice(mid + 1, right + 1)

    let i = 0
    let j = 0
    let k = left

    while (i < leftLen && j < rightLen) {
        if (leftNums[i] < rightNums[j]) {
            nums[k] = leftNums[i]
            i += 1
        } else {
            nums[k] = rightNums[j]
            j += 1
        }
        k += 1
    }

    while (i < leftLen) {
        nums[k] = leftNums[i]
        i += 1
        k += 1
    }

    while (j < rightLen) {
        nums[k] = rightNums[j]
        j += 1
        k += 1
    }
}
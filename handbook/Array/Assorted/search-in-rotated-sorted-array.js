// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/**
1. Assumptions
    - None

2. Input validation
    - nums instanceof Array, typeof target === 'Number'
    - length:
        if nums.length === 0: return -1
    - Content:
        nums contains Numbers
        target is a Number

3. Time/space constraints:
    - Time: O(log(n))   // expects a binary search
    - Space: O(1)

4. test cases and edge cases
    edge cases
    - if nums.length === 0: return -1
    test cases
    - nums = [], target = 1 // expected = -1
    - rotated <= n/2 times left. so that the left half is non-descending order
        nums = [3, 4, 1, 2], target = 1 // expected 3
    - rotated > n/2 times left. so that the right is in non-descening order
        nums = [4, 1, 2, 3], target = 1 // expected 1

5. visualize by drawing and manually solve
    Since Time: O(log(n)) binary search, need to determine which half to continue search in for that target
        if the left half is in non-descending order, nums[l] <= nums[mid]
            if (target >= nums[l] && target < nums[mid])
                go left
            else
                go right
        else
            // the right is in non-descening order
            if (target > nums[mid] && target <= nums[r])
                go right
            else
                go left

6. break into subproblems

7. determine algorithm
    - Binary search

8. Data strucutres
    - Input Array

9. Complexity
    - Time: O(log(n))
    - Space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return -1
    }
    const n = nums.length
    let l = 0
    let r = n - 1

    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l

        if (nums[mid] === target) {
            return mid
        } else if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }

    return -1
};
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

/**
1. Assumptions
    1. Unique values. If not unique values, it will still work since the algorithm continues until exhausted all partitions until no more elements

2. Input validation
    1. type
        1. nums instanceof === 'Array'
    2. length
        1. if nums.length === 0: return -1
        2. if nums.length === 1: return nums[0]
    3. content
        1. nums contains unqiue Numbers

3. time and space constraints
    BTTC: O(log(n)) // Since desire O(log(n)), it hints toward binary search
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. if nums.length === 0: return -1
    2. if nums.length === 1: return nums[0]
    test cases
    1. Rotated 0 times right
        input
            nums = [0, 1, 2, 3, 4, 5]
        Expected output
            0
    2. Rotated 2 time right. Creates left half in not non-descending order
        input
            nums = [4, 5, 0, 1, 2, 3]
        Expected output
            0
    3. Rotated 4 times right. Creates left half in non-descending order
        input
            nums = [2, 3, 4, 5, 0, 1]
        Expected output
            0

5. visualize by drawing and manually solve
6. break into subproblems
    binary search
        find mid
        update min if nums[mid] < current min

        go left if nums[mid] <= num[r] because originally in ascending order, therefore if nums[mid] and nums[r] are in ascending order then a lower value may exist in the left.
        else go right. 

7. algos
    1. Binary search

8. data structures
    1. Arrays

9. Complexity
    Time: O(Log(n))
    Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0) {
        return -1
    }
    if (nums.length === 1) {
        return nums[0]
    }

    let l = 0
    let r = nums.length - 1
    let min = nums[0]

    while (l <= r) {
        const mid = Math.floor((r - l) / 2) + l

        min = Math.min(min, nums[mid])

        if (nums[mid] <= nums[r]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return min
};
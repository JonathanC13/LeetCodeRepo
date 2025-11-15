// https://leetcode.com/problems/binary-search/

/**
1. Assumptions
    1. Numbers are unique, but duplicates do not matter.
    2. Stated the Array is sorted in ascending order

2. input validation
    1. nums is an Array of Numbers
    2. target is a Number

3. Time and space constraints
    BTTC: O(log(n)) // points to Binary Search
    Space: O(1)

4. edge cases and some test cases
    edge cases
    1. no elements
        if (nums.length === 0) {
            return -1
        }
    2. 1 element
    some test cases
    1. 1 element and match
        input
            nums = [1], target = 1
        expected output
            0
    2. 1 element and no match
        input
            nums = [1], target = 2
        expected output
            -1
    3. > 1 elements and match
        input
            nums = [-1,0,3,5,9,12], target = 9
        expected output
            4
    4. > 1 elements and no match
        input
            nums = [-1,0,3,5,9,12], target = 10
        expected output
            -1

5. visualize by drawing and manaully solve
6. break into subproblem
    binary search
    l = 0
    r = nums.length - 1

    while (l <= r)
        get the mid

        if target === nums[mid]: return mid
        else if (target < nums[mid]) { go left }
        else { go right }

    return -1   // exhausted all elements

7. Algos
    1. Binary Search

8. Data structures
    1. Sorted Array

9. Complexity
    Iterative
    Time: O(log(n))
    Space: O(1)

    Recursive
    Time: O(log n)  // Since each step divides the problem set
    Space: O(log n)

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    // recursive
    const binarySearch = (l, r) => {
        if (l > r) {
            return -1
        }
        const mid = Math.floor((r - l) / 2) + l
        if (nums[mid] === target) {
            return mid
        }

        // Since nums is sorted
        if (nums[mid] > target) {
            return binarySearch(l, mid - 1)
        } else {
            return binarySearch(mid + 1, r)
        }
    }

    // iterative
    const binItr = () => {
        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            const mid = Math.floor((r - l) / 2) + l
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return -1
    }

    console.log(binItr())
    return binarySearch(0, nums.length - 1)
};
// https://leetcode.com/problems/first-missing-positive/description/

/**
1. Assumptions
    1. Range of values? Any Number
    2. first positive is 1

2. input validation
    - typing
        nums instanceof Array
    - length
        1. if nums.length === 0: return 1
    - content
        nums contains Numbers

3. time/space constraints
    Time: O(n)
    Space: O(1) // if no space constraint, could have a var to start at 1 and a Map to store each positive value. When the var's value is encountered; var += 1, then while(map.has(var)): var += 1 // to go through Numbers that were previously recorded. Finally return var as the first positive missing

4. edge cases and some test cases
    edge cases
    1. if nums.length === 0: return 1
    some test cases
    1. all negative
        input:
            nums = [-5, -1]
        ouput
            expected = 1
    2. missing positive is within nums.length. (1 <= missing <= nums.length)
        input:
            nums = [1, 3, 0]
        expected output
            = 2
    3. missing positive is > nums.length
        input:
            nums = [1, 3, 2]
        expected output
            = 4

5. visualize by drawing and manually sove
6. break into subproblems
    since find first missing positive, can use the input nums Array to mark which values from 1 to nums.length exists. (idx 0 stores 1, etc)
    if the nums Array has all values from 1 to nums.length, then the first missing is nums.length + 1
    else, the first missing is within the nums Array.

    iterate the nums and any value that is <= 0 or > nums.length convert to nums.length + 1 to ensure out of range. Time: O(n)

    iterate the nums and if the absolute value at the index is <= nums.length, then at the index = abs(value) - 1 if not already negative negate the value to indicate that the value exists where value = index + 1. Time: O(n)

    iterate to find the first non-negative value, if found return index + 1. Time: O(n)

    if no non-negative found, return nums.length + 1

7. algos
    - Hashing

8. data structures
    - Array

9. Complexity
    Time: O(n)  // n + n + n ~= n
    Space: O(1) // use input Array

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums.length === 0) {
        return 1
    }

    const n = nums.length
    for (let i = 0; i < n; i ++) {
        if (nums[i] < 1 || nums[i] > n) {
            nums[i] = n + 1
        }
    }

    for (let i = 0; i < n; i ++) {
        const idx = Math.abs(nums[i]) - 1
        if (idx < n && nums[idx] > 0) {
            nums[idx] = nums[idx] * -1
        }
    }

    for (let i = 0; i < n; i ++) {
        if (nums[i] > 0) {
            return i + 1
        }
    }
    return n + 1
};
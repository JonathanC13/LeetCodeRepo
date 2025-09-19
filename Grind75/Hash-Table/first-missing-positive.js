// https://leetcode.com/problems/first-missing-positive/description/

/**
Solution must be Time O(n)
    1. Cannot sort since Time: O(log n)
Solution must be Space: O(1) // constant
    1. Cannot create dynamic mem datastructure

With Space: O(n)
    keep track of the first positive starting at 1.

    create a Set for the seen values

    for (let i = 0; i < nums.length; i ++) {
        st.add(nums[i])

        while (st.has(firstPos)) {
            firstPos += 1
        }
    }

    return firstPos
        
    - Time: O(n)
    - Space: O(n)

With Space: O(1)    // constant
    try to determine if the Array nums has all the positive numbers from 1 to nums.length by:

    // mark all values that are < 1 and > n with n + 1 so that all the values in nums are in the range 1 to n + 1
    iterate nums
        if (nums[i] < 1 || nums[i] > n) {
            nums[i] = n + 1
        }

    // mark each nums[nums[i] - 1] = -1 * nums[nums[i] - 1] to put the value in the correct index and indicate that the index is 'used'
    // 
        e.g. [3, 1, 4]
        look at nums[0]
        num = 3
        num - 1 = index 2
        nums[2] = -1 * nums[2]   = [3, 1, -4]

        nums[1]
        num = 1
        num - 1 = index 0 
        nums[0] = -1 * nums[0]  = [-3, 1, -4]

        Then iterate the Array, if the index is positive then that index is the first missing positive
        
    //
    iterate nums
        let num = Math.abs(nums[i])
        if (num > n) {
            // out of range, skip
            continue
        }

        num -= 1
        if (nums[num] > 0) {
            nums[num] = -1 * nums[num]
        }

    // search for non-negative, if exists the missing number is i + 1
    iterate nums
        if (nums[i] >= 0) {
            return i + 1
        }

    // if reach the end, it means the positive missing is nums.length + 1
    return nums.length + 1

    - Time: O(n). n + n + n = 3n ~= n
    - Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length
    for (let i = 0; i < n; i ++) {
        if (nums[i] < 1 || nums[i] > n) {
            nums[i] = n + 1
        }
    }

    for (let i = 0; i < n; i ++) {
        let currNum = Math.abs(nums[i])
        if (currNum > n) {
            continue
        }

        currNum -= 1
        if (nums[currNum] > 0) {
            // not yet marked
            nums[currNum] = -1 * nums[currNum]
        }
    }
    // console.log(nums)

    for (let i = 0; i < n; i ++) {
        if (nums[i] > 0) {
            return i + 1
        }
    }

    return n + 1
};
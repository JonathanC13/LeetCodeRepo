// https://leetcode.com/problems/first-missing-positive/description/

/*
Non-constant space
    create a Set

    iterate the nums and add into the Set

    let i = 1
    while (true) {
        if (!set.has(i)) {
            return i
        }
        i += 1
    }

    - Time: O(n)
    - Space: O(n)

Constant space
    try to determine if the Array nums has all the positive numbers from 1 to nums.length by:

    // mark all values that are < 1 and > n with n + 1 so that all the values in nums are in the range 1 to n + 1
    iterate nums
        if (nums[i] < 1 || nums[i] > n) {
            nums[i] = n + 1
        }

    // mark each index of nums[i] - 1 to -nums[nums[i] - 1] to indicate that the index is 'used'
    iterate nums
        let num = Math.abs(nums[i])
        if (num > n) {
            continue
        }

        nums -= 1
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
    const ConstantSpace = () => {
        const n = nums.length

        for (let i = 0; i < n; i ++) {
            if (nums[i] < 1 || nums[i] > n) {
                nums[i] = n + 1
            }
        }

        for (let i = 0; i < n; i ++) {
            let num = Math.abs(nums[i])
            if (num > n) {
                continue
            }
            num -= 1
            if (nums[num] > 0) {
                nums[num] = -1 * nums[num]
            }
        }
        
        for (let i = 0; i < n; i ++) {
            if (nums[i] >= 0) {
                return i + 1
            }
        }

        return n + 1
    }

    return ConstantSpace()

    const nonConstantSpace = () => {
        const set = new Set()

        for (let i = 0; i < nums.length; i ++) {
            set.add(nums[i])
        }

        let i = 1
        while (true) {
            if (!set.has(i)) {
                return i
            }
            i += 1
        }
    }

    // return nonConstantSpace()


};
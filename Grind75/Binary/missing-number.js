// https://leetcode.com/problems/missing-number/

/**
** marking solution. Too much trouble for -0 lol.
    iterate i in nums
        if (nums[i] < n) {
            mark that value at nums[nums[i]] to negative to indicate exists
        }

    iterate i in nums
        if there is a positive value, that is the missing number

    if got to the end, the missing number is n

    - Time: O(n)
    - Space: O(1)

** bitwise soln.
    since values are from [0, n] and if XOR the same number results in 0. e.g. 1 ^ 1 = 0
    If a value exists it will eventually XOR with the index of the same value to result in 0. The final result of all the XOR is the missing value

    res = n
    iterate i in nums
        res = res ^ i ^ nums[i]

    return res

    - Time: O(n)
    - Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // return markSoln(nums)

    const n = nums.length
    let res = n
    for (let i = 0; i < nums.length; i ++) {
        res = res ^ i ^ nums[i]
    }

    return res
};

const markSoln = function(nums) {
    const n = nums.length

    for (let i = 0; i < n; i ++) {
        val = Math.abs(nums[i]) // abs since it could have been marked by another index
        if (val < n) {
            nums[val] = -1 * nums[val]  // for value 0, there is -0
        }
    }
    console.log(nums)

    for (let i = 0; i < n; i ++) {
        if (nums[i] === -0) {
            continue
        }
        if (nums[i] >= 0) {
            return i
        }
    }

    return n
}
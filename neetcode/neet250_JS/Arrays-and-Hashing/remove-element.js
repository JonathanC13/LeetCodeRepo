// https://leetcode.com/problems/remove-element/

/*
in-place: operates directly on the input data structure without requiring extra space proportional to the input size

let i = 0
let j = nums.length - 1

// iterate and find num that is === val, then swap to index j which is the section of nums that === val
while i <= j
    if (nums[i] === k) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp

        j -= 1
    } else {
        i += 1
    }

nums = nums.slice(0, j + 1)

return k

Time: O(n)
Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    let i = 0
    let j = nums.length - 1

    while (i <= j) {
        if (nums[i] === val) {
            const tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
            k += 1
            j -= 1
        } else {
            i += 1
        }
    }
    nums = nums.slice(0, nums.length - k)
    return nums.length
};
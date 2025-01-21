// https://leetcode.com/problems/rotate-array/

/*


- Time: O(n)
- Space: O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    var reverse = function(start, end) {
        while (start < end) {
            const temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp

            start ++
            end --
        }
    }
    
    let rotates = k % nums.length
    console.log(rotates)
    if (rotates < 0) {
        rotates += nums.length
    }
    
    reverse(0, nums.length - rotates - 1)
    reverse(nums.length - rotates, nums.length - 1)
    reverse(0, nums.length - 1)
    console.log(nums)
};
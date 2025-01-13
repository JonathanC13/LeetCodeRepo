// https://leetcode.com/problems/majority-element/

/*
create a Map to maintain the frequency of each number

iterate the nums
    update the freq in the Map
    if the number freq > n/2
        return number

majNum = 0
max = 0
iterate Map key,val
    if val > max:
        majNum = key
        max = val

return max

Time: O(n)
Space: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const freq = new Map()

    for(let i = 0; i < nums.length; i ++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
        if (freq.get(nums[i]) > nums.length/2) {
            return nums[i]
        }
    }

    majNum = 0
    max = 0
    for (let [k, v] of freq.entries()) {
        if (v > max) {
            majNum = k
            max = v
        }
    }

    return majNum
};
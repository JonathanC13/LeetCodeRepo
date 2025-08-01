// https://leetcode.com/problems/single-number/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a res variable, init to 0

iterate the nums
    XOR num with res

the result in res will be the number that has a single occurance while the numbers with 2 occurances will cancel eachother out.
e.g.    1010
        1010    XOR
        0000

Time: O(n)
Space: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
    for (let i = 0; i < nums.length; i ++) {
        res ^= nums[i]
    }
    return res
};
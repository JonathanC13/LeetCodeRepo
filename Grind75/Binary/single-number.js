// https://leetcode.com/problems/single-number/description/

/**
2 XOR 2
0010 ^ 0010 = 0
XOR 1
0000 ^ 0001 = 1

maintain running XOR result

iterate nums and XOR every value

The final XOR result is the single number since every element that appears twice XORs itself to 0

- Time: O(n)
- Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0

    for (let i = 0; i < nums.length; i++){
        res ^= nums[i]
    }

    return res
};
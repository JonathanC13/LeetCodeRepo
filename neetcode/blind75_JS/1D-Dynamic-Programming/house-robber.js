// https://neetcode.io/problems/house-robber

class Solution {

    /*
    create a table to track the max profit at the current house
    2 options:
        1. rob: so the max profit comes from i and i - 2
        2. not rob: the max profit comes from i - 1
    */
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) { return 0 }
        if (nums.length === 1) { return nums[0] }

        const dpTable = Array(nums.length).fill(0)
        dpTable[0] = nums[0]
        dpTable[1] = Math.max(nums[0], nums[1])

        for (let i = 2; i < nums.length; i ++) {
            // rob, not rob
            dpTable[i] = Math.max(dpTable[i - 2] + nums[i], dpTable[i - 1])
        }
        console.log(dpTable)
        return dpTable[nums.length - 1]
    }
}

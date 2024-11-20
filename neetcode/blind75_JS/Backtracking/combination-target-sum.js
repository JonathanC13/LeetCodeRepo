// https://neetcode.io/problems/combination-target-sum

class Solution {

    dfs(nums, solnList, resList, sum, target, idx) {
        if (sum > target) {
            return
        }
        if (sum === target) {
            resList.push(Array.from(solnList))
        }

        for (let i = idx; i < nums.length; i ++){
            solnList.push(nums[i])

            this.dfs(nums, solnList, resList, sum + nums[i], target, i)

            solnList.pop()
        }

        return
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        if (nums.length === 0 || (nums.length === 1 && nums[0] < target)){
            return []
        }
        
        const solnList = []
        const resList = []

        this.dfs(nums, solnList, resList, 0, target, 0)

        return resList
    }
}

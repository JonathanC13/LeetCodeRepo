// https://neetcode.io/problems/partition-equal-subset-sum/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are positive Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n * target)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length <= 1: return false
 * 
 *  test cases
 *  1. can partition
 *      inputs
 *          nums = [1,2,3,4]
 *      expected output
 *          true, 5
 * 
 *  2. cannot partition
 *      inputs 
 *          nums = [1,2,3,4,5]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. dfs recursive backtracking to try combinations to try to get to equal sum
 *      get the total sum, if the total is odd then equal partition is impossible since nums's elements are integers
 *      
 *      base case 1:
 *      if sum === target:
 *          return true
 * 
 *      base case 2:
 *      if i >= nums.length: no more elements to use, return false
 * 
 *      2 paths:
 *      1. do not use current element in sum
 *      2. use current in sum
 * 
 *      return(#1 || #2)
 * 
 *      Time: O(n * 2^n)
 *      Space: O(n)
 *  
 *  2. reduce time complexity with memo to Time: O(n)
 *      memo is 2D array:
 *          rows = len of nums.length, for each index
 *          cols = len of target sum + 1
 * 
 *          Each cell is if there is a path to target sum
 *          Space: O(n * target)
 * 
 * 7. algos
 *  - DFS recursive backtracking with memo 2D
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: (n * target)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        if (nums.length <= 1) {
            return false
        }

        let total = 0
        for (let num of nums) {
            total += num
        }
        if (total % 2 === 1) {
            return false
        }

        const memo = new Array(nums.length).fill().map((e) => new Array((total / 2) + 1).fill(null))
        const part = []
        const res = this.dfs(nums, 0, total / 2, [], part, memo)
        // console.log(memo)
        // const part2 = nums.filter((_, index) => !part[0].includes(index));
        // console.log(part, " ; ", part2)

        return res
    }

    dfs(nums, i, target, currPart, part, memo) {
        if (target === 0) {
            part[0] = [...currPart]
            return true
        }
        if (i >= nums.length || target < 0) {
            return false
        }
        if (memo[i][target] !== null) {
            // console.log('hit, ', i, target)
            return memo[i][target]
        }
        
        const notUse = this.dfs(nums, i + 1, target, currPart, part, memo)

        currPart.push(i)
        const use = this.dfs(nums, i + 1, target - nums[i], currPart, part, memo)
        currPart.pop()

        memo[i][target] = notUse || use

        return memo[i][target]
    }
}

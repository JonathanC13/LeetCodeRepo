// https://neetcode.io/problems/combination-target-sum/question

/**
 * 1. Assumptions
 *  1. Given:
 *      - distinct numbers, this makes generating unique combinations easier. If it had duplicates, then would need to sort first, get the combo, and then check if already created.
 *      - Positive Numbers, this makes the end base case easier: if target < 0: return since after there is no way back to 0 for a valid combination
 *          - If negatives allowed, the infinite re-use becomes a problem because it will lead to infinite loop. Need to ask if there is a limit to the length of a combination, when reached return.
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums containts distinct Numbers
 *  2. target
 *      - typeof target === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(2^(t/m))    // m = minimum value in nums. m can fit into t, t/m times therefore max time at 2^(t/m). 2^ since current number used or move to next num.
 *  Space: O(t/m)
 * 
 * 4. edge cases and some test cases
 *  edge cases:
 *  1. if nums.length === 0: return []
 * 
 *  test cases
 *  1. combination re-uses a number multiple times
 *      inputs
 *          nums = [1,2]
 *          target = 3
 *      expected output
 *          [[1,1,1],[1,2]]
 * 
 *  2. target = 0 with valid combinations
 *      inputs
 *          nums = [1,2,-1]
 *          target = 0
 *      expected output
 *          [[1,-1]]
 * 
 *  3. target = 0 with no combinations
 *      inputs
 *          nums = [1,2]
 *          target = 0
 *      expected output
 *          []
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 * 
 *  base case 1: if target satified
 *  if target === 0 and currCombo.length !== 0
 *      res.push([...currCombo])
 * 
 *  iterate each num from i to end
 *      recursive call with target - nums[i]. // try to use this nums[i] in the combination
 * 
 *  return
 * 
 *  Since the numbers are distinct, unqiue combinations will be generated from a recursive backtracking solution.
 *  If not unique, sort the nums so that the duplicates are ordered, then when a combination is generated converting the combo into a String to add to a Set will eliminate duplicate combos.
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Arrays
 *      
 * 9. complexity
 *  Time: O(2^(t/m))
 *  Space: O(t/m)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        if (nums.length === 0) {
            return []
        }

        const res = new Array()
        this.rec(nums, 0, target, new Array(), res)

        return res
    }

    rec(nums, i, target, currCombo, res) {
        if (target < 0) {
            return
        }
        if (target === 0 && currCombo.length !== 0) {
            res.push([...currCombo])
            return
        }

        for (let j = i; j < nums.length; j ++) {
            currCombo.push(nums[j])
            this.rec(nums, j, target - nums[j], currCombo, res)
            currCombo.pop()
        }

        return
    }
}

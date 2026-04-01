// https://neetcode.io/problems/jump-game/question

/**
 * 1. Assumptions
 *  1. jump values are >= 0
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length <= 1: return true
 * 
 *  test cases
 *  1. can reach last index
 *      inputs
 *          nums = [2,3,0,0]
 *      expected output
 *          true
 * 
 *  2. cannot reach last index
 *      inputs
 *          nums = [1,2,0,0,1]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  greedy with 1D tabulation
 *  create table with length of nums.length, each index has whether the index can reach the last index
 *      init state:
 *          tab[n-1] = true
 * 
 *  iterate i at the end to 0
 *      for each jump value at i, check if can reach end
 *          if i + jump >= n || tab[i + jump] === true: 
 *              tab[i] = true
 *              break
 *          // else try a lesser jump
 * 
 *  return tab[0]
 * 
 * 7. algos
 *  - Greedy with 1D dp tabulation
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n^2)
 *  Space: O(n)
 *              
 *          
 */



class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if (nums.length <= 0) {
            return true
        }

        return this.withoutDP(nums)

        const n = nums.length
        const tab = new Array(n).fill(null)
        tab[n-1] = true

        for (let i = n-1; i >= 0; i --) {
            for (let jump = nums[i]; jump > 0; jump --) {
                if (i + jump >= n || tab[i + jump] === true) {
                    tab[i] = true
                    break
                }
            }
            if (tab[i] === null) {
                tab[i] = false
            }
        }

        return tab[0]
    }

    // Time: O(n)
    // Space: O(1)
    withoutDP(nums) {
        const n = nums.length
        let goal = n - 1    // if a jump can >= the current goal, there is a path to the end from i.

        for (let i = n-2; i >= 0; i--) {
            if (i + nums[i] >= goal) {
                goal = i    // move the goal post back
            }
        }

        return goal === 0
    }
}

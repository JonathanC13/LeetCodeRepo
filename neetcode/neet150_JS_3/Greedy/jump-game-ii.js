// https://neetcode.io/problems/jump-game-ii/question

/**
 * 1. Assumptions
 *  1. ..
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Number >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length <= 1: return 0
 * 
 *  test cases
 *  1. there is min number of jumps
 *      inputs
 *          nums = [2,3,1,1,1]
 *      expected ouput
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. method 1: dfs recursive backtracking
 *      base case 1: if i >= nums.length - 1: return 0
 * 
 *      minJumps = pos infin
 * 
 *      for j = nums[i]; j > 0: j --
 *          minJumps = min(minJumps, dfs(i + j),...)
 * 
 *      return minJumps
 *      Time: O(n * j^n)
 *      * Can add memo to reduce Time to O(n^2)
 * 
 *  2. method 2: greedy
 *      breadth first search and the minJumps is first to reach >= nums.length - 1
 *      instead of a queue can use a 'window' to track the next level's 'jump window' since i can jump to i + [1, j].
 *      
 *      first window
 *      l = 0
 *      r = 0 
 *      
 *      The next window is:
 *          farthest = max jump of values from l to r
 *      l = r + 1
 *      r = farthest
 *      * since jump can be i + [1, value]
 *      
 *      Time: O(n)
 *      Space: O(1)
 * 
 * 7. algos
 *  - Greedy with BFS
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(1)
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (nums.length <= 1) {
            return 0
        }
        const n = nums.length

        let l = 0
        let r = 0
        let minJumps = 0
        while (r < n - 1) {
            let farthest = 0
            for (let i = l; i <= r; i ++) {
                farthest = Math.max(farthest, i + nums[i])
            }
            if (farthest === 0) {
                return -1 // cannot get to n - 1
            }
            l = r + 1
            r = farthest
            minJumps += 1
        }

        return minJumps
    }
}

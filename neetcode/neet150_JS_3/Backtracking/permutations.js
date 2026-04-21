// https://neetcode.io/problems/permutations/question

/**
 * 1. Assumptions
 *  1. Given, unqiue
 * 
 * 2. input validation
 *  1. nums
 *      - nums instanceof Array
 *      - nums.length >= 0
 *      - nums's elements are Number
 * 
 * 3. time and space constraints
 *  BTTC: O(n! * n) // n! since each index used in a perm reduces the available, * n to iterate to choose next index in the perm
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if nums.length <= 1: return [[...nums]]
 * 
 *  test cases
 *  1. normal
 *      inputs
 *          nums = [1,2,3]
 *      expected output
 *          [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create visited Array for the currently used indexes in the permutation
 * 
 *  recursive backtracking to choose a different index for a new permutation
 *  base case 1: if perm.length === nums.length: res.push([...perm]); return
 * 
 *  iterate visited to use unvisited indexes for the permutation
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n! * n)
 *  Space: O(n)
 * 
 */

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (nums.length <= 1) {
            return [[...nums]]
        }
        const n = nums.length
        const visited = new Array(n).fill(false)
        const res = new Array()
        this.rec(nums, visited, new Array(), res)
        return res
    }

    rec(nums, visited, perm, res) {
        if (perm.length === nums.length) {
            res.push([...perm])
            return
        }

        for (let i = 0; i < visited.length; i ++) {
            if (!visited[i]) {
                visited[i] = true
                perm.push(nums[i])
                this.rec(nums, visited, perm, res)
                perm.pop()
                visited[i] = false
            }
        }

        return
    }
}

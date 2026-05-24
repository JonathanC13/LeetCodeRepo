// https://neetcode.io/problems/merge-triplets-to-form-target/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  - triplets
 *      - triplets instanceof Array
 *      - triplets.length >= 0
 *      - triplets's elements are [Number, Number, Number]
 *  - target
 *      - target instanceof Array
 *      - target is [Number, Number, Number]
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if triplets.length === 0: return false
 * 
 *  test cases
 *  1. can merge to target
 *      inputs
 *          triplets = [[1,2,3],[1,5,3],[1,4,2]], target = [1,4,3]
 *      expected output
 *          true
 *  2. cannot merge to target
 *      inputs
 *          triplets = [[1,2,3],[1,5,3],[1,4,2]], target = [1,5,2]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  merged = [neg infin, neg infin, neg infin]
 *  merge all triplets where the every value at the corresponding <= values in target.
 *  compare to target
 * 
 *  #2. 
 *      create a Set for the indexes that can be merged to.
 *      iterate the triplets, i
 *          if (triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[02]) {
 *              continue}
 *          for j in triplets[i]
 *              if triplets[i][j] === target[j]
 *                  Set.add(j)
 * 
 *      return Set.size === 3   // means all indexes can be merged to target
 * 
 * 7. algos
 *  - Greedy, local solution leads to global solution
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        if (triplets.length === 0) {
            return false
        }

        const merged = [Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY]
        for (let i = 0; i < triplets.length; i ++) {
            let mergable = true
            for (let j = 0; j < triplets[i].length; j ++) {
                if (triplets[i][j] > target[j]) {
                    mergable = false
                    break
                }
            }

            if (mergable) {
                merged[0] = Math.max(merged[0], triplets[i][0])
                merged[1] = Math.max(merged[1], triplets[i][1])
                merged[2] = Math.max(merged[2], triplets[i][2])
            }
        }
    
        return merged[0] === target[0] && merged[1] === target[1] && merged[2] === target[2]
    }
}

// https://neetcode.io/problems/two-integer-sum-ii/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. Input validation
 *  1. numbers
 *      - numbers instanceof Array
 *      - numbers.length >= 0
 *      - numbers element's are Number
 * 
 *  2. target
 *      - typeof target === 'number'
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if numbers.length < 2: return []
 *  
 *  test cases
 *  1. positive target
 *      inputs
 *          numbers = [1,2,3,5]
 *          target = 5
 *      expected output
 *          [2,3]
 *  2. negative target
 *      inputs
 *          numbers = [-5, -3, 1, 2, 6]
 *          target = [-1]
 *      expected output
 *          [2,4]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  left pointer at 0, right pointer at length - 1
 *  if the sum of numbers[l] + numbers[r] === target: return [l + 1,r + 1] // +1 since want 1-indexed
 *  if > target: r -= 1 to use a less positive number
 *  if < target: l += 1 to use a more positive number
 * 
 * 7. algos
 *  - two pointers
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
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length - 1

        while (l < r) {
            const sum = numbers[l] + numbers[r]
            if (sum === target) {
                return [l + 1, r + 1]
            } else if (sum > target) {
                r -= 1
            } else {
                l += 1
            }
        }

        return []
    }
}

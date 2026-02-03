// https://neetcode.io/problems/max-water-container/question

/**
 * 1. Assumptions
 *  1. heights[i] >= 0
 * 
 * 2. input validation
 *  1. heights
 *      - heights instanceof Array
 *      - heights.length >= 0
 *      - heights's elements are positve Numbers
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if heights.length < 2: return 0
 * 
 *  test cases
 *  1. 
 *      inputs
 *          heights = [1,7,2,5,4,7,3,6]
 *      expected output
 *          36
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  2 pointers;
 *  1. left start at 0
 *  2. right start at height.length - 1
 * 
 *  record the water contained between left and right
 *  move the pointer that has the lower height, this is because to strive for larger area keep the higher height
 * 
 * 7. algos
 *  - 2 pointers
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity    
 *  Time: O(n)
 *  Space: O(1)
 * 
 */

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (heights.length < 2) {
            return 0
        }

        let maxWater = 0
        let l = 0
        let r = heights.length - 1

        while (l < r) {
            maxWater = Math.max(maxWater, Math.min(heights[l], heights[r]) * (r - l))

            if (heights[l] < heights[r]) {
                l += 1
            } else {
                r -= 1
            }
        }

        return maxWater
    }
}

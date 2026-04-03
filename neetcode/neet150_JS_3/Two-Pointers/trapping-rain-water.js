// https://neetcode.io/problems/trapping-rain-water/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. height
 *      - height instanceof Array
 *      - height.length >= 0
 *      - height element's are Number >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if height.length <= 1: return 0
 * 
 *  test cases
 *  1. multiple pockets
 *      inputs
 *          height = [0,2,0,3,1,0,1,3,2,1]
 *      expected output
 *          9
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  maintain a left highest and right highest wall. This is so the water contained between is min(leftHigh, rightHigh)
 *  maintain a left and right pointer for the current height to evaluate the water contained.
 *      Since have leftHigh and rightHigh: water = min(leftHigh, rightHigh) - height[ptr], where the ptr is whichever l or r moved.
 *      Move the pointer with the lower height in search for greater height since the goal is for max water trapped.
 * 
 *  * Another method is prefix and suffix where the indexes contain the highest running height.
 *      e.g. prefix as build from left to right, the index saves the highest height seen.
 *      Then after iterate every height and the water trapped at i is min(prefix[i], suffix[i]) - height[i]
 *      Time: O(n)  // 2*n
 *      Space: O(n) // 2*n
 * 
 * 7. algos
 *  - Two pointer
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
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftHigh = height[0]
        let rightHigh = height[height.length - 1]
        let l = 0
        let r = height.length - 1
        let water = 0
        while (l < r) {
            if (height[l] <= height[r]) {
                l += 1
                leftHigh = Math.max(leftHigh, height[l])
                water += Math.max(Math.min(leftHigh, rightHigh) - height[l], 0)
            } else {
                r -= 1
                rightHigh = Math.max(rightHigh, height[r])
                water += Math.max(Math.min(leftHigh, rightHigh) - height[r], 0)
            }
        }

        return water
    }
}

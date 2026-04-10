// https://neetcode.io/problems/largest-rectangle-in-histogram/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. heights
 *      - heights instanceof Array
 *      - heights.length >= 0
 *      - heights element's are Number >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if heights.length === 0: return 0
 *  2. if heights.length === 1: return heights[0]
 * 
 *  test cases
 *  1. largest rectangle updated
 *      inputs
 *          heights = [5,1,3,4]
 *      expected output
 *          6
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  maintain a monotonic decreasing stacks (decrease from top to bottom) where the elements are [val, idx]
 *      The idx is the most left that has the val, this is so that when calculating the area with this element it has the x1 point
 *  1. One for left to right
 *  2. One for right to left
 *  Need 2 stacks since a bar could stretch further to one side.
 * 
 *  iterate heights
 *      update maxArea with itself; maxArea = max(maxArea, heights[i])
 *      let idx = i // for how far left the current height goes left
 *      maintain monotonic decrease and calculate rectangle with removed
 *      while (stack not empty && heights[i] <= stack top val)
 *          idx = pop()[1]
 *          pop and update maxArea
 * 
 *      if stack not empty, update maxArea with top
 * 
 *      stack push ([heights[i], idx])
 * 
 *      repeat for right to left
 * 
 *  return maxArea
 * 
 * 7. algos
 *  - monotonic decreasing stack operations
 * 
 * 8. data structures
 *  - Stack with Array
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        if (heights.length === 0) {
            return 0
        }

        // refined.
        return this.soln2(heights)

        // first solution.
        let maxArea = 0
        const decStk = new Array()
        const decStk2 = new Array()

        for (let i = 0; i < heights.length; i ++) {
            // going left to right
            maxArea = Math.max(maxArea, heights[i])
            let idx = i
            while (decStk.length > 0 && heights[i] <= decStk[decStk.length - 1][0]) {
                idx = decStk.pop()[1]
                maxArea = Math.max(maxArea, (i - idx + 1) * heights[i])
            }

            if (decStk.length > 0) {
                maxArea = Math.max(maxArea, (i - decStk[decStk.length - 1][1] + 1) * decStk[decStk.length - 1][0])
            }

            decStk.push([heights[i], idx])

            // going right to left
            let j = heights.length - i - 1
            maxArea = Math.max(maxArea, heights[j])
            idx = j
            while (decStk2.length > 0 && heights[j] <= decStk2[decStk2.length - 1][0]) {
                idx = decStk2.pop()[1]
                maxArea = Math.max(maxArea, (idx - j + 1) * heights[j])
            }

            if (decStk2.length > 0) {
                maxArea = Math.max(maxArea, (decStk2[decStk2.length - 1][1] - j + 1) * decStk2[decStk2.length - 1][0])
            }

            decStk2.push([heights[j], idx])

        }
        // console.log(decStk)
        // console.log(decStk2)
        return maxArea
    }

    soln2(heights) {
        /**
         * create 2 Arrays
         * 1. For the value at i, furthest index left
         * 2. For the value at i, furthest index right
         * 
         * To determine the furthest going left/right
         * use monotonic descreasing stack, so when the top is a >= value pop it. Hold index but sorted based on heights[index] in decreasing order
         * 
         * furthest left/right = i - stack top + 1
         */
        const n = heights.length
        const left = new Array(n).fill(0)
        const right = new Array(n).fill(0)

        const decStk = new Array()

        for (let i = 0; i < n; i ++) {
            while (decStk.length > 0 && heights[decStk[decStk.length - 1]] >= heights[i]) {
                decStk.pop()
            }

            left[i] = (decStk.length === 0) ? 0 : decStk[decStk.length - 1] + 1
            decStk.push(i)
        }

        decStk.length = 0
        for (let i = n - 1; i >= 0; i --) {
            while (decStk.length > 0 && heights[decStk[decStk.length - 1]] >= heights[i]) {
                decStk.pop()
            }

            right[i] = (decStk.length === 0) ? n - 1 : decStk[decStk.length - 1] - 1
            decStk.push(i)
        }
        // console.log(left)
        // console.log(right)
        let maxArea = 0
        for (let i = 0; i < n; i ++) {
            maxArea = Math.max(maxArea, (right[i] - left[i] + 1) * heights[i])
        }

        return maxArea
    }
}

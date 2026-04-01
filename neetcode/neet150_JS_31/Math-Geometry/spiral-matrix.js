// https://neetcode.io/problems/spiral-matrix/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. matrix
 *      - matrix instanceof Array
 *      - matrix.length >= 0
 *      - matrix element's are Arrays of Number
 * 
 * 3. time and space constraints
 *  BTTC: O(r * c)
 *  Space: O(r * c) // for result
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. matrix.length === 0: return []
 * 
 *  test cases
 *  1. n x n
 *      inputs
 *          matrix = [[1,2],[3,4]]
 *      expected output
 *          [1,2,3,4]
 * 
 *  2. r > c
 *      inputs
 *          matrix = [[1,2],[3,4],[5,6]]
 *      expected output
 *          [1,2,4,6,5,3]
 * 
 *  3. r < c
 *      inputs
 *          matrix = [[1,2,3],[4,5,6]]
 *      expected output
 *          [1,2,3,6,5,4]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  keep track of; top row, bottom row, left col, and right col
 * 
 *  while (top row <= bottom row && left col <= right col)
 *      get top row elements from [top][left] to [top][right]
 *      top += 1
 * 
 *      exit here if top > bottom. exit early if single center or catch cases where r < c
 * 
 *      get right col elements from [top][right] to [bot][right]
 *      right -= 1
 * 
 *      exit here if left > right. r > c
 * 
 *      get bot row elements from [bot][right] to [bot][left]
 *      bot -= 1
 * 
 *      get left col elements from [bot][left] to [top][left]
 * 
 * 7. algos
 *  - Geometry
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9.complexity
 *  Time: O(r * c)
 *  Space: O(r * c)
 * 
 */

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        if (matrix.length === 0) {
            return []
        }

        let top = 0
        let left = 0
        let bot = matrix.length - 1
        let right = matrix[0].length - 1

        const res = new Array()
        while (top <= bot && left <= right) {
            for (let c = left; c <= right; c ++) {
                res.push(matrix[top][c])
            }
            top += 1

            if (top > bot) {
                break
            }

            for (let r = top; r <= bot; r ++) {
                res.push(matrix[r][right])
            }
            right -= 1

            if (left > right) {
                break
            }

            for (let c = right; c >= left; c --) {
                res.push(matrix[bot][c])
            }
            bot -= 1

            for (let r = bot; r >= top; r --) {
                res.push(matrix[r][left])
            }
            left += 1
        }

        return res
    }
}

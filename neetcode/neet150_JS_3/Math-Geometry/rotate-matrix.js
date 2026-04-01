// https://neetcode.io/problems/rotate-matrix/question

/**
 * 1. Assumptions
 *  1. Given. n by n
 * 
 * 2. input validation
 *  1. matrix
 *      - matrix instanceof Array
 *      - matrix.length === matrix[0].length
 *      - matrix elements's are Arrays of Number
 * 
 * 3. time and space constraints
 *  - Time: O(n^2)  // must visit every cell
 *  - Space: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if matrix.length <= 1: return
 * 
 *  test cases
 *  1. minimum 2 x 2
 *      inputs
 *          matrix = [[1,2],[3,4]]
 *      expected output
 *          [[3,4],[4,2]]
 *  
 *  2. odd n, 3 x 3
 *      inputs
 *          matrix = [[1,2,3],[4,5,6],[7,8,9]]
 *      expected output
 *          [[7,4,1],[8,5,2],[9,6,3]]
 * 
 *  3. even n, 4 x 4
 *      inputs
 *          matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
 *      expected output
 *          [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  for each outer layer working in:
 *      save one corner of the current rotation set (e.g left of top row), choose next corner counter clockwise from saved corner to rotate in
 * 
 *  
 * 
 * 7. algos
 *  - Geometry/ matrix manipulation
 * 
 * 8. data structures
 *  - Matrix
 * 
 * 9. complexity
 *  Time: O(n^2)
 *  Space: O(1)
 */

/* Easier to track which layer with left and right
let l = 0
let r = matrix.length - 1

while (l < r) {
    for (let i = 0; i < r - l; i ++) {
        const tempTL = matrix[l][l + i]

        // tl <= bl
        matrix[l][l + i] = matrix[r - i][l]

        // bl <= br
        matrix[r - i][l] = matrix[r][r - i]

        // br <= tr
        matrix[r][r - i] = matrix[l + i][r]

        // temp tl to tr
        matrix[l + i][r] = tempTL     
    }

    l += 1
    r -= 1
}
*/

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        if (matrix.length <= 1) {
            return
        }

        const n = matrix.length
        // outer layer, work in
        for (let i = 0; i < n/2; i ++) {
            console.log('layer ', i)
            // rotate the elements in the layer. (e.g. top row from 0 to n - i - 1 so that right column is from row 0 to n - i - 1)
            for (let j = i; j < n - i - 1; j ++) {
                /*
                console.log(`rotations: ${n-j-1},${i} to ${i},${j}, 
                ${n-i-1},${n-j-1} to ${n-j-1},${i}, 
                ${j},${n-i-1} to ${n-i-1},${n-j-1}, 
                ${i},${j} to ${i+j},${n-i-1}`)
                */

                const temp = matrix[i][j]

                // bot left to top left
                matrix[i][j] = matrix[n-j-1][i]

                // bot right to bot left
                matrix[n-j-1][i] = matrix[n-i-1][n-j-1]

                // top right to bot right
                matrix[n-i-1][n-j-1] = matrix[j][n-i-1]

                // top left to top right
                matrix[j][n-i-1] = temp
            }
        }
    }
}

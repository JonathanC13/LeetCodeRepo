// https://leetcode.com/problems/rotate-image/description/

/**
- Time: O(r * c)
- Space: O(1)
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length

    let topR = 0
    let botR = n - 1
    let leftC = 0
    let rightC = n - 1

    while (leftC < rightC) {
        for (let i = 0; i < rightC - leftC; i ++) { // remember must start from 0 to set offset properly.
            // top left
            const tmp = matrix[topR][leftC + i]

            // replace top left with bottom left
            matrix[topR][leftC + i] = matrix[botR - i][leftC]

            // replace bottom left with bottom right
            matrix[botR - i][leftC] = matrix[botR][rightC - i]

            // replace bottom right with top right
            matrix[botR][rightC - i] = matrix[topR + i][rightC]

            // replace top right with tmp
            matrix[topR + i][rightC] = tmp
        }

        topR += 1
        botR -= 1
        leftC += 1
        rightC -= 1
    }
};
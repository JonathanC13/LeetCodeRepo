// https://leetcode.com/problems/rotate-image/?envType=study-plan-v2&envId=top-interview-150

/*
maintain which top row, bottom row, left col, and right col

while (top row < bottom row && left col < right col)
    iterate i from left col to right col
        tmp = matrix[topRow][leftCol + i]
        matrix[topRow][leftCol + i] = matrix[bottomRow - i][leftCol]    // top left gets bottom left
        matrix[bottomRow - i][leftCol] = matrix[bottomRow][rightCol - i]    // bottom left gets bottom right
        matrix[bottomRow][rightCol - i] = matrix[topRow + i][rightCol]    // bottom right gets top right
        matrix[topRow + i][rightCol] = tmpTL    // top right gets top left

    topRow += 1
    bottomRow -= 1
    leftCol += 1
    rightCol -= 1

- Time: O(r + c)
- Space: o(1)
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let topRow = 0
    let bottomRow = matrix.length - 1
    let leftCol = 0
    let rightCol = matrix[0].length - 1

    while (topRow < bottomRow && leftCol < rightCol) {
        // console.log(topRow, bottomRow, leftCol, rightCol)
        for (let i = 0; i < rightCol - leftCol; i ++) {
            const tmp = matrix[topRow][leftCol + i]
            matrix[topRow][leftCol + i] = matrix[bottomRow - i][leftCol]    // top left gets bottom left
            matrix[bottomRow - i][leftCol] = matrix[bottomRow][rightCol - i]    // bottom left gets bottom right
            matrix[bottomRow][rightCol - i] = matrix[topRow + i][rightCol]    // bottom right gets top right
            matrix[topRow + i][rightCol] = tmp    // top right gets top left
        }

        topRow += 1
        bottomRow -= 1
        leftCol += 1
        rightCol -= 1
    }
};
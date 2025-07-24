// https://leetcode.com/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-interview-150

/**
maintain variables for the top row, bottom row, left col, and right col

while top row < bottom row && left row < right row
    // going right for top row
    iterate i from left col to right col
        res.push(matrix[top row][i])

    top row += 1

    // going down for right col
    iterate i from top row to bottom row
        res.push(matrix[i][right col])

    right col -= 1

    // going left for bottom row
    iterate i from right col -1 to left col
        res.push(matrix[bottom row][i])

    bottom row -= 1

    // going up for left col
    iterate i from bottom row -1 to top row
        res.push(matrix[i][left col])

    left col += 1

return res

- Time: O(r * c)
- Space: O(r * c)
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = new Array()
    const rows = matrix.length - 1
    const cols = matrix[0].length - 1

    let topRow = 0
    let bottomRow = rows
    let leftCol = 0
    let rightCol = cols

    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let i = leftCol; i <= rightCol; i ++) {
            res.push(matrix[topRow][i])
        }
        topRow += 1

        if (topRow > bottomRow) {
            break
        }

        for (let i = topRow; i <= bottomRow; i ++) {
            res.push(matrix[i][rightCol])
        }
        rightCol -= 1

        if (leftCol > rightCol) {
            break
        }

        for (let i = rightCol; i >= leftCol; i --) {
            res.push(matrix[bottomRow][i])
        }
        bottomRow -= 1

        for (let i = bottomRow; i >= topRow; i --) {
            res.push(matrix[i][leftCol])
        }
        leftCol += 1
    }

    return res
};
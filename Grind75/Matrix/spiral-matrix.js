// https://leetcode.com/problems/spiral-matrix/description/

/**
create var for top row
create var for bottom row
create var for left col
create var for right col

while (top <= bottom && left <= right)
    // top row
    for (let c = left; c <= right; c ++) {
        res.push(matrix[topRow][c])
    }
    topRow += 1

    if (topRow > botRow) {
        // for matrix with rows >= cols, after processed the center cell/row then break
        break
    }

    // right side
    for (let r = topRow; r <= botRow; r ++) {
        res.push(matrix[r][rightCol])
    }
    rightCol -= 1

    if (rightCol < leftCol) {
        //if rows <= cols, after processed center cell/row then break
        break
    }

    // bottom row
    for (let c = rightCol; c >= leftCol; c --) {
        res.push(matrix[botRow][c])
    }
    botRow -= 1

    // left side
    for (let r = botRow; r >= topRow; r --) {
        res.push(matrix[r][leftCol])
    }
    leftCol += 1

return res

- Time: O(r * c)
- Space: O(r * c)
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let topR = 0
    let botR = matrix.length - 1
    let leftC = 0
    let rightC = matrix[0].length - 1

    const res = new Array()

    while (topR <= botR && leftC <= rightC) {
        for (let c = leftC; c <= rightC; c ++) {
            res.push(matrix[topR][c])
        }
        topR += 1

        if (topR > botR) {
            break
        }

        for (let r = topR; r <= botR; r ++) {
            res.push(matrix[r][rightC])
        }
        rightC -= 1

        if (leftC > rightC) {
            break
        }

        for (let c = rightC; c >= leftC; c --) {
            res.push(matrix[botR][c])
        }
        botR -= 1

        for (let r = botR; r >= topR; r --) {
            res.push(matrix[r][leftC])
        }
        leftC += 1
    }

    return res
};
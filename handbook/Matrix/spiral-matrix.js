// https://leetcode.com/problems/spiral-matrix/description/

/**
1. Assumptions
    1. rows and cols any length

2. Input validation
    matrix is a 2D Array

3. time and space constraints
    BTTC: O(r * c)  // need to visit every cell
    Space: O(r * c) // for result

4. edge cases and some test cases
    edge cases
    1. if matrix.length === 0: return []
    test cases
    1. rows > cols
        input
            matrix = [[1, 2], [3, 4], [5, 6]]
        expected output
            [1, 2, 4, 6, 5, 3]
    2. cols > rows
        input
            matrix = [[1, 2, 3], [4, 5, 6]]
        expected output
            [1, 2, 3, 6, 5, 4]
    3. rows === cols
        input
            matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        expected output
            [1, 2, 3, 6, 9, 8, 7, 4, 5]

5. visualize by drawing and manually solve
6. break into subproblems
    create variables to hold what the current row/col is;
    1. top row
    2. bottom row
    3. left col
    4. right col

    while (top row <= bottom row && left col <= right col)
        iterate top from left col to right col

        move top row down by 1

        // check if still has rows
        if (top row > bottom row) {
            break
        }

        iterate right col from top row to bottom row

        move right col left by 1

        // check if still has cols
        if (left col > right col) {
            break
        }

        iterate bottom row from right col to left col

        move bottom row up by 1

        iterate left col from bottom row to top row

        move left col right by 1

7. algos
    1. Matrix traversal

8. data structure
    1. Matrix

9. Complexity
    Time: O(r * c)
    Space: O(r * c)
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return []
    }

    const rows = matrix.length
    const cols = matrix[0].length

    let topR = 0
    let botR = rows - 1
    let leftC = 0
    let rightC = cols - 1

    const res = new Array()

    while (topR <= botR && leftC <= rightC) {
        for (let i = leftC; i <= rightC; i ++) {
            res.push(matrix[topR][i])
        }
        topR += 1

        if (topR > botR) {
            break
        }

        for (let i = topR; i <= botR; i ++) {
            res.push(matrix[i][rightC])
        }
        rightC -= 1

        if (leftC > rightC) {
            break
        }

        for (let i = rightC; i >= leftC; i --) {
            res.push(matrix[botR][i])
        }
        botR -= 1

        for (let i = botR; i >= topR; i --) {
            res.push(matrix[i][leftC])
        }
        leftC += 1
    }

    return res
};
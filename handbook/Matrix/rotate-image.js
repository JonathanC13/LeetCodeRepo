// https://leetcode.com/problems/rotate-image/description/

/**
1. Assumptions
    1. None, dimension is stated to be n*n

2. Input validation
    1. matrix is 2D Array of n*n filled with Numbers

3. Time and space constraints
    BTTC: O(r * c)  // since need to visit each cell
    Space: O(1) // in place

4. edge cases and some test cases
    edge cases
    1. while topR < botR AND leftC < rightC
    test cases
    1. odd n length
        input
            matrix = [[1,2,3],[4,5,6],[7,8,9]]
        expected output
            [[7,4,1],[8,5,2],[9,6,3]]
    2. even n length
        input
            matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
        expected output
            [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

5. visualize by drawing and manaully solve
6. break into subproblems
    create variables to hold what row and col the spiral is on:
    1. topR
    2. botR
    3. leftC
    4. rightC

    while (topR < botR AND leftC < rightC)
        for i = 0; i < rightC - leftC; i ++ // elements within a spiral side. Since n * n, all sides equal.
            temp = topLeft cell // topR, leftC + i

            topLeft = botLeft // botR - i, leftC

            botLeft = botRight  // botR, rightC - i

            botR = topRight // topR + i, rightC

            topR = temp

        // move spiral inward
        topR += 1
        botR -= 1
        leftC += 1
        rightC -= 1

7. algos
    1. Matrix traversal

8. Data structures
    1. Matrix

9. Complexity
    Time: O(r*c)
    Space: O(1)


 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length <= 1) {
        return
    }

    const rows = matrix.length
    const cols = matrix[0].length

    let topR = 0
    let botR = rows - 1
    let leftC = 0
    let rightC = cols - 1

    while (topR < botR && leftC < rightC) {
        for (let i = 0; i < rightC - leftC; i ++) {
            const temp = matrix[topR][leftC + i]

            matrix[topR][leftC + i] = matrix[botR - i][leftC]

            matrix[botR - i][leftC] = matrix[botR][rightC - i]

            matrix[botR][rightC - i] = matrix[topR + i][rightC]

            matrix[topR + i][rightC] = temp
        }

        topR += 1
        botR -= 1
        leftC += 1
        rightC -= 1
    }
};
// https://leetcode.com/problems/search-a-2d-matrix/description/

/**
1. Assumptions
    1. None

2. Input validation
    matrix is r * c and contains Numbers
    target is a Number

3. time and space constraints
    BTTC: O(log(r * c))
    Space: O(1)

4. Edge cases and some test cases
    Edge cases
    1. if (matrix.length === 0) {
        return false
    }

    Some test cases
    1.
        Input
            matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
        Expected Output
            true

5. visualize by drawing and manaully solve
6. break into subproblems
    Since has the special properties:
        1. Each row is sorted in non-descending order
        2. the first integer of each row is greater than the last integer of the previous row

    This allows for binary search of the rows until the row where the row[r][0] <= target AND row[r][cols-1] >= target
    and then perform binary search within the row

7. Algos
    - Binary search

8. data structures
    - Matrix

9. Complexity
    Time: O(log(r * c)) // log(r) + log(c) = log(r * c)
    Space: O(1)
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) {
        return false
    }
    const rows = matrix.length
    const cols = matrix[0].length
    let r1 = 0
    let r2 = rows - 1
    let mid = 0
    while (r1 <= r2) {
        mid = Math.floor((r2 - r1) / 2) + r1

        if (matrix[mid][0] <= target && target <= matrix[mid][cols - 1]) {
            break
        } else if (target < matrix[mid][0]) {
            r2 = mid - 1
        } else {
            r1 = mid + 1
        }
    }

    let c1 = 0
    let c2 = cols - 1
    while (c1 <= c2) {
        const m = Math.floor((c2 - c1) / 2) + c1

        if (matrix[mid][m] === target) {
            console.log(mid, m)
            return true
        } else if (target < matrix[mid][m]) {
            c2 = m - 1
        } else {
            c1 = m + 1
        }
    }

    return false
};
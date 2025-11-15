// https://leetcode.com/problems/valid-sudoku/

/**
1. Assumptions
    1. None

2. Input validation
    1. board is a 2D Array filled with Strings

3. Time and space constraints
    BTTC: O(r * c)  // must visit each cell
    Space: O(r + c + box)   // space for tracking values for the rules

4. edge cases and some test cases
    edge cases
    1. none
    test cases
    1. valid with current values
        input
            board = 
                [["5","3",".",".","7",".",".",".","."]
                ,["6",".",".","1","9","5",".",".","."]
                ,[".","9","8",".",".",".",".","6","."]
                ,["8",".",".",".","6",".",".",".","3"]
                ,["4",".",".","8",".","3",".",".","1"]
                ,["7",".",".",".","2",".",".",".","6"]
                ,[".","6",".",".",".",".","2","8","."]
                ,[".",".",".","4","1","9",".",".","5"]
                ,[".",".",".",".","8",".",".","7","9"]]
        expected output
            true
    2. invalid with current values
        input
            board = 
                [["8","3",".",".","7",".",".",".","."]
                ,["6",".",".","1","9","5",".",".","."]
                ,[".","9","8",".",".",".",".","6","."]
                ,["8",".",".",".","6",".",".",".","3"]
                ,["4",".",".","8",".","3",".",".","1"]
                ,["7",".",".",".","2",".",".",".","6"]
                ,[".","6",".",".",".",".","2","8","."]
                ,[".",".",".","4","1","9",".",".","5"]
                ,[".",".",".",".","8",".",".","7","9"]]
        expected output
            false

5. visualize by drawing and manually solve
6. break into subproblems
    create a 2D Array 9*9, to store what values exist for the rows
    create a 2D Array 9*9, to store what values exist for the cols
    create a 2D Array 9*9, to store what values exist for the subbox. Determine the subbox with: Floor(row / 3) * 3 + floor(col / 3)

    iterate the rows
        iterate the cols
            if the cell is not "."
                if the value is already marked in rows or cols or subbox
                    return false

                mark as used in rows, cols, and subbox

    return true

7. algos
    1. matrix traversal and marking

8. data structures
    1. matrix

9. complexity
    Time: O(r * c)
    Space: O(r + c + subbox)

    
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const n = board.length
    const rows = new Array(n).fill().map((e) => new Array(n + 1).fill(false))
    const cols = new Array(n).fill().map((e) => new Array(n + 1).fill(false))
    const boxes = new Array(n).fill().map((e) => new Array(n + 1).fill(false))

    for (let r = 0; r < n; r ++) {
        for (let c = 0; c < n; c ++) {
            if (board[r][c] === ".") {
                continue
            }

            const val = Number(board[r][c])
            if (rows[r][val] === true || cols[c][val] || boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)][val] === true) {
                // console.log(val, rows, cols, boxes)
                return false
            }
            rows[r][val] = true
            cols[c][val] = true
            boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)][val] = true
        }
    }

    return true
};
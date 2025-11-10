// https://leetcode.com/problems/sudoku-solver/description/

/**
 * 1. Assumptions
 *  1. Has one solution. Even if not guarenteed to have a solution or has many solutions, it should not matter.
 * 
 * 2. Input validation
 *  matrix of 9x9 with String of numbers and '.'
 * 
 * 3. time and space constraints
 *  BTTC: O(r * c * 9^(r + c))
 *  Space: O(r * c)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. none
 *  test cases
 *  1.
 *      input
 *          board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
 *      expected output
 *          [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  recursive backtracking to try different values in certain cells until all cells found a valid value.
 *      globally track which values are currently used on the board:
 *          1. the row. A 2D Array of length 9, where index is the row and the associated Array of length 9 are the values currently in the row.
 *          2. the col. A 2D Array of length 9, 9
 *          3. the 3x3 box, the index determined with (row // 3) * 3 + col // 3
 * 
 *      iterate values 1 to 9 to try to determine a valid value in this cell
 *      When all values for a cell are exhausted it pops to the previous recursive step and that step trys the next value for its cell and calls again the next.
 * 
 *          when valid value is found, mark it in the rows, cols, and box
 *          call next cell. if returns true, a solution for the entire board found, also return out
 *          unmark so this cell can try a different value
 * 
 *      base cases
 *      1. if no more rows, it indicates all empty cells found a valid value and got to this point
 *      if r >= n: 
 *          return true
 * 
 *      2. the current row has no more columns, move to next row
 *      if (c >= n) {
 *          return rec(r + 1, 0)
 *      }
 * 
 *      3. if the cell has a given number, not '.'. Therefore do not need to evaluate this cell
 *      if (board[r][c] !== '.') {
 *          return rec(r, c + 1)
 *      }
 * 
 * Notes: 
 *  1. If can have multiple solutions, allow algorithm to run out of paths completely. Each time r >= n, copy the current board solution into a result Array.
 *  2. Since only one solution, once a recursive call returns true all recursive steps acknowledge and return
 * 
 * 7. algos
 *  - recursive bactracking
 * 
 * 8. data structures
 *  - recursive stack
 *  - Arrays
 * 
 * 9 Complexity
 *  Time: O(r * c * 9^(r + c)) // r * c for initial logging of values, + since need to go to each cell r * c *, 9^(r + c) there are 9 paths for each row and col but r + c since choosing a value reduces the available values to choose from for the subsequent cells.
 * Space: O(r * c)   // recursive stack max at r * c
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const n = board.length

    // Arrays to track what values are currently in its respective area
    // make it simple, value Array length 10 so that 1 to 9 is used for the values
    const rows = new Array(n).fill().map((e) => new Array(n + 1).fill(false))
    const cols = new Array(n).fill().map((e) => new Array(n + 1).fill(false))
    const boxes = new Array(n).fill().map((e) => new Array(n + 1).fill(false))

    // iterate the board and fill what has been given
    for (let r = 0; r < n; r ++) {
        for (let c = 0; c < n; c ++) {
            if (board[r][c] === '.') {
                continue
            }
            const val = Number(board[r][c])
            const subbox = Math.floor(r / 3) * 3 + Math.floor(c / 3)

            rows[r][val] = true
            cols[c][val] = true
            boxes[subbox][val] = true
        }
    }
    
    rec(board, n, 0, 0, rows, cols, boxes)
};

const rec = (board, n, r, c, rows, cols, boxes) => {
    // base case 1
    if (r >= n) {
        // if no more rows, baord complete
        return true
    }
    // base case 2
    if (c >= n) {
        // go to next row
        return rec(board, n, r + 1, 0, rows, cols, boxes)
    }
    // base case 3
    if (board[r][c] !== '.') {
        // the value already given, move to next cell
        return rec(board, n, r, c + 1, rows, cols, boxes)
    }

    // place valid value at cell and then recursively call to the next cell
    for (let i = 1; i <= n; i ++) {
        const subbox = Math.floor(r / 3) * 3 + Math.floor(c / 3)
        if (rows[r][i] === true || cols[c][i] === true || boxes[subbox][i] === true) {
            // invalid value
            continue
        }

        // valid value
        // place onto board
        rows[r][i] = true
        cols[c][i] = true
        boxes[subbox][i] = true
        board[r][c] = i.toString()

        // call the next recursive step to attempt to find a solution with this value at this cell
        if (rec(board, n, r, c + 1, rows, cols, boxes) === true) {
            // if solution found, can just propagate out.
            return true
        }

        // remove from board so another value can be tried at this cell
        rows[r][i] = false
        cols[c][i] = false
        boxes[subbox][i] = false
        board[r][c] = '.'
    }

    return false
}
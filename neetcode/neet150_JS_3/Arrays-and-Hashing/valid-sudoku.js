// https://neetcode.io/problems/valid-sudoku/question

/**
 * 1. Assumptions
 *  1. Given sudoku board has valid Numbers
 * 
 * 2. input validation
 *  1. board
 *      - board instanceof Array
 *      - board.length === 9 && board[0].length === 9
 *      - board element's are Number, 1 <= x <= 9
 * 
 * 3. time and space constraints
 *  BTTC: O(1)  // since always 9 * 9
 *  Space: O(1) // always 9 * 9 + 9 * 9 + 9 + 9
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  ..
 *  
 *  test cases
 *  1. valid
 *      inputs 
 *          board =
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]
 *          
 *      expected output
 *          true
 * 
 *  2. invalid
 *      inputs
 *          board = [["1", "1", ".",".","3",".",".",".","."], ...]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create matrices for used value in the dimension:
 *      1. row
 *      2. col
 *      3. sub box. subbox = 3 * floor(r/3) + floor(c/3)
 *          or 3D matrix
 *              sub[floor(r/3)][floor(c/3)] = t/f
 * 
 *  iterate every cell
 *      if value already used in each dimension return false
 *      
 *      mark in each dimension the current value
 * 
 *  return true if got to end without conflict
 * 
 * 7. algorithms
 *  - Hashing
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(1)
 *  Space: O(1)
 *  
 */

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill().map((e) => new Array(9).fill(false))
        const cols = new Array(9).fill().map((e) => new Array(9).fill(false))
        const subboxes = Array.from(new Array(9), (e) => new Array(9).fill(false))

        for (let r = 0; r < 9; r ++) {
            for (let c = 0; c < 9; c ++) {
                
                if (board[r][c].toString() === ".") {
                    continue
                }

                const v = Number(board[r][c])
                const b = 3 * Math.floor(r/3) + Math.floor(c/3)
                if (rows[r][v] || cols[c][v] || subboxes[b][v]) {
                    return false
                }

                rows[r][v] = true
                cols[c][v] = true
                subboxes[b][v] = true
            }
        }

        return true
    }
}

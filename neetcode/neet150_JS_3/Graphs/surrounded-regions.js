// https://neetcode.io/problems/surrounded-regions/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. board
 *      - board instanceof Array
 *      - board's elements are Array of String: ["X"], ["O"]
 * 
 * 3. time and space constraints
 *  BTTC: O(r * c)
 *  Space: O(r * c)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if board.length === 0: return
 * 
 *  test cases
 *  1. some "O"s surrounded and some that are not
 *      inputs
 *          board = [
 *              [x,x,x,x],
 *              [x,o,o,x],
 *              [x,x,x,o]
 *          ]
 *      expected output
 *          [
 *              [x,x,x,x],
 *              [x,x,x,x],
 *              [x,x,x,o]
 *          ]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  from "O" it is not surrounded if can reach out of bounds, else surrounded and convert to "x"
 *  DFS, use memo for a cell if surrounded/not surrounded so that another connected "O" can return early
 * 
 * 7. algos
 *  - DFS
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(r * c)
 *  Space: O(r * c)
 */

class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length
        const cols = board[0].length
        const dirs = [[0,1],[1,0],[0,-1],[-1,0]]
        const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))
        const memo = new Array(rows).fill().map((e) => new Array(cols).fill(0))   // 0 not explored, 1 = "X", 2 = surrounded, 3 = not surrounded
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (board[r][c] === 'O') {
                    if (this.dfsNotSurrounded(board, r, c, rows, cols, visited, memo, dirs)) {
                        memo[r][c] = 3
                    } else {
                        board[r][c] = 'X'
                        memo[r][c] = 2
                    }
                } else {
                    memo[r][c] = 1
                }
            }
        }
        // console.log(memo)
        return
    }

    dfsNotSurrounded(board, r, c, rows, cols, visited, memo, dirs) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || memo[r][c] === 3) {
            return true
        }
        if (memo[r][c] === 2) {
            return false
        }

        if (visited[r][c]) {
            return false
        }
        if (board[r][c] === 'X') {
            memo[r][c] = 1
            return false
        }

        visited[r][c] = true

        for (let [dr, dc] of dirs) {
            if (this.dfsNotSurrounded(board, dr + r, dc + c, rows, cols, visited, memo, dirs)) {
                memo[r][c] = 3
                return true
            }
        }

        visited[r][c] = false
        return false

    }
}

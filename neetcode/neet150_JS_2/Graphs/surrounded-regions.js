// https://neetcode.io/problems/surrounded-regions

/*
create a 2D array of dimensions of board and fill with true 
set the edges to false. <- this done in the iteration of the edges
    This Array represents which cells are surrounded, since the edges cannot be, they are initially false

iterate the edges
    if the edge cell is 'O' call dfs to mark all connected O cells false in the Array

iterate rows and cols of board
    for each cell in board that is O and true in the surrounded Array, change to X

- Time: O(r * c)
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length
        const cols = board[0].length
        const surrounded = Array.from(new Array(rows), (e) => new Array(cols).fill(true))
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        for (let r = 0; r < rows; r ++) {
            if (board[r][0] === 'O') {
                this.dfs(board, rows, cols, r, 0, surrounded, directions)
            }
            if (board[r][cols - 1] === 'O') {
                this.dfs(board, rows, cols, r, cols - 1, surrounded, directions)
            }
        }

        for (let c = 0; c < cols; c ++) {
            if (board[0][c] === 'O') {
                this.dfs(board, rows, cols, 0, c, surrounded, directions)
            }
            if (board[rows - 1][c] === 'O') {
                this.dfs(board, rows, cols, rows - 1, c, surrounded, directions)
            }
        }
        // console.log(surrounded)
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (board[r][c] === 'O' && surrounded[r][c] === true) {
                    board[r][c] = 'X'
                }
            }
        }

    }

    dfs(board, rows, cols, r, c, surrounded, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] === 'X' || surrounded[r][c] === false) {
            return
        }

        surrounded[r][c] = false

        for (let [dr, dc] of directions) {
            this.dfs(board, rows, cols, r + dr, c + dc, surrounded, directions)
        }

        return
    }
}

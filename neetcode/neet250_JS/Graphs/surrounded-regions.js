// https://neetcode.io/problems/surrounded-regions

/*
iterate the board and find the "O"
    call bfs to check if reach out of bounds, which means not surrounded. if true set place to "X"

- Time: O(r * c)
- Space: O(r * c)

* better if I used multi source from edge to mark unsurrounded.
*/

class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        // console.log(board)

        const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const rows = board.length
        const cols = board[0].length

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (board[r][c] === "O") {
                    const visited = new Array(rows).fill().map((e) => {return new Array(cols).fill(false)})
                    if (this.bfs(board, rows, cols, r, c, dirs, visited)) {
                        board[r][c] = "X"
                    }
                }
            }
        }

        // console.log(board)

        return
    }

    bfs(board, rows, cols, r, c, dirs, visited) {
        const qu = new Deque()
        qu.pushBack([r, c])
        visited[r][c] = true

        while (qu.size() > 0) {
            const [pr, pc] = qu.popFront()
            
            for (let [dr, dc] of dirs) {
                const nr = pr + dr
                const nc = pc + dc
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                    return false
                }
                if (board[nr][nc] === "O" && !visited[nr][nc]) {
                    qu.pushBack([nr, nc])
                    visited[nr][nc] = true
                }
            }
        }

        return true
    }
}

// https://neetcode.io/problems/surrounded-regions

class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        if (board.length === 0) {
            return
        }

        const rows = board.length
        const cols = board[0].length
        const directions = [[-1, 0],[0, 1],[1, 0],[0, -1]]
        const unsurrounded = Array(rows).fill().map((e) => {return Array(cols).fill(false)})
        const qu = new Deque()

        // top and bottom
        for (let c = 0; c < cols; c ++) {
            this.addTile(board, 0, c, unsurrounded, qu)
            this.addTile(board, rows - 1, c, unsurrounded, qu)
        }

        // left and right
        for (let r = 0; r < rows; r ++) {
            this.addTile(board, r, 0, unsurrounded, qu)
            this.addTile(board, r, cols-1, unsurrounded, qu)
        }

        while (!qu.isEmpty()) {
            const [r, c] = qu.popFront()

            for (let [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !unsurrounded[nr][nc] && board[nr][nc] === 'O') {
                    qu.pushBack([nr, nc])
                    unsurrounded[nr][nc] = true
                }
            }
        }

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (board[r][c] === 'O' && unsurrounded[r][c] === false) {
                    board[r][c] = 'X'
                }
            }
        }
    }

    addTile(board, r, c, unsurrounded, qu) {
        if (board[r][c] === 'O') {
            qu.pushBack([r, c])
            unsurrounded[r][c] = true
        }
    }
}

// https://neetcode.io/problems/search-for-word

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        if (board.length === 0) {
            return false
        }

        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const rows = board.length
        const cols = board[0].length
        const visited = Array(rows).fill().map((e) => {return Array(cols).fill(false)})

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (board[r][c] === word[0]) {
                    if (this.DFS(board, word, r, c, rows, cols, directions, 0, visited)) {
                        return true
                    }
                }
            }
        }

        return false
    }

    DFS(board, word, r, c, rows, cols, directions, i, visited) {
        if (i === word.length) {
            return true
        }

        if (r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            visited[r][c] ||
            board[r][c] !== word[i]) {
                return false
            }

        visited[r][c] = true

        for (let [dr, dc] of directions) {
            if (this.DFS(board, word, dr + r, dc + c, rows, cols, directions, i + 1, visited)) {
                return true
            }
        }
        visited[r][c] = false

        return false
    }
}

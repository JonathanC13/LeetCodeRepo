// https://neetcode.io/problems/search-for-word

/*
edge case 1: if board.length === 0 || board[0].length === 0: return false

create array the same size of board to track visited cells in the current path

iterate each cell and if the board[r][c] === word[0], then go into the recursive search.

recursive dfs soln
    base case 1
    if row or col out of bounds or cell is already visited or board[r][c] !== word[i]:
        return false

    base case 2
    if (i === word.length - 1 && board[r][c] === word[i]) {
        return true
    }

    // explore all directions
    for directions
        if (this.dfs(board, word, rows, cols, nr, nc, visited, i + 1)) {
            return true
        }

    return false

- Time: O(r * c * 4^n). potentially every cell triggers a search and each cell has 4 directions
- Space: O(r * c)

*/

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        if (board.length === 0 || board[0].length === 0) {
            return false
        }

        const rows = board.length
        const cols = board[0].length

        const visited = Array.from(new Array(rows), (e) => new Array(cols).fill(false))
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (word[0] === board[r][c]) {
                    if (this.dfs(board, word, rows, cols, r, c, visited, 0, directions)) {
                        return true
                    }
                }
            }
        }
        return false
    }

    dfs(board, word, rows, cols, r, c, visited, i, directions) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true || word[i] !== board[r][c]) {
            return false
        }
        if (i === word.length - 1 && board[r][c] === word[i]) {
            return true
        }

        visited[r][c] = true

        for (const [dr, dc] of directions) {
            if (this.dfs(board, word, rows, cols, dr + r, dc + c, visited, i + 1, directions)) {
                return true
            }
        }

        visited[r][c] = false

        return false
    }
}

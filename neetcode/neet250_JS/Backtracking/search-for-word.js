// https://neetcode.io/problems/search-for-word

/*
Since the same cell may not be used more than once in the word. Use a Set to store the visited coordinates.

Must iterate each cell until the first character of the word is found
    then initiate dfs search, if entire would found return true

return false

dfs(board, r, c, rows, cols, directions, visited, word, i)
    base case 1: if i >= word.length means entire word found.
        return true

    base case 2: if r < 0 || r >= rows || c < 0 || c > cols || visited.has(`${r},${c}` || board[r][c] !== word[i])
        return false

    mark current cell as visited

    iterate the neighbors in the directions
        if (this.dfs(board, r + dr, c + dc, rows, cols, directions, visited, word, i + 1))
            return true because once found, propagate the true up and out.

    unmark current cell as visited so it can be used in the next search

    return false

- Time: O(m * n). m*n to iterate the board. * . n * 4^n (each cell has 4 directions to explore)
- Space: O(m * n)
*/

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = new Set()
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const rows = board.length
        const cols = board[0].length

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (this.dfs(board, r, c, rows, cols, directions, visited, word, 0)) {
                    return true
                }
            }
        }

        return false
    }

    dfs(board, r, c, rows, cols, directions, visited, word, i) {
        if (i >= word.length) {
            return true
        }

        if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(`${r},${c}`) || board[r][c] !== word[i]) {
            return false
        }
        

        visited.add(`${r},${c}`)

        for (let [dr, dc] of directions) {
            if (this.dfs(board, r + dr, c + dc, rows, cols, directions, visited, word, i + 1)) {
                return true
            }
        }

        visited.delete(`${r},${c}`)

        return false
    }
}

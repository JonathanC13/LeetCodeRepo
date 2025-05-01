// https://neetcode.io/problems/search-for-word

/*
horizontally or vertically neighboring cells. backtrack then go to other cells

The same cell may not be used more than once in a word. Visited Array

iterate the rows
    iterate the cols
        if board[r][c] === first letter of word
            initiate dfs to search. if return true
                return true

            else continues;

dfs, recursive backtracking
    if (out of bounds || visited || char at r,c not === word[i])
        return false

    if (i === word.length - 1 && word[i] === board[r][c])  // last char matches
        return true

    visited[r][c] = true

    for each direction
        search next char in that direction, i + 1, new row, new col

    visited[r][c] = false

    return

// each node has 4 directions/options

- Time: O(r*c * 4^n)    // n is the length of word
- Space: O(n)
*/

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length
        const cols = board[0].length
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        const visited = Array.from(new Array(rows), (e) => new Array(cols).fill(false))

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (board[r][c] === word[0]) {
                    if (this.dfs(board, word, rows, cols, r, c, 0, visited, directions)) {
                        return true
                    }
                }
            }
        }

        return false
    }

    dfs(board, word, rows, cols, r, c, i, visited, directions) {
        if (i === word.length) {    // better
            return true
        }
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || word[i] !== board[r][c]) {
            return false
        }
        // if (i === word.length - 1 && word[i] === board[r][c]) {
        //     return true
        // }
        // if here, means the cell char === word[i]
        visited[r][c] = true

        for (let [dr, dc] of directions) {
            if (this.dfs(board, word, rows, cols, r + dr, c + dc, i + 1, visited, directions)) {
                return true
            }
        }

        visited[r][c] = false

        return false
    }
}

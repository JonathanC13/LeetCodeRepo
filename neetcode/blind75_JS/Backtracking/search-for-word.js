// https://neetcode.io/problems/search-for-word

class Solution {
    dfs(board, word, idx, coord, visited, directions) {
        if (word.length === idx) {
            return true
        }
        if (coord[0] < 0 || coord[0] >= board.length || coord[1] < 0 || coord[1] >= board[0].length) {
            return false
        }
        if (visited.has(JSON.stringify(coord))) {
            return false
        }
        if (board[coord[0]][coord[1]] !== word[idx]){
            return false
        }
        console.log(coord)

        visited.add(JSON.stringify(coord))
        for (let [x, y] of directions) {
            if (this.dfs(board, word, idx + 1, [coord[0] + x, coord[1] + y], visited, directions)) {
                return true
            }
        }

        visited.delete(JSON.stringify(coord))

        return false
    }

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
        const visited = new Set()

        for (let r = 0; r < board.length; r ++) {
            for (let c = 0; c < board[0].length; c ++) {
                if (board[r][c] === word[0]) {
                    console.log(r, c)
                    if (this.dfs(board, word, 0, [r, c], visited, directions)) {
                        return true
                    }
                }
            }
        }

        return false
    }
}

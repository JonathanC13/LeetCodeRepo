// https://neetcode.io/problems/search-for-word/question

/**
 * 1. Assumptions
 *  1. Given:
 *      - Same cell can only be used once on a path to check for word
 * 
 * 2. input validation
 *  1. board
 *      - board instanceof Array
 *  2. word
 *      - typeof word === 'string'
 * 
 * 3. time and space constraints
 *  BTTC: O(r*c * 4^n)  // must iterate every cell *, 4 paths for each char, n, in word
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if board.length === 0 || board[0].length === 0 || word.length === 0: return false
 * 
 *  test cases
 *  1. does not exist
 *      inputs
 *          board = [[a, b, c, d], [s, a, t, t], [a, c, a, e]]
 *          word = 'cat'
 *      expected output
 *          false
 *  2. does not exist, but could if use a cell twice
 *      inputs
 *          board = [[a, b, c, d], [s, b, t, a], [z, z, z, z]]
 *          word = 'data'
 *      expected output
 *          false
 *  3. word exists
 *      inputs
 *          board = [[a, b, c, d], [s, a, a, t], [a, c, a, e]]
 *          word = 'cat'
 *      expected output
 *          true
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  visit each cell in board
 *      continue path in direction if can match current character, pop back if cannot to choose the next direction
 *          - to ensure cell is only used once on path, each matched cell is marked with visited when on current path, once not on current path it is unvisited so another path can match it.
 *          - perfect for recursive backtracking
 *      if found, return true
 * 
 * 7. algos
 *  - recursive backtracking
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(r*c * 4^n)
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        if (board.length === 0 || board[0].length === 0 || word.length === 0) {
            return false
        }

        const rows = board.length
        const cols = board[0].length
        const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))

        const dirs = [[0,1], [1,0], [0,-1], [-1,0]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (this.rec(board, rows, cols, r, c, word, 0, visited, dirs) === true) {
                    return true
                }
            }
        }

        return false
    }

    rec(board, rows, cols, r, c, word, i, visited, dirs) {
        if (i === word.length) {
            return true
        }
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true || board[r][c] !== word[i]) {
            return false
        }

        visited[r][c] = true

        for (let [dr, dc] of dirs) {
            const nr = r + dr
            const nc = c + dc

            if (this.rec(board, rows, cols, nr, nc, word, i + 1, visited, dirs) === true) {
                return true
            }
        }

        visited[r][c] = false

        return false
    }
}

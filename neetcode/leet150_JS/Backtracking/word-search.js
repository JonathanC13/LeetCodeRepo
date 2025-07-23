// https://leetcode.com/problems/word-search/description/?envType=study-plan-v2&envId=top-interview-150

/*
main
    create a visited 2D array of the same dimensions of board so that a path does not re-use a cell if currently used on path

    for each row
        for each col
            if (board[r][c] === word's first letter)
                if (call recursive backtracking to determine if word is connected === true)
                    return true

    return false

recursive backtracking. Maintain what char index in the String word it is looking for
    base case 1: if i === word.length:
        // entire word found
        return true
    base case 2: if r or c out of bounds or cell has been already visited or cell char !== word[i]
        return

    set visited[r][c] = true
    for each direction
        if (dfs for next cell === true)
            return true // propagate up so no additional paths need to be checked

    visited[r][c] = false

    return

- Time: O(r * c * 4^(r + c))    // for each cell it has 4 choices in r and c direction
- Space: O(word.length) // since max recursion depth is the word's length
*/

const dfs = function(board, word, r, c, rows, cols, i, visited, directions) {
    if (i === word.length) {
        return true
    }
    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true || word[i] !== board[r][c]) {
        return false
    }

    visited[r][c] = true

    for (let [dr, dc] of directions) {
        if (dfs(board, word, r + dr, c + dc, rows, cols, i + 1, visited, directions) === true) {
            return true
        }
    }

    visited[r][c] = false
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length
    const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (board[r][c] === word[0]) {
                if (dfs(board, word, r, c, rows, cols, 0, visited, directions)) {
                    return true
                }
            }
        }
    }
    return false
};
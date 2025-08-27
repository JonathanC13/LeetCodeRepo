// https://leetcode.com/problems/word-search/description/

/**
main
    create visited of same dimensions of board and fill with false

    iterate rows
        iterate cols
            if board[r][c] === first character of the word
                if (rec(...) === true) // search if the word can be found at this starting point
                    return true

    return false

rec(...)
* board
* {int} r
* {int} c
* rows
* cols
* word
* i // current index of word
* visited
* directions

    base case 1:
    if (i >= word.length)
        // no more chars to check, meaning that all previous have matched
        return true

    base case 2:
    if r or c out of bounds or visited[r][c] === true or board[r][c] not word[i]
        return false

    visited[r][c] = true    // so not re-used on this path
    i += 1  // to next char in word

    for (directions)
        if (rec(...) === true)
            // if word found, propagate out
            return true

    visited[r][c] = false   // since path using this cell finished, set to false so another path can use it
    return false

- Time: O(r * c)
- Space: O(r * c)
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length
    const visited = Array.from(new Array(rows), (e) => {return new Array(cols).fill(false)})
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (word[0] === board[r][c]) {
                if (rec(board, word, r, c, 0, rows, cols, visited, directions) === true) {
                    return true
                }
            }
        }
    }

    return false
};

const rec = (board, word, r, c, i, rows, cols, visited, directions) => {
    if (i >= word.length) {
        return true
    }
    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] === true || board[r][c] !== word[i]) {
        return false
    }

    visited[r][c] = true
    i += 1

    for (let [dr, dc] of directions) {
        if (rec(board, word, r + dr, c + dc, i, rows, cols, visited, directions) === true) {
            return true
        }
    }

    visited[r][c] = false
    return false
}
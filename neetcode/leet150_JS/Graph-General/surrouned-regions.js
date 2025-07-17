// https://leetcode.com/problems/surrounded-regions/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a 2D Array of dimensions m x n and fill with true. This will mark which cells are surrounded and are not. Also will be used as a visited marker.

recursive dfs
    if out of bounds || surrounded[r][c] === false || board[r][c] === 'X'
        return

    surrounded[r][c] = false

    for 4 directions
        explore connected 'O's

    return

main

    // since if a 'O' is connected to 'O' that starts from an edge, it is not surrounded by 'X's
    iterate the rows
        run dfs on first col
        run dfs on last col

    iterate cols
        run dfs on first row
        run dfs on last row

    // now know which cells are surrounded. if O and surrounded = true, change to X
    iterate rows
        iterate cols
            if board[r][c] === 'O' and surrounded === true
                board[r][c] = 'X'

- Time: O(r * c)
- Space: O(r * c)
*/

const dfs = function(board, r, c, rows, cols, surrounded, directions) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || surrounded[r][c] === false || board[r][c] === 'X') {
        return
    }

    surrounded[r][c] = false

    for (let [dr, dc] of directions) {
        dfs(board, r + dr, c + dc, rows, cols, surrounded, directions)
    }
    return
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows = board.length
    const cols = board[0].length
    const surrounded = Array.from(new Array(rows), (e) => {return new Array(cols).fill(true)})
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    for (let r = 0; r < rows; r ++) {
        dfs(board, r, 0, rows, cols, surrounded, directions)
        dfs(board, r, cols - 1, rows, cols, surrounded, directions)
    }

    for (let c = 0; c < cols; c ++) {
        dfs(board, 0, c, rows, cols, surrounded, directions)
        dfs(board, rows - 1, c, rows, cols, surrounded, directions)
    }
    console.log(surrounded)

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (board[r][c] === 'O' && surrounded[r][c] === true) {
                board[r][c] = 'X'
            }
        }
    }
};
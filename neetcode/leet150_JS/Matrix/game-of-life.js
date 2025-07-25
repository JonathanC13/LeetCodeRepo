// https://leetcode.com/problems/game-of-life/description/?envType=study-plan-v2&envId=top-interview-150

/*
To not use extra space and evaluating each cell without affecting the evaluation of a neighbor cell:    
    1. two passes, first to evaluate the cell and if live next generation add 2, if dead do nothing
    2. first by adding 2 for the alive next generation. To get the original state. cell % 2 = original. 
        e.g.    og = 1 then + 2 = 3. 3 % 2 = 1
                og = 0 then + 2 = 2. 2 % 2 = 0
    3. second pass
        if value === 1 still, then it means died
        else if > 1. means this generation it is alive

    Note: if with true and false, as you iterate evaluate true as 1 and false as 0, and change the cell value

- Time: O(r * C)    // 2 (r * c) ~= r * c
- Space: O(1)
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length
    const cols = board[0].length
    const directions = [[-1, 0], [-1, 1], [0, 1], [1,1], [1, 0], [1, -1], [0, -1], [-1, -1]]

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            let aliveNeigh = 0
            for (let [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc
                if (nr < 0 || nr >= rows || c < 0 || c >= cols) {
                    continue
                }

                if (board[nr][nc] % 2 === 1) {
                    aliveNeigh += 1
                }
            }

            if (board[r][c] % 2 === 1) {
                if (aliveNeigh === 2 || aliveNeigh === 3) {
                    board[r][c] += 2
                }
            } else if (board[r][c] % 2 === 0) {
                if (aliveNeigh === 3) {
                    board[r][c] += 2
                }
            }
        }
    }

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (board[r][c] === 1) {
                board[r][c] = 0
            } else if (board[r][c] > 1) {
                board[r][c] = 1
            } 
        }
    }
};
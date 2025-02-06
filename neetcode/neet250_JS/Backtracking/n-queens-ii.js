// https://leetcode.com/problems/n-queens-ii/

/*
Same as N queens but just return the count of result?

- Time: O(n!)
- Space: O(n^2)
*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if (n === 1) {
        return 1
    }

    const board = new Array(n).fill().map((e) => {return new Array(n).fill('.')})
    const cols = new Array(n).fill(false)
    const posDiag = new Array(n * 2).fill(false)
    const negDiag = new Array(n * 2).fill(false)

    const res = []
    findBoards(board, 0, n, cols, posDiag, negDiag, res)

    return res.length
};

var findBoards = function(board, i, n, cols, posDiag, negDiag, res) {
    if (i === n) {
        res.push(board.map((e) => {return e.join('')}))
        return
    }

    for (let c = 0; c < n; c ++) {
        if (cols[c] || posDiag[i + c] || negDiag[i - c + n]) {
            continue
        }

        cols[c] = true
        posDiag[i + c] = true
        negDiag[i - c + n] = true

        findBoards(board, i + 1, n, cols, posDiag, negDiag, res)

        negDiag[i - c + n] = false
        posDiag[i + c] = false
        cols[c] = false
    }

    return
}
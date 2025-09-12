// https://leetcode.com/problems/n-queens/description/

/**
main
    res = new Array()
    const colUsed = new Array(n)
    const posDiag = new Array(n + n)    // index determined by r + c
    const negDiag = new Set()

    const currBoard = new Array(n).fill().map((e) => new Array(n).fill('.'))

    rec(n, r = 0, colUsed, posDiag, negDiag, currBoard, res)

    return res

* {number} n
* {number} row
* {bool[]} colUsed
* {bool[]} posDiag
* {Set} negDiag
* {String[][]} currBoard
* {String[][]} res
rec
    base case 1: all rows evaluated, which means there is a valid board in currBoard
    if (row === n) {
        res.push(Array.from(currBoard, (e) => e.join('')))  // for each Array within, join into a String
        return
    }

    // for the current row, choose which column to put Queen in
    for (let c = 0; c < n; c ++) {
        const pos = row + c
        const neg = r - c
        if (colUsed[c] === true || posDiag[pos] === true || negDiag.has(neg)) {
            continue
        }

        // found valid spot, mark that it is used.
        colUsed[c] = true
        posDiag[pos] = true
        negDiag.add(neg)
        currBoard[row][c] = 'Q'

        // go to next row
        rec(n, row + 1, colUsed, posDiag, negDiag, currBoard, res)

        // finished with this spot
        currBoard[row][c] = '.'
        colUsed[c] = false
        posDiag[pos] = false
        negDiag.delete(neg)
    }

    return

- Time: O(!n)
- Space: O(n*n)
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = new Array()
    const colUsed = new Array(n).fill(false)
    const posDiag = new Array(n + n).fill(false)
    const negDiag = new Set()
    const currBoard = new Array(n).fill().map((e) => new Array(n).fill('.'))

    rec(n, 0, colUsed, posDiag, negDiag, currBoard, res)
    return res
};

const rec = function(n, r, colUsed, posDiag, negDiag, currBoard, res) {
    if (r === n) {
        res.push(Array.from(currBoard, (e) => e.join('')))
        return
    }

    for (let c = 0; c < n; c ++) {
        const pos = r + c
        const neg = r - c
        if (colUsed[c] === true || posDiag[pos] === true || negDiag.has(neg)) {
            continue
        }

        // found valid spot, mark that it is used.
        colUsed[c] = true
        posDiag[pos] = true
        negDiag.add(neg)
        currBoard[r][c] = 'Q'

        // go to next row
        rec(n, r + 1, colUsed, posDiag, negDiag, currBoard, res)

        // finished with this spot
        currBoard[r][c] = '.'
        colUsed[c] = false
        posDiag[pos] = false
        negDiag.delete(neg)
    }
    return
}
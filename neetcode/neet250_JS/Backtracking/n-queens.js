// https://neetcode.io/problems/n-queens

/*
- edge case 1: if n === 0; return []

create an Array for cols occupied by a queen. Length n
create 2 Arrays for the diagnoals occupied by a queen. 
    1st for positive diagonal, Slope positive. length of 2 * n since the last positive diagonal is at n - 1 + n - 1
        To determine the index:
        - r 0, c0. 0 + 0 = index 0

        - r 0, c 1. 0 + 1 = 1
        - r 1, c0. 1 + 0 = 1    // conflict here. use equation r + c

    2nd for negative slope
        - need r0, c0 to equal the same index as r(n-1), c(n-1)
            r - c = index

            to be consistent: r - c + n

        - another, e.g n = 4. r0, c1 equal to r2, c3.
            r - c. *Since it will result in negative. offset by adding n
            r - c + n

        - r1, c0 and r3, c2.

            to be consistent: r - c + n

create the board = new Array(n).fill().map((e) => {return new Array(n).fill('.')})
res = []
findPlaces(board, i, n, cols, posDiag, negDiag, res) // i = currQueen

return res

*findPlaces(board, i, n, cols, posDiag, negDiag, res)    // recursive to place queen and then evaluate next moves
    - base case 1: 
    if i === n
        no more queens, at this point it means that they have all been successfully placed
        add current board to res
        return

    i represents the current queen and row
    iterate the cols, j, to find a valid place for the queen
        if (cols[j] used || posDiag[i + j] used || negDiag[i - j + n] used) {
            continue
        }

        valid place found, set new restrictions in the cols, posDiag, negDiag. Set queen onto the board.

        next recursive call for next queen

        backtracked here means the solution with the queen here was not found, remove restrictions and place on the board


    return false

- Time: O(n!). n! because each queen restricts the next queen's placement. 
- Space: O(n^2)
*/

class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        if (n === 0) {
            return []
        }

        const cols = new Array(n).fill(false)
        const posDiag = new Array(2 * n).fill(false)
        const negDiag = new Array(2 * n).fill(false)

        const board = new Array(n).fill().map((e) => {return new Array(n).fill('.')})
        const res = []
        
        this.findPlaces(board, 0, n, cols, posDiag, negDiag, res)

        return res
    }

    findPlaces(board, i, n, cols, posDiag, negDiag, res) {
        if (i === n) {
            res.push(
                board.map((e) => {return e.join('')})
            )
            return
        }

        for (let j = 0; j < n; j ++) {
            if (cols[j] || posDiag[i + j] || negDiag[i - j + n]) {
                continue
            }

            cols[j] = true
            posDiag[i + j] = true
            negDiag[i - j + n] = true
            board[i][j] = 'Q'

            this.findPlaces(board, i + 1, n, cols, posDiag, negDiag, res)

            board[i][j] = '.'
            negDiag[i - j + n] = false
            posDiag[i + j] = false
            cols[j] = false
        }

        return
    }
}

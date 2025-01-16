// https://neetcode.io/problems/valid-sudoku

/*
create a Map for the rows. The key: row number, value: Set
create a Map for the cols. The key: col number, value: Set
create a Map for the sub-boxes. keys are `r,c`

iterate the rows
    iterate the cols
        if board at [r, c] === '.'
            continue

        const subbox = `${Math.floor(r/3)},${Math.floor(c/3)}`

        check if seen value in rows, cols, or sub-box
        if ((rMap.has(r) && rMap.get(r).has(board[r][c])) || 
            (cMap.has(c) && cMap.get(c).has(board[r][c])) || 
            (sMap.has(subbox) && sMap.get(subbox).has(board[r][c])))
            return false

        add the values
        if (!rMap.has(r)) {
            rMap.set(r, new Set())
        }
        rMap.get(r).add(board[r][c])

        if (!cMap.has(c)) {
            cMap.set(c, new Set())
        }
        cMap.get(c).add(board[r][c])

        if (!sMap.has(subbox)) {
            sMap.set(subbox, new Set())
        }
        sMap.get(subbox).add(board[r][c])

return true

Time: O(r * c)
Space: O(r * c)
*/

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rMap = new Map()
        const cMap = new Map()
        const sMap = new Map()

        for (let r = 0; r < board.length; r ++) {
            for (let c = 0; c < board[0].length; c ++) {
                if (board[r][c] === '.') {
                    continue
                }

                const subbox = `${Math.floor(r/3)},${Math.floor(c/3)}`

                if ((rMap.has(r) && rMap.get(r).has(board[r][c])) || 
                    (cMap.has(c) && cMap.get(c).has(board[r][c])) || 
            (       sMap.has(subbox) && sMap.get(subbox).has(board[r][c]))) {
                    return false
                }

                if (!rMap.has(r)) {
                    rMap.set(r, new Set())
                }
                rMap.get(r).add(board[r][c])

                if (!cMap.has(c)) {
                    cMap.set(c, new Set())
                }
                cMap.get(c).add(board[r][c])

                if (!sMap.has(subbox)) {
                    sMap.set(subbox, new Set())
                }
                sMap.get(subbox).add(board[r][c])
            }
        }

        return true
    }
}

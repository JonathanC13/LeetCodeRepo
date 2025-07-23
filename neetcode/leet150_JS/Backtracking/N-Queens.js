// https://leetcode.com/problems/n-queens-ii/description/?envType=study-plan-v2&envId=top-interview-150

/*
main
    Either one. If choose to iterate rows then only need to maintan column Used Array.
    1. create an Array with length n to record if that row does contain a queen
    2. create an Array with length n to record if that column does contain a queen

    create a Set to hold if the positive diagonal contains a queen. r + c = pos diagonal
    create a Set to hold if the negative diagonal contains a queen. r - c = negative diagonal

recursive backtracking
    base case 1: if r === n: return
    
    iterate cols 0 to < n
        check if a queen on the path up to this decision conflicts
        1. check if this column already has a queen
        2. check if the posDiag already has a queen
        3. check if the negDiag already has a queen
        any of these true, then continue to try the next column

        // found a columns that has no conflict
        reserve the column, posDiag, and negDiag for this selection
        set board cell as 'Q'
        continue path: dfs(n, r + 1, puzzleBoard, res, colUsed, posDiag, negDiag)
        // after backtracked, release what this cell reserved so that other paths can use
        set board cell as '.'
        release the column, posDiag, and negDiag for this selection

    return

- Time: O(n!) // since each next row, the options are reduced
- Space: O(n)
*/

const dfs = function(n, r, puzzleBoard, res, colUsed, posDiag, negDiag) {
    if (r === n) {
        res.push([...puzzleBoard.map((e) => e.join(','))])
        return
    }

    for (let c = 0; c < n; c ++) {
        const pos = r + c
        const neg = r - c
        if (colUsed[c] === true || posDiag.has(pos) || negDiag.has(neg)) {
            continue
        }

        colUsed[c] = true
        posDiag.add(pos)
        negDiag.add(neg)
        puzzleBoard[r][c] = 'Q'
        dfs(n, r + 1, puzzleBoard, res, colUsed, posDiag, negDiag)
        puzzleBoard[r][c] = '.'
        negDiag.delete(neg)
        posDiag.delete(pos)
        colUsed[c] = false
    }

    return
}

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if (n <= 1) {
        return n
    }

    const colUsed = new Array(n).fill(false)
    const posDiag = new Set()
    const negDiag = new Set()
    const puzzleBoard = Array.from(new Array(n), (e) => {return new Array(n).fill('.')})

    const res = new Array()
    dfs(n, 0, puzzleBoard, res, colUsed, posDiag, negDiag)
    console.log(res)
    return res.length
};
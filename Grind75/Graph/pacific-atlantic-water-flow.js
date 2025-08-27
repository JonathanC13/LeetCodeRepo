// https://leetcode.com/problems/pacific-atlantic-water-flow/description/

/**
main
    create a 2D Array for the cells where water can flow into the Pacific
    create a 2D Array for the cells where water can flow into the Atlantic

    iterate the cols on the ocean edges
        rec(row = 0; c, pacific, prevHeight = Neg infin)    // marks the cells to true if that cell's water has path to the edge
        rec(row = rows - 1, c, atlantic, prevHeight = Neg infin)

    iterate the rows on the ocean edges
        rec(r, col = 0, pacific, prevHeight = Neg infin)
        rec(r, col = cols - 1, atlantic, prevHeight = Neg infin)

    res = new Array()
    iterate rows
        iterate cols
            if (pac[r][c] === true and atl[r][c] === true)
                res.push([r, c])

    return res

rec(...)
* heights
* ocean
* r
* c
* rows
* cols
* prevHeight

    base case 1:
    if (r or c out of bounds or ocean[r][c] === true or prevHeight > heights[r][c])
        return

    ocean[r][c] = true

    for (directions)
        rec(...new direction, heights[r][c])

    return

- Time: O(r * c)    // (r * c) + (r * c) + (r * c)
- Space: O(r * c)
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length
    const cols = heights[0].length
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    const pac = Array.from(new Array(rows), (e) => new Array(cols).fill(false))
    const atl = Array.from(new Array(rows), (e) => new Array(cols).fill(false))

    for (let r = 0; r < rows; r ++) {
        rec(heights, pac, r, 0, rows, cols, directions, Number.NEGATIVE_INFINITY)
        rec(heights, atl, r, cols - 1, rows, cols, directions, Number.NEGATIVE_INFINITY)
    }

    for (let c = 0; c < cols; c ++) {
        rec(heights, pac, 0, c, rows, cols, directions, Number.NEGATIVE_INFINITY)
        rec(heights, atl, rows - 1, c, rows, cols, directions, Number.NEGATIVE_INFINITY)
    }
    // console.log(pac)
    // console.log(atl)
    const res = new Array()
    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (pac[r][c] === true && atl[r][c] === true) {
                res.push([r, c])
            }
        }
    }

    return res
};

const rec = (heights, oce, r, c, rows, cols, directions, prevHeight) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || oce[r][c] === true || prevHeight > heights[r][c]) {
        return
    }

    oce[r][c] = true

    for (let [dr, dc] of directions) {
        rec(heights, oce, r + dr, c + dc, rows, cols, directions, heights[r][c])
    }

    return
}
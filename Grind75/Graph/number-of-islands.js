// https://leetcode.com/problems/number-of-islands/description/

/**
main
    iterate the rows
        iterate the cols
            if grid at r, c is "1"
                islands += 1
                convert all connecting "1"s to "0" so that they will not be evaluated as an additional island

    return islands

rec
    base case 1:
    if out of bounds or water tile
        return

    change tile to water, "0"

    in the 4 directions explore the tile
        rec(...)

    return

- Time: O(r * c)
- Space: O(r * c)
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0
    const rows = grid.length
    const cols = grid[0].length
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (grid[r][c] === "1") {
                islands += 1
                rec(grid, r, c, rows, cols, directions)
            }
        }
    }
    return islands
};

const rec = function(grid, r, c, rows, cols, directions) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
        return
    }

    grid[r][c] = "0"
    for (let [dr, dc] of directions) {
        rec(grid, r + dr, c + dc, rows, cols, directions)
    }

    return
}
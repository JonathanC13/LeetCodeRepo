// https://leetcode.com/problems/island-perimeter/

/*

directions = n, e, s, w
visited = grid dimensions

find the first land
iterate rows
    iterate cols
        if grid[r][c] === 1
            return call recurvise function

return 0

*recursive function
- base case 1:
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
        // since what makes a perimeter is a land tile that borders a water tile.
        return 1
    }
- base case 2:
    if (visited[r][c] === true) {
        return 0
    }

    visited[r][c] = true

    let perimeter of this tile start at 0
    iterate the directions for this tile
        perim += recursive call with new tile coordinates   // this will either return 1 if the neighbor is water, the total perimeter of the forward tiles, or 0 if out of bounds / visited.

    return perimeter

- Time: O(r*c * 4^n). r * c to find the first land * 4 directions^n tiles
- Space: O(r*c). if land is the entire grid
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const visited = new Array(rows).fill().map((e) => {return new Array(cols).fill(false)})
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (grid[r][c] === 1) {
                return recur(grid, r, c, rows, cols, visited, directions)
            }
        }
    }
};

var recur = function(grid, r, c, rows, cols, visited, directions) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
        return 1
    }

    if (visited[r][c]) {
        return 0
    }

    visited[r][c] = true

    let perimeter = 0
    for (let [dr, dc] of directions) {
        perimeter += recur(grid, r + dr, c + dc, rows, cols, visited, directions)
    }

    return perimeter
}
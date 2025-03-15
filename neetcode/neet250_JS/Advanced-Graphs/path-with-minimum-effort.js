// https://leetcode.com/problems/path-with-minimum-effort/

/*
recursive dfs
- base cases
    - if out of bounds, return
    calculate effort to current tile
    pathMax = Math.max(pathMax, current effort)
    - if pathMax > global Min: return, this path will not beat an existing lower effort path
    - once reach desitination, set the global min effort to the path's max and return

    dfs in the directions up, down, left, right

    return

return pathMin

- Time: O(r * c * 4^r*c). each tile has 4 directions
- Space: O(r * c)
*/

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    // first try
    // const globalMin = [Number.POSITIVE_INFINITY]
    // const pathMin = []
    // const rows = heights.length
    // const cols = heights[0].length
    // const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    // const visited = new Array(rows).fill().map((e) => new Array(cols))

    // dfs(heights, rows, cols, 0, 0, heights[0][0], 0, [], [rows - 1, cols - 1], directions, visited, globalMin, pathMin)
    // console.log(pathMin[0])
    // return globalMin[0]
};

var dfs = function(heights, rows, cols, r, c, prevHeight, pathMax, currPath, destination, directions, visited, globalMin, pathMin) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c]) {
        return
    }

    const currEffort = Math.abs(prevHeight - heights[r][c])
    pathMax = Math.max(pathMax, currEffort)

    if (pathMax >= globalMin[0]) {
        return
    }

    if (r === destination[0] && c === destination[1]) {
        if (pathMax < globalMin[0]) {
            pathMin[0] = [...currPath]
            globalMin[0] = pathMax
        }
        return
    }

    visited[r][c] = true
    currPath.push([r, c])

    // dfs the directions
    for (let i = 0; i < directions.length; i ++) {
        const newR = r + directions[i][0]
        const newC = c + directions[i][1]

        dfs(heights, rows, cols, newR, newC, heights[r][c], pathMax, currPath, destination, directions, visited, globalMin, pathMin)
    }

    currPath.pop()
    visited[r][c] = false
    return
}
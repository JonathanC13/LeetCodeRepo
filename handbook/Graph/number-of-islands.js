// https://leetcode.com/problems/number-of-islands/

/**
1. Assumptions
    1. out of bounds is water

2. input validation
    1. grid only contains '0' and '1' characters

3. time and space constraints
    BTTC: O(m * n)  // since need to check each cell and does not run longer since cells are not re-evaluated if '0'
    Space: O(m * n) // if all cells === '1', recursive stack maxes at m * n

4. edge cases and some test cases
    edge cases
    1. if grid === null || grid.length === 0: return 0
    test cases
    1. 1 island
        input
            grid = [
                ['0', '1', '1', '0'],
                ['1', '1', '0', '1'],
                ['0', '1', '1', '1']
            ]
        expected output
            1
    2. 2 islands
        input
            grid = [
                ['0', '1', '1', '0'],
                ['1', '0', '0', '1'],
                ['1', '1', '1', '1']
            ]
        expected output
            1

5. visualize by drawing and manually solve
6. break into subproblems
    graph represented as 2D matrix

    main
        islands = 0

        iterate each cell
            if '1'
                islands += 1
                call a function to mark each adjacent '1' to '0' so that when the cell iterated over it will not be considered an additional island

        return islands

    func mark
        can be bfs or dfs
        for simplicity, dfs

        grid[r][c] = '0'    // convert to water so will not be considered an additional island

        // check adjacent cells for land cells
        for 4 directions
            if within bounds and new cell === '1'
                func(grid, new r, new c)

        return

7. algos
    - DFS of a 2D matrix that represents a Graph

8. data structures
    - 2D Matrix as Graph

9. Complexity
    Time: O(m * n)
    Space: O(m * n)

 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0
    }

    let islands = 0
    const rows = grid.length
    const cols = grid[0].length
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    const dfs = (grid, r, c, rows, cols, dirs) => {
        grid[r][c] = '0'

        for (let [dr, dc] of dirs) {
            const nr = r + dr
            const nc = c + dc

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '1') {
                dfs(grid, nr, nc, rows, cols, dirs)
            }
        }

        return
    }

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (grid[r][c] === '1') {
                islands += 1
                dfs(grid, r, c, rows, cols, dirs)
            }
        }
    }

    return islands
};
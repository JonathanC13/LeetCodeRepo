// https://neetcode.io/problems/count-number-of-islands/question

/**
 * 1. Assumptions
 *  1. Given:
 *      - out of bounds is water
 * 
 * 2. input validation
 *  1. grid
 *      - grid instanceof Array
 * 
 * 3. time and space constraints
 *  BTTC: O(r * c)    // max time would be all cells are 1 island
 *  Space: O(r * c) // max depth would be all cells
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if grid.length === 0 || grid[0].length === 0: return 0
 * 
 *  test cases
 *  1. > 1 islands
 *      inputs
 *          grid = [['1','0','1','0'], ['1','0','1','1'],['0','0','0','0']]
 *      expected output
 *          2
 *  2. 1 island
 *      inputs
 *          grid = [['1','0','1','0'], ['1','1','1','1'],['0','0','0','1']]
 *      expected output
 *          1
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  iterate every cell
 *      if cell is '1'
 *          islands += 1
 *          convert every connected '1' to '0'  // Time: O(r*c *4^(r+c))
 * 
 * 7. algos
 *  - recursive backtracking for graph traversing
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(r * c)
 *  Space: O(r * c)
 */

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0 || grid[0].length === 0) {
            return 0
        }

        let islands = 0
        const rows = grid.length
        const cols = grid[0].length
        const dirs = [[0,1], [1,0], [0,-1], [-1,0]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === '1') {
                    islands += 1
                    this.dfs(grid, rows, cols, r, c, dirs)
                }
            }
        }

        return islands
        
    }

    dfs(grid, rows, cols, r, c, dirs) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return
        }

        grid[r][c] = '0'

        for (let [dr, dc] of dirs) {
            const nr = dr + r
            const nc = dc + c
            this.dfs(grid, rows, cols, nr, nc, dirs)
        }

        return
    }
}

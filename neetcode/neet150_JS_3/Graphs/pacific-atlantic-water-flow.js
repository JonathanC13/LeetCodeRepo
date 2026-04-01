// https://neetcode.io/problems/pacific-atlantic-water-flow/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. heights
 *      - height instanceof Array
 * 
 * 3. time and space constraints
 *  BTTC: O(2*r*c)
 *  Space: O(2*r*c)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if height.length === 0 || heights[0].length === 0: return []
 * 
 *  test cases
 *  1. some cell can go to both oceans
 *      inputs
 *          heights = [ [1, 5, 5, 5],
 *                      [1, 3, 5, 3],
 *                      [5, 5, 6, 1]]
 *      expected output
 *          [[0,4], [2,0], [1,2]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  create a 2D Array for cells that can reach Pacific
 *  create a 2D Array for cells that can reach Atlantic
 * 
 *  The result is the cells that are in common
 * 
 * 7. algos
 *  - 2D array traversal with recursive backtracking
 * 
 * 8. data structures
 *  - Graph represented with 2D Matrix
 * 
 * 9. complexity    
 *  Time: O(r*c)
 *  Space: O(r*c)
 * 
 */

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length
        const cols = heights[0].length

        const pac = new Array(rows).fill().map((e) => new Array(cols).fill(false))
        const atl = Array.from(new Array(rows), (e) => new Array(cols).fill(false))
        const dirs = [[0,1], [1,0], [0,-1], [-1,0]]
        
        // start with the first and last row
        for (let c = 0; c < cols; c ++) {
            this.dfs(heights, rows, cols, 0, c, pac, dirs)
            this.dfs(heights, rows, cols, rows-1, c, atl, dirs)
        }
        
        // first and last col
        for (let r = 0; r < rows; r ++) {
            this.dfs(heights, rows, cols, r, 0, pac, dirs)
            this.dfs(heights, rows, cols, r, cols-1, atl, dirs)
        }

        const res = new Array()
        // find common
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (pac[r][c] === true && atl[r][c] === true) {
                    res.push([r, c])
                }
            }
        }

        return res
    }

    dfs(heights, rows, cols, r, c, ocean, dirs) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || ocean[r][c] === true) {
            return
        }

        ocean[r][c] = true

        for (let [dr, dc] of dirs) {
            const nr = dr + r
            const nc = dc + c
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && ocean[nr][nc] === false && heights[r][c] <= heights[nr][nc]) {
                this.dfs(heights, rows, cols, nr, nc, ocean, dirs)
            }
        }

        return
    }
}

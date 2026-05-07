// https://neetcode.io/problems/max-area-of-island/question

/**
 * 1. Assumptions
 *  1. none
 * 
 * 2. input validation
 *  1. grid
 *      - grid instanceof Array
 *      - grid's elements are Array of Numbers [0], [1]
 * 
 * 3. time and space constraints
 *  BTTC: O(r * c)
 *  Space: O(r * c)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if grid.length === 0: return 0
 * 
 *  test cases
 *  1. multiple islands
 *      inputs
 *          grid = [
 *              [0,1,1,0,1],
 *              [1,0,1,0,1],
 *              [0,1,1,0,1],
 *              [0,1,0,0,1]]
 * 
 *      expectect output
 *          6
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  iterate grid to find 1, then perform bfs or dfs to count the connected cells.
 *  To eliminate re-visit, flip visited cells in grid to 0
 *  1. bfs
 *      area = 0
 *      use queue, enqueue first cell, change to 0
 *      while queue is not empty
 *          area += 1
 *          node = dequeue
 *          look in 4 directions of node
 *              if not out of bounds and neigh === 1
 *                  change to 0, do it here because if left 1, it may be enqueued again by a different neighbor
 *                  enqueue
 * 
 *      return area
 * 
 *  2. dfs
 *      base case 1:
 *      if out of bounds || node === 0: return 0
 * 
 *      // therefore only here if the cell is 1
 *      change cell to 0
 *      area = 1    // 1 for this cell
 *      explore 4 directions
 *          area += dfs(...)
 * 
 *      return area
 * 
 * 7. algos
 *  - DFS/BFS of graph
 * 
 * 8. data structures
 *  - Arrays
 * 
 * 9. complexity
 *  Time: O(r * c)
 *  Space: O(r * c)
 *      
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const dirs = [[0,1],[1,0],[0,-1],[-1,0]]

        let maxArea = 0
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 1) {
                    //maxArea = Math.max(maxArea, this.bfs(grid, r, c, rows, cols, dirs))
                    maxArea = Math.max(maxArea, this.dfs(grid, r, c, rows, cols, dirs))
                }
            }
        } 

        return maxArea
    }

    dfs(grid, r, c, rows, cols, dirs) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
            return 0
        }

        grid[r][c] = 0
        let area = 1
        for (let [dr, dc] of dirs) {
            area += this.dfs(grid, r + dr, c + dc, rows, cols, dirs)
        }

        return area
    }

    bfs(grid, r, c, rows, cols, dirs) {
        const qu = new Deque()
        qu.pushBack([r, c])
        grid[r][c] = 0
        let area = 0
        while (qu.size() > 0) {
            const [cr, cc] = qu.popFront()
            area += 1

            for (let [dr, dc] of dirs) {
                const nr = cr + dr
                const nc = cc + dc
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 0
                    qu.pushBack([nr,nc])
                }
            }
        }
        // console.log(area)
        return area
    }
}

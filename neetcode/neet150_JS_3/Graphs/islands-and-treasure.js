// https://neetcode.io/problems/islands-and-treasure/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. grid
 *      - grid instanceof Array
 *      - grid's elements are Array of Numbers, [-1],[0],[2147483647]
 * 
 * 3. time and space constraints
 *  BTTC: O(m * n)
 *  Space: O(m * n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if grid.length === 0: return
 * 
 *  test cases
 *  1. some cells have closer treasure
 *      inputs
 *          grid = [
 *              [2,-1,0,2],
 *              [2,2,2,-1],
 *              [2,-1,2,-1],
 *              [0,-1,2,2]
 *      expected output
 *          [
 *              [3,-1,0,1],
 *              [2,2,1,-1],
 *              [1,-1,2,-1],
 *              [0,-1,3,4]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. DFS
 *      base case 1: if -1 || visited on path || grid[r][c] <= currDist
 *          do not continue, return
 * 
 *      mark cell with currDist to get here
 *      add to visited
 * 
 *      explore 4 directions
 *          dfs(currDist + 1,...)
 * 
 *      remove from visited
 * 
 *  2. BFS, use queue
 * 
 * 7. algos
 *  - DFS/BFS
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(m * n)
 *  Space: O(m * n)
 */

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))
        const dirs = [[0,1],[1,0],[0,-1],[-1,0]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 0) {
                    // this.dfs(grid, r, c, rows, cols, visited, dirs, 0)
                    this.bfs(grid, r, c, rows, cols, dirs)
                }
            }
        }
    }

    bfs(grid, r, c, rows, cols, dirs) {
        const qu = new Deque()
        const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))
        
        visited[r][c] = true
        qu.pushBack([r,c, 0])

        while (qu.size() > 0) {
            const [cr, cc, dist] = qu.popFront()
            for (let [dr, dc] of dirs) {
                const nr = cr + dr
                const nc = cc + dc

                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited[nr][nc] || grid[nr][nc] <= dist + 1) {
                    continue
                }

                visited[nr][nc] = true
                grid[nr][nc] = dist + 1
                qu.pushBack([nr, nc, dist + 1])
            }
        }
    }

    dfs(grid, r, c, rows, cols, visited, dirs, currDist) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || grid[r][c] === -1 || grid[r][c] < currDist) {
            return
        }

        visited[r][c] = true
        grid[r][c] = currDist

        for (let [dr, dc] of dirs) {
            this.dfs(grid, dr + r, dc + c, rows, cols, visited, dirs, currDist + 1)
        }

        visited[r][c] = false
    }
}

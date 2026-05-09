// https://neetcode.io/problems/rotting-fruit/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. grid
 *      - grid instanceof Array
 *      - grid's elements are Array of Number that are; [0],[1],[2]
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
 *  1. all oranges can be rotted
 *      inputs
 *          grid = [
 *              [2,1,0],
 *              [0,1,1],
 *              [0,1,2]
 *          ]
 *      expected output
 *          2
 * 
 *  2. not possible to rott all
 *      inputs
 *          grid = [
 *              [1,0,0],
 *              [0,0,1],
 *              [1,1,2]
 *          ]
 *      expected output
 *          -1
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Mutli source BFS since same minute rotted orange, need to rott all adjacent for next minute
 *  To know if all fresh oranges rotted, iterate grid and count all fresh
 *  minutes = 0
 *  maintain a queue for the current rotten oranges, enqueue minute 0 rotted oranges
 *  while (qu not empty)
 *      get number of rotten oranges for current minute
 *      for the rotten oranges
 *          dequeue rotten
 *          rot and enqueue adjacent fresh oranges
 * 
 *      if qu is empty, no new rotten oranges, break
 *      else the oranges in the queue are rotted in the next minute
 *          minutes += 1
 * 
 *  return fresh === 0 ? minutes : -1
 * 
 * 7. algos
 *  - multi source BFS
 * 
 * 8. data structures
 *  - Array
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
    orangesRotting(grid) {
        if (grid.length === 0) {
            return 0
        }

        const rows = grid.length
        const cols = grid[0].length
        const dirs = [[0,1],[1,0],[0,-1],[-1,0]]
        const qu = new Deque()
        let fresh = 0
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 1) {
                    fresh += 1
                } else if (grid[r][c] === 2) {
                    qu.pushBack([r,c])
                }
            }
        }

        let minutes = 0
        while (qu.size() > 0 && fresh > 0) {
            const quSize = qu.size()
            for (let i = 0; i < quSize; i ++) {
                const [r, c] = qu.popFront()
                for (let [dr, dc] of dirs) {
                    const nr = r + dr
                    const nc = c + dc
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                        fresh -= 1
                        grid[nr][nc] = 2
                        qu.pushBack([nr, nc])
                    }
                }
            }

            // if (qu.size() === 0) {   // if while has fresh > 0, can comment this out since if all fresh rotted, the final queue of rotted do not need to be processed and minutes += 1.
            //     break
            // }
            minutes += 1

        }

        return fresh === 0 ? minutes : -1
    }
}

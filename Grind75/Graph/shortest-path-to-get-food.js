// https://leetcode.ca/2021-03-13-1730-Shortest-Path-to-Get-Food/

/**
 * BFS from the person
 * 
 * - Time: O(r * c)
 * - Space: O(r * c)
 * 
 */

const dq = require('@datastructures-js/deque');

/**
 * 
 * @param {Array} grid ; 
 * @param {Array} start ; [start r, start c]
 */
const food = function(grid, start) {
    const rows = grid.length
    const cols = grid[0].length
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const qu = new dq.Deque()
    qu.pushBack(start)

    let steps = 0
    while (qu.size() > 0) {
        steps += 1
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const [r, c] = qu.popFront()

            for (let [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                    continue
                }

                if (grid[nr][nc] === "#") {
                    return steps
                }

                if (grid[nr][nc] === "O") {
                    qu.pushBack([nr, nc])
                    grid[nr][nc] = steps
                }
            }
        }
    }

    return -1
}

let grid = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
let start = [1, 1]
console.log(food(grid, start))

grid = [["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]]
start = [1, 1]
console.log(food(grid, start))

grid = [["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]]
start = [1, 1]
console.log(food(grid, start))

grid = [["O","*"],["#","O"]]
start = [0, 1]
console.log(food(grid, start))
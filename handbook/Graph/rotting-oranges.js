// https://leetcode.com/problems/rotting-oranges/

/**
1. Assumptions
    1. None

2. input validation
    1. grid is a 2D matrix that can contain Numbers 0, 1, and 2

3. time and space constraints
    BTTC: O(r * c)
    Space: O(m) // m = max size of queue.

4. edge cases and some test cases
    edge cases
    1. if grid === null || grid.length === 0: return 0
    test cases
    1. all oranges can be rotted
        inputs
            grid = [[2,1,1],[1,1,0],[0,1,1]]
        expected output
            4
    2. impossible for all oranges to be rotted
        inputs
            grid = [[2,1,1],[1,1,0],[0,0,1]]
        expected output
            -1

5. visualize by drawing and manually solve
6. break into subproblems
    Breadth first traversal where the source is the rotting orange at time 0

    time = 0
    rotted = 0
    create a Queue for the current rotted oranges to process and spread rot

    iterate the grid
        count the number of fresh oranges, this is so that if the number of rotted oranges != original fresh it indicates that it is impossible to rot all.
        enqueue all rotted oranges into the Queue

    while queue.size() > 0

        currRotted = queue.size
        for the currRotted
            for the adjacent directions
                if within bounds AND fresh orange
                    rotted += 1
                    rot orange
                    enqueue orange

                    // since only continuing when the tile is a fresh orange, do not need a visited mechanism since it is rotted in this step

        if (queue.size() > 0) {
            time += 1   // since requires another minute to rot next batch of oranges.
        }

    return fresh === rotted ? time : -1

7. algos
    - Breadth first traversal of a Graph

8. data structures
    - 2D Matrix representation of a Graph

9. Complexity   
    Time: O(r * c)
    Space: O(m) // m = max size of queue


 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0
    }

    const rows = grid.length
    const cols = grid[0].length
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const qu = new Deque()

    let time = 0
    let fresh = 0
    let rotted = 0

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (grid[r][c] === 1) {
                fresh += 1
            }
            if (grid[r][c] === 2) {
                qu.pushBack([r, c])
            }
        }
    }

    while (qu.size() > 0) {
        const quSize = qu.size()

        for (let i = 0; i < quSize; i ++) {
            const [r, c] = qu.popFront()

            for (let [dr, dc] of dirs) {
                const nr = r + dr
                const nc = c + dc

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    rotted += 1
                    grid[nr][nc] = 2
                    qu.pushBack([nr, nc])
                }
            }
        }
        if (qu.size() > 0) {
            time += 1
        }
    }

    return fresh === rotted ? time : -1
};
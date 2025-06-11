// https://leetcode.com/problems/rotting-oranges/description/?envType=study-plan-v2&envId=leetcode-75

/*
multisource BFS

create a queue
iterate all the cells, count the fresh oranges, and enqueue the rotten into queue

minutes = 1

while qu is not empty
    get qu size
    
    explore all rotten oranges of this current minute
        pop rotten orange
        explore neighbors
            if neighbor out of bounds or rotten already
                continue
            rot the orange
            fresh oranges -= 1
            enqueue

    minutes += 1

// once qu is empty, no more rotten oranges to evaluate
return if freshOranges !== 0 ? -1 : minutes

- Time: O(r * c)    // possible all cells are fresh except one
- Space: O(r * c)   // possible all cells are rotten
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0
    const qu = new Queue()
    const rows = grid.length
    const cols = grid[0].length
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (grid[r][c] === 1) {
                fresh += 1
            } else if (grid[r][c] === 2) {
                qu.enqueue([r, c])
            }
        }
    }
    let minutes = 0
    while (qu.size() > 0) {
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const [r, c] = qu.dequeue()

            for (let [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== 1) {
                    continue
                }
                fresh -= 1
                grid[nr][nc] = 2
                qu.enqueue([nr, nc])
            }
        }
        if (qu.size() === 0) {
            return fresh !== 0 ? -1 : minutes
        }
        minutes += 1
    }

    return fresh !== 0 ? -1 : minutes
};
// https://leetcode.com/problems/rotting-oranges/

/**
freshOranges = 0    // needed to determine at end if all fresh oranges were rotted
create a queue to store the rotted oranges

iterate grid
    count the number of fresh oranges

minutes = 0

while qu.size() > 0
    const quSize = qu.size()
    // for the same minute need to process all the currently queued rotted oranges
    for (let i = 0 to quSize)
        rotted = qu.popFront()

        check in the 4 directions
            if out of bounds or [r][c] is visited or not a fresh orange
                continue

            freshOranges -= 1
            visited[r][c] = true
            grid[r][c] = 2  // rott the orange so a different neighor does not see this one
            qu.pushBack([r, c])

    if (qu.size() > 0)
        // only increase minutes when there will be fresh oranges to rot, this minutes is for the next rotting phase
        minutes += 1

return if freshOranges === 0 ? minutes : -1

- Time: O(r * c)
- Space: O(r * c)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0
    const rows = grid.length
    const cols = grid[0].length
    const qu = new Deque()

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

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let minutes = 0

    while (qu.size() > 0) {
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const [r, c] = qu.popFront()
            for (let [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== 1) {
                    continue
                }

                fresh -= 1
                grid[nr][nc] = 2
                qu.pushBack([nr, nc])
            }
        }

        if (qu.size() > 0) {
            minutes += 1
        }
        
    }

    return fresh === 0 ? minutes : -1
};
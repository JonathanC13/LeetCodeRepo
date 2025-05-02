// https://neetcode.io/problems/islands-and-treasure

/*
mutli source BFS

start at the treasure and update the land tiles radiating outward with the min distance from the source.

iterate rows
    iterate cols
        if grid[r][c] === 0
            call bfs(...) to mark all the land tiles with the distance to this treasure

bfs(grid, rows, cols, r, c, directions)
    create a queue to hold the current cells to process
    enqueue the initial cell: [r, c, distance]  // initial distance is 0

    while (queue.size() > 0) {
        pop the front cell [r, c, dist]
        set grid[r][c] = dist to treasure

        iterate the directions
            nr = r + dr
            nc = c + dc

            if (nr or nc out of bounds or grid[nr][nc] is water or dist + 1 >= grid[nr][nc])    // dist + 1 >= grid[nr][nc] means that the cell already has a distance to a treasure that is less, so don't update it.
                continue

            // at this point, valid cell to explore
            queue.pushBack([nr, nc, dist + 1])
    }

- Time: O(r * c)
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 0) {
                    this.bfs(grid, rows, cols, r, c, directions)
                }
            }
        }
    }

    bfs(grid, rows, cols, r, c, directions) {
        const qu = new Queue()
        qu.enqueue([r, c, 0])

        while (qu.size() > 0) {
            const [pr, pc, dist] = qu.dequeue()
            grid[pr][pc] = dist

            for (let [dr, dc] of directions) {
                const nr = pr + dr
                const nc = pc + dc

                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] === -1 || dist + 1 >= grid[nr][nc]) {
                    continue
                }

                qu.enqueue([nr, nc, dist + 1])
            }
        }
    }
}

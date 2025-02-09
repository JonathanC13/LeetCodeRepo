// https://neetcode.io/problems/islands-and-treasure

/*
visited for visited treasure

iterate rows
    iterate cols
        if treasure chest, radiate out in the directions to mark the land tiles.
            this.radiate()  // BFS

*radiate()
    create a queue for the BFS
    enqueue the first tile coord with distance from treasure. [[r, c], 0]

    while (qu.length > 0) {
        popped = qu.pop()
        dist = popped[1] + 1
        for directions
            if tile[dr + r][dc + c] > dist
                this treasure is closer, replace value
                tile[dr + r][dc + c] = dist
                enqueue([[dr + r, dc + c], dist])
    }

return


- Time: O(r * c). r * c. traverse the grid
- Space: O(r * c). for queue

multi source bfs
*/

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const visitedTreasure = new Set()
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const rows = grid.length
        const cols = grid[0].length

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 0) {
                    visitedTreasure.add(r + ',' + c)
                    this.radiate(grid, rows, cols, r, c, directions, visitedTreasure)
                }
            }
        }

        return
    }

    radiate(grid, rows, cols, r, c, directions, visitedTreasure) {
        const qu = new Deque()
        qu.pushBack([[r, c], 0])

        while (qu.size() > 0) {
            const popped = qu.popFront()
            const dist = popped[1] + 1

            for (let [dr, dc] of directions) {
                const nr = dr + popped[0][0]
                const nc = dc + popped[0][1]
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] < dist || visitedTreasure.has(nr + ',' + nc)) {
                    continue
                } else {
                    grid[nr][nc] = dist
                    qu.pushBack([[nr, nc], dist])
                }
            }
        }

        return
    }
}

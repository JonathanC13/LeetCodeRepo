// https://neetcode.io/problems/islands-and-treasure

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        if (grid.length === 0) {
            return grid
        }

        const rows = grid.length
        const cols = grid[0].length
        const visited = new Set()
        const qu = new Deque()
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 0) {
                    qu.pushBack([r, c])
                    visited.add(r + ',' + c)
                }
            }
        }

        let steps = 0
        while (!qu.isEmpty()) {
            const qSize = qu.size()

            for (let i = 0; i < qSize; i ++) {
                const [r, c] = qu.popFront()
                grid[r][c] = steps

                for (let [dr, dc] of directions) {
                    const nr = r + dr
                    const nc = c + dc

                    this.AddTile(grid, nr, nc, rows, cols, visited, qu)
                }
            }

            steps += 1
        }
    }

    AddTile(grid, r, c, rows, cols, visited, qu) {
        if (r >= 0 && r < rows && c >= 0 && c < cols && !visited.has(r + ',' + c) && grid[r][c] !== -1) {
            qu.pushBack([r, c])
            visited.add(r + ',' + c)
        }

        return
    }
}

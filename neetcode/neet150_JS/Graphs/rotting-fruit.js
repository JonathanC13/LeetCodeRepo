// https://neetcode.io/problems/rotting-fruit

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if (grid.length === 0) {
            return -1
        }

        const rows = grid.length
        const cols = grid[0].length
        const visited = new Set()
        const qu = new Deque()
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        let fresh = 0

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if(grid[r][c] === 1) {
                    fresh += 1
                }

                if (grid[r][c] === 2) {
                    qu.pushBack([r, c])
                    visited.add(r+','+c)
                }
            }
        }

        let minutes = 0
        while (!qu.isEmpty() && fresh > 0) {
            const quSize = qu.size()

            for (let i = 0; i < quSize; i ++) {
                const [r, c] = qu.popFront()

                for (let [dr, dc] of directions) {
                    const nr = r + dr
                    const nc = c + dc
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited.has(nr+','+nc) && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2
                        fresh -= 1
                        qu.pushBack([nr, nc])
                        visited.add(nr+','+nc)
                    }
                }                
            }
            minutes += 1
        }
        
        return (fresh === 0) ? minutes : -1
    }
}

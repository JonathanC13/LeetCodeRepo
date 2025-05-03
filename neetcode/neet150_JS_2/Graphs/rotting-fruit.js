// https://neetcode.io/problems/rotting-fruit

/*
multi source BFS

minutes = 0
create Queue for the cells to process: [r, c]

iterate rows
    iterate cols
        count the fresh fruit total

        if rotten fruit, enqueue to Queue

while (fresh > 0 && qu.size() > 0) {
    
    minutes += 1
    for this minute, dequeue all elements and rot and enqueue all connected fresh fruits
}

if (fresh > 0) {
    return -1
} else {
    return minutes
}

- Time: O(r * c)
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        let minutes = 0
        let fresh = 0
        const qu = new Queue()

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 1) {
                    fresh += 1
                } else if (grid[r][c] === 2) {
                    qu.enqueue([r, c])
                }
            }
        }

        while (fresh > 0 && qu.size() > 0) {
            minutes += 1

            let quSize = qu.size()
            while (quSize > 0) {
                const [r, c] = qu.dequeue()
                for (let [dr, dc] of directions) {
                    const nr = r + dr
                    const nc = c + dc
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== 1) {
                        continue
                    }

                    grid[nr][nc] = 2
                    fresh -= 1
                    qu.enqueue([nr, nc])
                }

                quSize -= 1
            }
        }

        if (fresh > 0) {
            return -1
        } else {
            return minutes
        }
    }

    
}

// https://neetcode.io/problems/rotting-fruit

/*
multi source BFS

let minute = 0
iterate the grid and put all the rotten fruit in a queue (use Deque)

while (qu.size() > 0) {
    minute += 1

    for the current minute, must pop all rotten fruit and enqueue the next fruit that rots
    let quSize = qu.size()
    while(qu.size() > 0)
        const popped = qu.popFront()
        quSize -= 1
        iterate directions of popped
            if out of bounds: continue
            if fresh fruit:
                set to rot
                enqueue

}

at the end must check if there are any fresh fruit
iterate grid
    if fresh fruit
        return -1

when all rottened the last in the queue does not rot anything but has to pop, disregard this minute.
return minute - 1

- Time: O(r * c). r * c to find initial rotten. + r * c to rot adjacent. + r * c to check if any fresh left.
- Space: O(r * c)
*/

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        const qu = new Deque()
        const rows = grid.length
        const cols = grid[0].length

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 2) {
                    qu.pushBack([[r, c], 0])
                }
            }
        }

        let minute = 0
        while (qu.size() > 0) {

            let quSize = qu.size()
            while (quSize > 0) {
                const popped = qu.popFront()
                const [r, c] = popped[0]
                const minRot = popped[1]
                minute = Math.max(minute, minRot)
                quSize -= 1

                for (let [dr, dc] of directions) {
                    const nr = r + dr
                    const nc = c + dc
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== 1) {
                        continue
                    }
                    if (grid[nr][nc] === 1) {
                        grid[nr][nc] = 2
                        qu.pushBack([[nr, nc], minRot + 1])
                    }
                }
            }
        }

        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < cols; c ++) {
                if (grid[r][c] === 1) {
                    return -1
                }
            }
        }

        return minute
    }
}

// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/?envType=study-plan-v2&envId=leetcode-75

/*
multi source BFS. start with each exit and then for all connected cells record the minimum distance to the nearest exit.

queue elements are [coord, dist to its exit]
iterate borders and enqueue cells that are '.' that also not an entrance

while qu is not empty
    pop
    set distance into cell. if already has distance, set the min

    check each direction
        if neighbor cell out of bounds or not '.' (meaning an empty cell that has no distance yet)
            continue
        else
            enqueue with [coord, dist + 1]

return if entrance cell === '.' return -1 else return value at cell

- Time: O(r * c)    // possible all cells are empty
- Space: O(r + c)   // possible all borders are exits

** faster, singe source BFS
*/

var multiSrc = (maze, entrance) => {
    const rows = maze.length
    const cols = maze[0].length
    const er = entrance[0]
    const ec = entrance[1]
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    const qu = new Queue()
    for (let r = 0; r < rows; r ++) {
        if (maze[r][0] === '.' && !(er === r && ec === 0)) {
            qu.enqueue([r, 0, 0])
        }

        if (maze[r][cols - 1] === '.' && !(er === r && ec === cols - 1)) {
            qu.enqueue([r, cols - 1, 0])
        }
    }
    for (let c = 1; c < cols - 1; c ++) {
        if (maze[0][c] === '.' && !(er === 0 && ec === c)) {
            qu.enqueue([0, c, 0])
        }

        if (maze[rows - 1][c] === '.' && !(er === rows - 1 && ec === c)) {
            qu.enqueue([rows - 1, c, 0])
        }
    }

    while (qu.size() > 0) {
        const [r, c, dist] = qu.dequeue()
        if (maze[r][c] === '.') {
            maze[r][c] = dist
        } else {
            maze[r][c] = Math.min(maze[r][c], dist)
            continue
        }

        for (let [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc

            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || maze[nr][nc] !== '.') {
                continue
            }
            qu.enqueue([nr, nc, dist + 1])
        }
    }
    console.log(maze)
    const nearestExit = maze[er][ec]
    return nearestExit === '.' ? -1 : nearestExit
}

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    // return multiSrc

    // single source
    const rows = maze.length
    const cols = maze[0].length
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    const qu = new Queue()
    maze[entrance[0]][entrance[1]] = '+'    // assign + to the entrance in the case it is on an exit, it will not evaluate that exit
    qu.enqueue([entrance[0], entrance[1]])

    let moves = 1
    while (qu.size() > 0) {
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const [r, c] = qu.dequeue()

            for (let [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc

                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || maze[nr][nc] === '+') {
                    continue
                }
                if (nr === 0 || nr === rows - 1 || nc === 0 || nc === cols - 1) {
                    return moves
                }
                maze[nr][nc] = '+'  // visited
                qu.enqueue([nr, nc])
            }
        }
        moves += 1
    }

    return -1
};
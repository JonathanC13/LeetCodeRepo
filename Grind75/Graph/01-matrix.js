// https://leetcode.com/problems/01-matrix/description/

/**
BFS

create visited Array
create queue

for all 0 cells
    add to visited
    enqueue to queue to search its neighbors

while qu not empty
    [r,c] = popFront

    for each direction
        if out of bounds or visited
            continue

        // if here, then the not visited is a 1 so the distance to a 0 is:
        mat[dr][dc] = mat[r][c] + 1     // if mat[r][c] is 0 then it is: 0 + 1. if mat[r][c] is a 1, then it has already been evaluated (since in queue) and holds the closest 0 dist, therefore + 1 will give this cell the closest
        visited[dr][dc] = true
        qu.pushBack([dr, dc])

return mat

- Time: O(m * n)
- Space: O(m * n)
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const res = Array.from(new Array(rows), (e) => new Array(cols).fill(0))
    const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))
    const qu = new Deque()

    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (mat[r][c] === 0) {
                visited[r][c] = true
                qu.pushBack([r, c])
            }
        }
    }

    while (qu.size() > 0) {
        const [r, c] = qu.popFront()
        for (let [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited[nr][nc] === true) {
                continue
            }

            mat[nr][nc] = mat[r][c] + 1
            visited[nr][nc] = true
            qu.pushBack([nr, nc])
        }
    }

    return mat
};
// https://leetcode.com/problems/flood-fill/

/**
BFS
create a visited matrix of same dimensions of image

create queue with Deque
save original color at [sr,sc]
image[sr][sc] = color
enqueue [sr, sc]

while (qu.length > 0) {
    const dqu = qu.popFront()

    check in the 4 directions
        if (out of bounds || visited[nr][nc] === true || image[nr][nc] !== originalColor) {
            continue
        }
        visited[nr][nc] = true
        image[nr][nc] = color
        qu.pushBack([nr][nc])
}

return image

- Time: O(m * n)
- Space: O(m * n)
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const rows = image.length
    const cols = image[0].length
    const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    const qu = new Deque()
    const initClr = image[sr][sc]
    image[sr][sc] = color
    visited[sr][sc] = true
    qu.pushBack([sr, sc])
    
    while (qu.size() > 0) {
        
        const [r, c] = qu.popFront()
        
        for (let [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc
            
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited[nr][nc] === true || image[nr][nc] !== initClr) {
                continue
            }

            visited[nr][nc] = true
            image[nr][nc] = color
            qu.pushBack([nr, nc])

        }
    }

    return image
};
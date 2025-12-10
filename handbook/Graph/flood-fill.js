// https://leetcode.com/problems/flood-fill/

/**
1. Assumptions
    1. cell [sr][sc] is within matrix

2. input validation
    1. sr, sc, and color are a Number
    2. image is a 2D matrix.

3. time and space constraints
    BTTC: O(m * n)  // if need to fill all cells, m * n
    Space: O(m * n)

4. edge cases and some test cases
    edge cases
    1. if image === null || image.length === 0: return image
    test cases
    1. only source changes
        inputs
            image = [[1,1,1],[1,2,0],[1,0,1]], sr = 1, sc = 1, color = 1
        expected output
            [[1,1,1],[1,1,0],[1,0,1]]
    2. fill some adjacent
        inputs
            image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
        expected output
            [[2,2,2],[2,2,0],[2,0,1]]
    3. new color is the same as sr,sc color + one adjacent cell
        creates loop if no visited Matrix

        inputs
            image = [[1,1,1],[1,2,2],[1,0,1]], sr = 1, sc = 1, color = 2
        expected output
            [[1,1,1],[1,2,2],[1,0,1]]

5. visualize by drawing and manaully solve
6. break into subproblems
    2D matrix representing a Graph
    BFS and DFS have the same time complexity
    Space
        BFS of O(m * n) need visited Matrix + Queue of max 4
        DFS of O(m * n) since recursive stack could be m * n if all cells need to be changed

    Do BFS for practice

    record original Number at image[sr][sc]
    create Queue
    change color at [sr][sc] to color
    enqueue cell [sr, sc]

    while qu.size() > 0
        cell = dequeue

        for adjacent directions of cell
            if new cell within bounds and not visited and === original color
                change color at new cell
                mark visited
                enqueue new cell
                // marking visited and changing color now so that another adjacent cell to this new cell does not enqueue it again

    return image

7. algos
    - BFS of 2D matrix representation of a Graph

8. data structures
    - 2D matrix of a graph

9. complexity
    Time: O(m * n)
    Space: O(m * n)
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image === null || image.length === 0) {
        return image
    }

    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const rows = image.length
    const cols = image[0].length

    const visited = new Array(rows).fill().map((e) => new Array(cols).fill(false))

    const original = image[sr][sc]
    const qu = new Deque()
    image[sr][sc] = color
    qu.pushBack([sr, sc])

    while (qu.size() > 0) {
        const [r, c] = qu.popFront()

        for (let [dr, dc] of dirs) {
            const nr = r + dr
            const nc = c + dc
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && visited[nr][nc] === false && image[nr][nc] === original) {
                image[nr][nc] = color
                visited[nr][nc] = true
                qu.pushBack([nr, nc])
            }
        }
    }

    return image
};
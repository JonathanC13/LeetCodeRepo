// https://leetcode.com/problems/01-matrix/

/**
1. Assumptions
    1. There is at least one 0 in the matrix

2. input validation
    1. mat is a 2D matrix of only 0 and 1

3. time and space constraints
    BTTC: O(m * n)
    Space: O(m * n) // visited + queue

4. edge cases and some test cases
    edge cases
    1. if mat === null || mat.length === 0: return mat
    test cases
    1. multiple distances of >= 1
        inputs
            mat = [[0,0,0],[0,1,0],[1,1,1]]
        expected output
            [[0,0,0],[0,1,0],[1,2,1]]
    2. single 0
        input
            mat = [[1,1,1],[1,1,1],[1,1,0]]
        expected output
            [[4,3,2],[3,2,1],[2,1,0]]
        
5. visualize by drawing and manually solve
6. break into subproblems
    For each cell to get the minimum distance from a specific valued cell, it is optimal to start from those cells and BFS outward.
    This causes the outer cells that are closest to propagate the distance inward while increasing distance value.

    create a queue
    enqueue all 0s' cells
    mark all 0s' cells as visited

    while qu.size() > 0
        cell = dequeue

        for adjacent directions
            if new cell within bounds and not visited
                new cell value = cell + 1   // the dequeued cell contains the min distance from a 0, therefore + 1 to get to this new cell
                mark as visited
                enqueue new cell

    return mat

7. algos
    - BFS

8. data structures
    - 2D Matrix as Graph

9. Complexity
    Time: O(m * n)
    Space: O(m * n)
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    if (mat === null || mat.length === 0) {
        return mat
    }

    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const rows = mat.length
    const cols = mat[0].length
    const visited = Array.from(new Array(rows), (e) => new Array(cols).fill(false))

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

        for (let [dr, dc] of dirs) {
            const nr = r + dr
            const nc = c + dc

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && visited[nr][nc] === false) {
                visited[nr][nc] = true
                mat[nr][nc] = mat[r][c] + 1
                qu.pushBack([nr, nc])
            }
        }
    }

    return mat
};
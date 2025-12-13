// https://leetcode.com/problems/pacific-atlantic-water-flow/

/**
1. Assumptions
    1. Height Numbers are >= 0

2. input validation
    1. heights is a 2D Array and each height is >= 0

3. time and space constraints
    BTTC: Time: O(r * c)
        DFS: Since, once marked that a cell can reach an ocean, it will not be evaluated again = recursion does not continue through that cell
        BFS: Same as DFS but the already true cell does not get enqueued
    Space: O(r * c)

4. edge cases and some test cases
    edge cases
    1. if heights === null || heights.length === 0: return []
    test cases
    1. multiple tiles
        input
            heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
        expected output
            [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
    2. 1 tile
        input
            [[1]]
        expected output
            [[0,0]]

5. visualize by drawing and manually solve
6. break into subproblems
    BFS or DFS works, main mechanism is maintaining a 2D Array for each oceans if the tile can flow to it. Then at the end determine the common tiles.

7. algos
    - BFS, DFS

8. data structures
    - 2D Array as Graph

9. complexity
    Time: O(r * c)
    Space: O(r * c)
        
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const res = new Array()
    const rows = heights.length
    const cols = heights[0].length
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    const pacMat = new Array(rows).fill().map((e) => new Array(cols).fill(false))
    const atlMat = new Array(rows).fill().map((e) => new Array(cols).fill(false))

    const pacQu = new Deque()
    const atlQu = new Deque()

    const BFS = (queue, oceanMat) => {
        while (queue.size() > 0) {
            const [r, c] = queue.popFront()
            oceanMat[r][c] = true

            // check in the adjacent if water can flow to the current tile
            for (let [dr, dc] of dirs) {
                const nr = r + dr
                const nc = c + dc

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && oceanMat[nr][nc] === false && heights[nr][nc] >= heights[r][c]) {
                    queue.pushBack([nr, nc])
                }
            }
        }
    }

    // enqueue the ocean touching cells into their respective Queues for the starting cells
    for (let r = 0; r < rows; r ++) {
        pacQu.pushBack([r, 0])
        atlQu.pushBack([r, cols - 1])
    }
    for (let c = 0; c < cols; c ++) {
        pacQu.pushBack([0, c])
        atlQu.pushBack([rows - 1, c])
    }

    BFS(pacQu, pacMat)
    BFS(atlQu, atlMat)

    // check for the common cells in pacMat and atlMat
    for (let r = 0; r < rows; r ++) {
        for (let c = 0; c < cols; c ++) {
            if (pacMat[r][c] === true && atlMat[r][c] === true) {
                res.push([r, c])
            }
        }
    }

    return res
};
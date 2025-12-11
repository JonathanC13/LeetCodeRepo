/**
 * Minimum Knight Moves — Problem Description (Paraphrased)

A knight starts at the coordinate (0, 0) on an infinite chessboard.
You are given a target coordinate (x, y).

Your task is to compute the minimum number of moves the knight needs to reach the target position.

Knight movement rules

From any square (r, c), a knight may move to exactly one of these 8 positions:

(r + 1, c + 2)
(r + 1, c - 2)
(r - 1, c + 2)
(r - 1, c - 2)
(r + 2, c + 1)
(r + 2, c - 1)
(r - 2, c + 1)
(r - 2, c - 1)

Input
    1. Two integers: x and y
    2. Coordinates can be negative, and the board extends infinitely.

Output
    1. Return the smallest number of moves required for the knight to reach (x, y).

Example:
Input:  x = 2, y = 1
Output: 1
Explanation: A single knight move can reach (2, 1).


1. Assumptions:
    1. None

2. Input validation
    1. x and y are Numbers

3. time and space constraints
    BTTC: O(r * c * 8^(r + c))  // each position of the knight has 8 next moves
    Space: O(m) // m = max size of the queue

4. edge case and some test cases
    edge cases
    1. if x === 0 AND y === 0
        return 0
    test cases
    1. basic
        Input:  (2, 1)
        Output: 1
    2. basic
        Input:  (5, 5)
        Output: 4
    3. board edge
        Input:  (0, 1)
        Output: 3
    4. symmetric quadrant test
        Input:  (-4, -4)
        Output: 4
    5. optimal passes through other quandrants
        Input: (1, 1)
        Output: 3

5. visualize by drawing and manually solve
6. break into subproblems
    Since need minimum moves, utilize Breadth first traversal to check if the next step in any of the current level's moves can reach destination

    need visited so that moves are not repeated

    given x and y convert to abs(x) and abs(y) since only need to search in the positive, positive quadrant due to the knight moves mirrored in the 3 other quandrants

7. algos
    - Breadth first traversal

8. data structure
    - 2D matrix represeting Graph

9. Complexity
    Time: O(r * c * 8^(r + c))
    Space: O(m)
 * 
 */

const { Deque } = require('@datastructures-js/deque')

const minKnightMoves = (x, y) => {
    if (x === 0 && y === 0) {
        return 0
    }

    x = Math.abs(x)
    y = Math.abs(y)

    let knightMoves = 0
    const qu = new Deque()
    qu.pushBack([0, 0])

    const visited = new Set()
    visited.add('0,0')

    const dirs = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]

    while (qu.size() > 0) {

        const numCurrPos = qu.size()
        for (let i = 0; i < numCurrPos; i ++) {
            const [r, c] = qu.popFront()

            if (r === x && c === y) {
                return knightMoves
            }
            for (let [dr, dc] of dirs) {
                const nr = r + dr
                const nc = c + dc
                
                const key = `${nr},${nc}`
                if (nr >= -2 && nc >= -2 && !visited.has(key)) {
                    visited.add(key)
                    qu.pushBack([nr, nc])
                }
                
            }
        }

        knightMoves += 1
    }

    return -1   // will not reach here, any destination is possible.
}

const testCases = [
    [2, 1], // 1
    [5, 5], // 4
    [0, 1],  // 3
    [-4, -4],    // 4
    [1, 1]  // 2
]

for (let [x, y] of testCases) {
    console.log(minKnightMoves(x, y))
}
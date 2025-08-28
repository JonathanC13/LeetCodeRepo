// https://www.geeksforgeeks.org/dsa/minimum-steps-reach-target-knight/

/**
 * BFS
 * 
 * declare the 8 direction modifications that a knight can move, the "L" shape
 * create the board of n * n
 * mark the starting pos with "O"
 * mark the target pos with "X"
 * 
 * steps = 0
 * create a queue to store the moves
 * enqueue start position
 * 
 * while (qu.size() > 0) {
 *  steps += 1
 *  quSize = qu.size()  // need to eval all current coord since in same step
 *  for (let i = 0; i < quSize; i ++) {
 *      const [r, c] = qu pop
 *      for the popped r,c eval the 8 potental moves
 *          nr = r + dr
 *          nc + c + dc
 *          if (nr or nc out of bounds or board[nr][nc] === "O" (visited)) 
 *              continue
 *          if (board[nr][nc] === "X")
 *              // target reached
 *              return steps
 * 
 *          board[nr][nc] = "O"
 *          qu.pushBack([nr][nc])
 * 
 *  }
 * }
 * 
 * return -1
 * 
 * - Time: O(n * n)
 * - Space: O(n * n)
 * 
 */

const dq = require('@datastructures-js/deque');

/**
 * 
 * @param {[int]} knightPos 
 * @param {[int]} targetPos
 * @param {int} n ; board of n + 1 * n + 1
 */
const minSteps = function(knightPos, targetPos, n) {
    n = n + 1
    const board = new Array(n).fill().map((e) => new Array(n).fill(""))
    board[knightPos[0]][knightPos[1]] = "O"
    board[targetPos[0]][targetPos[1]] = "X"
    
    const dirs = [[-1, 2], [1, 2], [2, 1], [2, -1], [-1, -2], [1, -2], [-2, -1], [-2, 1]]
    const qu = new dq.Deque()

    qu.pushBack([knightPos[0], knightPos[1]])

    let steps = 0
    while (qu.size() > 0) {
        const quSize = qu.size()
        steps += 1

        for (let i = 0; i < quSize; i ++) {
            const [r, c] = qu.popFront()

            for(let [dr, dc] of dirs) {
                const nr = r + dr
                const nc = c + dc
                if (nr < 0 || nr >= n || nc < 0 || nc >= n || board[nr][nc] === "O") {
                    continue
                }
                if (board[nr][nc] === "X") {
                    return steps
                }

                board[nr][nc] = "O"
                qu.pushBack([nr, nc])
            }
        }
    }
    console.log(board)
    return -1
}

console.log(minSteps([1, 3], [5, 0], 6))

console.log(minSteps([1, 1], [30, 30], 30))
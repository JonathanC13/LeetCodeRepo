// https://leetcode.com/problems/snakes-and-ladders/description/?envType=study-plan-v2&envId=top-interview-150

/*
convert board into 1D Array, since the alternating direction is annoying
Note, the values are 1 indexed so, when move it is dest - 1
goal is n^2, index n^2 - 1

create a queue for the current dice roll moves from 1 to 6
enqueue starting position, 0
create visited Array for loops
moves = 0

while q is not empty
    quSize = q size()
    iterate 0 to quSize
        pop = dequeue from queue
        
        bestPos = curr
        iterate 1 to <= 6   // next move has to be in range of min(curr + 1, goal)
            newPos = min(pop + i, goal)
            if arr[newPos] !== -1
                newPos = arr[newPos] - 1
            
            if (newPos === goal){
                return moves + 1
            }
            bestPos = Max(bestPos, newPos)

        enqueue bestPos

    moves += 1

- Time: O((n^2) / 6)
- Space: O(1)
*/

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const arr = new Array()
    const rows = board.length
    const even = rows % 2 === 0 ? true : false
    for (let r = rows - 1; r >= 0; r --) {
        if (even === true) {
            if (r % 2 === 1) {
                arr.push(...board[r])
            } else {
                arr.push(...(board[r].reverse()))
            }
        } else {
            if (r % 2 === 0) {
                arr.push(...board[r])
            } else {
                arr.push(...(board[r].reverse()))
            }
        } 
    }
    console.log(arr)
    const visited = new Array(arr.length).fill(false)
    const goal = (rows * rows) - 1
    let moves = 0
    const qu = new Deque()
    qu.pushBack(0)

    while (qu.size() > 0) {
        const quSize = qu.size()
        for (let i = 0; i < quSize; i ++) {
            const pop = qu.popFront()

            for (let j = 1; j <= 6; j ++) {
                let newPos = Math.min(pop + j, goal)
                if (arr[newPos] !== -1) {
                    if (newPos === goal) {
                        return -1
                    }
                    newPos = arr[newPos] - 1
                }

                if (newPos === goal) {
                    return moves + 1
                }
                if (visited[newPos] === false) {
                    visited[newPos] = true
                    qu.pushBack(newPos)
                }
                
                
            }
        }
        moves += 1
    }

    return -1
};
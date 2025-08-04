// https://leetcode.com/problems/ipo/?envType=study-plan-v2&envId=top-interview-150

/*
** Note, the capital to start a project is not deducted from the current owned captial.

create a pri queue
    1. element of [profit, capital to start]
    2. sort by profit, if tie, then lowest capital first
    So, the front will has the project that will produce the most profit.

while k > 0 && pri Queue not empty // can pick more projects
    note the number of projects left to choose from
    create new buffer Array for projects where the current capital is insufficient to start the project
    while (pri Que is not empty)
        dequeue the top of the pri Queue
        if (curr capital >= dequeued's captial to start the project)
            k -= 1
            curr Capital += dequeued's project profit
            break
        else:
            buffer.push(dequeued)

    if the buffer length === starting projects to choose from for this loop, it means none were chosen
        break

    enqueue all buffer elements back into the pri Queue

return curr capital

- Time: O(n log(n)) // log(n) for each pri q operation, * n because setup is n times and then + minimum k times to pick projects
- Space: O(n)
*/

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const priQ = new PriorityQueue((a, b) => {
        const diff = b[0] - a[0]    // profit descending
        if (diff === 0) {
            return a[1] - b[1]      // start up capital ascending
        }
        return diff
    })

    for (let i = 0; i < profits.length; i ++) {
        priQ.enqueue([profits[i], capital[i]])
    }

    let currCap = w
    
    while (k > 0 && priQ.size() > 0) {
        const numProjs = priQ.size()
        let buffer = new Array()
        while (priQ.size() > 0) {
            const pop = priQ.dequeue()
            if (currCap >= pop[1]) {
                currCap += pop[0]
                k -= 1
                break
            } else {
                buffer.push(pop)
            }
        }

        if (buffer.length === numProjs) {
            break
        }

        for (let i = 0; i < buffer.length; i ++) {
            priQ.enqueue(buffer[i])
        }
    }

    return currCap
};
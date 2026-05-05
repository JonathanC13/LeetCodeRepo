// https://neetcode.io/problems/task-scheduling/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. tasks
 *      - tasks instanceof Array
 *      - tasks.length >= 0
 *      - tasks's elements are String
 *  2. n
 *      - typeof n === 'Number'
 *      - n >= 0
 * 
 * 3. time and space constraints
 *  BTTC: O(n log(n))
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if tasks.length === 0: return 0
 * 
 *  test cases
 *  1. there is an idle cycle
 *      inputs
 *          tasks = [x,x,y,y], n = 2
 *      expected output
 *          5
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  For each task, record the occurances. Enqueue [occur,taskName] into a max priority queue because to get the minimum number of cycles
 *  the task with the higher number of remaining cycles needs to go first and go into cooldown first.
 * 
 *  Maintain a queue for the current tasks on cooldown [occur, taskName, cooldown]. Dequeue and decrement the cooldown, if < 0 cooldown finished so enqueue into priority queue,
 *  else enqueue back into cooldown queue
 * 
 * 7. algos
 *  - max priority queue operations
 * 
 * 8. data structures
 *  - priority queue (impl w/ heap)
 * 
 * 9. complexity
 *  Time: O(n * log(n))
 *  Space: O(n)
 */

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        if (tasks.length === 0) {
            return 0
        }

        const res = []
        const priQ = new PriorityQueue((a, b) => {
            return b[0] - a[0]  // desc, queue op on front
        })
        const cooldown = new Deque()

        const count = new Map()
        for(let t of tasks) {
            if (!count.has(t)) {
                count.set(t, 0)
            }
            count.set(t, count.get(t) + 1)
        }
        
        for (let [k, v] of count) {
            priQ.enqueue([v, k])
        }

        while (priQ.size() > 0 || cooldown.size() > 0) {

            // cooldown manage for this cycle
            const qSize = cooldown.size()
            for (let i = 0; i < qSize; i ++) {
                let [v, t, c] = cooldown.popFront()
                c -= 1
                if (c < 0) {
                    priQ.enqueue([v, t])
                } else {
                    cooldown.pushBack([v, t, c])
                }
            }

            // task to run this cycle
            if (priQ.size() > 0) {
                let [v, k] = priQ.dequeue()
                res.push(k)
                v -= 1
                if (v > 0) {
                    cooldown.pushBack([v, k, n])
                }
            } else {
                res.push('idle')
            }
        }

        // console.log(res)
        return res.length
        
    }
}

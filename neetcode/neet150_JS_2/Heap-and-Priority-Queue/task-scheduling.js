// https://neetcode.io/problems/task-scheduling

/*
Since desire minimum number of cycles, process the tasks that have the highest frequency first so that they are put on cooldown first and be able to run again earlier.
Create a Max pri Q for the [task, freq]
Create a regular Queue to store what tasks are currently on cooldown. The front will be the first to come off.

create Map for the tasks, freq
Iterate the tasks
    record task and freq 

Iterate Map and insert into MaxPriQ

while MaxPriQ > 0 || Queue.size() > 0
    iterate cooldown Queue and reduce all by 1, 
    if front becomes < 0, pop from queue(This will only happen to the front element) and enqueue into MaxQ

    pop top, add task to res Arr, enqueue into Q for cooldown

return res.length

- Time: O(n log m). m = unique tasks, n = tasks length
- Space: O(m)
*/

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = new Map()
        for (let i = 0; i < tasks.length; i ++) {
            map.set(tasks[i], (map.get(tasks[i]) || 0) + 1)
        }

        const maxQ = new MaxPriorityQueue((elem) => elem[1])
        for (let [key, val] of map.entries()) {
            maxQ.enqueue([key, val, n])
        }

        const q = new Queue()
        const res = new Array()

        // Q elem = [task, freq, cooldown]

        while (maxQ.size() > 0 || q.size() > 0) {
            const qSize = q.size()
            for (let i = 0; i < qSize; i ++) {
                const popped = q.dequeue()
                popped[2] -= 1
                
                if (popped[2] < 0) {
                    maxQ.enqueue(popped)
                } else {
                    q.enqueue(popped)
                }
            }

            if (maxQ.size() > 0) {
                const processed = maxQ.dequeue()
                res.push(processed[0])
                processed[1] -= 1
                if (processed[1] > 0) {
                    processed[2] = n
                    q.enqueue(processed)
                }
            } else {
                res.push('idle')
            }
        }

        console.log(res)
        return res.length
    }
}

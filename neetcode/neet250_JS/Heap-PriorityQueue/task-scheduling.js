// https://neetcode.io/problems/task-scheduling

/*
create a Map to count the frequencies of the tasks

create a MaxPriorityQueue to hold the elements in form of: {freq, taskName, cooldown}
create a queue for tasks that are on cooldown

const res = []

cycles = 0
while MaxQ size() > 0 || Q size() > 0
    cycles += 1

    for (let i = 0; i < Q.size(); i++) {
        // reduce cooldown of all tasks that are cooling down
        const task = Q.dequeue()
        task.cooldown -= 1
        if (task.cooldown === 0) {
            MaxQ.enqueue(task)
        } else {
            Q.enqueue(task)
        }
    }

    if (MaxQ.size() > 0) {
        const currTask = MaxQ.dequeue()
        currTask.freq -= 1
        currTask.cooldown = n

        Q.enqueue(currTask)
        res.push(currTask.taskName)
    } else {
        res.push('idle')
    }

- Time: O(n log m), m = unique tasks
- Space: O(m) 


*/

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map()
        for (let i = 0; i < tasks.length; i ++) {
            if (!freq.get(tasks[i])) {
                freq.set(tasks[i], 0)
            }
            freq.set(tasks[i], freq.get(tasks[i]) + 1)
        }

        const res = []
        let cycles = 0

        const cooldownQ = new Queue()
        const nextTaskQ = new MaxPriorityQueue((task) => task.freq)
        for (let [key, val] of freq.entries()) {
            nextTaskQ.enqueue({'freq': val, 'name': key, 'cooldown': 0})
        }

        while (nextTaskQ.size() > 0 || cooldownQ.size() > 0) {
            cycles += 1
            
            const cooldownSize = cooldownQ.size()   // only the initial tasks
            for (let i = 0; i < cooldownSize; i ++) {
                const task = cooldownQ.dequeue()
                task.cooldown -= 1
                if (task.cooldown === 0) {
                    nextTaskQ.enqueue(task)
                } else {
                    cooldownQ.enqueue(task)
                }
            }

            if (nextTaskQ.size() > 0) {
                const currTask = nextTaskQ.dequeue()
                res.push(currTask.name)
                currTask.freq -= 1
                if (currTask.freq > 0) {
                    currTask.cooldown = n + 1
                    cooldownQ.enqueue(currTask)
                }
            } else {
                res.push('idle')
            }
        }
        console.log(res)
        return cycles
    }
}

// https://leetcode.com/problems/task-scheduler/description/

/**
create pri Q
    elem: [taskName, cyclesLeft, cooldown]
    sorting:
        1. most tasks left first (desc). This will ensure min number of cycles since trying to pick task with the most cycles left.

create aux Queue to fill with tasks that are dequeued to be chosen to run but have a cooldown, so temp store it

- Time: O(n log n)  // n = tasks.length
- Space: O(n)
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const priQ = new PriorityQueue((a, b) => {
        return b[1] - a[1]  // if > 0 (1), desc
    })
    const cooldownAux = new Deque()
    let cycles = 0
    const elems = new Map()

    for (let i = 0; i < tasks.length; i ++) {
        if (!elems.has(tasks[i])) {
            elems.set(tasks[i], 0)
        }
        elems.set(tasks[i], elems.get(tasks[i]) + 1)
    }
    
    for (let [k, v] of elems) {
        priQ.enqueue([k, v, 0])
    }
    console.log(elems)
    const combo = new Array()

    while (priQ.size() > 0 || cooldownAux.size() > 0) {

        // enqueue all tasks that finished cooldown
        const quSize = cooldownAux.size()
        for (let i = 0; i < quSize; i ++) {
            const pop = cooldownAux.popFront()
            if (pop[2] === 0) {
                // can run this cycle
                priQ.enqueue(pop)
            } else {
                // reduce current cooldown and re-enqueue
                pop[2] -= 1
                cooldownAux.pushBack(pop)
            }
        }

        if (priQ.size() > 0) {
            const deq = priQ.dequeue()
            combo.push(deq[0])

            // decrement remaining cycles for this task
            deq[1] -= 1
            if (deq[1] !== 0) {
                deq[2] = n
                cooldownAux.pushBack(deq)
            }
        } else {
            combo.push('idle')
        }

        // this cycle complete
        cycles += 1
    }
    console.log(combo)
    return cycles
};
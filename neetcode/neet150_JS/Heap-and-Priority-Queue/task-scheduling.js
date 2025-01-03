// https://neetcode.io/problems/task-scheduling

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map()  // taskName: freq

        // record frequencies of each task
        for (let i = 0; i < tasks.length; i ++) {
            freq.set(tasks[i], (freq.get(tasks[i]) || 0) + 1)
        }

        // place the {freq: freq, task: task} into the max heap
        const maxPriQ = new MaxPriorityQueue((taskInfo) => {return taskInfo['remFreq']})   // {remFreq:remFreq, taskName:taskName}
        for (let [taskName, remFreq] of freq.entries()) {
            maxPriQ.enqueue({remFreq:remFreq, taskName:taskName})
        }
        
        // cycles
        let cycles = 0
        const cooldown = [] // [{remFreq: val, taskName: val}, cycle valid again]
        const possibleSeq = []

        while(maxPriQ.size() > 0 || cooldown.length > 0) {
            cycles += 1

            // determine next task to run in the cycle
            let taskInfo = null
            if (maxPriQ.size() > 0) {
                taskInfo = maxPriQ.dequeue()

                // add the current ran task to the cooldown Array if needs to be ran more times
                if (taskInfo['remFreq'] > 1) {
                    taskInfo['remFreq'] -= 1
                    cooldown.push([taskInfo, cycles + n])
                }

                possibleSeq.push(taskInfo['taskName'])
   
            } else {
                // idle
                possibleSeq.push('idle')
            }

            // check if the oldest task cooldown is over yet
            if (cooldown.length > 0 && cooldown[0][1] === cycles) {
                maxPriQ.enqueue(cooldown.shift()[0])
            }
            
            // console.log(maxPriQ['_heap']['_heap']['_nodes'])
            // console.log(cooldown)
            // console.log('next')

        }
        console.log(possibleSeq.join(' -> '))
        return cycles
    }
}

// https://leetcode.com/problems/single-threaded-cpu/

/*
Q element is [enqueueTime, processingTime, i]

sort Tasks
    need to add index and sort by enqueue in non-descending order
        time: n log n 

create a PriorityQueue for the lowest processing time, if same then lowest index

cycle = tasks[0][0] // since sorted by enqueue time, the first cycle will be the first element's enqueue time
i = 0
while (i < tasks.length || processingQ.size() > 0) {
    while (i < tasks.length && cycle <= tasks[i][0]) {
        // enqueue all tasks that can run at the current cycle.
        processingQ.enqueue(tasks[i])
        i += 1
    }
    if (processingQ.size() > 0) {
        // have tasks to process
        const runTask = processingQ.dequeue()
        res.push(runTask[2])
        cycle += runTask[1]
    } else if (i < tasks.length) {
        // pull cycle up to the next task that can run because CPU idle due to other tasks ending and other tasks enqueue not ready
    }
}

return res
    
- Time: O(n log n).
- Space: O(n). n ~= n
*/

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    const res = []

    const taskList = tasks.map((e, i) => {
        return [...e, i]
    })
    taskList.sort((a, b) => {
        return a[0] - b[0]
    })
    console.log(taskList)
    const processingQ = new PriorityQueue((a, b) => {
        const ord = a[1] - b[1]
        if (ord === 0) {
            return a[2] - b[2]
        }
        return ord
    })

    let cycle = taskList[0][0]
    let i = 0
    while (i < taskList.length || processingQ.size() > 0) {
        while (i < taskList.length && taskList[i][0] <= cycle) {
            processingQ.enqueue(taskList[i])
            i += 1
        }
        
        if (processingQ.size() > 0) {
            const runTask = processingQ.dequeue()
            res.push(runTask[2])
            cycle += runTask[1]
        } else if (i < taskList.length) {
            cycle = taskList[i][0]
        }
    }

    return res
};
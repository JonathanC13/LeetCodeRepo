// https://leetcode.com/problems/course-schedule-ii/description/

/**
topoglogical traverse

create adjList
    index: the prereq course number
    value: Array of incoming edges (the incoming courses are the nodes that need this as prereq)
    * Reason why pre-req -to-> course is because after evaluating the leaf node, the "value" will have the reference (outgoing) to the next course that requires this one

create an Array of length numCourses
iterate the adjList
    iterate the outgoing
        // fill incomingArr with the number of incoming edges
        incomingArr[out] += 1


create a queue for the nodes to be evaluated at each topological level

iterate incomingArr and enqueue into the queue all nodes with 0 incoming

res = []

while (qu.size() > 0)
    const pop = qu.popFront()
    res.push(pop)   // since if in queue, the prereqs were satisfied
    for the pop node, iterate all the outgoing edges
        reduce the incoming in incomingArr since outgoing -into-> incoming
        if (incoming for that outgoing node === 0)
            // new leaf
            qu.pushBack(outgoing node)

if (res.length !== numCourses)
    // this means could not complete all courses, due to cycle somewhere
    return []

return res

- Time: O(n * e)    // O(e) + O(n) + O(n * e) + O(n + e)
- Space: O(n + e)

 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill().map((e) => new Array())
    for (let [crs, pre] of prerequisites) {
        adjList[pre].push(crs)
    }

    const incoming = new Array(numCourses).fill(0)
    for (let i = 0; i < adjList.length; i ++) {
        for (let out of adjList[i]) {
            incoming[out] += 1
        }
    }

    const qu = new Deque()
    for (let i = 0; i < incoming.length; i ++) {
        if (incoming[i] === 0) {
            qu.pushBack(i)
        }
    }

    const res = []
    while (qu.size() > 0) {
        const pop = qu.popFront()
        res.push(pop)

        for (let out of adjList[pop]) {
            incoming[out] -= 1
            if (incoming[out] === 0) {
                qu.pushBack(out)
            }
        }
    }

    if (res.length !== numCourses) {
        return []
    }

    return res
};
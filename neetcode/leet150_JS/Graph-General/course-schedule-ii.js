// https://leetcode.com/problems/course-schedule-ii/description/?envType=study-plan-v2&envId=top-interview-150

/*
Since need the order, must do topological traversal since it starts from a nodes have no prerequisites (no incoming edges) and then only enqueues nodes where all incoming edges are evaluated.

//create a processed Array to track which nodes have had all incoming edges processed.

create adjList for the courses:
    index is the prereq course
    Array at index are the courses that need this prereq

create an Array to hold the number of incoming edges (prereqs) for the course

create a Queue with deque()
iterate the incomingEdge Array and enqueue all courses that have the value of 0

while queue is not empty
    popped the front of the queue
    order.push(popped)
    //add popped to processed

    visit each prereq in adjList for the popped node
        adjust incomingEdge - 1 and if result is 0, enqueue to queue

if (numCourses !== result.length) {
    // has cycle since all nodes could not be reached due to some still have incoming edges and could not reduce to 0 since circular
    return []
}

return order

- Time: O(n + e)
- Space: O(n + e)
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const order = new Array()
    const incomingEdges = new Array(numCourses).fill(0)
    const adjList = new Array(numCourses).fill().map((e) => new Array())

    for (let i = 0; i < prerequisites.length; i ++) {
        crs = prerequisites[i][0]
        pre = prerequisites[i][1]
        adjList[pre].push(crs)
        incomingEdges[crs] += 1
    }
    console.log(incomingEdges)

    const qu = new Deque()
    for (let i = 0; i < incomingEdges.length; i ++) {
        if (incomingEdges[i] === 0) {
            qu.pushBack(i)
        }
    }

    while (qu.size() > 0) {
        const popped = qu.popFront()
        order.push(popped)

        for (let i = 0; i < adjList[popped].length; i ++) {
            crs = adjList[popped][i]
            incomingEdges[crs] -= 1
            if (incomingEdges[crs] === 0) {
                qu.pushBack(crs)
            }
        }
    }
    if (order.length !== numCourses) {
        return []
    }

    return order
};
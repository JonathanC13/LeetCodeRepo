// https://neetcode.io/problems/course-schedule-ii

/*
Kahn's algorithm for Topological Sorting
The algorithm works by repeatedly finding vertices with no incoming edges, removing them from the graph, and updating the incoming edges of the remaining vertices. This process continues until all vertices have been ordered.

create Array for the in-degree of each node (incoming edges count)
create Adjacency list for the course and prereq

iterate the in-degree Array and push all with 0 into a Queue for the initial nodes

while Q is not empty
    pop the front, push into res array
    for each prereq in the adjList for this course, -1 in-degree and if it becomes 0, push into Queue

If the queue is empty and there are still nodes in the graph, the graph contains a cycle and cannot be topologically sorted.
    return []

return res

- Time: O(V + E)
- Space: O(V + E)
*/

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const inDeg = new Array(numCourses).fill(0)
        const adjList = new Array(numCourses).fill().map((e) => new Array())

        for (let i = 0; i < prerequisites.length; i ++) {
            inDeg[prerequisites[i][1]] += 1
            adjList[prerequisites[i][0]].push(prerequisites[i][1])
        }

        const qu = new Queue()
        for (let i = 0; i < inDeg.length; i ++) {
            if (inDeg[i] === 0) {
                qu.enqueue(i)
            }
        }
        const resRev = new Array()
        while (qu.size() > 0) {
            const course = qu.dequeue()
            resRev.push(course)

            for (let i = 0; i < adjList[course].length; i ++) {
                const pre = adjList[course][i]
                inDeg[pre] -= 1
                if (inDeg[pre] === 0) {
                    qu.enqueue(pre)
                }
            }
        }

        // check if cycle. any inDeg value > 0
        for (let i = 0; i < inDeg.length; i ++) {
            if (inDeg[i] > 0) {
                return []
            }
        }

        return resRev.reverse()
    }
}

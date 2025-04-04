// https://neetcode.io/problems/course-schedule

/*
edge case 1: if numCourses === 0 || prerequisites.length === 0: return true

From the prerequisites, create an adjacency list. The index will be the course, the list will be its prereqs.
Create a visited Array with length of numCourses.

For each course, detect if there is a cycle. If there is a cycle return false, else true

- Time: O(V + E)    // v = numCourses.
- Space: O(V + E)

*/

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if (numCourses === 0 || prerequisites.length === 0) {
            return true
        }

        const adjList = new Array(numCourses).fill().map((v) => new Array())
        for (let i = 0; i < prerequisites.length; i ++) {
            adjList[prerequisites[i][0]].push(prerequisites[i][1])
        }
        console.log(adjList)
        const visited = new Array(numCourses).fill(false)

        for (let i = 0; i < numCourses; i ++) {
            if (this.checkCycle(adjList, visited, i)) {
                return false
            }

        }

        return true
    }

    checkCycle(adjList, visited, i) {
        if (visited[i] === true) {
            return true
        }

        visited[i] = true

        // iterate prereqs
        for (let p = 0; p < adjList[i].length; p ++) {
            if (this.checkCycle(adjList, visited, adjList[i][p])) {
                return true
            }
        }

        visited[i] = false
        // to reduce rethreading, if a course prerequisites have been cleared of cycle, then can remove them from the adjList
        adjList[i] = []

        return false
    }
}

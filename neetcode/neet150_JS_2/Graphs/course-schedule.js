// https://neetcode.io/problems/course-schedule

/*
create an adjacency list from the prerequisites.

traverse each course and its prereqs, if a cycle is detected, then it is not possible

- Time: O(V + E)
- Space: O(V + E)
*/

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = new Array(numCourses).fill().map((e) => new Array())
        for (let i = 0; i < prerequisites.length; i ++) {
            adjList[prerequisites[i][0]].push(prerequisites[i][1])
        }

        const visited = new Set()
        for (let i = 0; i < adjList.length; i ++) {
            if (this.hasCycle(adjList, i, visited) === true) {
                return false
            }
        }
        return true
    }

    hasCycle(adjList, i, visited) {
        if (visited.has(i)) {
            return true
        }

        visited.add(i)

        for (let pre = 0; pre < adjList[i].length; pre ++) {
            if (this.hasCycle(adjList, adjList[i][pre], visited)) {
                return true
            }
        }

        visited.delete(i)

        return false
    }
}

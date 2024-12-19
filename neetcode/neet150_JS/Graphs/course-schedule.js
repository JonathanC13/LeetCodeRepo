// https://neetcode.io/problems/course-schedule

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

        const visited = new Set()

        const adjList = Array(numCourses).fill().map((e) => {return Array(0)})
        for (let [crs, pre] of prerequisites) {
            adjList[crs].push(pre)
        }

        for (let i = 0; i < numCourses; i ++) {
            if (!this.DFS(i, adjList, visited)) {
                return false
            }
        }

        return true
    }

    DFS(crs, adjList, visited) {
        if (visited.has(crs)) {
            return false
        }

        visited.add(crs)

        for (let pre of adjList[crs]) {
            if (!this.DFS(pre, adjList, visited)) {
                return false
            }
        }

        visited.delete(crs)

        return true
    }
}

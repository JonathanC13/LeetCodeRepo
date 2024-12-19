// https://neetcode.io/problems/course-schedule-ii

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        if (numCourses === 0) {
            return []
        }

        const visited = new Set()
        const order = new Set()

        const adjList = Array(numCourses).fill().map((e) => {return Array(0)})
        for (let [crs, pre] of prerequisites) {
            adjList[crs].push(pre)
        }

        for (let i = 0; i < numCourses; i ++) {
            if (!this.DFS(i, adjList, visited, order)) {
                return []
            }
        }

        return Array.from(order)
    }

    DFS(crs, adjList, visited, order) {
        if (visited.has(crs)) {
            return false
        }

        visited.add(crs)

        for (let pre of adjList[crs]) {
            if (!this.DFS(pre, adjList, visited, order)) {
                return false
            }
        }

        // cleared, no cycles
        order.add(crs)
        visited.delete(crs)
        return true
    }
}

// https://neetcode.io/problems/course-schedule

class Solution {

    /*
    create an adjacency list from the prerequisites and then detect cycles
    for each course, try to detect a cycle
    */

    dfs(crs, adjList, visited) {
        if (visited.has(crs)) {
            return false
        }
        if (adjList[crs].length === 0) {
            return true
        }

        visited.add(crs)

        // for each adjacency node, must check for cycles
        for (let adj of adjList[crs]) {
            if (!this.dfs(adj, adjList, visited)) {
                return false
            }
        }

        // remove so does not interfere with next cycle detection
        visited.delete(crs)

        // TO reduce checking the same adjList again that has proven no cycle, can remove it so it is not checked again
        adjList[crs] = []

        return true
    }

    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if (!prerequisites) {
            return true
        }

        // create adj list
        const adjList = Array(numCourses).fill().map(() => {return []})
        for (let [crs, pre] of prerequisites) {
            adjList[crs].push(pre)
        }

        const visited = new Set()

        for (let i = 0; i < numCourses; i ++) {
            if (!this.dfs(i, adjList, visited)){
                return false
            }
        }

        return true

    }
}

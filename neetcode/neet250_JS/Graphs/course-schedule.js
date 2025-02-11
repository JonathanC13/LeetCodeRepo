/*
Construct an adjacency list
All the courses can be completed if there are no cycles.

iterate each node and check for cycles

- Time: O(n + e). n + e
- Space: O(n + e)
*/

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        const adjList = new Array(numCourses).fill().map((e) => {return new Array()})
        
        for (let i = 0; i < prerequisites.length; i ++) {
            adjList[prerequisites[i][1]].push(prerequisites[i][0])
        }
        console.log(adjList)
        for (let i = 0; i < adjList.length; i ++) {
            const visited = new Set()
            if (this.checkCycle(adjList, i, visited)) {
                return false
            }
        }

        return true

    }

    checkCycle(adjList, i, visited) {
        if (visited.has(i)) {
            return true
        }

        visited.add(i)

        for (let nxt = 0; nxt < adjList[i].length; nxt ++) {
            if (this.checkCycle(adjList, adjList[i][nxt], visited)) {
                return true
            }
        }

        visited.delete(i)

        return false

    }
}

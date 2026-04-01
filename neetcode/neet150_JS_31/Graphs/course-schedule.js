// https://neetcode.io/problems/course-schedule/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. numCourses
 *      - typeof numCourses === 'number'
 *      - numCourses >= 0
 *  2. prerequisites
 *      - prerequisites instanceof Array
 * 
 * 3. time and space constraints
 *  BTTC: O(V + E)
 *  Space: O(V + E)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if numCourses <= 1: return true
 *  2. if prerequisites.length === 0: return true
 * 
 *  test cases
 *  1. can complete all courses
 *      inputs
 *          numCourses = 6
 *          prerequisites = [[0,1], [1,2], [2,3], [2,4]]
 *      expected output
 *          true
 * 
 *  2. cannot complete all courses
 *      inputs
 *          numCourses = 5
 *          prerequisites = [[0,1], [1,2], [2,3], [3,1]]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Create an Adjacency list where the index is the course and the Array are the courses that require it
 * 
 *  create a processed Array for the courses processed overall so course paths are not re-validated when already passed.
 *  create a visited Array for tracking courses on current path, for cycle detection
 * 
 *  must iterate every course and treat as start course since could be non connected graph
 *  
 * 7. algos
 *  - Graph adjList and traversal
 * 
 * 8. data structures
 *  - Graphs
 * 
 * 9. complexity
 *  Time: O(V + E)  // will need to visit every node and edge at least once
 *  Space: O(V + E) // for Adj List
 */

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if (numCourses <= 1 || prerequisites.length === 0) {
            return true
        }

        const processed = new Array(numCourses).fill(false)
        const visited = new Array(numCourses).fill(false)

        // [prereq, [dependents]]
        const adjList = Array.from(new Array(numCourses), (e) => new Array())

        for (let i = 0; i < prerequisites.length; i ++) {
            adjList[prerequisites[i][1]].push(prerequisites[i][0])
        }

        for (let i = 0; i < numCourses; i ++) {
            if (this.dfs(i, adjList, processed, visited) === false) {
                return false
            }
        }

        return true
    }

    dfs(i, adjList, processed, visited) {
        if (visited[i] === true) {
            // must check if cycle first before processed
            return false
        }
        if (processed[i] === true) {
            // node already validated
            return true
        }

        processed[i] = true
        visited[i] = true

        // visit courses that depend on this course
        for (let neigh of adjList[i]) {
            if (this.dfs(neigh, adjList, processed, visited) === false) {
                return false
            }
        }

        visited[i] = false
        return true
    }
}

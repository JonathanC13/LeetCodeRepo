// https://leetcode.com/problems/course-schedule/?envType=study-plan-v2&envId=top-interview-150

/*
main
    since courses labelled 0 to numCourses - 1, can use Array as the adj list

    create directed adjList where the index is the course and the list are the prerequisites. Can be opposite if you want.

    create a visited Array

    iterate the adjList
        if (checkForCycle(i, adjList, visited)) // only impossible to complete all courses if a cycle is present
            return false

    return true

- Time: O(n + e)
- Space: O(n + e)
*/

const checkCycle = (i, adjList, visited, evalled) => {
    if (visited[i] === true) {
        return true
    }
    if (evalled[i] === true) {
        return false
    }

    visited[i] = true
    evalled[i] = true

    for (let j = 0; j < adjList[i].length; j ++) {
        if (checkCycle(adjList[i][j], adjList, visited, evalled)) {
            return true
        }
    }

    visited[i] = false  // so another path can go through this node

    return false
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill().map((e) => new Array())
    const visited = new Array(numCourses).fill(false)
    const evalled = new Array(numCourses).fill(false)

    for (let i = 0; i < prerequisites.length; i ++) {
        adjList[prerequisites[i][0]].push(prerequisites[i][1])
    }

    for (let i = 0; i < numCourses; i ++) {
        if (evalled[i] === true) { // since already proven no cycle with this node
            continue
        }
        if (checkCycle(i, adjList, visited, evalled)) {
            return false
        }
    }
    return true
};
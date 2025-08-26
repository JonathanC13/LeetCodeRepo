// https://leetcode.com/problems/course-schedule/

/*
main
    create an Adjacency list where:
        index is the course
        value: Array of the prerequisites
        *The reason the direction is from course -to-> prereq is because, if a connected graph, it will take likely less traversals starts with source nodes to visit all the courses otherwise having pre -to-> course likely requires more source nodes then traverse. It doesn't matter just an observation.

    create visited Array for course seen globally, this is for if not connected graph to prevent re-process courses
    create visited Array of length numCourses, fill with false, for traversal since if a cycle is detected then the course load cannot be completed.

    for (i to numCourses)
        if (visitedGbl[i] === false) {
            if (rec(...) === false) {
                return false
            }
        }
        

    return true

recursive traversal
* adjList
* course
* visited
* visitedGbl

    if (visited[crs] === true) {
        // already visited, meaning cycle
        return false
    }
    if (visitedGbl[i] === true) {
        // since already validated its prerequisites
        return true
    }


    visited[crs] = true
    visitedGbl[crs] = true

    // visit all prerequisites
    for (let pre of adjList[crs]) {
        if (rec(...) === false) {
            // detected cycle, propagate false up and out
            return false
        }
    }

    visited[crs] = false    // remove this course from path after evaluated since this course can be used as a prequisite for another course.

    return true

- Time: O(n + e)
- Space: O(n + e)
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const visited = new Array(numCourses).fill(false)
    const visitedGbl = new Array(numCourses).fill(false)

    const adjList = new Array(numCourses).fill().map((e) => new Array(0))
    for (let i = 0; i < prerequisites.length; i ++) {
        adjList[prerequisites[i][0]].push(prerequisites[i][1])
    }
    //console.log(adjList)

    for (let i = 0; i < numCourses; i ++) {
        if (visitedGbl[i] === false) {
            if (rec(adjList, i, visited, visitedGbl) === false) {
                return false
            }
        }
    }

    return true
};

const rec = (adjList, i, visited, visitedGbl) => {
    if (visited[i] === true) {
        return false
    }
    if (visitedGbl[i] === true) {
        // since already validated its prerequisites
        return true
    }

    visited[i] = true
    visitedGbl[i] = true

    for (let pre of adjList[i]) {
        if (rec(adjList, pre, visited, visitedGbl) === false) {
            return false
        }
    }

    visited[i] = false
    return true
}
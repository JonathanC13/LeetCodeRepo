// https://leetcode.com/problems/course-schedule/

/**
[a, b]
edge is b to a since need to take b first before a

1. Assumptions
    1. prerequisite has no duplicate edges

2. input validation
    1. numCourses is a Number
    2. prerequisites is an Array of Arrays of length 2 where each contains 2 Numbers

3. time and space constraints
    BTTC: O(V + E)
    Space: O(V + E) // V + E for adj List

4. edge cases and test cases
    1. if numCourses === 0 || prerequisites.length === 0: return true
    test cases
    1. contains a cycle, result false
        inputs
            n = 4
            pre = [[0, 1], [1, 2], [2, 1]]
        expected result
            false
    2. Can complete all courses
        inputs
            n = 4
            pre = [[0, 1], [1, 2], [1, 3]]
        expected result
            true

5. visualize by drawing and manually solve
6. break into subproblems
    Can solve with topological DFS or Kahn's topological algorithm with incoming edges

    Main goal is to determine if there is a cycle in the graph

7. algos
    - Topoplogical DFS
    - Kahn's topological algo

8. data structures
    - Arrays
    - Abstract Graph

9. complexity
    Time: O(V + E)
    Space: O(V + E)

 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (numCourses === 0 || prerequisites.length === 0) {
        return true
    }

    const adjList = new Array(numCourses).fill().map((e) => new Array())
    const incoming = new Array(numCourses).fill(0)

    for (let [crs, pre] of prerequisites) {
        adjList[pre].push(crs)
        incoming[crs] += 1
    }

    // return DFS(numCourses, adjList)
    return kahn(numCourses, adjList, incoming)
};

const kahn = (numCourses, adjList, incoming) => {
    const visited = new Array(numCourses).fill(false) // cycle detected #1. Actually do NOT need a visited mechanism since if there is a cycle the nodes will not achieve 0 incoming edges to be enqueued!

    const qu = new Deque()
    for (let i = 0; i < incoming.length; i ++) {
        if (incoming[i] === 0) {
            qu.pushBack(i)
        }
    }

    const res = new Array()

    while (qu.size() > 0) {
        const node = qu.popFront()
        res.push(node)

        for (let neigh of adjList[node]) {
            if (visited[neigh] === true) {
                return false
            }

            incoming[neigh] -= 1
            if (incoming[neigh] === 0) {
                visited[neigh] = true
                qu.pushBack(neigh)
            }
        }
    }
    console.log(res)
    return res.length === numCourses ? true : false
}

const DFS = (numCourses, adjList) => {

    const processed = new Array(numCourses).fill(false) // So to not re-process nodes for the topological order
    const visited = new Array(numCourses).fill(false)   // for cycle detection
    const topoStack = new Array()

    const topoDFS = (node, processed, topoStack, visited, adjList) => {
        if (processed[node] === true) {
            // has been processed for the topo order
            return true
        }
        if (visited[node] === true) {
            // cycle detected
            return false
        }

        visited[node] = true
        for (let neigh of adjList[node]) {
            if (topoDFS(neigh, processed, topoStack, visited, adjList) === false) {
                return false
            }
        }

        // no cycle and neighors explored
        processed[node] = true
        topoStack.push(node)
        return true
    }

    for (let i = 0; i < numCourses; i ++) {
        if (topoDFS(i, processed, topoStack, visited, adjList) === false) {
            return false
        }
    }

    if (topoStack.length !== numCourses) {
        return false
    }
    console.log(topoStack.reverse())
    return true
}
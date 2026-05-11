// https://neetcode.io/problems/course-schedule-ii/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. numCourses
 *      - typeof numCourses === 'number'
 *      - >= 0
 *  2. prerequisites
 *      - prerequisites instanceof Array
 *      - elements are Array of length 2 of Number
 * 
 * 3. time and space contraints
 *  BTTC: O(V + E)
 *  Space: O(V + E) for adj List
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if numCourses === 0: return []
 * 
 *  test cases
 *  1. can complete
 *      inputs
 *          numCourses = 3, pre = [[1,0]]
 *      expected output
 *          [0,1,2]
 * 
 *  2. impossible (cycle)
 *      inputs
 *          numCourses = 2, pre = [[1,0],[0,1]]
 *      expected output
 *          []
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Need to topological sort and if cycle then return []
 *  1. Can use DFS
 *      1. result stack
 *      2. iterate to pick entry nodes, global processed Array so don't reprocess and not a cycle
 *      3. traverse to the leaf nodes and then push onto result stack. The leaf nodes are courses that need the most prereq on path.
 *      4. cycle detected with internal visited Array
 *      5. result stack popped which reverses the nodes for correct topological sort
 *  2. Kahn topo sort
 *      1. Array with inbound edges for each course
 *      2. enqueue into queue the courses with 0 inbound (prereq)
 *      3. while qu not empty: dequeue node and enqueue neigh that are not visited.
 *          ** don't need visited due to only enqueue when inbound === 0
 *      4. if result.length !== numCourses there is a cycle because a cycle causes a node's inbound to not reach 0 to be able to be enqueued
 * 
 * 7. algos
 *  - DFS topo / Kahn topo sort
 * 
 * 8. data structures
 *  - Array
 * 
 * 9. complexity
 *  Time: O(V + E)
 *  Space: O(V + E)
 * 
 */

class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjList = new Array(numCourses).fill().map((e) => new Array())
        const inbound = new Array(numCourses).fill(0)
        for (let [crs, pre] of prerequisites) {
            adjList[pre].push(crs)
            inbound[crs] += 1
        }

        // 1. dfs
        // const resStack = new Array()
        // const processed = new Array(numCourses).fill(false)
        // const visited = new Array(numCourses).fill(false)
        // for (let i = 0; i < numCourses; i ++) {
        //     if (!processed[i]) {
        //         if (!this.dfs(adjList, i, processed, visited, resStack)) {
        //             return []
        //         }
        //     }
        // }
        // return resStack.reverse()

        // 2. Kahn
        const qu = new Deque()
        for (let i = 0; i < inbound.length; i ++) {
            if (inbound[i] === 0) {
                qu.pushBack(i)
            }
        }
        const visited = new Array(numCourses).fill(false)

        const res = new Array()
        while (qu.size() > 0) {
            const crs = qu.popFront()
            res.push(crs)
            for (let neigh of adjList[crs]) {
                inbound[neigh] -= 1
                if (inbound[neigh] === 0) {
                    qu.pushBack(neigh)
                }
            }
        }

        return res.length === numCourses ? res : []

    }

    dfs(adjList, i, processed, visited, resStack) {
        if (processed[i]) {
            return true
        }
        if (visited[i]) {
            return false
        }

        visited[i] = true

        for (let neigh of adjList[i]) {
            if (!this.dfs(adjList, neigh, processed, visited, resStack)) {
                // propagate early
                return false
            }
        }

        // fully processed node
        resStack.push(i)
        processed[i] = true
        visited[i] = false

        return true
    }
}

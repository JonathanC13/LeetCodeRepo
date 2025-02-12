// https://leetcode.com/problems/course-schedule-iv/

/*
create inDegree array
create and populate adjacency list and inDegree
create nodePre list

conduct Kahn topo sort
    for each adj course
        add to nodePre[adj]
        
        inDegree -=1
        if (inDegree === 0) {
            enqueue
        }

const res = []

iterate queries
    res.push(reachMatrix[queries[i][0]][queries[i][1]])

return res


- Time: O(n^3 + q). n^2 for adjList since worst case is if each node is a prereq to every other course, + n^2 for kahn (n^2 if complete graph, n * e where e = (n - 1)) * n for copying the prereq's prereq into current course
- Space: O(n^2). n^2 for adjList, + n for inDegree, + n for nodePrereq

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    
    const adjList = new Array(numCourses).fill().map((e) => {return new Array()})
    const inDegree = new Array(numCourses).fill(0)

    for (let i = 0; i < prerequisites.length; i ++) {
        inDegree[prerequisites[i][1]] += 1
        adjList[prerequisites[i][0]].push(prerequisites[i][1])
    }
    //
    const qu = new Deque()
    for (let i = 0; i < inDegree.length; i ++) {
        if (inDegree[i] === 0) {
            qu.pushBack(i)
        }
    }

    // the index is the course and the Set is the prereqs for it
    const nodePrereq = new Array(numCourses).fill().map((e) => {return new Set()})
    while (qu.size() !== 0) {
        const node = qu.popFront()

        for (let i = 0; i < adjList[node].length; i ++) {
            // add the course to the prereq Set of the adj course. The adjList is directed such that pre -> next.
            nodePrereq[adjList[node][i]].add(node)
            // to maintain the Set of all prereqs like a prereq has a prereq, add all the prereq's prereqs
            for (let [prereq, v] of nodePrereq[node].entries()) {
                nodePrereq[adjList[node][i]].add(prereq)
            }

            // normal Kahn BFS. if not 0 means there are more incoming so don't process this node yet. 
            inDegree[adjList[node][i]] -= 1
            if (inDegree[adjList[node][i]] === 0) {
                qu.pushBack(adjList[node][i])
            }
        }
    }
    //
    console.log(nodePrereq)

    const res = []
    for (let i = 0; i < queries.length; i ++) {
        res.push(nodePrereq[queries[i][1]].has(queries[i][0]))
    }

    return res
};
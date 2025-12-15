// https://neetcode.io/problems/valid-tree/question

/**
 * A valid tree has the properties
 * 1. no cycles
 * 2. n = # edges + 1
 * 3. all nodes connected
 * 
 * 1. Assumptions
 *  1. edges have no duplicate edges. like [0, 1] and [1, 0] it is the same edge
 *      if it does contain them, property #2 check at the beginning needs to be skipped
 * 
 * 2. input validation
 *  1. n is a Number
 *  2. edges is a 2D Array that contains Arrays of length 2 where the data types are Numbers
 * 
 * 3. time and space constraints
 *  BTTC: O(V + E)
 *  Space: O(V + E) // mainly the adjacency list
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0 && edges.length === 0: return true
 *  2. if n !== edges.length + 1: return false
 *  test cases
 *  1. not valid
 *      inputs
 *          n = 3
 *          edges = [[0,1], [2, 2]]
 *      expected output
 *          false
 *  2. valid
 *      inputs
 *          n = 5
 *          edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
 *      expected output
 *          true
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *      Can be solve with DFS or BFS
 * 
 *      // For #1 no cycles: if traversing the edges a node appears that has already been visited then a cycles exists
 *      // For #2 of a Tree is fully connected, at the end all Nodes must be visited when accessed from any starting node. if n is large, can optional use a variable to count how many visited.
 *          // Or use a Set, if the final size !== n, then not full connected.
 *      maintain visited Array for the nodes
 *      
 *      create adjacency List from the n and edges so have a blueprint to traverse
 * 
 *      create a queue
 *      visit any starting node and enqueue into queue
 *      // Since undirected, keep track of the source node that linked to current node. In DFS pass the parent, in BFS enqueue [node, parent]
 * 
 *      while qu is not empty
 *          traverse Breadth wise until cannot
 * 
 *      it is a valid tree if 
 *      #1. did not detect a cycle and return false within queue loop
 *      #2. All nodes could be visited from the selected starting node
 * 
 * 7. algos
 *  - BFS/DFS
 * 
 * 8. data structures
 *  - Arrays
 *  - Abstract Graph
 * 
 * 9. complexity
 *  Time: O(V + E)
 *  Space: O(V + E)
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n === 0 && edges.length === 0) {
            return true
        }
        if (n !== edges.length + 1) {
            return false
        }

        const visited = new Array(n).fill(false)
        let countVisited = 0

        const adjList = new Array(n).fill().map((e) => new Array())
        for (let i = 0; i < edges.length; i ++) {
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }

        // DFS
        const processed = new Set()
        if (dfsDetectCycle(adjList, 0, -1, processed) === true || processed.size !== n) {
            return false
        }
        return true

        // BFS
        const qu = new Deque()
        visited[0] = true
        countVisited += 1
        qu.pushBack([0, -1])

        while (qu.size() > 0) {
            const [node, src] = qu.popFront()

            for (let neigh of adjList[node]) {
                if (neigh === src) {
                    continue
                }
                if (visited[neigh] === true) {
                    return false
                }

                visited[neigh] = true
                countVisited += 1
                qu.pushBack([neigh, node])
            }
        }

        return countVisited === n ? true : false
    }
}

const dfsDetectCycle = (adjList, node, src, processed) => {
    if (processed.has(node)) {
        return true
    }

    // mark visited
    processed.add(node)

    for (let neigh of adjList[node]) {
        if (neigh === src) {
            continue
        }
        if (dfsDetectCycle(adjList, neigh, node, processed) === true) {
            return true
        }
    }

    return false
}

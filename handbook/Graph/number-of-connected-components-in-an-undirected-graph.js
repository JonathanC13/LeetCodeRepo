// https://neetcode.io/problems/count-connected-components/question

/**
 * 
 * Note: "Number of connected components" is simply number of individual graphs made up of the provided edges
 * 
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. n is a Number
 *  2. edges is a 2D Array of Arrays of length 2 where the values are Numbers
 * 
 * 3. time and space constraints
 *  BTTC: O(V + E)  // v = e. need to traverse each node and edge, + since visited is not re-processed
 *  Space: O(V + E) // Need to create the adjacency List + visited nodes + Queue/recursive stack
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return 0
 *  2. if edges.length === 0: return n  // since none have edges
 *  test cases
 *  1. fully connected
 *      inputs
 *          n=3
 *          edges=[[0,1], [0,2]]
 *      expected output
 *          1
 *  2. multiple graphs are represented with the edges
 *      inputs
 *          n = 6
 *          edges=[[0,1], [1,2], [2,3], [4,5]]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *      BFS or DFS can be used
 * 
 *      Create adjList that is a 2D Array of length n
 *      iterate edges and populate adjList
 *      
 *      Maintain visited Array of length n so that already processed nodes are not re-processed
 * 
 *      graphs = 0
 * 
 *      iterate i from 0 to < n
 *          if node i is not visited
 *              graphs += 1
 *              visited all connected nodes so that they are not considered as a seperate graph
 * 
 *      return graphs
 * 
 * 7. algos
 *  - BFS/DFS
 * 
 * 8. data structures
 *  - Arrays
 *  - Abstract Graphs
 * 
 * 9. Complexity
 *  Time: O(V + E)
 *  Space: O(V + E)
 * 
 *      
 * 
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        if (n === 0) {
            return 0
        }
        if (edges.length === 0) {
            return n
        }

        const adjList = new Array(n).fill().map((e) => new Array())
        for (let i = 0; i < edges.length; i ++) {
            // undirected, must record both directions
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }

        const visited = new Array(n).fill(false)

        const BFS = (node) => {
            const qu = new Deque()
            visited[node] = true
            qu.pushBack(node)

            while (qu.size() > 0) {
                const curr = qu.popFront()

                for (let i = 0; i < adjList[curr].length; i ++) {
                    const neigh = adjList[curr][i]
                    if (visited[neigh] === false) {
                        visited[neigh] = true
                        qu.pushBack(neigh)
                    }
                }
            }
        }

        let graphs = 0
        for (let i = 0; i < n; i++) {
            if (visited[i] === false) {
                BFS(i)
                graphs += 1
            }
        }

        return graphs
    }
}

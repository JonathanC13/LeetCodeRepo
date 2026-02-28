// https://neetcode.io/problems/count-connected-components/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. n
 *      - typeof n === 'number'
 *  2. edges
 *      - edges instanceof Array
 * 
 * 3. time and space constraints
 *  BTTC: O(V + E)  // must visit each node and edge at least once
 *  Space: O(V + E) // for adj List
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return 0
 *  2. if edges.length === 0: return n
 * 
 *  test cases
 *  1. all connected
 *      inputs
 *          n = 4
 *          edges = [[0,1], [1,2], [1,3]]
 *      expected output
 *          1
 * 
 *  2. > 1 connected graphs
 *      inputs
 *          n = 4
 *          edges = [[0,1],[1,2]]
 *      expected output
 *          2
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  from the edges create and adjacency list to represent the graph(s)
 * 
 *  create a visited Array
 * 
 *  iterate every node from 0 to < n
 *      if the current node not visited yet
 *          graphs += 1
 *          traverse all connected nodes that the current node is a part of
 * 
 *  return graphs
 * 
 * 7. algos
 *  - Graph traversal
 * 
 * 8. data structures
 *  - Graphs
 * 
 * 9. complexity
 *  Time: O(V + E)
 *  Space: O(V + E)
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        if (n === 0 || edges.length === 0) {
            return n
        }
       
        const visited = new Array(n).fill(false)
        const adjList = new Array(n).fill().map((e) => new Array())

        for (let [n1, n2] of edges) {
            adjList[n1].push(n2)
            adjList[n2].push(n1)
        }

        let graphs = 0
        for (let i = 0; i < n; i ++) {
            if (visited[i] === false) {
                graphs += 1
                this.bfs(i, adjList, visited)
            }
        }
        
        return graphs
    }

    bfs(i, adjList, visited) {

        const qu = new Deque()
        visited[i] = true
        qu.pushBack([i, -1])

        while (qu.size() > 0) {
            const [node, src] = qu.popFront()

            // explore connected
            for (let neigh of adjList[node]) {
                if (neigh !== src && visited[neigh] === false) {
                    visited[neigh] = true
                    qu.pushBack([neigh, node])
                }
            }
        }

        return
    }
}

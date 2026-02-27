// https://neetcode.io/problems/valid-tree/question

/**
 * 1. Assumptions
 *  1. n and edges represent the same graph
 *  2. edges does not have redundant edges like: [0,1] and [1,0]
 * 
 * 2. input validation
 *  1. n
 *      - typeof n === 'number'
 *      - n >= 0
 *  2. edges
 *      - edges instanceof Array
 * 
 * 3. time and space constraints
 *  BTTC: O(V + E)  // must visit each node and edge atleast once
 *  Space: O(V + E) // for adjList
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if n === 0: return true
 *  2. A valid tree has exactly nodes = # of edges + 1. If less, the tree is disconnected, and if more, the graph has a cycle = invalid tree
 *      if (n + 1 !== edges.length): return false
 * 
 *  test cases
 *  1. valid tree
 *      inputs
 *          n = 4
 *          edges = [[0,1], [0,2], [2,3]]
 *      expected output
 *          true
 * 
 *  2. invalid tree due to disconnected graph
 *      inputs
 *          n = 4
 *          edges = [[0,1], [0,2]]
 *      expected output
 *          false
 *  
 *  3. invalid tree due to cycle
 *      inputs
 *          n = 4
 *          edges = [[0,1],[1,2],[0,2]]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  From the edges create an AdjList to represent the graph
 *  Create a visited Set, used for cycle detection and at the end if set.size !== n then the graph is disconnected
 * 
 *  traverse the graph from any node since undirected graph. In DFS/BFS for the current node keep track of the source node of the incoming edge and skip to avoid false cycle flag when exploring neighbors
 *      if returns false, there is a cycle
 *  return set.size === n
 * 
 * 7. algos
 *  - DFS traversal of graph
 *      
 * 8. data structures
 *  - Graph
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
        if (n === 0) {
            return true
        }
        if (n !== edges.length + 1) {
            return false
        }

        const visited = new Set()
        const adjList = new Array(n).fill().map((e) => new Array())
        for (let [n1, n2] of edges) {
            adjList[n1].push(n2)
            adjList[n2].push(n1)
        }

        if (this.dfs(0, adjList, visited, -1) === false) {
            return false
        }
       
        return visited.size === n
    }

    dfs(node, adjList, visited, src) {
        if (visited.has(node)) {
            return false
        }

        visited.add(node)
        for (let neigh of adjList[node]) {
            if (neigh !== src && this.dfs(neigh, adjList, visited, node) === false) {
                return false
            }
        }

        return true
    }
}

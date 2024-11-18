// https://neetcode.io/problems/valid-tree

class Solution {

    /*
        A tree is a connected graph with no cycles
        A connected graph always has egdes <= nodes - 1

        construct an adjlist
        Choosing any node will be able to reach all other nodes (visited list should have all nodes by the end), so perform DFS for cycle detection
    */

    dfs(n, parent, adjList, visited) {
        if (visited.has(n)) {
            //cycle
            return false
        }

        visited.add(n)

        for (let adj of adjList[n]) {
            // since undirected, if the adj cycles back to the parent, ignore
            if (adj === parent){
                continue
            } else if (!this.dfs(adj, n, adjList, visited)) {
                return false
            }
        }
        
        return true
    }
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false
        }

        const adjList = Array(n).fill().map(()=>{return []})

        for (let [e1, e2] of edges) {
            // since undirected, add both ways
            adjList[e1].push(e2)
            adjList[e2].push(e1)
        }

        const visited = new Set()
        return this.dfs(0, -1, adjList, visited) && (visited.size === n)
    }
}

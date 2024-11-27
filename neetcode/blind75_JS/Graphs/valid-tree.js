// https://neetcode.io/problems/valid-tree

class Solution {

    dfs(n, parent, adjList, visited) {
        if (visited.has(n)) {
            return false
        }
        
        visited.add(n)

        for (let neigh of adjList[n]) {
            if (neigh === parent) {
                continue
            }
            if (!this.dfs(neigh, n, adjList, visited)) {
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
        for (let [end1, end2] of edges) {
            adjList[end1].push(end2)
            adjList[end2].push(end1)
        }
        
        const visited = new Set()

        this.dfs(0, -1, adjList, visited)
        
        console.log(visited)

        return visited.size === n
        
    }
}

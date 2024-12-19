// https://neetcode.io/problems/valid-tree

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges > n - 1) {
            return false
        }

        const visited = new Set()
        
        const adjList = Array(n).fill().map((e) => {return Array(0)})
        for (let [e1, e2] of edges) {
            adjList[e1].push(e2)
            adjList[e2].push(e1)
        }

        if (!this.DFS(0, -1, adjList, visited)) {
            return false
        }

        return visited.size === n ? true : false

    }

    DFS(node, parent, adjList, visited) {
        if (visited.has(node)) {
            return false
        }

        visited.add(node)

        for (let neigh of adjList[node]) {
            if (neigh === parent) {
                continue
            }

            if (!this.DFS(neigh, node, adjList, visited)) {
                return false
            }
        }

        return true
    }
}

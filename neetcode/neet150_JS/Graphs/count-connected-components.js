// https://neetcode.io/problems/count-connected-components

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        if (edges.length === 0) {
            return n
        }

        let connected = 0
        const visited = new Set()
        const adjList = Array(n).fill().map((e) => {return Array(0)})

        for (let [e1, e2] of edges) {
            adjList[e1].push(e2)
            adjList[e2].push(e1)
        }

        for (let i = 0; i < n; i ++) {
            if (!visited.has(i)) {
                connected += 1
                this.DFS(i, adjList, visited)
            }
        }

        return connected
    }

    DFS(node, adjList, visited) {
        if (visited.has(node)) {
            return
        }

        visited.add(node)

        for (let neigh of adjList[node]) {
            this.DFS(neigh, adjList, visited)
        }

        return
    }
}

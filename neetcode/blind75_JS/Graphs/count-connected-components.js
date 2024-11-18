// https://neetcode.io/problems/count-connected-components

class Solution {

    /*
    construct a adjList
    for each node DFS 
        If the initial node was not visited + 1 and then visit all the connected nodes to mark them visited.
    */

    dfs(node, parent, adjList, visited) {
        if (visited.has(node)) {
            return
        }

        visited.add(node)

        for (let neigh of adjList[node]) {
            if (neigh === parent) {
                continue
            } else {
                this.dfs(neigh, node, adjList, visited)
            }
        }

        return
    }

    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let count = 0

        const adjList = Array(n).fill().map(() => {return []})
        for (let [e1, e2] of edges) {
            adjList[e1].push(e2)
            adjList[e2].push(e1)
        }

        const visited = new Set()

        for (let i = 0; i < n; i ++) {
            if (!visited.has(i)) {
                count += 1
                this.dfs(i, -1, adjList, visited)
            }
        }

        return count
    }
}

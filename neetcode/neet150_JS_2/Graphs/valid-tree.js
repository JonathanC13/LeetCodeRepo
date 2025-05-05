// https://neetcode.io/problems/valid-tree

/*
A Valid tree is a graph that is:
    1. connected
    2. no cycles
    3. n = edges + 1

maintain a Visited Set // to track if there is a cycle
create an adjList from the edges

select an node to start dfs traversal of the graph. Track parent node since undirected so parent does not trigger cycle detection in visited.
    if return false, return false   // cycle detected

return visited.size() === n // to check if fully connected, starting at any node will be able to reach all nodes

- Time: O(V + E)
- Space: O(V + E)
*/

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n !== edges.length + 1) {
            return false
        }

        const visited = new Set()
        const adjList = new Array(n).fill().map((e) => new Array())

        for (let i = 0; i < edges.length; i ++) {
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }

        if (!this.dfs(adjList, 0, visited, -1)) {
            return false
        }

        return visited.size === n
    }

    dfs(adjList, i, visited, parent) {
        if (visited.has(i)) {
            return false
        }

        visited.add(i)

        for (let neigh = 0; neigh < adjList[i].length; neigh ++) {
            if (adjList[i][neigh] === parent) {
                continue
            }
            if (!this.dfs(adjList, adjList[i][neigh], visited, i)) {
                return false
            }
        }

        return true
    }
}

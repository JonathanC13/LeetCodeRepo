// https://neetcode.io/problems/count-connected-components

/*
create and populate an adjacency list
create a visited array

connected = 0
iterate the nodes
    if !visited
        connect += 1
        dfs to permanently visit the connected nodes

return connected

- Time: O(n + e). since visited.
- Space: O(n + e)
*/

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const visited = new Array(n).fill(false)
        const adjList = new Array(n).fill().map((e) => {return new Array()})

        for (let i = 0; i < edges.length; i ++) {
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }

        let connected = 0
        for (let i = 0; i < n; i ++) {
            if (!visited[i]) {
                connected += 1
                this.dfs(adjList, visited, -1, i)
            }
        }

        return connected
    }

    dfs(adjList, visited, par, i) {
        if (visited[i]) {
            return
        }

        visited[i] = true

        for (let j = 0; j < adjList[i].length; j ++) {
            if (par === i) {
                continue
            }
            this.dfs(adjList, visited, i, adjList[i][j])
        }

        return
    }
}

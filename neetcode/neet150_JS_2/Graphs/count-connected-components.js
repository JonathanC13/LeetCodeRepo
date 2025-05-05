// https://neetcode.io/problems/count-connected-components

/*
create an AdjList
create a visited set so nodes are not re-treaded if cycle exists

iterate 0 to n
    if (node is not in visited){
        components += 1
        this.dfs(..) to mark all the connected nodes
    }

return components

- Time: O(V + E)
- Space: O(V + E)
*/

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let components = 0
        const visited = new Set()
        const adjList = Array.from(new Array(n), (e) => new Array())

        for (let i = 0; i < edges.length; i ++) {
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }

        for (let i = 0; i < n; i ++) {
            if (!visited.has(i)) {
                components += 1
                this.dfs(adjList, i, visited, -1)
            }
        }

        return components
    }

    dfs(adjList, i, visited, parent) {
        if (visited.has(i)) {
            return
        }

        visited.add(i)

        for (let j = 0; j < adjList[i].length; j ++) {
            if (adjList[i][j] === parent) {
                continue
            }

            this.dfs(adjList, adjList[i][j], visited, i)
        }

        return
    }
}

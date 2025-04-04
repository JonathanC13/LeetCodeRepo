// https://neetcode.io/problems/count-connected-components

/*
edge case 1: if n === 0 : return 0
edge case 2: if edges.length === 0: return n

create adj List

islands = 0

maintain visitedSet
iterate i from 0 to n
    if (visitedSet.has(i) === false) {
        start of new connected components, so increment islands and then visit and mark all the connected nodes so that they won't be considered as a new island.
        islands += 1
        recursive dfs
    }

return islands

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
        if (n === 0) {
            return 0
        }
        if (edges.length === 0) {
            return n
        }

        const adjList = Array.from(new Array(n), (v) => new Array())
        for (let i = 0; i < edges.length; i ++) {
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }

        let islands = 0
        const visited = new Array(n).fill(false)

        for (let i = 0; i < n; i ++) {
            if (visited[i] === false) {
                islands += 1
                this.dfs(adjList, visited, i, -1)
            }
        }

        return islands
    }

    dfs(adjList, visited, i, parentI) {
        if (visited[i] === true) {
            return
        }

        visited[i] = true

        for (let neigh = 0; neigh < adjList[i].length; neigh ++) {
            if (adjList[i][neigh] === parentI) {
                continue
            }

            this.dfs(adjList, visited, adjList[i][neigh], i)
        }

        return
    }
}

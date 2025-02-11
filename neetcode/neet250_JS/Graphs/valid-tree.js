// https://neetcode.io/problems/valid-tree

/*
Valid tree is a graph with:
    1. no cycles
        1. in undirectect if edges >= number of nodes then there is definitely a cycle.
        2. must check with visited
    2. connected graph


if n > edges + 1, unconnected return false
if edges >= n, cycle, return false

create adjList, since undirected save both directions
create visited Set

since testing for connected and no cycle, can choose any node to enter
if (!this.dfs(adjList, 0, visited)) {
    return false, cycle detected.
}

if (visited.size() !== n) return false since all nodes were not visited, indicating unconnected.

*DFS()
    if (visited.has(i)) {
        return false
    }

    visited.add(i)

    for (let j = 0; j < adjList[i].length; j ++) {
        if (!this.dfs(adjList[i][j])) {
            return false
        }
    }

    return true

- Time: O(n + e)
- Space: O(n + e)
*/

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n > edges.length + 1 || edges.length >= n) {
            return false
        }

        const visited = new Set()
        const adjList = new Array(n).fill().map((e) => {return new Array()})

        for (let i = 0; i < edges.length; i ++) {
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }
        
        if (!this.dfs(adjList, 0, -1, visited)) {
            return false
        }

        if (visited.size !== n) {
            return false
        }
        return true
    }

    dfs(adjList, i, parent, visited) {
        if (visited.has(i)) {
            return false
        }

        visited.add(i)

        for (let j = 0; j < adjList[i].length; j ++) {
            if (adjList[i][j] === parent) {
                continue
            }
            if (!this.dfs(adjList, adjList[i][j], i, visited)) {
                return false
            }
        }

        return true
    }
}

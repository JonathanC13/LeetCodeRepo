// https://neetcode.io/problems/valid-tree

/*
A Tree's properties:
    1. no cycles, therefore at most edges = n - 1. if more there is a cycle
    2. connected graph meaning all nodes have a path to another. Therefore edges at least = n - 1

    Finally, edges === n - 1

Since the graph is undirected, both directions will be recorded in the adjacency list

maintain a visited Set

select any node as the start and visiting all the nodes. Recursive DFS soln
    pass the parent node to the child so that the child does not traverse back into the parent and flag cycle
    each node, add to the visited Set

if cycle === true: return false

return visited.size() === n     // since a Tree is a connected graph, all the nodes should be visited regardless of starting node.

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
        if (n === 0) {
            return true
        }
        if (edges.length !== n - 1) {
            return false
        }

        const adjList = new Array(n).fill().map((v) => new Array())
        for (let i = 0; i < edges.length; i ++) {
            adjList[edges[i][0]].push(edges[i][1])
            adjList[edges[i][1]].push(edges[i][0])
        }
        
        const visitedSet = new Set()

        if (this.hasCycle(adjList, visitedSet, 0, -1)) {
            return false
        }

        return visitedSet.size === n
    }

    hasCycle(adjList, visitedSet, i, parentI) {
        if (visitedSet.has(i)) {
            return true
        }

        visitedSet.add(i)

        for (let neigh = 0; neigh < adjList[i].length; neigh ++) {
            if (adjList[i][neigh] === parentI) {
                continue
            }
            if (this.hasCycle(adjList, visitedSet, adjList[i][neigh], i)) {
                return true
            }
        }

        return false
    }
}

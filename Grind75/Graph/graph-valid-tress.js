// https://neetcode.io/problems/valid-tree?list=neetcode250
/**
 * Valid tree:
 *  1. connected
 *  2. no cycles
 *  3. edges = nodes.length - 1
 * 
 * create adjList
 * 
 * create visited Array
 * create processed Set
 * 
 * since undirected start from any node and traverse graph.
 * 1. if there is a cycle, visited will catch it if a same node appears in a path
 * 2. at the end, if the processed Set .size !== n then it means the graph is disconnected
 * 
 * - Time: O(n + e)
 * - Space: O(n + e)
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) {
            return false
        }

        const adjList = new Array(n).fill().map((e) => new Array())
        for (let [n1, n2] of edges) {
            adjList[n1].push(n2)
            adjList[n2].push(n1)
        }

        const visited = new Array(n).fill(false)
        const processed = new Set()

        const res = this.cycleDetect(adjList, 0, -1, visited, processed)

        if (res === true || processed.size !== n) {
            return false
        }

        return true 
    }

    cycleDetect(adjList, i, parent, visited, processed) {
        // need to pass in parent since undirected so that it does not trigger cycle
        if (visited[i] === true) {
            return true
        }

        visited[i] = true
        processed.add(i)

        for (let nxt of adjList[i]) {
            if (nxt === parent) {
                continue
            }
            if (this.cycleDetect(adjList, nxt, i, visited, processed) === true) {
                return true
            }
        }

        visited[i] = false
        return false

    }
}

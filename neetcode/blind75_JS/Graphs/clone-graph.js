// https://neetcode.io/problems/clone-graph

/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

/*
Starting from the node create a new node and store into its reference into a Map where key is the reference to the original and value is the reference to the node. 
Loop and its neighbors, 
    if the neighbor exists in the map, push it into the neighbors list,
    else DFS into the neighbor node

Time: O(v + e), v is the number of vertices and e is the number of edges
Space: O(v)
*/


class Solution {

    dfs(node, map) {
        if (node === null) {
            return null
        }
        if (map.has(node)) {
            // return copy
            return map.get(node)
        }

        const newN = new Node(node.val)
        map.set(node, newN)

        for (let neigh of node.neighbors) {
            newN.neighbors.push(this.dfs(neigh, map))
        }

        return newN
    }

    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = new Map()

        return this.dfs(node, map)
    }
}
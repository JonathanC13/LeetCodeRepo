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

class Solution {

    dfs(node, map) {
        if (node === null) {
            return null
        }
        if (map.has(node)) {
            return map.get(node)
        }

        const newNode = new Node(node.val)
        map.set(node, newNode)

        for (let neigh of node.neighbors) {
            newNode.neighbors.push(this.dfs(neigh, map))
        }

        return newNode

    }

    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node === null) {
            return null
        }

        const map = new Map()

        return this.dfs(node, map)

    }
}

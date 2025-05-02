// https://neetcode.io/problems/clone-graph

/*
create a Map for new node references from the original node:
    key: old node reference
    value: new node reference

recursive dfs
    if node === null:
        return null
    if Map has oldNode as a key
        return Map.get(oldNode) to return the reference to the new node

    create new Node from old node value

    iterate old node neighbors
        newNode.neighbors.push(this.rec(neigh, Map))

- Time: O(V + E)    // + E since must explore each neighbor for the node(vertice)
- Space: O(V)
*/

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
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const createdMap = new Map()

        return this.rec(node, createdMap)
    }

    rec(node, map) {
        if (node === null) {
            return null
        }
        if (map.has(node)) {
            return map.get(node)
        }

        const newNode = new Node(node.val)
        map.set(node, newNode)

        for (let i = 0; i < node.neighbors.length; i ++) {
            newNode.neighbors.push(this.rec(node.neighbors[i], map))
        }

        return newNode
    }
}

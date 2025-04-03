// https://neetcode.io/problems/clone-graph

/*
edge case 1: if node === null: return null

create a Map for the newly created nodes for the copy
    key: old node reference
    val: new node reference

Traverse the old node and its neighbors assigning to the copy node copy neighbors, 
if old node reference found in the Map return the new node reference and if not create and add to the map

- Time: O(v + e)    v = vertices, e = edges
- Space: O(v)
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
        if (node === null) {
            return node
        }

        const nodeMap = new Map()
        return this.copy(node, nodeMap)
    }

    copy(node, nodeMap) {
        if (node === null) {
            return node
        }

        if (nodeMap.has(node)) {
            return nodeMap.get(node)
        }

        const newNode = new Node(node.val)
        nodeMap.set(node, newNode)

        for (let i = 0; i < node.neighbors.length; i ++) {
            newNode.neighbors.push(this.copy(node.neighbors[i], nodeMap))
        }

        return newNode
    }
}

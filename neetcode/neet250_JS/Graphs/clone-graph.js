// https://neetcode.io/problems/clone-graph

/*
- edge case 1: if node === null: return null

create a Map to hold; key = old node, value = new node copy

call recursive func

* recur func
    - base case 1: if node === null: return null
    - base case 2: if Map.has(oldNode): return the value (new node)

    create new Node copy of old node
    Map.set(oldnode, new node)

    iterate the old node neighbors to add onto the new node neighbors
        newNode.neighbors.push(recur func)

    return new node

- Time: O(n + e). for each node + edge to connect.
- Space: O(n)
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
            return null
        }

        const nodeMap = new Map()

        return this.dfs(node, nodeMap)
    }

    dfs(node, nodeMap) {
        if (node === null) {
            return null
        }
        if (nodeMap.has(node)) {
            return nodeMap.get(node)
        }

        const newNode = new Node(node.val)
        nodeMap.set(node, newNode)

        for (let i = 0; i < node.neighbors.length; i ++) {
            newNode.neighbors.push(this.dfs(node.neighbors[i], nodeMap))
        }

        return newNode
    }
}

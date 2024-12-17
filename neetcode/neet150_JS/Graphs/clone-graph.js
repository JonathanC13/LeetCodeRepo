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
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node === null) {
            return null
        }

        const map = new Map()
        map.set(node, new Node(node.val))

        const q = new Deque()
        q.pushBack(node)
        
        while (!q.isEmpty()) {
            const currNode = q.popFront()

            for (let neigh of currNode.neighbors) {
                if (!map.get(neigh)) {
                    map.set(neigh, new Node(neigh.val))
                    q.pushBack(neigh)
                }
                map.get(currNode).neighbors.push(map.get(neigh))
            }
        }

        return map.get(node)
    }
}

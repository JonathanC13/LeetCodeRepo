// https://leetcode.com/problems/clone-graph/description/

/**
*connected, so only need to start at initial node and will be able to clone entire graph

create a Map
    key: original node reference
    val: new Node reference
    * if the copy already has been created, return the reference

Recursive DFS
    if (node === null) {
        return null
    }
    if (map.has(node)) {
        return map.get(node)
    }

    newNode = create copy of original node
    map.set(node, newNode)

    iterate the neighbors of the original node
        newNode.neighbors.push(DFS(node.neighbors[i]))

    return newNode

- Time: O(n + e)    // nodes + edges
- Space: O(n + e)
 */

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    const created = new Map()

    const cloned = copy(node, created)
    return cloned
};

const copy = (node, created) => {
    if (node === null) {
        return null
    }
    if (created.has(node)) {
        return created.get(node)
    }

    const newNode = new Node(node.val)
    created.set(node, newNode)

    for (let neigh of node.neighbors) {
        newNode.neighbors.push(copy(neigh, created))
    }
    return newNode
}
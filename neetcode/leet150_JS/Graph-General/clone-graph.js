// https://leetcode.com/problems/clone-graph/?envType=study-plan-v2&envId=top-interview-150

/*
create a Map
    key: original node
    val: new copy of node


recursive dfs to explore the graph to clone
    if node === null: return null

    if map.has(node)
        return map.get(node)    // since already has been created

    const newNode = new _Node(node.val)
    map.set(node, newNode)
    
    iterate the connections of the original node
        newNode.neighbors.push(dfs(node.neighbors[i]))

    return newNode  // for the recursive pop 

- Time: O(n + e)    // n = number of nodes
- Space: O(n + e)


*/

const dfs = function(node, map) {
    if (node === null) {
        return null
    }

    if (map.has(node)) {
        return map.get(node)
    }

    const newNode = new _Node(node.val)
    map.set(node, newNode)
    for (let i = 0; i < node.neighbors.length; i ++) {
        newNode.neighbors.push(dfs(node.neighbors[i], map))
    }

    return newNode
}

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
    if (node === null) {
        return null
    }

    const copyMap = new Map()
    return dfs(node, copyMap)
};
// https://leetcode.com/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-interview-150

/*
create global Map for created new nodes:
    key: original node
    val: ref to new node

dfs recursive so that along the way new nodes are created and assign the .next when pop since it will be created. Then assign random after; if connected graph the node will already have been created, if not then it will be created.

    if (node === null) {return null}
    if map.has(node)
        return map.get(node)

    create new node
    store new node into map: 
        key: original node
        val: new node

    newNode.next = dfs(node.next, map)
    newNode.random = dfs(node.random, map)

    return newNode

- Time: O(n)
- Space: O(n)
*/

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

const dfs = function(node, newNodeMap) {
    if (node === null) {
        return null
    }
    if (newNodeMap.has(node)) {
        return newNodeMap.get(node)
    }

    const newNode = new _Node(node.val)
    newNodeMap.set(node, newNode)
    
    newNode.next = dfs(node.next, newNodeMap)
    newNode.random = dfs(node.random, newNodeMap)

    return newNode
}

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (head === null) {
        return null
    }
    const newNodeMap = new Map()
    return dfs(head, newNodeMap)
};
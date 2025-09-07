// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
The pre-order will be traversed for the current node to be created
The in-order is used to determine which nodes are in the left and right subtree of a node

base case 1:
if preorder.length === 0
    // no more nodes to create
    return null

base case 2:
if (inorder.length === 0) {
    // subtree has no nodes
    return null
}

const newNode = TreeNode(preorder[0])
const mid = get the index of preorder[0] in inorder, this will divide which nodes are in its left subtree and right subtree

// for the left subtree
// the preorder nodes exist from [1, mid]   // include mid since need to create the node for the left subtree
// the inorder nodes exist from [0, mid)
newNode.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))

newNode.right = buildTree(preorder.slice(mid + 1, end), inorder.slice(mid + 1, end))

return newNode

- Time: O(n)
- Space: O(n)

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }

    const newNode = new TreeNode(preorder[0])
    const mid = inorder.indexOf(preorder[0])

    newNode.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    newNode.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    return newNode
};
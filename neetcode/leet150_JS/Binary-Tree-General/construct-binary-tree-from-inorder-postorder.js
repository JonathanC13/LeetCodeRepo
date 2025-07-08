// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150

/*
inorder: explore left subtree, process current node, explore right subtree
postorder: explore left subtree, explore right subtree, process current node

same as preorder + inorder to construct binary tree but start from the end of postorder to choose which parent node is next

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null
    }

    const node = new TreeNode(postorder[postorder.length - 1])
    const idx = inorder.indexOf(postorder[postorder.length - 1])

    node.left = buildTree(inorder.slice(0, idx), postorder.slice(0, idx))
    node.right = buildTree(inorder.slice(idx + 1, inorder.length), postorder.slice(idx, postorder.length - 1))

    return node
};
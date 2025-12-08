// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

/**
1. Assumptions
    1. The preorder and inorder represent the same tree

2. input validation
    1. Initial validation if preorder and inorder are the same length continue
    2. Could also check if both have the same values and frequencies

3. time and space constraints
    BTTC: O(n)
    Space: O(h)

4. edge cases and some test cases
    edge cases
    1. preorder.length === 0 && inorder.length === 0
        return null
    test cases
    1. 
        inputs
            preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
        expected output
            tree = [3, 9, 20, 15, 7]

5. visualize by drawing and manually solve
6. break into subproblems
    recursive function so that the recursive call returns the child node

    base case 1
    if (preorder.length === 0 || inorder.length === 0) {
        return null
    }

    since preorder processes the node then traverses left then right, preorder is used to create the parent node.
    parent = preorder[0]
    node = new TreeNode(parent)

    since inorder traverses the left subtree, proceses the current node, then right subtree, the parent's index in order splits the Array into left children and right children
    index = inorder.indexOf(parent)
    
    node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))

    return node

7. algos
    - preorder traversal
    - inorder traversal

8. data structures
    - binary tree

9. complexity
    Time: O(n)
    Space: O(h)

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

    const parent = preorder[0]
    const newNode = new TreeNode(parent)

    const idx = inorder.indexOf(parent)

    newNode.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
    newNode.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))

    return newNode
};
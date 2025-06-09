// https://leetcode.com/problems/delete-node-in-a-bst/description/?envType=study-plan-v2&envId=leetcode-75

/*
recursively search for the node to delete
    If found, need to replace with either; greatest value node in left subtree (inorder predecessor) or smallest from right subtree (inorder successor). 
        Easier to get smallest from right subtree, it is pre-order traversal.

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
returns the most left node from root of subtree
 */
const getReplacement = (node) => {
    if (node === null) {
        return
    }

    const left = getReplacement(node.left)

    if (!left) {
        return node
    }

    return left
}

const operation = (node, key) => {
    if (node === null) {
        return null
    }

    if (node.val === key) {
        if (!node.left) {
            return node.right
        }
        if (!node.right) {
            return node.left
        }

        // if have both children.
        // rotate, need to get the node that is in the right child's most left
        const repl = getReplacement(node.right)
        node.val = repl.val
        // find and remove replacement node
        node.right = operation(node.right, repl.val)
    } else if (key < node.val) {
        // search left
        node.left = operation(node.left, key)
    } else if (key > node.val) {
        node.right = operation(node.right, key)
    }

    return node
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root === null) {
        return null
    }

    const ptr = operation(root, key)
    console.log(ptr)
    return ptr
};
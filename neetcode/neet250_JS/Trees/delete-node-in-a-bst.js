// https://leetcode.com/problems/delete-node-in-a-bst/description/

/*
- edge case 1: if root === null: return root

DFS to find the target node.
If found, need to replace with either; greatest value node in left subtree (inorder predecessor) or smallest from right subtree (inorder successor). Easier to get smallest from right subtree, it is pre-order traversal.

- Time: O(h)
- Space: O(h)
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
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root === null) {
        return root
    }
    
    return dfs(root, key)
};

var dfs = function(node, key) {
    if (node === null) {
        return null
    }

    // traverse
    if (key > node.val) {
        node.right = dfs(node.right, key)
    } else if (key < node.val) {
        node.left = dfs(node.left, key)
    } else {
        // node.val === key, determine new child
        if (!node.left) {
            return node.right
        } else if (!node.right) {
            return node.left
        } else {
            // find replacement in right subtree (inorder successor). can also choose right subtree
            const succ = getSuccessor(node.right)
            node.val = succ.val // replace
            node.right = dfs(node.right, succ.val)  // Need to remove that node that was used to replace the target delete node.
        }
    }

    return node
}

var getSuccessor = function(node) {
    if (node === null) {
        return null
    }

    const left = getSuccessor(node.left)

    if (!left) {
        return node
    }

    return left
}

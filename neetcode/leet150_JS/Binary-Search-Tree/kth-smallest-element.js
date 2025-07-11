// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-interview-150

/*
dfs inorder traversal
    if node === null: return

    go left
    k[0] -= 1
    if k[0] === 0
        k[1] = node.val
        return
    else if (k[0] < 0){
        return
    }
    
    go right

- Time: O(n)
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

const dfs = (node, k) => {
    if (node === null) {
        return
    }

    dfs(node.left, k)

    k[0] -= 1
    if (k[0] === 0) {
        k[1] = node.val
        return
    } else if (k[0] < 0) {
        return
    }

    dfs(node.right, k)

    return
}

const dfs2 = function(root, k) {
    if (root === null) {
        return -1
    }

    const left = dfs2(root.left, k)
    if (left !== -1) {
        return left
    }

    k[0] -= 1
    if (k[0] === 0) {
        return root.val
    }

    const right = dfs2(root.right, k)
    if (right !== -1) {
        return right
    }

    return -1
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (root === null) {
        return null
    }

    const kArr = [k, null]
    return dfs2(root, kArr)
    
    kArr = [k, null]
    dfs(root, kArr)
    return kArr[1]
};
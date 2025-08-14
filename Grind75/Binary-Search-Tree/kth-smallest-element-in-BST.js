// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/**
create global val kth = [k, null]

recursive dfs
    ** kth: Array. k[0] is the nodes left to process before finding kth smallest. k[1] is the found value

    base case 1: if (node === null) {
        return false
    }

    // go left first
    const left = rec(node.left, kth)
    if (left === true) {
        return true // val found, so propagate pop up
    }

    kth[0] -= 1
    if (kth === 0) {
        kth[1] = node.val
        return true
    }

    return rec(node.right, kth)

- Time: O(n)    // n since may need to search entire tree
- Space: O(h)

* Alternative; traverse the BST and push into an Array. Since the result will be a sorted is non-descending, the kth smallest will be arr[k - 1]
- Time: O(n)
- Space:O(n)
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const kth = [k, null]
    rec(root, kth)
    return kth[1]
};

var rec = function(node, kth) {
    if (node === null) {
        return false
    }

    const left = rec(node.left, kth)
    if (left === true) {
        return true
    }

    kth[0] -= 1
    if (kth[0] === 0) {
        kth[1] = node.val
        return true
    }

    return rec(node.right, kth)
}
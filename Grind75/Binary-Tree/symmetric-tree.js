// https://leetcode.com/problems/symmetric-tree/description/

/**
Recursively
    currL = root.left
    currR = root.right
    rec(currL, currR) {
        if (currL === null && currR === null)
            return true

        if (currL !== null && currR !== null && currL.val === currR.val) {
            // continue checking for left, right mirror and right, left mirror
            return rec(currL.left, currR.right) && rec(currL.right, currR.left)
        } else {
            return false
        }
    }
    - Time: O(n)
    - Space: O(h)

iteratively
    create a qu
    enqueue root.left and root.right

    while qu not empty
        dequeue in pairs and compare
        if the second node doesnt exist in queue or values are not equal
            return false

    return true
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    //return rec(root.left, root.right)

    // iter
    const qu = new Deque()
    qu.pushBack(root.left)
    qu.pushBack(root.right)

    while (qu.size() > 0) {
        const n1 = qu.popFront()

        if (qu.size() === 0) {
            return false
        }

        const n2 = qu.popFront()
        if (n1 === null && n2 === null) {
            continue
        }

        if (n1 === null || n2 === null || n1.val !== n2.val) {
            return false
        }

        qu.pushBack(n1.left)
        qu.pushBack(n2.right)

        qu.pushBack(n1.right)
        qu.pushBack(n2.left)
    }

    return true
};

const rec = function(currL, currR) {
    if (currL === null && currR === null) {
        return true
    }

    if (currL !== null && currR !== null && currL.val === currR.val) {
        return rec(currL.left, currR.right) && rec(currL.right, currR.left)
    } else {
        return false
    }
}
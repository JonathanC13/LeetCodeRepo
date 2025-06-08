// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/?envType=study-plan-v2&envId=leetcode-75

/*

dfsZigZag
    base case 1: if node === null: return

    length[0] = max(length[0], currLength)

    if (left === true) {
        dfsZigZag(node.left, left = false, length, currLength + 1)
        // evaluate if zigzag going to the right is longer, which means length is reset to 1 (this node to child)
        dfs(node.right, left = true, length, 1)
    } else {
        dfsZigZag(node.right, left = true, length, currLength + 1)
        dfs(node.left, left = false, length, 1)
    }

    return

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

const dfsZZ = (node, left, length, currLength) => {
    if (node === null) {
        return
    }

    length[0] = Math.max(length[0], currLength)

    if (left) {
        dfsZZ(node.left, false, length, currLength + 1)
        dfsZZ(node.right, true, length, 1)
    } else {
        dfsZZ(node.right, true, length, currLength + 1)
        dfsZZ(node.left, false, length, 1)
    }

    return
}

// const dfsRoot = (node, length) => {
//     if (node === null) {
//         return
//     }

//     dfsZZ(node, true, length, 0)
//     dfsZZ(node, false, length, 0)

//     dfsRoot(node.left, length)
//     dfsRoot(node.right, length)

//     return
// }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    if (root === null) {
        return 0
    }

    const length = [0]
    dfsZZ(root, true, length, 0)

    return length[0]
};
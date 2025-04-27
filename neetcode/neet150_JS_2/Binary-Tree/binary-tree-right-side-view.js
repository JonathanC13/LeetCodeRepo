// https://neetcode.io/problems/binary-tree-right-side-view

/*
create the res array of initial size 0

recursive dfs
    if node === null
        return
    if (depth >= arr.length)
        arr.push(node.val)

    replace the value at position depth with node.val. Since traversing tree left first then right, the final array will only have the most right value for each level.

    go left
    go right

    return

* lol, also could have just traversed right first and if depth >= arr.length, push that value in. Since the most right for the new depth is encountered first it will set in the result first.

- Time: O(n)
- Space: O(n)
    
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (root === null) {
            return []
        }

        const res = new Array()
        this.dfs(root, 0, res)
        return res
    }

    dfs(node, depth, res) {
        if (node === null) {
            return
        }
        if (depth >= res.length) {
            res.push(node.val)
        }

        res[depth] = node.val

        this.dfs(node.left, depth + 1, res)
        this.dfs(node.right, depth + 1, res)

        return
    }
}

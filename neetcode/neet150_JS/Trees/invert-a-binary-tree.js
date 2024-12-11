// https://neetcode.io/problems/invert-a-binary-tree

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

    invertBFS(root) {
        const qu = new Deque()
        qu.pushBack(root)

        while (qu.size() !== 0) {
            const currNode = qu.popFront()

            const tmp = currNode.left
            currNode.left = currNode.right
            currNode.right = tmp

            if (currNode.left !== null) {
                qu.pushBack(currNode.left)
            }

            if (currNode.right !== null) {
                qu.pushBack(currNode.right)
            }
        }

        return root
    }

    invertDFS(root) {
        if (root === null) {
            return root
        }

        const left = this.invertDFS(root.left)
        const right = this.invertDFS(root.right)

        root.left = right
        root.right = left

        return root
    }

    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) {
            return root
        }
        
        //return this.invertBFS(root)
        return this.invertDFS(root)
    }
}

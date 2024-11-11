// https://neetcode.io/problems/same-binary-tree

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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        console.log('lorem')
        console.log(p)
        console.log(q)
        if (p === null && q === null) {
            return true
        }

        if (p !== null && q !== null && p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
        } else {
            return false
        }

        // BFS
        // if (p === null && q === null) {
        //     return true
        // } else if (p === null || q === null) {
        //     return false
        // }
        // const quP = []
        // const quQ = []
        // quP.push(p)
        // quQ.push(q)

        // while (quP.length && quQ.length) {
        //     let currP = quP.shift()
        //     let currQ = quQ.shift()

        //     if (currP === null && currQ === null) {
        //         continue
        //     }

        //     if (currP === null || currQ === null || currP.val !== currQ.val) {
        //         return false
        //     }

        //     quP.push(currP.left)
        //     quP.push(currP.right)
        //     quQ.push(currQ.left)
        //     quQ.push(currQ.right)
            
        // }

        // return true
    }
}

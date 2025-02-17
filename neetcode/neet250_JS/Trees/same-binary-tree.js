// https://neetcode.io/problems/same-binary-tree

/*
- edge case 1: if p && !q || !p && q: return false
- edge case 2: if !p && !q: return true

BFS

p Deque
q Deque

while both size() > 0
    compare and enqueue

    if (nodeP === null && nodeQ === null) continue;
    if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) {
        return false;
    }


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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p && !q || !p && q) {
            return false
        }
        if (!p && !q) {
            return true
        }

        const pQ = new Deque()
        const qQ = new Deque()

        pQ.pushBack(p)
        qQ.pushBack(q)

        while (pQ.size() > 0 && qQ.size() > 0) {
            const pNode = pQ.popFront()
            const qNode = qQ.popFront()

            if (pNode.val !== qNode.val) {
                return false
            }
            
            if (pNode.left && !qNode.left || !pNode.left && qNode.left) {
                return false
            } else if (pNode.left && qNode.left) {
                pQ.pushBack(pNode.left)
                qQ.pushBack(qNode.left)
            }

            if (pNode.right && !qNode.right || !pNode.right && qNode.right) {
                return false
            } else if (pNode.right && qNode.right) {
                pQ.pushBack(pNode.right)
                qQ.pushBack(qNode.right)
            }
        }

        if (pQ.size() === qQ.size()) {
            return true
        } else {
            return false
        }
    }
}

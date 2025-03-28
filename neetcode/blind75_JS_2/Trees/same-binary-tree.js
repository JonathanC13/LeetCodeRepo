// https://neetcode.io/problems/same-binary-tree

/*
edge case 1: if p && !q || !p && q: retun false

method 1: dfs
    recursively traverse left node, parent, then right

    base case 1: if (p === null && q === null) {
        return true
    }
    base case 2: if (p && !q || !p && q || p.val !== q.val) {
        return false
    }

    const leftSame = this.dfs(p.left, q.left)
    const rightSame = this.dfs(p.right, q.right)

    return leftSame && rightSame

    - Time: O(n)
    - Space: O(n) . n for rec stack

method 2: bfs with queue

    create a queue for tree p to contain the nodes in order that need to be processed
    create a queue for tree q to contain the nodes in order that need to be processed

    while (queueP.size() > 0 && queueQ.size() > 0) {
        pop queueP
        pop queueQ

        if (p === null && q === null) {
            continue
        }
        if (p && !q || !p && q || p.val !== q.val) {
            return false
        }

        queueP.pushBack(p.left)
        queueP.pushBack(p.right)
        queueQ.pushBack(q.left)
        queueQ.pushBack(q.right)

    }

    return queueP.size() === 0 && queueQ.size() === 0

    - Time: O(n)
    - Space: O(n). 2 * n for the queues
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

        return this.dfs(p, q)
    }

    dfs(p, q) {
        if (p === null && q === null) {
            return true
        }
        if (p && !q || !p && q || p.val !== q.val) {
            return false
        }

        const leftSame = this.dfs(p.left, q.left)
        const rightSame = this.dfs(p.right, q.right)

        return leftSame && rightSame
    }

    bfs(p, q) {
        const queueP = new Deque()
        const queueQ = new Deque()

        queueP.pushBack(p)
        queueQ.pushBack(q)

        while(queueP.size() > 0 && queueQ.size() > 0) {
            const nP = queueP.popFront()
            const nQ = queueQ.popFront()

            if (nP === null && nQ === null) {
                continue
            }
            if (nP && !nQ || !nP && nQ || nP.val !== nQ.val) {
                return false
            }

            queueP.pushBack(nP.left)
            queueP.pushBack(nP.right)
            queueQ.pushBack(nQ.left)
            queueQ.pushBack(nQ.right)
        }

        return queueP.size() === 0 && queueQ.size() === 0
    }
}

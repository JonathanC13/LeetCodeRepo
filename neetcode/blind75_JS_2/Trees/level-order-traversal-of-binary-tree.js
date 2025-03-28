// https://neetcode.io/problems/level-order-traversal-of-binary-tree

/*
edge case 1: if !root: return []

method 1: bfs

    const res = []
    use queue
    enqueue root

    while(queue.size() > 0) {
        const levelVals = []
        const levelSize = queue.size()
        // process all nodes on this level
        for (let i = 0; i < levelSize; i ++) {
            const pop = queue.popFront()
            levelVals.push(pop.val)

            if (pop.left) {
                queue.pushBack(pop.left)
            }
            if (pop.right) {
                queue.pushBack(pop.right)
            }
        }

        res.push(levelVals)
    }

    return res

    - Time: O(n)
    - Space: O(n)

method 2: dfs
    create an Array of size 0

    call dfs(root, arr, 1)

    *dfs(root, arr, depth)
        if (!root) {
            return
        }
        if (depth > arr.length) {
            arr.push([])
        }

        arr[depth].push(root.val)

        this.dfs(root.left, arr, depth + 1)
        this.dfs(root.right, arr, depth + 1)

        return

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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return []
        }

        // return this.bfs(root)

        const arr = new Array(0)
        this.dfs(root, arr, 0)
        return arr
    }

    bfs(root) {
        const res = []
        const queue = new Deque()
        queue.pushBack(root)

        while(queue.size() > 0) {
            const levelVals = []
            const levelSize = queue.size()
            // process all nodes on this level
            for (let i = 0; i < levelSize; i ++) {
                const pop = queue.popFront()
                levelVals.push(pop.val)

                if (pop.left) {
                    queue.pushBack(pop.left)
                }
                if (pop.right) {
                    queue.pushBack(pop.right)
                }
            }
            if (levelVals.length > 0) {
                res.push(levelVals)
            }
        }

        return res
    }

    dfs(root, arr, depth) {
        if (!root) {
            return
        }
        if (depth >= arr.length) {
            arr.push([])
        }
        
        arr[depth].push(root.val)

        this.dfs(root.left, arr, depth + 1)
        this.dfs(root.right, arr, depth + 1)

        return
    }
}

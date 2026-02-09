// https://neetcode.io/problems/invert-a-binary-tree/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  1. root
 *      - root instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = total nodes
 *  Space: O(h) // h = height
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null: return root
 * 
 *  test cases
 *  1. root only has left child
 *      inputs
 *          root = [1, 2, n, 3, 4]
 *      expected output
 *          [1, n, 2, n, n, 4, 3]
 *  2. root has left and right child
 *      inputs
 *          root = [1, 2, 3, 4, 5, 6, 7]
 *      expected output
 *          [1, 3, 2, 7, 6, 5, 4]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  1. DFS method
 *      Recursive
 *          base case 1:
 *          if root === null:
 *              return null
 * 
 *          swap left and right child
 * 
 *          recursive call to left child
 *          recursive call to right child
 * 
 *          return root
 *      Time: O(n)
 *      Space: O(h)
 * 
 *  2. BFS
 *      Use queue to hold the nodes to process next
 *      
 *      while queue is not empty
 *          curr = dequeue node
 *          swap left and right child
 *          enqueue left
 *          enqueue right
 * 
 *      Time: O(n)
 *      Space: O(h)
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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) {
            return null
        }

        // return this.dfs(root)
        return this.bfs(root)
    }

    bfs(node) {
        const qu = new Deque()
        qu.pushBack(node)

        while (qu.size() > 0) {
            const curr = qu.popFront()
            if (curr === null) {
                continue
            }
            const temp = curr.left
            curr.left = curr.right
            curr.right = temp

            qu.pushBack(curr.left)
            qu.pushBack(curr.right)
        }

        return node
    }

    dfs(node) {
        if (node === null) {
            return null
        }

        const temp = node.left
        node.left = node.right
        node.right = temp

        this.dfs(node.left)
        this.dfs(node.right)

        return node
    }
}

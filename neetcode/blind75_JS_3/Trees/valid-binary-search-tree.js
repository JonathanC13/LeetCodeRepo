// https://neetcode.io/problems/valid-binary-search-tree/question

/**
 * 1. Assumptions
 *  1. All values are unique
 *      If duplicates allowed, ask for which subtree left or right it is placed.
 * 
 * 2. input validation
 *  1. root
 *      - root instanceof TreeNode
 * 
 * 3. time and space constraints
 *  BTTC: O(n)
 *  Space: O(h)
 * 
 * 4. edge cases and some test cases
 *  edges cases
 *  1. if root === null: return true
 * 
 *  test cases
 *  1. valid BST
 *      inputs
 *          root = [1,2,5,n,n,4,8]
 *      expected output
 *          true
 *  2. invalid BST
 *      inputs
 *          root = [1, 2, 3, 4, 5]
 *      expected output
 *          false
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Process every node by checking if its value is within the low and high range set by the parent. If not within range, return false.
 *  For left child the range is (left, curr value) since in BST the nodes on the left are lesser
 *  For right child (curr value, right)
 * 
 * 7. algos
 *  - Binary search tree traversal
 * 
 * 8. data structures
 *  - Binary search tree
 * 
 * 9. complexity
 *  Time: O(n)
 *  Space: (h)
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
     * @return {boolean}
     */
    isValidBST(root) {
        if (root === null) {
            return true
        }

        // return this.dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
        return this.bfs(root)
    }

    bfs(root) {
        const qu = new Deque()
        qu.pushBack([root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY])

        while (qu.size() > 0) {
            const [node, leftLimit, rightLimit] = qu.popFront()
            if (node === null) {
                continue
            }
            if (node.val <= leftLimit || node.val >= rightLimit) {
                return false
            }

            qu.pushBack([node.left, leftLimit, node.val])
            qu.pushBack([node.right, node.val, rightLimit])
        }

        return true
    }

    dfs(node, leftLimit, rightLimit) {
        if (node === null) {
            return true
        }
        if (node.val <= leftLimit || node.val >= rightLimit) {
            return false
        }

        return this.dfs(node.left, leftLimit, node.val) && this.dfs(node.right, node.val, rightLimit)
    }
}

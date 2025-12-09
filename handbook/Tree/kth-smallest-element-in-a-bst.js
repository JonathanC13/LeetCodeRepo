// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

/**
1. Assumption
    1. k <= total nodes in the binary tree

2. input validation
    1. root is a TreeNode and is the root to a valid BST
    2. k is a Number that is <= total nodes in the BST

3. time and space constraints
    BTTC: O(n)
    Space: O(h)

4. edge cases and some test cases
    edge cases
    1. if root === null: return -1
    2. if k === 0: return -1
    test cases
    1. 
        inputs
            root = [3,1,4,null,2], k = 1
        expected output
            1
    2. 
        inputs
            root = [5,3,6,2,4,null,null,1], k = 3
        expected output
            3
    
5. visualize by drawing and manually solve
6. break into subproblems
    maintain global k
    maintain global variable for kth smallest
    BST is inorder traversal

    recursive DFS
        base case 1:
        if root === null: return

        // inorder is left subtree, process current, right subtree
        find(root.left, kth)

        base case 2:
        if (kth[0] === 0) {
            kth smallest already found, return
        }

        // process
        kth[0] -= 1
        if kth[0] === 0
            at the kth smallest (1-indexed, if 0 indexed better to +1 to make it 1-indexed)
            kth[1] = root.val
            return

        find(root.right, kth)

        return

7. algos
    - binary search tree inorder traversal

8. data structures
    - binary search tree

9. complexity
    Time: O(n)
    Space: O(h)
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (root === null || k === 0) {
        return -1
    }

    const kth = [k, -1]

    const find = (root, kth) => {
        if (root === null) {
            return
        }

        find(root.left, kth)

        if (kth[0] === 0) {
            return
        }

        kth[0] -= 1
        if (kth[0] === 0) {
            kth[1] = root.val
            return
        }

        find(root.right, kth)

        return
    }

    find(root, kth)

    return kth[1]
};
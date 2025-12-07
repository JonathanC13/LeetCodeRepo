// https://leetcode.com/problems/subtree-of-another-tree/

/**
1. Assumptions
    1. Binary trees

2. input validation
    1. root and subRoot are TreeNodes.
    2. The Trees are valid binary trees

3. time and space constraints
    BTTC: O(n * m)  // n = nodes in root, m = nodes in subRoot
    Space: O(h) // h = max height(root, subRoot)

4. edge cases and some test cases
    edge cases
    1. if root === null && subRoot === null: return true
    2. if root === null && subRoot !== null: return false
    3. if root !== null && subRoot === null: return true
    test cases
    1. has sub tree
        inputs
            root = [3,4,5,1,2], subRoot = [4,1,2]
        expected output
            true
    2. does not have sub tree
        inputs
            root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
        expected output
            false

5. visualize by drawing and manually solve
6. break into subproblems

    To check if same tree
        recursive DFS

        base case 1:
        if root === null && subRoot === null
            both terminated at same point
            return true

        if (root !== null && subRoot !== null && root.val === subRoot.val) {
            return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
        } else {
            false
        }

    Since looking so same sub tree, need DFS function to start looking for the subtree at each node of root's tree
        if (isSameTree(root, subRoot) === true) {
            return true
        }

        return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot)

7. algos
    - Binary tree DFS

8. data structures
    - Binary tree

9. complexity
    Time: O(n * m)  // n = root's tree nodes, m = subRoot's tree nodes
    Space: O(h) // h = max height(root, subRoot)
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (root === null && subRoot === null) {
        return true
    }
    if (root === null || subRoot === null) {
        return false
    }

    if (isSameTree(root, subRoot) === true) {
        return true
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const isSameTree = (root, subRoot) => {
    if (root === null && subRoot === null) {
        return true
    }

    if (root !== null && subRoot !== null && root.val === subRoot.val) {
        return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
    } else {
        return false
    }
}
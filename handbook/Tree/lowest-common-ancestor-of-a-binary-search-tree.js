// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
1. Assumptions
    1. p and q exsit in the tree. If not, traverse to search for both.
    2. node can be a descendent of itself
    3. p and q are different

2. input validation
    1. Tree is a binary search tree. left child < parent, right child > parent
    2 p and q are TreeNodes

3. time and space constraints
    BTTC: O(log(n)) // since binary search tree is organized
    Space: O(h)

4. edge cases and some test cases
    edge cases
    1. if the root is either p or q
        return root
    test cases
    1. common LCA
        input
            root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
        expected output
            6
    2. p or q is also the LCA
        input
            root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
        expected output
            2

5. visualize by drawing and manually solve
6. break into subproblems
    swap if needed, so that conditions are standardized:
        have p be the lesser value
        and q be the greater value

    traverse the binary search tree
    1. if p or q === current node:
        return node // since q and p can be the LCA
    2. if p and q < current node
        go left
    3. else go right

7. algos
    - Binary search tree search

8. data structures
    - binary search tree

9. complexity
    time: O(log(n))
    space: O(h)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return null
    }

    if (p.val === root.val || q.val === root.val) {
        return root
    }

    if (p.val > q.val) {
        const tmp = p
        p = q
        q = tmp
    }

    if (p.val < root.val && q.val > root.val) {
        return root
    } else if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return lowestCommonAncestor(root.right, p, q)
    }
};
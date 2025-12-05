// https://leetcode.com/problems/same-tree/description/

/**
1. Assumptions
    1. None

2. input validation 
    1. p and q are trees

3. time and space constraints
    BTTC: O(n)  // minimum number of nodes in either p or q
    Space: O(h)

4. edge cases and some test cases
    edge cases
    1. if both p and q are null: return true
    2. if either p or q are null: return false
    test cases
    1. same
        input
            p = [1,2,3], q = [1,2,3]
        expected output
            true
    2. different
        input
            p = [1,2], q = [1,null,2]
        expected output
            false

5. visualize by drawing and manually solve
6. break into subproblems
    recursively traverse to check

    base cases
    1. if p and q === null: retur true

    checking same
    if (p !== null && q !== null && p.val === q.val) {
        return check left is the same && check right is the same
    } else {
        return false
    }

7. algos
    - traverse binary tree

8. data structure
    - binary tree

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true
    }

    if (p !== null && q !== null && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)   // note, if left condition returns false, it will immediately return false for the whole condition
    } else {
        return false
    }
};
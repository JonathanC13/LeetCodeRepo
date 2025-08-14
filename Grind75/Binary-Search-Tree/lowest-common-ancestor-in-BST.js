// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

/**
assigin p and q so that p has the <= value, makes it easier to explore BST

explore tree to check if p exists
explore tree to check if q exists

if both exist
    //search for LCA
    node = root
    while node !== null
        if (p.val < node.val && q.val < node.val)
            node = node.left
        else if (p.val > node.val && q.val > node.val)
            node - node.right
        else
            return node
return null

- Time: O(n)    // n to check if p and q exists. + h for the height to search for LCA
- Space: O(h)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const check = function(node, val) {
    if (node === null) {
        return false
    }
    if (val === node.val) {
        return true
    }

    if (val < node.val) {
        return check(node.left, val)
    } else {
        return check(node.right, val)
    }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (p.val > q.val) {
        const tmp = p
        p = q
        q = tmp
    }

    let pExists = true
    let qExists = true
    // if not guarenteed to exist, need to check
    //pExists = check(root, p.val)
    //qExists = check(root, q.val)

    if (pExists === true && qExists === true) {
        let node = root
        while (node !== null) {
            if (p.val < node.val && q.val < node.val) {
                node = node.left
            } else if (p.val > node.val && q.val > node.val) {
                node = node.right
            } else {
                return node
            }
        }
    }
    return null
};
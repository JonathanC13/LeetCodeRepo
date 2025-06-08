// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

/*
dfs traverse
    base case 1: if node === null: return null

    const left = dfs(left, p, q)   // return is [match in subtree, LCA if found]
    if (LCA !== null) {
        return left
    }

    const right = dfs(right, p, q)
    if (LCA !== null) {
        return right
    }

    const nodeMatch = (node.val === p.val || node.val === q.val)

    if (left[0] === false && right[0] === false) { // no match of p or q in either left and right subtree
        return [nodeMatch, null]    // return if this node is a match to either p or q
    } else if (left[0] && right[0]) {   // a match in left and in right. this node must be the LCA
        return [true, node.val]
    } else if ((left[0] || right[0]) && nodeMatch) {    // a match in either left or right and this node is a match
        return [true, node.val]
    } else {
        return [(left[0] || right[0]), null]
    }

- Time: O(n)
- Space: O(h)


** could solve it faster if want to use the guarentee that p and q exists.
dfs
    base case 1: if node === null or node.val === p.val or node.val === q.val
        return node

    const left = dfs(node.left, p, q)
    const right = dfs(node.right, p, q)

    if (left !== null and right !== null) { // the nodes in the left and right
        return node
    } else if (left || right) { // one of the nodes found in the left or right, and the other branch did not find the other. This means the LCA is the found node since guarenteed both exist
        return left || right    
    } else  // not found in either branch
        return null
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const dfs = (node, p, q) => {
    if (node === null) {
        return [false, null]
    }

    const left = dfs(node.left, p, q)
    if (left[1] !== null) {
        return left
    }

    const right = dfs(node.right, p, q)
    if (right[1] !== null) {
        return right
    }

    const match = (node.val === p.val || node.val === q.val)

    if (left[0] === false && right[0] === false) {
        // console.log('1: ', node.val)
        return [match, null]
    } else if (left[0] && right[0]) {
        // console.log('2: ', node.val)
        return [true, node]
    } else if ((left[0] || right[0]) && match) {
        // console.log('3: ', node.val)
        return [true, node]
    } else {
        return [(left[0] || right[0]), null]
    }
}

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
    const res = dfs(root, p, q)
    console.log(res)
    return res[1]
};
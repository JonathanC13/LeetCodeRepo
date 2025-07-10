// C:\Users\jonhs\Desktop\VS code\pyStuff\prac\LeetCodeRepo\neetcode\leet150_JS\Binary-Tree-General\BST-search-iterator.js

/*
Since complete binary tree
    1. find the lowest level, traverse left subtree to left. Time O(h)
    2. Then find last leaf on the right that is on the lowest level

    nodes from other level up to and incl 2^h - fromRight

- Time: worst: O(n). avg < O(n)
- Space: O(h)

** better, for each subtree check if it is a complete binary tree.
Time: O(log n * log n). log n to traverse the height. * log n times due to since complete binary tree only one of the nodes will trigger the recursion
Space: O(h)

recursive
    if root === null return 0

    height left = 0
    l = root
    while l.left
        height left += 1
        l = l.left

    height right = 0
    while r.right
        height right += 1
        r = r.right

    if l === r:
        return pow(2, hl) - 1

    // if unbalanced, find the nodes in left subtree + nodes in right substree + 1 for this node
    return countNodes(root.left) + countNodes(root.right) + 1
*/

var findLastNode = function(node, currDepth, targetDepth, deduct) {
    if (node === null) {
        return false
    }

    if (currDepth === targetDepth) {
        return true
    }

    const r = findLastNode(node.right, currDepth + 1, targetDepth, deduct)
    if (r === true) {
        return true
    }

    deduct[0] += 1

    const l = findLastNode(node.left, currDepth + 1, targetDepth, deduct)
    if (l === true) {
        return true
    }

    return false

}

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
 * @return {number}
 */
var countNodes = function(root) {
    if (root === null) {
        return 0
    }

    let h = 0
    let nodes = 0
    nodes += Math.pow(2, h)
    let itr = root
    while (itr.left !== null) {
        h += 1
        nodes += Math.pow(2, h)
        itr = itr.left
    }

    const deduct = [0]
    findLastNode(root, 0, h, deduct)

    return nodes - deduct[0]
};
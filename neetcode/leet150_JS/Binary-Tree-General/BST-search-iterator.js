// https://leetcode.com/problems/binary-search-tree-iterator/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Stack so that the iterate points to the top to indicate current node
initially fill stack with left traversal nodes, the top will be the first in the in-order traversal

On next()
    pop = stack.pop()

    if (pop.right !== null) {
        // must push all left nodes onto stack
        r = pop.right
        while (r !== null) {
            stack.push(r)
            r = r.left
        }
    }

    return pop.val
    
    - Time: O(1)
    - Space: O(h)

On hasNext()
    return stack.length > 0

    - Time: O(1)

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
 */
var BSTIterator = function(root) {
    this.dummy = root
    this.stack = new Array()

    let itr = root
    while (itr !== null) {
        this.stack.push(itr)
        itr = itr.left
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this.hasNext()) {
        const pop = this.stack.pop()
        let r = pop.right
        while (r !== null) {
            this.stack.push(r)
            r = r.left
        }
        return pop.val
    } else {
        return null
    }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
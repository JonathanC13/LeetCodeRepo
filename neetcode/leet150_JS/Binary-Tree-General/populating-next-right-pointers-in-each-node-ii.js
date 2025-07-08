// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/?envType=study-plan-v2&envId=top-interview-150

/*
while root !== null
    create tmp to hold a dummy head to start the level linked list
    initialize pointer to tmp as the iterator
    while root !== null
        if root.left !== null
            curr.next = root.left
            curr = root.next

        if root.right !== null
            curr.next = root.right
            curr = root.next

        go to the next node of the previous level since already connected: root = root.next

    move root to the level just finished constructing: root = tmp.next
        
- Time: O(n)    // n = number of nodes
- Space: O(1)

*/

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    const r = root
    while (root !== null) {
        const dummy = new _Node(0)
        let curr = dummy
        while (root !== null) {
            if (root.left !== null) {
                curr.next = root.left
                curr = curr.next
            }

            if (root.right !== null) {
                curr.next = root.right
                curr = curr.next
            }

            root = root.next
        }
        root = dummy.next
    }
    return r
};
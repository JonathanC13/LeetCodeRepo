// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

/**
1. Assumptions
    1. None

2. input validation
    1. root is a TreeNode and is the root of a valid binary tree

3. time and space constraints
    serialize
        BTTC: O(n)
        Space: O(m) // output string

    deserialize
        BTTC: O(n)  
        Space: O(n) 

4. edge cases and some test cases
    edge cases
    1. if root === null: return ""
    test cases
    1.
        input
            root = [1,2,3,null,null,4,5]
        expected output
            tree = [1,2,3,null,null,4,5]

5. visualize by drawing and manually solve
6. break into subproblems
    serialize
        Breadth first traversal into an Array, include the null children
        return Arr.join(',')

    deserialize
        Arr = data.split(',')
        since serialize is in Breadth first, create a Queue to processes in Breadth first
        i = 0   // keep track of which node to create as child of current node being processed.
        root = create node from Arr[0] and enqueue into Queue
        i += 1

        while (qu.size() > 0) {
            const node = qu.dequeue

            if (i < arr.length && arr[i] !== 'null') {
                left = new TreeNode(arr[i])
                node.left = left
                qu.enqueue(left)
            }
            i += 1
            if (i < arr.length && arr[i] !== 'null') {
                right = new TreeNode(arr[i])
                node.right = right
                qu.enqueue(right)
            }
            i += 1
        }

        return root

7. algos
    - Breadth first traversal of binary tree

8. data structures
    - binary tree

9. complexity
    serialize
        Time: O(n)
        Space: O(m)
    deserialize
        Time: O(n)
        Space: O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) {
        return ""
    }

    const res = new Array()
    const qu = new Deque()
    qu.pushBack(root)

    while (qu.size() > 0) {
        const node = qu.popFront()

        if (node === null) {
            res.push('n')
        } else {
            res.push(node.val.toString())
            qu.pushBack(node.left)
            qu.pushBack(node.right)
        }
    }
    
    return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length === 0) {
        return null
    }

    const arr = data.split(',')

    const qu = new Deque()
    const root = new TreeNode(Number(arr[0]))
    qu.pushBack(root)
    let i = 1

    while (qu.size() > 0) {
        const node = qu.popFront()

        if (i < arr.length && arr[i] !== 'n') {
            const left = new TreeNode(Number(arr[i]))
            node.left = left
            qu.pushBack(left)
        }
        i += 1

        if (i < arr.length && arr[i] !== 'n') {
            const right = new TreeNode(Number(arr[i])) 
            node.right = right
            qu.pushBack(right)
        }
        i += 1
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
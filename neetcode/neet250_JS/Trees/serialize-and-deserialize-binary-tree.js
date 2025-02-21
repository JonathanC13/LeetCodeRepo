// https://neetcode.io/problems/serialize-and-deserialize-binary-tree

/*

serialize
    traverse BFS and save the nulls. e.g. 1,null,3

deserialize
    convert string to array
    create index i for array

    get first value from array. if null, return null
    root = new node
    enqueue root

    while (qu size > 0) {
        pop node

        if (i < array.length) {
            if (arr[i] !== null) {
                node.left = new Node(arr[i])
                enqueue(node.left)
            }
        }
        i += 1

        if (i < array.length) {
            if (arr[i] !== null) {
                node.right = new Node(arr[i])
                enqueue(node.right)
            }
        }
        i += 1
    }

    return root

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (root === null) {
            return ''
        }
        const serial = []
        const qu = new Deque()
        qu.pushBack(root)

        while (qu.size() > 0) {
            const node = qu.popFront()
            
            if (node === null) {
                serial.push('null')
                continue
            }
            
            serial.push(node.val)

            qu.pushBack(node.left)
            qu.pushBack(node.right)
        }
        
        return serial.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data === '') {
            return null
        }
        
        const vals = data.split(',')

        if (vals[0] === 'null') {
            return null
        }

        let i = 0

        const qu = new Deque()
        const root = new TreeNode(vals[i])
        i += 1
        qu.pushBack(root)

        while (qu.size() > 0) {
            const node = qu.popFront()

            if (i < vals.length && vals[i] !== 'null') {
                node.left = new TreeNode(vals[i])
                qu.pushBack(node.left)
            }
            i += 1

            if (i < vals.length && vals[i] !== 'null') {
                node.right = new TreeNode(vals[i])
                qu.pushBack(node.right)
            }
            i += 1
        }

        return root
    }
}

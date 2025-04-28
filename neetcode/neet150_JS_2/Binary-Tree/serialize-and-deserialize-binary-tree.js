// https://neetcode.io/problems/serialize-and-deserialize-binary-tree

/*
serialize in preorder and include the nulls

- Time: O(n)
- Space: O(n)
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
            return 'n'
        }

        const res = new Array()
        this.preorder(root, res)
        const str = res.join(',')
        console.log(str)
        return str
    }

    preorder(node, res) {
        if (node === null) {
            res.push('n')
            return
        }

        res.push(node.val)
        this.preorder(node.left, res)
        this.preorder(node.right, res)

        return
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arrData = data.split(',')
        console.log(arrData)

        const idx = [0]
        return this.fromPreorder(arrData, idx)

    }

    fromPreorder(arr, i) {
        if (i[0] >= arr.length || arr[i[0]] === 'n') {
            i[0] += 1
            return null
        }

        const newNode = new TreeNode(arr[i[0]])
        i[0] += 1
        newNode.left = this.fromPreorder(arr, i)
        newNode.right = this.fromPreorder(arr, i)

        return newNode
    }
}

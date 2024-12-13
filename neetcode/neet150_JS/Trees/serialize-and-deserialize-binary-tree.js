// https://neetcode.io/problems/serialize-and-deserialize-binary-tree

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

    DFSserial(node, serialArr) {
        if (node === null) {
            serialArr.push('N')
            return
        }

        serialArr.push(node.val)

        this.DFSserial(node.left, serialArr)
        this.DFSserial(node.right, serialArr)
    }

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
        const serialArr = []

        this.DFSserial(root, serialArr)

        return serialArr.join(',')
    }

    DFSdeserial(serialArr, serialIdx) {
        if (serialArr[serialIdx[0]] === 'N') {
            serialIdx[0] += 1
            return null
        }
        
        const newNode = new TreeNode(serialArr[serialIdx[0]])
        serialIdx[0] += 1

        newNode.left = this.DFSdeserial(serialArr, serialIdx)
        newNode.right = this.DFSdeserial(serialArr, serialIdx)

        return newNode
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data.length === 0) {
            return null
        }
        console.log(data)

        const serialArr = data.split(',')
        const serialIdx = [0]

        return this.DFSdeserial(serialArr, serialIdx)
    }
}

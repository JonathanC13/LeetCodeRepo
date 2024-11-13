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
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */

    //bfs
    serialize(root) {
        if (root === null) {
            return ''
        }

        const result = []
        const qu = [root]
        

        while (qu.length) {
            const node = qu.shift()
            if (node === null) {
                result.push('')
                continue
            }
            result.push(node.val)
            qu.push(node.left)
            qu.push(node.right)
        }

        return result.join(',')
    }

    // dfs
    // serialize(root) {
    //     const result = []
    //     this.dfsSerialize(root, result)
    //     console.log(result.join())
    //     return result.join()
    // }

    // dfsSerialize(node, result) {
    //     if (node === null) {
    //         result.push('')
    //         return
    //     }

    //     // post order so that when iterating, you know the root of the tree, subtree in order from left to right
    //     result.push(node.val)
    //     this.dfsSerialize(node.left, result)
    //     this.dfsSerialize(node.right, result)

    //     return
    // }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */

    // BFS
    deserialize(data) {
        if (data.length === 0) {
            return null
        }

        const dataArr = data.split(',')
        let i = 1
        const root = new TreeNode(dataArr[0])
        const qu = [root]

        while (qu.length) {
            const node = qu.shift()

            if (dataArr[i] !== '') {
                node.left = new TreeNode(dataArr[i])
                qu.push(node.left)
            }
            i += 1
            if (dataArr[i] !== '') {
                node.right = new TreeNode(dataArr[i])
                qu.push(node.right)
            }
            i += 1
        }

        return root
        
    }

    // dfs
    // deserialize(data) {
    //     if (data.length === 0) {
    //         return null
    //     }
    //     const dataArr = data.split(',')
    //     console.log(dataArr)
    //     const idx = [0]
    //     return this.dfs(dataArr, idx)
    // }

    // dfs(dataArr, idx) {
    //     if (idx[0] >= dataArr.length || dataArr[idx[0]] === '') {
    //         idx[0] += 1
    //         return null
    //     }
        
    //     const node = new TreeNode(dataArr[idx[0]])
    //     idx[0] += 1
    //     node.left = this.dfs(dataArr, idx)
    //     node.right = this.dfs(dataArr, idx)

    //     return node
    // }
}

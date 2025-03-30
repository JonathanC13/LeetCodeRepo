// https://neetcode.io/problems/serialize-and-deserialize-binary-tree

/*
serialize
    if (!root) {return ''}
    
    encode preorder with the Nulls to indicate ends

    - Time: O(n)    // 2 * n
    - Space: O(n)

deserialize
    if (data === '') {return null}

    build preorder

    return root

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
        if (!root) {
            return ''
        }

        /*
        // doesn't work with non-unique values
        const inorder = []
        const preorder = []
        this.inorderPreorderRec(root, inorder, preorder)

        console.log(inorder.join(',') + '#' + preorder.join(','))
        return inorder.join(',') + '#' + preorder.join(',')
        */

        const preorder = []
        this.dfsSerialize(root, preorder)
        return preorder.join(',')
    }

    dfsSerialize(root, preorder) {
        if (!root) {
            preorder.push('N')
            return
        }

        preorder.push(root.val)
        this.dfsSerialize(root.left, preorder)
        this.dfsSerialize(root.right, preorder)
        return
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
        
        /*
        // doesn't work with non-unique values
        const inorder = data.split('#')[0].split(',')
        const preorder = data.split('#')[1].split(',')
        console.log(inorder)
        console.log(preorder)
        return this.buildTree(preorder, inorder) 
        */

        const preorder = data.split(',')
        const i = [0]
        return this.buildTreePreorder(preorder, i)
    }

    buildTreePreorder(preorder, i) {
        if (i[0] >= preorder.length || preorder[i[0]] === 'N') {
            return null
        }

        const newNode = new TreeNode(preorder[i[0]])
        i[0] += 1
        newNode.left = this.buildTreePreorder(preorder, i)
        i[0] += 1
        newNode.right = this.buildTreePreorder(preorder, i)
        return newNode
    }

    inorderPreorderRec(root, inorder, preorder) {
        if (!root) {
            return null
        }

        preorder.push(root.val)
        this.inorderPreorderRec(root.left, inorder, preorder)
        inorder.push(root.val)
        this.inorderPreorderRec(root.right, inorder, preorder)

        return
    }

    buildTree(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0) {
            return null
        }

        const newNode = new TreeNode(preorder[0])
        const mid = inorder.findIndex((v) => v === preorder[0])

        newNode.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
        newNode.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

        return newNode
    }
}

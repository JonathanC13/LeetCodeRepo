// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

/*
serialize
    traverse the tree in level order and include the nulls

    - Time: O(n)
    - Space: O(n)

deserialize
    convert the serialized String to Array
    if (Array[0] === null) {
        return null
    }

    create a queue for the nodes that need to be processed, in this case the processing is linking its children
    root = new TreeNode(Array[0])
    i = 1

    while (qu.length > 0) {
        const node = qu.popFront()

        if (i < Array.length) {
            if (Array[i] !== null)
                left = new TreeNode(Array[i])
                pop.left = left
                qu.pushBack(left)
            i += 1
        }

        if (i < Array.length) {
            if (Array[i] !== null)
                right = new TreeNode(Array[i])
                pop.right = right
                qu.pushBack(right)
            i += 1
        }
    }

    return root

    - Time: O(n)
    - Space: O(n)

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
    const ser = new Array()

    const qu = new Deque()
    qu.pushBack(root)

    while (qu.size() > 0) {
        const pop = qu.popFront()
        
        if (pop === null) {
            ser.push('n')
        } else {
            ser.push(pop.val)

            qu.pushBack(pop.left)
            qu.pushBack(pop.right)
        }
    }
    
    return ser.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split(',')
    if (arr.length === 0 || arr[0] === 'n') {
        return null
    }

    const qu = new Deque()
    const root = new TreeNode(Number(arr[0]))
    qu.pushBack(root)
    let i = 1

    while (qu.size() > 0) {
        const pop = qu.popFront()
        
        if (i < arr.length) {
            if (arr[i] !== 'n') {
                console.log(arr[i])
                const left = new TreeNode(Number(arr[i]))
                console.log(arr[i])
                pop.left = left
                qu.pushBack(left)
            }
            i += 1
        }

        if (i < arr.length) {
            if (arr[i] !== 'n') {
                const right = new TreeNode(Number(arr[i]))
                pop.right = right
                qu.pushBack(right)
            }
            i += 1
        }
    }

    return root

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
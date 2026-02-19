// https://neetcode.io/problems/serialize-and-deserialize-binary-tree/question

/**
 * 1. Assumptions
 *  1. None
 * 
 * 2. input validation
 *  serialize
 *      1. root
 *          - root instanceof TreeNode
 *  deserialize
 *      1. data
 *          - typeof data === 'string'
 * 
 * 3. time and space constraints
 *  serialize
 *      BTTC: O(n)
 *      Space: O(n)
 *  deserialize
 *      BTTC: O(n)
 *      Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if root === null
 *      deserialized is root = null
 * 
 *  test cases
 *  1. complete binary tree
 *      inputs
 *          root = [1,2,3,4,5,n,n]
 *      expected output
 *          root = [1,2,3,4,5,n,n]
 *  2. levels have nulls
 *      inputs
 *          root = [1,2,3,n,4,n,5]
 *      expected output
 *          root = [1,2,3,n,4,n,5]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  serialize into Array of level traversal of the Tree, then convert to String
 * 
 *  deserialize
 *      convert data to Array
 * 
 *      queue for node that needs to assigned children
 *      create root node and enqueue
 *      i = 0
 *      while (i < arr.length && qu.size() > 0)
 *          curr = dequeue
 *          create left node from arr[i]
 *          curr.left = left node
 *          enqueue left node
 *          i += 1
 * 
 *          if (i < arr.length)
 *              create right node from arr[i]
 *              curr.right = right node
 *              enqueue right node
 *              i += 1
 * 
 *      if (i != arr.length)
 *          console.log(invalid data)
 *          return null
 *          
 *      return root
 * 
 * 7. algos
 *  - level traversal of Binary tree
 * 
 * 8. data structures
 *  - binary tree
 * 
 * 9. complexity
 *  Serialize and deserialize
 *      Time: O(n)
 *      Space: O(n)
 * 
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

        const arr = new Array()
        const qu = new Deque()
        qu.pushBack(root)
        while (qu.size() > 0) {
            const curr = qu.popFront()
            if (curr === null) {
                arr.push('n')
                continue
            } else {
                arr.push(curr.val)
                qu.pushBack(curr.left)
                qu.pushBack(curr.right)
            }
        }

        return arr.join(',')
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

        const arr = data.split(',')
        const qu = new Deque()
        let i = 0
        const root = new TreeNode(arr[i])
        i += 1
        qu.pushBack(root)

        while (i < arr.length && qu.size() > 0) {
            const curr = qu.popFront()
            if (arr[i] !== 'n') {
                const left = new TreeNode(Number(arr[i]))
                curr.left = left
                qu.pushBack(left)
            }
            i += 1

            if (arr[i] !== 'n') {
                const right = new TreeNode(Number(arr[i]))
                curr.right = right
                qu.pushBack(right)
            }
            i += 1
        }

        if (i != arr.length) {
            console.log('invalid data')
            return null
        }
        return root
    }
}

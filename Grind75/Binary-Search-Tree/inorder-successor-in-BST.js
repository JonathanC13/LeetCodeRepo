/**
 * Given a BST, and a reference to a Node k in the BST. Find the Inorder Successor of the given node in the BST. If there is no successor, return -1. 
 * 
 * e.g.
 * Input: root = [2, 1, 3], k = 2
 *    2
 *  /   \
 * 1     3
 * Output: 3 
 * Explanation: Inorder traversal : 1 2 3 Hence, inorder successor of 2 is 3
 * 
 * two scenarios, once traverse to desired node:
 * 1. if node has a right subtree. go to node.right and then traverse to most left child
 * 2. if no right subtree, the inorder successor is the right bound parent of this node
 * 
 * - Time: O(h)
 * - Space: O(1)
 */

/**
 * 
 * @param {TreeNode} root 
 * @param {TreeNode} targetNodeRef 
 * @returns {TreeNode}
 */
const findInorderSuccessor = (root, targetNodeRef) => {
    if (root === null) {
        return -1
    }

    let rightBoundParent = -1
    let itr = root

    while (itr !== null) {
        if (itr === targetNodeRef) {
            if (itr.right !== null) {
                // has right subtree, therefore successor is the left most node in right subtree.
                itr = itr.right
                while (itr.left !== null) {
                    itr = itr.left
                }
                return itr
            } else {
                // does not have right subtree, therefore successor is the right bound parent of this node
                return rightBoundParent
            }
        } else if (targetNodeRef.val < itr.val) {
            rightBoundParent = itr
            itr = itr.left
        } else {
            itr = itr.right
        }
    }
    return -1
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const constructBST = (nums, nodeMap) => {
    if (nums.length === 0) {
        return null
    }

    const mid = Math.floor((nums.length - 1 - 0) / 2) + 0
    const newNode = new TreeNode(nums[mid])
    nodeMap.set(nums[mid], newNode)

    newNode.left = constructBST(nums.slice(0, mid), nodeMap)
    newNode.right = constructBST(nums.slice(mid + 1), nodeMap)

    return newNode
}

let nums = [4, 7, 10, 12, 14, 20, 22]
let nodeMap = new Map()
let root = constructBST(nums, nodeMap)
let res = findInorderSuccessor(root, nodeMap.get(10))
console.log(res)
console.log('--')

nodeMap = new Map()
nums = [1, 2, 3]
root = constructBST(nums, nodeMap)
res = findInorderSuccessor(root, nodeMap.get(1)) 
console.log(res)
console.log('--')

res = findInorderSuccessor(root, nodeMap.get(3)) 
console.log(res)
console.log('--')

return
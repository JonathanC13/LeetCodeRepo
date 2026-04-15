// https://neetcode.io/problems/copy-linked-list-with-random-pointer/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  - head instanceof Node
 * 
 * 3. time and space constraints
 *  BTTC: O(n)  // n = number of nodes
 *  Space: O(n)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. if head === null: return head
 * 
 *  test cases
 *  1. a next and random pointed to a node that has been copied
 *      inputs
 *          list = [[1,2],[2,0]]
 *      expected output
 *          [[1,2],[2,0]]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  Since the next and random could link to a node already copied, maintain a Map:
 *      key = original node ref
 *      val = copied node ref
 * 
 *  dfs traverse original
 *      if node === null: return null
 *      if node already copied, return copied node
 * 
 *      copy the node and add to Map
 *      newNode.next = rec(node.next)
 *      newNode.random = rec(node.random)
 * 
 *      return newNode
 */

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) {
            return null
        }

        const copied = new Map()
        return this.dfs(head, copied)
    }

    dfs(node, copied) {
        if (node === null) {
            return null
        }
        if (copied.has(node)) {
            return copied.get(node)
        }

        const newNode = new Node(node.val)
        copied.set(node, newNode)
        newNode.next = this.dfs(node.next, copied)
        newNode.random = this.dfs(node.random, copied)

        return newNode
    }
}

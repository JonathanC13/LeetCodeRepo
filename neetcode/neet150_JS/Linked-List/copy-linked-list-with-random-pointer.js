// https://neetcode.io/problems/copy-linked-list-with-random-pointer

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
        const map = new Map()

        return this.copy(head, map)
    }

    copy(node, map) {
        if (node === null) {
            return null
        }
        if (map.has(node)) {
            return map.get(node)
        }

        const newNode = new Node(node.val)
        map.set(node, newNode)

        newNode.next = this.copy(node.next, map)
        newNode.random = this.copy(node.random, map)

        return newNode
    }
}

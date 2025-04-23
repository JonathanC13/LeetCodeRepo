// https://neetcode.io/problems/copy-linked-list-with-random-pointer

/*
edge case 1: if head === null: return head

create a Map to store:
    key: old Node
    val: created copy

recursively traverse the children (next, random)
    base case 1:
        if node === null:
            return nulll

    base case 2:
        if map has old Node
            return the created copy

    create the copy
    assigin into the map: oldNode: newNode

    assign newNode.next = recur(oldNode.next, map)
    assign newNode.random = recur(oldNode.random, map)

    return newNode

- Time: O(n)
- Space: O(n)
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
            return head
        }

        const map = new Map()

        return this.recur(head, map)
    }

    recur(node, map) {
        if (node === null) {
            return null
        }
        if (map.has(node)) {
            return map.get(node)
        }

        const newNode = new Node(node.val)
        map.set(node, newNode)

        newNode.next = this.recur(node.next, map)
        newNode.random = this.recur(node.random, map)

        return newNode
    }
}

// https://neetcode.io/problems/copy-linked-list-with-random-pointer

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

/*
Deep copy means every node is newly created

recursive solution because we would like to backtrack to assign a created node to a next/random that we previously encountered.

create a Map for the new Nodes. key = reference to original node, val = reference to new node

* DFS(node, Map)
    if node === null: return null

    if (Map.has(node)) {
        return Map.get(node)
    }

    create the new node = new ListNode(node.val)
    Map.set(node, newNode)

    assign the next and random
    newNode.next = this.DFS(node.next, Map)
    newNode.random = this.DFS(random.next, Map)

    return newNode

return DFS(head, Map)

- Time: O(n). n is the number of nodes
- Space: O(n). create n nodes on the recursive stack. + n for the nodes in the Map


*/

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) {
            return head
        }

        const nodeMap = new Map()

        const dfs = (node) => {
            if (node === null) {
                return null
            }
            if (nodeMap.has(node)) {
                return nodeMap.get(node)
            }

            const newNode = new Node(node.val)
            nodeMap.set(node, newNode)

            newNode.next = dfs(node.next)
            newNode.random = dfs(node.random)

            return newNode
        }

        return dfs(head)
    }
}

// https://neetcode.io/problems/lru-cache

/*
Use a doubly linked list for the LRU, we will have a Node for the head and a Node for the tail.
LRU
* Since using doubly linked, doesn't matter if least recent at end or beginning.
1. PUT: push the new to the front of the linked list, since it is the most recent
2. PUT: if item exists, update it and put to front of the linked list
3. PUT: if full and new item, remove the last item, since it is the stalest
4. GET: if item exists, must move to head 

Use for LRU for a cache is the idea that the most recently used will be used in the near future. 
E.x. results from a database that is more frequently queried.

For O(1) Time for get and put, maintain a Map for the the Nodes, key = key, value = Node reference, so node referenced directly for list modification.

*/

class ListNode {
    constructor(key = 0, val = 0, prev = null, next = null) {
        this.key = key
        this.val = val
        this.prev = prev
        this.next = next
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.size = 0
        this.nodes = new Map()

        this.head = new ListNode()
        this.tail = new ListNode()

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.nodes.has(key)) {
            const node = this.nodes.get(key)

            this.remove(node)
            this.addToFront(node)

            return node.val
        } else {
            return -1
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.nodes.has(key)) {
            const node = this.nodes.get(key)
            node.val = value

            this.remove(node)
            this.addToFront(node)
        } else {
            const node = new ListNode(key, value)
            this.nodes.set(key, node)

            if (this.size > 0 && this.size >= this.capacity) {
                const removed = this.tail.prev
                this.nodes.delete(removed.key)

                this.remove(removed)
            }

            this.addToFront(node)
        }
    }

    remove(node) {
        this.size -= 1
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    addToFront(node) {
        this.size += 1
        node.next = this.head.next
        this.head.next.prev = node

        this.head.next = node
        node.prev = this.head
    }
}

// https://neetcode.io/problems/lru-cache

/*
Use a doubly linked list for the LRU, we will have a Node for the head and a Node for the tail.
LRU
1. PUT: push the new to the front of the linked list, since it is the most recent
2. PUT: if item exists, update it and put to front of the linked list
3. PUT: if full and new item, remove the last item, since it is the stalest
4. GET: if item exists, must move to head 

Use for LRU for a cache is the idea that the most recently used will be used in the near future. E.x. results from a database that is more frequently queried.


*/
/*
Use a doubly linked list for the LRU, we will have a Node for the head and a Node for the tail.
LRU
1. PUT: push the new to the front of the linked list, since it is the most recent
2. PUT: if item exists, update it and put to front of the linked list
3. PUT: if full and new item, remove the last item, since it is the stalest
4. GET: if item exists, must move to head 

Use for LRU for a cache is the idea that the most recently used will be used in the near future. E.x. results from a database that is more frequently queried.

For O(1) for get and put, maintain a Map for the the Nodes, key = key, value = Node reference

*/

class Node {
    constructor(key, value = 0, next = null, prev = null) {
        this.key = key
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.head = new Node(null)
        this.tail = new Node(null)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.map = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // this.printCache('get', key, -1)
        // iterate the linked list from the head
        if (this.map.has(key)) {
            this.insert(this.map.get(key))

            return this.map.get(key).value
        }
        
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // if the key exists
        if (this.map.has(key)) {
            this.map.get(key).value = value

            this.insert(this.map.get(key))
            return
        }

        if (this.isFull()) {
            // remove the least recently used, the end Node
            this.map.delete(this.tail.prev.key)
            this.remove(this.tail.prev)
        }

        // insert
        const newNode = new Node(key, value, this.head.next, this.head)
        this.head.next = newNode
        newNode.next.prev = newNode
        this.map.set(key, newNode)
        
        // this.printCache('put', key, value)
        return
    }

    remove(node) {
        const last = this.tail.prev
        this.tail.prev = last.prev
        last.prev.next = this.tail

        last.prev = null
        last.next = null

        return
    }

    insert(node) {
        node.prev.next = node.next
        node.next.prev = node.prev

        node.next = this.head.next
        node.prev = this.head

        this.head.next = node
        node.next.prev = node
    }

    printCache(op, key, val) {
        let itr = this.head
        const cache = []
        while (itr) {
            cache.push([itr.key, itr.value])
            itr = itr.next
        }
        console.log(op, key, val, " ", cache)
        return
    }

    empty() {
        return this.map.size === 0
    }

    isFull() {
        return this.map.size === this.capacity
    }
}

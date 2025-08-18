// https://leetcode.com/problems/lru-cache/description/

/**
constructor
    create a doubly linked list so that the head and tail can be accessed in Time: O(1)
    create a head dummy node where the .next references the head, most recently used.
    create a tail dummy node where the .prev references the tail, least recently used.
    create a Map to hold the:
        key: key
        value: node (contains the value)
        * This is required so that function "get" has a Time: O(1)

    - Time: O(1)
    - Space: O(1)   // O(capacity)

func get
    if map does not have key
        return -1
    
    remove key's node from the linked list
    place node at the head.next as the most recently used.

    - Time: O(1)
    - Space: O(1)

func put
    node = null
    if (map does not have key)
        if current size >= capacity
            remove the node referenced at tail.prev
            this.size -= 1

        node = new Node(val)
        this.size += 1
    else
        node = map.get(key)
        update node's value
        remove the node from the linked list

    place node at the head.next as the most recently used.

    - Time: O(1)
    - Space: O(1)

 */

class Node {
    constructor(key = 0, val = 0, next = null, prev = null) {
        this.key = key
        this.val = val
        this.next = next
        this.prev = prev
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.size = 0
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head

    this.map = new Map()
};

LRUCache.prototype.remove = (node) => {
    if (node === this.head || node === this.tail) {
        return
    }
    node.prev.next = node.next
    node.next.prev = node.prev

    node.next = null
    node.prev = null
}

LRUCache.prototype.addToMost = function(node) {
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) {
        return -1
    }
    const node = this.map.get(key)
    this.remove(node)
    this.addToMost(node)

    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = null
    if (!this.map.has(key)) {
        if (this.size >= this.capacity) {
            const least = this.tail.prev
            this.remove(least)
            this.size -= 1
            this.map.delete(least.key)
        }
        node = new Node(key, value)
        this.map.set(key, node)
        this.size += 1
    } else {
        node = this.map.get(key)
        node.val = value
        this.remove(node)
    }

    this.addToMost(node)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
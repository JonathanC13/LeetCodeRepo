// https://leetcode.com/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a doubly linked list with dummy nodes on each end to allow faster access for adding and removing.
    Set the front as Most recent and tail as least recent
create a var to hold the current size of the list
create a var to hold the capacity of the list
create a Map for element look up for current keys
    key: val
    val: node ref

- Constructor
    - Space: O(cap)

- get
    - Time: O(1)    // O(1) for look up since use Map, O(1) to insert to new position if necessary
    - Space: O(1)

- put
    - Time: O(1)
    - Space: O(1)
*/

class Node {
    constructor(key = 0, val = 0, prev = null, next = null) {
        this.key = key
        this.val = val
        this.prev = prev
        this.next = next
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.size = 0
    this.keyMap = new Map()
    this.head = new Node(0)
    this.tail = new Node(0, this.head, null)
    this.head.next = this.tail
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.size === 0 || !this.keyMap.has(key)) {
        return -1
    }

    // connect the prev and next of the node
    const node = this.keyMap.get(key)
    node.prev.next = node.next
    node.next.prev = node.prev

    // since most recent, put to front
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
    node.prev = this.head

    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.keyMap.has(key)) {
        this.keyMap.get(key).val = value
        this.get(key)   // update position
        return null
    }

    if (this.size >= this.capacity) {
        this.size -= 1
        // remove least recent. At tail
        const rem = this.tail.prev
        this.keyMap.delete(rem.key)

        rem.prev.next = rem.next
        this.tail.prev = rem.prev
    }

    if (this.size < this.capacity) {
        this.size += 1
        node = new Node(key, value)
        this.keyMap.set(key, node)

        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
        node.prev = this.head

        return null
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
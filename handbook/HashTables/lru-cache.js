// https://leetcode.com/problems/lru-cache/

/**
LRU (least recently used cache) properties
- declare the left is the most recently used and the right the least recently used
- when an existing key accessed/updated or new key added, this key is moved to the most left as the most recently used
    - if adding, current size === capacity, evict the most right, least recently used

1. Assumptions
    - None

2. Input validation
    LRUCache
        - capacity
            - typeof capacity === 'Number'
            - length: N/A
            - content: capacity is a Number

    get
        - key
            - typeof key === 'Number'
            - length: N/A
            - content: key is a Number

    put
        - key
            - typeof key === 'Number'
            - length: N/A
            - content: key is a Number
        value
            - typeof value === 'Number'
            - length: N/A
            - content: value is a Number
            
3. Time/space constraints
    Functions get and put require time complexity of O(1)
    Space: Any

4. edge cases and some test cases
    edge cases
    1. N/A
    test cases
    1. init capacity = 2, get non existent key, put key-val 1, put key-val 2, get key 1, put key-val 3, put key-val 1
        expected
        1. init cap = 2
        2. return -1
        3. datastructure contains key-val 1
        4. datastructure: key-val 2 <-> key-val 1
        5. key-val 1 <-> key-val 2
        6. key-val 3 <-> key-val 1
        7. key-val 1 updated <-> key-val 3

5. visualize by drawing and manually solve
6. break into subproblems
    Need to keep track of where the most recently used is (to insert when new added or existing accessed/updated) and the least recently used to evict when at capacity and new is to be added. A doubly linked list is used with a aux node at front and back.
    For the nodes of the linked list, create a Class for the node: contains key, value, prev, next
    For Time O(1) for get and put, store the key, node reference into a Map for O(1) access

7. algos
    - doubly linked list traversal
    - Hash table access

8. Data structures
    - hash table (Map)
    - Doubly linked list

9. Complexity
    - Time: O(1) for get and put
    - Space: O(cap)

 */

class node {
    constructor(key, value, prev = null, next = null) {
        this.key = key
        this.value = value
        this.prev = prev
        this.next = next
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0
    this.capacity = capacity
    this.most = new node(-1, 0)
    this.least = new node(-1, 0, this.most)
    this.most.next = this.least
    this.keyMap = new Map()
};

LRUCache.prototype.appendToMost = function(nodeRef) {
    // hook the nodeRef first
    nodeRef.prev = this.most
    nodeRef.next = this.most.next

    // re-assign prev and next to itself
    this.most.next = nodeRef
    nodeRef.next.prev = nodeRef
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.keyMap.has(key)) {
        return -1
    }

    const nodeRef = this.keyMap.get(key)
    // remove this node from position
    nodeRef.prev.next = nodeRef.next
    nodeRef.next.prev = nodeRef.prev

    // move to most recently used position
    this.appendToMost(nodeRef)
    // this.iterateCache()
    return nodeRef.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let nodeRef = null
    // if update
    if (this.keyMap.has(key)) {
        nodeRef = this.keyMap.get(key)
        nodeRef.value = value
        
        // remove from position
        nodeRef.prev.next = nodeRef.next
        nodeRef.next.prev = nodeRef.prev
    } else if (this.least.prev !== this.head && this.size === this.capacity) {
        // need to remove least recently used
        const nodeEvict = this.least.prev
        nodeEvict.prev.next = nodeEvict.next
        nodeEvict.next.prev = nodeEvict.prev
        // disconnect for garbage collection
        nodeEvict.prev = null
        nodeEvict.next = null
        this.keyMap.delete(nodeEvict.key)

        // new node
        nodeRef = new node(key, value)
        this.keyMap.set(key, nodeRef)
    } else {
        // new node
        nodeRef = new node(key, value)
        this.keyMap.set(key, nodeRef)
        this.size += 1
    }

    this.appendToMost(nodeRef)
};

LRUCache.prototype.iterateCache = function() {
    let itr = this.most
    let str = ''
    while (itr !== null) {
        str += itr.key + ':' + itr.value + ", "
        itr = itr.next
    }
    console.log(str)
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
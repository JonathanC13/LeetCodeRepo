// https://leetcode.com/problems/lfu-cache/

/*
For O(1), need a Map to access the Nodes directly.

LFU
1. PUT New keys are added to the end of the linked list because newly used so 'least frequently' already
2. PUT if key exists, increment frequency and check toward head if more frequent than ones ahead. If tie, since the current is most recently used it moves up
3. PUT if full, remove from tail remove from tail
4. GET: if exists, increment frequency and check toward head if more frequent than ones ahead. If tie, since the current is most recently used it moves up

Create a Map to store the key = frequency and value = linked list of items that have the freq. front is most recently used



*/

class Node {
    constructor(key, value = 0, next = null, prev = null) {
        this.key = key
        this.value = value
        this.next = next
        this.prev = prev
        this.frequency = 1
    }

    incFreq() {
        this.frequency += 1
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null)
        this.tail = new Node(null)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.size = 0
    }

    addToFront(node) {
        node.next = this.head.next
        node.prev = this.head

        this.head.next = node
        node.next.prev = node

        this.size += 1
    }

    removeNode(node) {
        if (this.size === 0) {
            return
        }
        node.prev.next = node.next
        node.next.prev = node.prev
        node.next = null
        node.prev = null
        this.size -= 1
    }

    removeLast() {
        if (this.size === 0) {
            return
        }
        this.removeNode(this.tail.prev)
    }

    getLast() {
        if (this.size === 0) {
            return null
        }
        return this.tail.prev
    }

    getAllKeys() {
        let itr = this.head
        const res = []
        while (itr) {
            res.push(itr.key)
            itr = itr.next
        }

        return res
    }
}


/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity
    this.keyMap = new Map()
    this.freqMap = new Map()
    this.currMin = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (this.keyMap.has(key)) {
        const node = this.keyMap.get(key)
        this.updateFreq(node)
        // this.printFreqMap()
        return node.value
    }

    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.keyMap.get(key)) {
        const node = this.keyMap.get(key)
        node.value = value
        this.updateFreq(node)
        // this.printFreqMap()
        return
    }

    if (this.keyMap.size >= this.capacity) {
        // remove the least and recently used
        const node = this.freqMap.get(this.currMin).getLast()
        this.freqMap.get(this.currMin).removeLast()
        this.keyMap.delete(node.key)
    }

    // brand new
    const newNode = new Node(key, value)
    this.keyMap.set(key, newNode)
    if (!this.freqMap.get(1)) {
        this.freqMap.set(1, new DoublyLinkedList)
    }
    this.freqMap.get(1).addToFront(newNode)

    this.currMin = 1
    // this.printFreqMap()
};

LFUCache.prototype.updateFreq = function(node) {
    const freq = node.frequency

    // remove from current frequency list
    this.freqMap.get(freq).removeNode(node)
    if (this.freqMap.get(freq).size === 0 && freq === this.currMin) {
        this.currMin = freq + 1
    }

    node.frequency += 1
    // add to new frequency list
    if (!this.freqMap.get(node.frequency)) {
        this.freqMap.set(node.frequency, new DoublyLinkedList)
    }
    this.freqMap.get(node.frequency).addToFront(node)
}

LFUCache.prototype.printFreqMap = function() {
    const res = []
    for (let [key, list] of this.freqMap.entries()) {
        res.push([key, list.getAllKeys()])
    }
    console.log(res)
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
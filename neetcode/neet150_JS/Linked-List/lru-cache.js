// https://neetcode.io/problems/lru-cache

class Node {
    constructor(key, val, prev=null, next=null) {
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
        this.cap = capacity
        this.cache = new Map()
        this.least = new Node(0, 0)
        this.most = new Node(0, 0)

        this.least.next = this.most
        this.most.prev = this.least
    }

    // UTIL
    /** 
     * Insert the node into the cache. Since LRU, into the right (left of node 'most')
     * @param {Node} node
     * @return {void}
     */
    insert(node) {
        const previous = this.most.prev

        node.next = this.most
        this.most.prev = node

        previous.next = node
        node.prev = previous
    }

    /**
     * Remove node from cache. Since LRU, the least recent is removed (right of node 'least')
     * @params {Node} node
     * @return {void}
     */
    remove(node) {
        const previous = node.prev
        const next = node.next

        previous.next = next
        next.prev = previous
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)
            this.remove(node)
            this.insert(node)
            return node.val
        }

        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key))
        }

        const node = new Node(key, value)
        this.insert(node)
        this.cache.set(key, node)

        if (this.cache.size > this.cap) {
            const remNode = this.least.next
            this.remove(remNode)
            this.cache.delete(remNode.key)
        }
    }
}

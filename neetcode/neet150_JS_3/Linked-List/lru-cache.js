// https://neetcode.io/problems/lru-cache/question

/**
 * 1. Assumptions
 *  1. ...
 * 
 * 2. input validation
 *  1. constructor
 *      1. capacity
 *          - typeof capacity === 'number'
 *          - capacity >= 0
 *  2. get(key)
 *      1. key
 *          - typeof key === 'number'
 *  3. put(key, value)
 *      1. key and value
 *          - typeof key === 'number'
 * 
 * 3. time and space constraints
 *  Space: O(n)
 *  1. get
 *      BTTC: O(1)
 *  2. put
 *      BTTC: O(1)
 * 
 * 4. edge cases and some test cases
 *  edge cases
 *  1. get(key not in cache)
 *      return -1
 * 
 *  test cases
 *  1. get key from end (LRU) of cache, then put
 *      inputs
 *          ['init', [2], put, [1,10], put, [2,20], get, [1], put, [3,30], get, [1]]
 *      expected output
 *          [null, null, null, 10, null, 10]
 *          end cache is front -> [1,10], [3,30]
 * 
 * 5. visualize by drawing and manually solve
 * 6. break into subproblems
 *  overhead
 *      Uses a doubly linked list for the cache, need reference to prev and next nodes since directly accessing node, need to reassign prev and next
 *      current size
 *      capacity
 *      Map for node reference in cache for O(1) get.
 *          key: key
 *          value: node reference
 *      front of cache
 *      back of cache (LRU)
 * 
 *  get(key)
 *      if exist get node ref from Map
 *      disconnect from current position and reassign to front.next
 *      return val
 * 
 *  put(key, val)
 *      if exists get node ref from Map
 *          update node.val = val
 *          disconnect from current position
 *      else
 *          create node
 * 
 *          if size === capacity
 *              remove node from end (LRU)
 * 
 *      assign node to front
 * 
 * 7. algos
 *  - LRU
 * 
 * 8. data structures
 *  - Doubly Linked lists
 * 
 * 9. complexity
 *  overall
 *      Time: O(1)
 *      Space: O(n)
 */

class ListNode {
    constructor(key = null, val = null, next = null, prev = null) {
        this.key = key
        this.val = val
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
        this.size = 0
        this.nodes = new Map()
        
        this.front = new ListNode()
        this.back = new ListNode(0,0,null,this.front)
        this.front.next = this.back 
    }

    insertAfter(after, node) {
        node.prev = after
        node.next = after.next

        after.next.prev = node
        after.next = node
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.nodes.has(key)) {
            return -1
        }

        const node = this.nodes.get(key)
        // since most recently used, disconnect and place at front
        // disconnect
        node.prev.next = node.next
        node.next.prev = node.prev

        // insert at front
        this.insertAfter(this.front, node)

        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = null
        if (this.nodes.has(key)) {
            node = this.nodes.get(key)

            // disconnect
            node.prev.next = node.next
            node.next.prev = node.prev
            node.val = value
        } else {
            // create
            node = new ListNode(key, value)
            this.nodes.set(key, node)
            this.size += 1
            if (this.size > this.capacity) {
                // remove node at back (LRU)
                const last = this.back.prev
                last.prev.next = this.back
                this.back.prev = last.prev

                // set no ref for garbage collection
                this.nodes.delete(last.key)
                last.prev = null
                last.next = null

                this.size -= 1
            }
        }

        this.insertAfter(this.front, node)
    }
}

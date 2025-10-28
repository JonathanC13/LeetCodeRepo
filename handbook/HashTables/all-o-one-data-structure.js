// https://leetcode.com/problems/all-oone-data-structure/

/** 
1. Assumptions
    1. None

2. input validation
    1. typeof key === 'String'

3. time/space constraints
    Each function must run average Time: O(1)

4. edge cases and some test cases
    edge cases
    1. getMaxKey() called when empty. Expected: ""
    2. getMinKey() called when empty. Expected: ""
    test cases
    1. 
        Inputs
            ops = ["AllOne","inc","inc","getMaxKey","getMinKey","inc","getMaxKey","getMinKey"]
            pars = [[],["hello"],["hello"],[],[],["leet"],[],[]]
        Output
            [null, null, null, "hello", "hello", null, "hello", "leet"]

5. visualize by drawing and manually solve
6. break into subproblems
    For functions inc(key) and dec(key), to achieve average Time O(1), create a Map with key: key, value: node reference
        The node reference is the node in a doubly linked list which has the attributes; key, count, prev, next.
        Get the node reference with the parameter "key" and then increment/decrement the count then for inc(key) look forward while higher count then swap into or for dec(key) backward for lower count

    For function getMaxKey(). return tail.prev.key
    For function getMinKey(). return head.next.key

7. algos
    - Hashing
    - traversing doubly linked list

8. datastructures
    - doubly Linked list
    - Hash table

9. complexity
    Time: O(1) average for all functions
    Space: O(n + m) // n = unique Strings in Map, m = max nodes in doubly linked list
 */

class Node {
    constructor(key, count, prev = null, next = null) {
        this.key = key
        this.count = count
        this.prev = prev
        this.next = next
    }
}

var AllOne = function() {
    this.map = new Map()

    this.low = new Node(-1, 0)
    this.high = new Node(-1, 0, this.low)
    this.low.next = this.high
};

// disconnect
AllOne.prototype.disconnect = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev

    node.prev = null
    node.next = null
}

// insertBefore
AllOne.prototype.insertBefore = function(node, nextNode) {
    if (node === nextNode) {
        return
    }
    node.prev = nextNode.prev
    node.next = nextNode

    node.prev.next = node
    node.next.prev = node
}

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    // console.log('inc', key)
    // this.iterateLL(this.low)
    let node = null
    if (this.map.has(key)) {
        node = this.map.get(key)
    } else {
        node = new Node(key, 0)
        // insert at this.low.next
        this.insertBefore(node, this.low.next)
        
        this.map.set(key, node)
    }
    node.count += 1

    // look forward while current node's count > itr node's count then swap into
    let itr = node.next
    while (itr !== this.high && node.count > itr.count) {
        itr = itr.next
    }

    this.disconnect(node)
    this.insertBefore(node, itr)
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    // console.log('inc', key)
    // this.iterateLL(this.low)
    let node = null
    if (this.map.has(key)) {
        node = this.map.get(key)
    } else {
        return  // problem states that the dec key will always exist. Just quit if does not.
    }

    node.count -= 1
    if (node.count === 0) {
        this.disconnect(node)
        this.map.delete(key)
    } else {
        // look backward while current node's count < itr node's count
        let itr = node.prev
        while (itr !== this.low && node.count < itr.count) {
            itr = itr.prev
        }

        this.disconnect(node)
        this.insertBefore(node, itr.next)
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    // console.log('max')
    // this.iterateLL(this.low)
    if (this.low.next === this.high) {
        return ""
    }
    return this.high.prev.key
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    // console.log('min')
    // this.iterateLL(this.low)
    if (this.low.next === this.high) {
        return ""
    }
    return this.low.next.key
};

AllOne.prototype.iterateLL = function(head) {
    let itr = head
    let str = ''
    while (itr !== null) {
        str += `${itr.key}:${itr.count}, `
        itr = itr.next
    }
    console.log(str)
}

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// https://leetcode.com/problems/design-circular-queue/description/

/**
- Doubly linked list solution, not really circular.
head node and tail node.
    Time: O(1)
    Space: O(k)
 */

class ListNode {
    constructor(val = null, prev = null, next = null) {
        this.val = val
        this.prev = prev
        this.next = next
    }
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = new ListNode(-1)
    this.tail = new ListNode(-1, this.head)
    this.head.next = this.tail
    this.cap = k
    this.size = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false
    } else {
        const node = new ListNode(value)
        node.prev = this.tail.prev
        node.next = this.tail
        node.prev.next = node
        node.next.prev = node

        this.size += 1
        return true
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false
    } else {
        node = this.head.next
        node.next.prev = this.head
        node.prev.next = node.next

        node.prev = null
        node.next = null

        this.size -= 1
        return true
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1
    }
    return this.head.next.val
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1
    }
    return this.tail.prev.val
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head.next === this.tail
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.cap
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
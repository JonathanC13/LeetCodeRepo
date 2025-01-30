// https://leetcode.com/problems/design-circular-queue/

/*
Use a linked list for the circular queue.
Maintain a pointer to the beginning and end of the queue.

Front()
    if (queue is not emtpy) 
        return value at dummy.next.val
    else:
        return -1
    
    O(1)

Rear()
    if (queue is not emtpy) 
        return value at tail.val
    else:
        return -1
    
    O(1)

enQueue(value)
    add to tail.next
    O(1)

deQueue()
    remove from head
    O(1)
*/

class Node {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = new Node(0)
    this.tail = this.head
    this.size = 0
    this.capacity = k
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false
    } else {
        this.tail.next = new Node(value)
        this.tail = this.tail.next
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
        const front = this.head.next
        this.head.next = front.next
        front.next = null
        
        this.size -= 1

        if(this.isEmpty()) {
            this.tail = this.head
        }
        return true
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (!this.isEmpty()) {
        return this.head.next.value
    } else {
        return -1
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (!this.isEmpty()) {
        return this.tail.value
    } else {
        return -1
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.capacity === this.size
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



//==========
/*
Use a linked list for the circular queue.
Better to use a doubly linked list. One head node and one tail node.

Front()
    if (queue is not emtpy) 
        return value at dummy.next.val
    else:
        return -1
    
    O(1)

Rear()
    if (queue is not emtpy) 
        return value at tail.val
    else:
        return -1
    
    O(1)

enQueue(value)
    add to tail.next
    O(1)

deQueue()
    remove from head
    O(1)
*/

class Node {
    constructor(value = 0, prev = null, next = null) {
        this.value = value
        this.prev
        this.next = next
    }
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = new Node(0)
    this.tail = new Node(0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
    this.capacity = k
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false
    } else {
        const newNode = new Node(value, this.tail.prev, this.tail)
        
        this.tail.prev.next = newNode
        this.tail.prev = newNode

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
        const front = this.head.next
        this.head.next = front.next
        front.next.prev = this.head

        front.next = null
        front.prev = null
        
        this.size -= 1
        return true
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (!this.isEmpty()) {
        return this.head.next.value
    } else {
        return -1
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (!this.isEmpty()) {
        return this.tail.prev.value
    } else {
        return -1
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.capacity === this.size
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
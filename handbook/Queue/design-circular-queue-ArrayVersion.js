// https://leetcode.com/problems/design-circular-queue/description/

/**

- Could solve with doubly linked list solution, but it would not be circular!
head node and tail node.
    Time: O(1)
    Space: O(k)

- Array solution
1. Assumptions
    1. k > 0

2. input validation
    MyCircularQueue(k)
        k is a Number

    enQueue(value)
        value is a Number

3. time and space constraints
    MyCircularQueue(k)
        Space: O(k)

    Front()
        BTTC: O(1)
        Space: O(1)
    
    Rear()
        BTTC: O(1)
        Space: O(1)

    enQueue(int value)
        BTTC: O(1)
        Space: O(1)
    
    deQueue()
        BTTC: O(1)
        Space: O(1)

    isEmpty()
        BTTC: O(1)
        Space: O(1)

    isFull()
        BTTC: O(1)
        Space: O(1)

4 edge cases and some test cases
    edge cases
    1. if k <= 0
        all functions return false
    2. if no elements and enqueue
        head and tail must be the same after enqueue
    3. if one element in queue and dequeue
        head and tail must be the same after dequeue
    test cases
    1.
        inputs
            ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
            [[3], [1], [2], [3], [4], [], [], [], [4], []]
        expected output
            [null, true, true, true, false, 3, true, true, true, 4]

5. visualize by drawing and manually solve
6. break into subproblems
    Since static size. Use an Array for the queue with pointers for head and tail

    enQueue(val)
        if isFull() === true
            return false
        else if isEmpty()
            qu[tail] = value
            return true
        else
            tail = (tail + 1) % k   // since need to wrap circularly
            qu[tail] = val
            return true

    deQueue()
        if (isEmpty() === true)
            return false
        else
            qu[head] = null
            if (head === tail) {
                tail = (tail + 1) % k
            }
            head = (head + 1) % k
            return true

    isEmpty()
        return (head === tail && qu[head] === null)

    isFull()
        return (tail + 1) % k === head && qu[head] !== null

7. algos
    - Queue operations

8. Data structures
    - Queue
    - Array

9. complexity
    MyCircularQueue(k)
        Space: O(k)

    Front()
        BTTC: O(1)
        Space: O(1)
    
    Rear()
        BTTC: O(1)
        Space: O(1)

    enQueue(int value)
        BTTC: O(1)
        Space: O(1)
    
    deQueue()
        BTTC: O(1)
        Space: O(1)

    isEmpty()
        BTTC: O(1)
        Space: O(1)

    isFull()
        BTTC: O(1)
        Space: O(1)
 */

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.k = k
    this.qu = new Array(k).fill(null)
    this.head = 0
    this.tail = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    // console.log(this.qu, this.head, this.tail)
    if (this.isFull()) {
        return false
    } else if (this.isEmpty()) {
        this.qu[this.tail] = value
        return true
    } else {
        this.tail = (this.tail + 1) % this.k
        this.qu[this.tail] = value
        return true
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    // console.log(this.qu, this.head, this.tail)
    if (this.isEmpty()) {
        return false
    } else {
        this.qu[this.head] = null
        if (this.head === this.tail) {
            this.tail = (this.tail + 1) % this.k
        }
        this.head = (this.head + 1) % this.k
        return true
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    // console.log(this.qu, this.head, this.tail)
    if (this.isEmpty()) {
        return -1
    } else {
        return this.qu[this.head]
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1
    } else {
        return this.qu[this.tail]
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head === this.tail && this.qu[this.head] === null
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.tail + 1) % this.k === this.head && this.qu[this.head] !== null
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
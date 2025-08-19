// https://leetcode.com/problems/implement-queue-using-stacks/description/

/**
constructor
    1st stack: to hold all values
    2nd stack: auxilary to fill with values in opposite order of 1st Stack to get to front of queue
    create a var to hold the current value at the front of the queue, this will reduce the time complexity when only requesting peek.

func push
    push onto 1st Stack
    if (1stStack.length === 1) {
        this.top = x
    }

    - Time: O(1)

func pop
    if (this.empty()) {
        return null
    }

    // transfer 1st stack values into 2nd stack to get to the front of the queue
    while (1stStack.length > 1) {
        popped = 1stStack.pop()
        2ndStack.push(popped)
    }
    // front of queue val
    dequeued = 1stStack.pop()

    // new front of queue
    if (2ndStack.length > 0) {
        this.top = 2ndStack[2ndStack.length - 1]
    } else {
        this.top = null
    }

    // put back values into 1st Stack
    while (2ndStack.length > 0) {
        1stStack.push(2ndStack.pop())
    }

    - Time: O(n)    // 2*n

func peek
    return this.top

    - Time: O(1)

func empty
    return 1stStack.length === 0 ? true : false

 */

var MyQueue = function() {
    this.mainStack = new Array()
    this.auxStack = new Array()
    this.top = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.mainStack.push(x)
    if (this.mainStack.length === 1) {
        this.top = x
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.empty()) {
        return null
    }

    while (this.mainStack.length > 1) {
        this.auxStack.push(this.mainStack.pop())
    }

    const dequeued = this.mainStack.pop()
    if (this.auxStack.length > 0) {
        this.top = this.auxStack[this.auxStack.length - 1]
    }

    while (this.auxStack.length > 0) {
        this.mainStack.push(this.auxStack.pop())
    }

    return dequeued
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.top
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.mainStack.length === 0 ? true : false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
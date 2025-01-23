// https://leetcode.com/problems/implement-stack-using-queues/

/*
A queue underlying is just an Array
Create 1 queue

1. To get a Stack push operation with Queue operations:
    - get the current number of elements in qu
    - push from back x into the qu
    - from 0 to < current number of elements, pop from front and push to back
        - this will maintain the Stack's top at the front of the queue

    Time: O(n)

2. pop the top of the stack with Queue operations
    - remove from front of queue

    Time: O(1)

3. top of the stack
    - return qu peek front. qu[0]

    Time: O(1)
*/

var MyStack = function() {
    this.qu = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const quLen = this.qu.length

    this.qu.push(x)
    for (let i = 0; i < quLen; i ++) {
        this.qu.push(this.qu.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.empty()) {
        return null
    }

    return this.qu.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.qu[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.qu.length === 0? true : false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
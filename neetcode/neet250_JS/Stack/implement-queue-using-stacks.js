// https://leetcode.com/problems/implement-queue-using-stacks/

/*
Use an Array for the Stack
create 2 Stacks
s1 for the main queue
s2 for auxilary for re-order

1. push
    - if s1 is not empty: pop from top (array end) and push into s1 (array end)
    - push to top of s1
    - from s2, push on top 

    - This will maintain the queue order of FIFO. Pushing the most recent added to the bottom of the stack

    Time: O(n)

2. pop queue
    - pop from top of Stack s1

    Time: O(1)

3. peek
    - Value at top of Stack s1

    Time: O(1)

4. empty:
    is s1 is empty

*/

var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const s1Len = this.s1.length
    for (let i = s1Len - 1; i >= 0; i --) {
        this.s2.push(this.s1.pop())
    }

    this.s1.push(x)

    const s2Len = this.s2.length
    for (let i = s2Len - 1; i >= 0; i --) {
        this.s1.push(this.s2.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.s1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.s1[this.s1.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 ? true : false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
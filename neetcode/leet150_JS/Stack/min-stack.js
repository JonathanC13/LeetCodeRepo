// https://leetcode.com/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150

/*
create a Stack using an Array. This is for the normal Stack.
create a Stack that maintains the minimum value of the Stack at each index of the normal Stack.

- Space: O(n)   // 2 * n ~= n

- func push
    push onto Normal Stack
    if val < minStack top: push val; else push minStack top

    - Time: O(1)
    - Space: O(1)

- func pop
    pop from normal Stack
    pop from min Stack

    - Time: O(1)
    - Space: O(1)

- func top
    return normal stack top

    - Time: O(1)
    - Space: O(1)

- getMin
    return min stack top

    - Time: O(1)
    - Space: O(1)
*/

var MinStack = function() {
    this.stack = new Array()
    this.minStack = new Array()
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)

    if (this.minStack.length > 0 && this.minStack[this.minStack.length - 1] < val) {
        this.minStack.push(this.minStack[this.minStack.length - 1])
    } else {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop()
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
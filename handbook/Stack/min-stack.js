// https://leetcode.com/problems/min-stack/

/**
1. Assumptions
    1. None

2. input validation
    1. push(val)
        val is a Number

3. time and space constraints
    MinStack()
        Space: O(n) // 2 * n. 2 stacks; 1. main, 2. min stack

    push(val)
        BTTC: O(1)
        Space: O(1) // constant space added

    pop()
        BTTC: O(1)

    top()
        BTTC: O(1)

    getMin()
        BTTC: O(1)

4. edge cases and some test cases
    edge cases
    1. if stack is empty, top and pop return null
    test cases
    1. 
        inputs
            [MinStack, push, push, top, getMin, push, top, getMin, pop, pop, top, getMin]
            [null, 1, 2, null, null, 0, null, null, null, null, null, null]

        expected output
            [null, null, null, 2, 1, null, 0, 0, null, null, 1, 1]

5. visualize by drawing and solve manually
6. break into subproblems
    Maintain a stack for the values push and popped 
    Maintian a min stack where:
        When push(val)
            if the val > minStack.top()
                minStack.push(minStack.top())   since the minimum from this index downward the stack is still this value
            else
                minStack.push(val)  since the min value from this index downward the stack is this value
        When pop
            pop both stack and minStack

7. algos
    - Stack operations

8. data structures
    - dynamic Arrays

9. complexity
    MinStack()
        Space: O(n) // 2 * n. 2 stacks; 1. main, 2. min stack

    push(val)
        BTTC: O(1)
        Space: O(1) // constant space added

    pop()
        BTTC: O(1)

    top()
        BTTC: O(1)

    getMin()
        BTTC: O(1)
 */

var MinStack = function() {
    this.stk = new Array()
    this.minStk = new Array()
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stk.push(val)
    if (val > this.minStk[this.minStk.length - 1]) {
        this.minStk.push(this.minStk[this.minStk.length - 1])
    } else {
        this.minStk.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stk.pop()
    this.minStk.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk[this.stk.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStk[this.minStk.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
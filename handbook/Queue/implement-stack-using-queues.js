//  https://leetcode.com/problems/implement-stack-using-queues/description/

/**
1. Assumptions
    1. Only can use Queue operations: push to back, peek/pop front, size, and isEmpty

2. Input validation
    1. x is a Number

3. time and space constraints
    MyStack
        Space: O(n) // max size of Stack

    push
        BTTC: O(n)  // need to organize Queue is stack order
        Space: O(1)

    pop
        BTTC: O(1)  // since queue organized as Stack, the pop should be O(1)
        Space: O(1)
    
    top
        BTTC: O(1)
        Space: O(1)

    empty
        BTTC: O(1)
        Space: O(1)

4. edge cases and some test cases
    edge cases
    1. peek/pop when queue length is 0
        return -1
    test cases
    1. 
        Input operations
            ["MyStack", "push", "push", "pop", "top", "empty"]
            [[], [1], [2], [], [], []]
        expected output
            [null, null, null, 2, 1, false]

5. visualize by drawing and manually solve
6. break into subproblems
    Use a Deque for the Queue so have access to O(1) access for front element removal

    push(x)
        to maintain element order for Stack
        len = get current length of queue
        enqueue x to end of queue
        for the len, pop the front of the queue and enqueue to back. This puts x to the front for Last in First out.

    pop/top
        if queue not empty return front

    empty
        if queue length === 0: return true

7. Algos
    - Queue operations

8. Data structures
    - Queue

9. complexity
    MyStack
        Space: O(n) // max size of Stack

    push
        BTTC: O(n)  // need to organize Queue is stack order
        Space: O(1)

    pop
        BTTC: O(1)  // since queue organized as Stack, the pop should be O(1)
        Space: O(1)
    
    top
        BTTC: O(1)
        Space: O(1)

    empty
        BTTC: O(1)
        Space: O(1)
 */


var MyStack = function() {
    this.qu = new Deque()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let len = this.qu.size()
    this.qu.pushBack(x)
    while (len > 0) {
        this.qu.pushBack(this.qu.popFront())
        len -= 1
    }

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.empty()) {
        return -1
    } else {
        return this.qu.popFront()
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (this.empty()) {
        return -1
    } else {
        return this.qu.front()
    }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.qu.size() > 0 ? false : true
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
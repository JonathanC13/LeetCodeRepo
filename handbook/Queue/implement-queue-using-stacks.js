// https://leetcode.com/problems/implement-queue-using-stacks/description/

/**
1. Assumptions
    1. None

2. Input validation
    push
        1. x is a Number
    
3. time and space constraints
    myQueue
        Space: O(n) // n total elements in "queue". The 2 stacks hold total n values
    
    push(x)
        BTTC: O(n)  // 2 * n, to move existing elements to aux stack then back

    pop()
        BTTC: O(1)

    peek()
        BTTC: O(1)

    empty()
        BTTC: O(1)

4. edge cases and some test cases
    edge cases
    1. pop and peek return -1 if empty
    test cases
    1.
        input
            ["MyQueue", "push", "push", "peek", "pop", "empty", peek]
            [[], [1], [2], [], [], [], []]
        expected output
            [null, null, null, 1, 1, false, 2]

5. visualize by drawing and manually solve
6. break into subproblems
    main focus is to keep stack stk in "queue" order of First in First out.
    A second stack called aux is used to reorder

    push(x)
        For the current elements of stk, they are ordered in FIFO to represent the queue. 
        For the new element to be enqueued to the end:
        1. pop every element from stk and push onto aux so that in aux the elements are reversed.
        2. push the new element into stk
        3. pop every element from aux and push onto stk, so the reversed in aux return to original order in stk.

7. Algo
    - Stack operations

8. Data structures
    - Stacks

9. complexities
    myQueue
        Space: O(n) // n total elements in "queue". The 2 stacks hold total n values
    
    push(x)
        BTTC: O(n)  // 2 * n, to move existing elements to aux stack then back

    pop()
        BTTC: O(1)

    peek()
        BTTC: O(1)

    empty()
        BTTC: O(1)
 */


var MyQueue = function() {
    this.stk = new Array()
    this.aux = new Array()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.stk.length > 0) {
        this.aux.push(this.stk.pop())
    }
    this.stk.push(x)
    while (this.aux.length > 0) {
        this.stk.push(this.aux.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.empty()) {
        return -1
    }

    return this.stk.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.empty()) {
        return -1
    }
    return this.stk[this.stk.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.stk.length === 0) {
        return true
    } else {
        return false
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
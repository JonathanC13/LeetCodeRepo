// https://neetcode.io/problems/minimum-stack

/*
For the normal Stack, use an Array
For the min Stack, use an Array

1. push
    - push val into stack
    - if the val is < top value of min stack, push val into min stack, else push min stack top value into the min stack
        This will maintain the min value at each index of the normal stack

    Time: O(1)

2. pop
    - remove the top value from the stack and min stack

    Time: O(1)

3. top
    - return the top of the stack

    Time: O(1)

4. getMin
    - return the top of the min stack

    Time: O(1)

*/

class MinStack {
    constructor() {
        this.stack = Array()
        this.minStack = Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)

        if (this.minStack !== 0 && this.minStack[this.minStack.length - 1] < val) {
            this.minStack.push(this.minStack[this.minStack.length - 1])
        } else {
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

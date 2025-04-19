// https://neetcode.io/problems/minimum-stack

/*
create a Deque for the main Stack
create a minStack to hold the min value. The index represents the min value for all elements that are in the stack below it.

Class MinStack
    - Space: O(n)   // n = the max stored at one time.

Push
    - Time: O(1)
    - Space: O(1)

Pop
    - Time: O(1)
    - Space: O(1)

Top
    - Time: O(1)
    - Space: O(1)

get min
    - Time: O(1)
    - Space: O(1)

*/

class MinStack {
    constructor() {
        this.stack = new Deque()
        this.minStack = new Deque()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.pushBack(val)

        if (this.minStack.size() === 0 || val < this.minStack.back()) {
            this.minStack.pushBack(val)
        } else {
            this.minStack.pushBack(this.minStack.back())
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.popBack()
        this.minStack.popBack()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.back()
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.back()
    }
}

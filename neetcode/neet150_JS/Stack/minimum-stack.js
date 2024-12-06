// https://neetcode.io/problems/minimum-stack

class MinStack {
    constructor() {
        this.stack = new Array()
        this.minStack = new Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        
        val = Math.min(val, (this.minStack.length === 0) ? val : this.minStack[this.minStack.length - 1])
        this.minStack.push(val)
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
        return (this.stack.length) ? this.stack[this.stack.length - 1] : null
    }

    /**
     * @return {number}
     */
    getMin() {
        return (this.minStack.length) ? this.minStack[this.minStack.length - 1] : null
    }
}

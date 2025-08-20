// https://leetcode.com/problems/min-stack/description/

/**
constructor
    create mainStack
    create minStack where each index holds the min value of all the below indexes in the mainStack

func push
    mainStack.push(val)
    
    // to maintain the minStack
    if (minStackTop < val)
        // push this value since it is still the min of all the index values of mainStack
        minStack.push(minStack.top())
    else
        minStack.push(val)
    
    - Time: O(1)

func pop
    mainStack.pop()
    minStack.pop()

    - Time: O(1)
    
func top
    return mainStack.top

func getMin
    return minStack.top
 */


var MinStack = function() {
    this.mainStack = new Array()
    this.minStack = new Array()
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.mainStack.push(val)

    if (this.minStack[this.minStack.length - 1] < val) {
        this.minStack.push(this.minStack[this.minStack.length - 1])
    } else {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.mainStack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.mainStack[this.mainStack.length - 1]
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
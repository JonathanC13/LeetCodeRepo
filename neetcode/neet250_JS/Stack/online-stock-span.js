// https://leetcode.com/problems/online-stock-span/description/

/*
Since looking at the most recent prices, need Last in first out structure to track. Use a stack

initialize the Stack with an Array
the element stored in the stack is [the price, the number of prev days that were <= current price]

when next price added:
    span = 1
    while stack.length > 0 && stack top is <= price
        span += stack.pop()[1]  // get the span of the popped price because it will include the span of its <= prices from previous days
    
    stack.push([price, span])
    return span

Time: O(n)
Space: O(n)

*/
var StockSpanner = function() {
    this.stack = Array()
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1

    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1]
    } 

    this.stack.push([price, span])
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
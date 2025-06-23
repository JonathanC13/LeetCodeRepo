// https://leetcode.com/problems/online-stock-span/description/?envType=study-plan-v2&envId=leetcode-75

/*
create a stack to store:
    [price, span]

funct next
    let span = 1
    while stack is not empty and price >= stack top price
        pop
        span += pop['span']

    push([price, span])
    return span

- Time: O(n)
- Space: O(m)   // max length of stack it ever grows to 
*/


var StockSpanner = function() {
    this.stack = new Array()    
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    
    let span = 1
    while (this.stack.length > 0 && price >= this.stack[this.stack.length - 1][0]) {
        const pop = this.stack.pop()
        span += pop[1]
    }

    this.stack.push([price, span])
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */